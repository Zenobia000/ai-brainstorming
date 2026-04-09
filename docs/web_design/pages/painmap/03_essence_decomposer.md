# Page-Level Prompt: Essence Decomposer (問題本質拆解)

> PainMap 核心分析工作區。承接 Pain Collector 產出的結構化痛點卡片，
> 透過四個物理量檢驗 + affinity clustering，將散亂痛點收斂為 3-5 個問題主題，
> 每個主題產出一句話問題本質 + 缺口分析 + 今天的一個行動。

---

## [PAGE META]

- **page_name**: Essence Decomposer (問題本質拆解)
- **route_path**: `/decompose`
- **page_type**: analysis (interactive workspace)
- **primary_goal**: 用四個物理量檢驗痛點卡片，並將散亂痛點 cluster 成 3-5 個問題主題，讓使用者看見散點背後的結構
- **secondary_goal**: 為每個問題主題產出一句話問題本質與缺口行動建議，銜接下游 GTM 策略設計
- **target_users**:
  - 主要：已完成 Pain Collector、持有結構化痛點卡片的使用者
  - 次要：從痛點圖譜匯入痛點條目進行深度分析的使用者
- **entry_point**: Pain Collector 完成頁「繼續到本質拆解 ->」按鈕 / 側邊導航列
- **expected_time_on_page**: 10-25 分鐘（深度分析工作區，非快速瀏覽）

---

## [STRUCTURE: SECTIONS]

1. **pain_cards_workspace**
   - section_type: kanban_workspace
   - section_purpose: 以卡片形式呈現所有痛點，支援拖拽分群，讓使用者手動或 AI 輔助將散亂痛點 cluster 成 3-5 個問題主題

2. **physical_quantities_validator**
   - section_type: analysis_panel
   - section_purpose: 針對每張痛點卡片或問題主題，檢驗四個物理量（具體的人 / 付費的痛 / 手動交付物 / 收錢管道）的有無狀態，產出「發現 -> 缺什麼 -> 今天做哪一件」

3. **problem_essence_statement**
   - section_type: editable_output
   - section_purpose: 為每個問題主題產出 AI 生成的一句話問題本質，使用者可直接編輯修改

4. **gap_analysis_panel**
   - section_type: action_panel
   - section_purpose: 匯總每個主題缺失的物理量，給出具體補缺行動建議：「你還缺___，今天的一個行動是___」

5. **theme_summary**
   - section_type: overview_dashboard
   - section_purpose: 總覽 3-5 個問題主題的物理量完成狀態，用簡單圖示（有/缺/不確定）呈現全局

6. **navigation_bar**
   - section_type: navigation
   - section_purpose: 提供前後頁導航（返回採集器 / 繼續到 GTM 策略）與儲存匯出功能

---

## [SECTION COMPONENT SPEC]

### Section: pain_cards_workspace

- **layout**: 全寬多欄 Kanban 佈局。左側為「未分類」卡片池，右側為 3-5 個可命名的主題泳道（column）
- **elements**:
  - uncategorized_pool: CardPool / required / 從 Pain Collector 匯入的所有痛點卡片，預設置於此
  - theme_columns: ThemeColumn[] / required / 3-5 個可拖拽目標泳道，每個泳道有可編輯標題
  - pain_card: DraggableCard / required / 每張卡片顯示：痛點摘要（1-2 句）、來源標籤（留言/對話/經驗）、JTBD 格式預覽
  - add_theme_btn: Button Secondary / required / 「+ 新增主題」（上限 5 個）
  - ai_cluster_btn: Button Primary / optional / 「AI 自動分群」— 觸發 AI affinity clustering 建議
  - merge_split_controls: IconButton[] / optional / 合併兩個主題 / 拆分一個主題
- **states**:
  - default: 卡片池滿、主題泳道空，提示「拖拽卡片到主題欄，或點擊 AI 自動分群」
  - dragging: 卡片半透明 + 目標泳道高亮邊框
  - loading: AI 分群進行中 — 卡片池顯示 shimmer 動畫，泳道漸次出現
  - error: AI 分群失敗 — toast 提示「自動分群暫時無法使用，請手動拖拽」
  - empty: 無痛點卡片 — 顯示「你還沒有痛點卡片。返回採集器開始」+ CTA 按鈕
  - complete: 所有卡片已分入主題 — 未分類池收合，顯示「所有痛點已分類」
