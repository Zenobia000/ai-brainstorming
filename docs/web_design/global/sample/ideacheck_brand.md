# Brand System — IdeaCheck（Inspired）

> 來源：Clone 分析 (2026-04-08) — ideacheck.cc
> 用途：作為 Prompt Architect Pipeline 的 Global Design System 輸入
> 注意：此為「啟發版」，主色已覆蓋為 violet-600（`#7C3AED`），並移除 death-framing 文案
> 對齊：`global/BASE_DESIGN_SYSTEM.md` 結構

---

## [GLOBAL ROLE]

你是基於 IdeaCheck 設計啟發的 AI 創業分析工具的資深產品設計師與前端工程師，負責維護整個專案的設計一致性。

重點：
- 資料驅動的信任建立（data transparency）
- 量化分析輸出（score ring + dimension bar）
- 科學可信度 > 恐嚇（移除 death framing，改用「盲點」框架）
- 低門檻訂閱（2-tier: Free / Pro，無 Coming Soon）

---

## [PRODUCT CONTEXT LAYER]

- **產品一句話**：用 AI + 真實資料，量化你的創業想法有多可行，找出盲點
- **目標用戶**：
  - 主要：技術導向創業者 / 產品人（重視數據可信度）
  - 次要：一般創業者（想快速驗證）
- **核心價值主張**：10 維度量化分析，找出你不知道的盲點，而不是恐嚇你
- **主要任務流**：
  1. 輸入 idea → 得到免費基礎分析（部分維度 locked）
  2. 看到 score + 死亡維度 → 想解鎖詳細說明
  3. 訂閱 Pro（$X/mo）→ 解鎖全部 10 維度

---

## [BRAND & VOICE LAYER]

- **設計原則**：
  1. 資料可追溯 — 告訴用戶「我們用什麼資料」
  2. 量化信任 — 數字比形容詞更可信（"50+ data points" > "comprehensive"）
  3. 盲點視角 — 不說「你會死」，說「你有盲點，我幫你找到」
- **語氣**：分析感、直接、客觀、輕微緊迫感（盲點存在 → 需要解決）
- **用字風格**：問句觸發好奇（"What are your blind spots?"）、數字強化可信度
- **避免**：death framing、"How will you die"、過度恐嚇的負向框架；改用 "blind spots", "gaps", "risks you haven't considered"

---

## [DESIGN TOKEN LAYER]

### 顏色系統

```css
/* Primary Brand（violet — 與原站 indigo 做區隔）*/
--color-brand-primary: #7c3aed;           /* violet-600 */
--color-brand-primary-hover: #6d28d9;     /* violet-700 */
--color-brand-primary-light: #ede9fe;     /* violet-50 */
--color-brand-primary-light-border: rgba(124,58,237,0.2);

/* Neutral */
--color-neutral-950: #030712;
--color-neutral-500: #6b7280;
--color-neutral-400: #9ca3af;
--color-neutral-200: #e5e7eb;
--color-neutral-50: #f9fafb;
--color-neutral-0: #ffffff;

/* Semantic — 分析分數語意色（4色梯度）*/
--color-semantic-score-critical: #ef4444;   /* red-500 / highest risk dim */
--color-semantic-score-warning: #f97316;    /* orange-500 / score ring（<50）*/
--color-semantic-score-caution: #f59e0b;    /* amber-500 / moderate risk dim */
--color-semantic-score-good: #14b8a6;       /* teal-500 / strengths */
--color-semantic-risk-badge-bg: rgba(239,68,68,0.1);
--color-semantic-risk-badge-text: #ef4444;
--color-semantic-locked: #d1d5db;           /* gray-300 / paywall lock icon */
```

