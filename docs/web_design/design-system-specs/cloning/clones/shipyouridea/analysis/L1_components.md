# L1 Components — shipyouridea

> Source: static HTML / RSC payload at https://shipyouridea.today/ (fetched 2026-04-08)
> Aligned with `templates/L1_components_template.md`

> **Top note**: Site shares Next.js codebase with `ideacheck.cc`. Key component-level deltas
> from ideacheck:
> 1. Logo sizes are **36 / 32** (nav / footer) vs ideacheck's **28 / 24** — logo intentionally larger.
> 2. **No `DataSources` component** — entire data-sources section absent from RSC tree.
> 3. Footer has **5 links** instead of ideacheck's 7 (missing 服務 / 數據來源).
>
> Most other primitives (Button, Nav shell, Footer chrome, NavLink) are byte-identical
> across the two sites because they come from the same shared codebase. Confidence is
> HIGH for everything visible in the static RSC payload; client-rendered inner content
> for Hero / InteractiveDemo / Pricing / FAQ is marked TBD.

---

## Button (Primary)

### 變體
| Variant | 背景 | 文字 | Border | 用途 |
|---------|------|------|--------|------|
| primary | `bg-indigo-600` → hover `bg-indigo-700` | `text-white` | none | CTA in nav, hero, pricing |
| secondary | TBD (client-rendered) | TBD | TBD | TBD |
| ghost | TBD | TBD | TBD | TBD |

### Tailwind classes (observed)
```
inline-flex h-8 items-center rounded-lg bg-indigo-600 px-4
text-sm font-medium text-white transition hover:bg-indigo-700
```

### 尺寸
| Size | Padding | Font Size | Height |
|------|---------|-----------|--------|
| sm (the only size observed in static HTML) | `px-4` | `text-sm` | `h-8` (32px) |

### 狀態
- default: `bg-indigo-600`
- hover: `bg-indigo-700`
- transition: `transition` (default Tailwind ~150ms)
- active / disabled / loading: not observed in static HTML — TBD

### Token 引用 (proposed)
- background: `color.brand.primary` (= indigo-600)
- background-hover: `color.brand.primary-hover` (= indigo-700)
- radius: `radius.lg` (= 0.5rem)
- height: `size.control.sm` (= 2rem)

### Delta vs ideacheck
Identical class string. No drift.

**Confidence: HIGH** — direct from RSC payload.

---

## Nav (Top / Sticky Header)

### Tailwind classes (observed)
Outer wrapper:
```
sticky top-0 z-50 w-full border-b border-gray-950/5
bg-white/80 backdrop-blur-md
```

Inner grid:
```
mx-auto grid max-w-6xl grid-cols-3 items-center px-6 py-3
```

### 結構
3-column grid:
1. Left — Logo + brand wordmark (`/logo-v2.png` 36x36)
2. Center — primary nav links (NavLink, see below)
3. Right — LanguageSwitcher + primary CTA Button

### 狀態
- default: `bg-white/80` translucent with backdrop blur
- scrolled: visually identical (sticky, no scroll-state class observed)

### Token 引用
- background: `color.surface.translucent` (= white/80)
- border-bottom: `color.border.subtle` (= gray-950/5)
- z-index: `z.sticky` (= 50)

### Delta vs ideacheck
Identical class string. Only difference is logo size inside the left cell (36 vs 28).

**Confidence: HIGH**

---

## Footer

### Tailwind classes (observed)
Outer:
```
border-t border-gray-950/5 px-6 py-10
```

Inner row:
```
mx-auto flex max-w-6xl flex-col items-center justify-between
gap-4 sm:flex-row
```

### 結構
- Brand block (left): `/logo-v2.png` 32x32 + wordmark
- Link list (right): 5 footer links — 價格 / FAQ / 聯絡我們 / 隱私權政策 / 服務條款

### 狀態
Static, no interactive states beyond per-link hover (see Nav Link / Footer variant).

### Token 引用
- border-top: `color.border.subtle`
- spacing-y: `space.10` (= 2.5rem)

### Delta vs ideacheck
- Logo 32 vs ideacheck 24.
- 5 links vs ideacheck 7 — **missing**: 服務, 數據來源.
- Class string for outer + inner: identical.

**Confidence: HIGH**

---

## Nav Link

Two visual variants observed (header vs footer).

### Header variant
```
text-sm font-medium text-gray-500
transition-colors hover:text-gray-950
```
- default: `text-gray-500`
- hover: `text-gray-950`
- weight: `font-medium`

### Footer variant
```
text-sm text-gray-400
transition-colors hover:text-gray-600
```
- default: `text-gray-400`
- hover: `text-gray-600`
- weight: regular

### Token 引用
- header default: `color.text.muted` (gray-500)
- header hover: `color.text.strong` (gray-950)
- footer default: `color.text.subtle` (gray-400)
- footer hover: `color.text.muted` (gray-600)

