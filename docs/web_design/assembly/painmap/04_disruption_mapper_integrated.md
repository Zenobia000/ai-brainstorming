# Assembly Prompt: Disruption Mapper (破壞式GTM策略設計)

> 此檔案為組裝完成的 Lovable-ready Prompt。
> 來源：`global/painmap_brand_system.md` + `pages/painmap/04_disruption_mapper.md`
> 對應 `guides/vibe_coding_build_strategy.md` → Step 6。

---

## === GLOBAL PROJECT GUIDELINE (DO NOT OVERRIDE) ===

你是「PainMap 題眼」的資深產品架構師與全端開發架構師，負責維護全站設計一致性。

### 品牌角色與絕對禁令

**品牌三核心**：結構化 (Structured) / 賦權感 (Empowering) / 沉穩 (Calm)

**禁止出現（全站，無例外）**：
- 分數、星等、A-F 等級、成功率預測、可行性百分比
- 排行榜、遊戲化徽章
- 任何引發焦慮的數據分析 UI

### 色彩系統

| Token | 色值 | Tailwind Class | 用途 |
|-------|------|----------------|------|
| Primary | #1E3A5F | `bg-[#1E3A5F]` | 主品牌色，結構與深度 |
| Primary Hover | #162D4A | `hover:bg-[#162D4A]` | 主色 hover |
| Primary Light | #E8EEF5 | `bg-[#E8EEF5]` | 卡片高亮背景 |
| Secondary | #2D7D8A | `bg-[#2D7D8A]` | 引導與互動元素 |
| Secondary Hover | #236269 | `hover:bg-[#236269]` | 次色 hover |
| Accent | #E8913A | `bg-[#E8913A]` | CTA 按鈕，行動賦權 |
| Accent Hover | #D07A2B | `hover:bg-[#D07A2B]` | Accent hover |
| Accent Light | #FEF3E2 | `bg-[#FEF3E2]` | 行動提示區背景 |
| Verified | #2D9D78 | `bg-[#2D9D78]` | 已驗證狀態 |
| Verified Light | #E6F5EF | `bg-[#E6F5EF]` | 驗證狀態背景 |
| Caution | #D97706 | `bg-[#D97706]` | 需補充資訊 |
| Error | #DC2626 | `bg-[#DC2626]` | 系統錯誤（僅限） |
| BG Page | #F7F8FA | `bg-[#F7F8FA]` | 頁面底色 |
| BG Surface | #FFFFFF | `bg-white` | 卡片 / 容器底色 |
| BG Muted | #F1F3F5 | `bg-[#F1F3F5]` | 次要區塊背景 |
| Text Primary | #1A2332 | `text-[#1A2332]` | 主要文字 |
| Text Secondary | #5C6B7A | `text-[#5C6B7A]` | 次要說明文字 |
| Text Muted | #8E99A4 | `text-[#8E99A4]` | 輔助文字、時間戳 |
| Border Default | #DFE3E8 | `border-[#DFE3E8]` | 預設邊框 |
| Border Focus | #2D7D8A | `focus:border-[#2D7D8A]` | 聚焦邊框 |

### 字體系統

| Token | 字級 | 行高 | 字重 | 用途 |
|-------|------|------|------|------|
| H1 | 28px | 1.3 | 700 | 頁面標題 |
| H2 | 22px | 1.3 | 600 | 區塊標題 |
| H3 | 18px | 1.4 | 600 | 小標題 |
| Body LG | 17px | 1.7 | 400 | 長文閱讀 |
| Body MD | 15px | 1.6 | 400 | 標準段落 |
| Body SM | 13px | 1.5 | 400 | 輔助說明 |
| Caption | 12px | 1.4 | 400 | 時間戳、metadata |
| Code | 14px | 1.5 | 400 | 結構化欄位值 |

- 中文：Noto Sans TC　/ 英文：Inter　/ 等寬：JetBrains Mono

### 間距、圓角、陰影

