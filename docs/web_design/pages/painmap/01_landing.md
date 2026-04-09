# Page-Level Prompt: PainMap Landing Page

> PainMap 行銷首頁。將訪客轉化為試用使用者，傳達核心價值：把散亂痛點結構化成可驗證的問題定義。

---

## [PAGE META]

- **page_name**: PainMap Landing Page
- **route_path**: `/`
- **page_type**: landing
- **primary_goal**: 將訪客轉化為試用使用者，展示 PainMap 的獨特價值 — 把散亂的痛點訊號結構化成可驗證的問題定義
- **secondary_goal**: 建立品牌信任（反 idea score 立場）並引導訪客探索 Pain Atlas 圖譜
- **target_users**:
  - 主要：indie hackers、Growth PM、內容創作者 — 有散亂想法但缺乏結構的人
  - 次要：UX 顧問、電商賣家 — 有行業經驗但無法資產化的人
- **entry_point**: 搜尋引擎 / 社群分享連結 / Product Hunt / 口碑推薦
- **expected_time_on_page**: 2-5 分鐘（瀏覽完整頁面後點擊 CTA 或探索 Pain Atlas）

---

## [STRUCTURE: SECTIONS]

1. **hero**
  - section_type: hero
  - section_purpose: 用一句話擊中訪客核心痛點（不缺想法，缺結構），並提供明確的行動入口
2. **anti_pattern_declaration**
  - section_type: manifesto
  - section_purpose: 明確宣告「我們不做什麼」，透過透明度建立品牌信任，與競品（IdeaCheck 類）劃清界線
3. **three_step_flow**
  - section_type: feature_showcase
  - section_purpose: 展示核心三步驟流程（採集 - 拆解 - 策略），讓訪客理解產品如何運作
4. **pain_atlas_preview**
  - section_type: social_proof
  - section_purpose: 展示 Pain Atlas 圖譜的群體智慧價值，觸發「別人都在用」的好奇心
5. **persona_stories**
  - section_type: testimonial_cards
  - section_purpose: 透過真實 persona 的 before/after 對比，讓訪客在自己的情境中看見產品價值
6. **pricing**
  - section_type: pricing_table
  - section_purpose: 提供清晰的定價方案，降低決策門檻（Free 試用 + Pro 升級）
7. **cta_footer**
  - section_type: cta_banner
  - section_purpose: 最終轉化推力 — 降低「開始」的心理門檻，強調「不需要準備任何東西」

---

## [SECTION COMPONENT SPEC]

### Section: hero

- **layout**: 全寬單欄，垂直置中。左側文案 + 右側視覺插圖（Desktop）；堆疊（Mobile）
- **elements**:
  - headline: H1 / required / "你的問題不是沒有想法，而是沒有結構"
  - subheadline: Body LG / required / "PainMap 幫你把散落在留言區、對話紀錄、腦中經驗裡的痛點訊號，結構化成可驗證的問題定義。"
  - primary_cta: Button Primary / required / "開始釐清你的問題" / -> `/app/start`
  - secondary_cta: Button Ghost / optional / "先看看 Pain Atlas 圖譜" / -> `/atlas`
  - hero_visual: Illustration / required / 左側：散亂便利貼（messy notes, screenshots, chat bubbles）；右側：整齊的結構化 Pain Card（JTBD 格式 + 物理量標記）。中間以箭頭連接，傳達「散亂 -> 結構」的轉化。
- **states**:
  - default: 完整展示所有元素，hero_visual 帶入場動畫（fade-in + slight slide-up）
  - hover: primary_cta 按鈕色彩加深；secondary_cta 出現底線
  - loading: 文案先渲染（SSR），hero_visual lazy load with placeholder
- **copy_constraints**: headline 最多 20 字中文；subheadline 最多 60 字中文；CTA 最多 10 字中文

### Section: anti_pattern_declaration

- **layout**: 全寬單欄，置中對齊，淺灰背景色區分
- **elements**:
  - section_title: H2 / required / "我們不做什麼"
  - section_subtitle: Body MD / required / "在告訴你我們能做什麼之前，先說清楚我們絕對不做什麼。"
  - anti_items: AntiPatternCard[4] / required / 以 icon + 文字呈現
    - item_1: icon: XCircle / "不打分數" / "沒有 0-100 分、沒有星等評價。分數讓人焦慮，不讓人行動。"
    - item_2: icon: XCircle / "不做 AI 預測" / "不預測成功率。沒有人能用演算法預測一個問題值不值得解。"
    - item_3: icon: XCircle / "不幫你想點子" / "你不缺點子。你缺的是把已有素材看清楚的結構。"
    - item_4: icon: XCircle / "不生商業計畫書" / "在第一塊錢之前，50 頁商業計畫書是代理動作。"
  - trust_line: Body SM / optional / "我們只做一件事：幫你把散亂的痛點，結構化成可行動的問題定義。"
