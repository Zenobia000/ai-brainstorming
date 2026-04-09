# Page-Level Prompt: Pain Collector (痛點採集器)

> 對應 PainMap PRD Epic 1（US-001 / US-002 / US-003）。
> 核心原則：對話勝過表單、匯入你已有的東西、90 秒內完成結構化。

---

## [PAGE META]

- **page_name**: Pain Collector (痛點採集器)
- **route_path**: `/collector`
- **page_type**: form (interactive/dialogue-based)
- **primary_goal**: 匯入原始、非結構化的文字/材料，在 90 秒內提取 N 個結構化痛點
- **secondary_goal**: 透過蘇格拉底式對話，將使用者的隱性知識外化為可操作的問題定義
- **target_users**:
  - 主要：手上有散亂痛點素材的使用者（LINE 截圖、留言、筆記、對話紀錄）
  - 次要：有行業經驗但尚未整理成結構化問題的領域專家
- **entry_point**: Dashboard CTA / 側邊導航「痛點採集」/ Pain Atlas 頁面「自己匯入」按鈕
- **expected_time_on_page**: 3-10 分鐘（匯入 + 對話引導 + 檢視結構化輸出）

---

## [STRUCTURE: SECTIONS]

1. **import_zone**
   - section_type: form_dropzone
   - section_purpose: 提供低門檻的多模式匯入入口 —「把你現有的材料丟進來」

2. **socratic_dialogue_panel**
   - section_type: chat_interface
   - section_purpose: 當輸入模糊或需要外化隱性知識時，AI 以蘇格拉底式提問引導使用者釐清痛點

3. **processing_indicator**
   - section_type: progress_stepper
   - section_purpose: AI 處理期間，以步驟動畫展示結構化進度（非空轉 spinner），維持使用者信心

4. **structured_output_cards**
   - section_type: editable_card_grid
   - section_purpose: 以「誰 x 情境 x 現行解法 x 不滿的點」格式呈現結構化痛點，使用者可編輯、合併、拆分、刪除

5. **action_bar**
   - section_type: sticky_bottom_bar
   - section_purpose: 顯示已提取痛點數量，提供「繼續到問題拆解」CTA 及儲存/匯出操作

6. **help_sidebar**
   - section_type: collapsible_sidebar
   - section_purpose: 提供輸入指引、範例素材、「不確定要丟什麼？」的引導式提示

---

## [SECTION COMPONENT SPEC]

### Section: import_zone

- **layout**: 全寬單欄，垂直置中，大面積拖放區
- **elements**:
  - dropzone_area: DropZone / required / 大面積虛線框，主文案「把你現有的材料丟進來」，副文案「貼文字、上傳檔案、或拍照截圖」
  - paste_tab: TabButton / required / icon: ClipboardPaste / 「貼上文字」— 開啟多行文字輸入框
  - upload_tab: TabButton / required / icon: Upload / 「上傳檔案」— 支援 CSV、TXT、PNG、JPG
  - photo_tab: TabButton / required / icon: Camera / 「拍照/截圖」— 觸發裝置相機或螢幕截圖（mobile 優先）
  - text_input: Textarea / conditional / 當選擇「貼上文字」模式時顯示，placeholder: 「把 LINE 對話、留言、筆記直接貼這裡...」
  - file_preview: FilePreviewCard / conditional / 上傳後顯示檔名、檔案大小、移除按鈕
  - ocr_preview: ImagePreviewCard / conditional / 圖片上傳後顯示縮圖 + OCR 辨識文字預覽
  - submit_btn: Button Primary / required / 「開始提取痛點」
- **states**:
  - default: 顯示拖放區 + 三個輸入模式 tab，submit 按鈕 disabled
  - hover: 拖放區邊框變為主色調，背景輕微加深
  - dragover: 拖放區邊框實線、背景高亮、icon 放大動畫
  - has_content: submit 按鈕 enabled，顯示已輸入內容的預覽摘要
  - loading: 檔案上傳中顯示進度條
  - error: 檔案格式不支援 / 檔案過大 — 紅色提示 + 支援格式說明
  - empty: 初始狀態（同 default）
- **copy_constraints**: 主文案最多 15 字；副文案最多 25 字；placeholder 最多 30 字

### Section: socratic_dialogue_panel

