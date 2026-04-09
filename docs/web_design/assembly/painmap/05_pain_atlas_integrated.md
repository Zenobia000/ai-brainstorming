# Assembly Prompt: PainMap Pain Atlas (行業痛點圖譜)

> 此檔案為可直接貼給 Lovable / Claude Code 的完整 Prompt。
> 組合來源：`global/painmap_brand_system.md` (壓縮) + `pages/painmap/05_pain_atlas.md` (完整)
> 對應 PRD Epic 4（US-030 ~ US-032）。

---

## === GLOBAL PROJECT GUIDELINE (DO NOT OVERRIDE) ===

你是「PainMap 題眼」的資深產品架構師與全端開發架構師，負責維護整個專案的設計一致性。

### 核心配色

| Token | 色值 | Tailwind Class | 用途 |
|-------|------|----------------|------|
| Primary | #1E3A5F | `bg-[#1E3A5F]` | 主要品牌色（深藍靛） |
| Primary Hover | #162D4A | `hover:bg-[#162D4A]` | 主色 hover |
| Primary Light | #E8EEF5 | `bg-[#E8EEF5]` | 卡片高亮背景 |
| Secondary | #2D7D8A | `bg-[#2D7D8A]` | 導航、連結、互動元素（深青） |
| Secondary Hover | #236269 | `hover:bg-[#236269]` | 次色 hover |
| Accent | #E8913A | `bg-[#E8913A]` | CTA 按鈕（暖琥珀） |
| Accent Hover | #D07A2B | `hover:bg-[#D07A2B]` | CTA hover |
| Accent Light | #FEF3E2 | `bg-[#FEF3E2]` | 行動提示區背景 |
| Verified | #2D9D78 | `bg-[#2D9D78]` | 已驗證狀態（驗證綠） |
| Verified Light | #E6F5EF | `bg-[#E6F5EF]` | 驗證狀態背景 |
| Caution | #D97706 | `bg-[#D97706]` | 需補充資訊 |
| Error | #DC2626 | `bg-[#DC2626]` | 系統錯誤（禁用於痛點強度） |
| BG Page | #F7F8FA | `bg-[#F7F8FA]` | 頁面底色 |
| BG Surface | #FFFFFF | `bg-white` | 卡片底色 |
| BG Muted | #F1F3F5 | `bg-[#F1F3F5]` | 次要區塊背景 |
| Text Primary | #1A2332 | `text-[#1A2332]` | 主要文字 |
| Text Secondary | #5C6B7A | `text-[#5C6B7A]` | 說明文字 |
| Text Muted | #8E99A4 | `text-[#8E99A4]` | 時間戳、輔助文字 |
| Border Default | #DFE3E8 | `border-[#DFE3E8]` | 預設邊框 |
| Border Focus | #2D7D8A | `focus:border-[#2D7D8A]` | 聚焦邊框 |

### 核心字體

| Token | 字級 | 行高 | 字重 | 用途 |
|-------|------|------|------|------|
| H1 | 28px | 1.3 | 700 | 頁面標題 |
| H2 | 22px | 1.3 | 600 | 區塊標題 |
| H3 | 18px | 1.4 | 600 | 小標題 |
| Body LG | 17px | 1.7 | 400 | 長文閱讀 |
| Body MD | 15px | 1.6 | 400 | 標準段落 |
| Body SM | 13px | 1.5 | 400 | 輔助說明 |
| Caption | 12px | 1.4 | 400 | 時間戳、metadata |

- 中文：Noto Sans TC / 英文：Inter / 等寬：JetBrains Mono

### 元件規格

| Token | 值 |
|-------|----|
| Radius SM | 4px（Tag / Badge） |
| Radius MD | 8px（按鈕 / 輸入框） |
| Radius LG | 12px（卡片 / 容器） |
| Radius XL | 16px（Modal） |
| Shadow SM | 0 1px 3px rgba(30,58,95,0.06) |
| Shadow MD | 0 4px 8px rgba(30,58,95,0.08) |
| Shadow LG | 0 12px 24px rgba(30,58,95,0.12) |
| Border | 1px solid #DFE3E8 |
| Border Active | 2px solid #2D7D8A |

### 斷點與 Grid