- **states**:
  - default: 4 張卡片以網格排列
  - hover: 卡片輕微放大（scale 1.02）+ 陰影加深
  - loading: Skeleton cards
- **copy_constraints**: 每張 AntiPatternCard 標題最多 8 字中文；描述最多 40 字中文

### Section: three_step_flow

- **layout**: 全寬，1 行 3 欄（Desktop）/ 垂直堆疊帶 step connector 線（Mobile）
- **elements**:
  - section_title: H2 / required / "三步驟，從散亂到結構"
  - step_cards: StepCard[3] / required
    - step_1:
      - step_number: Badge / required / "01"
      - icon: Illustration / required / inbox/collector metaphor
      - title: H3 / required / "痛點採集器"
      - subtitle: Body SM / required / "Pain Collector"
      - description: Body MD / required / "把留言、對話截圖、筆記、CSV 丟進來。不需要整理格式，系統幫你提取結構。"
      - sample_output: PreviewCard / required / 範例輸出：一張結構化痛點卡片（誰 x 情境 x 現行解法 x 不滿的點）
    - step_2:
      - step_number: Badge / required / "02"
      - icon: Illustration / required / prism/decompose metaphor
      - title: H3 / required / "問題本質拆解"
      - subtitle: Body SM / required / "Essence Decomposer"
      - description: Body MD / required / "用第一性原理的四個物理量檢驗每個痛點。缺什麼一目了然，下一步清清楚楚。"
      - sample_output: PreviewCard / required / 範例輸出：物理量畫布（4 格，有的綠勾、有的紅標「需要補」）
    - step_3:
      - step_number: Badge / required / "03"
      - icon: Illustration / required / compass/map metaphor
      - title: H3 / required / "破壞式策略地圖"
      - subtitle: Body SM / required / "Disruption Mapper"
      - description: Body MD / required / "找到被過度服務的客群，設計低端切入策略。不是完整商業計畫，是一頁紙的 GTM 路徑。"
      - sample_output: PreviewCard / required / 範例輸出：Strategy Canvas 簡化版（現有玩家 vs 你的差異化曲線）
  - step_connector: SVG Line / required / 連接三步驟的視覺流程線
- **states**:
  - default: 三步驟依序展示，sample_output 預設收合
  - hover: 卡片 hover 展開 sample_output preview（Desktop）
  - active: 點擊展開 sample_output 完整預覽（Mobile tap）
  - loading: Skeleton cards + placeholder illustrations
- **copy_constraints**: 每步 title 最多 8 字中文；description 最多 50 字中文

### Section: pain_atlas_preview

- **layout**: 左側圖譜視覺化（60%）+ 右側文案說明（40%）（Desktop）；堆疊（Mobile，圖譜在上）
- **elements**:
  - section_title: H2 / required / "行業痛點圖譜"
  - section_subtitle: Body LG / required / "看看跟你同行業的人驗證了什麼問題"
  - atlas_visualization: InteractiveChart / required / 行業 x 痛點 cluster 的氣泡圖或熱力圖。氣泡大小 = 條目數量；顏色深淺 = 驗證程度。可見行業標籤：SaaS、電商、創作者經濟、專業服務、教育等。
  - stat_badges: StatBadge[3] / required
    - badge_1: "{N}+ 個結構化痛點條目"
    - badge_2: "{N} 個行業覆蓋"
    - badge_3: "{N}% 經真人訪談驗證"
  - atlas_cta: Button Secondary / required / "探索完整圖譜" / -> `/atlas`
  - trust_note: Caption / required / "所有圖譜資料皆為使用者自願匿名貢獻。你的資料，你做主。"
- **states**:
  - default: 展示靜態圖譜預覽 + 統計數字
  - hover: 氣泡 hover 顯示 tooltip（行業名 + 條目數 + 代表性痛點摘要）
  - loading: 圖譜區 skeleton + stat_badges 用 shimmer 動畫
  - empty: （不適用於 landing page — 始終展示種子資料）
