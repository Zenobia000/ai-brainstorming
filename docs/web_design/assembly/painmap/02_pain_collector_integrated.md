# Assembly Prompt: Pain Collector (痛點採集器) — Lovable-Ready

> 此檔案為可直接貼入 Lovable 的完整 Prompt。
> 組合來源：`global/painmap_brand_system.md` (壓縮版) + `pages/painmap/02_pain_collector.md` (完整規格)。
> 對應 PainMap PRD Epic 1（US-001 / US-002 / US-003）。

---

## === GLOBAL PROJECT GUIDELINE (DO NOT OVERRIDE) ===

你是「PainMap 題眼」的資深產品架構師與全端開發架構師，負責維護整個專案的設計一致性。

### 品牌核心

- **品牌特質**：結構化 (Structured) / 賦權感 (Empowering) / 沉穩 (Calm)
- **語氣**：沉穩、賦權、結構化 — 絕不焦慮催促、絕不遊戲化激勵
- **語言**：繁體中文 (zh-Hant) 為主，保留公認技術術語英文（GTM、PMF、Jobs-to-be-done）
- **技術棧**：React 18 + TypeScript + Tailwind CSS / Zustand + React Query / React Hook Form + Zod / Supabase + Vercel

### 色彩系統

| Token | 色值 | Tailwind Class | 用途 |
|-------|------|----------------|------|
| Primary | #1E3A5F | `bg-[#1E3A5F]` | 主要品牌色，結構與深度 |
| Primary Hover | #162D4A | `hover:bg-[#162D4A]` | 主色 hover |
| Primary Light | #E8EEF5 | `bg-[#E8EEF5]` | 主色淡化背景 |
| Secondary | #2D7D8A | `bg-[#2D7D8A]` | 次要品牌色，引導與互動元素 |
| Secondary Hover | #236269 | `hover:bg-[#236269]` | 次色 hover |
| Accent | #E8913A | `bg-[#E8913A]` | CTA 按鈕，賦權行動 |
| Accent Hover | #D07A2B | `hover:bg-[#D07A2B]` | 強調色 hover |
| Accent Light | #FEF3E2 | `bg-[#FEF3E2]` | 行動提示區背景 |
| Verified | #2D9D78 | `bg-[#2D9D78]` | 已驗證痛點 |
| Verified Light | #E6F5EF | `bg-[#E6F5EF]` | 驗證狀態背景 |
| Caution | #D97706 | `bg-[#D97706]` | 需要補充資訊 |
| Error | #DC2626 | `bg-[#DC2626]` | 系統錯誤（僅限錯誤，不用於痛點強度） |
| BG Page | #F7F8FA | `bg-[#F7F8FA]` | 頁面底色 |
| BG Surface | #FFFFFF | `bg-white` | 卡片/容器底色 |
| BG Muted | #F1F3F5 | `bg-[#F1F3F5]` | 次要區塊背景 |
| Text Primary | #1A2332 | `text-[#1A2332]` | 主要文字 |
| Text Secondary | #5C6B7A | `text-[#5C6B7A]` | 次要/說明文字 |
| Text Muted | #8E99A4 | `text-[#8E99A4]` | 輔助文字、時間戳 |
| Border Default | #DFE3E8 | `border-[#DFE3E8]` | 預設邊框 |
| Border Focus | #2D7D8A | `focus:border-[#2D7D8A]` | 聚焦邊框 |

### 字體與排版

| Token | 字級 | 行高 | 字重 | 用途 |
|-------|------|------|------|------|
| H1 | 28px | 1.3 | 700 | 頁面標題 |
| H2 | 22px | 1.3 | 600 | 區塊標題 |
| H3 | 18px | 1.4 | 600 | 小標題 |
| Body LG | 17px | 1.7 | 400 | 痛點描述、長文閱讀 |
| Body MD | 15px | 1.6 | 400 | 標準段落、表單標籤 |
| Body SM | 13px | 1.5 | 400 | 輔助說明、提示 |
| Caption | 12px | 1.4 | 400 | 時間戳、metadata |
| Code | 14px | 1.5 | 400 | 原始文字、結構化欄位 |

- **中文字體**：Noto Sans TC / **英文字體**：Inter / **等寬字體**：JetBrains Mono

### 元件規格