### Delta vs ideacheck
Identical.

**Confidence: HIGH**

---

## Logo

### Asset
- Source: `/logo-v2.png`
- Nav: 36 x 36 px (Next.js `<Image width={36} height={36}>`)
- Footer: 32 x 32 px

### Delta vs ideacheck
ideacheck uses 28 / 24. shipyouridea is intentionally larger (≈ +28% nav, +33% footer).
The asset filename is the same; only the rendered dimensions differ. **Do NOT copy
the binary asset** — clone work must substitute its own brand mark.

**Confidence: HIGH** — confirmed via `width\":36` / `width\":32` greps on live RSC payload.

---

## LanguageSwitcher

Present in the RSC component registry inside the nav right cell. Inner markup is
client-rendered (hydrates after mount), so the option list, current-locale styling,
and dropdown chrome are **TBD** until captured at L2 with a headless browser or
DevTools snapshot.

### What is known
- Position: nav right cell, before primary CTA button
- Component name in payload: `LanguageSwitcher`
- Server-rendered placeholder is empty (no class string available)

### Delta vs ideacheck
Same component name, same nav slot. Behavioural delta TBD.

**Confidence: MEDIUM** (presence HIGH, styling LOW)

---

## Hero / InteractiveDemo / Pricing / FAQ / IconMark

These are RSC-registered (their component names appear in the payload manifest), but
their rendered markup is produced on the client. The static HTML response contains
only the React Server Component shell — no class strings, no copy, no media URLs.

| Component | Slot | Static class evidence | Notes |
|-----------|------|------------------------|-------|
| Hero | top of `<main>` | none | Likely H1 + sub + CTA stack — TBD |
| InteractiveDemo | below Hero | none | Interactive widget, fully client-rendered |
| Pricing | mid-page | none | Plan cards — TBD |
| FAQ | below Pricing | none | Disclosure list — TBD |
| IconMark | inline (icons) | none | Probably an SVG primitive used in Hero / Pricing |

### Critical structural delta vs ideacheck
**`DataSources` component is absent** from shipyouridea's RSC tree. ideacheck has a
dedicated section listing data providers; shipyouridea drops it entirely. This is the
single biggest page-structure difference between the two sites.

**Confidence: LOW** for inner styling, **HIGH** for presence/absence at the registry level.

---

## 必抽元件清單 (status)

- [x] Button (primary only — secondary/ghost TBD)
- [ ] Input / TextArea / Select — not present in static HTML
- [ ] Card — not present in static HTML (likely inside Pricing, TBD)
- [ ] Badge / Tag — TBD
- [ ] Avatar — not used
- [ ] Modal / Dialog — TBD (likely inside InteractiveDemo)
- [ ] Tooltip — TBD
- [ ] Tabs — TBD
- [ ] Dropdown / Menu — partial (LanguageSwitcher hints at one)
- [ ] Toast / Alert — TBD
- [ ] Pagination — not used
- [ ] Breadcrumb — not used
- [x] Nav (top)
- [x] Footer
- [x] Nav Link
- [x] Logo
- [x] LanguageSwitcher (presence only)

---

## 元件信心度

| 元件 | 信心度 | 來源 |
|------|--------|------|
| Button (primary) | HIGH | RSC payload class string |
| Nav (top) | HIGH | RSC payload class string |
| Footer | HIGH | RSC payload class string |
| Nav Link (header) | HIGH | RSC payload class string |
| Nav Link (footer) | HIGH | RSC payload class string |
| Logo (sizing) | HIGH | RSC `width\":36` / `width\":32` |
| LanguageSwitcher | MEDIUM | component name in registry; inner TBD |
| Hero | LOW | registry only |
| InteractiveDemo | LOW | registry only |
| Pricing | LOW | registry only |
| FAQ | LOW | registry only |
| IconMark | LOW | registry only |
| DataSources | N/A | **absent** (delta vs ideacheck) |

---

## Cross-site delta summary (shipyouridea vs ideacheck)

| Aspect | ideacheck | shipyouridea | Notes |
|--------|-----------|--------------|-------|
| Logo nav size | 28 px | **36 px** | +28% |
| Logo footer size | 24 px | **32 px** | +33% |
| Footer links | 7 (價格 / FAQ / 服務 / 數據來源 / 聯絡我們 / 隱私權政策 / 服務條款) | **5** (價格 / FAQ / 聯絡我們 / 隱私權政策 / 服務條款) | drop 服務, 數據來源 |
| `DataSources` component | present | **absent** | structural delta |
| Button primary class | identical | identical | shared codebase |
| Nav / Footer chrome | identical | identical | shared codebase |
| NavLink colours | identical | identical | shared codebase |
