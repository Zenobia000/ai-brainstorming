# Page-Level Prompt: Pain Atlas (行業痛點圖譜)

> 對應 PainMap PRD Epic 4（US-030 ~ US-032）。
> 此頁面是 PainMap 的「入口 B」：給還不知道做什麼的人一張地圖。

---

## [PAGE META]

- **page_name**: Pain Atlas (行業痛點圖譜)
- **route_path**: `/atlas`
- **page_type**: exploration (search + browse)
- **primary_goal**: 提供社群貢獻、匿名化的已驗證痛點資料庫，讓使用者看見同行業的人驗證過什麼問題
- **secondary_goal**: 為新使用者提供探索入口，降低「不知道做什麼」的起步門檻；驅動圖譜貢獻飛輪
- **target_users**:
  - 主要：所有 PainMap 使用者（貢獻者與探索者）
  - 次要：新使用者探索平台價值（未註冊可瀏覽前 10 條，作為轉換鉤子）
- **entry_point**: 主導航「痛點圖譜」入口 / 首頁 CTA / 完成結構化後的貢獻引導 / 外部分享連結
- **expected_time_on_page**: 3-10 分鐘（探索瀏覽 → 找到啟發 → 進入 Pain Collector 或註冊）

---

## [STRUCTURE: SECTIONS]

1. **atlas_explorer_header**
   - section_type: search_hero
   - section_purpose: 提供搜尋、行業篩選、驗證層級篩選的統一入口，並展示圖譜規模的即時統計

2. **industry_map_visualization**
   - section_type: interactive_chart
   - section_purpose: 以視覺化方式呈現各行業的痛點分布密度，引導使用者快速定位感興趣的行業

3. **pain_cluster_grid**
   - section_type: filterable_card_grid
   - section_purpose: 展示特定行業下的痛點群集卡片，提供結構化的痛點瀏覽體驗

4. **pain_detail_modal**
   - section_type: modal_overlay
   - section_purpose: 展示單一痛點的完整結構化資訊，並引導使用者進入行動（開始用 Pain Collector）

5. **contribute_panel**
   - section_type: sidebar_cta
   - section_purpose: 邀請使用者 opt-in 貢獻匿名化痛點，並清楚說明匿名化規則與隱私保障

6. **trending_insights_bar**
   - section_type: horizontal_scroll
   - section_purpose: 展示本週活躍的行業與痛點趨勢，製造「有人跟我關注一樣的事」的參照感

---

## [SECTION COMPONENT SPEC]

### Section: atlas_explorer_header

- **layout**: 全寬單欄，垂直置中對齊
- **elements**:
  - search_bar: SearchInput / required / placeholder: "搜尋你的行業或痛點關鍵字" / 支援即時建議（autocomplete）
  - industry_filter: Dropdown / required / 行業篩選（多選）/ 選項從圖譜資料動態生成
  - tier_filter: FilterChips / required / 驗證層級篩選：Seed、Community、Interview-Verified、Payment-Verified / 預設全選
  - quick_stats: StatsRow / required / "{X} 個行業 x {Y} 個已驗證痛點" / 即時從 API 取得
  - clear_filters: TextButton / optional / "清除篩選" / 有任何篩選啟用時顯示
- **states**:
  - default: 搜尋框聚焦、篩選器展開、統計數字顯示
  - loading: 統計數字顯示 skeleton；篩選器可用但結果區 loading
  - empty_search: "沒有符合「{keyword}」的痛點。試試其他關鍵字？"
  - error: "無法載入圖譜資料" + 重試按鈕
- **copy_constraints**: 搜尋關鍵字最長 100 字元；統計數字用千分位格式

### Section: industry_map_visualization

