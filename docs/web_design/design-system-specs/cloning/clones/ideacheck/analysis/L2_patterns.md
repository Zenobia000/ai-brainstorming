# L2 Patterns — ideacheck

> 對齊 `02_patterns_spec.md` 結構
> 來源：https://ideacheck.cc/ （static HTML via curl）
> 日期：2026-04-08

---

## 1. Sticky Backdrop Navigation

- **Where**: `<header>` 元素 — `class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-950/5"`
- **Layout**: 3-col grid（logo | center links | actions），中央連結用 `hidden sm:flex` 在 mobile 收起。
- **Rationale**: 半透明 + backdrop blur 讓主內容向上滾動時透出底色，維持 brand 連續感；border 用 `gray-950/5` 取代純灰，視覺較柔和。
- **Confidence**: HIGH（直接出現在 SSR HTML）。
- **相關 spec**: `02_patterns_spec.md` → Navigation Patterns。

## 2. Max-width Centered Container

- **Where**: nav 與 footer 皆使用 `mx-auto max-w-6xl px-6`。
- **Rationale**: 統一橫向節奏；`max-w-6xl`（72rem）為 marketing landing 常見閱讀寬度，左右 24px padding 兼顧 mobile。
- **Confidence**: HIGH。
- **相關 spec**: Layout Patterns / Container Strategy。

## 3. Responsive Flex-Column-to-Row

- **Where**: footer 內容容器 `flex-col items-center justify-between gap-4 sm:flex-row`。
- **Rationale**: Mobile 首先垂直堆疊（gap-4 控制節奏），sm breakpoint（≥640px）切換為水平 row；單一 utility class 處理 RWD，無需 media query。
- **Confidence**: HIGH。
- **相關 spec**: Layout Patterns / Responsive Stacking。

## 4. Inline Idea-Input Form (InteractiveDemo)

- **Where**: 元件名稱 `InteractiveDemo`（client component），HTML 中為 placeholder div + script chunks。
- **Rationale**: 命名暗示「在 hero/demo 區直接 inline 輸入想法 → AI scoring → 即時回饋」的單欄式表單，無 modal 中介。屬於「降低首次體驗門檻」的常見 SaaS landing 模式。
- **Confidence**: LOW（client-rendered，靜態 HTML 看不到欄位、label、validation）。
- **相關 spec**: Form Patterns（待 L3 補完）。

## 5. Provider-Driven Internationalization

- **Where**: `<html lang="zh-Hant">`；layout 中 `LocaleProvider` + `LanguageSwitcher` 元件。
- **Rationale**: 預設繁中；URL 不含 locale segment（無 `/en` `/zh`），推斷以 cookie / localStorage / context state 決定語言。優點：URL 乾淨；代價：SEO 多語替代頁難實作。
- **Confidence**: MEDIUM（HTML 可見 lang 屬性與元件名稱，state 機制需驗證）。
- **相關 spec**: i18n Patterns。

## 6. Soft Auth Gate

- **Where**: layout 包 `AuthProvider`；nav 出現 Login 連結指向 `/login`；landing 內容對未登入使用者完全可讀。
- **Rationale**: 「內容公開、行動需登入」的 soft gate — 鼓勵 SEO 抓取與分享，僅在使用者要儲存/送出 idea 時才要求帳號。
- **Confidence**: HIGH（HTML 可見 auth 連結與 provider）。
- **相關 spec**: Auth / Access Control Patterns。

## 7. Anchor-Based Single-Page Navigation

- **Where**: nav 連結 `#demo`、`#data-sources`、`#pricing`、`#faq`。
- **Rationale**: 整個 landing 為單頁；nav 不導向多 route，僅滾動到 section。對 marketing 頁面有利（單一 URL 集中所有 SEO 訊號），需搭配 scroll-margin-top 處理 sticky header 遮擋。
- **Confidence**: HIGH。
- **相關 spec**: Navigation Patterns / In-Page Anchors。

## 8. Social-Share-Optimized Metadata

- **Where**: `<head>` 內完整 `og:title`、`og:description`、`og:image`（1200x630）、`og:image:alt`、`og:locale`、`twitter:card="summary_large_image"`、`twitter:image` 等。
- **Rationale**: 1200x630 為 OG 標準比例；同時設定 og 與 twitter 雙協定，確保跨平台分享預覽一致。Locale 一併標示便於多語社群擴散。
- **Confidence**: HIGH。
- **相關 spec**: SEO / Metadata Patterns。

---

## Cross-References

- **shipyouridea.today**: 共用同一 Next.js codebase 與整體 nav 結構；差異 — shipyouridea 的 nav 簡化（無 `#data-sources` 連結），暗示 ideacheck 對「資料來源透明度」更重視（可能與其 idea-validation 定位有關）。
- 兩站共用 patterns 1, 2, 3, 5, 6, 8；pattern 7 的 anchor 集合不同；pattern 4 的 InteractiveDemo 為 ideacheck 獨有。

## Open Questions（需 L3 階段以瀏覽器渲染補完）

- InteractiveDemo 的欄位結構、validation、loading state、error handling
- LanguageSwitcher 切換後的 state 持久化機制（cookie? URL? localStorage?）
- Auth gate 觸發點（哪個按鈕跳 /login？是 redirect 還是 modal？）
