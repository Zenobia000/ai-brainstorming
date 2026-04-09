# Page-Level Prompt: Disruption Mapper (破壞式GTM策略設計)

> 對應 PainMap PRD Epic 3（破壞式 GTM 策略設計）及 `painmap_disruption_framework.md` 五步流程。
> 將 Clayton Christensen 破壞式創新理論工具化為可操作的 GTM 策略設計流程。

---

## [PAGE META]

- **page_name**: Disruption Mapper (破壞式GTM策略設計)
- **route_path**: `/disruption`
- **page_type**: workflow (multi-step interactive)
- **primary_goal**: 將 Clayton Christensen 的破壞式創新框架操作化為可執行的 GTM 策略，讓使用者從結構化問題出發，產出一份可帶入 FirstDollar Sprint 的 GTM 一頁紙
- **secondary_goal**: 透過不對稱動機檢驗，幫使用者識別大公司不願回應的切入角落，降低盲目進入紅海的風險
- **target_users**:
  - 主要：已完成 Essence Decomposer 且有經驗證問題主題的使用者（阿傑、David、Vivian 類型）
  - 次要：從 Pain Atlas 發現藍海機會、想設計 GTM 策略的探索型使用者
- **entry_point**: Essence Decomposer 完成後的 CTA「進入破壞式分析」 / Pain Atlas 藍海區域的「設計切入策略」 / 左側導航「破壞式 GTM」
- **expected_time_on_page**: 15-40 分鐘（完整五步流程）；5-10 分鐘（跳步使用者，僅做 Canvas 或 GTM）

---

## [STRUCTURE: SECTIONS]

1. **step_indicator**
   - section_type: stepper
   - section_purpose: 水平步驟指示器，顯示五步流程進度，支援跳步與回退，進度自動儲存

2. **step_1_disruption_detector**
   - section_type: interactive_analysis
   - section_purpose: 辨識破壞機會類型（低端破壞 vs 新市場破壞），AI 自動偵測並建議，使用者確認或修改

3. **step_2_strategy_canvas**
   - section_type: interactive_chart
   - section_purpose: 核心視覺化工具 -- 可拖曳的 Strategy Canvas，比較現有玩家與使用者差異化曲線

4. **step_3_minimum_disruptive_product**
   - section_type: card_editor
   - section_purpose: 基於 Canvas 產出 3 個必做功能 + 較長的不做清單，強制手工交付版本設計

5. **step_4_asymmetric_motivation**
   - section_type: checkpoint
   - section_purpose: 四個 Yes/No 檢查點，驗證大公司為何不會回應你的進入

6. **step_5_gtm_playbook**
   - section_type: ai_generated_doc + handoff
   - section_purpose: AI 生成可執行 GTM 一頁紙 + 一鍵交接到 FirstDollar Sprint

7. **failure_mode_protections**
   - section_type: contextual_warnings
   - section_purpose: 根據使用者行為狀態觸發情境化警告，防止分析癱瘓、範圍過大、GTM 過於模糊

---

## [SECTION COMPONENT SPEC]

### Section: step_indicator

- **layout**: 全寬水平排列，固定於內容區頂部（不隨頁面捲動）
- **elements**:
  - step_circles: StepCircle[5] / required / 圓形節點，標記步驟編號與名稱
    - Step 1: 破壞機會辨識
    - Step 2: Strategy Canvas
    - Step 3: 最小破壞性產品
    - Step 4: 不對稱動機檢驗
    - Step 5: GTM 一頁紙
  - step_connectors: ConnectorLine[4] / required / 步驟間連接線
  - step_labels: Caption / required / 每個步驟下方的簡短名稱
  - skip_hint: Tooltip / optional / Hover 時顯示「可跳過此步驟」
- **states**:
  - default: 當前步驟高亮（Primary 色），已完成步驟打勾（Success 色），未完成步驟灰色
  - hover: 步驟節點可點擊，Hover 時顯示步驟摘要 Tooltip
  - completed: 步驟圓圈內顯示勾選圖示，連接線變為 Success 色
  - active: 當前步驟圓圈放大 + 脈動動畫（subtle pulse）
  - skipped: 步驟圓圈虛線邊框，標記「已跳過」
