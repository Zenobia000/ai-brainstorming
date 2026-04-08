# Inspired Design System — IdeaCheck
> 來源：IdeaCheck analysis/L0–L4 + differentiation.md
> 用途：可直接交給 Lovable / Claude Code 產出 React + Tailwind 專案
> 假設品牌色 `#7C3AED`（請依實際需求覆蓋）

---

## 執行指令範本（Claude Code / Lovable）

```
請根據以下 design system 建立 React + Tailwind CSS v4 + shadcn/ui 專案：

{貼上本文件全文}

執行步驟：
1. 建立 tailwind.config.js（含所有 token）
2. 建立 src/components/ui/ 基礎元件（Button, Badge, Card, ScoreRing, DimensionBar, SourceCard, Tooltip）
3. 建立 src/app/page.tsx（Landing Page 7 sections）
4. ScoreRing 元件：count-up 動畫 + stroke-dashoffset CSS 動畫
5. DimensionBar 元件：支援 tooltip + lock state + ARIA label
6. 所有元件支援 keyboard navigation（focus-visible:ring）
```

---

## 1. Grid & Layout System

| Token | Value | 來源 |
|-------|-------|------|
| `layout.container.max-width` | `72rem / 1152px` | [inspired by: ideacheck] |
| `layout.container.pricing` | `56rem / 896px` | [inspired by: ideacheck] |
| `layout.container.pricing-grid` | `42rem / 672px` | [inspired by: ideacheck] |
| `layout.container.faq` | `42rem / 672px` | [inspired by: ideacheck] |
| `layout.section.padding-x` | `1.5rem / 24px` | [inspired by: ideacheck] |
| `layout.section.padding-y` | `5rem / 80px` | [inspired by: ideacheck] |
| `layout.section.padding-y.data-sources` | `6rem / 96px` | [inspired by: ideacheck] |

**Breakpoints**

| Token | Value | 來源 |
|-------|-------|------|
| `breakpoint.sm` | `640px` | [inspired by: ideacheck] |
| `breakpoint.lg` | `1024px` | [inspired by: ideacheck] |

**Grid**

| 斷點 | 主要 Layout | 備註 |
|------|-----------|------|
| mobile | 1 col | |
| sm+ | 2 col | pricing-grid + data-sources cards |
| lg+ | sticky-left + flex-right | demo section |

---

## 2. Color System

### Brand（OVERRIDE — 來源 indigo → 你的 violet）

| Token | Value | 來源 |
|-------|-------|------|
| `color.brand.primary` | `#7C3AED` | [override: indigo-600 → violet-600] |
| `color.brand.primary.hover` | `#6D28D9` | [override] |
| `color.brand.primary.light` | `#ede9fe` | [override: indigo-50 → violet-50] |
| `color.brand.primary.light-border` | `rgba(124,58,237,0.2)` | [override] |

### Neutral（與 ShipYourIdea 相同）

| Token | Value | 來源 |
|-------|-------|------|
| `color.neutral.950` | `#030712` | [inspired by: ideacheck] |
| `color.neutral.500` | `#6b7280` | [inspired by: ideacheck] |
| `color.neutral.400` | `#9ca3af` | [inspired by: ideacheck] ⚠️ decorative only |
| `color.neutral.200` | `#e5e7eb` | [inspired by: ideacheck] |
| `color.neutral.50` | `#f9fafb` | [inspired by: ideacheck] |
| `color.neutral.0` | `#ffffff` | [inspired by: ideacheck] |

### Semantic — Score Colors（KEEP 完整保留）

| Token | Value | 用途 | 來源 |
|-------|-------|------|------|
| `color.semantic.score.danger` | `#ef4444` | score ≤34, moat bar, death badges | [inspired by: ideacheck] |
| `color.semantic.score.warning` | `#f97316` | 35–59, score ring | [inspired by: ideacheck] |
| `color.semantic.score.caution` | `#f59e0b` | 60–69 | [inspired by: ideacheck] |
| `color.semantic.score.good` | `#14b8a6` | ≥70 | [inspired by: ideacheck] |
| `color.semantic.risk.badge-bg` | `rgba(239,68,68,0.1)` | risk level badge bg | [inspired by: ideacheck] |
| `color.semantic.locked` | `#d1d5db` | paywall lock icon | [inspired by: ideacheck] |

