# Differentiation — IdeaCheck
> **假設品牌值**（請依實際需求覆蓋）：主色 `#7C3AED`（紫）、受眾：技術導向創業者、定位：比 IdeaCheck 更深的技術可信度 + 更好的進度追蹤
> 來源：analysis/L0–L4

---

## 來源網站定位

- **受眾**：任何想驗證點子的人（廣泛，non-technical 也可用）
- **風格**：恐懼驅動（death framing）、資料驅動信任感、低門檻訂閱
- **強項**：負向框架製造焦慮、資料信任 section、$3.29 低錨點、Dimension Bar 視覺化

---

## 你的產品定位（假設值 — 請修改）

- **受眾**：技術導向創業者（工程師出身，熟悉數據，更挑剔）
- **風格**：資料嚴謹 + 可操作，少恐嚇多洞察
- **差異點**：7+3 維度 → 可客製化維度權重；死亡預測 → 加上量化修復建議

---

## ✅ 值得保留（KEEP）

| 設計決策 | 為什麼好 | 如何納入 |
|----------|----------|----------|
| **Dimension Bar Chart（分數視覺化）** | 把抽象分析結果轉成可掃描的圖表，技術受眾熱愛數字比較 | 完整採用，加上 hover tooltip 顯示說明 |
| **Circular Score Ring（SVG 圓形進度）** | 一眼看到整體健康度，比數字清單更直觀 | 採用，顏色依分數段動態變色（teal/amber/orange/red）|
| **Data Sources Section 設計**（4 卡片 + 統計數字）| 先建立「資料是真的」的信任，再進定價，轉化效果顯著 | 完整採用，換成自有資料來源清單 |
| **2-tier Pricing（直接可買）** | 無 Coming Soon 困惑，訪客立刻知道怎麼付費 | 採用，定價邏輯調整為 Free（1次/月）vs Pro（無限）|
| **Paywall Teaser（Lock icon）** | 讓 free 用戶「看到」付費功能存在，是有效 upsell 信號 | 採用，lock icon 改為 violet 配色 |
| **Pricing Card hover shadow**（`transition-shadow hover:shadow-lg`）| 微互動讓 pricing 區更有點擊感 | 保留 |
| **Source Card hover（border + bg 雙重 hover）** | `hover:border-indigo-300 hover:bg-gray-50/50` 層次感好，比只變 bg 更精緻 | 保留，改品牌色 |

---

## ⚠️ 不適合（DROP）

| 元素 | 為什麼不適合 |
|------|--------------|
| **Death framing 的過度使用**（"How long will your idea survive?"、"how you'll die"）| 技術受眾對「恐嚇式」文案容忍度低，會覺得不誠實；改用分析/洞察框架 |
| **靜態 Score Ring（無動畫）** | 技術受眾發現是靜態後會覺得不夠精緻；補上 count-up + stroke 動畫 |
| **Locked dimension 無說明**（只有 lock icon，不知道付費後得到什麼）| 降低付費意願；改為 hover 展開說明「付費解鎖：Growth Strategy 告訴你...」|
| **Circuit SVG 背景裝飾** | 與 ShipYourIdea 相同裝飾，用在 IdeaCheck 上顯得同質化；替換 |

---

## 🎨 品牌覆蓋（OVERRIDE）

| 來源 Token | 來源值 | 你的 Token | 你的值 | 理由 |
|-----------|--------|-----------|--------|------|
| `color.brand.primary` | `#4f46e5`（indigo-600）| `color.brand.primary` | `#7C3AED`（violet-600）| 與兩個參考站區隔 |
| `color.brand.primary.hover` | `#4338ca` | `color.brand.primary.hover` | `#6D28D9`（violet-700）| |
| `color.semantic.score.danger` | `#ef4444`（red-500）| `color.semantic.score.danger` | `#ef4444` | 保留（語意明確）|
| `color.semantic.score.warning` | `#f97316`（orange-500）| `color.semantic.score.warning` | `#f97316` | 保留 |
| `color.semantic.score.caution` | `#f59e0b`（amber-500）| `color.semantic.score.caution` | `#f59e0b` | 保留 |
| `color.semantic.score.good` | `#14b8a6`（teal-500）| `color.semantic.score.good` | `#14b8a6` | 保留 |
| `radius.xl` | `rounded-2xl`（16px）| `radius.xl` | `rounded-2xl` | 保留，用於 source-type card |
| Hero 背景 | Circuit SVG | Hero 背景 | `grid dot pattern` | 資料感更強 |
| Hero Framing | "How long will your idea survive?" | Hero Framing | "What are the real risks?" | 洞察框架取代恐嚇框架 |

---

## 💡 改進機會（IMPROVE）

1. **Interaction — Score Ring 動畫**：來源站 SVG stroke 完全靜態；補上進場時 `stroke-dashoffset` 從 254（空）動態縮短到目標值，加上數字 count-up（`requestAnimationFrame`），讓分數「被計算出來」而非直接顯示

2. **UX — Locked Dimension 說明**：來源站 lock icon 無 hover 說明；加上 `Tooltip` 或 `Popover`（`hover:block`）顯示「升級後解鎖：分析你的 Growth Strategy，告訴你最有效的前 3 個獲客渠道」，降低付費決策障礙

3. **Accessibility — 分數顏色無法只靠色彩辨識**：dimension bar 顏色（red/orange/amber/teal）唯一區分方式是顏色，色盲訪客無法辨識；加上 icon 輔助（危險 icon / 勾 / 警告三角）或 ARIA label

4. **Data — 真實動態計數器**：來源站 "396 ideas analyzed so far" 是靜態文字；換成從 API 拿的即時數字，每次訪問微小增加，讓訪客感覺平台持續活躍

5. **UX — 付費後 diff 視覺化**：定價卡片上，直接用 before/after 比較（Free: 7 bars vs Pro: 10 bars，多出的 3 條模糊顯示），讓付費升級的「感知收穫」更清楚

6. **Performance — Score Ring 純 CSS**：來源用 SVG + inline style，考慮改用 CSS `conic-gradient` 實作圓形進度（無 SVG，更小 DOM），或用 `@property` 搭配 CSS `@keyframes` 做 count-up

---

## 結論

> IdeaCheck 的核心貢獻是「多維度分析 + 色彩語意 bar chart + Data Sources 信任區」的組合。這套信任建立流程（展示危機 → 解釋資料來源 → 低錨點付費）值得完整學習。
> 但 death framing 過重、動畫靜態、lock icon 無說明，對挑剔的技術受眾是扣分項。
> **目標**：保留資料視覺化骨架，把 framing 從「恐嚇」改為「洞察」，讓技術創業者覺得「這是嚴肅的分析工具，不是嚇我的廣告頁」。

---

_假設值版本：2026-04-08。品牌色 / 受眾 / 定位請依實際需求覆蓋後重新跑 Stage 5。_
