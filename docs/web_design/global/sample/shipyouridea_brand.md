# Brand System — ShipYourIdea（Inspired）

> 來源：Clone 分析 (2026-04-08) — shipyouridea.today
> 用途：作為 Prompt Architect Pipeline 的 Global Design System 輸入
> 注意：此為「啟發版」，主色已覆蓋為 violet-600（`#7C3AED`），避免與原站重疊
> 對齊：`global/BASE_DESIGN_SYSTEM.md` 結構

---

## [GLOBAL ROLE]

你是基於 ShipYourIdea 設計啟發的 AI 行動指南工具的資深產品設計師與前端工程師，負責維護整個專案的設計一致性。

重點：
- 正向賦能框架（action-oriented）
- 功能廣度展示（capability tags）
- 中高資訊密度的行動指南輸出
- 漸進升級的 pricing（Free → Pro → Coach Sprint）

---

## [PRODUCT CONTEXT LAYER]

- **產品一句話**：把你的 idea 變成一份免費行動計劃，讓你知道下一步該做什麼
- **目標用戶**：
  - 主要：有想法、想驗證可行性的早期創業者 / indie hacker
  - 次要：副業轉型中的上班族
- **核心價值主張**：不再漫無目的空想 — 得到具體行動清單、市場分析、競品洞察
- **主要任務流**：
  1. 輸入 idea → 獲得免費 action guide
  2. 閱讀 action guide → 認識產品價值
  3. 升級付費 → 解鎖 coaching / community

---

## [BRAND & VOICE LAYER]

- **設計原則**：
  1. 行動優先 — 每個元素都要驅動用戶向前一步
  2. 功能透明 — 在 CTA 前讓用戶清楚知道能得到什麼
  3. 漸進信任 — 免費層要足夠好，讓升級變成自然選擇
- **語氣**：直接、樂觀、賦能感（非恐嚇）；避免行銷腔
- **用字風格**：動詞主導（Get / Ship / Start / Level up），箭頭 → 表示前進
- **避免**：死亡隱喻、恐嚇框架、模糊的「AI-powered」說法

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

/* Semantic — 3色行動語意 */
--color-semantic-success: #10b981;        /* emerald-500 / action cards */
--color-semantic-success-light: #d1fae5;  /* green-200/50 */
--color-semantic-warning: #f59e0b;        /* amber-500 / caution cards */
--color-semantic-warning-light: #fef3c7;  /* amber-50/50 */
--color-semantic-info: #ede9fe;           /* violet-50 / info cards */
--color-semantic-info-border: rgba(196,181,253,0.5); /* violet-200 */
```

### 字型系統

```css
--font-family-sans: 'Inter', 'Inter Fallback', Arial, sans-serif;
/* Google Fonts: import Inter 400/500/600/700/900 */

/* 字級 */
--font-size-hero: clamp(2.25rem, 5vw, 3.75rem);   /* text-4xl → text-6xl */
--font-size-h2: clamp(1.875rem, 3vw, 2.25rem);    /* text-3xl → text-4xl */
--font-size-body: 1rem;                             /* text-base */
--font-size-small: 0.875rem;                        /* text-sm */
--font-weight-heading: 700;                         /* font-bold */
--font-tracking-heading: -0.025em;                  /* tracking-tight */
```

### 間距系統

```css
--spacing-section-x: 1.5rem;      /* px-6 */
--spacing-section-y: 5rem;        /* py-20 */
--spacing-hero-top: 6rem;         /* pt-24 */
--spacing-container-max: 72rem;   /* max-w-6xl */
--spacing-pricing-max: 56rem;     /* max-w-4xl */
--spacing-faq-max: 42rem;         /* max-w-2xl */
```

### 邊框 & 圓角

```css
--radius-sm: 0.375rem;   /* rounded-md / buttons */
--radius-md: 0.5rem;     /* rounded-lg / cards */
--radius-lg: 0.75rem;    /* rounded-xl / mock frames */
--radius-full: 9999px;   /* rounded-full / badges, tags */
```

### 陰影

```css
--shadow-card: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
--shadow-mock: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
```

---

## [COMPONENT PATTERN LAYER]

### Primary CTA Button

```html
<button class="h-11 px-8 rounded-lg bg-violet-600 hover:bg-violet-700
               text-white font-medium text-sm
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-violet-600 focus-visible:ring-offset-2
               transition-colors">
  [Action text] →
