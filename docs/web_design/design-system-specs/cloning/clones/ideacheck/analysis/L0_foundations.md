# L0 Foundations — IdeaCheck
> 對齊 `00_foundations_spec.md` 結構。來源：extracted/ + raw/screenshots/
> 注意：與 ShipYourIdea 共享大量 token，差異點已標 ★

---

## 1. Grid & Layout System

| Token | Value | 說明 |
|-------|-------|------|
| `layout.container.max-width` | `72rem / 1152px` | `max-w-6xl`（同 ShipYourIdea）|
| `layout.container.pricing` | `56rem / 896px` | `max-w-4xl`（同 ShipYourIdea）|
| `layout.container.pricing-grid` | `42rem / 672px` | `max-w-2xl`（★ 比 ShipYourIdea 更窄，2欄）|
| `layout.container.faq` | `42rem / 672px` | `max-w-2xl` |
| `layout.section.padding-x` | `1.5rem / 24px` | `px-6` |
| `layout.section.padding-y` | `5rem / 80px` | `py-20` |
| `layout.section.padding-y.data-sources` | `6rem / 96px` | `py-24`（★ data-sources 區特有）|

**Breakpoints**（同 ShipYourIdea）

| 名稱 | 值 | 前綴 |
|------|----|------|
| `breakpoint.sm` | `640px` | `sm:` |
| `breakpoint.lg` | `1024px` | `lg:` |

**Grid 欄數（視覺）**

| 斷點 | 欄數 | 主要用途 |
|------|------|---------|
| mobile (<640px) | 1 col | 全部堆疊 |
| sm (≥640px) | 2 col | pricing-grid（★ 2欄 vs ShipYourIdea 3欄）|
| sm (≥640px) | 2 col | data-sources card grid |
| lg (≥1024px) | 2 col | demo section（left sticky + right mock）|

---

## 2. Color System

**Brand**（與 ShipYourIdea 相同）

| Token | Value | 用途 |
|-------|-------|------|
| `color.brand.primary` | `#4f46e5` (indigo-600) | CTA、badge、pricing border（unlimited tier）|
| `color.brand.primary.hover` | `#4338ca` (indigo-700) | hover state |
| `color.brand.primary.light` | `#eef2ff` (indigo-50) | badge bg、icon bg、hero gradient |
| `color.brand.primary.light-border` | `rgba(79,70,229,0.2)` | badge ring |

**Neutral**（同 ShipYourIdea）

| Token | Value | 用途 |
|-------|-------|------|
| `color.neutral.950` | `#030712` | 所有 heading、定價數字 |
| `color.neutral.500` | `#6b7280` | body text、subtext、stat label |
| `color.neutral.400` | `#9ca3af` | footer links、secondary text |
| `color.neutral.200` | `#e5e7eb` | card border、bar track、faq divider |
| `color.neutral.50` | `#f9fafb` | demo section bg、dimension chart bg |
| `color.neutral.0` | `#ffffff` | body、card bg |

**Semantic（★ IdeaCheck 特有，用於分析分數）**

| Token | Value | 用途 |
|-------|-------|------|
| `color.semantic.score.danger` | `#ef4444` (red-500) | death prediction badges、moat bar、competitive bar |
| `color.semantic.score.warning` | `#f97316` (orange-500) | score ring stroke（score 42）、willingness-to-pay bar |
| `color.semantic.score.caution` | `#f59e0b` (amber-500) | market-size bar、timing bar |
| `color.semantic.score.good` | `#14b8a6` (teal-500) | pain-reality bar、technical-feasibility bar |
| `color.semantic.risk.badge-bg` | `rgba(239,68,68,0.1)` | "Very High Risk" badge 背景 |
| `color.semantic.risk.badge-text` | `#ef4444` | "Very High Risk" badge 文字 |
| `color.semantic.locked` | `#d1d5db` (gray-300) | locked dimension icon (paywall) |

---

## 3. Typography System

**Font Family**（同 ShipYourIdea）

| Token | Value |
|-------|-------|
| `font.family.sans` | `Inter, "Inter Fallback", Arial` |

**Type Scale**

| Role Token | Size | Line-height | Weight | 對應 class |
|-----------|------|------------|--------|-----------|
| `font.size.display` | 3.75rem (60px) | 1 | 700 | `lg:text-6xl font-bold` |
| `font.size.h1` | 3rem (48px) | 1 | 700 | `sm:text-5xl font-bold` |
| `font.size.h2.lg` | 2.25rem (36px) | calc(2.5/2.25) | 700 | `sm:text-4xl font-bold` |
| `font.size.h2.sm` | 1.875rem (30px) | calc(2.25/1.875) | 700 | `text-3xl font-bold` |
| `font.size.h4` | 1.75rem (28px) | 1.375 | 700 | `text-[1.75rem] leading-tight` |
| `font.size.score` | 1.5rem (24px) | TBD | 800 | `text-2xl font-extrabold`（★ score ring）|
| `font.size.stat` | 3rem (48px) | 1 | 700 | `text-5xl font-bold`（data-sources stats）|
| `font.size.body-lg` | 1.125rem (18px) | calc(1.75/1.125) | 400 | `text-lg` |
| `font.size.body` | 0.875rem (14px) | calc(1.25/0.875) | 400–600 | `text-sm` |
| `font.size.caption` | 0.75rem (12px) | calc(1/0.75) | 400–600 | `text-xs` |
| `font.size.micro` | 0.625rem (10px) | TBD | 500/700 | `text-[0.625rem]`（★ dimension label, risk badge）|