---

## 3. Typography System

| Token | Size | Weight | 來源 |
|-------|------|--------|------|
| `font.family.sans` | `Inter, "Inter Fallback", Arial` | — | [inspired by: ideacheck] |
| `font.family.mono` | `"JetBrains Mono", monospace` | — | [original] |
| `font.size.display` | 3.75rem / 60px | 700 | [inspired by: ideacheck] |
| `font.size.h1` | 3rem / 48px | 700 | [inspired by: ideacheck] |
| `font.size.h2` | 2.25rem / 36px | 700 | [inspired by: ideacheck] |
| `font.size.h3` | 1.875rem / 30px | 700 | [inspired by: ideacheck] |
| `font.size.h4` | 1.75rem / 28px | 700 | [inspired by: ideacheck] |
| `font.size.score` | 1.5rem / 24px | 800（extrabold）| [inspired by: ideacheck] |
| `font.size.stat` | 3rem / 48px | 700 | [inspired by: ideacheck] — data-sources |
| `font.size.body-lg` | 1.125rem / 18px | 400 | [inspired by: ideacheck] |
| `font.size.body` | 0.875rem / 14px | 400 | [inspired by: ideacheck] |
| `font.size.caption` | 0.75rem / 12px | 400–600 | [inspired by: ideacheck] |
| `font.size.micro` | 0.625rem / 10px | 500–700 | [inspired by: ideacheck] — dimension labels |

---

## 4. Spacing System（與 ShipYourIdea 相同）

Base unit: `4px`

| Token | Value |
|-------|-------|
| `spacing.lg` | 16px |
| `spacing.2xl` | 24px |
| `spacing.3xl` | 32px |
| `spacing.section-y` | 80px |
| `spacing.section-y.lg` | 96px |

---

## 5. Border & Radius System

| Token | Value | 來源 |
|-------|-------|------|
| `radius.md` | 8px | [inspired by: ideacheck] |
| `radius.lg` | 12px | [inspired by: ideacheck] |
| `radius.xl` | 16px | [inspired by: ideacheck] — source cards |
| `radius.full` | 9999px | [inspired by: ideacheck] |
| `border.color.default` | `#e5e7eb` | [inspired by: ideacheck] |
| `border.color.brand` | `#7C3AED` | [override] — unlimited tier |

---

## 6. Elevation & Shadow System

| Token | Value | 來源 |
|-------|-------|------|
| `shadow.card` | `0 2px 3px rgb(0 0 0/0.04), 0 0 0 1px rgb(34 42 53/0.05)` | [inspired by: ideacheck] |
| `shadow.card-hover` | Tailwind `shadow-lg` | [inspired by: ideacheck] — pricing card |
| `shadow.card-lg` | 5層多層陰影 | [inspired by: ideacheck] — mock frame |
| `shadow.btn` | `0 1px rgba(255,255,255,0.07) inset, 0 1px 3px rgba(17,24,39,0.2)` | [inspired by: ideacheck] |

---

## 7. Iconography

| Token | Value | 來源 |
|-------|-------|------|
| `icon.style` | Line（Heroicons Outline）| [inspired by: ideacheck] |
| `icon.stroke-width` | 1.5px | [inspired by: ideacheck] |
| `icon.size.default` | 20px | [inspired by: ideacheck] |
| `icon.size.card-header` | 20px in 36px container | [inspired by: ideacheck] |
| `icon.special.lock` | filled（paywall）| [inspired by: ideacheck] — KEEP |

---

## 8. Motion & Animation

| Token | Value | 來源 |
|-------|-------|------|
| `motion.duration.default` | 250ms | [override: 300ms → 250ms] |
| `motion.easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | [inspired by: ideacheck] |
| `motion.score-ring` | CSS `@keyframes strokeDraw` | [original — IMPROVE #1] |
| `motion.score-number` | `requestAnimationFrame` count-up | [original — IMPROVE #1] |
| `motion.card.border-hover` | `transition-colors hover:border-violet-300` | [override: indigo → violet] |
| `motion.card.shadow-hover` | `transition-shadow hover:shadow-lg` | [inspired by: ideacheck] |

---

## 9. Component Specs

### Score Ring（IMPROVE #1 — 加動畫）
```tsx
// SVG circle 88px, stroke 動畫
// stroke-dasharray = 2πr（r=40.5）= 254.47
// stroke-dashoffset：CSS @keyframes 從 254.47 → 目標值
// center：count-up number + risk badge
// 顏色跟隨 score：teal(≥70) / amber(60-69) / orange(35-59) / red(≤34)

