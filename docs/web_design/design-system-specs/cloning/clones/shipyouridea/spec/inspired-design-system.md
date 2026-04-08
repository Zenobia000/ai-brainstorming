# Inspired Design System — ShipYourIdea
> 來源：ShipYourIdea analysis/L0–L4 + differentiation.md
> 用途：可直接交給 Lovable / Claude Code 產出 React + Tailwind 專案
> 假設品牌色 `#7C3AED`（請依實際需求覆蓋）

---

## 執行指令範本（Claude Code / Lovable）

```
請根據以下 design system 建立 React + Tailwind CSS v4 + shadcn/ui 專案：

{貼上本文件全文}

執行步驟：
1. 建立 tailwind.config.js（含所有 token）
2. 建立 src/components/ui/ 基礎元件（Button, Badge, Card, Tabs, FAQ）
3. 建立 src/app/page.tsx（Landing Page 6 sections）
4. 所有元件支援 keyboard navigation（focus-visible:ring）
5. 無 scroll reveal JS（改用 CSS animation 或省略）
```

---

## 1. Grid & Layout System

| Token | Value | 來源 |
|-------|-------|------|
| `layout.container.max-width` | `72rem / 1152px` | [inspired by: shipyouridea] |
| `layout.container.narrow` | `48rem / 768px` | [inspired by: shipyouridea] |
| `layout.container.pricing` | `56rem / 896px` | [inspired by: shipyouridea] |
| `layout.container.faq` | `42rem / 672px` | [inspired by: shipyouridea] |
| `layout.section.padding-x` | `1.5rem / 24px` | [inspired by: shipyouridea] |
| `layout.section.padding-y` | `5rem / 80px` | [inspired by: shipyouridea] |
| `layout.section.padding-y.hero` | `6rem top / 5rem bottom` | [inspired by: shipyouridea] |

**Breakpoints**

| Token | Value | 來源 |
|-------|-------|------|
| `breakpoint.sm` | `640px` | [inspired by: shipyouridea] |
| `breakpoint.lg` | `1024px` | [inspired by: shipyouridea] |

**Grid**

| 斷點 | 主要 Layout | 備註 |
|------|-----------|------|
| mobile | 1 col | |
| sm+ | 2–3 col | pricing: 2-col（DROP Coming Soon，改為 Free + Pro）|
| lg+ | sticky-left + flex-right | demo section |

---

## 2. Color System

### Brand（OVERRIDE — 來源 indigo → 你的 violet）

| Token | Value | 來源 |
|-------|-------|------|
| `color.brand.primary` | `#7C3AED` | [override: indigo-600 → violet-600] |
| `color.brand.primary.hover` | `#6D28D9` | [override: indigo-700 → violet-700] |
| `color.brand.primary.light` | `#ede9fe` | [override: indigo-50 → violet-50] |
| `color.brand.primary.light-border` | `rgba(124,58,237,0.2)` | [override] |
| `color.brand.primary.deep` | `#5B21B6` | [original] — 用於 ring / 強調 border |

### Neutral

| Token | Value | 來源 |
|-------|-------|------|
| `color.neutral.950` | `#030712` | [inspired by: shipyouridea] |
| `color.neutral.500` | `#6b7280` | [inspired by: shipyouridea] |
| `color.neutral.400` | `#9ca3af` | [inspired by: shipyouridea] ⚠️ WCAG warning：僅用於 decorative text，最小 14px |
| `color.neutral.200` | `#e5e7eb` | [inspired by: shipyouridea] |
| `color.neutral.50` | `#f9fafb` | [inspired by: shipyouridea] |
| `color.neutral.0` | `#ffffff` | [inspired by: shipyouridea] |

### Semantic

