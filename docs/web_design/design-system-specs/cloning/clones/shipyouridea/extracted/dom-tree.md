# DOM Tree — ShipYourIdea
> 語意結構，移除文字內容（用 {...} 代替）。技術棧：Next.js App Router + Tailwind CSS v4 + shadcn/ui

---

```
html[lang="zh-Hant"]
└── body.inter.min-h-screen.bg-background.antialiased          [root]
    ├── nav.sticky.top-0.z-50.w-full.border-b.bg-white/80      [nav]
    │   └── div.mx-auto.grid.max-w-6xl.grid-cols-3
    │       ├── a[href="/"]                                      [logo]
    │       │   ├── img[alt="ShipYourIdea" width=36]
    │       │   └── span.text-base.font-bold.text-gray-950
    │       ├── div.hidden.sm:flex.gap-8                         [nav-links]
    │       │   ├── a[href="/#demo"] {...}
    │       │   ├── a[href="/#pricing"] {...}
    │       │   └── a[href="/#faq"] {...}
    │       └── div.col-start-3.flex.justify-end.gap-2          [nav-cta]
    │           ├── button.text-xs.text-gray-500                 [lang-switcher]
    │           └── a.inline-flex.h-8.bg-indigo-600.rounded-lg  [login-btn]
    │
    ├── section.relative.overflow-hidden.px-6.pb-16.pt-24       [hero]
    │   ├── div.absolute.inset-0.bg-gradient-to-b               [bg-gradient: indigo-50 → white]
    │   ├── div.absolute.-z-10 (SVG circuit pattern)             [bg-decoration]
    │   ├── div.dot-grid.mask-fade.absolute.inset-0             [dot-grid overlay]
    │   └── div.relative.z-10.mx-auto.max-w-3xl.space-y-8      [hero-content]
    │       ├── div.space-y-4
    │       │   ├── h1.text-4xl.sm:text-5xl.lg:text-6xl.font-bold  [hero-headline]
    │       │   └── p.text-lg.text-gray-500.sm:text-xl              [hero-subtext]
    │       ├── div.flex.flex-wrap.justify-center.gap-2          [capability-tags]
    │       │   └── span.rounded-full.border.bg-white × 6        [tag-pill]
    │       ├── div                                               [hero-cta]
    │       │   └── a.h-11.bg-indigo-600.rounded-lg.ring-1       [primary-cta-btn]
    │       └── p.text-sm.text-gray-400                          [social-proof count]
    │
    ├── section#demo.bg-gray-50.px-4.py-20                       [demo]
    │   └── div.mx-auto.max-w-6xl
    │       └── div.lg:flex.gap-x-16
    │           ├── div.lg:w-96.lg:sticky.lg:top-24             [demo-description]
    │           │   ├── span.badge.bg-indigo-50.ring-indigo-600  [section-badge]
    │           │   ├── h2.text-[1.75rem].font-bold              [demo-heading]
    │           │   ├── p.text-[0.9375rem].text-gray-500         [demo-subtext]
    │           │   ├── div.h-px.w-12.bg-gray-300               [divider]
    │           │   ├── ul.space-y-3                             [feature-list]
    │           │   │   └── li.flex.items-start.gap-x-3 × 4
    │           │   │       ├── span.rounded-md.bg-indigo-600/10 [check-icon-bg]
    │           │   │       └── div (label + description)
    │           │   └── a.h-10.bg-indigo-600.rounded-md          [demo-cta-btn]
    │           └── div.relative.flex-auto                       [demo-preview]
    │               └── div.rounded-xl.bg-white.shadow-[multilayer] [app-mock-frame]
    │                   ├── div.border-b (traffic-light dots + title) [mock-titlebar]
    │                   ├── div.flex.border-b                    [mock-tabs]
    │                   │   ├── button.text-gray-950 (active tab)
    │                   │   └── button.text-gray-400
    │                   └── div.p-5.sm:p-6                       [mock-content]
    │                       ├── div.mb-5 (header + stage badge)
    │                       ├── div.rounded-lg.border-green-200.bg-green-50/50  [start-now-card]
    │                       ├── div.rounded-lg.border-indigo-100.bg-indigo-50/50  [outcome-card]
    │                       ├── div.rounded-lg.border-amber-200.bg-amber-50/50  [watchout-card]
    │                       └── button.border-gray-200 (expand btn)
    │
    ├── section#pricing.px-6.py-20                               [pricing]
    │   └── div.mx-auto.max-w-5xl.text-center
    │       ├── div (badge + h2 + p)                             [pricing-header]
    │       └── div.grid.sm:grid-cols-3.gap-6.max-w-4xl         [pricing-grid]
    │           ├── div.rounded-xl.border-gray-200.bg-white.p-8  [tier-free]
    │           │   ├── div.text-xs.text-indigo-600              [tier-label]
    │           │   ├── h3.text-3xl.font-bold                    [tier-price]
    │           │   ├── p.text-sm.text-gray-500                  [tier-tagline]
    │           │   ├── ul.space-y-3 × 5 items                   [tier-features]
    │           │   └── a.h-11.bg-indigo-600.rounded-lg          [tier-cta]
    │           ├── div.rounded-xl.border-emerald-200.bg-white.p-8  [tier-community]
    │           │   ├── span.-top-3.bg-emerald-500.rounded-full  [coming-soon-badge]
    │           │   ├── div.text-emerald-600                     [tier-label]
    │           │   ├── h3.text-3xl.font-bold                    [tier-price: "Coming Soon"]
    │           │   ├── ul.space-y-3 × 3 items
    │           │   └── button.bg-emerald-500.rounded-lg         [tier-cta]
    │           └── div.rounded-xl.border-amber-200.bg-white.p-8   [tier-coach]
    │               ├── span.-top-3.bg-amber-500.rounded-full    [coming-soon-badge]
    │               ├── div.text-amber-600                       [tier-label]
    │               ├── h3.text-3xl                              [tier-price: "Coming Soon"]
    │               ├── ul.space-y-3 × 1 item
    │               └── button.bg-amber-500.rounded-lg           [tier-cta]
    │
    ├── section#faq.px-6.py-20                                   [faq]
    │   └── div.mx-auto.max-w-2xl
    │       ├── div.mb-12.text-center (badge + h2)               [faq-header]
    │       └── dl.divide-y.divide-gray-200                      [faq-list]
    │           └── div.py-5 × 6                                 [faq-item]
    │               ├── dt.text-sm.font-semibold.text-gray-950
    │               └── dd.mt-2.text-sm.text-gray-500
    │
    └── footer.border-t.px-6.py-10                               [footer]
        └── div.mx-auto.max-w-6xl.flex.sm:flex-row
            ├── div.flex.gap-6                                    [footer-left]
            │   ├── a[href="/"] (logo)
            │   └── nav.flex.gap-4                               [footer-nav]
            │       └── a.text-sm.text-gray-400 × 5
            └── p.text-sm.text-gray-400                          [copyright]
```