- **copy_constraints**: 痛點卡片摘要最多 60 字；主題泳道標題最多 20 字

### Section: physical_quantities_validator

- **layout**: 右側面板（點擊痛點卡片或主題時滑入），2 欄佈局：左欄四個物理量指標，右欄 AI 分析
- **elements**:
  - quantity_1_specific_person: StatusIndicator / required / 「具體的人」— 三態：有(checkmark) / 缺(cross) / 不確定(question mark)
  - quantity_2_paying_pain: StatusIndicator / required / 「付費的痛」— 三態同上
  - quantity_3_manual_deliverable: StatusIndicator / required / 「手動交付物」— 三態同上
  - quantity_4_payment_rail: StatusIndicator / required / 「收錢管道」— 三態同上
  - ai_finding: TextBlock / required / 「發現」— AI 對該物理量的判斷依據（1-2 句）
  - ai_missing_gap: TextBlock / required / 「缺什麼」— 明確指出缺失（1 句）
  - ai_today_action: TextBlock / required / 「今天做哪一件」— 具體可執行的下一步（1 句）
  - status_override: ToggleGroup / required / 使用者可手動覆蓋 AI 判斷的三態
  - evidence_note: TextArea / optional / 使用者補充證據或備註
- **states**:
  - default: 未選擇卡片時面板收合，顯示提示「點擊痛點卡片或主題查看物理量分析」
  - analyzing: AI 正在分析 — 四個指標位置顯示 pulse 動畫
  - complete: 四個物理量皆已判定 — 面板頂部顯示「已分析」標籤
  - user_modified: 使用者覆蓋了 AI 判斷 — 該指標旁顯示「手動」小標籤
  - error: AI 分析失敗 — 指標區顯示「無法自動分析，請手動標記」
- **copy_constraints**: AI 發現最多 80 字；缺口最多 40 字；行動建議最多 60 字
- **HARD CONSTRAINT**: 禁止顯示任何數字分數、百分比、星等、等級。物理量只有三態：有 / 缺 / 不確定

### Section: problem_essence_statement

- **layout**: 卡片式，每個問題主題一張。嵌入在主題泳道下方或作為展開區域
- **elements**:
  - essence_template: EditableText / required / AI 生成的一句話問題本質，格式：「[具體的人] 在 [情境] 時，因為 [現行解法的不足]，需要 [期望結果]」
  - regenerate_btn: IconButton / optional / 「重新生成」— 要求 AI 換一個角度重寫
  - edit_indicator: Badge / optional / 顯示「AI 生成」或「已編輯」
  - source_cards: ChipList / required / 列出構成該主題的痛點卡片標籤（可點擊跳回卡片）
- **states**:
  - default: 顯示 AI 生成的一句話，可直接行內編輯
  - generating: AI 正在生成 — 文字區顯示打字機動畫
  - edited: 使用者已修改 — Badge 變為「已編輯」
  - empty: 主題下無卡片 — 顯示「將痛點卡片拖入此主題以生成問題本質」
  - error: AI 生成失敗 — 顯示空白模板供手動填寫
- **copy_constraints**: 問題本質一句話最多 100 字

### Section: gap_analysis_panel

- **layout**: 底部抽屜或全寬區塊，按主題分組的行動建議列表
- **elements**:
  - theme_gap_card: GapCard[] / required / 每個主題一張，內含：
    - theme_name: H3 / required / 主題名稱
    - missing_quantities: ChipList / required / 列出缺失的物理量名稱（紅色 chip）
    - unclear_quantities: ChipList / optional / 列出不確定的物理量名稱（黃色 chip）
    - action_prompt: TextBlock / required / 格式：「你還缺 [物理量名稱]，今天的一個行動是 [具體行動]」
    - action_checkbox: Checkbox / optional / 使用者可勾選「已完成」
  - refresh_analysis_btn: Button Tertiary / optional / 「重新分析缺口」
- **states**:
  - default: 按缺口數量由多到少排列主題
  - all_complete: 所有主題四個物理量皆「有」— 顯示「所有物理量就位，可以前進到 GTM 策略了」
  - loading: 重新分析中 — skeleton cards
  - empty: 尚未建立任何主題 — 顯示「先在上方將痛點分群為主題」
- **copy_constraints**: 行動建議最多 80 字
- **HARD CONSTRAINT**: 禁止顯示「完成度 60%」或任何百分比/分數。只用文字和圖示描述缺口