- **copy_constraints**: section_subtitle 最多 25 字中文；trust_note 最多 30 字中文

### Section: persona_stories

- **layout**: 1 行 3 欄等寬卡片（Desktop）/ 水平 carousel（Tablet）/ 垂直堆疊（Mobile）
- **elements**:
  - section_title: H2 / required / "他們用 PainMap 看清了什麼"
  - persona_cards: PersonaCard[3] / required
    - persona_1_aji:
      - avatar: Illustration / required / 阿傑頭像（32 歲，資深後端工程師風格）
      - name: Body Bold / required / "阿傑"
      - tagline: Caption / required / "32 歲 / 資深後端 / Indie Hacker"
      - before_label: Badge Red / required / "Before"
      - before_text: Body SM / required / "電腦裡有 40 個 idea.md，每次打開都更焦慮。不知道哪個值得花 3 個月做。"
      - after_label: Badge Green / required / "After"
      - after_text: Body SM / required / "物理量檢驗砍掉 37 個，剩下 3 個有真人在付錢解決同類問題。第一次覺得選題有根據。"
      - quote: Body Italic / required / "我缺的不是點子，是有人告訴我哪些有真的人在付錢。"
    - persona_2_vivian:
      - avatar: Illustration / required / Vivian 頭像（29 歲，Growth PM 風格）
      - name: Body Bold / required / "Vivian"
      - tagline: Caption / required / "29 歲 / Growth PM / Wantrepreneur"
      - before_label: Badge Red / required / "Before"
      - before_text: Body SM / required / "做了 3 年 PM 看過太多行業問題，但不確定哪個是一個人能切的。怕選錯題目浪費半年。"
      - after_label: Badge Green / required / "After"
      - after_text: Body SM / required / "Pain Atlas 讓我看到同行業有人驗證過的痛點。找到一個被過度服務的客群，用最小產品切入。"
      - quote: Body Italic / required / "需要有人幫我看清楚，不是幫我打分數。"
    - persona_3_kai:
      - avatar: Illustration / required / Kai 頭像（27 歲，YouTuber 風格）
      - name: Body Bold / required / "Kai"
      - tagline: Caption / required / "27 歲 / AI 工具 YouTuber / 8.5 萬訂閱"
      - before_label: Badge Red / required / "Before"
      - before_text: Body SM / required / "留言區每天 200 則，知道是金礦但沒辦法系統性整理出大家最想買什麼。"
      - after_label: Badge Green / required / "After"
      - after_text: Body SM / required / "把留言貼進痛點採集器，10 分鐘產出 5 個結構化痛點 cluster。第一次看到觀眾需求的全貌。"
      - quote: Body Italic / required / "我的留言區就是一座金礦，只是之前沒有工具幫我挖。"
- **states**:
  - default: 3 張卡片並排，Before 狀態先展示
  - hover: 卡片輕微上移 (-4px) + 陰影加深
  - active: 點擊或 tap 翻轉顯示 After 狀態（card flip animation）
  - loading: Skeleton cards with avatar placeholder
- **copy_constraints**: before_text / after_text 各最多 50 字中文；quote 最多 30 字中文

### Section: pricing

- **layout**: 置中對齊，1 行 2 欄定價卡（Desktop）/ 垂直堆疊（Mobile）
- **elements**:
  - section_title: H2 / required / "簡單透明的定價"
  - section_subtitle: Body MD / required / "月付不綁約，隨時停用。"
  - pricing_cards: PricingCard[2] / required
    - free_tier:
      - tier_name: H3 / required / "Free"
      - price: Display / required / "NT$ 0"
      - price_note: Caption / required / "永久免費"
      - features: FeatureList / required
        - "每月結構化 3 個問題"
        - "基礎物理量檢驗"
        - "瀏覽 Pain Atlas 前 10 條"
        - "社群痛點探索"
      - cta: Button Secondary / required / "免費開始" / -> `/app/signup?plan=free`
    - pro_tier:
      - tier_badge: Badge / optional / "最受歡迎"
      - tier_name: H3 / required / "Pro"
      - price: Display / required / "NT$ 590"
      - price_period: Caption / required / "/ 月"
      - price_note: Caption / optional / "約 US$19 / 月"
      - features: FeatureList / required
        - "無限結構化問題"
        - "完整物理量檢驗 + Affinity Clustering"
        - "完整 Pain Atlas 存取"
        - "破壞式 GTM 策略設計"
        - "Strategy Canvas + GTM 一頁紙"
        - "匯出至 FirstDollar Sprint"
        - "優先看到新增行業痛點"
      - cta: Button Primary / required / "開始 Pro 方案" / -> `/app/signup?plan=pro`
  - comparison_toggle: Link / optional / "完整功能比較" / 展開詳細功能對照表
  - trust_elements: TrustBadge[] / required
    - "月付不綁約"
    - "隨時取消"
    - "14 天不滿意退款"
