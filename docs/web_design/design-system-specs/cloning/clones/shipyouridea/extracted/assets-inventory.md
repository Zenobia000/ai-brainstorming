# Assets Inventory — ShipYourIdea

---

## 字型

| 項目 | 值 |
|------|-----|
| 主要字型 | **Inter**（Variable font, wt 100–900） |
| 來源 | Next.js static media（woff2，self-hosted） |
| fallback | `"Inter Fallback"` → local Arial（size-adjust: 107.12%） |
| 字重使用 | 400（body）/ 500（nav-link, label）/ 600（feature-label, faq-dt）/ 700（heading, cta）/ 800（TBD） |
| 中文支援 | 有（unicode-range 涵蓋 CJK，但 Inter 對中文只提供基礎支援，依賴 OS fallback） |

---

## Icon 風格

| 判斷 | 描述 |
|------|------|
| 風格 | **Line（描邊）**為主，`stroke-width: 1.5`，`stroke-linecap: round`，`stroke-linejoin: round` |
| 來源 | 內嵌 SVG（Heroicons 風格，`viewBox="0 0 24 24"` or `12 12`） |
| 特殊 | 品牌 check icon（`viewBox="0 0 12 12"` fill，custom path）；arrow icon（`viewBox="0 0 10 10"` filled） |

---

## 圖片風格

| 項目 | 判斷 |
|------|------|
| 圖片類型 | **抽象幾何 / 裝飾性 SVG**（無照片，無插圖） |
| Hero 裝飾 | Circuit board SVG（電路板路徑，`stroke-width: 1.5`，`text-indigo-300/25`，雙軸鏡像）|
| Hero 次要 | Dot grid（CSS `.dot-grid.mask-fade`，遮罩淡出） |
| Logo | 點陣圖（`/logo-v2.png` 36×36, 32×32 footer），無法分析具體內容 |
| OG Image | `/og-image.png` 1200×630 |

---

## 背景裝飾

| 名稱 | 技術 |
|------|------|
| Hero gradient | `bg-gradient-to-b from-indigo-50 via-indigo-50/40 to-white` |
| Circuit SVG | 兩組對稱 SVG，`text-indigo-300/25`，z-index 低於內容 |
| Dot grid | CSS class `.dot-grid.mask-fade`（自定義 class，可能為 CSS background-image: radial-gradient） |

---

## 動態 / 互動資產

| 名稱 | 說明 |
|------|------|
| Scroll reveal | `opacity:0 + translateY(24px)` → none，由 IntersectionObserver 觸發（Next.js client component） |
| Tab 切換 | Mock frame 內的 Quick Wins / Section Details tab |
| Arrow hover | `group-hover:translate-x-1`（CTA 按鈕箭頭） |
| Coming Soon badge | 靜態 `position: absolute; top: -3`，無動畫 |
