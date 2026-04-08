# L3 Templates — IdeaCheck
> Page-level 區塊組合。★ 標示與 ShipYourIdea 不同的區塊

---

## Template: Landing Page（Single Scroll，★ 比 ShipYourIdea 多 1 section）

**頁面類型**：SaaS AI Tool Marketing Landing（單頁滾動，6 個區塊）

---

### Block 1: Sticky Nav（★ 4 links）

```
[Logo] ...... [Demo] [數據來源] [Pricing] [FAQ] ...... [Lang] [Login→]
```

---

### Block 2: Hero Section（結構相同，★ 7 tags）

```
┌─────────────────────────────────────────────────────────┐
│         [CIRCUIT SVG + DOT GRID BACKGROUND]             │
│                                                         │
│              ● [Section Badge]                          │
│         H1: 主標題（death-framing）                      │
│         p:  副標題                                       │
│                                                         │
│    [Tag1] [Tag2] [Tag3] [Tag4] [Tag5] [Tag6] [Tag7]     │
│                                                         │
│           ████████████████████████████                  │
│           [  Validate your idea for free →  ]           │
│                                                         │
│              396 ideas analyzed so far                  │
└─────────────────────────────────────────────────────────┘
```

---

### Block 3: Demo / Analysis Showcase（★ mock 內容完全不同）

```
┌─────────────────────────────────────────────────────────┐
│  bg-gray-50                                             │
│                                                         │
│  [Sticky Description]    [Analysis Report Mock]         │
│  ─────────────────────   ────────────────────────────   │
│  ● badge                 [●●● IdeaCheck Analysis Report] │
│  H2: 死亡描述             [Overview] [Detailed Analysis] │
│  P: 說明                  ┌──────────────────────────┐  │
│  ─── divider              │  ○42 Very High Risk      │  │
│  ✓ 7+3 dimension          │  Most likely to die from │  │
│  ✓ Cited sources          │  1. ① Reason            │  │
│  ✓ Death predictions      │  2. ② Reason            │  │
│  ✓ Pivot suggestions      │  3. ③ Reason            │  │
│                           │  ─────────────────────── │  │
│  [Test your idea →]       │  Pain Reality  ████  72  │  │
│                           │  Willingness   ██    35  │  │
│                           │  ...（10 bars total）   │  │
│                           └──────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

### Block 4: Data Sources（★ IdeaCheck 獨有）

```
┌─────────────────────────────────────────────────────────┐
│  white + radial glow（indigo-500/4% blur-100px）         │
│                                                         │
│  ● Data-Driven                                          │
│  H2: Not guessing — researching                         │
│  p: 說明                                                 │
│                                                         │
│     5-8      50+       <1        10                     │
│  searches  data pts  minute  dimensions                  │
│                                                         │
│  ┌─────────────┐  ┌──────────────┐                      │
│  │ 🔍 Real-time│  │ 📊 Market    │                      │
│  │ Search      │  │ Data         │                      │
│  │ · Google    │  │ · App Store  │                      │
│  │ · Competitor│  │ · Crunchbase │                      │
│  └─────────────┘  └──────────────┘                      │
│  ┌─────────────┐  ┌──────────────┐                      │
│  │ 📈 Industry │  │ 👁 Competitive│                      │
│  │ Benchmarks  │  │ Intelligence │                      │
│  └─────────────┘  └──────────────┘                      │
│  2×2 grid, hover: border-indigo-300                     │
└─────────────────────────────────────────────────────────┘
```

---

### Block 5: Pricing Grid（★ 2-tier，Free vs Unlimited）

```
┌─────────────────────────────────────────────────────────┐
│  text-center                                            │
│  ● Pricing                                              │
│  H2: Simple, transparent pricing                        │
│  p:  副標題                                              │
│                                                         │
│  ┌──────────────────┐  ┌─────────────────────────────┐  │
│  │ Free             │  │ ★ Most Popular              │  │
│  │──────────────────│  │─────────────────────────────│  │
│  │ FREE             │  │ UNLIMITED                   │  │
│  │ $0  / mo        │  │ $3.29  / mo                 │  │
│  │ Test the waters  │  │ Too many ideas?             │  │
│  │ ──────────────── │  │ ──────────────────────────  │  │
│  │ ✓ 1 analysis/mo  │  │ ✓ Unlimited analyses        │  │
│  │ ✓ 7-dimension    │  │ ✓ 7+3 dimensions            │  │
│  │ ...              │  │ ✓ Early access              │  │
│  │ [Get started]    │  │ [Subscribe now]             │  │
│  │ outline CTA      │  │ filled indigo CTA           │  │
│  └──────────────────┘  └─────────────────────────────┘  │
│   border-gray-200       border-indigo-600 + ring-1       │
└─────────────────────────────────────────────────────────┘
Grid: sm:grid-cols-2, max-w-2xl
```

---

### Block 6: FAQ（Flat，相同）

```
max-w-2xl, dl divide-y, 6 items
```

---

### Block 7: Footer（★ 7 links）

```
[Logo + 服務/數據來源/價格/FAQ/聯絡/隱私/服務條款] ........ [© 2026 IdeaCheck.]
```

---

## 整頁節奏（Rhythm）

| # | Section | 背景 | 視覺密度 | 情感目標 |
|---|---------|------|---------|---------|
| 1 | Nav | white/80 | 極低 | 導航 |
| 2 | Hero | indigo-50 → white | 中 | 製造焦慮（death framing）+ 行動 |
| 3 | Demo | gray-50 | 高（分析報告 mock） | 展示「恐怖」的分析結果 |
| 4 | Data Sources | white + glow | 中 | 建立資料信任（消除「AI 亂猜」疑慮）|
| 5 | Pricing | white | 中 | 轉化（錨點 $3.29）|
| 6 | FAQ | white | 低 | 消除剩餘疑慮 |
| 7 | Footer | white | 極低 | 二次導航 |

**vs ShipYourIdea 的節奏差異**：
- IdeaCheck 在 Pricing 前多了「Data Sources」section
- 節奏：**焦慮 → 恐懼具象化 → 信任建立 → 低門檻付費**
- ShipYourIdea 節奏：**機會 → 行動方法 → 自選方案**