- **layout**: 全寬容器，最大高度 500px（Desktop）/ 300px（Mobile）
- **elements**:
  - treemap_chart: InteractiveTreemap / required / 各行業以區塊大小表示痛點數量 / 點擊鑽入該行業
  - bubble_fallback: BubbleChart / optional / 當行業數 < 8 時改用泡泡圖，更清晰
  - color_legend: Legend / required / 顏色對應驗證層級密度：Seed(灰)、Community(藍)、Interview-Verified(綠)、Payment-Verified(橙)
  - industry_label: OverlayText / required / 行業名稱 + 痛點數量標註在圖塊上
  - breadcrumb: Breadcrumb / required / "全部行業 > {選中行業}" / 提供返回路徑
- **states**:
  - default: 顯示所有行業的 treemap 總覽
  - hover: 圖塊高亮 + tooltip 顯示行業名 + 痛點數 + 驗證層級分布
  - selected: 選中行業高亮，其餘淡化；下方 pain_cluster_grid 載入該行業資料
  - loading: 整體 skeleton 矩形 + 淡入動畫
  - empty: "圖譜正在建構中。成為第一批貢獻者！" + CTA 前往 Pain Collector
  - error: "視覺化載入失敗" + 重試按鈕 + 降級為行業列表
- **copy_constraints**: 行業名稱最長 8 個中文字；泡泡/區塊內數字用縮寫（1.2k）

### Section: pain_cluster_grid

- **layout**: 3 欄卡片網格（Desktop）/ 2 欄（Tablet）/ 1 欄（Mobile）
- **elements**:
  - section_title: H2 / required / "{行業名} 的痛點群集" / 當未選行業時顯示 "所有行業的痛點"
  - sort_control: DropdownSmall / required / 排序選項：最新、驗證層級、貢獻者數量
  - pain_card: PainClusterCard[] / required / 每張卡片包含：
    - problem_theme: H3 / required / 問題主題標題 / 最長 40 字
    - situation_snippet: BodySM / required / 情境摘要 / 最長 80 字 / 截斷加 "..."
    - audience_tag: Tag / required / 目標受眾標籤（如「電商賣家」「SaaS PM」）
    - tier_badge: Badge / required / 驗證層級徽章 / 顏色與 legend 一致
    - contributor_count: Caption / required / "{N} 人驗證" / 匿名化數字
  - pagination: LoadMore / required / "載入更多" 按鈕 / 每次 12 張卡片
  - result_count: Caption / required / "共 {N} 個痛點群集"
- **states**:
  - default: 卡片網格，按最新排序
  - hover: 卡片輕微上移 (translateY -2px) + 陰影加深
  - loading: Skeleton 卡片 x 6
  - empty: "這個行業還沒有痛點資料。成為第一個貢獻者？" + CTA 前往 Pain Collector
  - filtered: 套用篩選後顯示結果計數
- **copy_constraints**: 問題主題 40 字上限；情境摘要 80 字上限；標籤 6 字上限

### Section: pain_detail_modal

- **layout**: 居中 modal overlay，最大寬度 640px，可垂直捲動
- **elements**:
  - modal_header: H2 / required / 問題主題標題
  - structured_pain: StructuredBlock / required / 完整結構化痛點：
    - who: LabelValue / required / "誰" — 目標受眾描述
    - situation: LabelValue / required / "情境" — 什麼場景下遇到這個問題
    - current_solution: LabelValue / required / "現行解法" — 目前怎麼處理
    - dissatisfaction: LabelValue / required / "不滿的點" — 現行解法哪裡不好
  - social_proof: Callout / required / "這 {X} 人驗證了你行業中的類似問題" / 匿名化數字
  - tier_badge_large: BadgeLarge / required / 驗證層級 + 說明文字（如 "Payment-Verified: 有人實際為解決方案付費"）
  - related_pains: CardRow / optional / "相關痛點" / 水平捲動，最多 5 張縮小卡片
  - cta_button: ButtonPrimary / required / "想研究這個問題？從 Pain Collector 開始" / 導向 /collector
  - close_button: IconButton / required / 右上角關閉 (X)
  - backdrop: Overlay / required / 點擊背景關閉 modal
