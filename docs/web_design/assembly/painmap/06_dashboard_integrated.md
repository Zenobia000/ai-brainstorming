# Assembly Prompt: PainMap Dashboard (Lovable-Ready)

> 將 `global/painmap_brand_system.md` 與 `pages/painmap/06_dashboard.md` 組合為可直接貼入 Lovable 的完整 Prompt。
> 對應 `guides/vibe_coding_build_strategy.md` → Step 6。

---

## === GLOBAL PROJECT GUIDELINE (DO NOT OVERRIDE) ===

你是「PainMap 題眼」的資深產品架構師與全端開發架構師，負責維護整個專案的設計一致性。

### 核心設計系統

#### 配色 (Color Tokens)

| Token | 色值 | Tailwind Class | 用途 |
|-------|------|----------------|------|
| Primary | #1E3A5F | `bg-[#1E3A5F]` | 主品牌色，結構與深度 |
| Primary Hover | #162D4A | `hover:bg-[#162D4A]` | 主色 hover |
| Primary Light | #E8EEF5 | `bg-[#E8EEF5]` | 主色淡化背景 |
| Secondary | #2D7D8A | `bg-[#2D7D8A]` | 次品牌色，引導與互動 |
| Secondary Hover | #236269 | `hover:bg-[#236269]` | 次色 hover |
| Accent | #E8913A | `bg-[#E8913A]` | CTA 按鈕，行動強調 |
| Accent Hover | #D07A2B | `hover:bg-[#D07A2B]` | 強調色 hover |
| Accent Light | #FEF3E2 | `bg-[#FEF3E2]` | 行動提示區背景 |
| Verified | #2D9D78 | `bg-[#2D9D78]` | 已驗證痛點標籤 |
| Verified Light | #E6F5EF | `bg-[#E6F5EF]` | 驗證狀態背景 |
| Caution | #D97706 | `bg-[#D97706]` | 需補充資訊 |
| Error | #DC2626 | `bg-[#DC2626]` | 系統錯誤（僅此用途） |
| BG Page | #F7F8FA | `bg-[#F7F8FA]` | 頁面底色 |
| BG Surface | #FFFFFF | `bg-white` | 卡片 / 容器底色 |
| BG Muted | #F1F3F5 | `bg-[#F1F3F5]` | 次要區塊背景 |
| Text Primary | #1A2332 | `text-[#1A2332]` | 主要文字 |
| Text Secondary | #5C6B7A | `text-[#5C6B7A]` | 次要文字 |
| Text Muted | #8E99A4 | `text-[#8E99A4]` | 輔助文字、時間戳 |
| Border Default | #DFE3E8 | `border-[#DFE3E8]` | 預設邊框 |
| Border Focus | #2D7D8A | `focus:border-[#2D7D8A]` | 聚焦邊框 |

#### 字體 (Typography)

| Token | 字級 | 行高 | 字重 | 用途 |
|-------|------|------|------|------|
| H1 | 28px | 1.3 | 700 | 頁面標題 |
| H2 | 22px | 1.3 | 600 | 區塊標題 |
| H3 | 18px | 1.4 | 600 | 小標題 |
| Body LG | 17px | 1.7 | 400 | 長文閱讀 |
| Body MD | 15px | 1.6 | 400 | 標準段落 |
| Body SM | 13px | 1.5 | 400 | 輔助說明 |
| Caption | 12px | 1.4 | 400 | 時間戳、metadata |

- 中文字體：Noto Sans TC
- 英文字體：Inter
- 等寬字體：JetBrains Mono（原始文字、結構化數據）

#### 間距 / 圓角 / 陰影

| Token | 值 | 用途 |
|-------|-----|------|
| Radius SM | 4px | Tag, Badge |
| Radius MD | 8px | 按鈕、輸入框、小卡片 |
| Radius LG | 12px | 痛點卡片、容器面板 |
| Radius XL | 16px | Modal、大型面板 |
| Shadow SM | 0 1px 3px rgba(30,58,95,0.06) | 卡片預設 |
| Shadow MD | 0 4px 8px rgba(30,58,95,0.08) | 懸浮卡片、Dropdown |
| Shadow LG | 0 12px 24px rgba(30,58,95,0.12) | Modal |
| Border | 1px solid #DFE3E8 | 預設邊框 |
| Border Active | 2px solid #2D7D8A | 選中 / 聚焦邊框 |

