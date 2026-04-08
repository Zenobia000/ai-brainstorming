# L2 Patterns — IdeaCheck
> 對齊 `02_patterns_spec.md`。★ 標示與 ShipYourIdea 不同的模式。

---

## Navigation Pattern（與 ShipYourIdea 相同 + ★ 額外項）

### Sticky Header（相同）
- `position: sticky; top: 0; z-index: 50; bg-white/80 backdrop-blur-md`

### 4-link Nav（★ 比 ShipYourIdea 多一個「數據來源」）
- `/#demo`, `/#data-sources`, `/#pricing`, `/#faq`
- 新增「數據來源」一項，強調資料透明度的產品定位

---

## Section Structure Pattern（相同 4 層模式）

```
1. Section Badge
2. h2（heading）
3. p（subtext）
4. 主要內容
```

---

## Feature Showcase Pattern — Demo（★ 核心差異）

```
布局：sticky left（description） + scrollable right（analysis mock）
Left：badge + h2 + p + divider + feature-list（4 items）+ CTA
Right：analysis report mock（圓形分數儀 + 死亡預測清單 + 維度條形圖）
```

**與 ShipYourIdea 的核心差異**：
- ShipYourIdea mock = 行動指南 UI（tab + green/amber card）
- IdeaCheck mock = 分析報告 UI（score ring + bar chart）

IdeaCheck 的 mock 展示的是「你的點子有多危險」，製造緊張感，而非行動清單。

---

## Data Transparency Pattern（★ IdeaCheck 獨有）

`#data-sources` section 整節用於建立資料信任感：

```
統計數字列（4 個）：
  "5-8 real-time searches"
  "50+ data points"
  "<1 minute"
  "10 dimension scoring"
  → text-5xl.font-bold.text-indigo-600（大字震撼感）

4 個 Source Card（2×2 grid）：
  Real-time Search / Market Data / Industry Benchmarks / Competitive Intelligence
  → 每張列具體資料來源（Google, Crunchbase, Statista...）
  → hover 效果：border-indigo-300 + bg-gray-50/50（互動感）
```

**洞察**：先讓訪客相信「資料是真的」，再進入定價。信任在付費前建立。

---

## Pricing Pattern（★ 2-tier 對比 vs 3-tier）

```
結構：
  header（badge + h2 + p）
  → grid 2-col（Free / Unlimited）

卡片對比：
  Free：     border-gray-200，outline CTA（bg-white ring-gray-200）
  Unlimited：border-indigo-600 + ring-1（雙線），Most Popular badge，filled CTA

差異化策略：
  Free tier CTA 故意使用 outline（ghost）風格，Unlimited 用 filled indigo
  → 引導視覺注意力到 Unlimited
  → $3.29 低錨點策略（看似「根本不貴」）
```

**vs ShipYourIdea**：無 Coming Soon 佔位，直接提供可購買的 Unlimited 方案。

---

## Score Display Pattern（★ IdeaCheck 核心）

```
圓形儀表盤（Circular Gauge）：
  SVG circle（88px，track=#f3f4f6，progress=orange stroke）
  stroke-dasharray = 2πr = 254.47（r=40.5）
  stroke-dashoffset = 254.47 × (1 - score/100)
  center text：score number（text-2xl font-extrabold，顏色跟隨風險色）

風險等級 Badge：
  "Very High Risk" bg-destructive/10 text-destructive

死亡預測清單：
  numbered badges（red circle）+ description text
```

**洞察**：42 分 + "Very High Risk" + 3 條死亡原因 → 製造「我需要付費看詳細報告」的焦慮。

---

## Paywall Teaser Pattern（★ IdeaCheck 特有）

```
Locked Dimensions（dimension bar chart 中）：
  label 改為 lock icon（svg filled）
  bar track 仍顯示（但 score 數字可見）
  → 用戶看到有數據但看不到說明
  → 製造「知道存在但無法取得」的心理驅動力
```

---

## FAQ Pattern（與 ShipYourIdea 相同，靜態展開）

```
dl.divide-y + div.py-5 × 6
dt（question） + dd（answer）
```

---

## Social Proof Pattern（★ 比 ShipYourIdea 數字更大）

| 位置 | 形式 | 值 |
|------|------|-----|
| Hero | 計數器 | `"396 ideas analyzed so far"`（vs ShipYourIdea 54） |

**洞察**：396 比 54 更有說服力，IdeaCheck 可能先推出或累積更多用戶，或調整了展示數字。

---

## CTA Hierarchy Pattern

| 層級 | 位置 | 樣式 | 文字策略 |
|------|------|------|---------|
| Primary | Hero | h-11 filled indigo | 「Validate your idea for free →」|
| Secondary | Demo | h-10 filled indigo | 「Test your idea for free」|
| Tertiary | Pricing-Free | Full-width outline | 「Get started free」（刻意弱化）|
| Highlight | Pricing-Unlimited | Full-width filled indigo | 「Subscribe now」|

---

## Scroll Reveal Pattern（與 ShipYourIdea 相同）

```
opacity:0 + translateY(24px) → none
IntersectionObserver 觸發
Hero 直接顯示（無 reveal）
```
