# L1 Components — ShipYourIdea
> 對齊 `01_components_spec.md` 結構。

---

## Button

### Primary CTA Button（`btn-primary`）
```
h-11（44px） inline-flex items-center rounded-lg
bg-indigo-600 text-white text-sm font-medium
ring-1 ring-indigo-600
shadow-[0_1px_rgba(255,255,255,0.07)_inset,0_1px_3px_rgba(17,24,39,0.2)]
before: absolute gradient-to-b from-white/20 opacity-50 → hover:opacity-100
transition duration-300
```

| State | 樣式變化 |
|-------|---------|
| default | bg-indigo-600, ring-indigo-600 |
| hover | before-overlay opacity 50% → 100%（漸層加亮） |
| focus | TBD（未觀察到 focus ring） |
| disabled | TBD（Coming Soon 按鈕用獨立 button 元素）|

### Secondary CTA Button（`btn-secondary`，demo section）
```
h-10（40px） inline-flex items-center rounded-md
bg-indigo-600 text-white text-sm font-medium
ring-1 ring-indigo-600 shadow-[inset+drop]
transition duration-300
```

### Tier-specific Coming Soon Button（`btn-tier-emerald`）
```
h-11 w-full rounded-lg bg-emerald-500 text-white
transition hover:bg-emerald-600 disabled:opacity-50
```

### Tier-specific Coming Soon Button（`btn-tier-amber`）
```
h-11 w-full rounded-lg bg-amber-500 text-white
transition hover:bg-amber-600
```

### Ghost / Outline Button（expand button in mock）
```
w-full rounded-md border border-gray-200 py-2
text-xs font-medium text-gray-500
hover:border-gray-300 hover:text-gray-950
```

---

## Badge / Pill

### Section Badge（每個 section 頂部）
```
inline-flex items-center gap-1.5 rounded-full
bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600
ring-1 ring-inset ring-indigo-600/20
+ span.h-1.5.w-1.5.rounded-full.bg-indigo-500（dot indicator）
```

### Coming Soon Badge（pricing card 頂）
```
absolute -top-3 right-4
rounded-full px-3 py-1 text-[0.625rem] font-bold text-white shadow-sm
bg-emerald-500（Community）/ bg-amber-500（Coach）
```

### Stage Badge（mock frame）
```
shrink-0 rounded-full bg-indigo-100 px-2.5 py-0.5
text-[0.625rem] font-medium text-indigo-700
```

### Capability Tag Pill（hero）
```
rounded-full border border-gray-200 bg-white
px-3 py-1 text-xs font-medium text-gray-500
```

---

## Card

### Pricing Card（`card-pricing`）
```
flex flex-col rounded-xl border bg-white p-8 text-left
shadow-[0_2px_3px_rgb(0_0_0/0.04),0_0_0_1px_rgb(34_42_53/0.05)]

Free tier:    border-gray-200
Community:    border-emerald-200（+ Coming Soon badge）
Coach Sprint: border-amber-200（+ Coming Soon badge）
```

**內部結構**
```
div.mb-1.text-xs.font-semibold.uppercase.tracking-wider  ← tier label
div.flex.items-baseline.gap-1                             ← price row
  h3.text-3xl.font-bold                                   ← price number
p.text-sm.text-gray-500                                   ← tagline
ul.space-y-3.text-sm                                      ← feature list
  li: svg(check) + span
a/button（h-11, full-width）                               ← CTA
```

### Info Card（mock frame 內部）

**Start Now Card**
```
rounded-lg border border-green-200 bg-green-50/50 p-4
h4: text-xs font-bold text-green-800
ol: li（step number badge + text）
```

**Watch Out Card**
```
rounded-lg border border-amber-200 bg-amber-50/50 p-4
h4: text-xs font-bold text-amber-800
```

**Outcome Card（indigo）**
```
rounded-lg border border-indigo-100 bg-indigo-50/50 p-3
p.text-xs.text-indigo-800
```

### App Mock Frame（`card-mock-frame`）
```
rounded-xl bg-white
shadow-[5層多層陰影]
+ macOS titlebar（traffic light dots + centered title）
+ tab bar（2 tabs with active indicator）
+ content area（p-5 sm:p-6）
```

---

## Navigation

### Main Nav（`nav-sticky`）
```
sticky top-0 z-50 w-full border-b border-gray-950/5
bg-white/80 backdrop-blur-md
```

**內部 grid-cols-3**：Logo | Nav Links（hidden sm:flex）| Actions

### Nav Link
```
text-sm font-medium text-gray-500
transition-colors hover:text-gray-950
```

### Logo
```
flex items-center gap-2
img（36px） + span.text-base.font-bold.tracking-tight.text-gray-950
```

---

## List Item（Feature List）

```
li.flex.items-start.gap-x-3
  span.mt-1.flex.h-5.w-5.shrink-0.rounded-md.bg-indigo-600/10  ← icon container
    svg.h-3.w-3.fill-indigo-600                                  ← check icon
  div
    span.text-sm.font-medium.text-gray-950                       ← label
    span.ml-1.text-sm.text-gray-400                              ← description
```

---

## Divider
```
div.h-px.w-12.bg-gray-300（短橫線，demo section 使用）
dl.divide-y.divide-gray-200（FAQ 列表分隔）
```

---

## FAQ Item（`faq-item`）
```
div.py-5
  dt.text-sm.font-semibold.text-gray-950
  dd.mt-2.text-sm.leading-relaxed.text-gray-500
```
用 `dl.divide-y.divide-gray-200` 包裹，無 accordion 展開（靜態顯示）。

---

## Tab（mock frame 內）
```
button.relative.flex-1.py-2.5.text-xs.font-medium.transition-colors
Active:   text-gray-950 + div.absolute.inset-x-0.bottom-0.h-0.5.bg-indigo-600
Inactive: text-gray-400 hover:text-gray-600
```