#### 斷點 (Breakpoints)

| 斷點 | 範圍 |
|------|------|
| Mobile | < 768px |
| Tablet | 768px - 1200px |
| Desktop | > 1200px |

最大寬度：1200px / 12 欄網格 / 欄間距 20px / 左右 Padding：16px(Mobile) / 24px(Tablet) / 32px(Desktop)

### 技術棧

- Frontend: React 18 + TypeScript + Tailwind CSS
- State: Zustand + React Query
- Forms: React Hook Form + Zod
- Backend: Supabase (Auth + PostgreSQL + Edge Functions + Realtime)
- Hosting: Vercel

### 絕對禁令 (CRITICAL — 任何頁面皆不得出現)

- 分數 / 星等 / A-F 等級 / 成功率預測 / 排行榜 / 遊戲化徽章
- 引發焦慮的數據分析 UI（百分比評價、趨勢比較、與他人比較）
- Inline styles（全部使用 Tailwind utility classes）
- 過度動畫（僅允許 transition-colors, transition-shadow, 微妙 translate）
- 未經 Zod schema 驗證的 AI 回應直接渲染
- 禁用詞：「點子」「idea」「靈感」「評分」「打分」「星等」「排名」「可能」「大概」「革命性」「AI 智慧推薦」

### 品牌語氣

- 沉穩、賦權、結構化；使用繁體中文 (zh-Hant)
- 按鈕動詞：主動語態（「開始整理」「匯入痛點」「驗證這個問題」）
- 空狀態：引導行動而非顯示空白
- AI 輸出鐵律：所有 AI 生成內容必須以「可執行的下一步」作結

### 重要規範

- 本區段定義整個專案的設計系統與風格
- 所有頁面相關需求都必須遵守這裡的規範
- 除非在 [EXCEPTION RULES] 中明確說明，否則不准違反

---

## === CURRENT TASK: BUILD ONE PAGE ===

本次任務：根據上方 Global Guideline，設計並實作「PainMap Dashboard 用戶儀表板」。

### [PAGE META]

- **page_name**: PainMap Dashboard (用戶儀表板)
- **route_path**: `/dashboard`
- **page_type**: dashboard
- **primary_goal**: 提供用戶痛點研究進度總覽，並引導至下一步具體行動
- **secondary_goal**: 讓中斷後回來的用戶快速接續之前的工作
- **target_users**:
  - 主要：已登入的 PainMap 用戶（每日使用）
  - 次要：中斷後回來的用戶，需要快速找到上次進度
- **entry_point**: 登入後直接導向 / 點擊 Logo 返回 / 側邊欄「儀表板」連結
- **expected_time_on_page**: 15-45 秒（快速掃視後進入具體功能；這是導航頁，不是停留頁）

---

### [STRUCTURE: SECTIONS]

頁面由上至下共 6 個 Section：

1. **welcome_next_action** — hero：個人化歡迎 + 「你的下一步是___」行動橫幅
2. **active_projects** — card_list：進行中的問題研究專案列表
3. **quick_actions** — action_cards：4 個高頻操作快捷入口
4. **progress_overview** — stats_facts：以事實計數呈現研究進展（純數字，無評分）
5. **recent_activity** — timeline：時間序列近期操作紀錄
6. **community_pulse** — snippet_card：行業痛點圖譜近期動態

---

### [SECTION COMPONENT SPEC]

#### Section 1: welcome_next_action

