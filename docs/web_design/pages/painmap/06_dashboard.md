# Page-Level Prompt: PainMap Dashboard (用戶儀表板)

> PainMap 用戶登入後的主頁面。核心設計原則：**減少決策癱瘓，一眼知道下一步該做什麼。**
> 反焦慮基因貫穿全頁：不打分、不排名、不催促，只呈現事實與行動。

---

## [PAGE META]

- **page_name**: PainMap Dashboard (用戶儀表板)
- **route_path**: `/dashboard`
- **page_type**: dashboard
- **primary_goal**: 提供用戶痛點研究進度總覽，並引導至下一步具體行動
- **secondary_goal**: 讓中斷後回來的用戶快速接續之前的工作
- **target_users**:
  - 主要：已登入的 PainMap 用戶（每日使用）
  - 次要：中斷後回來的用戶，需要快速找到上次進度
- **entry_point**: 登入後直接導向 / 點擊 Logo 返回 / 側邊欄「儀表板」連結
- **expected_time_on_page**: 15-45 秒（快速掃視後進入具體功能；不是停留頁，是導航頁）

---

## [STRUCTURE: SECTIONS]

1. **welcome_next_action**
   - section_type: hero
   - section_purpose: 個人化歡迎 + 顯示「你的下一步是___」，這是整頁最重要的元素

2. **active_projects**
   - section_type: card_list
   - section_purpose: 顯示進行中的問題研究專案，讓用戶一眼掌握所有進度

3. **quick_actions**
   - section_type: action_cards
   - section_purpose: 提供 4 個高頻操作的快捷入口，減少點擊次數

4. **progress_overview**
   - section_type: stats_facts
   - section_purpose: 以事實計數呈現研究進展（非分數、非排名）

5. **recent_activity**
   - section_type: timeline
   - section_purpose: 時間序列展示近期操作紀錄，幫助用戶回憶上下文

6. **community_pulse**
   - section_type: snippet_card
   - section_purpose: 展示行業痛點圖譜近期動態，鼓勵社群參與但不施壓

---

## [SECTION COMPONENT SPEC]

### Section: welcome_next_action

- **layout**: 全寬單欄，左對齊，底部分隔線
- **elements**:
  - greeting_text: H1 / required / "歡迎回來，{userName}"
  - date_context: Body SM / required / "{今天日期} {星期}"
  - next_action_card: ActionBanner / required / 背景色突出的橫幅，內容為「你的下一步是___」+ CTA 按鈕
    - 邏輯規則（依用戶當前階段）：
      - 無專案：「開始你的第一個痛點研究」→ Pain Collector
      - 在 Pain Collector 階段：「繼續採集：{project_name}（已有 {n} 個結構化痛點）」→ 該專案
      - 在 Essence Decomposer 階段：「完成問題本質拆解：{project_name}（{n} 個物理量待補）」→ 該專案
      - 在 Disruption Mapper 階段：「產出 GTM 策略：{project_name}」→ 該專案
      - 所有專案已完成 GTM：「探索行業痛點圖譜，看看新驗證的痛點」→ Pain Atlas
  - encouragement_text: Body SM / optional / 反焦慮文案，例如「每個問題都值得被釐清」
- **states**:
  - default: 顯示個人化資訊 + 下一步行動橫幅
  - loading: Skeleton（greeting 行 + action banner 區塊）
  - error: greeting 仍顯示（用快取用戶名），next_action 降級為通用文案「繼續你的研究」
  - new_user: greeting + next_action 顯示「開始你的第一個痛點研究」+ 簡短引導文字
- **copy_constraints**: 用戶名稱最多 20 字元；next_action 描述最多 60 字元；encouragement 最多 30 字元

### Section: active_projects

