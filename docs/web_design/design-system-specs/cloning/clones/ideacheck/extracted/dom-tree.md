# DOM Tree — IdeaCheck
> 語意結構，移除文字內容（用 {...} 代替）。技術棧：Next.js App Router + Tailwind CSS v4 + shadcn/ui

---

```
html[lang="zh-Hant"]
└── body.inter.min-h-screen.bg-background.antialiased          [root]
    ├── nav.sticky.top-0.z-50.w-full.border-b.bg-white/80      [nav]
    │   └── div.mx-auto.grid.max-w-6xl.grid-cols-3
    │       ├── a[href="/"]                                      [logo]
    │       │   ├── img[alt="IdeaCheck" width=28]
    │       │   └── span.text-base.font-bold.text-gray-950
    │       ├── div.hidden.sm:flex.gap-8                         [nav-links]
    │       │   ├── a[href="/#demo"] {...}
    │       │   ├── a[href="/#data-sources"] {...}              ← 額外項（vs ShipYourIdea）
    │       │   ├── a[href="/#pricing"] {...}
    │       │   └── a[href="/#faq"] {...}
    │       └── div.col-start-3.flex.justify-end.gap-2          [nav-cta]
    │           ├── button.text-xs.text-gray-500                 [lang-switcher]
    │           └── a.inline-flex.h-8.bg-indigo-600.rounded-lg  [login-btn]
    │
    ├── section.relative.overflow-hidden.px-6.pb-16.pt-24       [hero]
    │   ├── div.absolute.inset-0.bg-gradient-to-b               [bg-gradient: indigo-50 → white]
    │   ├── div.absolute.-z-10 (SVG circuit pattern)             [bg-decoration]  ← 與 ShipYourIdea 相同
    │   ├── div.dot-grid.mask-fade.absolute.inset-0             [dot-grid overlay]
    │   └── div.relative.z-10.mx-auto.max-w-3xl.space-y-8      [hero-content]
    │       ├── div.space-y-4
    │       │   ├── h1.text-4xl.sm:text-5xl.lg:text-6xl.font-bold  [hero-headline]
    │       │   └── p.text-lg.text-gray-500.sm:text-xl              [hero-subtext]
    │       ├── div.flex.flex-wrap.justify-center.gap-2          [dimension-tags] ← 7 items vs 6
    │       │   └── span.rounded-full.border.bg-white × 7        [tag-pill]
    │       ├── div                                               [hero-cta]
    │       │   └── a.h-11.bg-indigo-600.rounded-lg.ring-1       [primary-cta-btn]
    │       └── p.text-sm.text-gray-400                          [social-proof count]
    │
    ├── section#demo.bg-gray-50.px-4.py-20                       [demo]
    │   └── div.mx-auto.max-w-6xl
    │       └── div.lg:flex.gap-x-16
    │           ├── div.lg:w-96.lg:sticky.lg:top-24             [demo-description]
    │           │   ├── span.badge.bg-indigo-50                  [section-badge]
    │           │   ├── h2.text-[1.75rem].font-bold              [demo-heading]
    │           │   ├── p.text-[0.9375rem].text-gray-500         [demo-subtext]
    │           │   ├── div.h-px.w-12.bg-gray-300               [divider]
    │           │   ├── ul.space-y-3                             [feature-list]
    │           │   │   └── li.flex.items-start.gap-x-3 × 4
    │           │   └── a.h-10.bg-indigo-600.rounded-md          [demo-cta-btn]
    │           └── div.relative.flex-auto                       [demo-preview]
    │               └── div.rounded-xl.bg-white.shadow-[multilayer] [app-mock-frame]
    │                   ├── div.border-b (traffic-light dots + title) [mock-titlebar]
    │                   ├── div.flex.border-b                    [mock-tabs]
    │                   │   ├── button (Overview, active)
    │                   │   └── button (Detailed Analysis)
    │                   └── div.p-5.sm:p-6                       [mock-content]
    │                       ├── div.flex.gap-5                   [score-section]  ← 關鍵差異
    │                       │   ├── div.flex-col (score ring)
    │                       │   │   ├── svg (circular progress)  [score-ring: orange stroke]
    │                       │   │   ├── span.text-2xl.font-extrabold [score: "42"]
    │                       │   │   └── span.badge.bg-destructive/10 [risk-label]
    │                       │   └── div.flex-1 (death predictions list)
    │                       │       └── ol li × 3 (red badges)
    │                       └── div.rounded-lg.border.bg-gray-50/50  [dimension-chart]
    │                           ├── p.text-[0.625rem].uppercase  [chart-label]
    │                           └── div.space-y-2 × 10          [dimension-bars]
    │                               └── div.flex.gap-2
    │                                   ├── span.w-24.text-right [dim-name]
    │                                   ├── div.h-2.rounded-full.bg-gray-100 [bar-track]
    │                                   │   └── div.h-full.rounded-full.bg-{color} [bar-fill]
    │                                   └── span.w-7.text-right.font-bold [score-num]
    │
    ├── section#data-sources.relative.overflow-hidden.px-6.py-24  [data-sources] ← IdeaCheck 獨有
    │   ├── div.absolute (radial glow: indigo-500/4%)            [bg-glow]
    │   └── div.relative.mx-auto.max-w-6xl
    │       ├── div.mb-16.text-center (badge + h2 + p)           [section-header]
    │       ├── div.mb-16.flex.flex-wrap.justify-center.gap-16   [stats-row]
    │       │   └── div.text-center × 4                         [stat-item]
    │       │       ├── div.text-5xl.text-indigo-600.font-bold   [stat-number]
    │       │       └── div.text-sm.text-gray-500                [stat-label]
    │       └── div.grid.gap-4.sm:grid-cols-2                   [source-cards]
    │           └── div.rounded-2xl.border-gray-200.bg-white.p-6 × 4 [source-card]
    │               ├── div.flex.gap-3 (icon-bg + title)
    │               │   └── div.h-9.w-9.rounded-lg.bg-indigo-50  [icon-container]
    │               ├── p.text-xs.text-gray-500                  [card-desc]
    │               └── ul.space-y-2 × 4 items                  [source-list]
    │
    ├── section#pricing.px-6.py-20                               [pricing]
    │   └── div.mx-auto.max-w-4xl.text-center
    │       ├── div (badge + h2 + p)                             [pricing-header]
    │       └── div.grid.sm:grid-cols-2.gap-6.max-w-2xl         [pricing-grid] ← 2-col vs 3-col
    │           ├── div.rounded-xl.border-gray-200.bg-white.p-8  [tier-free]
    │           │   ├── div.text-indigo-600                      [tier-label]
    │           │   ├── div.flex.items-baseline.gap-1
    │           │   │   ├── h3.text-3xl.font-bold                [price: "$0"]
    │           │   │   └── span.text-sm.text-gray-500           [period: "/ mo"]
    │           │   ├── ul.space-y-3 × 5 items
    │           │   └── a.bg-white.ring-gray-200.rounded-lg      [tier-cta: outline style]
    │           └── div.rounded-xl.border-indigo-600.ring-1.bg-white.p-8  [tier-unlimited]
    │               ├── div.bg-indigo-600.rounded-full.text-white [most-popular-badge]
    │               ├── div.text-indigo-600                      [tier-label]
    │               ├── div.flex.items-baseline.gap-1
    │               │   ├── h3.text-3xl.font-bold                [price: "$3.29"]
    │               │   └── span.text-sm.text-gray-500           [period: "/ mo"]
    │               ├── ul.space-y-3 × 6 items
    │               └── a.bg-indigo-600.rounded-lg               [tier-cta: filled style]
    │
    ├── section#faq.px-6.py-20                                   [faq]
    │   └── div.mx-auto.max-w-2xl
    │       ├── div.mb-12.text-center (badge + h2)
    │       └── dl.divide-y.divide-gray-200
    │           └── div.py-5 × 6
    │               ├── dt.text-sm.font-semibold.text-gray-950
    │               └── dd.mt-2.text-sm.text-gray-500
    │
    └── footer.border-t.px-6.py-10                               [footer]
        └── div.mx-auto.max-w-6xl.flex.sm:flex-row
            ├── div.flex.gap-6                                    [footer-left]
            │   ├── a[href="/"] (logo)
            │   └── nav.flex.gap-4                               [footer-nav] ← 7 links vs 5
            └── p.text-sm.text-gray-400
```