| Token | 值 | 用途 |
|-------|-----|------|
| Radius SM | 4px | Tag、Badge |
| Radius MD | 8px | 按鈕、輸入框 |
| Radius LG | 12px | 痛點卡片、容器面板 |
| Radius XL | 16px | Modal、大型面板 |
| Shadow SM | 0 1px 3px rgba(30,58,95,0.06) | 卡片預設 |
| Shadow MD | 0 4px 8px rgba(30,58,95,0.08) | 懸浮卡片 |
| Shadow LG | 0 12px 24px rgba(30,58,95,0.12) | Modal |
| Border | 1px solid #DFE3E8 | 預設邊框 |
| Border Active | 2px solid #2D7D8A | 選中 / 聚焦 |

### 斷點與 Grid

| 斷點 | 範圍 | 欄數 | Padding |
|------|------|------|---------|
| Mobile | < 768px | 1 | 16px |
| Tablet | 768–1200px | 2 | 24px |
| Desktop | > 1200px | 12 | 32px |

最大寬度 1200px；欄間距 20px。

### 技術棧

React 18 + TypeScript + Tailwind CSS / Zustand + React Query / React Hook Form + Zod / Supabase (Auth + PostgreSQL + Edge Functions + Realtime) / Vercel / OpenAI API via Edge Functions

### 重要規範

- 本區段為最高準則，不允許被覆蓋
- 除非 EXCEPTION RULES 明確聲明，否則禁止違反
- 禁止 Inline styles（全部 Tailwind utility classes）
- 禁止過度動畫（僅允許 transition-colors、transition-shadow、微妙 translate）
- 禁止任何評分 UI（star rating、slider score、progress percentage 用於評價）
- 禁止未經 Zod schema 驗證的 AI 回應直接渲染

---

## === CURRENT TASK: BUILD ONE PAGE ===

本次任務：根據上方 Global Guideline，設計並實作「Disruption Mapper（破壞式 GTM 策略設計）」頁面。

### [PAGE META]

- **page_name**: Disruption Mapper (破壞式GTM策略設計)
- **route_path**: `/disruption`
- **page_type**: workflow (multi-step interactive)
- **primary_goal**: 將 Clayton Christensen 的破壞式創新框架操作化為可執行的 GTM 策略，讓使用者從結構化問題出發，產出一份可帶入 FirstDollar Sprint 的 GTM 一頁紙
- **secondary_goal**: 透過不對稱動機檢驗，幫使用者識別大公司不願回應的切入角落，降低盲目進入紅海的風險
- **target_users**:
  - 主要：已完成 Essence Decomposer 且有經驗證問題主題的使用者（阿傑、David、Vivian 類型）
  - 次要：從 Pain Atlas 發現藍海機會、想設計 GTM 策略的探索型使用者
- **entry_point**: Essence Decomposer 完成後的 CTA「進入破壞式分析」 / Pain Atlas 藍海區域的「設計切入策略」 / 左側導航「破壞式 GTM」
- **expected_time_on_page**: 15-40 分鐘（完整五步流程）；5-10 分鐘（跳步使用者）

---

### [STRUCTURE: SECTIONS]

頁面由以下 7 個 Section 構成（由上至下）：

1. **step_indicator** — 水平步驟指示器（固定於內容區頂部，不隨頁面捲動）
2. **step_1_disruption_detector** — 破壞機會類型辨識（低端破壞 vs 新市場破壞）
3. **step_2_strategy_canvas** — 可拖曳 Strategy Canvas（核心視覺化工具）
4. **step_3_minimum_disruptive_product** — 最小破壞性產品設計（3 必做 + 不做清單 + 手工交付 + Unit Economics）
5. **step_4_asymmetric_motivation** — 四個 Yes/No 不對稱動機檢查點
6. **step_5_gtm_playbook** — AI 生成 GTM 一頁紙 + FirstDollar 一鍵交接
7. **failure_mode_protections** — 情境化 Toast / InlineWarning（浮動，不佔版面）

---

### [SECTION COMPONENT SPEC]

#### Section 1: step_indicator

- **layout**: 全寬水平排列，固定於內容區頂部（sticky，不捲動）
- **elements**:
  - `step_circles`: StepCircle × 5，標記步驟編號與名稱：
    - Step 1: 破壞機會辨識 / Step 2: Strategy Canvas / Step 3: 最小破壞性產品 / Step 4: 不對稱動機檢驗 / Step 5: GTM 一頁紙
  - `step_connectors`: ConnectorLine × 4（步驟間連接線）
  - `step_labels`: Caption，每步驟下方
  - `skip_hint`: Tooltip（Hover 時顯示「可跳過此步驟」）
