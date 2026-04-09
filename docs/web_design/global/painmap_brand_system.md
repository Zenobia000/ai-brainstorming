# PainMap (題眼) Brand Design System

> 此文件為 PainMap 的全站設計靈魂，所有 Page-Level Prompt 均以此為基石。
> 基於 `BASE_DESIGN_SYSTEM.md` 四層架構實作。

---

## [GLOBAL ROLE]

你是「PainMap 題眼」的資深產品架構師與全端開發架構師。你負責確保所有 AI 生成的網頁符合以下品牌特質：

- **結構化 (Structured)** — 將混亂的痛點訊號轉化為清晰的問題格式
- **賦權感 (Empowering)** — 引導使用者行動，而非被動分析
- **沉穩 (Calm)** — 消除焦慮，拒絕遊戲化與評分機制

你負責維護全站的：
- 資訊架構 (IA) 規劃與視覺一致性
- UI Pattern 統一性與設計系統 (Design System) 實施
- 互動與狀態設計的標準化 (Loading, Error, Empty states)
- 技術實作可行性評估
- 高資訊密度 (High Information Density) 的介面決策

### 絕對禁令 (CRITICAL)

以下元素在任何頁面、元件、文案中皆**禁止出現**：
- 分數 (scores)、星等 (star ratings)、A-F 等級 (grades)
- 成功率預測、可行性百分比
- 排行榜 (leaderboards)、遊戲化徽章 (badges)
- 任何引發焦慮的數據分析 UI

---

## [PRODUCT CONTEXT LAYER]

- **產品名稱**：PainMap 題眼
- **產品一句話**：結構化痛點引擎 — 幫助有能力的人發現並驗證值得解決的問題。
- **目標用戶**：
  - 主要：
    - **Aji**（獨立開發者）— 有技術能力但痛點來源零散，需要結構化框架
    - **Shufen**（電商賣家）— 接觸大量客戶反饋但無法系統化提煉問題
    - **Vivian**（成長 PM）— 需要從市場訊號中提煉可執行的問題定義
  - 次要：
    - **Kai**（內容創作者）— 從觀眾互動中辨識真實需求
    - **David**（UX 顧問）— 需要結構化方法論來組織客戶訪談洞察
- **核心價值主張**：將散落各處的痛點訊號（客戶抱怨、市場觀察、個人經歷）轉化為經過結構驗證的「問題格式」，讓使用者從「我覺得有問題」走向「我知道問題是什麼、值不值得解」。
- **網站類型**：SaaS 產品（參考 `references/website_recipes.md` → Type 8 SaaS）
- **啟用模組**（參考 `modules/WEBSITE_MODULE_MATRIX.md`）：
  - Identity 🔴 L3（角色權限 + 訂閱狀態 + 使用量追蹤）
  - Content 🟡 L1（Landing page + Blog + 使用指南）
  - Commerce 🟠 L2（訂閱制 + 方案升級 + 付款整合）
  - Delivery 🔴 L3（Pain Collector + Essence Decomposer + Disruption Mapper + Pain Atlas）
  - Community 🟡 L1（Pain Atlas 社群痛點庫 + 匿名貢獻）
  - Growth 🟠 L2（SEO + Email 自動化 + 使用分析）
  - Admin 🟠 L2（使用者管理 + 內容審核 + 營運報表）
  - Infrastructure 🔴 L3（Supabase + Vercel + Edge Functions + 即時同步）
- **主要任務流**：
  1. **收集 → 結構化**：匯入原始文字（截圖、筆記、對話），Pain Collector 將其轉化為結構化痛點卡片
  2. **分解 → 驗證**：Essence Decomposer 以四個物理量（頻率、強度、可觸及性、替代方案）驗證痛點本質
  3. **映射 → 行動**：Disruption Mapper 用 Christensen 破壞式創新框架產出 GTM 策略，每個輸出必附可執行的下一步
  4. **沉澱 → 社群**：經驗證的痛點沉入 Pain Atlas 社群庫，形成集體智慧閉環

---