- **layout**: 全寬單欄，左對齊，底部分隔線
- **elements**:
  - `greeting_text`: H1 / "歡迎回來，{userName}"
  - `date_context`: Body SM / "{今天日期} {星期}"
  - `next_action_card`: ActionBanner（背景使用 Accent Light #FEF3E2 或 Primary Light #E8EEF5）
    - 邏輯規則（依用戶當前階段，前端根據 API 回應判定）：
      - 無專案 → "開始你的第一個痛點研究" → `/collector/new`
      - Pain Collector 階段 → "繼續採集：{project_name}（已有 {n} 個結構化痛點）" → `/project/{id}/collector`
      - Essence Decomposer 階段 → "完成問題本質拆解：{project_name}（{n} 個物理量待補）" → `/project/{id}/decomposer`
      - Disruption Mapper 階段 → "產出 GTM 策略：{project_name}" → `/project/{id}/disruption`
      - 所有專案 GTM 完成 → "探索行業痛點圖譜，看看新驗證的痛點" → `/atlas`
    - CTA 按鈕：Amber `#E8913A`，文字主動語態
  - `encouragement_text`: Body SM / optional / 反焦慮文案，例如「每個問題都值得被釐清」
- **states**:
  - `default`: 個人化資訊 + 下一步行動橫幅
  - `loading`: Skeleton（greeting 行 + action banner 區塊）
  - `error`: greeting 顯示（用快取用戶名），next_action 降級為通用文案「繼續你的研究」
  - `new_user`: greeting + next_action 顯示「開始你的第一個痛點研究」+ 簡短引導文字
- **copy_constraints**: 用戶名最多 20 字元；next_action 描述最多 60 字元；encouragement 最多 30 字元

---

#### Section 2: active_projects

- **layout**: 單欄，卡片垂直排列，最多 5 張；超過顯示「查看全部」連結
- **elements**:
  - `section_title`: H2 / "進行中的研究"
  - `project_cards`: ProjectCard[]
    - `project_name`: Body MD Bold（最多 40 字元，超出截斷）
    - `current_stage`: Badge（固定文字）— 痛點採集 / 問題拆解 / GTM 策略 / 圖譜貢獻
    - `last_modified`: Caption / "最後編輯：{相對時間}"
    - `physical_quantities_status`: IconRow / 四個物理量各顯示 完成 / 部分 / 缺失 三態圖示
      - 具體的人、正在付錢的痛、手工交付方式、錢的管道
      - 每個圖示附 `aria-label`（如 "具體的人：已完成"）
    - 整張卡片可點擊，進入該專案當前階段
  - `view_all_link`: "查看全部 {n} 個研究 →"（專案 > 5 時顯示）
- **states**:
  - `default`: 按 lastModified 降序排列的專案列表
  - `hover`: 邊框加深為 Deep Teal #2D7D8A，輕微陰影變化，cursor: pointer
  - `loading`: 3 張 Skeleton card（pulse 動畫）
  - `empty`: 插圖 + "還沒有進行中的研究" + CTA「開始第一個痛點採集」→ `/collector/new`
  - `error`: "無法載入專案" + 重試按鈕

---

#### Section 3: quick_actions

- **layout**: 1 行 4 列（Desktop）/ 2x2（Tablet）/ 橫向捲動（Mobile）
- **elements** (4 張 ActionCard):
  1. `add_material_card`: icon: Plus / "新增材料" / "採集新的痛點素材" / → `/collector/new`
  2. `continue_research_card`: icon: ArrowRight / "繼續研究" / "回到最近的專案" / → 最近編輯的專案頁面
  3. `explore_atlas_card`: icon: Map / "探索圖譜" / "瀏覽行業痛點地圖" / → `/atlas`
  4. `export_report_card`: icon: Download / "匯出報告" / "輸出結構化研究成果" / → 觸發匯出選項 Modal（非直接下載）
- **states**:
  - `default`: 白色背景，icon + 主標題 + 副標題
  - `hover`: 邊框加深為 Deep Teal #2D7D8A，上移 -2px + Shadow MD
  - `loading`: 4 張 Skeleton card
  - `disabled`: 灰度顯示 + tooltip（如無專案時「繼續研究」disabled，tooltip: "先新增材料"）
- **copy_constraints**: 主標題最多 6 字；副標題最多 15 字

---

