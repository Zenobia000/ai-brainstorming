# L0 Foundations — ShipYourIdea
> 對齊 `00_foundations_spec.md` 結構。來源：extracted/ + raw/screenshots/

---

## 1. Grid & Layout System

| Token | Value | 說明 |
|-------|-------|------|
| `layout.container.max-width` | `72rem / 1152px` | `max-w-6xl` — 主要 section container |
| `layout.container.narrow` | `48rem / 768px` | `max-w-3xl` — hero content |
| `layout.container.pricing` | `56rem / 896px` | `max-w-4xl` — pricing grid |
| `layout.container.faq` | `42rem / 672px` | `max-w-2xl` |
| `layout.section.padding-x` | `1.5rem / 24px` | `px-6` |
| `layout.section.padding-y` | `5rem / 80px` | `py-20` |
| `layout.section.padding-y.hero` | `6rem top / 4rem bottom` | `pt-24 pb-16` → `sm:pt-32 sm:pb-20` |

**Breakpoints**

| 名稱 | 值 | 前綴 |
|------|----|------|
| `breakpoint.sm` | `640px` | `sm:` |
| `breakpoint.lg` | `1024px` | `lg:` |

**Grid 欄數（視覺）**

| 斷點 | 欄數 | 主要用途 |
|------|------|---------|
| mobile (<640px) | 1 col | 全部堆疊 |
| sm (≥640px) | 3 col | pricing-grid |
| lg (≥1024px) | 2 col | demo section（左 sticky + 右 mock）|

---

## 2. Color System

**Brand**

| Token | Value | 用途 |
|-------|-------|------|
| `color.brand.primary` | `#4f46e5` (indigo-600) | CTA 按鈕、section badge、check icon、pricing label |
| `color.brand.primary.hover` | `#4338ca` (indigo-700) | CTA hover state |
| `color.brand.primary.light` | `#eef2ff` (indigo-50) | Hero 漸層起點、badge 背景、icon 容器 |
| `color.brand.primary.light-border` | `rgba(79,70,229,0.2)` (indigo-600/20) | section badge ring |

**Neutral**

| Token | Value | 用途 |
|-------|-------|------|
| `color.neutral.950` | `#030712` | H1/H2/H3、nav logo、定價數字 |
| `color.neutral.500` | `#6b7280` | body text、subtext、nav links |
| `color.neutral.400` | `#9ca3af` | footer links、secondary text、inactive tab |
| `color.neutral.300` | `#d1d5db` | divider、mock frame dots |
| `color.neutral.200` | `#e5e7eb` | card border、tag pill border、faq divider |
| `color.neutral.100` | `#f3f4f6` | TBD |
| `color.neutral.50` | `#f9fafb` | demo section 背景 |
| `color.neutral.0` | `#ffffff` | body、card、nav 背景 |

**Semantic**

| Token | Value | 用途 |
|-------|-------|------|
| `color.semantic.success` | `#10b981` (emerald-500) | Community tier accent |
| `color.semantic.success.light` | `#d1fae5` (green-200/50) | Start Now card 背景 |
| `color.semantic.success.text` | `#065f46` (green-800) | Start Now numbered badge text |
| `color.semantic.warning` | `#f59e0b` (amber-500) | Coach Sprint tier + Watch Out card |
| `color.semantic.warning.light` | `#fef3c7` (amber-50/50) | Watch Out card 背景 |
| `color.semantic.info` | `#eef2ff` (indigo-50) | 資訊提示卡 |
| `color.semantic.info.border` | `rgba(199,210,254,0.5)` (indigo-100) | 資訊提示卡邊框 |

---

## 3. Typography System

**Font Family**

| Token | Value |
|-------|-------|
| `font.family.sans` | `Inter, "Inter Fallback", Arial` |
| `font.family.mono` | TBD（未出現） |

**Type Scale**

| Role Token | Size | Line-height | Weight | 對應 class |
|-----------|------|------------|--------|-----------|
| `font.size.display` | 3.75rem (60px) | 1 | 700 | `lg:text-6xl font-bold` |
| `font.size.h1` | 3rem (48px) | 1 | 700 | `sm:text-5xl font-bold` |
| `font.size.h2.lg` | 2.25rem (36px) | calc(2.5/2.25) | 700 | `sm:text-4xl font-bold` |
| `font.size.h2.sm` | 1.875rem (30px) | calc(2.25/1.875) | 700 | `text-3xl font-bold` |
| `font.size.h3` | 1.875rem (30px) | calc(2.25/1.875) | 700 | `text-3xl font-bold` (pricing price) |
| `font.size.h4` | 1.75rem (28px) | 1.375 | 700 | `text-[1.75rem] leading-tight` (demo h2) |
| `font.size.body-lg` | 1.125rem (18px) | calc(1.75/1.125) | 400 | `text-lg` |
| `font.size.body` | 0.875rem (14px) | calc(1.25/0.875) | 400/500/600 | `text-sm` |
| `font.size.caption` | 0.75rem (12px) | calc(1/0.75) | 400/500/600 | `text-xs` |
| `font.size.micro` | 0.625rem (10px) | TBD | 500/700 | `text-[0.625rem]` (badge) |

**Tracking**