- **copy_constraints**: 步驟名稱最多 10 字；Tooltip 摘要最多 30 字

### Section: step_1_disruption_detector

- **layout**: 單欄，上方為 AI 分析結果卡片，下方為使用者確認/修改區
- **elements**:
  - section_title: H2 / required / "Step 1：辨識破壞機會"
  - problem_context_card: Card / required / 顯示從 Essence Decomposer 帶入的結構化問題摘要（問題一句話 + 目標族群 + 現行替代方案）
  - ai_detection_banner: Banner / required / AI 自動偵測結果，例如「你的問題有低端破壞信號 -- 要分析嗎？」或「偵測到非消費者群體 -- 考慮新市場破壞？」
  - disruption_type_selector: RadioGroup / required / 兩個選項：
    - 低端破壞（Overserved Customers）：「現有客戶被過度服務，付太多錢用太複雜的工具」
    - 新市場破壞（Non-Consumers）：「想要但買不起或不知道怎麼用的非消費者」
  - evidence_list: EvidenceCard[] / required / AI 從結構化痛點中提取的破壞信號證據（每條包含：信號類型 + 來源資料 + 信心標記）
  - pain_atlas_cross_ref: CollapsiblePanel / optional / 「Pain Atlas 中有 X 個人在同行業遇到類似問題」的交叉比對結果
  - disruption_opportunity_card: OutputCard / required / 破壞機會卡片輸出（破壞模式 + 目標族群 + 現行替代方案 + 下一步）
  - next_action_cta: Button Primary / required / "繼續到 Strategy Canvas"
  - socratic_dialogue: ChatBubble[] / optional / AI 蘇格拉底式追問（「你的客群中，誰付了最多錢但抱怨最大？」）
- **states**:
  - default: 顯示 AI 偵測結果，等待使用者確認
  - loading: problem_context_card 顯示 Skeleton；ai_detection_banner 顯示分析中動畫（「正在分析你的痛點結構...」）
  - empty: 無結構化問題帶入時，顯示引導「請先完成問題本質拆解，或手動輸入問題描述」+ CTA 導向 Essence Decomposer
  - error: AI 分析失敗時顯示友善訊息 + 重試按鈕 + 手動填寫 fallback
  - modified: 使用者修改了 AI 建議後，卡片右上角顯示「已手動調整」標記
- **copy_constraints**: AI 偵測 Banner 最多 40 字；每條證據最多 60 字；破壞機會卡片總長 ≤ 150 字

### Section: step_2_strategy_canvas

- **layout**: 全寬互動圖表區 + 右側控制面板（Desktop）；Mobile 改為上圖表下控制面板堆疊
- **elements**:
  - section_title: H2 / required / "Step 2：Strategy Canvas（策略圖）"
  - canvas_chart: InteractiveChart / required / 核心互動元件：
    - x_axis: 功能維度（6-10 個），可拖曳重新排序、可新增/刪除
    - y_axis: 表現水準（低 / 中 / 高），連續可拖曳
    - incumbent_curve: PolyLine / required / 現有玩家曲線（AI 預填，可拖曳調整每個節點）
    - user_curve: PolyLine / required / 使用者差異化曲線（AI 建議初始位置，使用者拖曳調整）
    - curve_legend: Legend / required / 顯示曲線名稱 + 顏色對應
  - factor_management_panel: Panel / required / 功能維度管理：
    - factor_list: DraggableList / required / 目前的功能維度列表，可拖曳排序
    - add_factor_input: TextInput + Button / required / 新增功能維度
    - remove_factor_btn: IconButton(X) / required / 移除功能維度
    - ai_suggest_factors_btn: Button Secondary / optional / 「AI 建議功能維度」
  - strategic_no_panel: Panel / required / 「刻意不做」面板：
    - no_list: TagList / required / 標記為「刻意不做」的功能維度（從 Canvas 中低於中線的使用者曲線節點自動產生）
    - no_reason_input: TextInput / required / 每個「不做」項目的理由
  - canvas_summary: OutputCard / required / AI 即時生成的差異化摘要（隨拖曳即時更新）：「用 [X] 打 [Y]，砍掉 [Z]，在 [W] 上做到最高」
  - socratic_prompts: InlinePrompt[] / optional / 引導問題浮在 Canvas 旁：「你的目標族群在哪些維度被過度服務？」「哪些功能是大公司必須做但你可以不做的？」
  - next_action_cta: Button Primary / required / "繼續到最小產品設計"
