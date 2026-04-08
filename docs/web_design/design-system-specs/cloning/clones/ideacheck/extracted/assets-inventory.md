# Assets Inventory — IdeaCheck

---

## 字型

| 項目 | 值 |
|------|-----|
| 主要字型 | **Inter**（Variable font, wt 100–900） |
| 來源 | Next.js static media（woff2，self-hosted，與 ShipYourIdea 同一 woff2 hash） |
| fallback | `"Inter Fallback"` → local Arial（size-adjust: 107.12%） |
| 字重使用 | 400（body）/ 500（nav-link）/ 600（card-title, faq-dt）/ 700（heading, score-label）/ 800（`font-extrabold` score number） |
| 中文支援 | 同 ShipYourIdea（依賴 OS fallback） |

---

## Icon 風格

| 判斷 | 描述 |
|------|------|
| 風格 | **Line（描邊）**為主，`stroke-width: 1.5`，`stroke-linecap: round`，`stroke-linejoin: round` |
| 來源 | 內嵌 SVG（Heroicons 風格，`viewBox="0 0 24 24"`）|
| Source card icons | Search / Bar chart / Line chart / Eye —— Heroicons Outline |
| Lock icon | `path fill-rule="evenodd"` filled（用於 paywall 維度標籤）|
| Check icon | `viewBox="0 0 12 12"` fill，與 ShipYourIdea 相同 |

---

## 圖片風格

| 項目 | 判斷 |
|------|------|
| 圖片類型 | **抽象幾何 / 裝飾性 SVG**（無照片，無插圖，與 ShipYourIdea 相同策略） |
| Hero 裝飾 | 相同 circuit board SVG（完全複用）|
| Hero 次要 | Dot grid（相同 `.dot-grid.mask-fade`）|
| Score Ring | 內嵌 SVG（`circle` + `stroke-dasharray/dashoffset`），orange stroke |
| Logo | 點陣圖（`/logo-v2.png` 28×28, 24×24 footer）|

---

## 背景裝飾

| 名稱 | 技術 |
|------|------|
| Hero gradient | `bg-gradient-to-b from-indigo-50 via-indigo-50/40 to-white`（與 ShipYourIdea 相同）|
| Data-sources glow | `div.h-[500px].w-[500px].rounded-full.bg-indigo-500/[0.04].blur-[100px]`（radial glow，IdeaCheck 獨有）|
| Circuit SVG | 相同兩組對稱 SVG |

---

## 動態 / 互動資產

| 名稱 | 說明 |
|------|------|
| Scroll reveal | `opacity:0 + translateY(24px)` → none，IntersectionObserver |
| Score ring | 靜態 SVG stroke-dashoffset（無 count-up 動畫） |
| Tab 切換 | Mock frame 內 Overview / Detailed Analysis |
| Source card hover | `hover:border-indigo-300 hover:bg-gray-50/50`（IdeaCheck 獨有交互）|
| Pricing card hover | `transition-shadow hover:shadow-lg` |
| Arrow hover | `group-hover:translate-x-1` |

---

## 與 ShipYourIdea 的差異重點

| 項目 | ShipYourIdea | IdeaCheck |
|------|-------------|----------|
| Logo size | 36px nav / 32px footer | 28px nav / 24px footer（更小） |
| 特殊視覺元件 | Colored info cards（green/amber/indigo） | Score Ring（SVG circular progress） |
| 額外裝飾 | — | Radial glow blur（data-sources）|
| Icon 特殊用途 | — | Lock icon（paywall 維度）|
| 字重特殊 | — | `font-extrabold`（score number） |
