import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const base = process.env.HQRS_BASE_URL || 'http://127.0.0.1:4173';
const route = 'prototypes/altitude-original-20/';
const out = path.resolve('prototypes/renders/altitude-original-20');
await mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 982 }, deviceScaleFactor: 1 });
const failures = [];

await page.goto(`${base}/${route}`, { waitUntil: 'networkidle' });
const count = await page.locator('.slide').count();

for (let index = 1; index <= count; index += 1) {
  await page.goto(`${base}/${route}#${index}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(80);
  const slide = page.locator('.slide.is-current');
  await slide.screenshot({ path: path.join(out, `slide-${String(index).padStart(2, '0')}.png`) });
  const audit = await slide.evaluate((root) => {
    const bounds = root.getBoundingClientRect();
    const visible = (el) => {
      const style = getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0 && !el.closest('.speaker-note');
    };
    const overflow = [...root.querySelectorAll('*')].filter(visible).filter((el) => {
      const rect = el.getBoundingClientRect();
      return rect.left < bounds.left - 2 || rect.top < bounds.top - 2 || rect.right > bounds.right + 2 || rect.bottom > bounds.bottom + 2;
    }).map((el) => `${el.tagName.toLowerCase()}.${el.className}`);
    const brokenImages = [...root.querySelectorAll('img')].filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.getAttribute('src'));
    const important = [...root.querySelectorAll('h1,h2,blockquote,.definition-copy,.ehr-lines p,.level p,.result-label strong,.result-label span,.bar b,.bar span,.observation-foot')];
    const smallText = important.filter(visible).filter((el) => parseFloat(getComputedStyle(el).fontSize) < 18).map((el) => `${el.tagName.toLowerCase()}.${el.className}:${getComputedStyle(el).fontSize}`);
    return { overflow, brokenImages, smallText };
  });
  if (audit.overflow.length || audit.brokenImages.length || audit.smallText.length) failures.push({ slide: index, ...audit });
}

await browser.close();
console.log(`Altitude Blue original-slide study: ${count} slides rendered`);
if (count !== 20) failures.push({ count, expected: 20 });
if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exitCode = 1;
} else {
  console.log('QA: 20/20, no overflow, broken images, or important text below 18px');
}