**WCAG AA 注意事項**：
- `color.semantic.score.critical` (#ef4444) on white：比值 3.99:1（不足 4.5:1）
  - 僅用於 icon / decorative / `font-size ≥ 18px`；避免小字 body text
  - 若需小字，改用 `#dc2626`（red-600，比值 5.07:1 ✅）
- `color.semantic.score.good` (#14b8a6) on white：比值 3.2:1（裝飾用可接受）

### 字型系統

```css
--font-family-sans: 'Inter', 'Inter Fallback', Arial, sans-serif;

/* 字級 */
--font-size-hero: clamp(2.25rem, 5vw, 3.75rem);
--font-size-h2: clamp(1.875rem, 3vw, 2.25rem);
--font-size-stat: 3rem;                        /* text-5xl / data-sources 大數字 */
--font-size-body: 1rem;
--font-size-small: 0.875rem;
--font-weight-heading: 700;
--font-weight-stat: 700;
--font-tracking-heading: -0.025em;
```

### 間距系統

```css
--spacing-section-x: 1.5rem;          /* px-6 */
--spacing-section-y: 5rem;            /* py-20 */
--spacing-data-sources-y: 6rem;       /* py-24 */
--spacing-container-max: 72rem;       /* max-w-6xl */
--spacing-pricing-max: 42rem;         /* max-w-2xl（2欄比 3欄窄）*/
--spacing-faq-max: 42rem;             /* max-w-2xl */
```

### 邊框 & 圓角

```css
--radius-sm: 0.375rem;   /* rounded-md / buttons */
--radius-md: 0.5rem;     /* rounded-lg / cards */
--radius-lg: 0.75rem;    /* rounded-xl / mock frames */
--radius-full: 9999px;   /* rounded-full / badges */
```

---

## [COMPONENT PATTERN LAYER]

### ScoreRing（SVG Circle）

```html
<!-- r=40.5 → circumference = 2πr ≈ 254.47 -->
<svg width="88" height="88" viewBox="0 0 88 88" aria-label="Score: [N] out of 100">
  <!-- Track -->
  <circle cx="44" cy="44" r="40.5"
          fill="none" stroke="#f3f4f6" stroke-width="7"/>
  <!-- Progress -->
  <circle cx="44" cy="44" r="40.5"
          fill="none"
          stroke="var(--color-semantic-score-warning)"
          stroke-width="7"
          stroke-linecap="round"
          stroke-dasharray="254.47"
          stroke-dashoffset="calc(254.47 * (1 - var(--score) / 100))"
          transform="rotate(-90 44 44)"
          class="score-ring-progress"/>
  <!-- Center Text -->
  <text x="44" y="44" dominant-baseline="middle" text-anchor="middle"
        class="text-2xl font-extrabold fill-[var(--color-semantic-score-warning)]">
    [N]
  </text>
</svg>
```

**動畫（IMPROVE 規格）**：

```css
@keyframes score-ring-in {
  from { stroke-dashoffset: 254.47; }
  to   { stroke-dashoffset: calc(254.47 * (1 - var(--score) / 100)); }
}
.score-ring-progress {
  animation: score-ring-in 1.2s ease-out forwards;
  animation-play-state: paused;
}
/* 用 IntersectionObserver 觸發：el.style.animationPlayState = 'running' */
```

### DimensionBar（帶 Lock State + Tooltip）

```html
<div class="dimension-bar" role="group" aria-label="[Dimension Name]: [N]%">
  <!-- Normal state -->
  <div class="flex items-center justify-between mb-1">
    <span class="text-sm font-medium text-gray-700">[Dimension Name]</span>
    <span class="text-sm text-gray-500">[N]%</span>
  </div>
  <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
    <div class="h-full rounded-full transition-all"
         style="width: [N]%; background-color: var(--score-color);"
         aria-valuenow="[N]" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>

<!-- Locked state -->
<div class="dimension-bar dimension-bar--locked relative"
     aria-label="[Locked dimension] — Upgrade to unlock">
  <div class="flex items-center justify-between mb-1">
    <!-- Lock icon replaces label -->
    <button class="flex items-center gap-1 text-sm text-gray-400 hover:text-violet-600
                   focus-visible:ring-2 focus-visible:ring-violet-600 rounded"
            popovertarget="dim-tooltip-[id]">
      🔒 <span class="sr-only">Locked</span>
    </button>
    <span class="text-sm text-gray-400">[N]%</span>
  </div>
  <!-- Bar track still visible, fill is gray-300 -->
  <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
    <div class="h-full rounded-full bg-gray-300"
         style="width: [N]%;"></div>
  </div>
  <!-- Tooltip（IMPROVE：必須實作 Popover，不能只有 lock icon）-->
  <div id="dim-tooltip-[id]" popover class="rounded-lg border border-gray-200 bg-white
              shadow-md p-3 text-sm text-gray-700 max-w-xs">
    升級到 Pro 版以解鎖「[Dimension Name]」的詳細分析：
    [具體說明解鎖後能看到什麼]
  </div>
</div>
```

### Source Card（資料來源）

```html
<div class="rounded-lg border border-gray-200 bg-white p-5
            hover:border-violet-300 hover:bg-gray-50/50
            transition-colors cursor-default">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-2xl" aria-hidden="true">[emoji]</span>
    <h3 class="font-semibold text-gray-900">[Source Category]</h3>
  </div>
  <ul class="space-y-1">
    <li class="text-sm text-gray-600">• [Source Name]</li>
    <!-- ... -->
  </ul>
</div>
```

### Pricing Cards（2-tier 對比）

```html
<!-- Free tier（弱化 CTA）-->
<div class="rounded-xl border border-gray-200 p-6">
  <button class="w-full h-11 rounded-lg border border-gray-300 bg-white
                 text-sm font-medium text-gray-700
                 hover:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-500">
    Get started free
  </button>
</div>

<!-- Pro tier（強化 CTA）-->
<div class="rounded-xl border border-violet-600 ring-1 ring-violet-600 p-6">
  <span class="text-xs font-semibold text-violet-600 uppercase tracking-wider">
    Most Popular
  </span>
  <button class="w-full h-11 rounded-lg bg-violet-600 hover:bg-violet-700
                 text-white text-sm font-medium
                 focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2">
    Subscribe now
  </button>
</div>
```

---

## [PAGE STRUCTURE LAYER]

### Landing Page（主頁）

```
Sticky Nav (py-3, bg-white/80 backdrop-blur)
  Logo | [Demo] [Data Sources] [Pricing] [FAQ] | [Login →]

Hero Section (pt-24 pb-16, gradient: violet-50 → white)
  [Section Badge]
  H1: [分析框架標題，避免 death framing]
  P: [副標題：資料來源可信度 + 速度]
  [Primary CTA →]
  "X ideas analyzed so far"

Demo Section (py-20, bg-gray-50)
  [Sticky Left: badge + h2 + p + feature-list × 4 + CTA]
  [Right: Analysis Report Mock（ScoreRing + DeathPredictions + DimensionBars）]

Data Sources Section (py-24, bg-white)
  [Section Badge] [H2] [P]
  Stats Row: [5-8 searches] [50+ data points] [<1 min] [10 dims]
  Source Cards 2×2 grid

Pricing Section (py-20, bg-white)
  [Section Badge] [H2] [P]
  2-tier Grid:
    Free (border-gray-200, outline CTA)
    Pro  (border-violet-600 + ring, filled CTA, Most Popular badge)

FAQ Section (py-20, bg-white)
  dl.divide-y.max-w-2xl.mx-auto × 6 items

Footer (py-10, border-t)
  [Logo + nav] ... [© Year ProductName]
```

### 路由

| 路徑 | 類型 |
|------|------|
| `/` | Landing（本設計系統）|
| `/playground` | AI 分析工具（輸入 idea → 得結果）|
| `/login` | 登入 / 訂閱管理 |
| `/privacy` | 法律頁 |
| `/terms` | 法律頁 |

---

## [EXCEPTION RULES]

- **禁止 death framing**：移除 "How will you die?" / "death predictions" 等文案；改用 "What are your blindspots?" / "Key risks to address"
- **ScoreRing 必須有動畫**：count-up（JS requestAnimationFrame）+ stroke-dashoffset CSS animation，否則技術受眾覺得是靜態假圖
- **DimensionBar locked 必須實作 Tooltip/Popover**：不能只有 lock icon，要解釋付費能看到什麼
- **color.semantic.score.critical 不用於小字 body text**：對比度不足 WCAG AA
- 主色使用 violet（`#7c3aed`），不使用 indigo
- 所有互動元素必須有 `focus-visible:ring` 支援鍵盤導覽

---

*生成日期：2026-04-08 | 來源：克隆分析 Stage 1–6*
*完整 spec 詳見：`cloning/clones/ideacheck/spec/inspired-design-system.md`*