### Section: theme_summary

- **layout**: 全寬水平列表或網格，每個主題一個摘要卡片
- **elements**:
  - theme_overview_card: SummaryCard[] / required / 每個主題一張，內含：
    - theme_title: H3 / required / 主題名稱
    - card_count: Caption / required / 「N 個痛點」
    - quantity_icons: IconRow / required / 四個圖示橫排：checkmark（有）/ cross（缺）/ question（不確定），對應四個物理量
    - essence_preview: Body SM / required / 一句話問題本質的截斷預覽
    - readiness_label: Badge / required / 文字標籤：「可前進」（四個皆有）/「有缺口」（有缺失）/「需釐清」（有不確定）
  - export_btn: Button Secondary / required / 「匯出分析結果」（JSON / PDF / Markdown）
  - save_btn: Button Secondary / required / 「儲存進度」
- **states**:
  - default: 顯示所有主題摘要，按建立順序排列
  - loading: skeleton cards
  - empty: 無主題 — 隱藏此區塊
  - hover: 卡片輕微上浮，顯示「點擊查看詳細分析」tooltip
- **copy_constraints**: 問題本質預覽最多 50 字（超出截斷加省略號）
- **HARD CONSTRAINT**: readiness_label 只使用文字標籤，禁止數字、百分比、進度條

### Section: navigation_bar

- **layout**: 固定底部工具列，左右對齊
- **elements**:
  - back_btn: Button Ghost / required / 「<- 返回採集器」/ 導向 Pain Collector 頁
  - forward_btn: Button Primary / required / 「繼續到 GTM 策略 ->」/ 導向 Disruption Mapper 頁
  - save_draft_btn: Button Secondary / required / 「儲存草稿」/ 自動儲存 + 手動觸發
  - export_btn: Button Tertiary / optional / 「匯出」/ 下拉選單：JSON / PDF / Markdown
  - autosave_indicator: Caption / required / 「已自動儲存 HH:MM」或「儲存中...」
- **states**:
  - default: 兩端按鈕可用，自動儲存指示器顯示最近時間
  - saving: 自動儲存指示器顯示 spinner + 「儲存中...」
  - unsaved_changes: 儲存按鈕高亮提示
  - forward_disabled: 尚未建立任何主題時，「繼續到 GTM 策略」按鈕 disabled + tooltip「請先建立至少一個問題主題」
- **copy_constraints**: 按鈕文案最多 12 字

---

## [INTERACTION & STATE FLOW]

### 主要互動流程

1. 頁面載入 -> 從 Pain Collector 取得該使用者的痛點卡片列表 -> 卡片填入「未分類」池
2. 使用者拖拽卡片到主題泳道（或點擊「AI 自動分群」由 AI 建議初始分群）
3. 使用者可手動調整分群：拖拽卡片移動、新增/刪除/合併/拆分主題
4. 點擊任一痛點卡片或主題 -> 右側滑出物理量檢驗面板 -> AI 自動分析四個物理量
5. AI 輸出每個物理量的「發現 -> 缺什麼 -> 今天做哪一件」-> 使用者可覆蓋判斷、補充證據
6. 每個主題下方自動生成一句話問題本質 -> 使用者可行內編輯
7. 底部缺口分析面板匯總所有主題的缺失物理量與行動建議
8. 使用者確認分析結果 -> 點擊「繼續到 GTM 策略」前進；或「返回採集器」補充更多痛點
9. 全程自動儲存（每 30 秒 + 每次拖拽/編輯後）

### 回溯機制

- 使用者可隨時點擊「返回採集器」新增更多痛點卡片，返回後新卡片自動進入「未分類」池
- 已建立的主題和分群不會因回溯而丟失
- 物理量判斷可隨時手動覆蓋，不鎖定 AI 結果

### RWD 行為差異

| 斷點 | 佈局 | 差異說明 |
|------|------|---------|
| Desktop (>1280px) | 全寬 Kanban + 右側物理量面板 | 完整拖拽體驗，面板與工作區並排 |
| Tablet (768-1280px) | Kanban 橫向可捲動 + 物理量面板改為底部半屏抽屜 | 主題泳道最多同時顯示 3 欄 |
| Mobile (<768px) | 改為垂直堆疊列表 + 卡片點擊進入主題 + 物理量全屏覆蓋 | 拖拽改為「長按 -> 選擇目標主題」操作；Kanban 改為主題 Tab 切換 |