- **states**:
  - default: 顯示 AI 預填的雙曲線，使用者可立即拖曳調整
  - loading: Canvas 區域顯示 Skeleton 圖表框架 + 「AI 正在分析行業競品曲線...」
  - hover: 曲線節點 Hover 時放大 + 顯示當前值 Tooltip；功能維度 Hover 時顯示定義
  - dragging: 節點拖曳時顯示吸附參考線 + 即時更新 canvas_summary
  - empty: 無行業/競品資料時，顯示空白 Canvas + 引導「先設定功能維度」
  - error: 圖表渲染失敗時降級為可編輯表格（文字版 Canvas）
- **copy_constraints**: 功能維度名稱 2-6 字；差異化摘要 ≤ 80 字；每個「不做」理由 ≤ 40 字

### Section: step_3_minimum_disruptive_product

- **layout**: 上方為「只做三件事」卡片區，下方為「不做清單」+ 手工交付設計區
- **elements**:
  - section_title: H2 / required / "Step 3：最小破壞性產品"
  - must_do_cards: EditableCard[3] / required / 三張「必做功能」卡片，每張包含：
    - feature_name: TextInput / required / 功能名稱
    - canvas_link: Badge / required / 對應 Canvas 上「拉高」的維度
    - description: TextArea / required / 功能描述（一句話）
    - ai_suggestion: CollapsibleHint / optional / AI 建議內容
  - must_do_limit_warning: InlineWarning / required / 嘗試新增第四張卡片時觸發：「三件事是硬限制。要加新的，請先砍一個。」
  - dont_do_list: EditableList / required / 「不做清單」，從 Canvas 的 strategic_no_panel 自動帶入，使用者可新增/修改
  - dont_do_count_check: InlineValidation / required / 若不做清單 ≤ 必做清單，顯示：「你的不做清單比要做清單短 -- 你砍得不夠。破壞者的力量來自不做什麼。」
  - manual_delivery_section: Card / required / 手工交付版本設計：
    - prompt_text: Body / required / 「如果今晚就要做一次給 1 個人，具體步驟是什麼？（不能包含『寫程式』『做 App』）」
    - steps_input: NumberedTextArea / required / 手工交付步驟（1-5 步）
    - tech_filter_warning: InlineWarning / optional / 偵測到技術用語時觸發：「手工版必須不含技術。如果手動交付做不到，範圍太大了。」
  - unit_economics_card: Card / required / Unit Economics 框算：
    - revenue_input: NumberInput / required / 每單收入 (NT$)
    - cost_input: NumberInput / required / 每單成本 (NT$，含時間成本)
    - margin_display: Calculated / required / 毛利即時計算 + 正負指示
    - margin_warning: InlineWarning / optional / 毛利 ≤ 0 時：「毛利不是正的 = 不是生意。調整定價或砍成本。」
  - next_action_cta: Button Primary / required / "繼續到不對稱動機檢驗"
- **states**:
  - default: 三張必做卡片顯示 AI 預填建議，可編輯；不做清單從 Canvas 帶入
  - loading: 卡片顯示 Skeleton + 「基於你的 Canvas 生成中...」
  - hover: 卡片 Hover 時顯示對應 Canvas 維度的 highlight
  - empty: 未完成 Step 2 時，顯示引導「請先完成 Strategy Canvas」+ 返回 Step 2 的 CTA
  - error: AI 生成失敗時顯示空白可編輯卡片 + 手動填寫引導
  - validation_error: 必填欄位未填時邊框變紅 + 提示訊息
- **copy_constraints**: 功能名稱 ≤ 15 字；功能描述 ≤ 50 字；手工交付每步 ≤ 60 字

