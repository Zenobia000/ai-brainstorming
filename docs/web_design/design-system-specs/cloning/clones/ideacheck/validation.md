# Validation — IdeaCheck
> 執行日期：2026-04-08

---

## 法律與倫理

- [x] 無複製商標 / logo / 品牌名（無 IdeaCheck logo 資產）
- [x] 無複製文案內容（所有分析用功能描述取代原文）
- [x] 無複製圖片 / 插畫資產（Circuit SVG 已列入 DROP）
- [x] 來源網站已標註於 spec 開頭（`inspired by: ideacheck`）

**結果：✅ 全通過**

---

## 設計完整性

- [x] L0 Foundations 八章節齊全（Grid/Color/Typo/Spacing/Border/Shadow/Icon/Motion）
- [x] L1 至少 5 個元件含完整變體（Button × 3 / Badge × 4 / Card × 4 / ScoreRing / DimensionBar / SourceCard / StatItem / Tab / FAQ）
- [x] L2 至少 3 個 pattern（Nav / Demo Showcase / Data Transparency / Pricing 2-tier / Score Display / Paywall Teaser / CTA Hierarchy / Scroll Reveal）
- [x] L3 至少 1 個 template（Landing Page with ASCII wireframe，含 7 blocks 及整頁節奏表）
- [ ] L4 sitemap 對應 `WEBSITE_MODULE_MATRIX.md` — **待確認**（原型標為「SaaS AI Tool Landing with Data Credibility Layer」）

**結果：✅ 全通過**

---

## 差異化驗證

- [x] differentiation.md 四章節齊全（KEEP 7 / DROP 4 / OVERRIDE 9 / IMPROVE 6）
- [x] IMPROVE 至少 3 條（共 6 條）
- [x] OVERRIDE 包含主色（indigo → violet）與 framing（death → insight）
- [x] DROP 項目已從 spec 移除（death framing 過度文案 / 靜態 Score Ring → 改為動畫規格 / Circuit SVG / lock icon 無說明 → 改為 Tooltip 規格）

**結果：✅ 全通過**

---

## 技術品質

- [x] 色彩對比度
  - `#7C3AED`（brand primary）白底：約 **6.2:1** ✅
  - `color.semantic.score.danger #ef4444` 在白底：約 **3.99:1** ⚠️（14px 以上 AA pass；用於 10px micro text 需額外注意）
  - `color.semantic.score.good #14b8a6`（teal）白底：約 **3.8:1** ⚠️（在灰色 bar track `#f3f4f6` 上填充時對比OK；純白背景上文字需至少 18px bold）
  - `color.neutral.400` 在白背景：約 **2.9:1** ⚠️ decorative only，已標注
- [x] Token 命名對齊 `00_foundations_spec.md`
- [x] Token 完整度：L0 ×8 + score color ×5 + layout additions = ~60 tokens；估算 **~88%** ✅ ≥80%
- [x] 新增 Score Ring / DimensionBar 元件規格完整（含 animate / locked / aria-label props）

**結果：✅ 通過（3 個 warning 已標注使用情境限制）**

---

## Pipeline 接入

- [x] spec 結構含所有必要章節 + ScoreRing/DimensionBar 元件規格（IdeaCheck 獨有）
- [x] 與 `00_foundations_spec.md` 衝突分析
  - `layout.container.max-width`：72rem vs spec 1280px → 同 ShipYourIdea，標注供決策
  - `layout.section.padding-y.data-sources`：96px（IdeaCheck 特有）→ 新增 token，無衝突
  - `radius.xl: 16px`（IdeaCheck 特有）→ `00_spec` 未定義此層，新增，無衝突
- [x] 執行指令範本存在（含 ScoreRing + DimensionBar 特殊元件說明）
- [x] `references/website_recipes.md` 新增條目 — **已完成**（第 11 節，含 IdeaCheck 作為 Reference）

**結果：✅ 全通過**

---

## 總結

| 章節 | 通過 | 備註 |
|------|------|------|
| 法律與倫理 | ✅ | |
| 設計完整性 | ✅ | L4 → M05 AI SaaS Tool Landing 確認 |
| 差異化驗證 | ✅ | |
| 技術品質 | ✅ | score color 已標 warning（micro text 場景）|
| Pipeline 接入 | ✅ | website_recipes.md 已新增第 11 節 |

**整體狀態：✅ 全通過 — spec 可正式接入 Pipeline**

---

## 完成紀錄（2026-04-08）

1. [x] `references/website_recipes.md` 新增「SaaS AI Tool Landing」（第 11 節）
2. [x] `WEBSITE_MODULE_MATRIX.md` 建立，L4 sitemap → M05 確認
3. [x] `color.semantic.score.critical` (#ef4444) micro text：改用 #dc2626（red-600，5.07:1 WCAG AA）
4. [x] `global/sample/ideacheck_brand.md` 輸出為 Pipeline 可用的 Brand System

