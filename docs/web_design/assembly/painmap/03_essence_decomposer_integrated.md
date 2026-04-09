# Assembly Prompt: PainMap Essence Decomposer (問題本質拆解)

> 此檔案為可直接貼入 Lovable 的完整 Prompt。
> 由 `global/painmap_brand_system.md` 壓縮版 + `pages/painmap/03_essence_decomposer.md` 完整頁面規格組裝而成。
> 對應 `guides/vibe_coding_build_strategy.md` → Step 6。

---

## === GLOBAL PROJECT GUIDELINE (DO NOT OVERRIDE) ===

你是「PainMap 題眼」的資深產品架構師與全端開發架構師，負責維護整個專案的設計一致性。

### 核心設計系統

**配色**

| Token | 色值 | 用途 |
|-------|------|------|
| Primary | #1E3A5F | 主要品牌色，結構與深度 |
| Primary Hover | #162D4A | 主色 hover |
| Primary Light | #E8EEF5 | 卡片高亮背景 |
| Secondary | #2D7D8A | 導航、連結、互動元素 |
| Secondary Hover | #236269 | 次色 hover |
| Accent | #E8913A | CTA 按鈕，行動呼喚 |
| Accent Hover | #D07A2B | 強調色 hover |
| Accent Light | #FEF3E2 | 行動提示區背景 |
| Verified | #2D9D78 | 已驗證狀態 |
| Verified Light | #E6F5EF | 驗證狀態背景 |
| Caution | #D97706 | 需補充資訊 |
| Error | #DC2626 | 系統錯誤（僅此用途） |
| BG Page | #F7F8FA | 頁面底色 |
| BG Surface | #FFFFFF | 卡片 / 容器 |
| BG Muted | #F1F3F5 | 次要區塊背景 |
| Text Primary | #1A2332 | 主要文字 |
| Text Secondary | #5C6B7A | 說明文字 |
| Text Muted | #8E99A4 | 輔助文字、時間戳 |
| Border Default | #DFE3E8 | 預設邊框 |
| Border Focus | #2D7D8A | 聚焦邊框 |

**字體**

| Token | 字級 | 行高 | 字重 | 用途 |
|-------|------|------|------|------|
| H1 | 28px | 1.3 | 700 | 頁面標題 |
| H2 | 22px | 1.3 | 600 | 區塊標題 |
| H3 | 18px | 1.4 | 600 | 欄位群組標題 |
| Body LG | 17px | 1.7 | 400 | 痛點描述 |
| Body MD | 15px | 1.6 | 400 | 標準段落、表單標籤 |
| Body SM | 13px | 1.5 | 400 | 輔助說明 |
| Caption | 12px | 1.4 | 400 | 時間戳、metadata |
| Code | 14px | 1.5 | 400 | 結構化欄位值 |

字體族：中文 Noto Sans TC / 英文 Inter / 等寬 JetBrains Mono

**元件風格**

| Token | 值 |
|-------|----|
| Radius SM | 4px（Tag、Badge） |
| Radius MD | 8px（按鈕、輸入框） |
| Radius LG | 12px（卡片、容器） |
| Radius XL | 16px（Modal） |
| Shadow SM | 0 1px 3px rgba(30,58,95,0.06) |
| Shadow MD | 0 4px 8px rgba(30,58,95,0.08) |
| Shadow LG | 0 12px 24px rgba(30,58,95,0.12) |
| Border | 1px solid #DFE3E8 |
| Border Active | 2px solid #2D7D8A |

**間距與斷點**

| 屬性 | 值 |
|------|----|
| 最大寬度 | 1200px（Kanban 工作區例外，見 EXCEPTION RULES） |
| 欄數 | 12，欄間距 20px |
| 左右 Padding | 16px (Mobile) / 24px (Tablet) / 32px (Desktop) |
| Mobile | < 768px |
| Tablet | 768px – 1280px |
| Desktop | > 1280px |

### 重要規範