| Token | Value | 來源 |
|-------|-------|------|
| `color.semantic.success` | `#10b981` | [inspired by: shipyouridea] |
| `color.semantic.success.light` | `#d1fae5` | [inspired by: shipyouridea] |
| `color.semantic.success.text` | `#065f46` | [inspired by: shipyouridea] |
| `color.semantic.warning` | `#f59e0b` | [inspired by: shipyouridea] |
| `color.semantic.warning.light` | `#fef3c7` | [inspired by: shipyouridea] |
| `color.semantic.info` | `#ede9fe` | [override: indigo-50 → violet-50] |
| `color.semantic.info.text` | `#5B21B6` | [override] |

---

## 3. Typography System

| Token | Size | Line-height | Weight | 來源 |
|-------|------|------------|--------|------|
| `font.family.sans` | `Inter, "Inter Fallback", Arial` | — | — | [inspired by: shipyouridea] |
| `font.family.mono` | `"JetBrains Mono", monospace` | — | — | [original] — 技術數據顯示 |
| `font.size.display` | 3.75rem / 60px | 1 | 700 | [inspired by: shipyouridea] |
| `font.size.h1` | 3rem / 48px | 1 | 700 | [inspired by: shipyouridea] |
| `font.size.h2` | 2.25rem / 36px | 1.11 | 700 | [inspired by: shipyouridea] |
| `font.size.h3` | 1.875rem / 30px | 1.2 | 700 | [inspired by: shipyouridea] |
| `font.size.h4` | 1.75rem / 28px | 1.375 | 700 | [inspired by: shipyouridea] |
| `font.size.body-lg` | 1.125rem / 18px | 1.556 | 400 | [inspired by: shipyouridea] |
| `font.size.body` | 0.875rem / 14px | 1.429 | 400 | [inspired by: shipyouridea] |
| `font.size.caption` | 0.75rem / 12px | 1.333 | 400–600 | [inspired by: shipyouridea] |
| `font.size.micro` | 0.625rem / 10px | 1.4 | 500–700 | [inspired by: shipyouridea] |
| `font.tracking.tight` | `-0.025em` | — | — | [inspired by: shipyouridea] |
| `font.tracking.wider` | `0.05em` | — | — | [inspired by: shipyouridea] |

---

## 4. Spacing System

Base unit: `4px（0.25rem）`

| Token | Value | 來源 |
|-------|-------|------|
| `spacing.xs` | 4px | [inspired by: shipyouridea] |
| `spacing.sm` | 8px | [inspired by: shipyouridea] |
| `spacing.md` | 12px | [inspired by: shipyouridea] |
| `spacing.lg` | 16px | [inspired by: shipyouridea] |
| `spacing.xl` | 20px | [inspired by: shipyouridea] |
| `spacing.2xl` | 24px | [inspired by: shipyouridea] |
| `spacing.3xl` | 32px | [inspired by: shipyouridea] |
| `spacing.section-y` | 80px | [inspired by: shipyouridea] |

---

## 5. Border & Radius System

| Token | Value | 來源 |
|-------|-------|------|
| `radius.sm` | 6px | [inspired by: shipyouridea] |
| `radius.md` | 8px | [inspired by: shipyouridea] |
| `radius.lg` | 12px | [inspired by: shipyouridea] |
| `radius.full` | 9999px | [inspired by: shipyouridea] |
| `border.width` | 1px | [inspired by: shipyouridea] |
| `border.color.default` | `#e5e7eb` | [inspired by: shipyouridea] |
| `border.color.brand` | `#7C3AED` | [override] |

---

## 6. Elevation & Shadow System

| Token | Value | 來源 |
|-------|-------|------|
| `shadow.card` | `0 2px 3px rgb(0 0 0/0.04), 0 0 0 1px rgb(34 42 53/0.05)` | [inspired by: shipyouridea] |
| `shadow.card-lg` | `0 2px 3px rgb(0 0 0/0.04), 0 24px 68px rgb(47 48 55/0.05), 0 4px 6px rgb(34 42 53/0.04), 0 0 0 1px rgb(34 42 53/0.05), 0 1px 1px rgb(0 0 0/0.05)` | [inspired by: shipyouridea] — mock frame |
| `shadow.btn` | `0 1px rgba(255,255,255,0.07) inset, 0 1px 3px rgba(17,24,39,0.2)` | [inspired by: shipyouridea] |

