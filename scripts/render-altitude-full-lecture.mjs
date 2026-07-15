import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const base = process.env.HQRS_BASE_URL || 'http://127.0.0.1:4173';
const route = 'prototypes/altitude-full-lecture/';
const out = path.resolve('prototypes/renders/altitude-full-lecture/slides');
await mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 982 }, deviceScaleFactor: 1 });
const consoleErrors = [];
page.on('pageerror', error => consoleErrors.push(error.message));
page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
await page.goto(`${base}/${route}`, { waitUntil: 'networkidle' });
await page.locator('[data-mode="all"]').click();
const sourcePages = await page.evaluate(() => window.FULL_LECTURE_MAP.map(item => item.sourcePage));
const failures = [];

for (const sourcePage of sourcePages) {
  await page.evaluate(next => { location.hash = String(next); }, sourcePage);
  await page.waitForFunction(next => document.querySelector('[data-position]')?.textContent.includes(`p.${next}`), sourcePage);
  await page.waitForFunction(() => [...document.querySelectorAll('.slide img')].every(image => image.complete && image.naturalWidth > 0));
  const current = page.locator('.slide');
  const audit = await current.evaluate(root => {
    const bounds = root.getBoundingClientRect();
    const visible = element => {
      const style = getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0;
    };
    const overflow = [...root.querySelectorAll('*')].filter(visible).filter(element => {
      if (element.classList.contains('terrain')) return false;
      const rect = element.getBoundingClientRect();
      return rect.left < bounds.left - 2 || rect.top < bounds.top - 2 || rect.right > bounds.right + 2 || rect.bottom > bounds.bottom + 2;
    }).map(element => `${element.tagName.toLowerCase()}.${element.className}`);
    const brokenImages = [...root.querySelectorAll('img')].filter(image => !image.complete || image.naturalWidth === 0).map(image => image.src);
    const important = [...root.querySelectorAll('.native-title,.support,.definition-treatment h1,.ladder-level h2,.ladder-level p,.result-label strong,.result-label span,.bar b,.bar span,.metric-note,.observation-foot')];
    const smallText = important.filter(visible).filter(element => parseFloat(getComputedStyle(element).fontSize) < 18).map(element => `${element.tagName.toLowerCase()}.${element.className}:${getComputedStyle(element).fontSize}`);
    return { overflow, brokenImages, smallText };
  });
  if (audit.overflow.length || audit.brokenImages.length || audit.smallText.length) failures.push({ sourcePage, ...audit });
  await current.screenshot({ path: path.join(out, `slide-${String(sourcePage).padStart(3, '0')}.jpg`), type: 'jpeg', quality: 78 });
  if (sourcePage % 50 === 0) console.log(`rendered ${sourcePage}/361`);
}

const report = { rendered: sourcePages.length, expected: 361, failures, consoleErrors };
await writeFile(path.resolve('prototypes/renders/altitude-full-lecture/qa.json'), JSON.stringify(report, null, 2));
await browser.close();
console.log(`Altitude full lecture: ${sourcePages.length} slides rendered`);
if (sourcePages.length !== 361 || failures.length || consoleErrors.length) {
  console.error(JSON.stringify(report, null, 2));
  process.exitCode = 1;
} else {
  console.log('QA: 361/361, no overflow, broken images, console errors, or audited teaching text below 18px');
}