- 本區段定義整個專案的設計系統與風格，所有元件必須繼承此處的配色、圓角與間距。
- 除非在 [EXCEPTION RULES] 中明確說明，否則不准違反。
- **技術棧**：React 18 + TypeScript + Tailwind CSS；State: Zustand + React Query；Forms: React Hook Form + Zod；Backend: Supabase；AI: OpenAI API via Edge Functions。
- **禁止 Inline styles**，全部使用 Tailwind utility classes。
- **禁止 console.log 殘留**。
- **禁止未經 Zod schema 驗證的 AI 回應直接渲染**。

### 絕對禁令 (CRITICAL — 任何頁面均適用)

以下元素在任何頁面、元件、文案中皆禁止出現：
- 分數（scores）、星等（star ratings）、A-F 等級、百分比用於評價目的
- 成功率預測、可行性百分比、進度條表達完成程度
- 排行榜、遊戲化徽章
- 任何引發焦慮的數據分析 UI

---

## === CURRENT TASK: BUILD ONE PAGE ===

本次任務：根據上方 Global Guideline，設計並實作「Essence Decomposer（問題本質拆解）」頁面。

### [PAGE META]

- **page_name**: Essence Decomposer（問題本質拆解）
- **route_path**: `/decompose`
- **page_type**: analysis（interactive workspace）
- **primary_goal**: 用四個物理量檢驗痛點卡片，並將散亂痛點 cluster 成 3-5 個問題主題，讓使用者看見散點背後的結構
- **secondary_goal**: 為每個問題主題產出一句話問題本質與缺口行動建議，銜接下游 GTM 策略設計
- **target_users**:
  - 主要：已完成 Pain Collector、持有結構化痛點卡片的使用者
  - 次要：從痛點圖譜匯入痛點條目進行深度分析的使用者
- **entry_point**: Pain Collector 完成頁「繼續到本質拆解 ->」按鈕 / 側邊導航列
- **expected_time_on_page**: 10-25 分鐘（深度分析工作區，非快速瀏覽）

---

### [STRUCTURE: SECTIONS]

頁面由以下 6 個 Section 組成（由上至下）：

1. **pain_cards_workspace** — Kanban 工作區（主體）
2. **physical_quantities_validator** — 四物理量驗證面板（右側滑入）
3. **problem_essence_statement** — 問題本質一句話（主題泳道下方）
4. **gap_analysis_panel** — 缺口分析與行動建議（底部抽屜 / 全寬區塊）
5. **theme_summary** — 主題摘要總覽（全寬）
6. **navigation_bar** — 固定底部工具列

---

### [SECTION COMPONENT SPEC]

#### Section 1: pain_cards_workspace

- **layout**: 全寬多欄 Kanban。左側「未分類」卡片池，右側 3-5 個可命名主題泳道（column）
- **elements**:
  - `uncategorized_pool` — CardPool / required / 從 Pain Collector 匯入的所有痛點卡片，預設置於此
  - `theme_columns` — ThemeColumn[] / required / 3-5 個可拖拽目標泳道，每個泳道有可編輯標題（最多 20 字）
  - `pain_card` — DraggableCard / required / 顯示：痛點摘要（1-2 句，最多 60 字）、來源標籤（留言/對話/經驗）、JTBD 格式預覽
  - `add_theme_btn` — Button Secondary / required / 「+ 新增主題」（上限 5 個）
  - `ai_cluster_btn` — Button Primary / optional / 「AI 自動分群」— 觸發 affinity clustering 建議
  - `merge_split_controls` — IconButton[] / optional / 合併兩個主題 / 拆分一個主題
- **states**:
  - `default`: 卡片池滿、主題泳道空，提示「拖拽卡片到主題欄，或點擊 AI 自動分群」
  - `dragging`: 卡片半透明 + 目標泳道高亮邊框（Border Active: 2px solid #2D7D8A）
  - `loading`: AI 分群進行中 — 卡片池顯示 shimmer 動畫，泳道漸次出現
  - `error`: AI 分群失敗 — toast 提示「自動分群暫時無法使用，請手動拖拽」
  - `empty`: 無痛點卡片 — 「你還沒有痛點卡片。返回採集器開始」+ CTA 按鈕
  - `complete`: 所有卡片已分入主題 — 未分類池收合，顯示「所有痛點已分類」