</button>
```

### Section Badge

```html
<span class="inline-flex items-center gap-x-1.5 rounded-full
             border border-violet-600/20 bg-violet-50
             px-3 py-1 text-sm font-medium text-violet-600">
  ● [Section Label]
</span>
```

### Capability Tag Pill

```html
<span class="inline-flex items-center gap-x-1.5 rounded-full
             border border-gray-200 px-3 py-1
             text-sm text-gray-600 bg-white">
  [emoji] [Feature Name]
</span>
```

### App Mock Frame

```html
<div class="border border-gray-200 rounded-xl shadow-lg overflow-hidden">
  <!-- macOS Titlebar -->
  <div class="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center">
    <div class="flex gap-1.5">
      <div class="w-3 h-3 rounded-full bg-red-400"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div class="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <span class="absolute left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600">
      [ProductName] - [Feature]
    </span>
  </div>
  <!-- Tab Bar -->
  <div class="flex border-b border-gray-200 px-4">
    <button class="px-3 py-2 text-sm border-b-2 border-violet-600 text-violet-600">Tab A</button>
    <button class="px-3 py-2 text-sm text-gray-500">Tab B</button>
  </div>
  <!-- Content -->
  <div class="p-4 bg-white"><!-- mock content --></div>
</div>
```

### Info Cards（3色語意）

```html
<!-- Start Now / Action Card -->
<div class="rounded-lg border border-green-200 bg-green-50/50 p-4">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-green-600">⚡</span>
    <h3 class="font-semibold text-green-800">Start Now</h3>
  </div>
  <!-- numbered items -->
</div>

<!-- Watch Out / Caution Card -->
<div class="rounded-lg border border-amber-200 bg-amber-50/50 p-4">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-amber-600">⚠️</span>
    <h3 class="font-semibold text-amber-800">Watch Out For</h3>
  </div>
</div>
```

---

## [PAGE STRUCTURE LAYER]

### Landing Page（主頁）

```
Sticky Nav (py-3, bg-white/80 backdrop-blur)
  Logo | [Demo] [Pricing] [FAQ] | [Login →]

Hero Section (pt-24 pb-16, gradient: violet-50 → white)
  [Section Badge]
  H1: [Action-oriented headline, max-w-2xl]
  P: [Subtitle, max-w-lg]
  [CapabilityTag × 6]
  [Primary CTA Button →]
  "X analyzed so far" (text-sm text-gray-400)

Demo Section (py-20, bg-gray-50)
  [Sticky Left: badge + h2 + p + divider + feature-list × 4 + CTA]
  [Right: AppMockFrame]

Pricing Section (py-20, bg-white)
  [Section Badge] [H2] [P]
  Grid 2–3 col:
    Free tier (border-gray-200, filled CTA)
    Pro tier (border-violet-200, filled CTA)
    [Coach Sprint - optional, border-amber-200, contact CTA]

FAQ Section (py-20, bg-white)
  [Section Badge] [H2]
  dl.divide-y.max-w-2xl.mx-auto × 6 items

Footer (py-10, border-t)
  [Logo + nav links] ... [© Year ProductName]
```

### 路由

| 路徑 | 類型 |
|------|------|
| `/` | Landing（本設計系統）|
| `/playground` | AI 工具主頁（需另定 spec）|
| `/login` | 登入頁（使用 shadcn Form）|
| `/privacy` | 法律頁 |
| `/terms` | 法律頁 |

---

## [EXCEPTION RULES]

- 不使用 fear-framing CTA（"How will you die?" 等）
- 不使用 JavaScript scroll reveal（改用 CSS `@keyframes fade-in-up` 或省略）
- Pricing 的 Coming Soon tier：若超過 3 個月未上線，移除並改為 Pro 直接訂閱
- 主色必須使用 violet（`#7c3aed`），不使用 indigo（避免與原站視覺重疊）
- 所有互動元素必須有 `focus-visible:ring` 支援鍵盤導覽

---

*生成日期：2026-04-08 | 來源：克隆分析 Stage 1–6*
*完整 spec 詳見：`cloning/clones/shipyouridea/spec/inspired-design-system.md`*