- **layout**: 單欄，卡片垂直排列，最多顯示 5 張（超過顯示「查看全部」連結）
- **elements**:
  - section_title: H2 / required / "進行中的研究"
  - project_cards: ProjectCard[] / required
    - project_name: Body MD Bold / required / 專案名稱
    - current_stage: Badge / required / 當前所在 Epic（痛點採集 / 問題拆解 / GTM 策略 / 圖譜貢獻）
    - last_modified: Caption / required / "最後編輯：{相對時間}"
    - physical_quantities_status: IconRow / required / 四個物理量完成狀態
      - 具體的人：完成 / 部分 / 缺失
      - 正在付錢的痛：完成 / 部分 / 缺失
      - 手工交付方式：完成 / 部分 / 缺失
      - 錢的管道：完成 / 部分 / 缺失
    - resume_action: 整張卡片可點擊 / required / 點擊進入該專案當前階段
  - view_all_link: Link / conditional / "查看全部 {n} 個研究 →"（專案 > 5 時顯示）
- **states**:
  - default: 顯示專案卡片列表，按 last_modified 降序
  - hover: 卡片邊框加深，輕微陰影變化，cursor: pointer
  - loading: 3 張 Skeleton card
  - empty: 插圖 + "還沒有進行中的研究" + CTA「開始第一個痛點採集」→ Pain Collector
  - error: 錯誤訊息「無法載入專案」+ 重試按鈕
- **copy_constraints**: 專案名稱最多 40 字元（超出截斷）；stage badge 固定文字

### Section: quick_actions

- **layout**: 1 行 4 列卡片網格（Desktop）/ 2x2（Tablet）/ 橫向捲動（Mobile）
- **elements**:
  - add_material_card: ActionCard / required / icon: Plus / "新增材料" / subtitle: "採集新的痛點素材" / → `/collector/new`
  - continue_research_card: ActionCard / required / icon: ArrowRight / "繼續研究" / subtitle: "回到最近的專案" / → 最近編輯的專案頁面
  - explore_atlas_card: ActionCard / required / icon: Map / "探索圖譜" / subtitle: "瀏覽行業痛點地圖" / → `/atlas`
  - export_report_card: ActionCard / required / icon: Download / "匯出報告" / subtitle: "輸出結構化研究成果" / → `/export`（彈出匯出選項）
- **states**:
  - default: 白色背景卡片，icon + 主標題 + 副標題
  - hover: 邊框加深，輕微上移 (-2px) + 陰影增強
  - loading: 4 張 Skeleton card
  - disabled: 灰度顯示 + tooltip 說明原因（例如「繼續研究」在無專案時 disabled，提示「先新增材料」）
- **copy_constraints**: 主標題最多 6 字；副標題最多 15 字

### Section: progress_overview

- **layout**: 1 行 4 列指標卡片（Desktop）/ 2x2（Tablet）/ 2x2（Mobile）
- **elements**:
  - structured_pains_count: FactCard / required / label: "結構化痛點" / value: "{n} 個" / 無趨勢、無評分
  - validated_themes_count: FactCard / required / label: "已驗證主題" / value: "{n} 個" / 無趨勢、無評分
  - gtm_strategies_count: FactCard / required / label: "GTM 策略" / value: "{n} 份" / 無趨勢、無評分
  - atlas_contributions_count: FactCard / required / label: "圖譜貢獻" / value: "{n} 個" / 無趨勢、無評分
- **states**:
  - default: 顯示純數字計數（大字體數字 + 小字標籤）
  - loading: Skeleton（數字區 + 標籤區）
  - zero_state: 顯示 "0 個" 而非隱藏卡片（誠實呈現，不製造壓力）
  - error: 顯示 "--" 取代數字
- **copy_constraints**: label 最多 8 字；value 格式統一為 "{數字} {單位}"
- **禁止規則**: 禁止百分比、分數、星等、趨勢箭頭、與其他用戶的比較、任何暗示「好/壞」的視覺元素

### Section: recent_activity

- **layout**: 時間軸式列表，左側時間線 + 右側內容，最多 10 項
- **elements**:
  - section_title: H2 / required / "最近活動"
  - activity_items: ActivityRow[] / required
    - timestamp: Caption / required / 相對時間格式（"3 小時前" / "昨天" / "4月5日"）
    - activity_summary: Body SM / required / 動作描述
      - 範例：「完成 E-commerce 行業痛點採集（8 個結構化痛點）」
      - 範例：「問題本質拆解 — 發現 2 個缺失的物理量」
      - 範例：「產出 GTM 策略：低端破壞切入方案」
      - 範例：「匿名貢獻 3 個痛點至行業圖譜」
    - project_link: InlineLink / optional / 點擊跳至對應專案
  - view_all_link: Link / optional / "查看完整紀錄 →" → `/activity`
