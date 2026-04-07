# Prompt: 01 Capture

> 用途：擷取目標網站的原始素材
> 執行者：browser-automation-expert agent / Playwright 腳本 / 手動 DevTools

---

## 環境前置檢查（每次新環境第一次使用）

> **若 Playwright MCP 第一次呼叫工具就報 `Chromium distribution 'chrome' is not found at /opt/google/chrome/chrome`**：
> 你的環境裝不了 Chrome channel（公司／受管理 Linux 上 sudoers 多半會擋 reinstall script，且 `sudo npx` 還會踩到 root node 版本不相容）。
> 改用 Playwright 自帶的 chromium，純 userland：
>
> ```bash
> npx playwright install chromium
> claude mcp remove playwright
> claude mcp add playwright -- npx -y @playwright/mcp@latest --browser chromium
> # /exit 後重啟 claude，新 session 才會載入 --browser chromium
> ```
>
> 關鍵旗標：`--browser chromium`。沒這個就會回到 chrome channel 死路。
> 完整背景與三條失敗路徑見 [`../lessons/2026-04-07-playwright-mcp-chrome-channel.md`](../lessons/2026-04-07-playwright-mcp-chrome-channel.md)。

---

## 給 Agent 的 Prompt

```
任務：擷取目標網站 {URL} 的原始素材，用於後續設計分析。

請依序完成以下操作，將產物存到 design-system-specs/cloning/clones/{slug}/raw/ ：

1. 三斷點全頁截圖
   - 375 × 812（mobile）→ screenshots/mobile.png
   - 768 × 1024（tablet）→ screenshots/tablet.png
   - 1440 × 900（desktop）→ screenshots/desktop.png

2. 擷取渲染後的完整 HTML
   - 執行 document.documentElement.outerHTML
   - 存為 dom.html

3. 擷取 :root CSS 變數
   - 執行 getComputedStyle(document.documentElement)
   - 過濾所有 -- 開頭的屬性
   - 存為 css-vars-raw.json

4. 擷取關鍵元素的 computed style
   - 對 button, a, h1-h6, input, .card, [class*="btn"] 等
   - 取 color, background, font-family, font-size, font-weight,
     line-height, padding, margin, border-radius, box-shadow
   - 存為 computed-styles.json

5. 字型清單
   - 執行 [...document.fonts].map(f => ({family: f.family, weight: f.weight, style: f.style}))
   - 存為 fonts.json

6. Media queries
   - 從 document.styleSheets 抽出所有 @media 規則的條件
   - 存為 media-queries.json

法律紅線：
- 只擷取公開頁面（不登入）
- 檢查 robots.txt，禁止路徑跳過
- 不下載圖片資源檔案
```

---

## 手動操作版本（若無 browser MCP）

在目標網站 DevTools Console 執行：

```javascript
// 1. CSS 變數
const rootStyles = getComputedStyle(document.documentElement);
const cssVars = {};
for (let i = 0; i < rootStyles.length; i++) {
  const prop = rootStyles[i];
  if (prop.startsWith('--')) cssVars[prop] = rootStyles.getPropertyValue(prop).trim();
}
copy(JSON.stringify(cssVars, null, 2));

// 2. 字型
copy(JSON.stringify([...document.fonts].map(f => ({
  family: f.family, weight: f.weight, style: f.style
})), null, 2));

// 3. DOM
copy(document.documentElement.outerHTML);
```

把每次 `copy()` 結果貼到對應檔案。

---

## 驗收

- [ ] `raw/screenshots/` 三張截圖存在
- [ ] `raw/dom.html` > 10KB
- [ ] `raw/css-vars-raw.json` 至少 5 個變數
- [ ] `raw/computed-styles.json` 涵蓋至少 5 種元素類型
