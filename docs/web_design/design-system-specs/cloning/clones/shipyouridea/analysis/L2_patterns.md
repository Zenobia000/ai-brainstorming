# L2 Patterns — ShipYourIdea
> 對齊 `02_patterns_spec.md`。流程 / 導航 / 表格 / 反饋 / 空白狀態。

---

## Navigation Pattern

### Sticky Header
- 行為：`position: sticky; top: 0; z-index: 50`，捲動時保持頂部
- 背景：`bg-white/80 backdrop-blur-md`（毛玻璃效果）
- 邊框：`border-b border-gray-950/5`（5% 透明度，極細）
- Grid：`grid-cols-3`（左 logo / 中 links / 右 actions）
- Mobile：中間 nav links 隱藏（`hidden sm:flex`）

### Anchor Navigation
- 全部 nav links 為 hash anchor（`/#demo`, `/#pricing`, `/#faq`）
- 無需 router 切換，單頁結構
- 無 active state 指示（點擊後 URL 改變但無高亮）

---

## Section Structure Pattern

每個 section 遵循固定節奏：
```
1. Section Badge（indigo pill）
2. h2（text-3xl/4xl font-bold tracking-tight text-gray-950）
3. p（text-gray-500，補充說明）
4. 主要內容區
```

此「Badge → Heading → Subtext → Content」4 層模式在全站一致。

---

## Feature Showcase Pattern（demo section）

```
布局：sticky left（description） + scrollable right（mock）
Left：section-badge + h2 + p + divider + feature-list + CTA
Right：app-mock-frame（模擬 SaaS 介面截圖）
Sticky offset：lg:top-24（避開 nav 高度）
```

**特點**：用「真實 UI 截圖模擬」而非靜態圖片，讓訪客感受產品實際樣貌。

---

## Pricing Pattern（3-tier with Coming Soon）

```
結構：
  section header（badge + h2 + p）
  → grid 3-col（Free / Community / Coach Sprint）

卡片結構（固定）：
  tier-label（uppercase tracking-wider）
  price（text-3xl font-bold）
  tagline（text-sm text-gray-500）
  feature-list（svg check + text）
  CTA（full-width h-11 btn）

差異化策略：
  Free      → 主色 indigo，filled CTA
  Community → 主色 emerald，Coming Soon badge，waiting-list CTA
  Coach     → 主色 amber，Coming Soon badge，contact CTA
```

**洞察**：3 tier 卡片用不同邊框顏色 + badge 顏色做區隔，而非用背景色。Coming Soon 佔位策略降低訪客「找不到付費入口」的挫敗感，同時收集 waitlist。

---

## FAQ Pattern（Flat List）

```
dl.divide-y.divide-gray-200
  div.py-5 × N
    dt（question, font-semibold）
    dd（answer, text-gray-500, leading-relaxed）
```

**特點**：無 accordion，全部展開。適合問題少（6 條）且答案短的場景。避免 JavaScript 依賴。

---

## Social Proof Pattern

| 位置 | 形式 | 具體做法 |
|------|------|---------|
| Hero | 計數器 | `"54 ideas analyzed so far"`（text-sm text-gray-400）|

**特點**：數字很小（54），但放在 hero CTA 正下方，給行動前最後一個「真實感」信號。

---

## CTA Hierarchy Pattern

| 層級 | 位置 | 樣式 | 文字策略 |
|------|------|------|---------|
| Primary | Hero | h-11 filled indigo + gradient overlay | 動作導向「Get your free action guide →」|
| Secondary | Demo | h-10 filled indigo（稍小） | 「Get your action guide」（無箭頭）|
| Tertiary | Pricing Free | Full-width filled indigo | 「Get started free」|

**模式**：Hero CTA 最強（h-11 + arrow + shadow），demo CTA 次之，pricing CTA 與 hero 高度一致但無特殊裝飾。

---

## Feedback / Status Pattern

| 情境 | 元件 | 視覺策略 |
|------|------|---------|
| 行動導向建議 | 綠色卡片 | Start Now：green-50 + green-200 border |
| 警告 / 風險提示 | 橙/琥珀色卡片 | Watch Out For：amber-50 + amber-200 border |
| 摘要 / 結果 | 藍紫色卡片 | Outcome：indigo-50 + indigo-100 border |
| 功能不可用 | Coming Soon badge | emerald/amber badge + opacity-50 button |

**3色語意系統**：green = action / amber = caution / indigo = info。

---

## Empty State Pattern

- 無觀察到空白狀態（landing page 無用戶資料場景）

---

## Scroll Reveal Animation Pattern

```
所有可見區塊：初始 opacity:0 + translateY(24px)
IntersectionObserver 進入視口 → opacity:1 + transform:none
transition：未觀察到明確 duration（CSS 預設或 JS 控制）
```

此模式在整站一致，所有 section 主要區塊皆有此進場效果，但 hero 區塊除外（直接顯示）。