---

## 7. Iconography

| Token | Value | 來源 |
|-------|-------|------|
| `icon.style` | Line（Heroicons Outline）| [inspired by: shipyouridea] |
| `icon.stroke-width` | 1.5px | [inspired by: shipyouridea] |
| `icon.size.default` | 20px | [inspired by: shipyouridea] |
| `icon.size.sm` | 12px | [inspired by: shipyouridea] |

---

## 8. Motion & Animation

| Token | Value | 來源 |
|-------|-------|------|
| `motion.duration.fast` | 150ms | [inspired by: shipyouridea] |
| `motion.duration.default` | 250ms | [override: 300ms → 250ms] — 稍快 |
| `motion.easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | [inspired by: shipyouridea] |
| `motion.reveal` | CSS only（無 JS IntersectionObserver）| [original — IMPROVE #3] |

---

## 9. Component Specs

### Button — Primary
```tsx
// KEEP + OVERRIDE brand color
className="inline-flex h-11 items-center rounded-lg
  bg-violet-600 text-white text-sm font-medium
  ring-1 ring-violet-600
  shadow-[0_1px_rgba(255,255,255,0.07)_inset,0_1px_3px_rgba(17,24,39,0.2)]
  transition duration-250
  focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2
  hover:bg-violet-700"
```
強化規範（IMPROVE #keyboard）：所有 button 必須有 `focus-visible:ring-2`。

### Section Badge
```tsx
// KEEP + OVERRIDE brand color
className="inline-flex items-center gap-1.5 rounded-full
  bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600
  ring-1 ring-inset ring-violet-600/20"
```

### Pricing Card（2-tier — DROP Coming Soon）
```tsx
// Free tier
className="rounded-xl border border-gray-200 bg-white p-8 shadow-card"

// Pro tier（active）
className="rounded-xl border border-violet-600 bg-white p-8 ring-1 ring-violet-600 shadow-card"
```

### App Mock Frame
```tsx
// KEEP structure
className="rounded-xl bg-white shadow-card-lg"
// titlebar + 2 tabs + content area（p-5 sm:p-6）
```

### Info Cards（3 色語意 — KEEP）
```tsx
// Action (green)
className="rounded-lg border border-green-200 bg-green-50/50 p-4"
// Caution (amber)
className="rounded-lg border border-amber-200 bg-amber-50/50 p-4"
// Info (violet — OVERRIDE from indigo)
className="rounded-lg border border-violet-100 bg-violet-50/50 p-3"
```

---

## 10. Page Template — SaaS Landing（6 sections）

```
Nav（sticky, white/80, backdrop-blur）
  ↓
Hero（violet-50 gradient, max-w-3xl, h1 + tags + CTA + count）
  ↓
Demo（gray-50, sticky-left + mock-right）
  ↓
Pricing（white, 2-col: Free / Pro）
  ↓
FAQ（white, max-w-2xl, flat dl）
  ↓
Footer（white, flex-row）
```

**DROP 清單已移除**：Coming Soon tier / Circuit SVG 背景 / 行銷腔文案模板

---

## 11. 強化規範（來自 IMPROVE）

1. **Keyboard Navigation**：所有互動元件（button, link, tab）必須實作 `focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2`
2. **色彩對比度**：`text-gray-400`（#9ca3af）只能用於 decorative / 14px+ 場景；主要說明文字最低 `text-gray-500`
3. **無 JS Scroll Reveal**：使用 CSS `@keyframes fadeInUp` + `animation-delay` 替代，或直接省略動畫
4. **Demo 互動化**：mock frame 改為可操作的 embedded playground（iframe 或 client component）
5. **Pricing 進度顯示**：Free tier 加入 `X/5 analyses today` 計數器
6. **SEO Schema**：`<script type="application/ld+json">` 加入 `Product` + `FAQPage` schema