#### Section 2: physical_quantities_validator

- **layout**: 右側面板（點擊痛點卡片或主題時滑入），Desktop 320px 寬，2 欄：左欄四個物理量指標，右欄 AI 分析
- **elements**:
  - `quantity_1_specific_person` — StatusIndicator / required / 「具體的人」— 三態：有（checkmark）/ 缺（cross）/ 不確定（question mark）
  - `quantity_2_paying_pain` — StatusIndicator / required / 「付費的痛」— 三態同上
  - `quantity_3_manual_deliverable` — StatusIndicator / required / 「手動交付物」— 三態同上
  - `quantity_4_payment_rail` — StatusIndicator / required / 「收錢管道」— 三態同上
  - `ai_finding` — TextBlock / required / 「發現」— AI 對該物理量的判斷依據（最多 80 字）
  - `ai_missing_gap` — TextBlock / required / 「缺什麼」— 明確指出缺失（最多 40 字）
  - `ai_today_action` — TextBlock / required / 「今天做哪一件」— 具體可執行的下一步（最多 60 字）
  - `status_override` — ToggleGroup / required / 使用者可手動覆蓋 AI 判斷的三態
  - `evidence_note` — TextArea / optional / 使用者補充證據或備註
- **states**:
  - `default`: 未選擇卡片時面板收合，顯示提示「點擊痛點卡片或主題查看物理量分析」
  - `analyzing`: AI 分析中 — 四個指標位置顯示 pulse 動畫
  - `complete`: 四個物理量皆已判定 — 面板頂部顯示「已分析」標籤
  - `user_modified`: 使用者覆蓋了 AI 判斷 — 該指標旁顯示「手動」小標籤
  - `error`: AI 分析失敗 — 「無法自動分析，請手動標記」
- **HARD CONSTRAINT**: 禁止顯示任何數字分數、百分比、星等、等級。物理量只有三態：有 / 缺 / 不確定。

#### Section 3: problem_essence_statement

- **layout**: 卡片式，每個問題主題一張，嵌入在主題泳道下方或作為展開區域
- **elements**:
  - `essence_template` — EditableText / required / AI 生成的一句話問題本質（最多 100 字），格式：「[具體的人] 在 [情境] 時，因為 [現行解法的不足]，需要 [期望結果]」
  - `regenerate_btn` — IconButton / optional / 「重新生成」— 要求 AI 換一個角度重寫
  - `edit_indicator` — Badge / optional / 顯示「AI 生成」或「已編輯」
  - `source_cards` — ChipList / required / 列出構成該主題的痛點卡片標籤（可點擊跳回卡片）
- **states**:
  - `default`: 顯示 AI 生成的一句話，可直接行內編輯
  - `generating`: AI 生成中 — 文字區顯示打字機動畫
  - `edited`: 使用者已修改 — Badge 變為「已編輯」
  - `empty`: 主題下無卡片 — 「將痛點卡片拖入此主題以生成問題本質」
  - `error`: AI 生成失敗 — 顯示空白模板供手動填寫

#### Section 4: gap_analysis_panel

- **layout**: 底部抽屜或全寬區塊，按主題分組的行動建議列表
- **elements**:
  - `theme_gap_card` — GapCard[] / required / 每個主題一張，內含：
    - `theme_name` — H3 / required
    - `missing_quantities` — ChipList / required / 缺失的物理量名稱（紅色 chip，使用 Error #DC2626 邊框）
    - `unclear_quantities` — ChipList / optional / 不確定的物理量名稱（黃色 chip，使用 Caution #D97706 邊框）
    - `action_prompt` — TextBlock / required / 格式：「你還缺 [物理量名稱]，今天的一個行動是 [具體行動]」（最多 80 字）
    - `action_checkbox` — Checkbox / optional / 使用者可勾選「已完成」
  - `refresh_analysis_btn` — Button Tertiary / optional / 「重新分析缺口」
- **states**:
  - `default`: 按缺口數量由多到少排列主題
  - `all_complete`: 所有主題四個物理量皆「有」— 「所有物理量就位，可以前進到 GTM 策略了」
  - `loading`: 重新分析中 — skeleton cards
  - `empty`: 尚未建立任何主題 — 「先在上方將痛點分群為主題」