| Token | Value | 用途 |
|-------|-------|------|
| `font.tracking.tight` | `-0.025em` | heading（`tracking-tight`） |
| `font.tracking.wider` | `0.05em` | uppercase label（`tracking-wider`）|

---

## 4. Spacing System

**Base unit**：`0.25rem / 4px`（Tailwind `--spacing: .25rem`）

| Token | px | rem | 用途 |
|-------|-----|-----|------|
| `spacing.xs` | 4px | 0.25rem | `gap-1` |
| `spacing.sm` | 8px | 0.5rem | `gap-2`, `px-2` |
| `spacing.md` | 12px | 0.75rem | `gap-3`, `px-3` |
| `spacing.lg` | 16px | 1rem | `gap-4`, `px-4`, `p-4` |
| `spacing.xl` | 20px | 1.25rem | `gap-5`, `p-5` |
| `spacing.2xl` | 24px | 1.5rem | `gap-6`, `px-6`, `p-6` |
| `spacing.3xl` | 32px | 2rem | `gap-8`, `p-8` |
| `spacing.4xl` | 40px | 2.5rem | `gap-10` |
| `spacing.section-y` | 80px | 5rem | `py-20` |

---

## 5. Border & Radius System

| Token | Value | 用途 |
|-------|-------|------|
| `radius.sm` | 0.375rem (6px) | `rounded-md`（secondary button, icon bg） |
| `radius.md` | 0.5rem (8px) | `rounded-lg`（CTA btn, section badge, info card） |
| `radius.lg` | 0.75rem (12px) | `rounded-xl`（pricing card, mock frame） |
| `radius.full` | 9999px | `rounded-full`（tag pill, coming-soon badge, step number） |

| Token | Value | 用途 |
|-------|-------|------|
| `border.width.default` | 1px | 所有 border |
| `border.color.default` | `#e5e7eb` (gray-200) | card border, faq divider |
| `border.color.nav` | `rgba(3,7,18,0.05)` (gray-950/5) | nav bottom border |
| `border.color.brand` | `#4f46e5` (indigo-600) | CTA btn ring |

---

## 6. Elevation & Shadow System

| Token | Value | 用途 |
|-------|-------|------|
| `shadow.sm` | `0 1px 2px rgb(0 0 0/0.04)` | TBD |
| `shadow.card` | `0 2px 3px rgb(0 0 0/0.04), 0 0 0 1px rgb(34 42 53/0.05)` | pricing card |
| `shadow.card-lg` | `0 2px 3px rgb(0 0 0/0.04), 0 24px 68px rgb(47 48 55/0.05), 0 4px 6px rgb(34 42 53/0.04), 0 0 0 1px rgb(34 42 53/0.05), 0 1px 1px rgb(0 0 0/0.05)` | demo mock frame（5層） |
| `shadow.btn-inset` | `0 1px rgba(255,255,255,0.07) inset, 0 1px 3px rgba(17,24,39,0.2)` | primary CTA button |

---

## 7. Iconography

| 項目 | 值 |
|------|-----|
| `icon.style` | Line（Heroicons Outline） |
| `icon.stroke-width` | 1.5px |
| `icon.size.default` | 20px (`h-5 w-5`) |
| `icon.size.sm` | 12px (`h-3 w-3`，check icon） |
| `icon.size.xs` | 10px (`h-2.5 w-2.5`，arrow） |
| `icon.color.default` | 跟隨文字色 (`currentColor`) |
| `icon.color.brand` | `#4f46e5` (`fill-indigo-600`) |

---

## 8. Motion & Animation

| Token | Value | 說明 |
|-------|-------|------|
| `motion.duration.fast` | 150ms | `--default-transition-duration: .15s` |
| `motion.duration.default` | 300ms | `duration-300`（按鈕 hover） |
| `motion.easing.default` | `cubic-bezier(0.4, 0, 0.2, 1)` | `--default-transition-timing-function` |
| `motion.reveal.translate` | `translateY(24px) → none` | section scroll reveal |
| `motion.reveal.opacity` | `0 → 1` | section scroll reveal（同上觸發）|
| `motion.hover.arrow` | `translateX(1px)` | CTA arrow icon |
| `motion.animate.pulse` | `2s cubic-bezier(.4,0,.6,1) infinite` | `--animate-pulse`（未用） |
| `motion.animate.spin` | `1s linear infinite` | `--animate-spin`（loading？未直接觀察） |

---

## 來源信心度

| 章節 | 信心度 | 理由 |
|------|-------|------|
| 1. Grid & Layout | 🟢 High | 從 DOM class 直接讀取 max-width 與 breakpoint prefix |
| 2. Color System | 🟢 High | 從 CSS vars + class 頻率分析，搭配截圖視覺確認 |
| 3. Typography | 🟡 Med | size/weight 從 class 確認；line-height 從 CSS var 推算 |
| 4. Spacing | 🟡 Med | 從 Tailwind 4px grid 推算；未逐一 computed |
| 5. Border & Radius | 🟢 High | class 值明確 |
| 6. Shadow | 🟢 High | 直接從 DOM Tailwind arbitrary shadow class 讀取 |
| 7. Iconography | 🟢 High | 直接讀 SVG source |
| 8. Motion | 🟡 Med | duration 從 class 確認；scroll reveal 邏輯推斷，未看 JS |