- **states**:
  - default: 兩張定價卡並排，Pro 卡片有 highlight 邊框
  - hover: 卡片邊框色彩強化
  - loading: Skeleton pricing cards
- **copy_constraints**: feature 每條最多 20 字中文

### Section: cta_footer

- **layout**: 全寬深色背景，垂直置中
- **elements**:
  - headline: H2 / required / "不需要準備任何東西"
  - subheadline: Body LG / required / "把你現有的材料丟進來 — 留言截圖、客服對話、腦中想法，PainMap 幫你看清問題的結構。"
  - primary_cta: Button Primary Large / required / "開始釐清你的問題" / -> `/app/start`
  - email_signup: InputGroup / optional / email input + "用 Email 開始" 按鈕（for 尚未準備註冊的訪客）
  - trust_line: Caption / required / "不需要信用卡。Free 方案永久免費。"
- **states**:
  - default: 深色背景 + 白色文案，CTA 按鈕高對比
  - hover: CTA 按鈕色彩加深 + scale(1.02)
  - loading: 不適用（靜態區塊）
  - success: email 送出後顯示 "歡迎！請查看信箱完成註冊。" inline 訊息
  - error: email 格式錯誤顯示 inline validation 訊息 "請輸入有效的 Email 地址"
- **copy_constraints**: headline 最多 12 字中文；subheadline 最多 50 字中文

---

## [INTERACTION & STATE FLOW]

### 主要互動流程

1. 頁面載入 -> SSR 渲染文案 + lazy load 圖片與圖譜視覺化
2. 訪客向下捲動 -> 各 Section 依序以 fade-in 動畫進入視窗（IntersectionObserver）
3. 點擊 Hero CTA "開始釐清你的問題" -> 導向 `/app/start`（新使用者進入 onboarding；已登入使用者進入 Pain Collector）
4. 點擊 "先看看 Pain Atlas 圖譜" -> 導向 `/atlas`（公開頁面，未登入可瀏覽前 10 條）
5. hover Pain Atlas 氣泡圖 -> tooltip 顯示行業痛點摘要
6. 點擊 Persona 卡片 -> card flip 顯示 After 狀態
7. 點擊定價 CTA -> 導向對應 plan 的註冊頁
8. 在 cta_footer 輸入 email -> 觸發註冊流程 email

### Scroll-based CTA 策略


| 捲動位置          | CTA 行為                                            |
| ------------- | ------------------------------------------------- |
| Hero 離開視窗後    | 頂部出現 sticky nav bar，包含品牌 logo + "開始釐清你的問題" 小型 CTA |
| 到達 pricing 區塊 | sticky nav bar CTA 文案切換為 "免費開始"                   |
| 到達 cta_footer | sticky nav bar 消失（避免視覺重複）                         |


### RWD 行為差異


| 斷點                  | 佈局                                                                              | 差異說明                                              |
| ------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------- |
| Desktop (>1280px)   | Hero 左右分欄；三步驟 3 欄；Atlas 左右分欄；Persona 3 欄；定價 2 欄                                 | 完整體驗，hover 互動豐富                                   |
| Tablet (768-1280px) | Hero 堆疊（文案在上、視覺在下）；三步驟 3 欄（縮小）；Atlas 堆疊；Persona 水平 carousel；定價 2 欄              | Persona 改為滑動瀏覽                                    |
| Mobile (<768px)     | 全部單欄堆疊；三步驟帶 step connector 垂直線；Persona 垂直堆疊（預設只顯示第 1 張 + "看更多"）；定價垂直堆疊（Free 在上） | Anti-pattern 卡片改為 2x2 grid；hero_visual 縮小至 60% 寬度 |


### 資料更新策略

- 頁面為靜態生成（SSG），每日重新建置一次
- Pain Atlas 統計數字（條目數、行業覆蓋數、驗證率）透過 ISR 每小時更新
- 定價資訊硬編碼於頁面（變更透過部署更新）