- **states**:
  - `default`: 當前步驟高亮 Primary 色，已完成步驟打勾（Verified Green），未完成灰色
  - `hover`: 節點可點擊，Hover 顯示步驟摘要 Tooltip（≤30 字）
  - `completed`: 圓圈內顯示勾選圖示，連接線變 Verified Green
  - `active`: 當前步驟圓圈放大 + subtle pulse 動畫
  - `skipped`: 虛線邊框，標記「已跳過」
- **copy**: 步驟名稱 ≤10 字；Tooltip ≤30 字
- **Mobile**: 改為緊湊進度條 + 步驟名稱輪播

#### Section 2: step_1_disruption_detector

- **layout**: 單欄，上方 AI 分析結果卡片，下方使用者確認/修改區
- **elements**:
  - `section_title`: H2 — "Step 1：辨識破壞機會"
  - `problem_context_card`: Card — 顯示從 Essence Decomposer 帶入的結構化問題摘要（問題一句話 + 目標族群 + 現行替代方案）
  - `ai_detection_banner`: Banner — AI 自動偵測結果（例：「你的問題有低端破壞信號 — 要分析嗎？」）
  - `disruption_type_selector`: RadioGroup — 兩選項：
    - 低端破壞（Overserved Customers）：「現有客戶被過度服務，付太多錢用太複雜的工具」
    - 新市場破壞（Non-Consumers）：「想要但買不起或不知道怎麼用的非消費者」
  - `evidence_list`: EvidenceCard[] — AI 從結構化痛點提取的破壞信號證據（信號類型 + 來源資料 + 信心標記）
  - `pain_atlas_cross_ref`: CollapsiblePanel（可選）— Pain Atlas 交叉比對
  - `disruption_opportunity_card`: OutputCard — 破壞機會卡片（破壞模式 + 目標族群 + 現行替代方案 + 下一步）
  - `next_action_cta`: Button Primary — "繼續到 Strategy Canvas"
  - `socratic_dialogue`: ChatBubble[]（可選）— AI 蘇格拉底式追問
- **states**:
  - `loading`: problem_context_card 顯示 Skeleton；Banner 顯示「正在分析你的痛點結構...」
  - `empty`: 顯示「請先完成問題本質拆解，或手動輸入問題描述」+ CTA 導向 Essence Decomposer
  - `error`: 友善訊息 + 重試按鈕 + 手動填寫 fallback
  - `modified`: 使用者修改 AI 建議後，卡片右上角顯示「已手動調整」標記
- **copy**: AI Banner ≤40 字；每條證據 ≤60 字；破壞機會卡片 ≤150 字

#### Section 3: step_2_strategy_canvas

- **layout**: 全寬互動圖表區 + 右側控制面板（Desktop）；Tablet 控制面板改為底部抽屜；Mobile 橫向捲動圖表 + 底部數值滑桿
- **elements**:
  - `section_title`: H2 — "Step 2：Strategy Canvas（策略圖）"
  - `canvas_chart`: InteractiveChart（核心元件）：
    - `x_axis`: 功能維度（6-10 個），可拖曳排序 / 新增 / 刪除
    - `y_axis`: 表現水準（低 / 中 / 高），連續可拖曳
    - `incumbent_curve`: PolyLine（現有玩家，AI 預填，可拖曳調整節點）
    - `user_curve`: PolyLine（使用者差異化曲線，AI 建議初始位置，使用者拖曳）
    - `curve_legend`: Legend（曲線名稱 + 顏色對應）
  - `factor_management_panel`: Panel — 功能維度管理（DraggableList + 新增輸入 + 刪除按鈕 + AI 建議按鈕）
  - `strategic_no_panel`: Panel — 「刻意不做」面板（自動從 user_curve 低於中線節點生成 TagList + 理由輸入）
  - `canvas_summary`: OutputCard — AI 即時差異化摘要（隨拖曳即時更新，≤80 字）
  - `socratic_prompts`: InlinePrompt[]（可選）— 引導問題浮在 Canvas 旁
  - `next_action_cta`: Button Primary — "繼續到最小產品設計"