- **states**:
  - default: 顯示完整結構化痛點資訊
  - loading: Modal 框架 + 內容 skeleton
  - error: "無法載入痛點詳情" + 重試按鈕
  - no_related: 相關痛點區域隱藏（不顯示空狀態）
- **copy_constraints**: 結構化痛點各欄位最長 200 字；social proof 數字用整數

### Section: contribute_panel

- **layout**: Desktop: 右側固定 sidebar（寬 320px）/ Tablet+Mobile: 頁面底部固定 section
- **elements**:
  - panel_title: H3 / required / "把你的結構化痛點貢獻到圖譜"
  - description: BodySM / required / 說明貢獻機制與價值
  - privacy_showcase: ComparisonBlock / required / 兩欄對比：
    - shared_column: "其他人會看到" — 匿名化主題、行業、情境類型、驗證層級
    - private_column: "只有你看得到" — 你的具體細節、公司名、金額、個人資訊
  - anonymization_rules_link: TextLink / required / "查看完整匿名化規則" / 導向 /privacy/anonymization
  - opt_in_button: ButtonSecondary / required / "貢獻我的痛點（匿名化）" / 僅登入且有結構化痛點的使用者可用
  - withdrawal_note: Caption / required / "你可以隨時撤回貢獻。" / 帶 icon
  - privacy_badge: Badge / required / "隱私優先" / 綠色盾牌 icon
- **states**:
  - default: 展示隱私對比 + opt-in 按鈕
  - logged_out: 隱藏 opt-in 按鈕，改顯示 "登入後即可貢獻" + 登入連結
  - no_structured_pains: opt-in 按鈕 disabled + "先完成一次痛點結構化" + CTA 前往 /collector
  - contributed: 按鈕改為 "已貢獻 {N} 個痛點" + "管理我的貢獻" 連結
  - hover (opt-in button): 顯示 tooltip "貢獻前會預覽匿名化結果"
- **copy_constraints**: 面板總文案不超過 150 字（精簡傳達信任感）

### Section: trending_insights_bar

- **layout**: 全寬水平捲動條，單行
- **elements**:
  - section_label: Caption / required / "本週最多人在研究："
  - trend_chips: TrendChip[] / required / 每個 chip 包含：
    - industry_or_pain: BodySM / required / 行業名或痛點主題
    - activity_indicator: Dot / required / 活躍度指示（不是數字排名，只是「活躍」標記）
  - scroll_arrows: IconButton / optional / 左右捲動箭頭（Desktop，內容超出時顯示）
- **states**:
  - default: 水平捲動顯示本週活躍項目
  - loading: Skeleton chips x 5
  - empty: 隱藏整個 section（不顯示空狀態）
  - hover (chip): 底線高亮 + cursor pointer / 點擊套用為搜尋篩選
- **copy_constraints**: 每個 chip 文字最長 15 字；同時顯示最多 20 個 chips；禁止顯示任何數字排名

---

## [INTERACTION & STATE FLOW]

### 主要互動流程

1. 頁面載入 → 並行取得：圖譜統計、行業 treemap 資料、trending 資料、contribute 狀態
2. 使用者在搜尋框輸入關鍵字 → debounce 300ms → autocomplete 建議 → 送出搜尋 → 更新 treemap + grid
3. 使用者點擊行業篩選或 tier 篩選 → 即時更新 treemap 高亮 + grid 結果
4. 使用者在 treemap 點擊行業區塊 → breadcrumb 更新 → pain_cluster_grid 載入該行業痛點 → 頁面平滑捲動至 grid
5. 使用者點擊 pain_card → 開啟 pain_detail_modal → 載入完整結構化資訊
6. 使用者在 modal 點擊 CTA → 導向 /collector（帶 query param 預填行業）
7. 使用者在 modal 點擊相關痛點卡片 → 關閉當前 modal → 開啟新 modal
8. 使用者點擊 contribute opt-in → 跳轉至貢獻確認流程（預覽匿名化結果 → 確認 → 完成）
9. 使用者點擊 trending chip → 將該主題套用為搜尋篩選
10. 未註冊使用者瀏覽超過 10 個條目 → soft gate：「註冊解鎖完整圖譜」

