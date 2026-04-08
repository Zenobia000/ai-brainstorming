# Cross-Analysis 4.3：信任機制比較

> 功能標籤列（capability tags）vs 資料來源卡片（data source cards）

---

## 信任機制對比總表

| 維度 | ShipYourIdea | IdeaCheck |
|------|-------------|-----------|
| 主要信任策略 | Capability Tags（能力展示）| Data Sources Section（資料透明）|
| 呈現位置 | Hero section（CTA 上方）| 獨立 section（#data-sources）|
| 形式 | Pill chips（文字 + emoji icon）| 統計數字列 + Source Cards（2×2 grid）|
| 數量 | 6 個 tag | 4 大統計 + 4 個 source cards |
| Social Proof | "54 ideas analyzed so far"（hero CTA 下）| "396 ideas analyzed so far"（hero CTA 下）|
| 外部資料佐證 | 無（功能描述）| 有（Google, Crunchbase, Statista...）|

---

## 深度分析

### ShipYourIdea：Capability Tags

```
[🔍 Market Analysis] [🎯 Target Audience] [🛠️ Competitive Analysis]
[💰 Monetization]    [🚀 Marketing Plan]  [📋 Implementation Guide]
```

**設計邏輯**：
- 6 個 tags = 「我能幫你做這些事情」
- 使用 emoji 強化視覺識別，快速掃瞄即可理解
- 放在 CTA 按鈕上方 → 先知道「能做什麼」，再行動
- pill 樣式（`rounded-full border border-gray-200 text-sm`）輕量不搶眼

**信任建立機制**：
- 靠廣度建立信任：「它能做很多事」
- 不依賴外部資料源，信任建立在「功能清單」上

**弱點**：
- 無外部數據支撐，「說了算」的感覺
- 對技術受眾說服力較弱（他們想看怎麼做到的）

---

### IdeaCheck：Data Transparency Section

```
統計數字列（bg-white，center-aligned）：
  5-8 real-time searches    50+ data points
  <1 minute                 10 dimension scoring
  → 全部 text-5xl font-bold text-indigo-600

Source Cards（2×2 grid，hover 效果）：
  ┌─────────────────┐  ┌─────────────────┐
  │ 🔍 Real-time     │  │ 📊 Market Data  │
  │    Search        │  │                 │
  │ • Google Search  │  │ • Crunchbase    │
  │ • Bing           │  │ • Statista      │
  │ • DuckDuckGo     │  │ • IBISWorld     │
  └─────────────────┘  └─────────────────┘
  ┌─────────────────┐  ┌─────────────────┐
  │ 📈 Industry      │  │ 🏆 Competitive  │
  │    Benchmarks    │  │    Intelligence │
  │ • G2 / Capterra  │  │ • SimilarWeb    │
  │ • Product Hunt   │  │ • Semrush       │
  └─────────────────┘  └─────────────────┘
```

**設計邏輯**：
- 靠深度建立信任：「我們用哪些資料」，可追溯
- 大字數字（text-5xl）製造「科學感」與「震撼感」
- Hover 效果（`hover:border-indigo-300 hover:bg-gray-50/50`）暗示互動性
- 放在獨立 section，代表「這件事值得單獨說」

**信任建立機制**：
- 外部資料源名稱（Google, Crunchbase 等）借用其可信度
- 具體數字（50+ data points）比模糊說法（"comprehensive analysis"）更可信

---

## 關鍵洞察

### 信任機制的適用層次

| 信任問題 | 解法 | 使用哪站策略 |
|---------|------|------------|
| 「這工具能做什麼？」| Capability Tags | ShipYourIdea |
| 「它用什麼資料？準確嗎？」| Data Sources Section | IdeaCheck |
| 「有多少人用過？」| Social Proof Count（hero 下方）| 兩站共用 |
| 「其他人覺得怎樣？」| Testimonials（兩站均無）| 缺口 |

**發現**：兩站都沒有 Testimonial Section。這是一個可改進空間（IMPROVE 機會）。

### Social Proof 數字差異

| 網站 | 數字 | 感受 |
|------|------|------|
| ShipYourIdea | 54 | 真實感（小數字更可信）|
| IdeaCheck | 396 | 說服力（大數字更有份量）|

**建議**：若數字小（<100），用「54 ideas analyzed」；數字大時，考慮「Trusted by X idea-stage founders」的說法。

### Data Sources 的門檻

使用 Data Sources Section 的前提：
1. 實際有串接外部 API（不能只是擺設）
2. 資料來源知名度夠高（Google / Crunchbase 有品牌效果，自訂資料庫沒有）
3. 願意維護這些資料連接的可靠性

若產品是 LLM 生成結果，但聲稱「real-time search」→ 會損害公信力，不建議照搬。

---

## 組合策略建議

適合 AI 輔助工具的信任機制組合：

```
Hero：   Capability Tags（能力寬度）+ 用戶數量（社會證明）
Demo：   Mock Frame 展示真實產出（視覺可信度）
獨立節：  Data Sources（深度信任）[僅當實際資料來源充分時]
FAQ：    消除「準確嗎 / 安全嗎」疑慮（文字信任）
```

---

*來源：Stage 3 analysis / L1_components.md + L2_patterns.md + L3_templates.md（兩站）*
