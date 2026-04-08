# L1 Components — IdeaCheck
> 對齊 `01_components_spec.md` 結構。★ 標示與 ShipYourIdea 不同的組件

---

## Button（與 ShipYourIdea 相同基礎，差異標★）

### Primary CTA Button（相同）
```
h-11 inline-flex items-center rounded-lg
bg-indigo-600 text-white text-sm font-medium ring-1 ring-indigo-600
shadow-[inset+drop] transition duration-300
```

### Free Tier Button（★ outline style，不同於 ShipYourIdea 的 filled）
```
h-11 w-full inline-flex justify-center rounded-lg
bg-white text-gray-950 ring-1 ring-gray-200
shadow-[0_1px_2px_rgb(0_0_0/0.04)]
hover:ring-gray-300
transition duration-300
```

### Unlimited Tier Button（★ filled indigo，與 Free Tier 對比）
```
h-11 w-full inline-flex justify-center rounded-lg
bg-indigo-600 text-white ring-1 ring-indigo-600
shadow-[inset+drop] transition duration-300
```

### Expand Button（mock frame）
```
w-full rounded-md border border-gray-200 py-2
text-xs font-medium text-gray-500
hover:border-gray-300 hover:text-gray-950
```

---

## Badge / Pill（與 ShipYourIdea 相同 + 新增★）

### Section Badge（相同）
```
inline-flex items-center gap-1.5 rounded-full
bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600
ring-1 ring-inset ring-indigo-600/20
```

### Capability Tag Pill（相同）
```
rounded-full border border-gray-200 bg-white
px-3 py-1 text-xs font-medium text-gray-500
```

### Most Popular Badge（★ IdeaCheck 特有）
```
inline-block rounded-full bg-indigo-600
px-2.5 py-0.5 text-xs font-medium text-white mb-3
```

### Risk Level Badge（★ IdeaCheck 特有）
```
inline-flex h-5 rounded-4xl border-transparent
bg-destructive/10 text-destructive
text-[0.625rem] font-medium px-2 py-0.5 mt-2
```

### Death Prediction Number（★）
```
flex h-5 w-5 shrink-0 items-center justify-center
rounded-full bg-red-100 text-[0.625rem] font-bold text-red-600
```

---

## Card（差異標★）

### Pricing Card — Free（★ outline style，與 ShipYourIdea 不同 CTA）
```
rounded-xl border border-gray-200 bg-white p-8 text-left
shadow-[0_2px_3px...] transition-shadow hover:shadow-lg
```

### Pricing Card — Unlimited（★ highlighted with indigo border + ring）
```
rounded-xl border border-indigo-600 bg-white p-8 text-left ring-1 ring-indigo-600
shadow-[0_2px_3px...] transition-shadow hover:shadow-lg
```

**內部結構（Unlimited tier 特有）**
```
div.inline-block.rounded-full.bg-indigo-600.text-white  ← Most Popular badge
div.mb-1.text-xs.font-semibold.uppercase.text-indigo-600
div.flex.items-baseline.gap-1
  h3.text-3xl.font-bold                                  ← "$3.29"
  span.text-sm.text-gray-500                             ← "/ mo"
ul.space-y-3
a.bg-indigo-600（CTA）
```

### Source Card（★ IdeaCheck 獨有）
```
group rounded-2xl border border-gray-200 bg-white p-6
transition-colors hover:border-indigo-300 hover:bg-gray-50/50
```

**內部結構**
```
div.mb-3.flex.items-center.gap-3
  div.h-9.w-9.rounded-lg.bg-indigo-50.text-indigo-600
  .group-hover:bg-indigo-100                              ← icon container（hover 變色）
  svg.h-5.w-5                                            ← Heroicon
  h3.text-sm.font-semibold.text-gray-950
p.text-xs.text-gray-500                                  ← card description
ul.space-y-2
  li: span.h-1.w-1.rounded-full.bg-gray-300 + text
```

### App Mock Frame（相同結構，★ 內容不同）
```
rounded-xl bg-white shadow-[5層多層陰影]
+ macOS titlebar（"IdeaCheck Analysis Report"）
+ tab: Overview / Detailed Analysis
+ content: score ring + death predictions + dimension bars
```

### Score Section（★ IdeaCheck 核心元件）
```
div.flex.gap-5
  div.flex-col.items-center
    div.relative（88px × 88px）
      svg（圓形進度圈）
        circle（track, #f3f4f6, r=40.5）
        circle（progress, stroke=orange, stroke-dasharray/dashoffset）
      span.text-2xl.font-extrabold（score number, color: orange）
    span.badge.bg-destructive/10（"Very High Risk"）
  div.flex-1
    h3.text-sm.font-bold（"Most likely to die from"）
    ol: li（red numbered badge + description text）
```

### Dimension Bar（★ IdeaCheck 核心元件）
```
div.flex.items-center.gap-2
  span.w-24.text-right.text-[0.625rem].text-gray-500  ← dimension name
  div.h-2.flex-1.rounded-full.bg-gray-100              ← track
    div.h-full.rounded-full.bg-{color}（width: {score}%）← fill
  span.w-7.text-right.text-[0.625rem].font-bold.tabular-nums.text-{color}  ← score
```

**顏色對應分數段**

| 分數 | Fill Color | Text Color |
|------|-----------|-----------|
| ≥70 | `bg-teal-500` | `text-teal-600` |
| 60–69 | `bg-amber-500` | `text-amber-600` |
| 35–59 | `bg-orange-500` | `text-orange-600` |
| ≤34 | `bg-red-500` | `text-red-600` |

---

## Stat Item（★ data-sources section）
```
div.text-center
  div.text-5xl.font-bold.tracking-tight.text-indigo-600  ← 大數字
  div.mt-2.text-sm.text-gray-500                          ← 說明文字
```

---

## Navigation（與 ShipYourIdea 相同結構，★ 4個 nav links）
```
nav.sticky.top-0.z-50 bg-white/80 backdrop-blur-md
grid-cols-3: logo | 4 links(sm:flex) | lang+login
```

---

## FAQ Item（與 ShipYourIdea 相同）
```
div.py-5
  dt.text-sm.font-semibold.text-gray-950
  dd.mt-2.text-sm.leading-relaxed.text-gray-500
```

---

## Tab（mock frame，與 ShipYourIdea 相同結構）
```
button.relative.flex-1.py-2.5.text-xs.font-medium
Active: text-gray-950 + indigo underline bar
Inactive: text-gray-400 hover:text-gray-600
```