- **states**:
  - `loading`: Canvas 顯示 Skeleton 框架 + 「AI 正在分析行業競品曲線...」
  - `hover`: 節點 Hover 放大 + Tooltip；功能維度 Hover 顯示定義
  - `dragging`: 顯示吸附參考線 + 即時更新 canvas_summary（< 500ms）
  - `empty`: 無資料時顯示空白 Canvas + 引導「先設定功能維度」
  - `error`: 降級為可編輯文字表格（文字版 Canvas）
- **copy**: 功能維度名稱 2-6 字；差異化摘要 ≤80 字；「不做」理由 ≤40 字

#### Section 4: step_3_minimum_disruptive_product

- **layout**: 上方「只做三件事」卡片區，下方不做清單 + 手工交付設計區 + Unit Economics
- **elements**:
  - `section_title`: H2 — "Step 3：最小破壞性產品"
  - `must_do_cards`: EditableCard × 3（硬限制）— 每張含：功能名稱 TextInput + Canvas 對應維度 Badge + 描述 TextArea + AI 建議 CollapsibleHint
  - `must_do_limit_warning`: InlineWarning — 嘗試新增第四張時觸發：「三件事是硬限制。要加新的，請先砍一個。」
  - `dont_do_list`: EditableList — 從 Canvas strategic_no_panel 自動帶入，可新增/修改
  - `dont_do_count_check`: InlineValidation — 不做清單 ≤ 必做清單時顯示：「你的不做清單比要做清單短 — 你砍得不夠。破壞者的力量來自不做什麼。」
  - `manual_delivery_section`: Card — 手工交付設計：
    - `prompt_text`: Body — 「如果今晚就要做一次給 1 個人，具體步驟是什麼？（不能包含『寫程式』『做 App』）」
    - `steps_input`: NumberedTextArea（1-5 步）
    - `tech_filter_warning`: InlineWarning（可選）— 偵測技術用語時觸發：「手工版必須不含技術。如果手動交付做不到，範圍太大了。」
  - `unit_economics_card`: Card — Unit Economics 框算：
    - `revenue_input`: NumberInput（每單收入 NT$）
    - `cost_input`: NumberInput（每單成本 NT$，含時間成本）
    - `margin_display`: Calculated — 即時毛利計算 + 正負指示
    - `margin_warning`: InlineWarning（可選）— 毛利 ≤ 0 時：「毛利不是正的 = 不是生意。調整定價或砍成本。」
  - `next_action_cta`: Button Primary — "繼續到不對稱動機檢驗"
- **states**:
  - `loading`: 卡片 Skeleton + 「基於你的 Canvas 生成中...」
  - `hover`: Hover 時高亮對應 Canvas 維度
  - `empty`: 未完成 Step 2 時顯示引導 + 返回 Step 2 CTA
  - `error`: AI 失敗時顯示空白可編輯卡片 + 手動填寫引導
  - `validation_error`: 必填未填時邊框變紅 + 提示
- **copy**: 功能名稱 ≤15 字；功能描述 ≤50 字；手工交付每步 ≤60 字

#### Section 5: step_4_asymmetric_motivation