### Section: step_4_asymmetric_motivation

- **layout**: 單欄四個檢查點卡片，垂直堆疊，底部為評估結果面板
- **elements**:
  - section_title: H2 / required / "Step 4：不對稱動機檢驗"
  - intro_text: Body / required / 「破壞成功的原因不是你有多強，而是大公司不想回應。以下四個問題幫你驗證這件事。」
  - checkpoint_cards: CheckpointCard[4] / required / 四個 Yes/No 檢查點：
    - Q1: "既有玩家會覺得這市場太小嗎？" / Yes = Safe / No = Warning
    - Q2: "你的毛利結構他們不想要嗎？" / Yes = Safe / No = Warning
    - Q3: "這需要他們放棄現有客戶嗎？" / Yes = Safe / No = Warning
    - Q4: "他們的組織流程能快速轉向嗎？" / No = Safe / Yes = Warning
    - 每張卡片包含：問題文字 + Yes/No Toggle + AI 解釋（Collapsible） + 「需要驗證」標記
  - result_panel: ResultPanel / required / 即時統計結果：
    - safe_count: Number / required / Safe (綠色) 數量
    - warning_count: Number / required / Warning (橙色) 數量
    - result_message: Body / required / 動態訊息：
      - 4 Safe: 「強不對稱動機。大公司大概率不回應，放心進入 GTM。」
      - 3 Safe: 「可行，但需要速度優勢。盡快拿到第一塊錢。」
      - 2 Safe: 「你的護城河可能不夠 -- 考慮調整策略。」+ 返回 Step 1 的 CTA
      - ≤1 Safe: 「這不是破壞式機會。建議回到 Step 1 重新選擇目標族群。」+ 強調返回 CTA
  - proceed_note: Caption / optional / 「這不是分數。這是四個可驗證的事實問題。每一個都可以透過訪談或觀察來證實或證偽。」
  - next_action_cta: Button Primary / required / "生成 GTM 一頁紙"（≥3 Safe 時啟用）
  - adjust_strategy_cta: Button Secondary / optional / "<3 Safe 時顯示：「調整策略後重新檢驗」"
- **states**:
  - default: 四張卡片未選擇，result_panel 隱藏
  - partial: 部分已回答，result_panel 顯示當前統計但標記「未完成」
  - completed_pass: ≥3 Safe，result_panel 綠色背景，next_action_cta 啟用
  - completed_warn: <3 Safe，result_panel 橙色背景，顯示調整建議
  - hover: 卡片 Hover 時展開 AI 解釋預覽
  - loading: AI 解釋生成中顯示 Skeleton
  - error: AI 解釋載入失敗時，卡片仍可使用（Yes/No 不依賴 AI）
- **copy_constraints**: 每個問題 ≤ 25 字；AI 解釋 ≤ 100 字；結果訊息 ≤ 40 字

### Section: step_5_gtm_playbook

- **layout**: 左側 GTM 一頁紙預覽（可編輯），右側 FirstDollar Handoff 面板（Desktop）；Mobile 上下堆疊
- **elements**:
  - section_title: H2 / required / "Step 5：GTM 一頁紙 + FirstDollar 交接"
  - gtm_document: EditableDocument / required / AI 生成的 GTM 一頁紙，包含七個區段：
    - problem_essence: TextArea / required / 問題本質（一句話，從前序步驟帶入）
    - target_segment: TextArea / required / 目標族群（具體到可以打電話的程度）
    - disruption_strategy: Card / required / 破壞式切入策略（只做 + 不做 + 為什麼大公司不跟進）
    - minimum_product: Card / required / 最小產品（手工交付版 + 價格）
    - first_10_customers: EditableList / required / 前 10 個客戶清單：
      - customer_entries: CustomerEntry[10] / required / 每條：名字或描述 + 聯絡管道
      - concrete_check: InlineValidation / required / 至少 3 條必須有具體名字或管道，否則警告：「首批 10 個客戶需要具體的名字和聯繫管道」
    - validation_plan_72h: EditableList / required / 72 小時驗證計畫（Day 1 / Day 2 / Day 3 各一行）
    - moat_design: Card / required / 護城河設計（短期 0-6月 / 中期 6-12月 / 長期 12月+）
  - gtm_next_action: Callout / required / 每份 GTM 結尾的行動指引：「你的下一步是：[具體動作]」
  - firstdollar_handoff_panel: Panel / required / FirstDollar 交接面板：
    - handoff_preview: PreviewCard / required / 顯示將傳送到 FirstDollar 的資料摘要（Sprint 題目 + 10 人清單種子 + 手工交付 + 定價建議）
    - handoff_btn: Button Primary / required / "一鍵交接到 FirstDollar 72h Sprint"
    - handoff_description: Caption / required / 「系統會自動將你的結構化問題、GTM 策略和前 10 位客戶資料打包，作為 FirstDollar Sprint 的初始化輸入。」
  - export_options: ButtonGroup / optional / 匯出選項：下載 PDF / 複製 Markdown / 分享連結
