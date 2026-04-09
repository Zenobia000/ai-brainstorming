# PainMap Landing Page — Lovable Assembly Prompt

> 此檔案可直接貼入 Lovable 或 Claude Code，生成完整 Landing Page 前端實作。
> 組裝來源：`global/painmap_brand_system.md` + `pages/painmap/01_landing.md`
> 組裝日期：2026-04-09 | Global System v1.0

---

## === GLOBAL PROJECT GUIDELINE (DO NOT OVERRIDE) ===

你是「PainMap 題眼」的資深產品設計師與前端工程師，負責維護整個專案的設計一致性。品牌特質：**結構化 (Structured)** / **賦權感 (Empowering)** / **沉穩 (Calm)**。

### Color Tokens

| Token | 色值 | Tailwind Class |
|-------|------|----------------|
| Primary | #1E3A5F | `bg-[#1E3A5F]` |
| Primary Hover | #162D4A | `hover:bg-[#162D4A]` |
| Primary Light | #E8EEF5 | `bg-[#E8EEF5]` |
| Secondary | #2D7D8A | `bg-[#2D7D8A]` |
| Secondary Hover | #236269 | `hover:bg-[#236269]` |
| Accent (CTA) | #E8913A | `bg-[#E8913A]` |
| Accent Hover | #D07A2B | `hover:bg-[#D07A2B]` |
| Accent Light | #FEF3E2 | `bg-[#FEF3E2]` |
| Verified | #2D9D78 | `bg-[#2D9D78]` |
| Verified Light | #E6F5EF | `bg-[#E6F5EF]` |
| Caution | #D97706 | `bg-[#D97706]` |
| Error | #DC2626 | `bg-[#DC2626]` |
| BG Page | #F7F8FA | `bg-[#F7F8FA]` |
| BG Surface | #FFFFFF | `bg-white` |
| BG Muted | #F1F3F5 | `bg-[#F1F3F5]` |
| Text Primary | #1A2332 | `text-[#1A2332]` |
| Text Secondary | #5C6B7A | `text-[#5C6B7A]` |
| Text Muted | #8E99A4 | `text-[#8E99A4]` |
| Border Default | #DFE3E8 | `border-[#DFE3E8]` |
| Border Focus | #2D7D8A | `focus:border-[#2D7D8A]` |

### Typography

| Token | 字級 | 行高 | 字重 |
|-------|------|------|------|
| Display | 36px | 1.2 | 700 |
| H1 | 28px | 1.3 | 700 |
| H2 | 22px | 1.3 | 600 |
| H3 | 18px | 1.4 | 600 |
| Body LG | 17px | 1.7 | 400 |
| Body MD | 15px | 1.6 | 400 |
| Body SM | 13px | 1.5 | 400 |
| Caption | 12px | 1.4 | 400 |
| Code | 14px | 1.5 | 400 |

字體：`Noto Sans TC`（中文）+ `Inter`（英文）+ `JetBrains Mono`（等寬）

### Spacing / Radius / Shadow / Grid

| Token | 值 |
|-------|-----|
| Radius SM | 4px |
| Radius MD | 8px |
| Radius LG | 12px |
| Radius XL | 16px |
| Shadow SM | 0 1px 3px rgba(30,58,95,0.06) |
| Shadow MD | 0 4px 8px rgba(30,58,95,0.08) |
| Shadow LG | 0 12px 24px rgba(30,58,95,0.12) |
| Border | 1px solid #DFE3E8 |
| Border Active | 2px solid #2D7D8A |
| Max Width | 1200px / 12 欄 / 欄間距 20px |
| Padding | 16px (Mobile) / 24px (Tablet) / 32px (Desktop) |

### Breakpoints

| 斷點 | 範圍 |
|------|------|
| Desktop | > 1280px |
| Tablet | 768px – 1280px |
| Mobile | < 768px |

### 重要規範（CRITICAL）

