# L3 Templates — ShipYourIdea
> Page-level 區塊組合（Hero / Feature / Pricing / FAQ / Footer）

---

## Template: Landing Page（Single Scroll）

**頁面類型**：SaaS AI Tool Marketing Landing（單頁滾動）

---

### Block 1: Sticky Nav

```
[Logo] ............. [Demo] [Pricing] [FAQ] ............. [Lang] [Login→]
```

- 高度：`py-3`（約 48px）
- 背景：white/80 + backdrop-blur
- 固定在頂部，所有 section 共享

---

### Block 2: Hero Section

```
┌─────────────────────────────────────────────────────────┐
│         [CIRCUIT SVG + DOT GRID BACKGROUND]             │
│     (gradient: indigo-50 → white from top)              │
│                                                         │
│              ● [Section Sub-label badge]                │
│         H1: 主標題（max-w-2xl, 4–6xl）                   │
│         p:  副標題（max-w-lg, text-lg/xl）               │
│                                                         │
│    [🔍Tag] [🎯Tag] [🛠️Tag] [💰Tag] [🚀Tag] [📋Tag]      │
│                                                         │
│           ████████████████████████████                  │
│           [  Get your free action guide →  ]            │
│                                                         │
│              54 ideas analyzed so far                   │
└─────────────────────────────────────────────────────────┘
Padding: pt-24 pb-16（desktop: pt-32 pb-20）
Max-width: max-w-3xl（content）
```

**關鍵設計決策**：
- Capability tags 在 CTA 上方而非下方（先建立「它能做什麼」，再請行動）
- Social proof 在 CTA 正下方（最後一個說服信號）

---

### Block 3: Demo / Feature Showcase

```
┌─────────────────────────────────────────────────────────┐
│  bg-gray-50                                             │
│                                                         │
│  [Sticky Description]    [App Mock Frame]               │
│  ─────────────────────   ────────────────────────────   │
│  ● badge                 [●●● ShipYourIdea - Action Guide] │
│  H2: 功能描述             [QuickWins] [Sections]         │
│  P: 說明文字              ┌──────────────────────────┐  │
│  ─── (divider)            │  ⚡ Start Now            │  │
│  ✓ Feature 1             │  1. Action item          │  │
│  ✓ Feature 2             │  2. Action item          │  │
│  ✓ Feature 3             │  3. Action item          │  │
│  ✓ Feature 4             └──────────────────────────┘  │
│                           ┌──────────────────────────┐  │
│  [Get action guide →]     │  ⚠️ Watch Out For        │  │
│                           └──────────────────────────┘  │
│                           [View all sections →]          │
└─────────────────────────────────────────────────────────┘
Layout: lg:flex gap-x-16 / left: lg:w-96 sticky / right: flex-auto
```

---

### Block 4: Pricing Grid（3-tier）

```
┌─────────────────────────────────────────────────────────┐
│  text-center                                            │
│  ● Pricing                                              │
│  H2: Start free, level up as you grow                   │
│  p:  副標題                                              │
│                                                         │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ Free        │  │ Coming Soon  │  │ Coming Soon  │   │
│  │─────────────│  │──────────────│  │──────────────│   │
│  │ FREE        │  │ COMMUNITY    │  │ COACH SPRINT │   │
│  │ $0          │  │ Coming Soon  │  │ Coming Soon  │   │
│  │ tagline     │  │ tagline      │  │ tagline      │   │
│  │ ─────────── │  │ ──────────── │  │ ──────────── │   │
│  │ ✓ feature   │  │ ✓ feature    │  │ ✓ feature    │   │
│  │ ✓ feature   │  │ ✓ feature    │  │              │   │
│  │ ✓ feature   │  │ ✓ feature    │  │              │   │
│  │             │  │              │  │              │   │
│  │ [Get free]  │  │ [Join list]  │  │ [Contact]    │   │
│  └─────────────┘  └──────────────┘  └──────────────┘   │
│   border-gray-200   border-emerald-200  border-amber-200 │
└─────────────────────────────────────────────────────────┘
Grid: sm:grid-cols-3, max-w-4xl
```

---

### Block 5: FAQ（Flat）

```
┌─────────────────────────────────────────────────────────┐
│  text-center                                            │
│  ● FAQ                                                  │
│  H2: Frequently Asked Questions                         │
│                                                         │
│  ─────────────────────────────────────────────          │
│  Q: Question 1                                          │
│  A: Answer text...                                      │
│  ─────────────────────────────────────────────          │
│  Q: Question 2                                          │
│  A: Answer text...                                      │
│  × 6 items                                              │
└─────────────────────────────────────────────────────────┘
Max-width: max-w-2xl（居中）
```

---

### Block 6: Footer

```
┌─────────────────────────────────────────────────────────┐
│ border-t                                                │
│ [Logo + Nav links] ........... [© 2026 ShipYourIdea.]  │
│ 價格 / FAQ / 聯絡我們 / 隱私權政策 / 服務條款            │
└─────────────────────────────────────────────────────────┘
Layout: flex sm:flex-row（desktop 左右分開），padding py-10 px-6
Max-width: max-w-6xl
```

---

## 整頁節奏（Rhythm）

| # | Section | 背景 | 視覺密度 | 情感目標 |
|---|---------|------|---------|---------|
| 1 | Nav | white/80 | 極低 | 導航 |
| 2 | Hero | indigo-50 → white | 中 | 引起興趣 + 行動 |
| 3 | Demo | gray-50 | 高（mock frame） | 建立產品理解 |
| 4 | Pricing | white | 中 | 轉化 |
| 5 | FAQ | white | 低 | 消除疑慮 |
| 6 | Footer | white | 極低 | 二次導航 |

交替使用 white 與 gray-50 背景，製造視覺節奏感。