- **layout**: 主內容區右側或下方（依 RWD），chat bubble 式介面
- **elements**:
  - dialogue_container: ChatContainer / required / 顯示 AI 提問與使用者回覆的對話串
  - ai_message: ChatBubble (AI) / required / AI 提問，左對齊，帶 PainMap icon
  - user_message: ChatBubble (User) / required / 使用者回覆，右對齊
  - reply_input: TextInput / required / placeholder: 「回覆 AI 的問題...」
  - send_btn: IconButton / required / icon: Send
  - skip_btn: TextButton / optional / 「跳過這題」— 跳到下一個引導問題
  - end_dialogue_btn: TextButton / optional / 「我說完了，開始結構化」
- **states**:
  - default: 隱藏（僅在 AI 判斷輸入需要進一步釐清時展開）
  - active: 顯示對話介面，AI 提出第一個引導問題
  - typing: AI 回應中，顯示「...」打字動畫
  - complete: 對話結束，面板收合，顯示「已完成 N 輪對話」摘要
  - error: AI 回應失敗 —「暫時無法回應，請稍後再試」+ 重試按鈕
- **copy_constraints**: AI 單則提問最多 80 字；引導問題範例：「你提到客戶抱怨___，他們當時的情境是？」「他們目前怎麼處理這個問題？」「如果不解決，最嚴重會怎樣？」

### Section: processing_indicator

- **layout**: 全寬，居中顯示，覆蓋於主內容區上方（overlay 或 inline）
- **elements**:
  - step_progress: StepIndicator / required / 三階段步驟：「讀取材料...」→「識別痛點信號...」→「結構化中...」
  - step_icon: AnimatedIcon / required / 每階段對應不同動畫 icon（非 spinner）
  - progress_bar: LinearProgress / required / 整體進度百分比
  - elapsed_time: Caption / optional / 已經過時間顯示（僅超過 30 秒時出現）
  - cancel_btn: TextButton / optional / 「取消處理」
- **states**:
  - step_1: 「讀取材料...」— 文件 icon 展開動畫
  - step_2: 「識別痛點信號...」— 搜尋/標記 icon 動畫
  - step_3: 「結構化中...」— 卡片排列 icon 動畫
  - complete: 進度條填滿，顯示「完成！找到 N 個痛點」後自動消失
  - timeout: 超過 90 秒未完成 —「處理時間較長，請稍候」提示
  - error: 處理失敗 —「結構化失敗，請重新嘗試」+ 重試按鈕
- **copy_constraints**: 每個步驟文案最多 10 字；完成文案最多 15 字

### Section: structured_output_cards

- **layout**: 多欄卡片網格（Desktop 2-3 欄 / Tablet 2 欄 / Mobile 1 欄）
- **elements**:
  - section_title: H2 / required / 「提取到的痛點」
  - pain_count: Badge / required / 顯示痛點總數
  - pain_card: PainCard[] / required / 每張卡片包含：
    - who_field: EditableText / required / 「誰」— 痛點的主角描述
    - situation_field: EditableText / required / 「情境」— 在什麼情況下
    - current_solution_field: EditableText / required / 「現行解法」— 目前怎麼處理
    - dissatisfaction_field: EditableText / required / 「不滿的點」— 為什麼不滿意
    - source_tag: Tag / optional / 標記來源（文字輸入 / CSV / OCR / 對話）
    - edit_btn: IconButton / required / icon: Pencil / 進入編輯模式
    - delete_btn: IconButton / required / icon: Trash / 刪除此痛點
    - merge_btn: IconButton / optional / icon: Merge / 與另一張卡片合併
    - split_btn: IconButton / optional / icon: Split / 拆分為多張卡片
  - add_card_btn: Button Tertiary / required / icon: Plus / 「手動新增痛點」
  - sort_dropdown: Dropdown / optional / 排序方式（依來源 / 依建立時間）
- **states**:
  - default: 顯示所有提取到的痛點卡片，唯讀模式
  - editing: 單張卡片進入編輯模式，欄位可直接修改，顯示儲存/取消按鈕
  - merging: 使用者選取兩張卡片進行合併，顯示合併預覽
  - splitting: 單張卡片展開為拆分介面，使用者可調整拆分方式
  - loading: Skeleton cards（首次結構化完成前）
  - empty: 「尚未提取到痛點。請先在上方匯入素材。」
  - error: 卡片載入失敗 — 錯誤訊息 + 重試按鈕
- **copy_constraints**: 每個欄位最多 100 字；「誰」欄位最多 30 字；source tag 最多 10 字

### Section: action_bar

- **layout**: 底部固定（sticky bottom），全寬，左右分布
- **elements**:
  - pain_count_display: StatBadge / required / 「已提取 N 個痛點」
  - save_draft_btn: Button Secondary / required / icon: Save / 「儲存草稿」
  - export_btn: Button Tertiary / optional / icon: Download / 「匯出」— 支援 CSV / JSON
  - proceed_btn: Button Primary / required / 「繼續到問題拆解 →」/ 導向 Essence Decomposer
