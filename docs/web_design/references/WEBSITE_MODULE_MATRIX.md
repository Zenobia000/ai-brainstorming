# Website Module Matrix

> 每一個「網站原型」對應的 L0–L4 設計模組清單。
> 用途：驗收時確認 L4 sitemap 是否對應到已知原型；新建網站時快速查詢所需模組。

---

## 如何使用

1. **驗收用**：在 `validation.md` 中確認「L4 sitemap 對應到本表某原型」
2. **新建用**：找到最接近的原型 → 抄取模組清單 → 在 `website_recipes.md` 中找配方

---

## 原型索引

| # | 原型名稱 | 簡短描述 | 對應 recipes 編號 |
|---|---------|---------|----------------|
| M01 | Marketing Landing | 單頁行銷著陸 | 1. Landing Page |
| M02 | SaaS Dashboard | 資料密集型 App | 3. SaaS Web App |
| M03 | Blog / Content Site | 以文章為核心 | 2. Content Site |
| M04 | E-Commerce | 商品瀏覽 + 結帳 | 7. E-Commerce |
| M05 | AI SaaS Tool Landing | AI 工具行銷 + 免費試用 | **11. SaaS AI Tool Landing** |
| M06 | API / Developer Docs | 技術文檔 + API 參考 | — |
| M07 | Community / Forum | 用戶生成內容 | — |
| M08 | Marketplace | 雙邊平台（買方 + 賣方）| 10. Marketplace |

---

## M01：Marketing Landing

**L4 Sitemap 原型**

```
/                  ← Hero + Feature + Testimonial + Pricing + FAQ + Footer
/privacy           ← 法律頁
/terms             ← 法律頁
```

**L0 必要 Token**：Grid / Color / Typography / Spacing / Shadow
**L1 必要元件**：Button / Badge / Card / Avatar（testimonial）
**L2 必要 Pattern**：Sticky Nav / Section Structure / CTA Hierarchy / FAQ
**L3 Template**：Single-Scroll Landing

---

## M05：AI SaaS Tool Landing ★（新增 2026-04-08）

> 來源：Clone 分析 — shipyouridea.today + ideacheck.cc

**L4 Sitemap 原型**

```
/                  ← Sticky Nav + Hero + Demo + [Data Sources] + Pricing + FAQ + Footer
/playground        ← 核心 AI 工具（無需登入）
/login             ← 登入 / 訂閱管理
/privacy           ← 法律頁
/terms             ← 法律頁
```

備注：`[Data Sources]` section 為可選（僅當產品有實際外部資料串接時加入）

**L0 必要 Token**

| 層級 | Token 組 | 說明 |
|------|---------|------|
| Color | brand.primary（indigo 或品牌色）+ neutral 9色 | 全站配色基礎 |
| Color | semantic.success / warning / info | action cards + Coming Soon badges |
| Color | semantic.score.*（4色）| 僅分析型產品（IdeaCheck 類型）|
| Typography | Inter / heading / body / muted | 標準 AI SaaS 字型 |
| Spacing | section.padding-x/y + container widths | 全站間距 |
| Shadow | card-sm / card-md | Mock Frame + Pricing Cards |
| Border | radius.lg / border.light | 卡片邊框 |

**L1 必要元件**

| 元件 | 說明 |
|------|------|
| Button（primary / ghost）| CTA 按鈕 + Free tier 按鈕 |
| Badge（section / tier / status）| Hero section pill + Pricing tier label + Coming Soon |
| Card（feature / pricing）| Feature cards + Pricing cards |
| CapabilityTagPill | Hero 功能標籤列（emoji + text）|
| AppMockFrame | macOS 風格 Demo Mock（traffic-light dots）|
| FAQ Item（dl/dt/dd）| 靜態展開 FAQ |

分析型產品額外元件：

| 元件 | 說明 |
|------|------|
| ScoreRing | SVG circle + stroke-dashoffset 動畫 |
| DimensionBar | 進度條 + lock state + tooltip |
| SourceCard | 資料來源卡片（hover 效果）|
| StatNumber | 大字數字（text-5xl）|

**L2 必要 Pattern**

| Pattern | 說明 |
|---------|------|
| Sticky Nav（毛玻璃）| `bg-white/80 backdrop-blur-md` |
| Section Badge → H2 → P → Content | 全站 section 節奏 |
| Feature Demo（sticky left + main right）| Demo section 布局 |
| Pricing Grid（2-tier or 3-tier）| 定價卡片組 |
| Flat FAQ | `dl.divide-y`，全展開，無 accordion |
| CTA Hierarchy（Primary / Secondary / Tertiary）| 3層 CTA 強度分級 |
| Scroll Reveal | `opacity:0 + translateY(24px)` → none |
| Social Proof Count | Hero CTA 下方計數器 |

可選 Pattern（分析型產品）：

| Pattern | 說明 |
|---------|------|
| Data Transparency Section | 統計數字列 + Source Cards |
| Paywall Teaser | Lock icon + 仍顯示 bar track |
| Fear-Frame CTA | 負向框架文案（High Risk / Death Predictions）|

**L3 Template**

| Template | 說明 |
|---------|------|
| AI Tool Landing — Action Guide type | ShipYourIdea 模式（行動指南型 mock）|
| AI Tool Landing — Analysis Report type | IdeaCheck 模式（分析報告型 mock）|

**Reference 克隆資料位置**

| 網站 | 路徑 |
|------|------|
| ShipYourIdea | `docs/web_design/design-system-specs/cloning/clones/shipyouridea/` |
| IdeaCheck | `docs/web_design/design-system-specs/cloning/clones/ideacheck/` |

---

## M06：API / Developer Docs

**L4 Sitemap 原型**

```
/docs              ← 主文件入口
/docs/getting-started
/docs/api-reference
/docs/guides
/changelog
```

**L0 必要 Token**：Color（需 code syntax highlight token）/ Typography（含 mono）/ Spacing
**L1 必要元件**：CodeBlock / Sidebar Nav / Breadcrumb / Search / Tag
**L2 必要 Pattern**：Two-Column Docs / Code Tabs / API Endpoint Card

---

## 版本歷史

| 日期 | 異動 |
|------|------|
| 2026-04-08 | 新增 M05 AI SaaS Tool Landing（來源：shipyouridea + ideacheck 克隆分析）|
| 初版 | M01 / M02 / M03 / M04 / M06 / M07 / M08 架構 |