- **layout**: 單欄四個檢查點卡片垂直堆疊，底部評估結果面板
- **elements**:
  - `section_title`: H2 — "Step 4：不對稱動機檢驗"
  - `intro_text`: Body — 「破壞成功的原因不是你有多強，而是大公司不想回應。以下四個問題幫你驗證這件事。」
  - `checkpoint_cards`: CheckpointCard × 4（含 Yes/No Toggle + AI 解釋 Collapsible + 「需要驗證」標記）：
    - Q1: "既有玩家會覺得這市場太小嗎？" / Yes = Safe / No = Warning
    - Q2: "你的毛利結構他們不想要嗎？" / Yes = Safe / No = Warning
    - Q3: "這需要他們放棄現有客戶嗎？" / Yes = Safe / No = Warning
    - Q4: "他們的組織流程能快速轉向嗎？" / No = Safe / Yes = Warning
  - `result_panel`: ResultPanel — 即時統計（Safe 數 + Warning 數），動態結果訊息：
    - 4 Safe：「強不對稱動機。大公司大概率不回應，放心進入 GTM。」
    - 3 Safe：「可行，但需要速度優勢。盡快拿到第一塊錢。」
    - 2 Safe：「你的護城河可能不夠 — 考慮調整策略。」+ 返回 Step 1 CTA
    - ≤1 Safe：「這不是破壞式機會。建議回到 Step 1 重新選擇目標族群。」+ 強調返回 CTA
  - `proceed_note`: Caption — 「這不是分數。這是四個可驗證的事實問題。每一個都可以透過訪談或觀察來證實或證偽。」
  - `next_action_cta`: Button Primary — "生成 GTM 一頁紙"（≥3 Safe 時啟用）
  - `adjust_strategy_cta`: Button Secondary（可選）— <3 Safe 時顯示：「調整策略後重新檢驗」
- **states**:
  - `default`: 四張卡片未選擇，result_panel 隱藏
  - `partial`: 部分已回答，result_panel 顯示當前統計但標記「未完成」
  - `completed_pass`: ≥3 Safe，result_panel 綠色背景，next_action_cta 啟用
  - `completed_warn`: <3 Safe，result_panel 橙色背景 + 調整建議
  - `hover`: 卡片 Hover 展開 AI 解釋預覽
  - `loading`: AI 解釋生成中顯示 Skeleton（Yes/No Toggle 不依賴 AI，仍可用）
  - `error`: AI 解釋載入失敗時，卡片 Yes/No 功能仍正常
- **copy**: 每問題 ≤25 字；AI 解釋 ≤100 字；結果訊息 ≤40 字

#### Section 6: step_5_gtm_playbook

- **layout**: 左側 GTM 一頁紙（可編輯）+ 右側 FirstDollar Handoff 面板（Desktop）；Mobile / Tablet 上下堆疊
- **elements**:
  - `section_title`: H2 — "Step 5：GTM 一頁紙 + FirstDollar 交接"
  - `gtm_document`: EditableDocument（AI 生成，七個可編輯區段）：
    - `problem_essence`: TextArea（問題本質，一句話，≤50 字，從前序帶入）
    - `target_segment`: TextArea（目標族群，具體到可打電話，≤100 字）
    - `disruption_strategy`: Card（破壞式切入策略：只做 + 不做 + 為什麼大公司不跟進）
    - `minimum_product`: Card（最小產品：手工交付版 + 價格）
    - `first_10_customers`: EditableList × 10（每條：名字或描述 + 聯絡管道，每條 ≤40 字）
      - `concrete_check`: InlineValidation — 少於 3 條具體名字/管道時警告：「首批 10 個客戶需要具體的名字和聯繫管道」
    - `validation_plan_72h`: EditableList（Day 1 / Day 2 / Day 3 各一行，每天 ≤60 字）
    - `moat_design`: Card（護城河：短期 0-6月 / 中期 6-12月 / 長期 12月+）
  - `gtm_next_action`: Callout（Accent Light 背景）— 「你的下一步是：[具體動作]」
  - `firstdollar_handoff_panel`: Panel — FirstDollar 交接：
    - `handoff_preview`: PreviewCard — 傳送資料摘要（Sprint 題目 + 10 人清單種子 + 手工交付 + 定價建議）
    - `handoff_btn`: Button Primary — "一鍵交接到 FirstDollar 72h Sprint"
    - `handoff_description`: Caption — 「系統會自動將你的結構化問題、GTM 策略和前 10 位客戶資料打包，作為 FirstDollar Sprint 的初始化輸入。」
  - `export_options`: ButtonGroup（可選）— 下載 PDF / 複製 Markdown / 分享連結