---

## 4. Spacing System

（與 ShipYourIdea 相同，基礎單位 4px）

| Token | px | rem | 頻繁用途 |
|-------|-----|-----|---------|
| `spacing.sm` | 8px | 0.5rem | gap-2 |
| `spacing.md` | 12px | 0.75rem | gap-3 |
| `spacing.lg` | 16px | 1rem | gap-4（source card grid gap）|
| `spacing.xl` | 20px | 1.25rem | gap-5 |
| `spacing.2xl` | 24px | 1.5rem | px-6, p-6（source card padding）|
| `spacing.3xl` | 32px | 2rem | p-8（pricing card）|
| `spacing.section-y` | 80px | 5rem | py-20 |
| `spacing.section-y.lg` | 96px | 6rem | py-24（data-sources）|

---

## 5. Border & Radius System

| Token | Value | 用途 |
|-------|-------|------|
| `radius.sm` | 0.375rem (6px) | `rounded-md` |
| `radius.md` | 0.5rem (8px) | `rounded-lg` |
| `radius.lg` | 0.75rem (12px) | `rounded-xl`（pricing card）|
| `radius.xl` | `1rem (16px)` | `rounded-2xl`（★ source cards，IdeaCheck 特有）|
| `radius.full` | 9999px | tag pills、most-popular badge |

| Token | Value | 用途 |
|-------|-------|------|
| `border.width.default` | 1px | 所有 border |
| `border.color.default` | `#e5e7eb` (gray-200) | source-card border、free-tier border |
| `border.color.brand` | `#4f46e5` (indigo-600) | unlimited-tier border（★ IdeaCheck 特有）|
| `border.color.nav` | `rgba(3,7,18,0.05)` | nav bottom border |
| `border.width.pricing-highlight` | `1px + ring 1px` | unlimited tier double-stroke |

---

## 6. Elevation & Shadow System

（與 ShipYourIdea 相同）

| Token | Value | 用途 |
|-------|-------|------|
| `shadow.card` | `0 2px 3px rgb(0 0 0/0.04), 0 0 0 1px rgb(34 42 53/0.05)` | pricing card base |
| `shadow.card-hover` | `shadow-lg`（Tailwind preset）| pricing card hover（★ IdeaCheck 特有）|
| `shadow.card-lg` | 5層多層陰影 | demo mock frame |
| `shadow.btn-inset` | `0 1px rgba(255,255,255,0.07) inset, 0 1px 3px rgba(17,24,39,0.2)` | primary CTA button |

---

## 7. Iconography

| 項目 | 值 |
|------|-----|
| `icon.style` | Line（Heroicons Outline）|
| `icon.stroke-width` | 1.5px |
| `icon.size.default` | 20px (`h-5 w-5`) |
| `icon.size.sm` | 12px (`h-3 w-3`) |
| `icon.size.card-header` | 20px in `h-9.w-9` container |
| `icon.special.lock` | filled（`path fill-rule="evenodd"`）—— paywall indicator |
| `icon.color` | `currentColor` 或 `text-indigo-600` |

---

## 8. Motion & Animation

（與 ShipYourIdea 相同 + 額外）

| Token | Value | 說明 |
|-------|-------|------|
| `motion.duration.fast` | 150ms | `--default-transition-duration` |
| `motion.duration.default` | 300ms | `duration-300` |
| `motion.easing.default` | `cubic-bezier(0.4, 0, 0.2, 1)` | |
| `motion.reveal.translate` | `translateY(24px) → none` | scroll reveal |
| `motion.card.border-transition` | `border-color + bg-color` | source card hover（★ IdeaCheck 特有）|
| `motion.card.shadow-transition` | `shadow → shadow-lg` | pricing card hover（★ IdeaCheck 特有）|
| `motion.score-ring` | 靜態（無 count-up 動畫）| score SVG ring |

---

## 來源信心度

| 章節 | 信心度 | 理由 |
|------|-------|------|
| 1. Grid & Layout | 🟢 High | DOM class 直接讀取 |
| 2. Color System | 🟢 High | CSS vars + class 頻率 + 截圖視覺；score bar 顏色直接讀 |
| 3. Typography | 🟡 Med | size/weight 確認；`font-extrabold` score 獨特 |
| 4. Spacing | 🟡 Med | Tailwind 4px grid 推算 |
| 5. Border & Radius | 🟢 High | `rounded-2xl` source card 直接觀察到 |
| 6. Shadow | 🟢 High | DOM arbitrary shadow class 直接讀 |
| 7. Iconography | 🟢 High | SVG source 直接讀 |
| 8. Motion | 🟡 Med | CSS class 確認；JS scroll reveal 邏輯推斷 |