| Token | 值 | 用途 |
|-------|-----|------|
| Radius SM | 4px | Tag、Badge、狀態標籤 |
| Radius MD | 8px | 按鈕、輸入框、小卡片 |
| Radius LG | 12px | 痛點卡片、容器面板 |
| Radius XL | 16px | Modal、大型面板 |
| Shadow SM | 0 1px 3px rgba(30,58,95,0.06) | 卡片預設 |
| Shadow MD | 0 4px 8px rgba(30,58,95,0.08) | 懸浮卡片、Dropdown |
| Shadow LG | 0 12px 24px rgba(30,58,95,0.12) | Modal、大型 Overlay |
| Border | 1px solid #DFE3E8 | 預設邊框 |
| Border Active | 2px solid #2D7D8A | 選中/聚焦邊框 |

### RWD / Grid

| 斷點 | 說明 |
|------|------|
| Mobile | < 768px，1 欄，痛點卡片全寬堆疊 |
| Tablet | 768px – 1200px，2 欄，痛點卡片雙欄 |
| Desktop | > 1200px，12 欄，完整工作區佈局 |

- 最大寬度：1200px / 欄間距：20px / Padding：16px (M) / 24px (T) / 32px (D)

### 絕對禁令 (CRITICAL)

以下元素在任何頁面皆**禁止出現**：
- 分數、星等、A-F 等級、成功率預測
- 排行榜、遊戲化徽章
- 任何引發焦慮的數據分析 UI
- Inline styles（全部用 Tailwind utility class）
- `console.log` 殘留
- 未經 Zod schema 驗證的 AI 回應直接渲染

### 文案紀律

- 使用「問題」「痛點」— 禁用「點子」「idea」「靈感」
- 使用「結構化」「釐清」「驗證」— 禁用「評分」「打分」「排名」
- 按鈕動詞用主動語態：「開始提取」「匯入素材」「儲存草稿」「繼續到問題拆解」
- 錯誤訊息格式：先說發生什麼，再說怎麼修
- 空狀態：引導行動而非顯示空白

### 重要規範

- 本區段定義整個專案的設計系統與風格
- 所有頁面相關需求都必須遵守這裡的規範
- 除非在 EXCEPTION RULES 中明確說明，否則不准違反

---

## === CURRENT TASK: BUILD Pain Collector ===

本次任務：根據上方 Global Guideline，設計並實作「Pain Collector 痛點採集器」。

### [PAGE META]

- **page_name**: Pain Collector (痛點採集器)
- **route_path**: `/collector`
- **page_type**: form (interactive / dialogue-based)
- **primary_goal**: 匯入原始、非結構化的文字/材料，在 90 秒內提取 N 個結構化痛點
- **secondary_goal**: 透過蘇格拉底式對話，將使用者的隱性知識外化為可操作的問題定義
- **target_users**:
  - 主要：手上有散亂痛點素材的使用者（LINE 截圖、留言、筆記、對話紀錄）
  - 次要：有行業經驗但尚未整理成結構化問題的領域專家
- **entry_point**: Dashboard CTA / 側邊導航「痛點採集」/ Pain Atlas 頁面「自己匯入」按鈕
- **expected_time_on_page**: 3–10 分鐘（匯入 + 對話引導 + 檢視結構化輸出）

---

### [STRUCTURE: SECTIONS]

頁面共 6 個 Section（由上至下）：

1. **import_zone** — form_dropzone — 提供低門檻的多模式匯入入口
2. **socratic_dialogue_panel** — chat_interface — AI 蘇格拉底式提問引導釐清痛點（conditional）
3. **processing_indicator** — progress_stepper — AI 處理期間三階段步驟動畫
4. **structured_output_cards** — editable_card_grid — 結構化痛點卡片（誰 x 情境 x 現行解法 x 不滿的點）
5. **action_bar** — sticky_bottom_bar — 底部固定行動區
6. **help_sidebar** — collapsible_sidebar — 可收合輔助說明側邊欄

---

### [SECTION COMPONENT SPEC]

#### Section 1: import_zone