- **HARD CONSTRAINT**: 禁止顯示「完成度 60%」或任何百分比 / 分數。只用文字和圖示描述缺口。

#### Section 5: theme_summary

- **layout**: 全寬水平列表或網格，每個主題一個摘要卡片
- **elements**:
  - `theme_overview_card` — SummaryCard[] / required / 每個主題一張，內含：
    - `theme_title` — H3 / required
    - `card_count` — Caption / required / 「N 個痛點」
    - `quantity_icons` — IconRow / required / 四個圖示橫排：checkmark（有）/ cross（缺）/ question（不確定），對應四個物理量
    - `essence_preview` — Body SM / required / 一句話問題本質截斷預覽（最多 50 字，超出加省略號）
    - `readiness_label` — Badge / required / 文字標籤：「可前進」（四個皆有）/ 「有缺口」（有缺失）/ 「需釐清」（有不確定）
  - `export_btn` — Button Secondary / required / 「匯出分析結果」（JSON / PDF / Markdown）
  - `save_btn` — Button Secondary / required / 「儲存進度」
- **states**:
  - `default`: 顯示所有主題摘要，按建立順序排列
  - `loading`: skeleton cards
  - `empty`: 無主題 — 隱藏此區塊
  - `hover`: 卡片輕微上浮（-2px）+ Border Active，顯示「點擊查看詳細分析」tooltip
- **HARD CONSTRAINT**: `readiness_label` 只使用文字標籤，禁止數字、百分比、進度條。

#### Section 6: navigation_bar

- **layout**: 固定底部工具列（position: sticky bottom），左右對齊
- **elements**:
  - `back_btn` — Button Ghost / required / 「← 返回採集器」/ 導向 Pain Collector 頁
  - `forward_btn` — Button Primary (Accent) / required / 「繼續到 GTM 策略 →」/ 導向 Disruption Mapper 頁
  - `save_draft_btn` — Button Secondary / required / 「儲存草稿」/ 自動儲存 + 手動觸發
  - `export_btn` — Button Tertiary / optional / 「匯出」/ 下拉選單：JSON / PDF / Markdown
  - `autosave_indicator` — Caption / required / 「已自動儲存 HH:MM」或「儲存中...」
- **states**:
  - `default`: 兩端按鈕可用，自動儲存指示器顯示最近時間
  - `saving`: 指示器顯示 spinner + 「儲存中...」
  - `unsaved_changes`: 儲存按鈕 Accent 邊框高亮提示
  - `forward_disabled`: 尚未建立任何主題時，「繼續到 GTM 策略」disabled + tooltip「請先建立至少一個問題主題」

---

### [INTERACTION & STATE FLOW]

**主要互動流程**（9 步驟）：

1. 頁面載入 → 從 Pain Collector 取得該使用者的痛點卡片列表 → 卡片填入「未分類」池
2. 使用者拖拽卡片到主題泳道（或點擊「AI 自動分群」由 AI 建議初始分群）
3. 使用者可手動調整分群：拖拽卡片移動、新增 / 刪除 / 合併 / 拆分主題
4. 點擊任一痛點卡片或主題 → 右側滑出物理量檢驗面板 → AI 自動分析四個物理量
5. AI 輸出每個物理量的「發現 → 缺什麼 → 今天做哪一件」→ 使用者可覆蓋判斷、補充證據
6. 每個主題下方自動生成一句話問題本質 → 使用者可行內編輯
7. 底部缺口分析面板匯總所有主題的缺失物理量與行動建議
8. 使用者確認分析結果 → 點擊「繼續到 GTM 策略」前進；或「返回採集器」補充更多痛點
9. 全程自動儲存（每 30 秒 + 每次拖拽 / 編輯後）

**回溯機制**：
- 使用者可隨時「返回採集器」新增更多痛點卡片，返回後新卡片自動進入「未分類」池
- 已建立的主題和分群不會因回溯而丟失
- 物理量判斷可隨時手動覆蓋，不鎖定 AI 結果

