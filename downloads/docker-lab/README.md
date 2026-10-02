# Docker 本機練習包

版本：2026-09-17 14:40

解壓縮後，在含 compose.yaml 的資料夾開啟終端機。
先安裝並啟動 Docker Desktop。

依序執行：

```bash
docker info
docker compose config
docker compose up -d
docker compose ps
docker compose logs --tail=30 web
```

開啟 http://localhost:8080 。修改 public/index.html 後重新整理。
停止：docker compose down 。再次啟動：docker compose up -d 。
本例的 public 是主機唯讀掛載，停止服務不會刪除檔案。
不要加 -v 當作例行停止命令。8080 若已被占用可改成 8081。
首次啟動需網路下載映像檔。本例未提供公開網域、資料庫或 AI API。
映像檔標籤可更新，課堂正式驗證後應記錄 digest。

目前產製環境未安裝 Docker，因此已做 YAML 與檔案結構檢查，尚未實機啟動容器。