- **states**:
  - default: AI 生成的 GTM 草稿已載入，所有區段可編輯
  - loading: 文件區顯示逐區段生成動畫（「正在生成 GTM 策略...」，區段依序出現）
  - hover: 可編輯區段 Hover 時顯示「點擊編輯」提示
  - empty: 前序步驟未完成時，顯示每個區段的佔位符 + 引導「完成 Step 1-4 以生成完整 GTM」
  - error: AI 生成失敗時顯示空白可編輯模板 + 手動填寫引導
  - validation_warning: first_10_customers 不足 3 個具體名字時，handoff_btn 禁用 + 警告訊息
  - handoff_success: 交接完成後顯示 Success Banner + FirstDollar Sprint 連結
  - handoff_error: 交接失敗時顯示重試按鈕 + 手動匯出 fallback
- **copy_constraints**: 問題本質 ≤ 50 字；目標族群 ≤ 100 字；每個客戶條目 ≤ 40 字；72h 計畫每天 ≤ 60 字；整份文件以 A4 一頁為限

### Section: failure_mode_protections

- **layout**: 浮動 Toast / 底部 Snackbar，根據使用者狀態情境觸發，不占固定版面空間
- **elements**:
  - analysis_paralysis_warning: Toast / conditional / 觸發條件：使用者在 Step 2 Canvas 上調整超過 15 次或停留超過 10 分鐘。訊息：「Canvas 不需要完美，需要出發。你已經 80% 了。」
  - vague_gtm_warning: InlineWarning / conditional / 觸發條件：Step 5 的 first_10_customers 缺乏具體名字。訊息：「首批 10 個客戶需要具體的名字和聯繫管道。」
  - scope_too_big_warning: InlineWarning / conditional / 觸發條件：Step 3 手工交付步驟包含技術用語或步驟超過 5 步。訊息：「如果手動交付做不到，範圍太大了。試著砍到 3 步以內。」
  - skip_step4_warning: Toast / conditional / 觸發條件：使用者嘗試跳過 Step 4 直接進 Step 5。訊息：「建議完成不對稱動機檢驗 -- 這是判斷大公司會不會打你的關鍵步驟。確定跳過？」+ 確認/返回按鈕
  - encouragement_nudge: Toast / conditional / 觸發條件：使用者在任何步驟停滯超過 5 分鐘。訊息：「不確定也沒關係。先填你知道的，之後隨時可以回來修改。」
  - dismiss_btn: IconButton(X) / required / 所有 Toast/Warning 都可手動關閉
- **states**:
  - hidden: 預設不顯示，等待觸發條件
  - visible: 從螢幕邊緣滑入，自動 8 秒後消失（除非使用者互動）
  - dismissed: 使用者手動關閉後，同一觸發條件在本次 session 不重複出現
- **copy_constraints**: Toast 訊息 ≤ 40 字；InlineWarning ≤ 50 字

---

## [INTERACTION & STATE FLOW]

### 主要互動流程