### URL 狀態管理

- 搜尋與篩選狀態同步至 URL query params：`/atlas?q=電商&industry=retail&tier=payment-verified`
- 選中行業同步至 URL：`/atlas?industry=retail`
- Modal 開啟同步至 URL hash：`/atlas?industry=retail#pain-abc123`
- 支援分享連結：直接開啟特定行業或痛點

### RWD 行為差異

| 斷點 | 佈局 | 差異說明 |
|------|------|---------|
| Desktop (>1280px) | 3 欄 grid + 右側 contribute sidebar | treemap 完整互動；modal 寬 640px |
| Tablet (768-1280px) | 2 欄 grid + contribute 收合至底部 section | treemap 簡化互動（tap only）；modal 寬 90vw |
| Mobile (<768px) | 1 欄堆疊 + contribute 底部 section | treemap 改為行業列表（可展開）；modal 全屏；搜尋 bar sticky top |

### 資料更新策略

- 圖譜統計與 treemap：頁面載入時取得，不自動更新（使用者手動重新整理）
- Pain cluster grid：篩選/搜尋變更時重新取得
- Trending insights：每 1 小時更新（或頁面載入時取得快取版本）
- Contribute 狀態：即時（貢獻後立刻反映在面板上）

---

## [DATA & API]

- **uses_api**: true
- **endpoints**:
  - GET `/api/atlas/stats` — 取得圖譜總覽統計（行業數、痛點數、各 tier 計數）
  - GET `/api/atlas/industries` — 取得行業列表 + 各行業痛點計數 + tier 分布（treemap 資料）
  - GET `/api/atlas/pains?industry={id}&tier={tier}&q={keyword}&sort={field}&page={n}` — 搜尋/篩選痛點群集（分頁，每頁 12 條）
  - GET `/api/atlas/pains/{id}` — 取得單一痛點完整結構化詳情
  - GET `/api/atlas/pains/{id}/related` — 取得相關痛點（最多 5 條）
  - GET `/api/atlas/trending` — 取得本週活躍行業/痛點（快取 1 小時）
  - GET `/api/atlas/autocomplete?q={keyword}` — 搜尋自動補全建議
  - POST `/api/atlas/contribute` — 提交匿名化痛點貢獻（需認證）
  - DELETE `/api/atlas/contribute/{id}` — 撤回貢獻（需認證）
  - GET `/api/atlas/contribute/preview` — 預覽匿名化結果（貢獻前確認）
  - GET `/api/user/contributions` — 取得使用者已貢獻的痛點列表（需認證）
- **error_cases**:
  - 網路錯誤：顯示離線提示 + 使用本地快取資料（如有）
  - API 錯誤：顯示友善錯誤訊息 + 重試按鈕；treemap 降級為靜態列表
  - 權限不足（未登入存取 contribute）：顯示登入引導，不中斷瀏覽體驗
  - Rate limit（搜尋過於頻繁）：debounce + 提示「請稍候再試」
  - 404（痛點已撤回/不存在）：modal 顯示「此痛點已被撤回」+ 關閉按鈕

---

## [PRIVACY & ANONYMIZATION RULES]

> Pain Atlas 的核心信任基礎。此區段為本頁面特有。

### 匿名化處理規則（不可逆、單向）

| 保留（公開可見） | 移除（永不外洩） |
|:---|:---|
| 行業分類 | 使用者姓名 / 帳號 |
| 情境類型（抽象化） | 公司名 / 品牌名 |
| 目標受眾類型 | 具體金額 / 營收數字 |
| JTBD 結構 | 個人聯絡資訊 |
| 驗證層級事實 | 原始文字素材 |
| 匿名化貢獻者計數 | 任何可識別個人的細節 |