#### Section 4: progress_overview

- **layout**: 1 行 4 列（Desktop）/ 2x2（Tablet）/ 2x2（Mobile）
- **elements** (4 張 FactCard):
  1. `structured_pains_count`: label "結構化痛點" / value "{n} 個"
  2. `validated_themes_count`: label "已驗證主題" / value "{n} 個"
  3. `gtm_strategies_count`: label "GTM 策略" / value "{n} 份"
  4. `atlas_contributions_count`: label "圖譜貢獻" / value "{n} 個"
- **states**:
  - `default`: 大字體數字 + 小字標籤（純計數，無比較）
  - `loading`: Skeleton（數字區 + 標籤區）
  - `zero_state`: 顯示 "0 個"（誠實呈現，不隱藏、不製造壓力）
  - `error`: 顯示 "--" 取代數字
- **copy_constraints**: label 最多 8 字；value 格式統一為 "{數字} {單位}"
- **禁止規則**: 絕對禁止百分比、分數、星等、趨勢箭頭、與他人比較、任何暗示「好/壞」的視覺元素

---

#### Section 5: recent_activity

- **layout**: 時間軸式列表（左側時間線 + 右側內容），最多 10 項
- **elements**:
  - `section_title`: H2 / "最近活動"
  - `activity_items`: ActivityRow[]
    - `timestamp`: Caption / 相對時間（"3 小時前" / "昨天" / "4月5日"）
    - `activity_summary`: Body SM / 動作描述（最多 80 字元）
      - 範例：「完成 E-commerce 行業痛點採集（8 個結構化痛點）」
      - 範例：「問題本質拆解 — 發現 2 個缺失的物理量」
      - 範例：「產出 GTM 策略：低端破壞切入方案」
      - 範例：「匿名貢獻 3 個痛點至行業圖譜」
    - `project_link`: InlineLink / optional / 點擊跳至對應專案
  - `view_all_link`: "查看完整紀錄 →" → `/activity`
- **states**:
  - `default`: 時間軸列表，按時間降序
  - `loading`: 5 行 Skeleton row
  - `empty`: "還沒有活動紀錄。" + 引導「從新增材料開始你的第一個研究」+ CTA
  - `error`: 錯誤訊息 + 重試按鈕

---

#### Section 6: community_pulse

- **layout**: 單張卡片，全寬，背景色 BG Muted #F1F3F5（低調，不搶視覺權重）
- **elements**:
  - `section_icon`: Map 或 Globe icon
  - `pulse_text`: Body MD（最多 40 字元）
    - 範例："本週你的行業有 3 個新驗證痛點"
    - 範例："有 12 位研究者在探索 SaaS 行業痛點"
    - 無行業設定時："痛點圖譜本週新增 {n} 個驗證痛點"
  - `atlas_link`: "前往圖譜看看 →" → `/atlas`
- **states**:
  - `default`: 一行動態文案 + 連結
  - `loading`: Skeleton 單行
  - `empty`: "圖譜正在累積中，你的貢獻會讓它更準確。" + 連結
  - `error`: 靜默隱藏整個 section（非關鍵區塊）
- **禁止**: FOMO 用語（「你錯過了」「別人都在」「限時」等全部禁止）

---

### [INTERACTION & STATE FLOW]

#### 下一步行動判定邏輯（前端根據 `/api/dashboard/next-action` 回應渲染）

```
IF user.projects.length === 0
  → "開始你的第一個痛點研究" → /collector/new

ELSE
  mostRecent = user.projects.sortBy(lastModified).first()

  IF mostRecent.stage === 'collector' AND mostRecent.structuredPains < 3
    → "繼續採集：{name}（已有 {n} 個結構化痛點）" → /project/{id}/collector

  ELSE IF mostRecent.stage === 'decomposer'
    missingQty = mostRecent.physicalQuantities.filter(q => q.status !== 'complete').length
    → "完成問題本質拆解：{name}（{missingQty} 個物理量待補）" → /project/{id}/decomposer

  ELSE IF mostRecent.stage === 'disruption'
    → "產出 GTM 策略：{name}" → /project/{id}/disruption

  ELSE IF ALL projects have completed GTM
    → "探索行業痛點圖譜，看看新驗證的痛點" → /atlas
```

