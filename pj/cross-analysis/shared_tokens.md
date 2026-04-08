# Cross-Analysis 4.5：共同 L0 Token 抽取

> 兩站均使用的設計決策 → 可視為「AI SaaS Landing Page 行業慣例 Token 組」

---

## 共同 Token 清單

### 1. 顏色系統（100% 相同）

| Token | 值 | 用途（兩站共同）|
|-------|-----|----------------|
| `color.brand.primary` | `#4f46e5` (indigo-600) | CTA、badge、accent |
| `color.brand.primary.hover` | `#4338ca` (indigo-700) | hover state |
| `color.brand.primary.light` | `#eef2ff` (indigo-50) | badge bg、hero gradient |
| `color.brand.primary.light-border` | `rgba(79,70,229,0.2)` | badge ring |
| `color.neutral.950` | `#030712` | 所有 heading |
| `color.neutral.500` | `#6b7280` | body / subtext |
| `color.neutral.400` | `#9ca3af` | secondary text、footer |
| `color.neutral.200` | `#e5e7eb` | divider、card border |
| `color.neutral.50` | `#f9fafb` | demo section bg |
| `color.neutral.0` | `#ffffff` | body bg、card bg |

**洞察**：兩站幾乎肯定從同一個 Tailwind CSS v4 模板出發，indigo-600 是當時最流行的 AI SaaS primary color。

---

### 2. 字型系統（100% 相同）

| Token | 值 |
|-------|----|
| `font.family.sans` | `Inter, "Inter Fallback", Arial` |
| `font.size.hero-h1` | `text-4xl` → `sm:text-5xl` → `md:text-6xl` |
| `font.size.section-h2` | `text-3xl` → `sm:text-4xl` |
| `font.weight.heading` | `font-bold` |
| `font.tracking.heading` | `tracking-tight` |
| `font.size.body` | `text-base` |
| `font.size.small` | `text-sm` |
| `font.color.heading` | `text-gray-950` |
| `font.color.body` | `text-gray-500` |
| `font.color.muted` | `text-gray-400` |

---

### 3. 間距系統（100% 相同）

| Token | 值 | 用途 |
|-------|----|------|
| `spacing.section.padding-x` | `px-6` (24px) | 所有 section 水平內邊距 |
| `spacing.section.padding-y` | `py-20` (80px) | 大部分 section 垂直內邊距 |
| `spacing.hero.padding-top` | `pt-24` (96px) | Hero 頂部 |
| `spacing.container.max-width` | `max-w-6xl` (72rem) | 主 container |
| `spacing.pricing.max-width` | `max-w-4xl` (56rem) | Pricing grid |
| `spacing.faq.max-width` | `max-w-2xl` (42rem) | FAQ 區塊 |

---

### 4. 組件設計（共同規格）

**Sticky Nav**
```
bg-white/80 backdrop-blur-md
border-b border-gray-950/5
position: sticky; top: 0; z-index: 50;
py-3 px-6 max-w-6xl
```

**Section Badge（indigo pill）**
```
inline-flex items-center gap-x-1.5
rounded-full border border-indigo-600/20
bg-indigo-50 px-3 py-1
text-sm font-medium text-indigo-600
```

**Primary CTA Button**
```
h-11 px-8 rounded-lg
bg-indigo-600 hover:bg-indigo-700
text-white font-medium text-sm
focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2
```

**App Mock Frame**
```
border border-gray-200 rounded-xl shadow-lg overflow-hidden
titlebar: bg-gray-100 px-4 py-2 border-b border-gray-200
  traffic-lights: flex gap-1.5 → w-3 h-3 rounded-full (red/yellow/green)
  title: text-sm font-medium text-gray-600
```

**Hero Social Proof**
```
text-sm text-gray-400（hero CTA 正下方）
"X ideas analyzed so far"
```

**FAQ Pattern**
```
dl.divide-y.divide-gray-200.max-w-2xl.mx-auto
  div.py-5
    dt: text-base font-semibold text-gray-950
    dd: mt-2 text-sm text-gray-500 leading-relaxed
```

---

### 5. 斷點系統（共同）

| Token | 值 |
|-------|----|
| `breakpoint.sm` | `640px` |
| `breakpoint.lg` | `1024px` |

注意：兩站均未使用 `md:` 斷點（768px）— 直接從 sm 跳到 lg。

---

### 6. Scroll Reveal Animation（共同基線）

```
初始狀態：opacity: 0; transform: translateY(24px);
觸發：IntersectionObserver（元素進入 viewport）
結束：opacity: 1; transform: none;
Hero：排除（直接顯示）
```

---

## 差異 Token（僅一站使用）

| Token | 值 | 只有誰有 | 原因 |
|-------|----|---------|------|
| `color.semantic.score.*`（4色）| red/orange/amber/teal | IdeaCheck | 分析分數語意色 |
| `color.semantic.warning` | amber-500 | ShipYourIdea | Coming Soon + 警告卡片 |
| `color.semantic.success` | emerald-500 | ShipYourIdea | Community tier + Start Now |
| `color.semantic.locked` | gray-300 | IdeaCheck | Paywall lock icon |
| `font.size.stat-number` | `text-5xl font-bold text-indigo-600` | IdeaCheck | Data Sources section 大數字 |
| `layout.container.pricing-grid` | `max-w-2xl` | IdeaCheck | 2欄 pricing 比 3欄更窄 |
| `component.score-ring` | SVG circle stroke-dashoffset | IdeaCheck | 分數圓形儀表 |
| `component.dimension-bar` | bar track + fill + lock state | IdeaCheck | 10維度分析條 |
| `component.source-card` | hover:border-indigo-300 | IdeaCheck | 資料來源卡片 |
| `component.capability-tag` | emoji + text pill | ShipYourIdea | 功能標籤 |
| `component.info-card` | 3色語意卡片 | ShipYourIdea | action/caution/info |

---

## 行業慣例結論（"Shared Token Set"）

以下可視為「2025-2026 AI SaaS Micro-SaaS Landing Page」的**行業慣例設計基準**：

1. **Inter 字型**：90%+ AI SaaS Landing 使用
2. **Indigo-600 主色**：2024-2025 AI SaaS 最流行色（正在被 violet 取代）
3. **py-20 section 間距**：足夠的呼吸感不顯擁擠
4. **Sticky Nav + backdrop-blur**：已成標配
5. **Hero 下方社會證明計數器**：轉化率工具
6. **Flat FAQ（全展開）**：6 條以下時優於 accordion

**若你的品牌色是 indigo** → 與這兩站重疊。建議改用 violet-600（`#7c3aed`）或 sky-600 做區隔。

---

*來源：Stage 3 analysis / L0_foundations.md（兩站）+ Stage 4 differentiation.md（兩站）*