| 屬性 | 值 |
|------|----|
| 最大寬度 | 1200px |
| Desktop | > 1280px（12 欄） |
| Tablet | 768px–1280px（雙欄） |
| Mobile | < 768px（單欄，全寬堆疊） |
| 欄間距 | 20px |
| 左右 Padding | 16px (M) / 24px (T) / 32px (D) |

### 重要規範

- 所有元件必須繼承上方定義的配色、圓角與間距
- 禁止 Inline styles，全部使用 Tailwind utility classes
- 禁止評分 UI（star rating、score slider、progress percentage 用於評價目的）
- 禁止排行榜、遊戲化徽章、成功率預測
- 錯誤色 #DC2626 僅用於系統錯誤，禁用於痛點嚴重程度
- Pain Card Hover：邊框變 #2D7D8A + translateY(-2px) + Shadow MD
- 所有狀態必須實作：Loading (Skeleton) / Error (Teal 邊框提示) / Empty (行動引導 + CTA)
- 技術棧：React 18 + TypeScript + Tailwind CSS + Zustand + React Query + Supabase + Vercel

---

## === CURRENT TASK: BUILD ONE PAGE ===

本次任務：根據上方 Global Guideline，設計並實作「Pain Atlas（行業痛點圖譜）」頁面。

### [PAGE META]

- **page_name**: Pain Atlas (行業痛點圖譜)
- **route_path**: `/atlas`
- **page_type**: exploration (search + browse)
- **primary_goal**: 提供社群貢獻、匿名化的已驗證痛點資料庫，讓使用者看見同行業的人驗證過什麼問題
- **secondary_goal**: 為新使用者提供探索入口，降低「不知道做什麼」的起步門檻；驅動圖譜貢獻飛輪
- **target_users**:
  - 主要：所有 PainMap 使用者（貢獻者與探索者）
  - 次要：新使用者探索平台價值（未註冊可瀏覽前 10 條，作為轉換鉤子）
- **entry_point**: 主導航「痛點圖譜」入口 / 首頁 CTA / 完成結構化後的貢獻引導 / 外部分享連結
- **expected_time_on_page**: 3–10 分鐘（探索瀏覽 → 找到啟發 → 進入 Pain Collector 或註冊）

---

### [STRUCTURE: SECTIONS]

頁面由上至下共 6 個 Section：

1. **atlas_explorer_header** — 搜尋英雄區：搜尋列 + 行業篩選 + 驗證層級篩選 + 即時統計
2. **industry_map_visualization** — 行業互動圖：Treemap 或泡泡圖，呈現各行業痛點密度
3. **pain_cluster_grid** — 痛點群集卡片網格：可篩選、可分頁、點擊開啟 Modal
4. **pain_detail_modal** — 痛點詳情 Modal：完整結構化資訊 + 行動 CTA
5. **contribute_panel** — 貢獻側欄/底部 Section：隱私對比 + opt-in 按鈕
6. **trending_insights_bar** — 本週趨勢水平捲動條

---

### [SECTION COMPONENT SPEC]

#### Section 1: atlas_explorer_header

- **layout**: 全寬單欄，垂直置中對齊
- **elements**:
  - `search_bar`: SearchInput，placeholder: "搜尋你的行業或痛點關鍵字"，支援 autocomplete
  - `industry_filter`: Dropdown 多選，選項從 API 動態生成
  - `tier_filter`: FilterChips，選項：Seed / Community / Interview-Verified / Payment-Verified，預設全選
  - `quick_stats`: StatsRow，顯示 "{X} 個行業 x {Y} 個已驗證痛點"，千分位格式
  - `clear_filters`: TextButton "清除篩選"，有任何篩選啟用時才顯示
- **states**:
  - default: 搜尋框聚焦、篩選器展開、統計數字顯示
  - loading: 統計數字 skeleton；篩選器可用但結果區 loading
  - empty_search: "沒有符合「{keyword}」的痛點。試試其他關鍵字？"
  - error: "無法載入圖譜資料" + 重試按鈕
- **copy_constraints**: 關鍵字最長 100 字元；統計數字千分位格式

#### Section 2: industry_map_visualization

