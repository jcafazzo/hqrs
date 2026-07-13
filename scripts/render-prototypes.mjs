import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const base = process.env.HQRS_BASE_URL || 'http://127.0.0.1:4173';
const decks = [
  ['forensic-thread', 'prototypes/forensic-thread/'],
  ['museum-designed-error', 'prototypes/museum-designed-error/'],
  ['systems-theatre', 'prototypes/systems-theatre/']
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 982 }, deviceScaleFactor: 1 });
const failures = [];

for (const [name, route] of decks) {
  const out = path.resolve('prototypes/renders', name);
  await mkdir(out, { recursive: true });
  await page.goto(`${base}/${route}`, { waitUntil: 'networkidle' });
  const count = await page.locator('.slide').count();
  for (let index = 1; index <= count; index += 1) {
    await page.goto(`${base}/${route}#${index}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(80);
    const slide = page.locator('.slide.is-current');
    await slide.screenshot({ path: path.join(out, `slide-${String(index).padStart(2, '0')}.png`) });
    const audit = await slide.evaluate((root) => {
      const rootRect = root.getBoundingClientRect();
      const overflow = [...root.querySelectorAll('*')].filter((el) => {
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0 || el.closest('.speaker-note')) return false;
        const rect = el.getBoundingClientRect();
        return rect.left < rootRect.left - 2 || rect.top < rootRect.top - 2 || rect.right > rootRect.right + 2 || rect.bottom > rootRect.bottom + 2;
      }).map((el) => `${el.tagName.toLowerCase()}.${el.className}`);
      const brokenImages = [...root.querySelectorAll('img')].filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.getAttribute('src'));
      const importantText = [...root.querySelectorAll('.hero,.lede,.card h3,.card p,.layer strong,.layer span,.inspection-credit,.photo-credit,.prompt')];
      const small = importantText.filter((el) => parseFloat(getComputedStyle(el).fontSize) < 18).map((el) => `${el.tagName.toLowerCase()}.${el.className}:${getComputedStyle(el).fontSize}`);
      return { title: root.dataset.title, overflow, brokenImages, small };
    });
    if (audit.overflow.length || audit.brokenImages.length || audit.small.length) failures.push({ deck: name, slide: index, ...audit });
  }
  console.log(`${name}: ${count} slides rendered`);
}

await browser.close();
if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exitCode = 1;
} else {
  console.log('QA: no overflow, broken images, or important text below 18px');
}