1. 頁面載入 → 讀取從 Essence Decomposer 帶入的結構化問題資料 → 渲染 Step Indicator（Step 1 高亮）
2. Step 1：AI 自動分析痛點結構，偵測破壞類型 → 使用者確認或修改 → 產出破壞機會卡片
3. Step 2：AI 預填 Strategy Canvas（現有玩家曲線 + 建議差異化曲線）→ 使用者拖曳調整節點 → 差異化摘要即時更新 → 標記「刻意不做」的功能
4. Step 3：基於 Canvas 自動生成 3 張必做卡片 + 不做清單 → 使用者編輯 → 填寫手工交付版本 → 框算 Unit Economics
5. Step 4：使用者回答 4 個 Yes/No 問題 → 即時顯示評估結果 → ≥3 Safe 進入 Step 5 / <3 Safe 建議調整
6. Step 5：AI 生成 GTM 一頁紙 → 使用者編輯完善（特別是前 10 位客戶）→ 一鍵交接到 FirstDollar
7. 任何步驟：使用者點擊 Step Indicator 的已完成/已跳過步驟 → 回退到該步驟，已填內容保留
8. 跳步：使用者點擊未完成的後續步驟 → 直接跳到該步驟（Step 4 跳過時觸發 skip_step4_warning）

### 自動儲存行為

- 每個步驟的使用者輸入在失去焦點（blur）或每 30 秒自動儲存至 draft
- 頁面重新載入時恢復到最後儲存的步驟和狀態
- Step Indicator 顯示已儲存的視覺確認（短暫的「已儲存」微提示）

### RWD 行為差異

| 斷點 | 佈局 | 差異說明 |
|------|------|---------|
| Desktop (>1280px) | Step 2: Canvas 圖表 + 右側控制面板並排；Step 5: GTM 文件 + 右側 Handoff 面板並排；左側 Sidebar 展開 | 完整互動體驗，Canvas 拖曳最佳 |
| Tablet (768-1280px) | Step 2: Canvas 圖表全寬，控制面板收合為底部抽屜；Step 5: 上下堆疊；Sidebar 收合 | Canvas 仍可拖曳，控制面板按需展開 |
| Mobile (<768px) | 所有步驟單欄堆疊；Canvas 改為可橫向捲動的圖表 + 底部數值滑桿調整（替代拖曳）；Step Indicator 改為緊湊的進度條 + 步驟名稱輪播 | Canvas 用滑桿替代拖曳操作；底部導航 |

### 資料更新策略

- 步驟間資料：前一步驟的輸出即時傳遞到下一步驟，修改前步驟內容時，後續步驟標記「資料已變更，是否重新生成？」
- AI 生成內容：非自動更新，使用者需手動觸發「重新生成」
- 自動儲存：每 30 秒 + 每次步驟切換時
- Pain Atlas 交叉比對：Step 1 載入時從 Pain Atlas 即時查詢

---

## [DATA & API]

- **uses_api**: true
- **endpoints**:
  - GET `/api/disruption/context/{problemId}` -- 取得從 Essence Decomposer 帶入的結構化問題資料
  - POST `/api/disruption/detect` -- Step 1：AI 分析破壞機會類型（輸入：結構化痛點；輸出：破壞類型 + 證據 + 機會卡片）
  - GET `/api/pain-atlas/cross-ref/{problemId}` -- Step 1：Pain Atlas 交叉比對（同行業相似痛點）
  - POST `/api/disruption/canvas/generate` -- Step 2：AI 生成 Strategy Canvas 初始資料（功能維度 + 競品曲線 + 建議差異化曲線）
  - PUT `/api/disruption/canvas/{canvasId}` -- Step 2：儲存使用者調整後的 Canvas 資料
  - POST `/api/disruption/minimum-product/generate` -- Step 3：基於 Canvas 生成必做/不做清單 + 手工交付建議
  - PUT `/api/disruption/minimum-product/{productId}` -- Step 3：儲存使用者編輯的最小產品設計
  - POST `/api/disruption/asymmetric-check` -- Step 4：AI 為每個檢查點生成解釋
  - POST `/api/disruption/gtm/generate` -- Step 5：AI 生成 GTM 一頁紙
  - PUT `/api/disruption/gtm/{gtmId}` -- Step 5：儲存使用者編輯的 GTM 文件
  - POST `/api/disruption/handoff/firstdollar` -- Step 5：打包 GTM 資料交接到 FirstDollar Sprint
  - PUT `/api/disruption/draft/{sessionId}` -- 自動儲存當前 session 的所有步驟草稿
  - GET `/api/disruption/draft/{sessionId}` -- 恢復草稿
