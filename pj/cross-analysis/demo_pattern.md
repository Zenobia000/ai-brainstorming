# Cross-Analysis 4.4：Demo / Preview 區塊比較

> App Mock Frame（行動指南 UI）vs Analysis Report Mock（分析報告 UI）

---

## 結構對比

| 維度 | ShipYourIdea | IdeaCheck |
|------|-------------|-----------|
| 布局模式 | sticky left + scrollable right | sticky left + scrollable right |
| Mock 類型 | SaaS App UI（tab bar + action cards）| Analysis Report（score ring + bar chart）|
| Mock Frame 裝飾 | macOS titlebar（traffic-light dots + title）| macOS titlebar（traffic-light dots + title）|
| Tab 設計 | 2 tabs（QuickWins / Sections），active 有 indigo underline | 無 tab（單報告視圖）|
| 結果展示 | 3 色 semantic 卡片（green / amber / indigo）| Score Ring + 死亡預測清單 + Dimension Bar Chart |
| Paywall 設計 | 無（全部可見）| Locked Dimensions（lock icon，bar 仍顯示）|
| 左側 feature-list 數量 | 4 項 | 4 項 |
| 背景 | bg-gray-50 | bg-gray-50 |

---

## Mock Frame 設計解析

### 共同基礎（兩站相同）

```
App Mock Frame 結構：
┌─────────────────────────────────────────────┐
│ ● ● ●  [Product Name - Feature Name]        │  ← macOS titlebar
├─────────────────────────────────────────────┤
│ [Tab A]  [Tab B]                             │  ← tab bar（ShipYourIdea）
│ ─────────────────────────────────────────── │
│                                              │
│  [主要內容區]                                 │
│                                              │
└─────────────────────────────────────────────┘
```

- 使用 CSS 模擬 macOS 視窗裝飾，增加真實 App 的感覺
- traffic-light dots：`bg-red-400 / yellow-400 / green-400`（`w-3 h-3 rounded-full`）
- 邊框：`border border-gray-200 rounded-xl shadow-lg`

**為什麼 macOS 風格？**
- 目標受眾（創業者 / indie hacker）多使用 Mac
- macOS 視窗 = 「專業桌面工具」的心智模型
- 不需要複雜的互動，視覺上即可傳達「這是真實軟體」

---

### ShipYourIdea：行動指南 Mock

```
[● ● ●  ShipYourIdea - Action Guide]
[QuickWins▔] [Sections]

┌─────────────────────────────┐
│ ⚡ Start Now                │  ← green-50 bg
│ 1. Define your target       │
│ 2. Research competition     │
│ 3. Build MVP spec           │
└─────────────────────────────┘
┌─────────────────────────────┐
│ ⚠️ Watch Out For            │  ← amber-50 bg
│ • Oversaturated market      │
│ • High acquisition cost     │
└─────────────────────────────┘
[View all sections →]
```

**設計意圖**：
- 展示「輸出是什麼樣子的」，讓用戶預期行動指南的格式
- 3 色 semantic（green = action, amber = caution, indigo = info）貫穿全站
- "View all sections →" CTA 暗示「還有更多」

---

### IdeaCheck：分析報告 Mock

```
[● ● ●  IdeaCheck - Idea Analysis]

  ┌───────────────┐    Very High Risk
  │      42       │    ────────────────────
  │ (score ring)  │    1. Market is too broad
  │  orange stroke│    2. No clear monetization
  └───────────────┘    3. High competition

  Dimension Analysis:
  Market Size          ████████░░  78%  (teal bar)
  Pain Reality         ██████░░░░  60%  (teal bar)
  Monetization         ████░░░░░░  40%  (orange bar)
  🔒 Competitive Moat  ████░░░░░░  [locked]
  🔒 Timing            ████░░░░░░  [locked]
```

**設計意圖**：
- 分數 42 + "Very High Risk" → 製造焦慮，驅動付費
- Locked dimensions → 「你能看到有問題，但看不到是哪裡」的 FOMO
- Score Ring（SVG circle，stroke-dashoffset）視覺上像儀表盤，增加「數據感」
- 死亡預測清單（red numbered badges）強化恐嚇效果

---

## 關鍵洞察

### 1. Mock 類型選擇 = 產品核心價值的視覺化

| 產品類型 | 建議 Mock 類型 |
|---------|--------------|
| 行動計劃工具 | UI Mock（tab + action list）|
| 分析 / 評估工具 | Report Mock（score + chart）|
| 內容生成工具 | Editor Mock（text + formatting）|
| 搜尋 / 研究工具 | Search Results Mock（list + highlight）|

**核心原則**：Mock 要展示「最終輸出」，不是「操作流程」。

### 2. Paywall Teaser 的設計決策

IdeaCheck 的 Paywall Teaser 很有效：
- lock icon 替換 label（但 bar 仍顯示）→ 用戶知道「有數據，只是看不到」
- 這比「完全隱藏」更好，因為用戶能感受到存在感

**實作要點**：
```css
/* Locked state */
.dimension-bar--locked .dimension-label {
  visibility: hidden; /* 或 content: url(lock.svg) */
}
/* 但 bar track 和 fill 都保留 */
```

**搭配 Tooltip**（IMPROVE 建議）：lock state 必須加 hover Popover，解釋「付費後解鎖的具體說明」，否則用戶不知道為何要付費。

### 3. Tab Bar 的互動意涵

ShipYourIdea 的 2 tabs（QuickWins / Sections）在 Landing Page 上是視覺裝飾：
- 不需要真實 tab 切換功能
- 但暗示「產品有多個維度的輸出」
- active tab 的 `border-b-2 border-indigo-600` 指示器清晰易懂

### 4. 布局共識（兩站均使用）

```
lg:flex items-start gap-x-16
  Left: lg:w-96 flex-shrink-0 lg:sticky lg:top-24
  Right: flex-auto（可捲動或靜態）
```

這個 sticky left + main right 模式是 SaaS Feature Demo Section 的最佳實踐。

---

## 你的 Mock 設計清單

在設計 Demo Section 前，先回答：
1. **我的產品輸出是什麼形式？** → 決定 Mock 類型
2. **有沒有需要 Paywall Teaser 的功能？** → 決定 lock state 設計
3. **Tab Bar 是否必要？** → 產品有多種輸出類型才加
4. **需不需要動畫？** → score ring `stroke-dashoffset` 動畫讓分數「跑起來」更有說服力

---

*來源：Stage 3 analysis / L1_components.md + L3_templates.md（兩站）*