### 資料更新策略

- 痛點卡片：頁面載入時從 Pain Collector 同步，之後不自動更新（避免分析中資料變動）
- 物理量分析：使用者觸發時即時計算，不自動重新分析
- 自動儲存：每 30 秒 + 每次有意義的操作（拖拽、編輯、狀態變更）後觸發
- 問題本質生成：主題下卡片變更後 2 秒 debounce 自動重新生成（使用者已手動編輯的除外）

---

## [DATA & API]

- **uses_api**: true
- **endpoints**:
  - GET `/api/painmap/cards?session_id={id}` -- 取得該使用者的所有痛點卡片（來自 Pain Collector）
  - GET `/api/painmap/decompose/session/{id}` -- 取得已儲存的拆解進度（主題、分群、物理量狀態）
  - POST `/api/painmap/decompose/cluster` -- AI affinity clustering（輸入：卡片列表；輸出：建議分群）
  - POST `/api/painmap/decompose/validate` -- AI 物理量檢驗（輸入：卡片/主題內容；輸出：四個物理量判定 + 發現/缺口/行動）
  - POST `/api/painmap/decompose/essence` -- AI 問題本質生成（輸入：主題下的卡片群；輸出：一句話問題本質）
  - PUT `/api/painmap/decompose/session/{id}` -- 儲存/更新拆解進度（主題、分群、手動覆蓋、編輯內容）
  - POST `/api/painmap/decompose/export` -- 匯出分析結果（輸入：session_id + 格式；輸出：檔案 URL）
- **error_cases**:
  - 網路錯誤：顯示 toast「網路連線中斷，已儲存的進度安全。恢復連線後將自動同步」；離線期間禁用 AI 功能，允許手動拖拽和編輯
  - API 錯誤：AI 分析失敗時降級為手動模式 — 「AI 暫時無法分析，你可以手動標記物理量狀態」
  - 權限不足：未登入使用者導向登入頁；Free 方案超出限額顯示升級提示
  - 資料不存在：session_id 無效時導向 Pain Collector 重新開始

---

## [EXCEPTION TO GLOBAL RULES]

- **全寬 Kanban 佈局**：此頁面的 pain_cards_workspace 區塊使用全寬佈局，不受 Grid 最大寬度限制，以提供足夠的拖拽操作空間
- **固定底部導航列**：navigation_bar 固定於視窗底部（position: sticky），不隨頁面捲動消失，確保使用者隨時可存檔或導航
- **右側面板覆蓋**：physical_quantities_validator 在 Desktop 使用右側滑入面板，可能覆蓋部分 Kanban 區域，這是有意的設計取捨

---

## [ACCEPTANCE CRITERIA]

- [ ] 所有 6 個 Section 功能正常
- [ ] 痛點卡片可從 Pain Collector 正確載入並顯示於未分類池
- [ ] 拖拽分群功能正常運作（Desktop: 原生拖拽；Mobile: 長按選擇目標）
- [ ] AI 自動分群可在 90 秒內完成（10 張卡片以內）
- [ ] 四個物理量檢驗以三態圖示（有/缺/不確定）呈現，無任何數字分數
- [ ] AI 輸出皆遵循「發現 -> 缺什麼 -> 今天做哪一件」結構
- [ ] 問題本質一句話可行內編輯，編輯後標記為「已編輯」
- [ ] 使用者可手動覆蓋 AI 的物理量判斷
- [ ] 缺口分析面板正確匯總缺失物理量並提供行動建議
- [ ] 主題摘要使用文字標籤（可前進/有缺口/需釐清），無百分比或進度條
- [ ] 「返回採集器」可正常回溯且不丟失已建立的主題和分群
- [ ] 自動儲存每 30 秒觸發一次 + 每次有意義操作後觸發
- [ ] Loading / Error / Empty 三態完備（所有 6 個 Section）
- [ ] RWD 三個斷點行為正確
- [ ] 匯出功能支援 JSON / PDF / Markdown 三種格式
- [ ] 全頁面零分數：QA lint 確認無任何 0-100 / 星等 / A-F / 百分比渲染
- [ ] 符合 Design System 視覺規範
- [ ] AI 分析回應時間 < 15 秒（單張卡片物理量檢驗）