- **error_cases**:
  - 網路錯誤：顯示離線提示 + 本地快取已填資料 + 恢復連線後自動同步
  - API 錯誤（AI 生成失敗）：降級為空白可編輯模板 + 手動填寫引導 + 重試按鈕
  - 權限不足（Free 方案無 GTM 策略權限）：Step 3 開始前顯示升級提示 + 功能預覽
  - Handoff 失敗（FirstDollar 服務不可用）：提供手動匯出（PDF/Markdown）作為 fallback
  - 結構化問題資料不存在：導向 Essence Decomposer 或提供手動輸入入口

---

## [EXCEPTION TO GLOBAL RULES]

- **Strategy Canvas 互動圖表使用全寬佈局**：不受 Grid 最大寬度限制，以提供足夠的拖曳操作空間
- **Mobile 端 Canvas 使用橫向捲動**：違反一般禁止橫向捲動的規則，因 Canvas 需要完整的功能維度軸線才可操作
- **Failure Mode Protections 使用時間觸發 Toast**：全域 Toast 通常為使用者動作觸發，此頁面新增基於停留時間的被動觸發機制
- **Step 4 不對稱動機使用 Yes/No 而非分數**：雖然產出數值統計（3/4 Safe），但這不是 idea score -- 是四個可驗證事實問題的彙整，符合反焦慮設計紀律（D-001）

---

## [ACCEPTANCE CRITERIA]

- [ ] 所有 7 個 Section 功能正常
- [ ] Step Indicator 正確反映五步進度（active / completed / skipped 三態）
- [ ] Step 1 AI 偵測在 ≤ 10 秒內回傳破壞類型建議
- [ ] Step 2 Strategy Canvas 可拖曳調整曲線節點，差異化摘要即時更新（< 500ms 延遲）
- [ ] Step 2 Canvas 支援新增/刪除/排序功能維度
- [ ] Step 3 必做功能卡片硬限制 3 張，嘗試新增第四張時顯示警告
- [ ] Step 3 不做清單數量 < 必做清單時顯示驗證警告
- [ ] Step 3 手工交付步驟偵測技術用語時顯示範圍過大警告
- [ ] Step 3 Unit Economics 即時計算毛利，毛利 ≤ 0 時顯示警告
- [ ] Step 4 四個檢查點 Yes/No 互動正常，result_panel 即時更新
- [ ] Step 4 <3 Safe 時顯示護城河不足警告 + 調整建議
- [ ] Step 5 AI GTM 生成在 ≤ 30 秒內完成
- [ ] Step 5 前 10 客戶清單不足 3 個具體名字時，Handoff 按鈕禁用 + 警告
- [ ] Step 5 一鍵 Handoff 到 FirstDollar 正確傳送所有打包資料
- [ ] 步驟可跳過（不鎖定），跳過 Step 4 時觸發警告確認
- [ ] 所有步驟支援回退，已填內容不遺失
- [ ] 自動儲存每 30 秒 + 步驟切換時觸發，頁面重新載入可恢復
- [ ] Failure Mode Toast 在正確條件下觸發，可關閉，同 session 不重複
- [ ] 所有 AI 輸出以「你下一步該做什麼」結尾（US-041 允收標準）
- [ ] 全頁面無任何 idea score、可行性分數、成功率預測（US-040 允收標準）
- [ ] 使用「問題」「痛點」語言框架，不出現「idea」「點子」（US-042 允收標準）
- [ ] Loading / Error / Empty 三態完備（所有 Section）
- [ ] RWD 三個斷點行為正確（Desktop / Tablet / Mobile）
- [ ] Mobile 端 Canvas 滑桿操作順暢替代拖曳
- [ ] 頁面首次載入響應時間 < 3 秒（含 AI 偵測結果）
- [ ] 符合 Design System 視覺規範