- **layout**: 全寬單欄，垂直置中，大面積拖放區
- **elements**:
  - `dropzone_area`: DropZone / required / 大面積虛線框，主文案「把你現有的材料丟進來」，副文案「貼文字、上傳檔案、或拍照截圖」
  - `paste_tab`: TabButton / required / icon: ClipboardPaste / 「貼上文字」— 開啟多行文字輸入框
  - `upload_tab`: TabButton / required / icon: Upload / 「上傳檔案」— 支援 CSV、TXT、PNG、JPG
  - `photo_tab`: TabButton / required / icon: Camera / 「拍照/截圖」— 觸發裝置相機或螢幕截圖（mobile 優先）
  - `text_input`: Textarea / conditional / 當選擇「貼上文字」模式時顯示，placeholder: 「把 LINE 對話、留言、筆記直接貼這裡...」
  - `file_preview`: FilePreviewCard / conditional / 上傳後顯示檔名、檔案大小、移除按鈕
  - `ocr_preview`: ImagePreviewCard / conditional / 圖片上傳後顯示縮圖 + OCR 辨識文字預覽
  - `submit_btn`: Button Primary (Amber CTA) / required / 「開始提取痛點」
- **states**:
  - `default`: 顯示拖放區 + 三個 tab，submit 按鈕 disabled
  - `hover`: 拖放區邊框變為 Primary (#1E3A5F)，背景輕微加深
  - `dragover`: 拖放區邊框實線、背景高亮、icon 放大動畫
  - `has_content`: submit 按鈕 enabled，顯示已輸入內容的預覽摘要
  - `loading`: 檔案上傳中顯示進度條
  - `error`: 不支援格式 / 超過大小上限 — 錯誤提示 + 支援格式說明
  - `empty`: 初始狀態（同 default）
- **copy_constraints**: 主文案最多 15 字；副文案最多 25 字；placeholder 最多 30 字

#### Section 2: socratic_dialogue_panel（conditional）

- **layout**: 主內容區右側（Desktop）/ 下方（Tablet）/ 全螢幕 overlay（Mobile）
- **elements**:
  - `dialogue_container`: ChatContainer / required / 對話串顯示區
  - `ai_message`: ChatBubble (AI) / required / 左對齊，帶 PainMap icon
  - `user_message`: ChatBubble (User) / required / 右對齊
  - `reply_input`: TextInput / required / placeholder: 「回覆 AI 的問題...」
  - `send_btn`: IconButton / required / icon: Send
  - `skip_btn`: TextButton / optional / 「跳過這題」
  - `end_dialogue_btn`: TextButton / optional / 「我說完了，開始結構化」
- **states**:
  - `default`: 隱藏（僅在 AI 判斷輸入模糊時展開）
  - `active`: 顯示對話介面，AI 提出第一個引導問題
  - `typing`: AI 回應中，顯示「...」打字動畫
  - `complete`: 對話結束，面板收合，顯示「已完成 N 輪對話」摘要
  - `error`: AI 回應失敗 — 「暫時無法回應，請稍後再試」+ 重試按鈕
- **copy_constraints**: AI 單則提問最多 80 字；引導問題範例：「你提到客戶抱怨___，他們當時的情境是？」「他們目前怎麼處理這個問題？」「如果不解決，最嚴重會怎樣？」

#### Section 3: processing_indicator

- **layout**: 全寬，居中顯示，overlay 或 inline 覆蓋主內容區
- **elements**:
  - `step_progress`: StepIndicator / required / 三階段：「讀取材料...」→「識別痛點信號...」→「結構化中...」
  - `step_icon`: AnimatedIcon / required / 每階段對應不同動畫 icon（非 spinner）
  - `progress_bar`: LinearProgress / required / 整體進度
  - `elapsed_time`: Caption / optional / 超過 30 秒時出現已用時間
  - `cancel_btn`: TextButton / optional / 「取消處理」
- **states**:
  - `step_1`: 「讀取材料...」— 文件 icon 展開動畫
  - `step_2`: 「識別痛點信號...」— 搜尋/標記 icon 動畫
  - `step_3`: 「結構化中...」— 卡片排列 icon 動畫
  - `complete`: 進度條填滿，顯示「完成！找到 N 個痛點」後自動消失
  - `timeout`: 超過 90 秒 — 「處理時間較長，請稍候」
  - `error`: 「結構化失敗，請重新嘗試」+ 重試按鈕
- **copy_constraints**: 每步驟文案最多 10 字；完成文案最多 15 字

#### Section 4: structured_output_cards

- **layout**: 多欄卡片網格（Desktop 2–3 欄 / Tablet 2 欄 / Mobile 1 欄）
- **elements**:
  - `section_title`: H2 / required / 「提取到的痛點」
  - `pain_count`: Badge / required / 顯示痛點總數
  - `pain_card[]`: PainCard / required / 每張卡片包含：
    - `who_field`: EditableText / 「誰」— 痛點的主角描述（最多 30 字）
    - `situation_field`: EditableText / 「情境」— 在什麼情況下（最多 100 字）
    - `current_solution_field`: EditableText / 「現行解法」— 目前怎麼處理（最多 100 字）
    - `dissatisfaction_field`: EditableText / 「不滿的點」— 為什麼不滿意（最多 100 字）
    - `source_tag`: Tag / optional / 來源標記（文字輸入 / CSV / OCR / 對話）
    - `edit_btn`: IconButton / icon: Pencil
    - `delete_btn`: IconButton / icon: Trash
    - `merge_btn`: IconButton / optional / icon: Merge
    - `split_btn`: IconButton / optional / icon: Split
  - `add_card_btn`: Button Tertiary / required / icon: Plus / 「手動新增痛點」
  - `sort_dropdown`: Dropdown / optional / 依來源 / 依建立時間
- **states**:
  - `default`: 所有痛點卡片，唯讀模式
  - `editing`: 單張卡片進入編輯模式，顯示儲存/取消按鈕
  - `merging`: 選取兩張卡片，顯示合併預覽
  - `splitting`: 單張卡片展開拆分介面
  - `loading`: Skeleton cards（結構化完成前）
  - `empty`: 「尚未提取到痛點。請先在上方匯入素材。」
  - `error`: 卡片載入失敗 — 錯誤訊息 + 重試按鈕

#### Section 5: action_bar

- **layout**: 底部固定（sticky bottom），全寬，左右分布
- **elements**:
  - `pain_count_display`: StatBadge / required / 「已提取 N 個痛點」
  - `save_draft_btn`: Button Secondary / required / icon: Save / 「儲存草稿」
  - `export_btn`: Button Tertiary / optional / icon: Download / 「匯出」（CSV / JSON）
  - `proceed_btn`: Button Primary (Amber CTA) / required / 「繼續到問題拆解 →」/ 導向 `/decomposer`
- **states**:
  - `default`: 顯示計數 + 所有按鈕
  - `no_pains`: proceed_btn disabled + tooltip「請先提取至少一個痛點」
  - `saving`: save_draft_btn 顯示 loading 狀態
  - `saved`: save_draft_btn 短暫顯示 checkmark + 「已儲存」
  - `error`: toast 通知「儲存失敗，請重試」
- **copy_constraints**: 痛點計數最多 15 字；CTA 按鈕最多 12 字

#### Section 6: help_sidebar

- **layout**: 右側可收合面板（Desktop 預設收合 / Mobile 為底部抽屜）
- **elements**:
  - `toggle_btn`: IconButton / required / icon: HelpCircle
  - `sidebar_title`: H3 / required / 「匯入指引」
  - `tips_section`: ContentBlock / required / 「什麼素材適合丟進來？」條列：
    - 「LINE/Discord/IG 對話截圖」
    - 「YouTube/社群留言的複製貼上」
    - 「客服紀錄、問卷回覆的 CSV」
    - 「你自己的筆記、觀察紀錄」
  - `examples_section`: ContentBlock / required / 「範例輸入」— 2–3 個實際輸入範例與對應輸出
  - `guided_prompt_btn`: Button Secondary / required / 「不確定要丟什麼？」— 啟動蘇格拉底對話引導
  - `faq_section`: AccordionList / optional / 常見問題 3–5 題
- **states**:
  - `collapsed`: 僅顯示 toggle_btn（HelpCircle icon）
  - `expanded`: 完整顯示所有內容
- **copy_constraints**: 每個 tip 最多 20 字；範例輸入最多 200 字；FAQ 答案最多 100 字

---

### [INTERACTION & STATE FLOW]

**主要互動流程（9 步驟）**：

1. 頁面載入 → 顯示空白 import_zone + help_sidebar 收合 + action_bar（proceed disabled）
2. 使用者選擇輸入模式 → 切換 tab（貼上文字 / 上傳檔案 / 拍照截圖）→ 對應輸入區域展開
3. 使用者提交素材 → 點擊「開始提取痛點」→ processing_indicator 啟動三階段動畫
4. AI 判斷是否需要對話 → 若輸入模糊 → socratic_dialogue_panel 展開，AI 提出引導問題
5. 蘇格拉底對話（conditional）→ 使用者回覆 → AI 追問 → 每輪產出結構化痛點草稿
6. 結構化完成 → processing_indicator 消失 → structured_output_cards 顯示提取到的痛點
7. 使用者編輯痛點 → 點擊卡片進入編輯模式 → 修改/合併/拆分/刪除 → 即時更新 action_bar 計數
8. 使用者繼續流程 → 點擊「繼續到問題拆解 →」→ 導航至 `/decomposer`（帶痛點資料）
9. 使用者儲存草稿（optional）→ 資料存入帳戶 → 可稍後返回繼續

**互動細節規則**：

- Pain Card hover：邊框變為 Deep Teal (#2D7D8A)，輕微上移 (-2px)，陰影加深至 Shadow MD
- AI 處理回饋：步驟式文字動畫（打字機效果），讓使用者感受到「正在思考」
- 痛點卡片編輯：debounce 300ms 後同步至後端
- 對話串：每則訊息透過 SSE / WebSocket 即時推送
- 草稿自動儲存：每 60 秒自動儲存一次（若有變更）
- 處理進度：Server-Sent Events 即時推送步驟狀態

### [RWD 行為]

| 斷點 | 佈局 | 特殊行為 |
|------|------|---------|
| Desktop (>1280px) | import_zone 全寬 + 右側 help_sidebar 可展開；output_cards 3 欄；dialogue_panel 右側面板 | 完整體驗，所有功能同時可見 |
| Tablet (768–1280px) | import_zone 全寬；output_cards 2 欄；dialogue_panel 下方展開；help_sidebar 收合為 icon | dialogue_panel 從右側改為下方堆疊 |
| Mobile (<768px) | 所有區塊單欄堆疊；output_cards 1 欄；dialogue_panel 全螢幕 overlay；help_sidebar 底部抽屜 | photo_tab 優先顯示；action_bar 簡化為 proceed_btn + 更多選單 |

---

### [DATA & API]

- **endpoints**:
  - `POST /api/collector/extract` — 提交原始素材，啟動痛點提取（回傳 job_id）
  - `GET /api/collector/jobs/{job_id}/status` — 查詢提取進度（SSE endpoint）
  - `GET /api/collector/jobs/{job_id}/results` — 取得結構化痛點結果
  - `POST /api/collector/dialogue/start` — 啟動蘇格拉底對話 session
  - `POST /api/collector/dialogue/{session_id}/reply` — 送出使用者對話回覆（SSE 回傳 AI 回應）
  - `POST /api/collector/dialogue/{session_id}/end` — 結束對話，取得最終結構化結果
  - `PUT /api/collector/pains/{pain_id}` — 更新單個痛點卡片
  - `DELETE /api/collector/pains/{pain_id}` — 刪除痛點
  - `POST /api/collector/pains/merge` — 合併多個痛點
  - `POST /api/collector/pains/{pain_id}/split` — 拆分痛點
  - `POST /api/collector/pains` — 手動新增痛點
  - `POST /api/collector/draft/save` — 儲存草稿
  - `GET /api/collector/draft/{draft_id}` — 載入草稿
  - `POST /api/collector/export` — 匯出痛點（CSV / JSON）
  - `POST /api/upload/file` — 上傳檔案（CSV / TXT / 圖片）
  - `POST /api/upload/ocr` — 圖片 OCR 辨識

- **error_cases**:
  - 網路錯誤：toast 提示「網路連線異常」+ 重試按鈕；草稿保留在 localStorage
  - API 錯誤：友善錯誤訊息 + 重試按鈕；不洩露技術細節
  - 權限不足：未登入導向登入頁；Free 用戶超過限額 → 顯示升級提示
  - OCR 失敗：「圖片辨識失敗，請嘗試更清晰的圖片或改用文字貼上」
  - 處理逾時（>90s）：「處理時間較長，請稍候。若持續無回應，請減少素材量重試」
  - 檔案格式不支援：「不支援此檔案格式。支援格式：CSV、TXT、PNG、JPG」
  - 檔案過大（>10MB）：「檔案超過 10MB 上限，請壓縮後重試」

- **資料更新策略**:
  - 本地即時更新，debounce 300ms 後同步後端
  - 自動儲存草稿：每 60 秒（若有變更）
  - 所有 AI 回應須通過 Zod schema 驗證後才可渲染

---

## === EXCEPTION RULES ===

本頁面允許的例外：

1. **processing_indicator 使用自訂三階段動畫** — 不使用 Global System 標準 loading spinner，改用步驟式動畫傳達「AI 正在做有意義的工作」而非「系統在空轉」。
2. **socratic_dialogue_panel 為條件式顯示** — 不同於一般頁面的固定 Section 結構，此面板僅在 AI 判斷需要進一步釐清時動態展開，屬於 conditional section，預設為隱藏。
3. **禁止任何形式的分數/評分顯示（強化版）** — 此頁面及所有下游頁面嚴格遵守 PainMap 品牌紀律：不顯示 idea score、可行性分數、星等、A-F 評級。所有輸出僅為結構化事實描述（誰 x 情境 x 現行解法 x 不滿的點）。

---

## === OUTPUT REQUIREMENTS ===

請依照以下步驟輸出：

### Step 1: 結構確認

列出本頁面的：
- 全部 6 個 sections 及其用途
- 每個 section 的關鍵元件清單
- 資料流與狀態管理策略（Local state / React Query / Zustand 分層）

### Step 2: 設計決策說明

說明以下 3 個關鍵設計決策：
1. 為什麼 import_zone 採用 Tab 切換而非三個獨立頁面 — 如何降低匯入門檻
2. socratic_dialogue_panel 的條件展開邏輯 — 何時觸發、如何不打斷主流程
3. processing_indicator 三階段動畫 vs 百分比進度條的取捨 — 如何與 PainMap 品牌「沉穩賦權」一致

### Step 3: 實作方案

使用 **Option A: 完整程式碼**（推薦用於 Lovable）：

```tsx
// 請輸出以下完整元件實作：
// 1. PainCollectorPage.tsx — 主頁面容器，管理整體狀態流
// 2. ImportZone.tsx — 拖放區 + Tab 切換 + 三種輸入模式
// 3. SocraticDialoguePanel.tsx — 對話介面（conditional）
// 4. ProcessingIndicator.tsx — 三階段步驟動畫
// 5. StructuredOutputCards.tsx — 痛點卡片網格（含編輯/合併/拆分/刪除）
// 6. PainCard.tsx — 單個痛點卡片元件
// 7. ActionBar.tsx — 底部固定行動區
// 8. HelpSidebar.tsx — 可收合說明側邊欄
// 9. types/painCollector.types.ts — Zod schemas + TypeScript 型別
// 10. hooks/usePainCollector.ts — 主要狀態邏輯 hook
```

### 品質檢查

請在輸出程式碼前對照以下清單自我驗證：

- [ ] 色彩系統一致性（所有顏色使用上方 Color Tokens，無硬編碼色值）
- [ ] 字體層級正確（標題 / 內文 / Caption 層次分明）
- [ ] 元件風格統一（Radius、Shadow、Border 符合規格）
- [ ] 響應式設計完整（Desktop / Tablet / Mobile 三斷點）
- [ ] 所有 Section 狀態完備（Loading / Error / Empty / Disabled / Processing）
- [ ] 無障礙支援（Tab 順序完整、Focus ring 使用 Teal #2D7D8A、語意化 HTML）
- [ ] 所有 AI 輸出通過 Zod schema 驗證
- [ ] 無任何分數 / 評分 / 星等 / 排名元素
- [ ] 無 console.log 殘留
- [ ] 無 Inline styles
- [ ] action_bar 始終固定於底部可見
- [ ] processing_indicator 使用三階段步驟動畫（非 spinner）
- [ ] 自動儲存草稿功能（每 60 秒）
- [ ] 鍵盤操作完整（Enter 送出對話、Escape 關閉 overlay）

---

**執行優先順序**：
1. Global 規範（色彩、字體、元件）— 最高優先
2. 本頁面規格（6 個 section 的元件與互動）— 次之
3. Exception Rules（三條例外）— 明確限定範圍，最小化

**版本資訊**：
- Global System Prompt 版本：v1.0
- Page Spec 版本：v1.0
- Assembly 日期：2026-04-09
- 對應 PRD：Epic 1（US-001 / US-002 / US-003）