---

## 頁面結構摘要

| 區塊 ID | 語意角色 | 背景 | 主要特徵 |
|---------|---------|------|---------|
| `nav` | 導覽 | white/80 backdrop-blur | sticky top; grid-cols-3; 4 nav links |
| `#hero` | 主視覺 | indigo-50 → white gradient | circuit SVG + dot-grid; 7 tag pills |
| `#demo` | 功能展示 | gray-50 | sticky left panel + circular score ring mock |
| `#data-sources` | 資料來源說明 | white + indigo radial glow | stats row (4) + 2×2 source card grid |
| `#pricing` | 定價 | white | 2-col; 1 free + 1 indigo border "Most Popular" |
| `#faq` | 常見問題 | white | dl divide-y; 6 items |
| `footer` | 頁尾 | white | flex-row; 7 footer links |

## 組件模式識別（vs ShipYourIdea 差異）

- **Score Ring**：`svg` circular progress + `span.text-2xl.font-extrabold` 分數 + `badge.bg-destructive/10`（IdeaCheck 獨有）
- **Dimension Bar Chart**：`div.h-2.rounded-full` progress bar，顏色依分數段（red/orange/amber/teal）
- **Locked Dimension**：用 `svg[lock-icon]` 替代文字 label，視覺暗示 paywall
- **Source Card**：`div.rounded-2xl.border.hover:border-indigo-300.hover:bg-gray-50/50` — hover 互動
- **Stat Item**：`div.text-5xl.text-indigo-600.font-bold` 大數字 + `div.text-sm.text-gray-500` 說明
- **Most Popular Badge**：`div.inline-block.rounded-full.bg-indigo-600.text-white` 置於 card 頂