- **states**:
  - default: 顯示痛點數量 + 所有按鈕
  - no_pains: proceed_btn disabled，顯示 tooltip「請先提取至少一個痛點」
  - saving: save_draft_btn 顯示 loading 狀態
  - saved: save_draft_btn 短暫顯示 checkmark + 「已儲存」
  - error: 儲存失敗 — toast 通知「儲存失敗，請重試」
- **copy_constraints**: 痛點計數最多 15 字；CTA 按鈕最多 12 字

### Section: help_sidebar

- **layout**: 右側可收合面板（Desktop 預設收合 / 點擊展開，Mobile 為底部抽屜）
- **elements**:
  - toggle_btn: IconButton / required / icon: HelpCircle / 展開/收合側邊欄
  - sidebar_title: H3 / required / 「匯入指引」
  - tips_section: ContentBlock / required / 「什麼素材適合丟進來？」— 條列式說明
    - tip_item_1: ListItem / required / 「LINE/Discord/IG 對話截圖」
    - tip_item_2: ListItem / required / 「YouTube/社群留言的複製貼上」
    - tip_item_3: ListItem / required / 「客服紀錄、問卷回覆的 CSV」
    - tip_item_4: ListItem / required / 「你自己的筆記、觀察紀錄」
  - examples_section: ContentBlock / required / 「範例輸入」— 展示 2-3 個實際輸入範例和對應輸出
  - guided_prompt_btn: Button Secondary / required / 「不確定要丟什麼？」— 點擊後啟動蘇格拉底對話引導
  - faq_section: AccordionList / optional / 常見問題（3-5 題）
- **states**:
  - collapsed: 僅顯示 toggle_btn（HelpCircle icon）
  - expanded: 完整顯示所有內容
  - loading: 無（靜態內容）
  - error: 無（靜態內容）
- **copy_constraints**: 每個 tip 最多 20 字；範例輸入最多 200 字；FAQ 答案最多 100 字

---

## [INTERACTION & STATE FLOW]

### 主要互動流程

1. **頁面載入** → 顯示空白 import_zone + help_sidebar 收合 + action_bar（proceed disabled）
2. **使用者選擇輸入模式** → 切換 tab（貼上文字 / 上傳檔案 / 拍照截圖）→ 對應輸入區域展開
3. **使用者提交素材** → 點擊「開始提取痛點」→ processing_indicator 啟動三階段動畫
4. **AI 判斷是否需要對話** → 若輸入模糊或不完整 → socratic_dialogue_panel 展開，AI 提出引導問題
5. **蘇格拉底對話**（conditional）→ 使用者回覆 → AI 追問 → 每輪產出結構化痛點草稿 → 使用者可隨時結束
6. **結構化完成** → processing_indicator 消失 → structured_output_cards 顯示提取到的痛點
7. **使用者編輯痛點** → 點擊卡片進入編輯模式 → 修改/合併/拆分/刪除 → 即時更新 action_bar 計數
8. **使用者繼續流程** → 點擊「繼續到問題拆解 →」→ 導航至 `/decomposer`（帶痛點資料）
9. **使用者儲存草稿**（optional）→ 點擊「儲存草稿」→ 資料存入使用者帳戶 → 可稍後返回繼續

### RWD 行為差異

| 斷點 | 佈局 | 差異說明 |
|------|------|---------|
| Desktop (>1280px) | import_zone 全寬 + 右側 help_sidebar 可展開；output_cards 3 欄網格；dialogue_panel 右側面板 | 完整體驗，所有功能同時可見 |
| Tablet (768-1280px) | import_zone 全寬；output_cards 2 欄網格；dialogue_panel 下方展開；help_sidebar 收合為 icon | dialogue_panel 從右側改為下方堆疊 |
| Mobile (<768px) | 所有區塊單欄堆疊；output_cards 1 欄；dialogue_panel 全螢幕 overlay；help_sidebar 底部抽屜 | photo_tab 優先顯示（mobile 拍照優勢）；action_bar 簡化為 proceed_btn + 更多選單 |

### 資料更新策略

- 痛點卡片：使用者編輯後即時本地更新，debounce 300ms 後同步至後端
- 對話串：每則訊息即時推送（SSE / WebSocket）
- 草稿自動儲存：每 60 秒自動儲存一次（若有變更）
- 處理進度：Server-Sent Events 即時推送步驟狀態

---

## [DATA & API]