- **技術棧**：React 18 + TypeScript + Tailwind CSS；State: Zustand + React Query；Forms: React Hook Form + Zod；Backend: Supabase；Hosting: Vercel (SSG + ISR)
- **絕對禁令**：禁止分數、星等、A-F 等級、成功率預測、排行榜、遊戲化徽章
- **禁止用詞**：「點子」「idea」「評分」「打分」「成功率」「可行性分析」「革命性」「極致體驗」
- 禁止 Inline styles（全用 Tailwind）；禁止過度動畫；禁止 console.log 殘留；禁止未經 Zod schema 驗證的 AI 回應直接渲染
- 顏色對比度 >= 4.5:1 (WCAG AA)；語意化 HTML；完整 Tab 順序 + Focus ring (Teal #2D7D8A)
- 本區段為最高準則。除非 EXCEPTION RULES 明確說明，否則所有頁面均必須遵守。

---

## === CURRENT TASK: BUILD Landing Page ===

本次任務：根據上方 Global Guideline，設計並實作「PainMap Landing Page」。

### [PAGE META]

- **page_name**: PainMap Landing Page
- **route_path**: `/`
- **page_type**: landing
- **primary_goal**: 將訪客轉化為試用使用者，展示 PainMap 的獨特價值 — 把散亂的痛點訊號結構化成可驗證的問題定義
- **secondary_goal**: 建立品牌信任（反 idea score 立場）並引導訪客探索 Pain Atlas 圖譜
- **target_users**:
  - 主要：indie hackers、Growth PM、內容創作者 — 有散亂想法但缺乏結構的人
  - 次要：UX 顧問、電商賣家 — 有行業經驗但無法資產化的人
- **entry_point**: 搜尋引擎 / 社群分享連結 / Product Hunt / 口碑推薦
- **expected_time_on_page**: 2-5 分鐘

---

### [STRUCTURE: SECTIONS]（由上至下）

1. **hero** — 用一句話擊中訪客核心痛點，提供明確的行動入口
2. **anti_pattern_declaration** — 明確宣告「我們不做什麼」，建立品牌信任
3. **three_step_flow** — 展示核心三步驟流程（採集 - 拆解 - 策略）
4. **pain_atlas_preview** — 展示 Pain Atlas 群體智慧價值，觸發探索欲
5. **persona_stories** — before/after 對比，讓訪客在自己情境中看見產品價值
6. **pricing** — 清晰定價，降低決策門檻（Free 試用 + Pro 升級）
7. **cta_footer** — 最終轉化推力，強調「不需要準備任何東西」

---

### [SECTION COMPONENT SPEC]

#### Section 1: hero

- **layout**: 全寬單欄，垂直置中；Left：文案；Right：視覺插圖（Desktop）；堆疊（Mobile）
- **elements**:
  - `headline` (H1, required): "你的問題不是沒有想法，而是沒有結構"
  - `subheadline` (Body LG, required): "PainMap 幫你把散落在留言區、對話紀錄、腦中經驗裡的痛點訊號，結構化成可驗證的問題定義。"
  - `primary_cta` (Button Primary, required): 文案「開始釐清你的問題」/ 導向 `/app/start` / 背景色 Accent #E8913A
  - `secondary_cta` (Button Ghost, optional): 文案「先看看 Pain Atlas 圖譜」/ 導向 `/atlas`
  - `hero_visual` (Illustration, required): 左側散亂便利貼（messy notes, screenshots, chat bubbles）→ 中間箭頭 → 右側整齊結構化 Pain Card（JTBD 格式 + 物理量標記）。傳達「散亂 -> 結構」的轉化。
- **states**:
  - default: 完整展示，hero_visual 帶入場動畫（fade-in + slight slide-up）
  - hover: primary_cta 色彩加深至 #D07A2B；secondary_cta 出現底線
  - loading: 文案先渲染（SSR），hero_visual lazy load with placeholder
- **copy_constraints**: headline ≤ 20 字中文；subheadline ≤ 60 字中文；CTA ≤ 10 字中文

---

#### Section 2: anti_pattern_declaration

- **layout**: 全寬單欄，置中對齊，BG Muted (#F1F3F5) 背景（刻意視覺區分，強化「宣言」感）
- **elements**:
  - `section_title` (H2, required): "我們不做什麼"
  - `section_subtitle` (Body MD, required): "在告訴你我們能做什麼之前，先說清楚我們絕對不做什麼。"
  - `anti_items` (AntiPatternCard[4], required): icon XCircle + 標題 + 描述
    - 「不打分數」— "沒有 0-100 分、沒有星等評價。分數讓人焦慮，不讓人行動。"
    - 「不做 AI 預測」— "不預測成功率。沒有人能用演算法預測一個問題值不值得解。"
    - 「不幫你想點子」— "你不缺點子。你缺的是把已有素材看清楚的結構。"
    - 「不生商業計畫書」— "在第一塊錢之前，50 頁商業計畫書是代理動作。"
  - `trust_line` (Body SM, optional): "我們只做一件事：幫你把散亂的痛點，結構化成可行動的問題定義。"
- **states**:
  - default: 4 張卡片網格排列（Desktop: 2x2 或 1x4；Mobile: 2x2）
  - hover: 卡片 scale(1.02) + Shadow MD 加深
  - loading: Skeleton cards
- **copy_constraints**: 每張 AntiPatternCard 標題 ≤ 8 字中文；描述 ≤ 40 字中文

---

#### Section 3: three_step_flow

- **layout**: 全寬，1 行 3 欄（Desktop）/ 垂直堆疊帶 step connector 線（Mobile）
- **elements**:
  - `section_title` (H2, required): "三步驟，從散亂到結構"
  - `step_connector` (SVG Line, required): 連接三步驟的視覺流程線
  - `step_cards` (StepCard[3], required):
    - **Step 01 — 痛點採集器 (Pain Collector)**
      - icon: inbox/collector metaphor illustration
      - description: "把留言、對話截圖、筆記、CSV 丟進來。不需要整理格式，系統幫你提取結構。"
      - sample_output (PreviewCard, required): 一張結構化痛點卡片（誰 x 情境 x 現行解法 x 不滿的點）
    - **Step 02 — 問題本質拆解 (Essence Decomposer)**
      - icon: prism/decompose metaphor illustration
      - description: "用第一性原理的四個物理量檢驗每個痛點。缺什麼一目了然，下一步清清楚楚。"
      - sample_output (PreviewCard, required): 物理量畫布（4 格，有的綠勾、有的 Amber 標「需要補」）
    - **Step 03 — 破壞式策略地圖 (Disruption Mapper)**
      - icon: compass/map metaphor illustration
      - description: "找到被過度服務的客群，設計低端切入策略。不是完整商業計畫，是一頁紙的 GTM 路徑。"
      - sample_output (PreviewCard, required): Strategy Canvas 簡化版（現有玩家 vs 你的差異化曲線）
  - 每張 StepCard 底部：可展開/收合的 sample_output preview
- **states**:
  - default: 三步驟依序展示，sample_output 預設收合
  - hover (Desktop): 卡片 hover 展開 sample_output preview
  - active (Mobile): tap 展開 sample_output 完整預覽
  - loading: Skeleton cards + placeholder illustrations
- **copy_constraints**: 每步 title ≤ 8 字中文；description ≤ 50 字中文

---

#### Section 4: pain_atlas_preview

- **layout**: Left 60%：圖譜視覺化；Right 40%：文案說明（Desktop）；堆疊（Mobile，圖譜在上）
- **elements**:
  - `section_title` (H2, required): "行業痛點圖譜"
  - `section_subtitle` (Body LG, required): "看看跟你同行業的人驗證了什麼問題"
  - `atlas_visualization` (InteractiveChart, required): 行業 x 痛點 cluster 氣泡圖或熱力圖。氣泡大小 = 條目數量；顏色深淺 = 驗證程度（Teal 色階）。可見行業標籤：SaaS、電商、創作者經濟、專業服務、教育。hover 顯示 tooltip（行業名 + 條目數 + 代表性痛點摘要）。
  - `stat_badges` (StatBadge[3], required):
    - "{N}+ 個結構化痛點條目"（數字從 API 取得）
    - "{N} 個行業覆蓋"（數字從 API 取得）
    - "{N}% 經真人訪談驗證"（數字從 API 取得）
  - `atlas_cta` (Button Secondary, required): 文案「探索完整圖譜」/ 導向 `/atlas` / 色彩 Secondary #2D7D8A
  - `trust_note` (Caption, required): "所有圖譜資料皆為使用者自願匿名貢獻。你的資料，你做主。"
- **states**:
  - default: 靜態圖譜預覽 + 統計數字
  - hover: 氣泡 hover 顯示 tooltip
  - loading: 圖譜區 skeleton + stat_badges shimmer 動畫
  - api_error: 圖譜區改為靜態 fallback 圖片；stat_badges 使用上次快取值（stale-while-revalidate）
- **data_source**: `GET /api/atlas/stats` (ISR, 每小時更新) + `GET /api/atlas/preview`
- **copy_constraints**: section_subtitle ≤ 25 字中文；trust_note ≤ 30 字中文

---

#### Section 5: persona_stories

- **layout**: 1 行 3 欄等寬卡片（Desktop）/ 水平 carousel（Tablet）/ 垂直堆疊（Mobile，預設僅顯示第 1 張 + "看更多"）
- **elements**:
  - `section_title` (H2, required): "他們用 PainMap 看清了什麼"
  - `persona_cards` (PersonaCard[3], required):
    - **阿傑** — 32 歲 / 資深後端 / Indie Hacker
      - Before: "電腦裡有 40 個 idea.md，每次打開都更焦慮。不知道哪個值得花 3 個月做。"
      - After: "物理量檢驗砍掉 37 個，剩下 3 個有真人在付錢解決同類問題。第一次覺得選題有根據。"
      - Quote: "我缺的不是點子，是有人告訴我哪些有真的人在付錢。"
    - **Vivian** — 29 歲 / Growth PM / Wantrepreneur
      - Before: "做了 3 年 PM 看過太多行業問題，但不確定哪個是一個人能切的。怕選錯題目浪費半年。"
      - After: "Pain Atlas 讓我看到同行業有人驗證過的痛點。找到一個被過度服務的客群，用最小產品切入。"
      - Quote: "需要有人幫我看清楚，不是幫我打分數。"
    - **Kai** — 27 歲 / AI 工具 YouTuber / 8.5 萬訂閱
      - Before: "留言區每天 200 則，知道是金礦但沒辦法系統性整理出大家最想買什麼。"
      - After: "把留言貼進痛點採集器，10 分鐘產出 5 個結構化痛點 cluster。第一次看到觀眾需求的全貌。"
      - Quote: "我的留言區就是一座金礦，只是之前沒有工具幫我挖。"
  - PersonaCard 結構：avatar illustration + name (Body Bold) + tagline (Caption) + Before badge (red #DC2626 light bg) + before_text (Body SM) + After badge (green #2D9D78 light bg) + after_text (Body SM) + quote (Body Italic)
- **states**:
  - default: 3 張並排，Before 狀態先展示
  - hover: 卡片上移 -4px + Shadow MD 加深
  - active: 點擊或 tap 翻轉顯示 After（card flip animation）
  - loading: Skeleton cards with avatar placeholder
- **copy_constraints**: before_text / after_text 各 ≤ 50 字中文；quote ≤ 30 字中文

---

#### Section 6: pricing

- **layout**: 置中對齊，1 行 2 欄定價卡（Desktop）/ 垂直堆疊（Mobile，Free 在上）
- **elements**:
  - `section_title` (H2, required): "簡單透明的定價"
  - `section_subtitle` (Body MD, required): "月付不綁約，隨時停用。"
  - `pricing_cards` (PricingCard[2], required):
    - **Free**
      - price (Display): "NT$ 0" / note (Caption): "永久免費"
      - features: 每月結構化 3 個問題 / 基礎物理量檢驗 / 瀏覽 Pain Atlas 前 10 條 / 社群痛點探索
      - cta (Button Secondary): "免費開始" → `/app/signup?plan=free`
    - **Pro** (highlight 邊框 2px solid #E8913A)
      - tier_badge (Badge, optional): "最受歡迎"（Primary Light 背景 + Primary 文字）
      - price (Display): "NT$ 590" / period (Caption): "/ 月" / note (Caption): "約 US$19 / 月"
      - features: 無限結構化問題 / 完整物理量檢驗 + Affinity Clustering / 完整 Pain Atlas 存取 / 破壞式 GTM 策略設計 / Strategy Canvas + GTM 一頁紙 / 匯出至 FirstDollar Sprint / 優先看到新增行業痛點
      - cta (Button Primary, Accent): "開始 Pro 方案" → `/app/signup?plan=pro`
  - `comparison_toggle` (Link, optional): "完整功能比較" / 展開詳細功能對照表
  - `trust_elements` (TrustBadge[], required): 月付不綁約 / 隨時取消 / 14 天不滿意退款
- **states**:
  - default: 兩張卡片並排，Pro 有 highlight 邊框
  - hover: 卡片邊框色彩強化 + Shadow MD
  - loading: Skeleton pricing cards
- **copy_constraints**: feature 每條 ≤ 20 字中文

---

#### Section 7: cta_footer

- **layout**: 全寬深色背景（Primary #1E3A5F），垂直置中，白色文案
- **elements**:
  - `headline` (H2, required, white): "不需要準備任何東西"
  - `subheadline` (Body LG, required, white opacity-85): "把你現有的材料丟進來 — 留言截圖、客服對話、腦中想法，PainMap 幫你看清問題的結構。"
  - `primary_cta` (Button Primary Large, required): 文案「開始釐清你的問題」/ 背景 Accent #E8913A / hover scale(1.02) / → `/app/start`
  - `email_signup` (InputGroup, optional): email input + "用 Email 開始" 按鈕（for 尚未準備註冊的訪客）
  - `trust_line` (Caption, required, white opacity-70): "不需要信用卡。Free 方案永久免費。"
- **states**:
  - default: 深色背景 + 白色文案，CTA 高對比
  - hover: CTA 色彩加深 + scale(1.02)
  - success (email submit): inline 訊息 "歡迎！請查看信箱完成註冊。"（Verified Green #2D9D78）
  - error (email validation): inline validation "請輸入有效的 Email 地址"（Amber #D97706 避免大紅焦慮）
  - rate_limit (> 3 次/分鐘): "請稍候片刻再試"
- **data_source**: POST `/api/auth/email-signup`（Zod email schema 驗證，送出前 client-side 驗證）
- **copy_constraints**: headline ≤ 12 字中文；subheadline ≤ 50 字中文

---

### [INTERACTION & STATE FLOW]

#### 主要互動流程

1. 頁面載入 → SSR 渲染文案 + lazy load 圖片與圖譜視覺化
2. 訪客向下捲動 → 各 Section 以 fade-in 動畫進入視窗（IntersectionObserver）
3. 點擊 Hero CTA → 導向 `/app/start`（新使用者進入 onboarding；已登入使用者進入 Pain Collector）
4. 點擊「先看看 Pain Atlas 圖譜」→ 導向 `/atlas`（公開頁面，未登入可瀏覽前 10 條）
5. hover Pain Atlas 氣泡圖 → tooltip 顯示行業痛點摘要
6. 點擊 Persona 卡片 → card flip 顯示 After 狀態
7. 點擊定價 CTA → 導向對應 plan 的註冊頁
8. cta_footer 輸入 email → 觸發 email 註冊流程

#### Scroll-based Sticky Nav 策略

| 捲動位置 | Sticky Nav 行為 |
|----------|----------------|
| Hero 離開視窗後 | 頂部出現 sticky nav bar：品牌 logo + "開始釐清你的問題" 小型 CTA（Accent） |
| 到達 pricing 區塊 | sticky nav CTA 文案切換為 "免費開始" |
| 到達 cta_footer | sticky nav 消失（避免視覺重複） |

#### RWD 行為

| 斷點 | 佈局 |
|------|------|
| Desktop (>1280px) | Hero 左右分欄；三步驟 3 欄；Atlas 左右分欄；Persona 3 欄；定價 2 欄；hover 互動豐富 |
| Tablet (768-1280px) | Hero 堆疊（文案在上、視覺在下）；三步驟 3 欄縮小；Atlas 堆疊；Persona 水平 carousel；定價 2 欄 |
| Mobile (<768px) | 全部單欄堆疊；三步驟帶 step connector 垂直線；Anti-pattern 2x2 grid；Persona 垂直堆疊（預設顯示第 1 張 + "看更多"）；定價垂直堆疊（Free 在上）；hero_visual 縮小至 60% 寬度 |

#### 資料更新策略

- 頁面為 SSG，每日重新建置一次
- Pain Atlas 統計數字透過 ISR 每小時更新
- 定價資訊硬編碼於頁面（變更透過部署更新）

---

### [DATA & API]

- **endpoints**:
  - `GET /api/atlas/stats` — 圖譜統計數字（總條目數、行業數、驗證率），ISR 每小時快取
  - `GET /api/atlas/preview` — 氣泡圖/熱力圖預覽資料（匿名化摘要）
  - `POST /api/auth/email-signup` — cta_footer email 註冊；需 Zod schema 驗證
- **error_cases**:
  - 網路錯誤：Atlas 統計數字使用上次快取值（stale-while-revalidate）
  - API 錯誤：Atlas 預覽改為靜態 fallback 圖片；email signup 顯示友善錯誤 + 重試按鈕
  - Rate limit：email signup 超過 3 次/分鐘顯示 "請稍候片刻再試"

---

### [BRAND LANGUAGE — PAGE-SPECIFIC]

#### 禁止用語

| 禁止 | 替代 |
|------|------|
| "驗證你的點子" | "釐清你的問題" |
| "AI 評分" / "AI 打分" | "AI 結構化" |
| "成功機率" / "成功率" | "下一步行動" |
| "可行性分析" | "問題本質拆解" |
| "idea" / "點子"（作為使用者輸入的稱呼） | "問題" / "痛點" |
| FOMO 話術：「時間有限」「名額有限」 | 不設時間壓力 |
| 驚嘆號催促 | 沉穩句點語氣 |

#### 語調規則

- **Empowering**：你已經有素材了，我們幫你看清楚
- **Calm**：不催促、不製造焦慮、不用驚嘆號強調緊迫感
- **Structured**：文案本身就要有結構感（列表、對比、步驟）
- **Anti-anxiety**：禁止任何 FOMO 話術

---

## === EXCEPTION RULES ===

本頁面允許以下例外（需明確實作）：

1. **Hero 全寬佈局** — Hero 區塊使用全寬，不受全域 Grid 最大寬度（1280px）限制。理由：最大化第一印象衝擊力。
2. **cta_footer 深色背景反轉** — cta_footer 使用深色背景（Primary #1E3A5F），覆蓋全域淺色背景規則。白色文案置於其上。理由：最終轉化區需要強烈視覺對比。
3. **anti_pattern_declaration 淺灰背景** — Anti-pattern 區塊使用 BG Muted (#F1F3F5) 背景，打破全域白色背景一致性。理由：刻意製造視覺對比，強化「宣言」感。

其餘所有設計決策完全遵循 Global Guideline。

---

## === OUTPUT REQUIREMENTS ===

請依照以下步驟輸出：

### Step 1: 結構確認

列出本頁面的：
- 7 個主要 sections 及其用途
- 每個 section 的關鍵元件（element name + component type）
- Sticky nav、IntersectionObserver 動畫、card flip 等互動機制
- API 端點與資料流策略（SSG + ISR + React Query）

### Step 2: 設計決策說明

說明以下 3 個關鍵設計決策：
1. 如何透過色彩系統（Indigo / Teal / Amber）傳達「結構化、賦權、沉穩」品牌調性，同時確保 CTA 轉化率
2. 如何在 persona_stories 的 Before/After 翻轉中，傳達「我們不打分數，我們幫你看清楚」的品牌差異化
3. 如何確保整頁零出現禁止 UI 模式（分數、星等、排行榜）同時保有充足視覺吸引力

### Step 3: 實作方案

**使用 Option A: 完整程式碼**（Lovable / React + TypeScript + Tailwind CSS）

輸出要求：
- 所有 7 個 sections 完整可執行程式碼
- 每個 section 獨立為單一 React Component（`HeroSection.tsx`, `AntiPatternSection.tsx`, `ThreeStepSection.tsx`, `PainAtlasPreviewSection.tsx`, `PersonaStoriesSection.tsx`, `PricingSection.tsx`, `CtaFooterSection.tsx`）
- `LandingPage.tsx` 主檔整合所有 sections + Sticky Nav 邏輯
- React Query hooks for Atlas stats API（含 stale-while-revalidate 策略）
- React Hook Form + Zod schema for email signup
- IntersectionObserver for scroll-based fade-in animations
- 所有 RWD 斷點（Desktop / Tablet / Mobile）使用 Tailwind responsive classes
- 所有元件狀態（default / hover / loading / error / success / disabled）均已實作

### 品質檢查（部署前必須全部通過）

- [ ] 7 個 Section 全部功能正常且依序渲染
- [ ] Hero CTA 正確導向 `/app/start`；Atlas CTA 正確導向 `/atlas`
- [ ] Anti-pattern 4 張卡片內容完整
- [ ] 三步驟 sample_output 可展開/收合
- [ ] Pain Atlas 氣泡圖 hover tooltip 正常顯示
- [ ] Persona Before/After card flip 動畫流暢
- [ ] 定價 CTA 導向正確 plan 的註冊頁
- [ ] Email signup Zod 驗證正確（格式驗證 + 成功/錯誤/rate-limit 狀態）
- [ ] Sticky nav 捲動行為正確（出現 → 文案切換 → 消失）
- [ ] 三個 RWD 斷點行為符合規格
- [ ] 全頁零出現禁止用語（"驗證點子" / "AI 評分" / "成功機率" / "可行性分析"）
- [ ] 全頁不出現任何數字評分、星等、排行榜元素
- [ ] 色彩系統一致（Primary / Secondary / Accent 使用正確場景）
- [ ] 字體層級正確（Display / H1 / H2 / H3 / Body LG / Body MD / Body SM / Caption）
- [ ] 所有顏色對比度 >= 4.5:1 (WCAG AA)
- [ ] 語意化 HTML（`<nav>`, `<main>`, `<section>`, `<article>`）
- [ ] 完整 aria-label + Tab 順序 + Focus ring (#2D7D8A)
- [ ] 禁止 Inline styles、console.log 殘留、any 型別
- [ ] Lighthouse Performance Score >= 90（SSG + lazy load）
- [ ] FMP < 1.5 秒

---

**執行優先順序**：
1. Global Guideline（色彩 / 字體 / 禁止模式）— 最高優先
2. Page Spec（7 個 section 結構與 copy）— 次之
3. Exception Rules（3 項明確例外）— 最後，且最小化

**版本資訊**：
- Global System Prompt 版本：v1.0
- Assembly 日期：2026-04-09
- 負責人：sunny baby