### 驗證層級定義（事實陳述，非品質評分）

| 層級 | 定義 | 顯示文案 |
|:---|:---|:---|
| Seed | PM 從公開來源策展 | "來自公開資料" |
| Community | 使用者貢獻的結構化痛點 | "社群貢獻" |
| Interview-Verified | 經過客戶訪談確認 | "訪談驗證" |
| Payment-Verified | 有人實際為解決方案付費 | "付費驗證" |

### 使用者控制權

- 貢獻前：預覽「別人會看到什麼 vs 什麼保持私密」
- 貢獻後：隨時可在「我的貢獻」頁面撤回
- 撤回後：圖譜中該條目移除，貢獻者計數減 1
- 資料刪除：撤回即永久刪除，不保留任何匿名化後的資料

---

## [COLD START STRATEGY]

> Phase 0 圖譜冷啟動方案（對應 PRD Q-004）。

- **種子資料**：PM 策展 200 個 Seed 級痛點，覆蓋 10 個核心行業
- **種子來源**：公開論壇（IndieHackers / Reddit / PTT 創業板）、產業報告、FirstDollar persona 訪談
- **種子品質**：每個 Seed 痛點必須完整填寫四個結構化欄位（誰 x 情境 x 現行解法 x 不滿的點）
- **空狀態處理**：未被覆蓋的行業顯示 "這個行業還在等第一位貢獻者" + CTA
- **成長目標**：Private Beta 3 個月內從 200 Seed 成長至 500+ 條（含 Community 層級）

---

## [EXCEPTION TO GLOBAL RULES]

- **treemap 視覺化使用全寬佈局**：不受 Grid 最大寬度限制，以提供最佳視覺效果
- **modal 內 CTA 直接導向外部功能（Pain Collector）**：跨功能導航，非頁面內操作
- **trending bar 水平捲動**：違反一般垂直捲動慣例，但符合「快速瀏覽」的 UX 目標
- **禁止任何形式的排名或分數顯示**：即使 Global Design System 有排行元件，本頁面一律禁用（品牌基因 D-001）

---

## [ACCEPTANCE CRITERIA]

- [ ] 所有 6 個 Section 功能正常
- [ ] 搜尋 + 行業篩選 + tier 篩選可正常運作並即時更新結果
- [ ] Treemap 點擊行業可鑽入，breadcrumb 可返回
- [ ] Pain cluster 卡片點擊可開啟 detail modal
- [ ] Modal 內完整結構化痛點正確顯示（誰 x 情境 x 現行解法 x 不滿的點）
- [ ] Modal 內 CTA 正確導向 /collector
- [ ] Contribute panel 正確顯示隱私對比（公開 vs 私密）
- [ ] 貢獻流程：預覽 → 確認 → 完成 → 面板狀態更新
- [ ] 撤回貢獻功能正常
- [ ] Trending bar 水平捲動正常，chip 點擊套用搜尋
- [ ] 未註冊使用者可瀏覽前 10 條，超出後出現 soft gate
- [ ] 所有狀態已實作（default / hover / loading / error / empty）
- [ ] RWD 三個斷點行為正確（Desktop / Tablet / Mobile）
- [ ] Mobile 下 treemap 降級為行業列表
- [ ] URL 狀態管理正確（篩選、行業選擇、modal 開啟皆可透過 URL 還原）
- [ ] 零排名、零分數、零 leaderboard（品牌基因檢查）
- [ ] 驗證層級僅顯示事實陳述，無品質暗示
- [ ] 匿名化規則頁面可存取
- [ ] 冷啟動 200 Seed 痛點正確顯示
- [ ] 頁面首次載入 < 3 秒（含 treemap 渲染）
- [ ] 符合 Design System 視覺規範（除上述例外）
