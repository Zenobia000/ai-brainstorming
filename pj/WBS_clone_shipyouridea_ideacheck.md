# WBS：網站克隆分析專案

**專案代號**：CLONE-2026-04  
**PM 日期**：2026-04-08  
**目標網站**：
- A 站：[shipyouridea.today/#pricing](https://shipyouridea.today/#pricing)
- B 站：[ideacheck.cc/#demo](https://ideacheck.cc/#demo)

**目的**：萃取兩站的設計決策與定價策略，產出可注入 Prompt Architect Pipeline 的 inspired design spec。

---

## 目標範疇確認

| 網站 | 分析重點頁面 | 核心觀察點 | 當前進度 |
|------|------------|-----------|---------|
| ShipYourIdea | `/#pricing`（含 Hero / Features / Pricing / FAQ） | 3 層定價設計（Free / Community / Coach Sprint）、Coming Soon 策略 | 截圖已完成 ✅ |
| IdeaCheck | `/#demo`（含 Demo / Data Sources / Pricing / FAQ） | 2 層定價（Free / $3.29 Unlimited）、資料驅動信任設計 | 未開始 ⬜ |

---

## WBS 結構總覽

```
1.0  專案準備
2.0  ShipYourIdea 克隆執行
  2.1  Stage 1：Capture（擷取）
  2.2  Stage 2：Extract（結構化抽取）
  2.3  Stage 3：Analyze（四層分析 L0–L4）
  2.4  Stage 4：Differentiate（差異化決策）
  2.5  Stage 5：Specify（規格化輸出）
  2.6  Stage 6：Validate（驗收）
3.0  IdeaCheck 克隆執行
  3.1  Stage 1：Capture
  3.2  Stage 2：Extract
  3.3  Stage 3：Analyze
  3.4  Stage 4：Differentiate
  3.5  Stage 5：Specify
  3.6  Stage 6：Validate
4.0  跨站整合分析
5.0  Pipeline 接口輸出
```

---

## 1.0 專案準備

| WBS ID | 工作項目 | 產出 | 工具 | 狀態 |
|--------|---------|------|------|------|
| 1.1 | 建立目錄結構：`clones/shipyouridea/` | 子目錄 raw/extracted/analysis/spec | bash | ✅ 已存在 |
| 1.2 | 建立目錄結構：`clones/ideacheck/` | 子目錄 raw/extracted/analysis/spec | bash | ⬜ |
| 1.3 | 確認 robots.txt 合規 | 檢查清單勾選 | curl / 瀏覽器 | ⬜ |
| 1.4 | 填寫 README.md（含「為什麼複製這個」） | 兩站各一份 README | template | ⬜ |

---

## 2.0 ShipYourIdea 克隆執行

### 2.1 Stage 1：Capture（擷取）

> 目標：取得三斷點截圖 + DOM + CSS 原始資料

| WBS ID | 工作項目 | 產出檔案 | 工具 | 狀態 |
|--------|---------|---------|------|------|
| 2.1.1 | 375px 截圖（mobile） | `raw/screenshots/mobile.png` | Playwright / browser MCP | ✅ |
| 2.1.2 | 768px 截圖（tablet） | `raw/screenshots/tablet.png` | Playwright / browser MCP | ✅ |
| 2.1.3 | 1440px 截圖（desktop） | `raw/screenshots/desktop.png` | Playwright / browser MCP | ✅ |
| 2.1.4 | 擷取渲染後 DOM | `raw/dom.html` | Playwright `.content()` | ⬜ |
| 2.1.5 | 擷取 `:root` CSS Variables | `raw/css-vars-raw.json` | Playwright `getComputedStyle` | ⬜ |
| 2.1.6 | 擷取字型清單 | `raw/fonts.json` | `document.fonts` API | ⬜ |
| 2.1.7 | 擷取 Media Queries 斷點 | `raw/media-queries.json` | stylesheet parsing | ⬜ |
| 2.1.8 | Computed CSS（關鍵元素） | `raw/computed-styles.json` | `getComputedStyle` | ⬜ |

**驗收門檻**：三斷點截圖完整 + `dom.html` 可解析 + `css-vars-raw.json` 有值

---

### 2.2 Stage 2：Extract（結構化抽取）

> 把 raw 轉成 AI 易讀中繼格式。不做判斷，只結構化。

| WBS ID | 工作項目 | 產出檔案 | Prompt |
|--------|---------|---------|--------|
| 2.2.1 | 簡化 DOM 樹（標註語意角色） | `extracted/dom-tree.md` | `prompts/02_extract.md` |
| 2.2.2 | CSS 變數 + 頻率統計 | `extracted/css-vars.json` | `prompts/02_extract.md` |
| 2.2.3 | 斷點與樣式變化清單 | `extracted/media-queries.json` | `prompts/02_extract.md` |
| 2.2.4 | 字型 / icon / 圖片風格清單 | `extracted/assets-inventory.md` | `prompts/02_extract.md` |

**驗收門檻**：DOM 樹可辨識 hero/nav/pricing/faq 語意區塊；CSS 變數頻率統計完整

---

### 2.3 Stage 3：Analyze（四層分析 L0–L4）

> 映射到既有 spec 四層結構

| WBS ID | 工作項目 | 產出檔案 | Prompt |
|--------|---------|---------|--------|
| 2.3.1 | L0 Foundations（Color/Typo/Spacing/Grid/Radius/Shadow/Motion） | `analysis/L0_foundations.md` | `prompts/03_analyze_L0_foundations.md` |
| 2.3.2 | L1 Components（Button/Input/Card/Badge/Modal 及 states） | `analysis/L1_components.md` | `prompts/03_analyze_L1_components.md` |
| 2.3.3 | L2 Patterns（Nav/Form/Table/Feedback/Empty State） | `analysis/L2_patterns.md` | `prompts/03_analyze_L2_patterns.md` |
| 2.3.4 | L3 Templates（Hero/Pricing Grid/Features/FAQ/Footer 區塊組合） | `analysis/L3_templates.md` | `prompts/03_analyze_L3_templates.md` |
| 2.3.5 | L4 Sitemap（頁面 + 路由 + 功能分區 Mermaid） | `analysis/L4_sitemap.md` | `prompts/03_analyze_L4_sitemap.md` |

**重點觀察項目（ShipYourIdea 特有）**：
- Pricing section：3 欄卡片、"Coming Soon" 佔位 CTA 設計
- Hero：多標籤 capability showcase（6 項功能標籤列）
- CTA 策略：主按鈕「Get your free action guide」＋次要 anchor

**驗收門檻**：五個分析檔產出；L0 至少含 10 個 token；L3 含 Pricing Block 拆解

---

### 2.4 Stage 4：Differentiate（差異化決策）

| WBS ID | 工作項目 | 產出 |
|--------|---------|------|
| 2.4.1 | 標註 KEEP：值得學的設計決策 | `differentiation.md` §KEEP |
| 2.4.2 | 標註 DROP：不適合自有品牌的元素 | `differentiation.md` §DROP |
| 2.4.3 | 標註 OVERRIDE：品牌覆蓋 token 對照表 | `differentiation.md` §OVERRIDE |
| 2.4.4 | 標註 IMPROVE：至少 3 條改進機會 | `differentiation.md` §IMPROVE |

**Prompt**：`prompts/04_differentiate.md`  
**驗收門檻**：至少 3 條 IMPROVE；OVERRIDE 有完整 token 對照

---

### 2.5 Stage 5：Specify（規格化輸出）

| WBS ID | 工作項目 | 產出 |
|--------|---------|------|
| 2.5.1 | 合成 inspired design system spec | `spec/inspired-design-system.md` |
| 2.5.2 | 確認對齊 `BASE_DESIGN_SYSTEM.md` 結構 | 檢查清單 |
| 2.5.3 | 每個 token 標註來源（inspired by / original） | 內嵌標註 |

**Prompt**：`prompts/05_specify.md`  
**驗收門檻**：token 完整度 ≥ 80% vs `00_foundations_spec.md`

---

### 2.6 Stage 6：Validate（驗收）

| WBS ID | 工作項目 | 工具 |
|--------|---------|------|
| 2.6.1 | WCAG AA 顏色對比度檢查 | contrast checker |
| 2.6.2 | Token 完整度審計（≥ 80%） | 手動對照 |
| 2.6.3 | 確認無直接複製商標/文案/logo | 人工審查 |
| 2.6.4 | 與既有 design system 衝突確認已解決 | diff 比對 |
| 2.6.5 | Sitemap 可對應 `WEBSITE_MODULE_MATRIX.md` 原型 | 對照表 |
| 2.6.6 | differentiation.md 至少 3 條 IMPROVE | 計數確認 |

**產出**：`validation.md`（全項 ✅ 才算通過）

---

## 3.0 IdeaCheck 克隆執行

### 3.1 Stage 1：Capture（擷取）

| WBS ID | 工作項目 | 產出檔案 | 工具 | 狀態 |
|--------|---------|---------|------|------|
| 3.1.1 | 375px 截圖（mobile） | `raw/screenshots/mobile.png` | Playwright / browser MCP | ⬜ |
| 3.1.2 | 768px 截圖（tablet） | `raw/screenshots/tablet.png` | Playwright / browser MCP | ⬜ |
| 3.1.3 | 1440px 截圖（desktop） | `raw/screenshots/desktop.png` | Playwright / browser MCP | ⬜ |
| 3.1.4 | 擷取渲染後 DOM | `raw/dom.html` | Playwright | ⬜ |
| 3.1.5 | 擷取 `:root` CSS Variables | `raw/css-vars-raw.json` | Playwright | ⬜ |
| 3.1.6 | 擷取字型清單 | `raw/fonts.json` | `document.fonts` | ⬜ |
| 3.1.7 | 擷取 Media Queries | `raw/media-queries.json` | stylesheet parsing | ⬜ |
| 3.1.8 | Computed CSS（關鍵元素） | `raw/computed-styles.json` | `getComputedStyle` | ⬜ |

---

### 3.2 Stage 2：Extract

| WBS ID | 工作項目 | 產出 |
|--------|---------|------|
| 3.2.1 | 簡化 DOM 樹 | `extracted/dom-tree.md` |
| 3.2.2 | CSS 變數 + 頻率統計 | `extracted/css-vars.json` |
| 3.2.3 | 斷點清單 | `extracted/media-queries.json` |
| 3.2.4 | 資產清單 | `extracted/assets-inventory.md` |

---

### 3.3 Stage 3：Analyze（L0–L4）

| WBS ID | 工作項目 | 產出 |
|--------|---------|------|
| 3.3.1 | L0 Foundations | `analysis/L0_foundations.md` |
| 3.3.2 | L1 Components | `analysis/L1_components.md` |
| 3.3.3 | L2 Patterns | `analysis/L2_patterns.md` |
| 3.3.4 | L3 Templates | `analysis/L3_templates.md` |
| 3.3.5 | L4 Sitemap | `analysis/L4_sitemap.md` |

**重點觀察項目（IdeaCheck 特有）**：
- Demo section：分析報告卡（Score 42 / Risk Level / Death Predictions）
- 數據信任設計：4 類資料來源（Real-time Search / Market Data / Industry Benchmarks / Competitive Intelligence）
- Pricing：2 欄（Free vs Unlimited $3.29/mo）；明確標示「Most Popular」
- 死亡預測清單：負向框架的 CTA 策略（How will you die？）

---

### 3.4 Stage 4：Differentiate

| WBS ID | 工作項目 | 產出 |
|--------|---------|------|
| 3.4.1 | KEEP / DROP / OVERRIDE / IMPROVE 標註 | `differentiation.md` |

---

### 3.5 Stage 5：Specify

| WBS ID | 工作項目 | 產出 |
|--------|---------|------|
| 3.5.1 | 合成 inspired design system spec | `spec/inspired-design-system.md` |

---

### 3.6 Stage 6：Validate

| WBS ID | 工作項目 | 產出 |
|--------|---------|------|
| 3.6.1 | 執行 validation_checklist.md 全項 | `validation.md` |

---

## 4.0 跨站整合分析

> 兩站均完成 Stage 3 後才能執行

| WBS ID | 工作項目 | 目的 | 產出 |
|--------|---------|------|------|
| 4.1 | 定價模式比較（Pricing Architecture） | 比較 3-tier vs 2-tier；Coming Soon 佔位 vs 即時訂閱 | `cross-analysis/pricing_comparison.md` |
| 4.2 | CTA 策略比較 | 正向框架（Ship your idea）vs 負向框架（How will you die？） | `cross-analysis/cta_strategy.md` |
| 4.3 | 信任機制比較 | 功能標籤列 vs 資料來源卡片 | `cross-analysis/trust_signals.md` |
| 4.4 | Demo/Preview 區塊比較 | UI 截圖 mock vs 分析報告 mock | `cross-analysis/demo_pattern.md` |
| 4.5 | 共同 L0 Token 抽取 | 兩站共有的設計決策 | `cross-analysis/shared_tokens.md` |

---

## 5.0 Pipeline 接口輸出

> 最終交付物，供 Prompt Architect Pipeline 引用

| WBS ID | 工作項目 | 輸出路徑 | 備註 |
|--------|---------|---------|------|
| 5.1 | shipyouridea brand spec | `global/sample/shipyouridea_brand.md` | 對齊 BASE_DESIGN_SYSTEM |
| 5.2 | ideacheck brand spec | `global/sample/ideacheck_brand.md` | 對齊 BASE_DESIGN_SYSTEM |
| 5.3 | 新 L3 Template 原型（Pricing Block） | `references/website_recipes.md` 新增條目 | 來自兩站 L3 分析 |
| 5.4 | 新 L4 Sitemap 原型（SaaS AI Tool） | `references/website_recipes.md` 新增條目 | 來自兩站 L4 分析 |

---

## 執行順序與依賴關係

```
1.0 準備
  ↓
2.1 ShipYourIdea Capture（截圖已完成，補 DOM/CSS）
3.1 IdeaCheck Capture（全部從頭）
  ↓（各自獨立，可平行執行）
2.2 / 3.2  Extract
  ↓
2.3 / 3.3  Analyze L0–L4
  ↓
4.0  跨站整合分析（需等兩站 3.3 完成）
  ↓
2.4 / 3.4  Differentiate（可參考 4.0 結果）
  ↓
2.5 / 3.5  Specify
  ↓
2.6 / 3.6  Validate
  ↓
5.0  Pipeline 接口輸出
```

**可平行執行的部分**：
- 2.1（補 DOM/CSS）與 3.1（IdeaCheck 截圖）可同時進行
- 2.2–2.3 與 3.2–3.3 可各自獨立平行進行

---

## 進度儀表板

| 階段 | ShipYourIdea | IdeaCheck | 備註 |
|------|-------------|----------|------|
| 1. Capture | ✅ 全部完成（185 CSS vars） | ✅ 全部完成（170 CSS vars）| 2026-04-08 平行執行 |
| 2. Extract | ✅ 4 files 完成 | ✅ 4 files 完成 | 2026-04-08 平行執行 |
| 3. Analyze | ✅ L0–L4 完成 | ✅ L0–L4 完成 | 2026-04-08 平行執行 |
| 4. Differentiate | ✅ KEEP 7/DROP 4/OVERRIDE 8/IMPROVE 6 | ✅ KEEP 7/DROP 4/OVERRIDE 9/IMPROVE 6 | 2026-04-08 |
| 5. Specify | ✅ inspired-design-system.md | ✅ inspired-design-system.md | 2026-04-08 |
| 6. Validate | ✅ 全通過 | ✅ 全通過 | 2026-04-08（含 minor 修復）|
| 跨站分析（4.0）| ✅ 5 files | ✅ 5 files | 2026-04-08 |
| Pipeline 輸出（5.0）| ✅ brand spec | ✅ brand spec | 2026-04-08 |

圖例：✅ 完成 / 🟡 部分完成 / ⬜ 未開始 / 🔴 阻塞

**專案狀態：✅ 全部完成**

---

## 關鍵設計洞察（給後續 Stage 3–4 的提示）

### ShipYourIdea 重點
- **Pricing 設計決策**：用「Coming Soon」佔位，建立期待而非直接推付費；免費層非常大方（5 次/天）
- **Hero 策略**：不是賣功能，是賣「下一步」—— action-oriented copywriting
- **Social proof**：功能標籤列（6 項能力）作為 mini-proof，比數字更具體

### IdeaCheck 重點
- **負向框架 CTA**：「How will you die?」比「Validate your idea」更有抓住力
- **定價極簡**：$3.29/月是故意的低錨點，降低訂閱心理門檻
- **信任架構**：4 類資料來源 + 具體數字（5-8 searches、50+ data points、<1 min）
- **分析報告 Mock**：把分析結果直接展示在 Demo 區，讓用戶「看到」產品

---

最後更新：2026-04-08（最終版，全部完成）

---

## 交付物總覽（全部完成）

### 克隆產出（每站各一份）
| 檔案 | ShipYourIdea | IdeaCheck |
|------|:---:|:---:|
| `raw/` (5 files) | ✅ | ✅ |
| `extracted/` (4 files) | ✅ | ✅ |
| `analysis/L0–L4` (5 files) | ✅ | ✅ |
| `differentiation.md` | ✅ | ✅ |
| `spec/inspired-design-system.md` | ✅ | ✅ |
| `validation.md` | ✅ | ✅ |

### 跨站分析（`pj/cross-analysis/`）
| 檔案 | 說明 |
|------|------|
| `pricing_comparison.md` | 3-tier Coming Soon vs 2-tier 直接訂閱 |
| `cta_strategy.md` | 正向框架 vs 負向框架 |
| `trust_signals.md` | Capability Tags vs Data Sources |
| `demo_pattern.md` | Action Guide Mock vs Analysis Report Mock |
| `shared_tokens.md` | AI SaaS Landing 行業慣例 Token 組 |

### Pipeline 接口（全域可用）
| 檔案 | 說明 |
|------|------|
| `references/website_recipes.md` 第 11 節 | SaaS AI Tool Landing 原型配方 |
| `references/WEBSITE_MODULE_MATRIX.md` M05 | AI SaaS Tool Landing 模組矩陣 |
| `global/sample/shipyouridea_brand.md` | ShipYourIdea 啟發 Brand System |
| `global/sample/ideacheck_brand.md` | IdeaCheck 啟發 Brand System |
