'use strict';
const advice = {
  static: '先保留原生 HTML／CSS／JavaScript 與假資料。完成一正常、一失敗測試後，再來閱讀本頁；不用現在改成 React。',
  video: '依下方 01–12 操作：需求 → Sheet → Apps Script → React → API 實測 → 安全檢查 → React 建置發布 → 三層驗收。請另開練習專案，勿更改 AIedu 的靜態發布設定。',
  simple: '先用 Apps Script HTML Service 顯示頁面，透過 google.script.run 呼叫後端。先理解讀取、計分、紀錄與權限，再考慮獨立 React。這條路線由 Google 代管介面，不用本頁 React Pages workflow。'
};
document.querySelectorAll('[data-route]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-route]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('route-advice').textContent = advice[button.dataset.route];
  });
});
document.querySelectorAll('[data-evidence]').forEach(input => {
  input.addEventListener('change', () => {
    const done = document.querySelectorAll('[data-evidence]:checked').length;
    document.getElementById('evidence-status').textContent = `已勾選 ${done} / 6。這是自我檢查，不是系統認證。`;
  });
});
