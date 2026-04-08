/**
 * capture.js — 六階段克隆流水線 Stage 1
 * 平行擷取多個目標網站的原始素材
 * 用法：node capture.js <slug1> <slug2> ...
 *       node capture.js shipyouridea ideacheck
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const CLONES_DIR = path.resolve(__dirname, 'clones');

const TARGETS = {
  shipyouridea: {
    url: 'https://shipyouridea.today',
    keySelectors: ['nav', 'header', '.hero', '[class*="hero"]', '[class*="pricing"]', '[class*="faq"]', 'footer', 'main'],
  },
  ideacheck: {
    url: 'https://ideacheck.cc',
    keySelectors: ['nav', 'header', '[class*="hero"]', '[class*="demo"]', '[class*="pricing"]', '[class*="faq"]', 'footer', 'main'],
  },
};

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

async function captureTarget(browser, slug, target) {
  const rawDir = path.join(CLONES_DIR, slug, 'raw');
  const screenshotsDir = path.join(rawDir, 'screenshots');
  fs.mkdirSync(screenshotsDir, { recursive: true });

  console.log(`\n[${slug}] 開始擷取 ${target.url}`);

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
  });

  // ── 1. Screenshots × 3 breakpoints ──────────────────────────────────────────
  for (const vp of VIEWPORTS) {
    const screenshotPath = path.join(screenshotsDir, `${vp.name}.png`);
    if (fs.existsSync(screenshotPath)) {
      console.log(`[${slug}] ✅ ${vp.name}.png 已存在，跳過`);
      continue;
    }

    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    try {
      await page.goto(target.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`[${slug}] ✅ 截圖完成：${vp.name}.png (${vp.width}px)`);
    } catch (err) {
      console.error(`[${slug}] ❌ ${vp.name} 截圖失敗：${err.message}`);
    }
    await page.close();
  }

  // ── 2. DOM + CSS + Fonts + Media Queries ─────────────────────────────────────
  const page = await context.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  try {
    await page.goto(target.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    // 2.1 DOM
    const domPath = path.join(rawDir, 'dom.html');
    if (!fs.existsSync(domPath)) {
      const dom = await page.content();
      fs.writeFileSync(domPath, dom, 'utf-8');
      console.log(`[${slug}] ✅ dom.html (${(dom.length / 1024).toFixed(1)} KB)`);
    } else {
      console.log(`[${slug}] ✅ dom.html 已存在，跳過`);
    }

    // 2.2 CSS Variables (:root)
    const cssVarsPath = path.join(rawDir, 'css-vars-raw.json');
    if (!fs.existsSync(cssVarsPath)) {
      const cssVars = await page.evaluate(() => {
        const vars = {};
        const sheets = Array.from(document.styleSheets);
        for (const sheet of sheets) {
          try {
            const rules = Array.from(sheet.cssRules || []);
            for (const rule of rules) {
              if (rule.selectorText === ':root' || rule.selectorText === 'html') {
                const style = rule.style;
                for (let i = 0; i < style.length; i++) {
                  const prop = style[i];
                  if (prop.startsWith('--')) {
                    vars[prop] = style.getPropertyValue(prop).trim();
                  }
                }
              }
            }
          } catch {}
        }
        // Also grab from computed style
        const rootComputed = getComputedStyle(document.documentElement);
        const allProps = Array.from(rootComputed);
        for (const prop of allProps) {
          if (prop.startsWith('--')) {
            vars[prop] = rootComputed.getPropertyValue(prop).trim();
          }
        }
        return vars;
      });
      fs.writeFileSync(cssVarsPath, JSON.stringify(cssVars, null, 2), 'utf-8');
      const count = Object.keys(cssVars).length;
      console.log(`[${slug}] ✅ css-vars-raw.json (${count} 個變數)`);
    } else {
      console.log(`[${slug}] ✅ css-vars-raw.json 已存在，跳過`);
    }

    // 2.3 Fonts
    const fontsPath = path.join(rawDir, 'fonts.json');
    if (!fs.existsSync(fontsPath)) {
      const fonts = await page.evaluate(() => {
        const fontSet = new Set();
        // From document.fonts
        for (const font of document.fonts) {
          fontSet.add(`${font.family} | ${font.weight} | ${font.style} | ${font.status}`);
        }
        // From stylesheets @font-face
        const sheets = Array.from(document.styleSheets);
        const fontFaces = [];
        for (const sheet of sheets) {
          try {
            for (const rule of Array.from(sheet.cssRules || [])) {
              if (rule.constructor.name === 'CSSFontFaceRule') {
                fontFaces.push(rule.cssText.substring(0, 200));
              }
            }
          } catch {}
        }
        // Computed font families in use
        const elements = document.querySelectorAll('h1,h2,h3,p,button,a,span,li');
        const computedFamilies = new Set();
        elements.forEach(el => {
          const ff = getComputedStyle(el).fontFamily;
          if (ff) computedFamilies.add(ff);
        });
        return {
          documentFonts: Array.from(fontSet),
          fontFaces: fontFaces,
          computedFamiliesInUse: Array.from(computedFamilies),
        };
      });
      fs.writeFileSync(fontsPath, JSON.stringify(fonts, null, 2), 'utf-8');
      console.log(`[${slug}] ✅ fonts.json`);
    } else {
      console.log(`[${slug}] ✅ fonts.json 已存在，跳過`);
    }

    // 2.4 Media Queries
    const mqPath = path.join(rawDir, 'media-queries.json');
    if (!fs.existsSync(mqPath)) {
      const mediaQueries = await page.evaluate(() => {
        const mqs = new Set();
        const sheets = Array.from(document.styleSheets);
        for (const sheet of sheets) {
          try {
            for (const rule of Array.from(sheet.cssRules || [])) {
              if (rule.constructor.name === 'CSSMediaRule') {
                mqs.add(rule.conditionText || rule.media?.mediaText || 'unknown');
              }
            }
          } catch {}
        }
        return Array.from(mqs).sort();
      });
      fs.writeFileSync(mqPath, JSON.stringify(mediaQueries, null, 2), 'utf-8');
      console.log(`[${slug}] ✅ media-queries.json (${mediaQueries.length} 條)`);
    } else {
      console.log(`[${slug}] ✅ media-queries.json 已存在，跳過`);
    }

    // 2.5 Computed Styles for key elements
    const computedPath = path.join(rawDir, 'computed-styles.json');
    if (!fs.existsSync(computedPath)) {
      const computedStyles = await page.evaluate((selectors) => {
        const result = {};
        const PROPS = [
          'color', 'background-color', 'background',
          'font-family', 'font-size', 'font-weight', 'line-height', 'letter-spacing',
          'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
          'margin', 'border-radius', 'border', 'box-shadow',
          'display', 'flex-direction', 'gap', 'align-items', 'justify-content',
          'max-width', 'width', 'height',
        ];
        for (const sel of selectors) {
          const el = document.querySelector(sel);
          if (!el) continue;
          const computed = getComputedStyle(el);
          result[sel] = {};
          for (const prop of PROPS) {
            const val = computed.getPropertyValue(prop);
            if (val && val !== 'none' && val !== 'normal' && val !== 'auto') {
              result[sel][prop] = val;
            }
          }
        }
        return result;
      }, target.keySelectors);
      fs.writeFileSync(computedPath, JSON.stringify(computedStyles, null, 2), 'utf-8');
      console.log(`[${slug}] ✅ computed-styles.json`);
    } else {
      console.log(`[${slug}] ✅ computed-styles.json 已存在，跳過`);
    }

  } catch (err) {
    console.error(`[${slug}] ❌ 資料擷取失敗：${err.message}`);
  }

  await page.close();
  await context.close();
  console.log(`[${slug}] 🎉 Stage 1 Capture 完成`);
}

async function main() {
  const slugs = process.argv.slice(2);
  if (slugs.length === 0) {
    console.log('用法：node capture.js <slug1> <slug2>');
    console.log('範例：node capture.js shipyouridea ideacheck');
    process.exit(1);
  }

  const unknownSlugs = slugs.filter(s => !TARGETS[s]);
  if (unknownSlugs.length > 0) {
    console.error(`未知 slug: ${unknownSlugs.join(', ')}`);
    console.error(`已知 slug: ${Object.keys(TARGETS).join(', ')}`);
    process.exit(1);
  }

  console.log(`\n🚀 啟動平行擷取：${slugs.join(' + ')}`);

  const browser = await chromium.launch({
    headless: true,
    executablePath: undefined, // 讓 Playwright 自選已安裝的 Chromium
  });

  try {
    await Promise.all(slugs.map(slug => captureTarget(browser, slug, TARGETS[slug])));
  } finally {
    await browser.close();
  }

  console.log('\n✅ 全部完成。');

  // Summary
  console.log('\n─── 產出清單 ───────────────────────────────────────────');
  for (const slug of slugs) {
    const rawDir = path.join(CLONES_DIR, slug, 'raw');
    const files = ['screenshots/mobile.png', 'screenshots/tablet.png', 'screenshots/desktop.png',
                   'dom.html', 'css-vars-raw.json', 'fonts.json', 'media-queries.json', 'computed-styles.json'];
    for (const f of files) {
      const fullPath = path.join(rawDir, f);
      const exists = fs.existsSync(fullPath);
      const size = exists ? `${(fs.statSync(fullPath).size / 1024).toFixed(1)} KB` : '—';
      console.log(`  [${slug}] ${exists ? '✅' : '❌'} ${f.padEnd(35)} ${size}`);
    }
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