- **states**:
  - `loading`: 逐區段生成動畫（「正在生成 GTM 策略...」，各段依序出現）
  - `hover`: 可編輯區段 Hover 顯示「點擊編輯」提示
  - `empty`: 前序步驟未完成時，各區段顯示佔位符 + 引導「完成 Step 1-4 以生成完整 GTM」
  - `error`: AI 失敗時顯示空白可編輯模板 + 手動填寫引導
  - `validation_warning`: first_10_customers 不足 3 具體名字時，handoff_btn 禁用 + 警告
  - `handoff_success`: 交接完成後顯示 Success Banner + FirstDollar Sprint 連結
  - `handoff_error`: 交接失敗時顯示重試按鈕 + 手動匯出 fallback
- **copy**: 整份 GTM 文件以 A4 一頁為限

#### Section 7: failure_mode_protections

- **layout**: 浮動 Toast / 底部 Snackbar，情境觸發，不占固定版面空間
- **elements**:
  - `analysis_paralysis_warning`: Toast — 觸發：Step 2 Canvas 調整超過 15 次或停留超過 10 分鐘。訊息：「Canvas 不需要完美，需要出發。你已經 80% 了。」
  - `vague_gtm_warning`: InlineWarning — 觸發：Step 5 first_10_customers 缺乏具體名字。訊息：「首批 10 個客戶需要具體的名字和聯繫管道。」
  - `scope_too_big_warning`: InlineWarning — 觸發：Step 3 手工交付包含技術用語或步驟超過 5 步。訊息：「如果手動交付做不到，範圍太大了。試著砍到 3 步以內。」
  - `skip_step4_warning`: Toast — 觸發：使用者嘗試跳過 Step 4 直接進 Step 5。訊息：「建議完成不對稱動機檢驗 — 這是判斷大公司會不會打你的關鍵步驟。確定跳過？」+ 確認/返回按鈕
  - `encouragement_nudge`: Toast — 觸發：任何步驟停滯超過 5 分鐘。訊息：「不確定也沒關係。先填你知道的，之後隨時可以回來修改。」
  - `dismiss_btn`: IconButton(X) — 所有 Toast / Warning 均可手動關閉
- **states**:
  - `hidden`: 預設，等待觸發條件
  - `visible`: 從螢幕邊緣滑入，8 秒後自動消失（使用者互動則保留）
  - `dismissed`: 手動關閉後，同一觸發條件本 session 不再重複
- **copy**: Toast ≤40 字；InlineWarning ≤50 字

---

### [INTERACTION & STATE FLOW]

**主要互動流程**：

1. 頁面載入 → 讀取從 Essence Decomposer 帶入的結構化問題資料 → 渲染 Step Indicator（Step 1 高亮）
2. Step 1：AI 分析 → 使用者確認破壞類型 → 產出破壞機會卡片
3. Step 2：AI 預填 Canvas → 使用者拖曳調整 → 差異化摘要即時更新 → 標記「刻意不做」
4. Step 3：Canvas 自動生成 3 張必做卡 + 不做清單 → 使用者編輯 → 填手工交付 → 框算 Unit Economics
5. Step 4：回答 4 個 Yes/No → 即時評估 → ≥3 Safe 進 Step 5 / <3 Safe 建議調整
6. Step 5：AI 生成 GTM 一頁紙 → 編輯前 10 位客戶 → 一鍵交接 FirstDollar
7. 任意步驟：點擊 Step Indicator 已完成步驟 → 回退，已填內容保留
8. 跳步：點擊未完成後續步驟 → 直接跳入（Step 4 跳過觸發 skip_step4_warning）

**自動儲存**：
- 每次失去焦點（blur）或每 30 秒自動儲存 draft
- 頁面重載恢復最後儲存步驟與狀態
- Step Indicator 短暫顯示「已儲存」微提示

**前後步驟資料傳遞**：
- 前步驟輸出即時傳遞到下一步驟
- 修改前步驟內容時，後續步驟標記「資料已變更，是否重新生成？」
- AI 生成內容非自動更新，需手動觸發「重新生成」

---

### [DATA & API]