- **states**:
  - default: 顯示時間軸列表
  - loading: 5 行 Skeleton row
  - empty: "還沒有活動紀錄。" + 引導文字「從新增材料開始你的第一個研究」+ CTA
  - error: 錯誤訊息 + 重試按鈕
- **copy_constraints**: activity_summary 最多 80 字元，保持在 2 行以內

### Section: community_pulse

- **layout**: 單張卡片，全寬，低調背景色（不搶 welcome_next_action 的視覺權重）
- **elements**:
  - section_icon: Icon / required / Map 或 Globe icon
  - pulse_text: Body MD / required / 動態文案，範例：
    - "本週你的行業有 3 個新驗證痛點"
    - "有 12 位研究者在探索 SaaS 行業痛點"
    - "E-commerce 行業新增 5 個結構化痛點"
  - atlas_link: Link / required / "前往圖譜看看 →" → `/atlas`
- **states**:
  - default: 顯示一行動態文案 + 連結
  - loading: Skeleton 單行
  - empty: "圖譜正在累積中，你的貢獻會讓它更準確。" + 連結
  - error: 靜默隱藏整個 section（非關鍵區塊，不顯示錯誤）
  - no_industry: 用戶未設定行業時顯示通用文案 "痛點圖譜本週新增 {n} 個驗證痛點"
- **copy_constraints**: pulse_text 最多 40 字元；語氣溫和鼓勵，禁止 FOMO 用語（如「你錯過了」「別人都在」）

---

## [INTERACTION & STATE FLOW]

### 主要互動流程

1. 頁面載入 → 並行請求用戶資料 + 專案列表 + 進度統計 + 活動紀錄 + 社群脈動
2. 點擊「你的下一步」橫幅 → 導航至對應專案/功能頁面
3. 點擊專案卡片 → 進入該專案當前階段的工作頁面
4. 點擊快捷操作卡片 → 導航至對應功能頁
5. 點擊活動紀錄中的專案連結 → 進入該專案
6. 點擊社群脈動連結 → 進入 Pain Atlas

### 下一步行動判定邏輯

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

### RWD 行為差異

| 斷點 | 佈局 | 差異說明 |
|------|------|---------|
| Desktop (>1280px) | 左側 Sidebar 展開 + 右側主內容區。quick_actions 與 progress_overview 各為 1x4 橫排 | 完整體驗，所有 section 一屏內可見 |
| Tablet (768-1280px) | Sidebar 收合為 icon-only。quick_actions 與 progress_overview 各為 2x2 網格 | active_projects 卡片寬度 100% |
| Mobile (<768px) | Sidebar 消失，改底部 Tab 導航。所有 section 單欄堆疊。quick_actions 橫向捲動 | welcome_next_action 佔據首屏 > 60% 高度以確保「下一步」最先被看到。community_pulse 移至頁面最底部 |

### 資料更新策略

- 專案列表與進度統計：每次進入頁面時重新請求（stale-while-revalidate）
- 活動紀錄：每次進入頁面時重新請求
- 社群脈動：快取 15 分鐘，過期後背景更新
- 下一步行動：依賴專案資料，隨專案資料一起更新

---

## [DATA & API]

- **uses_api**: true
- **endpoints**:
  - GET `/api/dashboard/next-action` -- 取得用戶當前下一步行動建議（含推薦原因與目標 URL）
  - GET `/api/projects?status=active&limit=5&sort=lastModified:desc` -- 取得進行中專案列表（含 stage、physical quantities status）
  - GET `/api/dashboard/progress` -- 取得進度統計（structured_pains_count, validated_themes_count, gtm_strategies_count, atlas_contributions_count）
  - GET `/api/activity/recent?limit=10` -- 取得最近活動紀錄
  - GET `/api/atlas/pulse?industry={user_industry}` -- 取得社群脈動摘要