- **layout**: 全寬容器，最大高度 500px (Desktop) / 300px (Mobile)
- **elements**:
  - `treemap_chart`: InteractiveTreemap，區塊大小代表痛點數量，點擊鑽入行業
  - `bubble_fallback`: BubbleChart，當行業數 < 8 時啟用
  - `color_legend`: 顏色對應驗證層級密度 — Seed(灰) / Community(藍/#2D7D8A) / Interview-Verified(綠/#2D9D78) / Payment-Verified(橙/#E8913A)
  - `industry_label`: 行業名稱 + 痛點數量疊加在圖塊上
  - `breadcrumb`: "全部行業 > {選中行業}"，提供返回路徑
- **states**:
  - default: 所有行業的 treemap 總覽
  - hover: 圖塊高亮 + tooltip（行業名 + 痛點數 + tier 分布）
  - selected: 選中行業高亮，其餘淡化；pain_cluster_grid 載入該行業資料
  - loading: Skeleton 矩形 + 淡入動畫
  - empty: "圖譜正在建構中。成為第一批貢獻者！" + CTA 前往 Pain Collector
  - error: "視覺化載入失敗" + 重試按鈕 + 降級為行業列表
- **copy_constraints**: 行業名稱最長 8 中文字；數字用縮寫（1.2k）

#### Section 3: pain_cluster_grid

- **layout**: 3 欄 (Desktop) / 2 欄 (Tablet) / 1 欄 (Mobile)
- **elements**:
  - `section_title`: H2，"{行業名} 的痛點群集" / 未選行業時顯示 "所有行業的痛點"
  - `sort_control`: DropdownSmall，排序選項：最新 / 驗證層級 / 貢獻者數量
  - `pain_card[]`: PainClusterCard，每張包含：
    - `problem_theme`: H3，問題主題標題，最長 40 字
    - `situation_snippet`: BodySM，情境摘要，最長 80 字，截斷加 "..."
    - `audience_tag`: Tag，目標受眾標籤（如「電商賣家」「SaaS PM」）
    - `tier_badge`: Badge，驗證層級，顏色與 legend 一致
    - `contributor_count`: Caption，"{N} 人驗證"，匿名化數字
  - `pagination`: LoadMore 按鈕 "載入更多"，每次 12 張
  - `result_count`: Caption，"共 {N} 個痛點群集"
- **states**:
  - default: 卡片網格，最新排序
  - hover: translateY(-2px) + Shadow MD
  - loading: Skeleton 卡片 x 6
  - empty: "這個行業還沒有痛點資料。成為第一個貢獻者？" + CTA 前往 Pain Collector
  - filtered: 顯示篩選後結果計數
- **copy_constraints**: 問題主題 40 字；情境摘要 80 字；標籤 6 字

#### Section 4: pain_detail_modal

- **layout**: 居中 modal overlay，最大寬度 640px，可垂直捲動；Mobile 全屏
- **elements**:
  - `modal_header`: H2，問題主題標題
  - `structured_pain`: StructuredBlock，完整四欄位：
    - `who`: LabelValue，"誰" — 目標受眾描述
    - `situation`: LabelValue，"情境" — 什麼場景遇到問題
    - `current_solution`: LabelValue，"現行解法" — 目前怎麼處理
    - `dissatisfaction`: LabelValue，"不滿的點" — 現行解法哪裡不好
  - `social_proof`: Callout，"這 {X} 人驗證了你行業中的類似問題"，匿名化數字
  - `tier_badge_large`: BadgeLarge，驗證層級 + 說明文字（如 "付費驗證：有人實際為解決方案付費"）
  - `related_pains`: CardRow (optional)，水平捲動，最多 5 張縮小卡片，標題 "相關痛點"
  - `cta_button`: ButtonPrimary（Amber），"想研究這個問題？從 Pain Collector 開始"，導向 /collector
  - `close_button`: IconButton X，右上角
  - `backdrop`: Overlay，點擊關閉 modal
- **states**:
  - default: 完整結構化資訊顯示
  - loading: Modal 框架 + 內容 skeleton
  - error: "無法載入痛點詳情" + 重試按鈕
  - no_related: 相關痛點區隱藏（不顯示空狀態）
  - 404: "此痛點已被撤回" + 關閉按鈕
- **copy_constraints**: 各欄位最長 200 字；social proof 數字用整數

#### Section 5: contribute_panel

- **layout**: Desktop 右側固定 sidebar（寬 320px）/ Tablet + Mobile 頁面底部固定 section
- **elements**:
  - `panel_title`: H3，"把你的結構化痛點貢獻到圖譜"
  - `description`: BodySM，說明貢獻機制與價值
  - `privacy_showcase`: ComparisonBlock，兩欄對比：
    - 左欄「其他人會看到」：行業分類 / 情境類型（抽象化）/ 目標受眾類型 / JTBD 結構 / 驗證層級 / 匿名化貢獻者計數
    - 右欄「只有你看得到」：姓名帳號 / 公司品牌名 / 具體金額 / 個人聯絡資訊 / 原始文字素材
  - `anonymization_rules_link`: TextLink，"查看完整匿名化規則"，導向 /privacy/anonymization
  - `opt_in_button`: ButtonSecondary (Teal)，"貢獻我的痛點（匿名化）"，僅登入且有結構化痛點可用
  - `withdrawal_note`: Caption + icon，"你可以隨時撤回貢獻。"
  - `privacy_badge`: Badge 綠色盾牌，"隱私優先"
- **states**:
  - default: 隱私對比 + opt-in 按鈕
  - logged_out: 隱藏 opt-in，改顯示 "登入後即可貢獻" + 登入連結
  - no_structured_pains: opt-in disabled + tooltip "先完成一次痛點結構化" + CTA 前往 /collector
  - contributed: 按鈕改為 "已貢獻 {N} 個痛點" + "管理我的貢獻" 連結
  - hover (opt-in button): tooltip "貢獻前會預覽匿名化結果"
- **copy_constraints**: 面板總文案不超過 150 字

#### Section 6: trending_insights_bar

- **layout**: 全寬水平捲動條，單行
- **elements**:
  - `section_label`: Caption，"本週最多人在研究："
  - `trend_chips[]`: TrendChip，每個含：
    - `industry_or_pain`: BodySM，行業名或痛點主題
    - `activity_indicator`: Dot，活躍度指示（不是排名數字，只是「活躍」標記）
  - `scroll_arrows`: IconButton 左右箭頭 (optional)，Desktop 內容超出時顯示
- **states**:
  - default: 水平捲動顯示本週活躍項目
  - loading: Skeleton chips x 5
  - empty: 隱藏整個 section（不顯示空狀態）
  - hover (chip): 底線高亮 + cursor pointer；點擊套用為搜尋篩選
- **copy_constraints**: 每個 chip 最長 15 字；最多 20 個 chips；禁止顯示任何數字排名

---

### [INTERACTION & STATE FLOW]

**主要互動流程**：
1. 頁面載入 → 並行取得：圖譜統計、行業 treemap、trending 資料、contribute 狀態
2. 搜尋框輸入 → debounce 300ms → autocomplete 建議 → 更新 treemap + grid
3. 行業篩選 / tier 篩選變更 → 即時更新 treemap 高亮 + grid 結果
4. Treemap 點擊行業 → breadcrumb 更新 → grid 載入該行業痛點 → 頁面平滑捲動至 grid
5. 點擊 pain_card → 開啟 pain_detail_modal → 載入完整結構化資訊
6. Modal 內 CTA → 導向 /collector（帶 query param 預填行業）
7. Modal 內點擊相關痛點 → 關閉當前 modal → 開啟新 modal
8. 點擊 contribute opt-in → 貢獻確認流程（預覽匿名化 → 確認 → 完成）
9. 點擊 trending chip → 套用為搜尋篩選
10. 未註冊使用者超過 10 條 → soft gate："註冊解鎖完整圖譜"

**URL 狀態管理**：
- 搜尋 + 篩選 → `/atlas?q=電商&industry=retail&tier=payment-verified`
- 選中行業 → `/atlas?industry=retail`
- Modal 開啟 → `/atlas?industry=retail#pain-abc123`

**RWD 行為差異**：

| 斷點 | 佈局 | 差異說明 |
|------|------|---------|
| Desktop (>1280px) | 3 欄 grid + 右側 contribute sidebar | treemap 完整互動；modal 寬 640px |
| Tablet (768–1280px) | 2 欄 grid + contribute 收合至底部 | treemap 簡化互動（tap only）；modal 寬 90vw |
| Mobile (<768px) | 1 欄堆疊 + contribute 底部 section | treemap 改為行業列表（可展開）；modal 全屏；搜尋 bar sticky top |

---

### [DATA & API]

**端點清單**：
- `GET /api/atlas/stats` — 圖譜總覽統計（行業數、痛點數、各 tier 計數）
- `GET /api/atlas/industries` — 行業列表 + 各行業痛點計數 + tier 分布（treemap 資料）
- `GET /api/atlas/pains?industry={id}&tier={tier}&q={keyword}&sort={field}&page={n}` — 搜尋/篩選痛點群集（每頁 12 條）
- `GET /api/atlas/pains/{id}` — 單一痛點完整結構化詳情
- `GET /api/atlas/pains/{id}/related` — 相關痛點（最多 5 條）
- `GET /api/atlas/trending` — 本週活躍行業/痛點（快取 1 小時）
- `GET /api/atlas/autocomplete?q={keyword}` — 搜尋 autocomplete
- `POST /api/atlas/contribute` — 提交匿名化痛點（需認證）
- `DELETE /api/atlas/contribute/{id}` — 撤回貢獻（需認證）
- `GET /api/atlas/contribute/preview` — 預覽匿名化結果
- `GET /api/user/contributions` — 使用者已貢獻清單（需認證）

**錯誤處理**：
- 網路錯誤：離線提示 + 使用本地快取（如有）
- API 錯誤：友善訊息 + 重試按鈕；treemap 降級為靜態行業列表
- 未登入存取 contribute：登入引導，不中斷瀏覽
- Rate limit：debounce + "請稍候再試"
- 404（痛點已撤回）：modal 顯示「此痛點已被撤回」+ 關閉按鈕

**資料更新策略**：
- 圖譜統計 / treemap：頁面載入時取得，不自動更新
- pain_cluster_grid：篩選/搜尋變更時重新取得
- trending：每 1 小時更新（或載入時使用快取版本）
- contribute 狀態：即時

---

### [PRIVACY & ANONYMIZATION]

| 保留（公開可見） | 移除（永不外洩） |
|:---|:---|
| 行業分類 | 使用者姓名 / 帳號 |
| 情境類型（抽象化） | 公司名 / 品牌名 |
| 目標受眾類型 | 具體金額 / 營收數字 |
| JTBD 結構 | 個人聯絡資訊 |
| 驗證層級事實 | 原始文字素材 |
| 匿名化貢獻者計數 | 任何可識別個人的細節 |

**驗證層級（事實陳述，非品質評分）**：

| 層級 | 顯示文案 | Badge 色 |
|------|---------|---------|
| Seed | "來自公開資料" | 灰 |
| Community | "社群貢獻" | Teal #2D7D8A |
| Interview-Verified | "訪談驗證" | Verified Green #2D9D78 |
| Payment-Verified | "付費驗證" | Amber #E8913A |

**使用者控制權**：
- 貢獻前：預覽「別人會看到什麼 vs 什麼保持私密」
- 貢獻後：隨時可在「我的貢獻」頁撤回
- 撤回後：圖譜移除，貢獻者計數減 1，資料永久刪除

---

### [COLD START STRATEGY]

- 種子資料：PM 策展 200 個 Seed 級痛點，覆蓋 10 個核心行業
- 種子來源：IndieHackers / Reddit / PTT 創業板、產業報告
- 每個 Seed 痛點必須完整填寫四欄位（誰 x 情境 x 現行解法 x 不滿的點）
- 未覆蓋行業顯示："這個行業還在等第一位貢獻者" + CTA
- Private Beta 3 個月目標：200 Seed → 500+ 條（含 Community 層級）

---

## === EXCEPTION RULES ===

本頁面允許的例外：

1. **treemap 視覺化使用全寬佈局** — 原因：不受 Grid 最大寬度 1200px 限制，提供最佳視覺效果
2. **modal 內 CTA 直接導向 Pain Collector (/collector)** — 原因：跨功能導航，非頁面內操作，符合使用者行動意圖
3. **trending bar 使用水平捲動** — 原因：違反一般垂直捲動慣例，但符合「快速瀏覽趨勢」的 UX 目標
4. **禁止一切排名與分數顯示** — 原因：即使 Global Design System 存在排行元件，本頁面一律禁用（品牌基因 D-001）

---

## === OUTPUT REQUIREMENTS ===

請依照以下步驟輸出：

### Step 1: 結構確認

列出本頁面的：
- 6 個主要 sections 及其用途
- 每個 section 的關鍵元件清單
- 資料流與狀態管理策略（React Query 快取鍵、Zustand slice 設計）

### Step 2: 設計決策說明

說明以下 3 個關鍵設計決策：
1. Treemap 視覺化方案選擇（Recharts Treemap vs D3 vs 第三方庫）與 Mobile 降級策略
2. 如何在「探索體驗」與「品牌禁令（零排名零分數）」之間取得平衡
3. Pain Detail Modal 的狀態管理：URL hash 同步、相關痛點鏈式開啟、404 撤回處理

### Step 3: 實作方案

使用 **Option A: 完整程式碼**（Lovable 優先）：

```tsx
// 目標輸出架構：
// src/pages/atlas/AtlasPage.tsx              — 頁面主元件，URL 狀態管理
// src/pages/atlas/components/
//   AtlasExplorerHeader.tsx                  — Section 1: 搜尋 + 篩選 + 統計
//   IndustryMapVisualization.tsx             — Section 2: Treemap / Bubble / 列表降級
//   PainClusterGrid.tsx                      — Section 3: 卡片網格 + 分頁
//   PainDetailModal.tsx                      — Section 4: 詳情 Modal
//   ContributePanel.tsx                      — Section 5: 貢獻側欄 / 底部 section
//   TrendingInsightsBar.tsx                  — Section 6: 趨勢捲動條
// src/pages/atlas/hooks/
//   useAtlasFilters.ts                       — 篩選狀態 + URL 同步
//   useAtlasData.ts                          — React Query 資料取得
// src/pages/atlas/types/atlas.types.ts       — 型別定義（PainCluster, Industry, TierLevel）
```

實作優先順序：
1. AtlasExplorerHeader（搜尋 + 篩選可用）
2. PainClusterGrid（卡片網格完整渲染）
3. PainDetailModal（完整結構化資訊 + CTA）
4. IndustryMapVisualization（Treemap + Mobile 降級）
5. ContributePanel（隱私對比 + opt-in 流程）
6. TrendingInsightsBar（水平捲動）

### 品質檢查

- [ ] 色彩系統一致性（Primary #1E3A5F / Secondary #2D7D8A / Accent #E8913A / Verified #2D9D78）
- [ ] 字體層級正確（H1/H2/H3/Body MD/Body SM/Caption）
- [ ] 元件風格統一（圓角 / 陰影 / 邊框均使用 Design Token）
- [ ] 響應式設計完整（Desktop 3欄 / Tablet 2欄 / Mobile 1欄 + treemap 降級）
- [ ] 所有狀態已實作（Loading Skeleton / Error Teal 邊框 / Empty 行動引導 / Disabled tooltip）
- [ ] 無障礙支援（Tab 順序 + ARIA labels + Focus ring Teal + 語意化 HTML）
- [ ] URL 狀態管理（搜尋 / 行業 / tier / modal hash 皆可透過 URL 還原）
- [ ] 零排名 / 零分數 / 零 leaderboard（品牌基因核查）
- [ ] 驗證層級僅顯示事實陳述（"社群貢獻" / "訪談驗證" / "付費驗證"，無品質暗示）
- [ ] Privacy showcase 正確呈現兩欄對比（公開 vs 私密）
- [ ] Soft gate 正確觸發（未登入使用者瀏覽超過 10 條）
- [ ] 效能指標達標（首次載入 < 3s；> 50 張卡片啟用虛擬捲動）
- [ ] 所有 API 回應經過 Zod schema 驗證後才渲染

---

**執行優先順序**：
1. Global 規範為最高優先級
2. Pain Atlas 頁面特定需求次之
3. Exception Rules 明確說明且最小化

**版本資訊**：
- Global System 版本：v1.0
- Assembly 日期：2026-04-09
- Page Spec 對應：PRD Epic 4（US-030 ~ US-032）
- 負責人：PainMap 題眼產品團隊