- **uses_api**: true
- **endpoints**:
  - POST `/api/collector/extract` — 提交原始素材，啟動痛點提取（回傳 job_id）
  - GET `/api/collector/jobs/{job_id}/status` — 查詢提取進度（SSE endpoint）
  - GET `/api/collector/jobs/{job_id}/results` — 取得結構化痛點結果
  - POST `/api/collector/dialogue/start` — 啟動蘇格拉底對話 session
  - POST `/api/collector/dialogue/{session_id}/reply` — 送出使用者對話回覆（SSE 回傳 AI 回應）
  - POST `/api/collector/dialogue/{session_id}/end` — 結束對話，取得最終結構化結果
  - PUT `/api/collector/pains/{pain_id}` — 更新單個痛點卡片
  - DELETE `/api/collector/pains/{pain_id}` — 刪除痛點
  - POST `/api/collector/pains/merge` — 合併多個痛點
  - POST `/api/collector/pains/{pain_id}/split` — 拆分痛點
  - POST `/api/collector/pains` — 手動新增痛點
  - POST `/api/collector/draft/save` — 儲存草稿
  - GET `/api/collector/draft/{draft_id}` — 載入草稿
  - POST `/api/collector/export` — 匯出痛點（CSV / JSON）
  - POST `/api/upload/file` — 上傳檔案（CSV / TXT / 圖片）
  - POST `/api/upload/ocr` — 圖片 OCR 辨識
- **error_cases**:
  - 網路錯誤：toast 提示「網路連線異常」+ 重試按鈕；草稿保留在 localStorage
  - API 錯誤：友善錯誤訊息 + 重試按鈕；不洩露技術細節
  - 權限不足：未登入導向登入頁；Free 用戶超過 3 個問題/月限額 → 顯示升級提示
  - OCR 失敗：「圖片辨識失敗，請嘗試更清晰的圖片或改用文字貼上」
  - 處理逾時（>90s）：「處理時間較長，請稍候。若持續無回應，請減少素材量重試」
  - 檔案格式不支援：「不支援此檔案格式。支援格式：CSV、TXT、PNG、JPG」
  - 檔案過大（>10MB）：「檔案超過 10MB 上限，請壓縮後重試」

---

## [EXCEPTION TO GLOBAL RULES]

- **processing_indicator 使用自訂動畫**：不使用 Global System 的標準 loading spinner，改用三階段步驟動畫以傳達「AI 正在做有意義的工作」而非「系統在空轉」。
- **socratic_dialogue_panel 為條件式顯示**：不同於一般頁面的固定 Section 結構，此面板僅在 AI 判斷需要進一步釐清時動態展開，屬於 conditional section。
- **禁止任何形式的分數/評分顯示**：此頁面及所有下游頁面嚴格遵守 PainMap 品牌紀律 — 不顯示 idea score、可行性分數、星等、A-F 評級。所有輸出僅為結構化事實描述。

---

## [ACCEPTANCE CRITERIA]

- [ ] 所有 6 個 Section 功能正常且可互動
- [ ] 三種輸入模式（貼上文字 / 上傳檔案 / 拍照截圖）皆可正常運作
- [ ] CSV 上傳可正確解析並提取痛點
- [ ] 圖片 OCR（LINE 截圖）可辨識中文文字並提取痛點
- [ ] 10 條以內素材的結構化處理在 90 秒內完成
- [ ] processing_indicator 顯示三階段步驟動畫（非 loading spinner）
- [ ] 蘇格拉底對話可正常進行，每輪產出結構化痛點草稿
- [ ] 結構化輸出卡片格式正確：誰 x 情境 x 現行解法 x 不滿的點
- [ ] 痛點卡片支援編輯、合併、拆分、刪除操作
- [ ] 手動新增痛點功能正常
- [ ] 「繼續到問題拆解」CTA 可正確帶資料導航至 Essence Decomposer
- [ ] 儲存草稿功能正常，可稍後載入繼續
- [ ] 匯出功能支援 CSV 和 JSON 格式
- [ ] Loading / Error / Empty 三態完備（所有 Section）
- [ ] RWD 三個斷點行為正確（Desktop / Tablet / Mobile）
- [ ] 頁面任何位置皆無出現分數、評分、星等、排名等元素
- [ ] 所有 AI 輸出結構遵守「發現 → 缺什麼 → 今天做哪一件」格式
- [ ] 符合 Design System 視覺規範
- [ ] 自動儲存草稿功能正常（每 60 秒）
- [ ] 無障礙：所有互動元素可鍵盤操作，圖片有 alt text