<ScoreRing
  score={42}
  animate={true}
  ariaLabel="分析分數：42，極高風險"
/>
```

### Dimension Bar（IMPROVE #2 #3 — tooltip + ARIA + 顏色輔助）
```tsx
// h-2 rounded-full progress bar
// filled color 依 score 段（red/orange/amber/teal）
// icon 輔助色盲識別（★/！/✓）
// Locked state：lock icon + Tooltip（hover 說明付費後得到什麼）

<DimensionBar
  name="Willingness to Pay"
  score={35}
  locked={false}
  ariaLabel="付費意願分數：35，高風險"
/>

<DimensionBar
  name="Growth Strategy"
  score={undefined}
  locked={true}
  lockTooltip="升級解鎖：分析你的前 3 個獲客渠道"
/>
```

### Source Card（KEEP + OVERRIDE color）
```tsx
className="group rounded-2xl border border-gray-200 bg-white p-6
  transition-colors hover:border-violet-300 hover:bg-gray-50/50"
// icon container: group-hover:bg-violet-100（OVERRIDE: indigo → violet）
```

### Pricing Card — Free（KEEP outline）
```tsx
className="rounded-xl border border-gray-200 bg-white p-8
  transition-shadow hover:shadow-lg"
// CTA: outline style（bg-white ring-gray-200）
```

### Pricing Card — Pro（KEEP highlighted + OVERRIDE color）
```tsx
className="rounded-xl border border-violet-600 bg-white p-8
  ring-1 ring-violet-600 transition-shadow hover:shadow-lg"
// Most Popular badge: bg-violet-600（OVERRIDE）
// CTA: filled violet（OVERRIDE）
```

### Stat Item（KEEP + OVERRIDE color）
```tsx
className="text-center"
// number: text-5xl font-bold text-violet-600（OVERRIDE: indigo → violet）
// label: text-sm text-gray-500
```

---

## 10. Page Template — SaaS Landing（7 sections）

```
Nav（sticky, white/80, 4 links）
  ↓
Hero（violet-50 gradient, death framing → insight framing, 7 tags, CTA）
  ↓
Demo（gray-50, sticky-left + analysis report mock-right）
  ↓
Data Sources（white + violet radial glow, stats + 4 source cards）
  ↓
Pricing（white, 2-col: Free / Pro）
  ↓
FAQ（white, max-w-2xl, flat dl）
  ↓
Footer（white, 7 links）
```

**DROP 清單已移除**：death framing 過度文案 / 靜態 score ring / Circuit SVG 背景

---

## 11. 強化規範（來自 IMPROVE）

1. **ScoreRing 動畫**：進場時 `stroke-dashoffset` 從 254 → 目標值（CSS `@keyframes`），數字 count-up（`requestAnimationFrame`，duration 1.2s ease-out）

2. **Locked Dimension Tooltip**：lock state 的 DimensionBar 必須實作 hover Popover，顯示「付費後解鎖的具體說明」，不能只有 lock icon

3. **Dimension 色盲輔助**：每個 bar 加 ARIA `aria-label="Pain Reality 分數 72，良好"` + 視覺輔助 icon（`✓ ⚡ ！ ✗`）

4. **動態計數器**：Hero 的 "ideas analyzed" 改為從 API 拉即時數字（或 SSR 在 build time hydrate）

5. **Keyboard Navigation**：所有 button / card（hover 互動）/ tab 支援 `focus-visible:ring-2 focus-visible:ring-violet-600`

6. **Pricing diff 視覺化**：Free tier card 中，Locked dimensions 以模糊顯示（`blur-sm opacity-50`），讓訪客看到「還有 3 個維度但我看不到」