- **error_cases**:
  - 網路錯誤：顯示離線提示橫幅（頂部），使用本地快取資料渲染頁面（如有）。快取過期則顯示「目前無法連線，請稍後再試」+ 重試按鈕
  - API 錯誤（5xx）：各 section 獨立降級 -- next_action 降級為通用文案；active_projects 顯示重試按鈕；progress_overview 顯示 "--"；activity 顯示重試按鈕；community_pulse 靜默隱藏
  - 權限不足（401/403）：重新導向登入頁 `/login?redirect=/dashboard`
  - API 回應緩慢（> 3 秒）：各 section 獨立顯示 skeleton，不阻塞其他 section 渲染

---

## [EXCEPTION TO GLOBAL RULES]

- **welcome_next_action 的 ActionBanner** 使用強調背景色（品牌色淺色系），不受一般卡片白色背景規則限制。此為刻意設計，確保「下一步」在視覺層級中最高。
- **progress_overview 不使用趨勢箭頭或比較指標**，與 Global Design System 的 MetricCard 元件不同。PainMap 的 FactCard 是純計數呈現，沒有 vs 上期比較。這是反焦慮設計紀律的要求（PRD US-040）。
- 其餘部分完全遵循 Global System Prompt 規範。

---

## [ACCEPTANCE CRITERIA]

### 功能完整性
- [ ] 所有 6 個 Section 功能正常且獨立渲染（任一 section API 失敗不影響其他 section）
- [ ] 「你的下一步是___」根據用戶當前階段正確判定並顯示對應文案與連結
- [ ] 新用戶（無專案）看到引導式空狀態，CTA 指向 Pain Collector
- [ ] 專案卡片正確顯示四個物理量狀態圖示（完成/部分/缺失 三態）
- [ ] 快捷操作「繼續研究」正確連結至最近編輯的專案
- [ ] 匯出報告功能觸發匯出選項（非直接下載）

### 狀態完備性
- [ ] 每個 Section 皆已實作：default / loading / error / empty 四態
- [ ] hover 狀態套用於所有可點擊元素（專案卡片、快捷操作卡片、連結）
- [ ] disabled 狀態正確呈現（如無專案時「繼續研究」灰度 + tooltip）

### RWD 正確性
- [ ] Desktop (>1280px)：4 欄快捷操作 + 4 欄進度概覽正確呈現
- [ ] Tablet (768-1280px)：2x2 網格正確排列
- [ ] Mobile (<768px)：單欄堆疊，quick_actions 橫向捲動，welcome_next_action 佔首屏 > 60%

### 反焦慮設計紀律（PRD US-040 ~ US-042）
- [ ] 全頁面零分數、零星等、零排名、零趨勢比較
- [ ] 進度以純事實呈現：「你已結構化 12 個痛點」而非「你的表現：85 分」
- [ ] 無 FOMO 用語（「你落後了」「別人都在」「限時」等全部禁止）
- [ ] 鼓勵文案語氣溫和：「每個問題都值得被釐清」風格
- [ ] 全頁面用「問題」「痛點」稱呼，不出現「idea」「點子」

### 效能
- [ ] 頁面首次有意義渲染 (FMP) < 1.5 秒
- [ ] 所有 API 請求並行發出，互不阻塞
- [ ] Skeleton 載入狀態在 API 回應前立即顯示
- [ ] 社群脈動快取 15 分鐘，不重複請求

### 無障礙
- [ ] 所有互動元素可用鍵盤操作（Tab 順序合理）
- [ ] 物理量狀態圖示提供 aria-label（如 "具體的人：已完成"）
- [ ] 色彩對比度符合 WCAG 2.1 AA 標準

### 資料正確性
- [ ] 活動紀錄按時間降序正確排列
- [ ] 專案卡片按最後編輯時間降序排列
- [ ] 進度計數與實際資料一致（API 回傳值直接渲染，前端不做計算）
