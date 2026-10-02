# Antigravity 與 Codex：課程工具清單

## 快捷鍵與指令補充（2026-09-24 17:49）

[Antigravity 快捷鍵與指令速查](Antigravity快捷鍵與指令_20260924_1749.md)：獨立 App 的 Mac／Windows 導航鍵、聊天指令、IDE 對照、CLI 延伸與醫療救護練習。先教找規格、回到輸入框、要求計畫與人工核准。快捷鍵依產品、版本與焦點核對，不要求 CLI 或高自主指令全部實作。


版本：2026-09-24 17:02（Asia/Taipei）

適用對象：醫師、醫護人員、救護技術員、教官與教學者。學習順序為 Antigravity → 完成並驗收原型 → Codex 接續開發。

## 先懂一件事：Agent 與執行環境不同

Antigravity／Codex 是協助規劃、寫程式、修改和測試的工具；Git 管版本，Node.js／Python 執行特定程式，Docker 則提供容器環境。不是使用 AI Agent 就必須把所有工具裝齊。

首次實作優先採用 HTML、CSS、JavaScript 與虛構資料；先完成一條能測試的流程，再按需求增加工具。

## 一、基本準備：依學習階段完成

| 項目 | 使用時機與用途 | 官方入口 | 成功條件 |
|---|---|---|---|
| 電腦、網路與安裝權限 | 本機實作；院方電腦先確認資訊政策 | 不需另購伺服器或網域 | 能安裝指定工具、開啟課程資料夾 |
| Chrome 瀏覽器 | 開啟、操作與驗收網頁；Google 入門教材使用 Chrome | [Chrome](https://www.google.com/chrome/) | 能開啟練習頁面並操作按鈕 |
| Google Antigravity | 第一階段主工具；本教材以獨立 App 為主 | [官方下載](https://antigravity.google/download) | 能登入、選對 Project、讀取練習文件 |
| Google 帳號 | 登入 Antigravity；個人與機構帳號條件不同 | [Google 帳號](https://accounts.google.com/) | 已完成登入及可用額度確認 |
| Codex 使用環境 | 在 Codex 階段開始前準備，不必與 Antigravity 同時教 | [官方桌面版指引](https://learn.chatgpt.com/docs/app) | 能進入 Codex、開啟專案並回覆測試問題 |
| ChatGPT 帳號 | 本課程以帳號登入 Codex 為主 | [官方快速入門](https://learn.chatgpt.com/docs/quickstart) | 確認功能、額度與組織政策允許使用 |
| GitHub 帳號 | 需要儲存或發布作品時使用；可由組內指定成員操作 | [建立帳號](https://github.com/signup) | 完成信箱驗證，能建立練習儲存庫 |
| 專用練習資料夾 | 限定 Agent 操作範圍，例如 EMS-AI-Class | 本機建立即可 | 只有教材、虛構資料與練習作品 |

Antigravity 的獨立 App、IDE、CLI／SDK 是不同入口，初學者不必全裝；請確認課程指定的產品與版本。[Google 官方入門課](https://codelabs.developers.google.com/getting-started-google-antigravity)

查核時 OpenAI 官方桌面指引是從 ChatGPT App 進入 Codex；既有獨立 Codex App 或不同版本的畫面可能不同。以學員實際介面與官方說明確認，不要求已可正常使用的人重複安裝。桌面版、IDE 擴充套件、CLI 是不同使用入口，不必全部具備。[官方指引](https://learn.chatgpt.com/docs/app)

登入不代表無限額度。開課前確認實際方案與存取權，不預設免費或一定要購買訂閱；本課程基本路線不要求購買 API 額度。

## 二、依案例需要：Git 與 Node.js

| 工具 | 白話解釋 | 何時需要 | 安裝與驗證 |
|---|---|---|---|
| Git | 保存版本、比較修改、必要時回復 | 要讓 Agent 用 Git 記錄版本或推送 GitHub 時；僅網頁上傳可暫不裝 | [官方安裝頁](https://git-scm.com/install/)；輸入 `git --version` |
| Node.js LTS | 執行 JavaScript 開發工具與套件 | 作品使用 npm、Vite、React 或 Node 後端時；純靜態網頁不一定需要 | [官方下載](https://nodejs.org/en/download)；輸入 `node --version` 與 `npm --version` |

Git 是本機版本管理工具；GitHub 是網路上的程式託管平台，兩者不同。GitHub Desktop 是圖形介面選項，不能以它能開啟就推定 Agent 的終端機能使用 `git`，仍需實測。

安裝後重新開啟終端機或 Agent。顯示版本號只代表命令可找到，還要啟動課程範例，確認作品確實能執行。不要同時裝多種套件管理器來「試到能用」。

## 三、進階選配：有任務才加裝

| 工具 | 對應用途 | 準備方式與界線 |
|---|---|---|
| Python | 考古題檔案整理、CSV 統計、批次處理 | [官方下載](https://www.python.org/downloads/)；僅 Python 程式需要時安裝。Windows 可驗證 `py --version` 或 `python --version`，macOS 常用 `python3 --version` |
| VS Code | 閱讀、手動修改程式與 Markdown | [官方下載](https://code.visualstudio.com/download)；使用桌面 Agent 不必先加裝另一套編輯器 |
| GitHub Desktop | 用圖形介面管理版本與推送 | [官方下載](https://desktop.github.com/download/)；選配，不是註冊 GitHub 的前提 |
| Codex CLI | 終端機操作、腳本自動化 | [官方安裝說明](https://learn.chatgpt.com/docs/codex/cli)；有獨立安裝程式，亦能用 npm 安裝。只有採 npm 路線才需相應 Node.js／npm 環境；不必與桌面版全裝 |
| Docker Desktop | 執行網站後端、資料庫等容器 | [官方安裝說明](https://docs.docker.com/get-started/get-docker/)；先確認電腦、機構授權條件及資訊政策，不要求關閉安全防護 |
| Docker Compose | 用 compose.yaml 管理多個容器服務 | Docker Desktop 已包含；用 `docker compose version` 驗證。Linux 的安裝路線可能不同，不照搬桌面版步驟 |
| Firecrawl | 擷取授權網站內容，整理成可處理的文字或資料 | [官方文件](https://docs.firecrawl.dev/)；先選雲端操作或 API 路線。雲端服務不以 Docker 為前提，也不要求先裝 CLI。API 金鑰只放適當的伺服器環境，不放公開前端 |
| 資料庫／試算表服務 | 耗材共用、作答紀錄與回饋保存 | 先確定多人同步、權限、備份與刪除需求，再選服務；不用預先裝 MySQL、PostgreSQL 等所有資料庫 |

Docker Desktop 包含 Docker Compose；無需另外重複安裝舊版獨立 Compose。[Docker 官方說明](https://docs.docker.com/compose/install/)

## 四、醫療救護案例如何選工具

| 案例 | 第一版工具 | 確定需求後再增加 | 注意界線 |
|---|---|---|---|
| 考古題整理與練習 | Antigravity、Chrome、少量虛構題目或合法授權題目 | Python 做批次整理；Firecrawl 擷取允許的公開網頁；多人作答再評估後端 | 先確認來源、下載與再利用授權；保留人工核對答案，不自動公開抓到的內容 |
| AED 教學模擬 | Antigravity、Chrome、教官核可的固定訓練腳本 | 確有語音需求再評估瀏覽器權限與服務 | 明確標示教學模擬，不連接真實設備，不生成即時臨床處置指示 |
| 耗材管理原型 | Antigravity、Chrome、虛構品項與數量 | Node.js 後端、試算表或資料庫；需要容器再用 Docker／Compose | 本機保存不等於多人共用；先測試負數、超量領用、權限與異動紀錄 |
| Codex 接續改良 | Codex、同一份專案、SPEC／README／TESTS／HANDOFF | 保留該專案原本的執行環境，缺什麼再補 | 不要只因換 Agent 就重建架構或重裝全部工具 |