- **endpoints**:
  - `GET /api/disruption/context/{problemId}` — 取得 Essence Decomposer 帶入的結構化問題資料
  - `POST /api/disruption/detect` — Step 1：AI 分析破壞機會類型
  - `GET /api/pain-atlas/cross-ref/{problemId}` — Step 1：Pain Atlas 交叉比對
  - `POST /api/disruption/canvas/generate` — Step 2：AI 生成 Canvas 初始資料
  - `PUT /api/disruption/canvas/{canvasId}` — Step 2：儲存使用者調整後 Canvas
  - `POST /api/disruption/minimum-product/generate` — Step 3：生成必做/不做清單
  - `PUT /api/disruption/minimum-product/{productId}` — Step 3：儲存最小產品設計
  - `POST /api/disruption/asymmetric-check` — Step 4：AI 生成檢查點解釋
  - `POST /api/disruption/gtm/generate` — Step 5：AI 生成 GTM 一頁紙
  - `PUT /api/disruption/gtm/{gtmId}` — Step 5：儲存 GTM 文件
  - `POST /api/disruption/handoff/firstdollar` — Step 5：打包 GTM 資料交接 FirstDollar
  - `PUT /api/disruption/draft/{sessionId}` — 自動儲存 session 草稿
  - `GET /api/disruption/draft/{sessionId}` — 恢復草稿

- **error_cases**:
  - 網路錯誤：顯示離線提示 + 本地快取已填資料 + 恢復連線後自動同步
  - AI 生成失敗：降級為空白可編輯模板 + 手動填寫引導 + 重試按鈕
  - 權限不足（Free 方案）：Step 3 開始前顯示升級提示 + 功能預覽
  - Handoff 失敗：提供手動匯出（PDF / Markdown）fallback
  - 結構化問題資料不存在：導向 Essence Decomposer 或提供手動輸入入口

- **效能目標**:
  - 頁面首次載入 < 3 秒（含 AI 偵測結果）
  - Step 1 AI 偵測 ≤ 10 秒回傳
  - Step 2 差異化摘要即時更新 < 500ms
  - Step 5 GTM 生成 ≤ 30 秒（超過 3 秒顯示逐步驟文字進度）

---

## === EXCEPTION RULES ===

本頁面允許的例外（依據 `04_disruption_mapper.md` [EXCEPTION TO GLOBAL RULES]）：

1. **Strategy Canvas 使用全寬佈局**：不受 Grid 最大寬度 1200px 限制。原因：Canvas 需要足夠的水平空間以提供完整的拖曳操作體驗。
2. **Mobile 端 Canvas 使用橫向捲動**：違反一般禁止橫向捲動的規則。原因：Canvas 需要完整功能維度軸線才可操作；改用底部數值滑桿替代拖曳。
3. **Failure Mode Protections 使用時間觸發 Toast**：全域 Toast 通常由使用者動作觸發，本頁面新增基於停留時間的被動觸發機制。原因：防止分析癱瘓的體驗設計需求。
4. **Step 4 產出 Safe/Warning 統計數字（如 3/4 Safe）**：雖然呈現數值，但這不是 idea score，而是四個可驗證事實問題的彙整。原因：符合反焦慮設計紀律，`proceed_note` 必須明確說明「這不是分數」。

---

## === OUTPUT REQUIREMENTS ===

請依照以下步驟輸出：

### Step 1: 結構確認

列出本頁面的：
- 7 個 sections 及其用途（step_indicator → step_1 → step_2 → step_3 → step_4 → step_5 → failure_mode_protections）
- 每個 section 的關鍵元件清單
- 資料流策略：Essence Decomposer → 逐步驟傳遞 → GTM → FirstDollar Handoff
- 狀態管理：Zustand 管理五步驟進度與草稿狀態；React Query 管理 AI 生成 API 請求

### Step 2: 設計決策說明

說明以下 3 個關鍵設計決策：

1. **Strategy Canvas 互動方案**：為何選擇可拖曳曲線 + 滑桿降級方案（Desktop 拖曳 / Mobile 滑桿）而非靜態圖表，以及如何確保差異化摘要 < 500ms 即時更新
2. **Step 4 反焦慮設計**：如何在呈現 Safe/Warning 統計的同時，透過 `proceed_note` 文案、色彩選擇（Verified Green / Caution，非 Error Red）和語言框架確保不製造評分焦慮
3. **五步驟流程的跳步與回退策略**：如何在保持彈性（可跳步）的同時，透過 Step 4 警告機制確保使用者不忽略關鍵檢驗點

### Step 3: 實作方案