#### 主要互動流程

1. 頁面載入 → 並行請求全部 5 個 API 端點，各 section 獨立渲染，互不阻塞
2. 點擊「你的下一步」橫幅 → 導航至對應專案/功能頁面
3. 點擊專案卡片 → 進入該專案當前階段的工作頁面
4. 點擊快捷操作卡片 → 導航至對應功能頁
5. 點擊活動紀錄中的專案連結 → 進入該專案
6. 點擊社群脈動連結 → 進入 Pain Atlas

---

### [RWD 行為]

| 斷點 | 佈局 | 差異說明 |
|------|------|---------|
| Desktop (>1200px) | 左側 Sidebar 展開 (280px) + 右側主內容區。quick_actions 與 progress_overview 各為 1x4 橫排 | 完整體驗，所有 section 一屏內可見 |
| Tablet (768-1200px) | Sidebar 收合為 icon-only。quick_actions 與 progress_overview 各為 2x2 網格 | active_projects 卡片寬度 100% |
| Mobile (<768px) | Sidebar 消失，改底部 Tab 導航。所有 section 單欄堆疊；quick_actions 橫向捲動 | welcome_next_action 佔首屏 > 60% 高度，確保「下一步」最先被看到。community_pulse 移至頁面最底部 |

---

### [DATA & API]

- **端點（並行請求，互不阻塞）**:
  - `GET /api/dashboard/next-action` — 用戶當前下一步行動建議（含推薦原因與目標 URL）
  - `GET /api/projects?status=active&limit=5&sort=lastModified:desc` — 進行中專案列表（含 stage、physical quantities status）
  - `GET /api/dashboard/progress` — 進度統計（structured_pains_count, validated_themes_count, gtm_strategies_count, atlas_contributions_count）
  - `GET /api/activity/recent?limit=10` — 最近活動紀錄
  - `GET /api/atlas/pulse?industry={user_industry}` — 社群脈動摘要
- **快取策略**:
  - 專案列表、進度統計、活動紀錄：stale-while-revalidate，每次進入頁面重新請求
  - 社群脈動：快取 15 分鐘，背景更新
- **錯誤處理**:
  - 網路離線：頂部提示橫幅 + 使用本地快取渲染（如有）；快取過期則顯示「目前無法連線，請稍後再試」+ 重試
  - API 5xx：各 section 獨立降級（next_action 通用文案；active_projects 重試按鈕；progress_overview 顯示 "--"；activity 重試；community_pulse 靜默隱藏）
  - 401/403：重導至 `/login?redirect=/dashboard`
  - API 回應 > 3 秒：各 section 獨立顯示 Skeleton，不阻塞其他 section

---

## === EXCEPTION RULES ===

1. **welcome_next_action 的 ActionBanner** 使用強調背景色（Accent Light #FEF3E2 或 Primary Light #E8EEF5），不受一般卡片白色背景規則限制。這是刻意的視覺層級設計，確保「下一步」在全頁中最醒目。

2. **progress_overview 的 FactCard 不使用趨勢箭頭或比較指標**，與 Global Design System 的 MetricCard 元件不同。PainMap 的 FactCard 是純計數呈現，沒有 vs 上期比較。此為反焦慮設計紀律的明確要求（PRD US-040）。

其餘部分完全遵循 Global Guideline。

---

## === OUTPUT REQUIREMENTS ===

請依照以下步驟輸出：

### Step 1: 結構確認

列出本頁面的：
- 6 個 sections 及其各自用途
- 每個 section 的關鍵元件列表
- 資料流策略：5 個 API 並行請求，各 section 獨立渲染與降級
- 狀態管理：React Query 處理伺服器狀態，Zustand 處理 UI 狀態（sidebar 開合、active section）

### Step 2: 設計決策說明