---

## 頁面結構摘要

| 區塊 ID | 語意角色 | 背景 | 主要特徵 |
|---------|---------|------|---------|
| `nav` | 導覽 | white/80 backdrop-blur | sticky top; grid-cols-3 |
| `#hero` | 主視覺 | indigo-50 → white gradient | circuit SVG + dot-grid decoration |
| `#demo` | 功能展示 | gray-50 | sticky left panel + right mock frame |
| `#pricing` | 定價 | white | 3-col grid; 1 active + 2 Coming Soon |
| `#faq` | 常見問題 | white | dl divide-y pattern |
| `footer` | 頁尾 | white | flex-row; logo + nav + copyright |

## 組件模式識別

- **Section Badge**：`span.inline-flex.rounded-full.bg-indigo-50.ring-indigo-600/20` — 每個 section 頂部標籤
- **Primary CTA Button**：`a.h-11.bg-indigo-600.rounded-lg.ring-1.shadow-[inset+drop]` — 帶 gradient overlay
- **Feature List Item**：`li.flex.gap-x-3` + icon-bg（`span.rounded-md.bg-indigo-600/10`）+ label
- **Pricing Card**：`div.rounded-xl.border.bg-white.p-8` — border 顏色跟隨 tier 主色
- **Colored Info Card**：`div.rounded-lg.border-{color}-200.bg-{color}-50/50` — green/amber/indigo 三色
- **App Mock Frame**：`div.rounded-xl.shadow-[multilayer-5]` — 模擬 macOS 視窗標題列 + tab + content