## [BRAND & VOICE LAYER]

### 設計原則

| # | 原則 | 說明 | 當衝突時 |
|---|------|------|---------|
| 1 | 結構優於裝飾 (Structure over Decoration) | 每個 UI 元素都必須服務於「幫使用者釐清問題」的目的 | 砍裝飾性動畫，保結構化呈現 |
| 2 | 行動優於分析 (Action over Analysis) | 每個畫面結束時，使用者必須知道下一步做什麼 | 減少分析圖表，增加行動引導 |
| 3 | 證據優於意見 (Evidence over Opinion) | 用具體案例和結構化數據支撐，不用主觀評分 | 顯示原始證據來源，而非衍生分數 |
| 4 | 社群優於孤立 (Community over Isolation) | 鼓勵痛點共享與集體驗證，而非獨自判斷 | 優先顯示社群驗證狀態，而非個人分析 |

### 品牌性格

| 維度 | 我們是 | 我們不是 |
|------|--------|---------|
| 語氣 | 沉穩、賦權、結構化 | 焦慮催促、遊戲化激勵 |
| 視覺 | 清晰、溫暖、有層次 | 花俏、資訊爆炸、冷冰冰 |
| 態度 | 引導探索、容許不確定 | 給答案、打分數、排名次 |
| 立場 | 你的問題值得被認真對待 | 我們幫你評估你的想法好不好 |

### 文案規則

- **稱呼用戶**：「你」
- **核心用詞紀律**：
  - 使用「問題」「痛點」— 絕不使用「點子」「idea」「靈感」
  - 使用「結構化」「釐清」「驗證」— 絕不使用「評分」「打分」「排名」
  - 使用「下一步」「可執行動作」— 絕不使用「成功率」「可行性分數」
- **按鈕動詞**：主動語態 —「開始整理」「匯入痛點」「驗證這個問題」「查看下一步」
- **錯誤訊息**：先說發生什麼，再說怎麼修 —「匯入失敗，請確認文字長度在 5000 字以內」
- **空狀態**：引導行動而非顯示空白 —「還沒有任何痛點，從你最近的一個困擾開始吧」
- **AI 輸出鐵律**：所有 AI 生成的內容必須以「可執行的下一步」作結，絕不以分析或摘要結尾
- **語言**：繁體中文 (zh-Hant) 為主，保留公認技術術語英文（如 GTM、PMF、Jobs-to-be-done）
- **禁用詞**：
  - 「點子」「idea」「靈感」「腦力激盪」（我們不是想法產生器）
  - 「評分」「打分」「星等」「等級」「排名」（我們不做評判）
  - 「革命性」「極致體驗」「AI 智慧推薦」（空泛行銷話術）
  - 「可能」「大概」「也許可以」（模糊語言）

---

## [VISUAL DESIGN SYSTEM LAYER]

### Color Tokens

| Token | 色值 | Tailwind Class | 用途 |
|-------|------|----------------|------|
| Primary | #1E3A5F | `bg-[#1E3A5F]` | Deep Indigo — 結構與深度，主要品牌色 |
| Primary Hover | #162D4A | `hover:bg-[#162D4A]` | 主色 hover 狀態 |
| Primary Light | #E8EEF5 | `bg-[#E8EEF5]` | 主色淡化背景，卡片高亮 |
| Secondary | #2D7D8A | `bg-[#2D7D8A]` | Deep Teal — 清晰與引導，次要品牌色 |
| Secondary Hover | #236269 | `hover:bg-[#236269]` | 次色 hover 狀態 |
| Accent | #E8913A | `bg-[#E8913A]` | Warm Amber — 賦權與行動，CTA 按鈕 |
| Accent Hover | #D07A2B | `hover:bg-[#D07A2B]` | 強調色 hover |
| Accent Light | #FEF3E2 | `bg-[#FEF3E2]` | 強調色淡化背景，行動提示區 |
| Verified | #2D9D78 | `bg-[#2D9D78]` | Verified Green — 經驗證的痛點 |
| Verified Light | #E6F5EF | `bg-[#E6F5EF]` | 驗證狀態背景 |
| Caution | #D97706 | `bg-[#D97706]` | 需要更多資訊的痛點 |
| Error | #DC2626 | `bg-[#DC2626]` | 錯誤、操作失敗 |
| BG Page | #F7F8FA | `bg-[#F7F8FA]` | 頁面底色，微暖灰 |
| BG Surface | #FFFFFF | `bg-white` | 卡片 / 容器底色 |
| BG Muted | #F1F3F5 | `bg-[#F1F3F5]` | 次要區塊背景 |
| Text Primary | #1A2332 | `text-[#1A2332]` | 主要文字 |
| Text Secondary | #5C6B7A | `text-[#5C6B7A]` | 次要文字、說明文字 |
| Text Muted | #8E99A4 | `text-[#8E99A4]` | 輔助文字、時間戳 |
| Border Default | #DFE3E8 | `border-[#DFE3E8]` | 預設邊框 |
| Border Focus | #2D7D8A | `focus:border-[#2D7D8A]` | 聚焦邊框 (Teal) |

