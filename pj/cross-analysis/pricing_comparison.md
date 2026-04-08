# Cross-Analysis 4.1：定價架構比較

> 來源：shipyouridea.today vs ideacheck.cc（2026-04-08）
> 目的：找出兩種定價策略的適用場景與取捨

---

## 概覽

| 維度 | ShipYourIdea | IdeaCheck |
|------|-------------|-----------|
| 定價模型 | 3-tier（Free / Community / Coach Sprint）| 2-tier（Free / Unlimited $3.29/mo）|
| 付費入口 | Coming Soon 佔位（waitlist）| 直接訂閱 |
| 最低付費門檻 | 未定（Coming Soon）| $3.29/mo（月付）|
| 免費限制 | 5 次/天 | 1 次 idea（有限功能）|
| CTA 策略 | waitlist / 聯絡 coach | Subscribe now |
| Grid 寬度 | `sm:grid-cols-3`（3欄）| `sm:grid-cols-2`（2欄）|
| 視覺差異化 | 3 色邊框（indigo / emerald / amber）| 2 卡片對比（outline vs filled）|

---

## 深度分析

### ShipYourIdea：Coming Soon 3-tier

```
Free         Community        Coach Sprint
$0           Coming Soon      Coming Soon
[Get free]   [Join waitlist]  [Contact us]
indigo-200   emerald-200      amber-200
```

**優點**：
- 建立「高價方案存在」的認知錨點（即使未上線）
- Waitlist 收集真實付費意願數據
- 3 個價格欄視覺上更豐富，避免「只有 2 個選擇」的空洞感
- 避免「沒有付費入口」讓用戶無法轉化的問題（仍有 waitlist）

**缺點**：
- 無即時付費收入
- 若 Coming Soon 超過 3 個月，訪客信任感下降
- 增加了用戶期待但可能無法兌現的風險

**適用場景**：
- 產品早期（pre-revenue），核心功能仍在開發
- 想同時測試 2 個付費方案的市場反應
- 創辦人可提供個人 coaching（coach sprint）

---

### IdeaCheck：直接 2-tier 對比

```
Free                    Unlimited
$0                      $3.29/mo
border-gray-200         border-indigo-600 + ring
[Get started free]      [Subscribe now]
(outline button)        (filled button)
```

**優點**：
- 即時轉化路徑，不需等待
- $3.29 低錨點：比一杯咖啡便宜，降低決策阻力
- 2-tier 視覺焦點清晰，Free vs Paid 對比明確
- 精簡 2 欄也避免 3 欄在 mobile 的排版問題

**缺點**：
- 無高價方案作為錨點（無法利用「中間層看起來便宜」心理）
- $3.29 低定價可能讓部分用戶懷疑產品價值
- 收入天花板較低（無企業/高端方案）

**適用場景**：
- 產品可立即交付（即時分析結果）
- 面向個人消費者（micro-SaaS）
- 以量取勝的訂閱模式

---

## 關鍵洞察

### 1. Coming Soon 的使用時機
| 情況 | 建議 |
|------|------|
| 功能開發中，預計 3 個月內上線 | ✅ 使用，搭配倒計時或進度更新 |
| 功能遙遙無期或無明確計畫 | ❌ 移除，換成 waitlist 表單即可 |
| 有多個客戶詢問但尚未產品化 | ✅ 使用，驗證需求 |

### 2. 定價 tier 數量選擇
| 狀況 | 建議 tier 數 |
|------|------------|
| MVP 早期，功能單一 | 2-tier（Free + Pro）|
| 有明確 B2B 客戶 + C2C 用戶 | 3-tier（Free + Team + Enterprise）|
| 想測試 coaching/服務附加 | 3-tier + Services |

### 3. CTA 按鈕視覺策略
- **引導到 Unlimited**：Free CTA 用 outline，Paid CTA 用 filled（IdeaCheck 策略）
- **所有 tier 均引導行動**：每個方案都有 CTA，即使是 Coming Soon（ShipYourIdea 策略）

---

## 適用你的產品時

**若你的產品已可付費交付** → 使用 IdeaCheck 2-tier 模型
**若你的產品在 MVP 驗證階段** → 使用 ShipYourIdea 3-tier + Coming Soon
**定價錨點建議**：即使 2-tier，也可在頁面頂部加一句 "Teams plan coming soon →"

---

*來源：Stage 3 analysis / L2_patterns.md（兩站）*