**資料更新策略**：
- 痛點卡片：頁面載入時從 Pain Collector 同步，之後不自動更新（避免分析中資料變動）
- 物理量分析：使用者觸發時即時計算，不自動重新分析
- 自動儲存：每 30 秒 + 每次有意義操作（拖拽、編輯、狀態變更）後觸發
- 問題本質生成：主題下卡片變更後 2 秒 debounce 自動重新生成（使用者已手動編輯的除外）

**AI 處理回饋規則**：
- 使用步驟式文字動畫（打字機效果）：「正在辨識痛點結構...」→「正在比對四物理量...」→「即將完成」
- AI 分析回應時間 < 15 秒（單張卡片物理量檢驗）
- AI 自動分群須在 90 秒內完成（10 張卡片以內）

---

### [RWD 行為]

| 斷點 | 佈局 | 差異說明 |
|------|------|---------|
| Desktop (>1280px) | 全寬 Kanban + 右側物理量面板（320px） | 完整拖拽體驗，面板與工作區並排 |
| Tablet (768-1280px) | Kanban 橫向可捲動 + 物理量面板改為底部半屏抽屜 | 主題泳道最多同時顯示 3 欄 |
| Mobile (<768px) | 垂直堆疊列表 + 卡片點擊進入主題 + 物理量全屏覆蓋 | 拖拽改為「長按 → 選擇目標主題」；Kanban 改為主題 Tab 切換 |

---

### [DATA & API]

- **endpoints**:
  - `GET /api/painmap/cards?session_id={id}` — 取得所有痛點卡片（來自 Pain Collector）
  - `GET /api/painmap/decompose/session/{id}` — 取得已儲存的拆解進度（主題、分群、物理量狀態）
  - `POST /api/painmap/decompose/cluster` — AI affinity clustering（輸入：卡片列表；輸出：建議分群）
  - `POST /api/painmap/decompose/validate` — AI 物理量檢驗（輸入：卡片/主題內容；輸出：四個物理量判定 + 發現/缺口/行動）
  - `POST /api/painmap/decompose/essence` — AI 問題本質生成（輸入：主題下的卡片群；輸出：一句話問題本質）
  - `PUT /api/painmap/decompose/session/{id}` — 儲存 / 更新拆解進度
  - `POST /api/painmap/decompose/export` — 匯出分析結果（輸入：session_id + 格式；輸出：檔案 URL）
- **error_cases**:
  - 網路錯誤：toast「網路連線中斷，已儲存的進度安全。恢復連線後將自動同步」；離線期間禁用 AI 功能，允許手動拖拽和編輯
  - API 錯誤：AI 分析失敗時降級為手動模式 — 「AI 暫時無法分析，你可以手動標記物理量狀態」
  - 權限不足：未登入使用者導向登入頁；Free 方案超出限額顯示升級提示
  - 資料不存在：session_id 無效時導向 Pain Collector 重新開始

---

## === EXCEPTION RULES ===

本頁面允許以下三項例外，均為有意識的設計取捨：

1. **全寬 Kanban 佈局** — `pain_cards_workspace` 區塊使用全寬佈局，不受 Global 1200px 最大寬度限制。原因：拖拽操作需要足夠的水平空間，強制限寬會壓縮主題泳道並導致卡片堆疊難以辨識。
2. **固定底部導航列** — `navigation_bar` 固定於視窗底部（`position: sticky`），不隨頁面捲動消失。原因：此頁面為深度工作區（10-25 分鐘），使用者需隨時存檔或切換頁面，固定工具列是必要的可及性設計。
3. **右側面板覆蓋 Kanban** — `physical_quantities_validator` 在 Desktop 使用右側滑入面板，展開時可能覆蓋部分 Kanban 區域。原因：物理量分析與卡片內容是連動的，並排查看比跳頁操作效率更高；覆蓋範圍僅為最右側泳道，使用者仍可看見主要工作區。

---

## === OUTPUT REQUIREMENTS ===

請依照以下步驟輸出：

### Step 1: 結構確認