#### 配色哲學

- **主色 (Deep Indigo)** 傳達深度思考、結構化分析 — 不是冷冰冰的科技藍，而是有溫度的深藍
- **次色 (Deep Teal)** 傳達清晰、引導 — 用於導航、連結、互動元素
- **強調色 (Warm Amber)** 傳達行動力、賦權 — 僅用於 CTA 和需要使用者採取行動的元素
- **驗證綠 (Verified Green)** 專門標記已通過四物理量驗證的痛點 — 不是「成功」，是「已驗證」
- **避免大面積紅色** — 紅色僅用於系統錯誤，絕不用於痛點嚴重程度（這會產生焦慮）

### Typography

| Token | 字級 | 行高 | 字重 | 用途 |
|-------|------|------|------|------|
| Display | 36px | 1.2 | 700 | Hero 標題、Landing Page 主標 |
| H1 | 28px | 1.3 | 700 | 頁面標題 |
| H2 | 22px | 1.3 | 600 | 區塊標題、痛點卡片標題 |
| H3 | 18px | 1.4 | 600 | 小標題、欄位群組標題 |
| Body LG | 17px | 1.7 | 400 | 痛點描述、長文閱讀 |
| Body MD | 15px | 1.6 | 400 | 標準段落、表單標籤 |
| Body SM | 13px | 1.5 | 400 | 輔助說明、提示文字 |
| Caption | 12px | 1.4 | 400 | 時間戳、標註、metadata |
| Code | 14px | 1.5 | 400 | 原始匯入文字、結構化欄位值 |

- **中文字體**：Noto Sans TC（清晰、適合密集結構化資料）
- **英文字體**：Inter（現代、可讀性高、適合 UI 介面）
- **等寬字體**：JetBrains Mono（原始文字匯入、結構化數據顯示）

#### 排版哲學

- 痛點卡片內文字密度高，行高設為 1.6-1.7 確保可讀性
- 中文標題不超過 20 字，英文標題不超過 60 字元
- 結構化欄位使用等寬字體，與自然語言描述視覺區隔

### 元件風格

| Token | 值 | 用途 |
|-------|-----|------|
| Radius SM | 4px | Tag, Badge, 狀態標籤 |
| Radius MD | 8px | 按鈕、輸入框、小卡片 |
| Radius LG | 12px | 痛點卡片、容器面板 |
| Radius XL | 16px | Modal、大型面板 |
| Shadow SM | 0 1px 3px rgba(30,58,95,0.06) | 痛點卡片預設 |
| Shadow MD | 0 4px 8px rgba(30,58,95,0.08) | 懸浮卡片、Dropdown |
| Shadow LG | 0 12px 24px rgba(30,58,95,0.12) | Modal、大型 Overlay |
| Border | 1px solid #DFE3E8 | 預設邊框 |
| Border Active | 2px solid #2D7D8A | 選中 / 聚焦邊框 |

### RWD / Grid