**Option A: 完整程式碼**（推薦用於 Lovable）

```tsx
// 輸出完整的 React + TypeScript + Tailwind CSS 實作
// 頁面入口：src/pages/DisruptionMapper.tsx
// 必包含以下元件結構：
//
// src/
// ├── pages/
// │   └── DisruptionMapper.tsx          # 頁面容器，管理步驟狀態
// ├── components/disruption/
// │   ├── StepIndicator.tsx             # 五步驟水平指示器
// │   ├── DisruptionDetector.tsx        # Step 1
// │   ├── StrategyCanvas.tsx            # Step 2（含拖曳邏輯）
// │   ├── MinimumDisruptiveProduct.tsx  # Step 3
// │   ├── AsymmetricMotivation.tsx      # Step 4
// │   ├── GTMPlaybook.tsx               # Step 5
// │   └── FailureModeProtections.tsx    # 全局 Toast 管理
// ├── stores/
// │   └── disruptionStore.ts            # Zustand — 步驟進度 + 草稿狀態
// ├── hooks/
// │   ├── useDisruptionDetect.ts        # React Query — Step 1 AI 分析
// │   ├── useStrategyCanvas.ts          # React Query — Step 2 Canvas 生成/儲存
// │   ├── useMinimumProduct.ts          # React Query — Step 3 生成/儲存
// │   ├── useAsymmetricCheck.ts         # React Query — Step 4 AI 解釋
// │   ├── useGTMGenerate.ts             # React Query — Step 5 GTM 生成
// │   └── useAutoSave.ts               # 30秒自動儲存 + blur 觸發
// └── schemas/
//     └── disruption.schemas.ts         # Zod — 所有 AI 回應 schema
//
// 所有 AI 回應必須先通過對應 Zod schema 驗證再渲染
// Canvas 拖曳使用 @dnd-kit/core；Mobile 滑桿降級使用 shadcn/ui Slider
// 色彩嚴格遵循 GLOBAL GUIDELINE 色彩 Token 表
```

---

### 品質檢查清單

- [ ] 色彩系統一致性（所有色值來自 Global Token 表，無硬編碼色值）
- [ ] 字體層級正確（H1-H2-H3-Body-Caption 階梯清晰）
- [ ] 元件風格統一（Radius / Shadow / Border 遵循 Token）
- [ ] 響應式設計完整（Desktop > 1200px / Tablet 768-1200px / Mobile < 768px 三斷點）
- [ ] 所有 Section 的三態完備（Loading Skeleton / Error 友善訊息 / Empty 引導行動）
- [ ] 無障礙支援（Tab 順序 + Focus ring Teal #2D7D8A + Enter 觸發主按鈕 + Escape 關閉 Modal + ARIA labels）
- [ ] 所有 AI 輸出以「你下一步該做什麼」作結（US-041）
- [ ] 全頁面無 idea score / 可行性分數 / 成功率預測（US-040）
- [ ] 使用「問題」「痛點」語言框架，不出現「idea」「點子」（US-042）
- [ ] Step 4 proceed_note 明確聲明「這不是分數」
- [ ] Strategy Canvas 差異化摘要更新 < 500ms
- [ ] 自動儲存每 30 秒 + 步驟切換時觸發
- [ ] 所有 AI 回應通過 Zod schema 驗證再渲染
- [ ] Failure Mode Toast 同 session 不重複觸發
- [ ] Step 3 必做卡片硬限制 3 張
- [ ] Step 5 Handoff 前 10 客戶 < 3 具體名字時 handoff_btn 禁用
- [ ] Mobile Canvas 使用滑桿替代拖曳，橫向捲動符合 Exception Rule 2

---

**執行優先順序**：
1. Global 規範為最高優先級（顏色、字體、元件風格、禁令）
2. Page 特定需求次之（五步流程、Canvas 互動、GTM 生成）
3. Exception Rules 最小化，且須在實作中明確標註對應規則編號

**版本資訊**：
- Global System Prompt 版本：v1.0
- Assembly 日期：2026-04-09
- 來源：`global/painmap_brand_system.md` v1.0 + `pages/painmap/04_disruption_mapper.md`
- 負責人：sunny baby