列出本頁面的：
- 6 個 sections 及其用途
- 每個 section 的關鍵元件清單
- 資料流策略（Pain Collector → 卡片池 → 主題分群 → 物理量驗證 → 問題本質 → 缺口分析）
- 狀態管理策略（Zustand 管理分群狀態；React Query 管理 API 快取；本地 debounce 管理自動儲存）

### Step 2: 設計決策說明

說明以下 3 個關鍵設計決策：

1. **為何使用 Kanban 而非表格或列表** — 如何確保拖拽體驗符合「行動優於分析」原則，且在 Mobile 降級為 Tab 切換時不失去資訊架構
2. **物理量三態設計（有/缺/不確定）如何取代分數** — 說明如何在不使用數字的前提下，讓使用者清楚感知每個物理量的狀態，並與 Global 絕對禁令一致
3. **AI 降級策略** — 當 AI 功能不可用時，如何確保使用者仍能完成完整的手動分析流程（手動拖拽、手動標記三態、手動填寫問題本質）

### Step 3: 實作方案

選擇以下其中一種輸出格式：

**Option A: 完整程式碼**（推薦用於 Lovable）
```tsx
// 完整的 React + TypeScript + Tailwind 實作
// 包含：型別定義、元件結構、狀態管理、API 呼叫、所有 6 個 Section
// 遵循 coding-style.md：函式 < 50 行、多小檔案、不可變模式
```

**Option B: 架構示意**（推薦用於初步規劃）
```tsx
// 型別定義（PainCard, Theme, PhysicalQuantity, QuantityState）
// 元件樹（EssenceDecomposerPage → 6 Sections → 各子元件）
// Zustand store 結構
// 關鍵邏輯（debounce 自動儲存、drag-and-drop handler、AI 降級邏輯）
```

**Option C: 偽代碼說明**（推薦用於與團隊討論）
```
// 高層次互動流程（9 步驟）
// 元件組織方式（哪些可抽為共用元件）
// AI 功能邊界（哪些必須即時、哪些可延遲）
```

### 品質檢查清單

實作完成後請逐項確認：

- [ ] **色彩系統一致性** — 所有顏色來自 Color Token 表，無硬編碼色值
- [ ] **字體層級正確** — H3 用於主題標題、Body MD 用於卡片摘要、Caption 用於時間戳
- [ ] **元件風格統一** — 按鈕圓角 8px、卡片圓角 12px、Modal 圓角 16px
- [ ] **響應式設計完整** — Desktop / Tablet / Mobile 三個斷點行為均已實作
- [ ] **所有狀態已處理** — 每個 Section 的 Loading / Error / Empty / Disabled / Processing 狀態均有對應 UI
- [ ] **零分數 QA** — 全頁面確認無任何 0-100 數字分數、百分比、星等、A-F 等級渲染
- [ ] **三態物理量** — StatusIndicator 只呈現有 / 缺 / 不確定，無數值
- [ ] **文字標籤** — readiness_label 只用「可前進」「有缺口」「需釐清」，無進度條
- [ ] **無障礙支援** — 完整 Tab 順序 + Focus ring (Teal #2D7D8A) + Escape 關閉面板 + 語意化 HTML
- [ ] **ARIA 標籤** — 四物理量圖示附 aria-label 文字描述（不能僅靠顏色傳達狀態）
- [ ] **AI 輸出驗證** — 所有 AI 回應透過 Zod schema 驗證後再渲染
- [ ] **自動儲存** — 每 30 秒 + 每次有意義操作後觸發，autosave_indicator 即時更新
- [ ] **效能指標** — AI 分析回應 < 15s；AI 自動分群（10 張卡片）< 90s；FMP < 1.5s
- [ ] **匯出功能** — JSON / PDF / Markdown 三種格式均可運作
- [ ] **禁用詞檢查** — 無「評分」「打分」「星等」「成功率」「可行性分數」「點子」等禁用詞

---

**執行優先順序**：
1. Global 規範為最高優先級（特別是零分數絕對禁令）
2. Page 特定需求次之（6 個 Section 的功能完整性）
3. Exception Rules 需明確實作且不超出說明範圍

**版本資訊**：
- Global Brand System 版本：v1.0
- Page Spec 版本：v1.0
- Assembly 日期：2026-04-09
- 負責人：Sunny