| 屬性 | 值 |
|------|-----|
| 最大寬度 | 1200px |
| 欄數 | 12 |
| 欄間距 | 20px |
| 左右 Padding | 16px (Mobile) / 24px (Tablet) / 32px (Desktop) |
| Mobile | < 768px（1 欄，痛點卡片全寬堆疊） |
| Tablet | 768px - 1200px（2 欄，痛點卡片雙欄） |
| Desktop | > 1200px（12 欄，完整工作區佈局） |

---

## [UX PATTERN LAYER]

### 常用佈局 Pattern

- **Workspace (主工作區)**：頂部全域導航 + 左側痛點清單面板 (280px, 可收合) + 中間痛點詳情/編輯區 + 右側結構化分析面板 (320px, 按需展開)
- **Pain Collector (匯入流程)**：步驟指示器 (3 步驟) + 中央大面積文字輸入區 + 底部預覽列 + 右側即時結構化預覽
- **Pain Atlas (社群痛點庫)**：頂部搜尋 + 篩選標籤列 + 痛點卡片網格 (Masonry) + 側邊分類導航
- **Disruption Mapper (策略映射)**：左側痛點摘要 + 中間 Christensen 框架視覺化 + 右側行動方案面板 + 底部「下一步」行動區 (固定)
- **Dashboard (總覽)**：頂部歡迎區 + 近期痛點時間軸 + 待驗證痛點佇列 + 社群精選痛點

### 核心元件 — 痛點卡片 (Pain Card)

痛點卡片是整個產品最核心的 UI 元素：

```
+-----------------------------------------------+
|  [驗證狀態標籤]              [來源標籤] [時間] |
|                                                 |
|  痛點標題 (H3, Bold)                           |
|  痛點描述摘要 (Body MD, 2-3 行)                |
|                                                 |
|  ┌─ 四物理量 ──────────────────────────────┐   |
|  │ 頻率: ████░░  強度: █████░              │   |
|  │ 可觸及: ███░░░  替代方案: ██░░░░        │   |
|  └─────────────────────────────────────────┘   |
|                                                 |
|  [查看下一步 →]                                 |
+-----------------------------------------------+
```

- 四物理量以**條狀圖**呈現（非數字分數），僅表達相對程度
- 驗證狀態標籤：「待整理」(灰) / 「已結構化」(Teal) / 「已驗證」(Green) / 「需補充」(Amber)
- 每張卡片底部必有一個行動按鈕

### 狀態設計規則

| 狀態 | 規則 |
|------|------|
| Loading | Skeleton screen 優先，痛點卡片用 pulse 動畫佔位；長任務（AI 結構化）顯示步驟進度文字而非百分比 |
| Empty | 溫暖引導 + 具體行動建議 —「你的痛點庫還是空的。試試貼上一段你最近遇到的困擾？」+ CTA 按鈕 |
| Error | Teal 邊框提示區 + 具體錯誤說明 + 建議動作 + 重試按鈕（避免大面積紅色造成焦慮） |
| Disabled | 灰度 + tooltip 說明原因 —「完成上一步驗證後即可使用」 |
| Processing | AI 處理中使用步驟式文字提示 —「正在辨識痛點結構...」→「正在比對四物理量...」→「即將完成」 |

### 元件狀態定義（核心元件）

| 元件 | Variants | States |
|------|----------|--------|
| Button | Primary(Amber CTA) / Secondary(Teal) / Ghost / Danger | Default / Hover / Active / Disabled / Loading |
| Pain Card | Compact / Expanded / Atlas(社群) | Default / Hover(Teal border) / Selected / Verified(Green accent) |
| Input | Text / Textarea(大面積) / Search / Tag Input | Default / Focus(Teal ring) / Error / Disabled |
| Status Badge | 待整理 / 已結構化 / 已驗證 / 需補充 | Static (無互動狀態) |
| Action Footer | 固定底部行動區 | Default / Processing / Complete |

---

## [INTERACTION & ACCESSIBILITY]

