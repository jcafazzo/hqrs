import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const base = process.env.HQRS_BASE_URL || 'http://127.0.0.1:4173';
const requestedModes = (process.env.HQRS_MODES || 'teaching,originals').split(',').map(value => value.trim()).filter(Boolean);
const configs = [
  { slug:'altitude-cognition-2026', route:'prototypes/altitude-cognition-2026/', teaching:38, originals:77 },
  { slug:'altitude-service-design-2026', route:'prototypes/altitude-service-design-2026/', teaching:47, originals:182 }
];

const browser = await chromium.launch({ headless:true });
const reports = [];

for (const config of configs) {
  const page = await browser.newPage({ viewport:{ width:1600, height:988 }, deviceScaleFactor:1 });
  const consoleErrors = [];
  page.on('pageerror', error => consoleErrors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });

  for (const mode of requestedModes) {
    if (!['teaching','originals'].includes(mode)) continue;
    const out = path.resolve(`prototypes/renders/${config.slug}/${mode}`);
    await rm(out, { recursive:true, force:true });
    await mkdir(out, { recursive:true });
    await page.goto(`${base}/${config.route}?private=1`, { waitUntil:'networkidle' });
    if (mode === 'originals') await page.locator('[data-mode="originals"]').click();
    const expected = config[mode];
    const actual = await page.evaluate(nextMode => nextMode === 'teaching' ? window.LECTURE.teachingPath.length : window.LECTURE.originalMap.length, mode);
    const failures = [];

    for (let i = 0; i < actual; i++) {
      await page.waitForFunction(() => [...document.querySelectorAll('.slide img')].every(image => image.complete && image.naturalWidth > 0));
      const current = page.locator('.slide');
      const audit = await current.evaluate((root, currentMode) => {
        const bounds = root.getBoundingClientRect();
        const visible = element => {
          const style = getComputedStyle(element);
          return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0;
        };
        const ignored = element => element.matches('.terrain,.route,.source-page,.asset-page,.small-source,.slide-number,.course-line,.queen-mark,.status-tag');
        const overflow = [...root.querySelectorAll('*')].filter(visible).filter(element => !ignored(element)).filter(element => {
          const rect = element.getBoundingClientRect();
          return rect.left < bounds.left - 2 || rect.top < bounds.top - 2 || rect.right > bounds.right + 2 || rect.bottom > bounds.bottom + 2;
        }).map(element => `${element.tagName.toLowerCase()}.${element.className}`);
        const brokenImages = [...root.querySelectorAll('img')].filter(image => !image.complete || image.naturalWidth === 0).map(image => image.getAttribute('src'));
        const selectors = '.display,.support,.metric span,.metric em,.compare-card h2,.compare-card p,.step span,.flow-node b,.flow-node strong,.flow-node span,.blueprint-label,.blueprint-cell,.role-title,.role-card strong,.role-card span,.role-foot,.field-label,.field-label strong,.quote,.quote-by';
        const smallText = currentMode === 'teaching' ? [...root.querySelectorAll(selectors)].filter(visible).filter(element => parseFloat(getComputedStyle(element).fontSize) < 29.5).map(element => `${element.tagName.toLowerCase()}.${element.className}:${getComputedStyle(element).fontSize}`) : [];
        return { overflow, brokenImages, smallText };
      }, mode);
      if (audit.overflow.length || audit.brokenImages.length || audit.smallText.length) failures.push({ index:i + 1, position:await page.locator('[data-position]').innerText(), ...audit });
      await current.screenshot({ path:path.join(out, `slide-${String(i + 1).padStart(3,'0')}.jpg`), type:'jpeg', quality:80 });
      if (i < actual - 1) await page.locator('[data-action="next"]').click();
    }

    const interactionFailures = [];
    if (mode === 'teaching') {
      const target = await page.evaluate(() => window.LECTURE.teachingPath[3].id);
      await page.goto(`${base}/${config.route}?private=1#s-${target}`, { waitUntil:'networkidle' });
      const deepLinkPosition = await page.locator('[data-position]').innerText();
      if (!deepLinkPosition.startsWith('4 /')) interactionFailures.push(`Deep link #s-${target} opened ${deepLinkPosition}`);
      const hiddenPanelsAreInert = await page.evaluate(() => [...document.querySelectorAll('[aria-hidden="true"]')].every(panel => panel.inert));
      if (!hiddenPanelsAreInert) interactionFailures.push('A hidden panel remained keyboard-focusable.');
      const beforeSpace = await page.locator('[data-position]').innerText();
      await page.locator('[data-action="outline"]').focus();
      await page.keyboard.press('Space');
      const outlineOpen = await page.locator('.outline-drawer').getAttribute('aria-hidden');
      const afterSpace = await page.locator('[data-position]').innerText();
      if (outlineOpen !== 'false' || beforeSpace !== afterSpace) interactionFailures.push('Space on the Outline button did not activate it without advancing.');
      await page.locator('.outline-drawer [data-action="close"]').click();
      await page.locator('[data-action="notes"]').click();
      if (await page.locator('.notes-drawer').getAttribute('aria-hidden') !== 'false') interactionFailures.push('Pointer Notes control did not open presenter notes.');
      await page.keyboard.press('Escape');
      if (await page.locator('.notes-drawer').getAttribute('aria-hidden') !== 'true') interactionFailures.push('Escape did not close the active presenter panel.');
      if (!await page.locator('[data-action="notes"]').evaluate(button => button === document.activeElement)) interactionFailures.push('Closing a panel did not restore focus to its trigger.');
    }
    const report = { slug:config.slug, mode, expected, rendered:actual, failures, interactionFailures, consoleErrors:[...new Set(consoleErrors)] };
    reports.push(report);
    await writeFile(path.resolve(`prototypes/renders/${config.slug}/qa-${mode}.json`), JSON.stringify(report, null, 2));
    console.log(`${config.slug} ${mode}: ${actual}/${expected} · failures ${failures.length} · console ${report.consoleErrors.length}`);
  }
  await page.close();
}

await browser.close();
const failed = reports.some(report => report.rendered !== report.expected || report.failures.length || report.interactionFailures.length || report.consoleErrors.length);
if (failed) process.exitCode = 1;