說明以下 3 個關鍵設計決策：
1. **反焦慮設計如何落實**：pure fact counts、無趨勢比較、ActionBanner 語氣設計
2. **「下一步」視覺層級為何最高**：ActionBanner 背景色差異、首屏佔比（Mobile > 60%）
3. **各 section 獨立降級策略**：如何確保任一 API 失敗不影響整頁體驗

### Step 3: 實作方案

使用 **Option A: 完整程式碼**（推薦 Lovable）：

```tsx
// 產出完整的 React 18 + TypeScript + Tailwind CSS 實作
// 包含：
// - DashboardPage 主元件
// - WelcomeNextAction / ActiveProjects / QuickActions / ProgressOverview / RecentActivity / CommunityPulse 各 section 元件
// - 各元件的 Loading / Error / Empty 狀態
// - useNextAction / useActiveProjects / useDashboardProgress / useRecentActivity / useCommunityPulse 五個 React Query hooks
// - RWD 完整實作（Mobile / Tablet / Desktop）
// - 鍵盤導航 + ARIA labels
```

---

### 品質檢查清單

#### 反焦慮設計紀律（最高優先，PainMap 核心原則）
- [ ] 全頁零分數、零星等、零排名、零趨勢箭頭、零與他人比較
- [ ] progress_overview 純計數呈現，無任何「好/壞」視覺暗示
- [ ] community_pulse 無 FOMO 用語
- [ ] 全頁用「問題」「痛點」，不出現「idea」「點子」

#### 色彩系統一致性
- [ ] CTA 按鈕使用 Accent #E8913A
- [ ] 互動邊框 hover 使用 Secondary #2D7D8A
- [ ] 頁面底色 BG Page #F7F8FA，卡片底色 BG Surface #FFFFFF
- [ ] Error 狀態使用 Error #DC2626（僅系統錯誤，不用於痛點強度）

#### 字體層級正確
- [ ] 頁面標題使用 H1 28px
- [ ] 區塊標題使用 H2 22px
- [ ] 時間戳、metadata 使用 Caption 12px

#### 元件狀態完備
- [ ] 每個 section 皆已實作：default / loading / error / empty 四態
- [ ] hover 套用於所有可點擊元素（專案卡片、快捷操作卡片、連結）
- [ ] disabled 狀態正確呈現（「繼續研究」在無專案時灰度 + tooltip）
- [ ] loading 使用 Skeleton + pulse 動畫，不使用 spinner 百分比

#### RWD 完整性
- [ ] Desktop (>1200px)：4 欄快捷操作 + 4 欄進度概覽
- [ ] Tablet (768-1200px)：2x2 網格
- [ ] Mobile (<768px)：單欄堆疊，quick_actions 橫向捲動，welcome_next_action 首屏 > 60%

#### 無障礙 (WCAG 2.1 AA)
- [ ] 所有顏色對比度 >= 4.5:1
- [ ] 物理量狀態圖示提供 aria-label（如 "具體的人：已完成"）
- [ ] 完整 Tab 鍵盤導航 + Focus ring (#2D7D8A)
- [ ] 語意化 HTML：專案列表用 `<article>`，導航用 `<nav>`

#### 效能
- [ ] 5 個 API 並行請求，互不阻塞
- [ ] 頁面 FMP < 1.5s
- [ ] 社群脈動快取 15 分鐘
- [ ] 各 section 獨立降級，任一 API 失敗不影響其他 section

#### 資料正確性
- [ ] 活動紀錄按時間降序排列
- [ ] 專案卡片按最後編輯時間降序排列
- [ ] 進度計數直接渲染 API 回傳值，前端不做計算
- [ ] 下一步行動邏輯與 API `/api/dashboard/next-action` 回應一致

---

**執行優先順序**：
1. Global 規範（配色、字體、反焦慮設計紀律）為最高優先級
2. Page 特定需求次之（6 sections、下一步邏輯、RWD 行為）
3. Exception（ActionBanner 背景色、FactCard 純計數）已明確說明且最小化

**版本資訊**：
- Global System 版本：v1.0
- Assembly 日期：2026-04-09
- 負責人：Sunny