- **Button/Link**：背景色加深 10% on Hover，Amber CTA 按鈕有微妙 scale(1.02) 效果
- **Pain Card**：Hover 時邊框變為 Deep Teal (#2D7D8A)，輕微上移 (-2px)，陰影加深至 Shadow MD
- **導航面板**：Desktop 預設展開，Mobile 預設收合，背景色 #FFFFFF 搭配左邊框 Teal 高亮
- **AI 處理回饋**：使用步驟式文字動畫（打字機效果），讓使用者感受到「正在思考」而非「卡住了」
- **錯誤訊息格式**：「[問題描述]。[建議動作]。」— 例：「文字超過上限。請將內容縮減至 5000 字以內，或分次匯入。」
- **鍵盤操作**：完整 Tab 順序 + Focus ring (Teal #2D7D8A) + Enter 觸發主按鈕 + Escape 關閉 Modal
- **無障礙**：
  - 所有顏色對比度 >= 4.5:1 (WCAG AA)
  - 痛點卡片四物理量條狀圖附帶 aria-label 文字描述
  - 語意化 HTML：痛點清單用 `<article>`，導航用 `<nav>`
  - 螢幕閱讀器友善：驗證狀態標籤包含完整文字而非僅顏色

---

## [TECH & CONSTRAINT LAYER]

- **技術棧**：
  - Frontend: React 18 + TypeScript + Tailwind CSS
  - State: Zustand (輕量全域狀態) + React Query (伺服器狀態)
  - Forms: React Hook Form + Zod (schema-based 驗證)
  - Rich Text: Tiptap (痛點描述編輯)
  - Backend: Supabase (Auth + PostgreSQL + Edge Functions + Realtime)
  - Hosting: Vercel (Edge Runtime + ISR)
  - AI: OpenAI API via Edge Functions (結構化輸出 + 痛點分解)
- **效能指標**：
  - 首次有效繪製 (FMP) < 1.5s
  - 互動響應 (FID) < 100ms
  - AI 結構化回應 < 5s（超過 3s 顯示步驟進度）
  - 痛點卡片列表虛擬捲動（> 50 張卡片時啟用）
- **禁用項目**：
  - 禁止 Inline styles（全部使用 Tailwind utility classes）
  - 禁止過度動畫（僅允許 transition-colors, transition-shadow, 微妙 translate）
  - 禁止任何評分/打分 UI 元件（包含 star rating, slider score, progress percentage 用於評價目的）
  - 禁止 console.log 殘留
  - 禁止未經 Zod schema 驗證的 AI 回應直接渲染

---

## [DATA PATTERN LAYER]

- **日期**：YYYY-MM-DD HH:mm（列表顯示相對時間：「3 小時前」「昨天」）
- **數字**：千分位逗號
- **痛點計數**：「12 個痛點」（非「12 痛點」）
- **四物理量**：以 5 段條狀圖呈現（低/偏低/中等/偏高/高），不顯示數字分數
- **貨幣**：
  - 國際：$49/mo, $99/mo
  - 台灣：NT$300/月, NT$500/月
- **文字長度**：
  - 痛點標題上限 60 字
  - 痛點描述上限 5000 字
  - 結構化摘要上限 200 字
- **匯入格式**：純文字、Markdown、截圖 OCR 文字
- **匯出格式**：Markdown、JSON、Notion 匯入格式

---

## [EXAMPLE PATTERNS]

### Pattern 1: Pain Collector (匯入與結構化)

- **核心區塊**：
  - 頂部步驟指示器（1. 貼上原始文字 → 2. AI 結構化 → 3. 確認並儲存）
  - 中央大面積 Textarea（支持拖放檔案、貼上截圖）
  - 右側即時預覽面板：原始文字 → 結構化痛點卡片的即時轉換
  - 底部確認區：結構化結果 + 編輯選項 + 「儲存到痛點庫」CTA
- **交互設計**：
  - 貼上文字後 1 秒自動開始結構化（可取消）
  - AI 處理時顯示步驟文字：「辨識痛點關鍵字...」→「建立問題結構...」→「產生下一步建議」
  - 結構化完成後，使用者可逐欄修改，每次修改即時反映在預覽卡片

### Pattern 2: Essence Decomposer (四物理量驗證)

- **核心區塊**：
  - 左側痛點摘要卡片（固定）
  - 中間四物理量互動面板：每個物理量一個區塊，包含定義說明 + 引導問題 + 條狀選擇器
  - 右側驗證結果摘要：已填 / 未填狀態 + 整體驗證完整度
  - 底部固定行動區：「查看策略映射 →」或「需要補充：[具體缺少的物理量]」
- **交互設計**：
  - 四個物理量可任意順序填寫，不強制線性流程
  - 每個物理量旁有「這代表什麼？」tooltip，附具體案例
  - 條狀選擇器拖動時有即時回饋（色彩從灰漸變為 Teal）
  - 完成驗證後卡片狀態自動更新為「已驗證」(Verified Green)

### Pattern 3: Disruption Mapper (策略映射)

- **核心區塊**：
  - 左側已驗證痛點摘要
  - 中間 Christensen 破壞式創新框架視覺化：2x2 矩陣或流程圖，標示痛點在框架中的位置
  - 右側 GTM 策略面板：目標客群、價值定位、切入角度
  - 底部固定行動區（最重要）：「你的下一步：[具體可執行的行動]」— 如「在 3 天內訪談 5 位 [目標客群]，驗證 [核心假設]」
- **交互設計**：
  - 框架圖表可互動，點擊區域顯示該象限的詳細說明
  - GTM 策略可展開/收合各段落
  - 行動區的「下一步」以 Amber 強調，始終可見

### Pattern 4: Pain Atlas (社群痛點庫)

- **核心區塊**：
  - 頂部搜尋列 + 產業分類篩選標籤
  - 痛點卡片 Masonry 網格（每張卡片顯示：標題、摘要、驗證狀態、貢獻者數量）
  - 側邊分類導航：依產業、依物理量強度、依驗證狀態
  - 「貢獻你的痛點」浮動 CTA
- **交互設計**：
  - 點擊卡片展開詳情，不跳頁（Overlay 或側邊滑出面板）
  - 「我也遇到」按鈕取代按讚/評分，僅表示共鳴不做排名
  - 匿名貢獻選項，降低分享門檻
  - 無排序選項中不包含「最熱門」「最高分」— 僅提供「最新」「最多共鳴」「你可能相關」

---

## [ANTI-PATTERN REGISTRY]

> 以下模式在 PainMap 中**永遠禁止**，任何頁面設計都必須對照此清單檢查。

| 禁止模式 | 原因 | 替代方案 |
|----------|------|---------|
| 數字分數 (85/100) | 製造焦慮，暗示「正確答案」 | 條狀圖僅表達相對程度 |
| 星等評價 (4.5 stars) | 暗示品質排名 | 「已驗證」/「待驗證」二元狀態 |
| A-F 等級 | 學校式評判 | 結構化標籤（頻率高/中/低） |
| 排行榜 | 競爭焦慮 | 「最近社群活動」時間軸 |
| 遊戲化徽章 | 偏離核心價值 | 里程碑通知（「你已結構化第 10 個痛點」） |
| 成功率預測 | 虛假精確度 | 具體下一步行動建議 |
| 紅色警告用於痛點強度 | 將痛點嚴重度與「危險」混淆 | Teal-Amber 色階表達程度 |
| 倒數計時器 | 人為緊迫感 | 不設時間壓力 |
| 比較表格（你的 vs 他人的） | 激發不安全感 | 僅顯示自己的進度 |

---

**版本資訊**：
- 當前版本：v1.0
- 最後更新：2026-04-09
- 此文件為「PainMap 題眼」全站設計靈魂，任何 Page-Level Prompt 均以此為基石。
- 相關文件：`SYSTEM_DOCUMENT_SPEC.md`（四層文件模板）、`MODULE_REGISTRY.md`（模組定義）、`firstdollar_prd.md`（產品需求文件）