---

## [DATA & API]

- **uses_api**: true（僅 Pain Atlas 統計與 email signup）
- **endpoints**:
  - GET `/api/atlas/stats` -- 取得圖譜統計數字（總條目數、行業數、驗證率）用於 pain_atlas_preview section
  - GET `/api/atlas/preview` -- 取得圖譜氣泡圖/熱力圖的預覽資料（匿名化摘要）
  - POST `/api/auth/email-signup` -- cta_footer 的 email 註冊
- **error_cases**:
  - 網路錯誤：Atlas 統計數字使用上次成功的快取值（stale-while-revalidate）；email signup 顯示 "網路連線異常，請稍後再試"
  - API 錯誤：Atlas 預覽區域改為靜態 fallback 圖片；email signup 顯示友善錯誤訊息 + 重試按鈕
  - Rate limit：email signup 超過 3 次/分鐘顯示 "請稍候片刻再試"

---

## [EXCEPTION TO GLOBAL RULES]

- Hero 區塊使用全寬佈局，不受全域 Grid 最大寬度（1280px）限制
- cta_footer 使用深色背景（反轉色彩），覆蓋全域淺色背景規則
- Anti-pattern 區塊使用淺灰背景色區分，打破全域白色背景的一致性（刻意製造視覺對比以強化「宣言」感）

---

## [BRAND LANGUAGE RULES (PAGE-SPECIFIC)]

本頁面嚴格遵守以下語言規範。所有 copy 交付前必須通過語言審核。

### 禁止用語


| 禁止                         | 理由                            |
| -------------------------- | ----------------------------- |
| "驗證你的點子"                   | 框架錯誤 -- 使用者不是在「驗證點子」，是在「釐清問題」 |
| "AI 評分" / "AI 打分"          | 品牌基因禁令 -- 違反 D-001 決策         |
| "成功機率" / "成功率"             | 沒有人能預測成功率，使用此詞破壞信任            |
| "可行性分析"                    | 暗示「分析完就知道答案」，與反焦慮設計衝突         |
| "idea" / "點子"（作為稱呼使用者輸入的詞） | 全域用「問題」「痛點」取代 -- 違反 D-003     |


### 建議用語


| 建議          | 場景       |
| ----------- | -------- |
| "釐清問題"      | CTA、功能描述 |
| "結構化痛點"     | 產品功能說明   |
| "找到值得解決的問題" | 價值主張     |
| "看清問題的本質"   | 品牌調性描述   |
| "你的下一步是什麼"  | 行動導向文案   |


### 語調

- **Empowering**：你已經有素材了，我們幫你看清楚
- **Calm**：不催促、不製造焦慮、不用驚嘆號強調緊迫感
- **Structured**：文案本身就要有結構感（列表、對比、步驟）
- **Anti-anxiety**：禁止「時間有限」「名額有限」「錯過就沒了」等 FOMO 話術

---

## [ACCEPTANCE CRITERIA]

- 所有 7 個 Section 功能正常且依序正確渲染
- Hero CTA "開始釐清你的問題" 正確導向 `/app/start`
- Anti-pattern 4 張卡片內容完整，無遺漏
- 三步驟流程的 sample_output 可展開/收合
- Pain Atlas 預覽氣泡圖正確載入，hover tooltip 正常顯示
- Pain Atlas 統計數字（條目數、行業數、驗證率）正確從 API 取得
- Persona 卡片 Before/After 翻轉動畫流暢
- 定價卡片功能列表完整，CTA 導向正確的 plan 註冊頁
- cta_footer email signup 表單驗證正確（格式驗證 + 成功/錯誤狀態）
- Sticky nav bar 的捲動行為正確（出現/文案切換/消失）
- 所有狀態已實作（default / hover / loading / error / success）
- RWD 三個斷點（Desktop >1280px / Tablet 768-1280px / Mobile <768px）行為正確
- 全頁面零出現禁止用語（"驗證你的點子" / "AI 評分" / "成功機率" / "可行性分析"）
- 全頁面不出現任何數字評分、星等、排名元素
- 語調審核通過：無 FOMO 話術、無驚嘆號催促、無焦慮誘導
- Lighthouse Performance Score >= 90（SSG + lazy load）
- 首次有意義繪製（FMP）< 1.5 秒
- 符合 Design System 視覺規範（字體、色彩、間距）
- 所有連結和按鈕的 a11y 標記正確（aria-label、tab order）

