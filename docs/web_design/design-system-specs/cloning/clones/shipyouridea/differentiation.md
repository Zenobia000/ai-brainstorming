# Differentiation — ShipYourIdea
> **假設品牌值**（請依實際需求覆蓋）：主色 `#7C3AED`（紫）、受眾：早期創業者 / 獨立開發者、定位：比 ShipYourIdea 更技術導向 + 更深的個人化
> 來源：analysis/L0–L4

---

## 來源網站定位

- **受眾**：任何有產品點子的人（非技術創業者 / 非開發者居多）
- **風格**：現代 SaaS、簡潔、行動導向、偏向行銷站（非工具站）
- **強項**：action-oriented copywriting、Coming Soon 期待建立、6個維度架構清晰

---

## 你的產品定位（假設值 — 請修改）

- **受眾**：技術導向創業者（工程師 / 設計師創業者）
- **風格**：資料感 + 工程品味，比 ShipYourIdea 更嚴謹、更少行銷感
- **差異點**：更深的個人化分析（依使用者技術棧/資源調整建議）+ 進度追蹤

---

## ✅ 值得保留（KEEP）

| 設計決策 | 為什麼好 | 如何納入 |
|----------|----------|----------|
| **4 層 Section 節奏**（Badge → H2 → subtext → content）| 每個 section 開場一致，視覺掃描效率高 | 採用相同節奏，badge 改為自有品牌色 |
| **Sticky Left + Scrollable Right 的 Demo 布局** | 讓訪客在滑動預覽時，左側說明文字始終可見，降低認知負擔 | 完整採用，lg:w-96 sticky panel |
| **Capability Tag Pills（hero）** | 在 hero 即快速建立「這工具能做什麼」的印象，不依賴標題 | 採用 pill 格式，改為更技術的維度標籤 |
| **App Mock Frame** | 用真實 UI 截圖風格展示產品，比靜態截圖更有信任感 | 採用相同 macOS 視窗 + tab 骨架，mock 內容換成自有 |
| **全站 Scroll Reveal（透明度 + translateY）** | 低調、不搶焦點，純粹讓內容優雅出現 | 保留 opacity+translate 進場，duration 稍快（250ms）|
| **Social proof 位置（CTA 正下方）** | 最後一個說服信號放在點擊前，心理轉化效果最強 | 保留 + 加上「上週分析了 X 個點子」動態計數 |
| **3 色語意系統（green / amber / indigo）** | 直觀、無需解釋，action / caution / info 對應直覺 | 保留語意，主色改紫（indigo → purple）|

---

## ⚠️ 不適合（DROP）

| 元素 | 為什麼不適合 |
|------|--------------|
| **Coming Soon 佔位 tier（Community / Coach）** | 技術受眾容忍度低，看到「Coming Soon」多次會覺得產品未完成，降低信任 |
| **文字層面的行銷腔**（`"Start free, level up as you grow"`）| 技術受眾更喜歡直接說功能，不喜歡行銷語言 |
| **Circuit Board SVG 裝飾**（Hero 背景）| 視覺上偏「行銷網站感」，技術受眾期待更資料感 / 更中性的裝飾 |
| **無 keyboard navigation 支援** | 技術受眾 tab 鍵操作頻率高，需完整 focus ring + keyboard nav |

---

## 🎨 品牌覆蓋（OVERRIDE）

| 來源 Token | 來源值 | 你的 Token | 你的值 | 理由 |
|-----------|--------|-----------|--------|------|
| `color.brand.primary` | `#4f46e5`（indigo-600）| `color.brand.primary` | `#7C3AED`（violet-600）| 與兩個來源站區隔；紫色在技術社群（GitHub, Linear）常見 |
| `color.brand.primary.hover` | `#4338ca` | `color.brand.primary.hover` | `#6D28D9`（violet-700）| |
| `color.brand.primary.light` | `#eef2ff` | `color.brand.primary.light` | `#ede9fe`（violet-50）| |
| `color.brand.primary.light-border` | `indigo-600/20` | `color.brand.primary.light-border` | `violet-600/20` | |
| `font.family.sans` | `Inter` | `font.family.sans` | `Inter` | 保留（工程圈通用字型）|
| `font.family.mono` | TBD | `font.family.mono` | `JetBrains Mono` | 技術產品加入 mono 字型顯示程式碼/數據 |
| Hero 背景裝飾 | Circuit SVG | Hero 背景裝飾 | `noise texture / grid pattern` | 資料感更強，行銷感更低 |
| Pricing tier 數量 | 3（含 2 個 Coming Soon）| Pricing tier 數量 | 2（Free + Pro，均可用）| 移除未完成的 tier |

---

## 💡 改進機會（IMPROVE）

1. **Accessibility — 鍵盤導航**：來源站無可見 focus ring（`focus:` 狀態未觀察到），補上完整 `focus-visible:ring-2 focus-visible:ring-violet-600`，所有互動元件支援 tab/enter/space 操作

2. **Accessibility — 色彩對比度**：`text-gray-400` 在白底的對比值約 2.9:1（低於 WCAG AA 4.5:1），在次要文字上改用 `text-gray-500`（3.8:1）以上，或確保非關鍵文字有足夠 size 補償

3. **Performance — 無 scroll reveal JS**：來源站 scroll reveal 用 IntersectionObserver（增加 JS bundle），改用 CSS `@keyframes` + `animation-timeline: scroll()` 或直接省略動畫，提升 LCP

4. **UX — Demo mock 可互動**：來源站 mock frame 完全靜態；改為真實可操作的嵌入 demo（iframe 或 mini playground），讓技術受眾自行輸入體驗

5. **UX — Pricing 透明度**：加入「目前用了幾次」的進度顯示（`3/5 analyses today`），讓 free user 清楚狀態，降低突然 rate-limited 的挫敗感

6. **SEO — Structured Data**：來源站無 JSON-LD Schema；補上 `Product` + `FAQPage` schema，提升搜尋能見度

---

## 結論

> ShipYourIdea 的最大貢獻是「行動導向框架」：把 AI 輸出包裝成具體步驟而非建議清單。這個結構值得完整學習。
> 但其行銷網站定位、Coming Soon 佔位、無鍵盤支援，對技術受眾都是摩擦。
> **目標**：用相同的六段 section 骨架 + 改紫色品牌 + 可互動 demo + 真實可購買付費方案，打造一個技術創業者感覺「這才是給我用的」的產品。

---

_假設值版本：2026-04-08。品牌色 / 受眾 / 定位請依實際需求覆蓋後重新跑 Stage 5。_
