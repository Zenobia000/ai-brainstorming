# Lesson: Playwright MCP 在受限環境裝不了 chrome channel

- **日期**: 2026-04-07
- **發生階段**: Phase 1 Capture 啟動前（環境準備）
- **嚴重度**: HIGH（工作流被卡住，無法執行任何 capture）

## 症狀

`@playwright/mcp` 安裝完成、`claude mcp list` 顯示 ✓ Connected，但呼叫第一個工具就丟：

```
Error: server: Chromium distribution 'chrome' is not found at /opt/google/chrome/chrome
Run "npx playwright install chrome"
```

## 根本原因

`@playwright/mcp` 預設啟動的是 **`chrome` channel**（也就是系統安裝的 Google Chrome），不是 Playwright 自帶的 chromium。在公司／受管理的 Linux 上：

1. `/opt/google/chrome/chrome` 不存在
2. `npx playwright install chrome` 會試圖跑 `reinstall_chrome_stable_linux.sh`，這個 script 需要 root 透過 apt 安裝 deb 包
3. sudoers 通常**禁止**一般使用者以 root 執行任意 shell script → 安裝失敗
4. 用 `sudo npx ...` 反而踩到另一個坑：root 的 PATH 指向舊版 node（v12），`playwright` CLI 跑不起來

→ 結論：在受限 Linux 上，**不能**用 `chrome` channel。

## 失敗路徑（不要再走）

| 嘗試 | 結果 |
| :--- | :--- |
| `npx playwright install chrome` | sudoers 拒絕執行 reinstall script |
| `sudo npx playwright install chrome` | root 的 node v12 與 playwright 不相容 |
| 重啟 session 期待 MCP 自動 fallback | 不會 fallback，channel 是 hardcode |

## 正解

讓 MCP 用 **Playwright 自帶的 chromium**（純 userland，不需 root）：

```bash
# 1. 下載 chromium 到 ~/.cache/ms-playwright（無需 sudo）
npx playwright install chromium

# 2. 重新註冊 MCP，明確指定 --browser chromium
claude mcp remove playwright
claude mcp add playwright -- npx -y @playwright/mcp@latest --browser chromium

# 3. 驗證
claude mcp list   # 應該看到 playwright ✓ Connected

# 4. /exit 然後重啟 claude，新 session 才會載入新 MCP 設定
```

關鍵旗標：`--browser chromium`。沒這個就會回到 `chrome` channel 的死路。

## 適用條件

走「正解」之前先確認：

- [ ] 你**沒有** root 權限，或不能無條件 sudo 跑任意 script
- [ ] `/opt/google/chrome/chrome` 不存在
- [ ] 你不需要測試「真實 Chrome 限定」的行為（DRM、特定 codec、Widevine）
  - 99% 的 design cloning capture 工作（截圖 + computed style + DOM）chromium 完全夠用

## 把這條寫進前置檢查

`prompts/01_capture.md` 與 `CLONE_WORKFLOW_PLAYBOOK.md` 在「環境準備」段落應加上：

> **若 Playwright MCP 第一次呼叫工具就報 `chrome is not found`**：
> 你的環境裝不了 Chrome channel。改用 chromium：
> `claude mcp add playwright -- npx -y @playwright/mcp@latest --browser chromium`
> 詳見 `lessons/2026-04-07-playwright-mcp-chrome-channel.md`

## 一句話教訓

> 在受限環境裡，**任何工具的「預設安裝路徑」都要假設會失敗**。MCP 註冊時就明確指定 userland-only 的選項（`--browser chromium`），不要等跑起來才被預設值咬到。
