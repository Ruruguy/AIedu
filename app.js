(() => {
  const storage = { getItem(k) { try { return window.localStorage.getItem(k); } catch { return null; } }, setItem(k,v) { try { window.localStorage.setItem(k,v); } catch {} } };
  document.body.classList.remove('dark');
  const oldIds = ['prepare','install','mental-model','workspace','first-run','projects','test','security','publish','feedback','extensions','faq','tool-extension'];
  document.querySelectorAll('[data-progress]').forEach((box,i) => { box.dataset.progressId = `prepare-${i}`; });
  document.querySelectorAll('main > section.section:not(.hero)').forEach(section => {
    const label = document.createElement('label'); label.className='section-complete';
    const appendix=['extensions','tool-extension','faq'].includes(section.id);
    label.innerHTML=`<input type="checkbox" data-progress data-progress-id="section-${section.id}"> <span>${appendix?'完成此延伸／資源閱讀（選配）':'完成本節'}</span>`; section.appendChild(label);
  });
  const boxes=[...document.querySelectorAll('[data-progress]')];
  const bar=document.getElementById('progressBar'), label=document.getElementById('progressLabel');
  const key='emsxai-course-progress-v2';
  function updateProgress(){
    const core=boxes.filter(b=>!['section-extensions','section-tool-extension','section-faq'].includes(b.dataset.progressId));
    const percent=Math.round(core.filter(b=>b.checked).length/core.length*100);
    if(bar)bar.style.width=`${percent}%`;if(label)label.textContent=`主線進度 ${percent}%`;
    storage.setItem(key,JSON.stringify(boxes.filter(b=>b.checked).map(b=>b.dataset.progressId)));
  }
  let saved=[];
  try {
    const v2=storage.getItem(key);
    if(v2!==null)saved=JSON.parse(v2);
    else {const originalOrder=[...boxes.filter(b=>b.dataset.progressId.startsWith('prepare-')).map(b=>b.dataset.progressId),...oldIds.map(id=>`section-${id}`)];saved=JSON.parse(storage.getItem('emsxai-course-progress-v1')||'[]').map(i=>originalOrder[i]);}
  } catch {saved=[];}
  if(!Array.isArray(saved))saved=[];
  boxes.forEach(box=>{box.checked=saved.includes(box.dataset.progressId);box.addEventListener('change',updateProgress);});updateProgress();

  const roleContent = {
    care: {
      label: '醫護人員視角',
      headline: '先從交班、衛教或耗材紀錄的重複工作開始',
      summary: '你要練的不是把臨床判斷交給 AI，而是把流程寫清楚、減少重複輸入，並保留人工覆核。',
      project: '優先選「耗材管理」：以班別、領用、效期與交班查核為核心；先用虛構試算表，不連院內系統。',
      test: '測試一筆正常領用、一筆重複登錄及一筆負數數量；確認系統會提示而不是默默寫入。',
      governance: '先問資料是否含病人、同仁或院內營運資訊；若答案是「有」，就不能把課堂原型直接接上正式資料。',
      measure: '除了完成率，也記錄是否減少漏填、重複輸入與交班追問；不要只問「好不好用」。',
      reasoning: '先寫下自己的觀察、優先問題與需要回報的紅旗，再讓 AI 協助整理；AI 不取代臨床評估與通報責任。'
    },
    emt: {
      label: '救護技術員視角',
      headline: '從車輛裝備、AED 情境與勤務表單的現場限制開始',
      summary: '把手套操作、單手操作、噪音、網路不穩與時間壓力寫入需求；工具失效時仍要能回到標準救護流程。',
      project: '優先選「AED 訓練機」或裝備盤點：加入倒數、語音、重新開始及離線備援，但不得模擬成真實醫療指令。',
      test: '測試網路中斷、誤觸、重複按鍵、手機鎖屏與流程重啟；確認 Log 能還原操作順序。',
      governance: '勤務時間、地點、派遣內容與傷病患資訊都可能具敏感性；課堂一律使用虛構情境與匿名代碼。',
      measure: '觀察完成時間、漏做步驟、重新開始次數與需要教官介入的位置，同時保留無工具備援能力。',
      reasoning: '先完成自己的現場評估、風險排序與處置理由，再讓 AI 協助整理事後回顧；緊急決策責任仍在人。'
    },
    doctor: {
      label: '醫師視角',
      headline: '從臨床推理、證據查核與決策責任開始',
      summary: '先獨立形成問題表徵與判斷，再使用 AI 當第二意見；評量重點是查證、校準信任與說明不確定性。',
      project: '可把「考古題」改成虛擬病例或實證問答：先提交自己的鑑別與問題，再顯示 AI 建議與來源查核欄。',
      test: '刻意放入看似合理但來源不足的答案、情境不適用的建議及遺漏重要條件，測試使用者是否會查證。',
      governance: '病歷、影像、語音與院內文件只能進入機構核准系統；本課程公開 AI 工具只使用虛構資料；真實資料即使去識別仍需機構核准。',
      measure: '記錄 AI 是否改變決定、改變理由是否合理、查證來源比例，以及信任過高或過低的情形。',
      reasoning: '採 Think → Commit → Ask AI → Compare → Verify → Reconcile；最後決策、溝通與責任不轉移給 AI。'
    },
    instructor: {
      label: '教官視角',
      headline: '從情境控制、標準流程、故障注入與評核開始',
      summary: 'AI 是可調整難度的訓練助手；教官必須能暫停、覆寫、查看 Log，並確認內容符合現行訓練標準。',
      project: '優先選「AED 訓練機」：設計教官面板、情境階段、關鍵步驟、暫停／重置與事後檢討紀錄。',
      test: '測試跳步、超時、錯誤順序、裝置故障及教官中途介入；系統必須允許安全停止與重設。',
      governance: '每個訓練腳本都要標示版本、適用對象、依據與核准人；AI 臨時產生的內容不可直接當評分標準。',
      measure: '看關鍵步驟、時間點、錯誤型態、提示後改善與跨情境穩定度，不只看最後是否完成。',
      reasoning: '追問學員「你先前怎麼想、AI 改變了什麼、採取行動前還要查什麼」，把推理過程變成可教與可評。'
    },
    educator: {
      label: '教學者視角',
      headline: '從學習目標、鷹架、形成性評量與可近性開始',
      summary: '先定義學員要學會什麼，再決定 AI 放在哪一步；避免工具展示取代真正的學習活動。',
      project: '優先選「考古題整理」：加入主題標籤、錯題回饋、薄弱領域圖與題目來源紀錄，讓結果能回到教學設計。',
      test: '邀請一位初學者與一位熟練者操作，觀察說明是否清楚、回饋是否過早洩漏答案，以及鍵盤與手機可用性。',
      governance: '蒐集學習紀錄前要說明目的、保存期限、可見對象與退出方式；避免用黑箱分數做高風險決定。',
      measure: '同時看前後表現、錯誤類型、提示依賴、遷移到新情境的能力與學員反思，不以滿意度代替成效。',
      reasoning: '要求學員先作答與說明理由，再看 AI 回饋；教師用 DEFT AI 追問證據、差異、查證與下次使用方式。'
    }
  };
  const roleButtons = [...document.querySelectorAll('.role-button')];
  const roleSlots = [...document.querySelectorAll('[data-role-slot]')];
  function applyRole(role) {
    const content = roleContent[role] || roleContent.care;
    roleSlots.forEach(slot => {
      const key = slot.dataset.roleSlot;
      if (content[key]) slot.textContent = content[key];
    });
    roleButtons.forEach(button => {
      const active = button.dataset.role === role;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    storage.setItem('emsxai-role', role);
  }
  roleButtons.forEach(button => button.addEventListener('click', () => applyRole(button.dataset.role)));
  applyRole(storage.getItem('emsxai-role') || 'care');

  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', async () => {
      const code = button.parentElement.querySelector('code');
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.innerText);
      } catch (_) {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges(); selection.addRange(range);
        document.execCommand('copy'); selection.removeAllRanges();
      }
      const old = button.textContent;
      button.textContent = '已複製'; button.classList.add('copied');
      setTimeout(() => { button.textContent = old; button.classList.remove('copied'); }, 1400);
    });
  });

  const search = document.getElementById('glossarySearch');
  const terms = [...document.querySelectorAll('[data-term]')];
  const filters = [...document.querySelectorAll('.filter-button')];
  let category = 'all';
  function filterTerms() {
    const query = (search?.value || '').trim().toLowerCase();
    terms.forEach(term => {
      const haystack = `${term.dataset.term} ${term.textContent}`.toLowerCase();
      const categories = (term.dataset.category || '').split(/\s+/);
      term.hidden = !(haystack.includes(query) && (category === 'all' || categories.includes(category)));
    });
  }
  search?.addEventListener('input', filterTerms);
  filters.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    filters.forEach(item => item.classList.toggle('active', item === button));
    filterTerms();
  }));

  const tabButtons = [...document.querySelectorAll('.deploy-tab')];
  const tabPanels = [...document.querySelectorAll('.deploy-panel')];
  tabButtons.forEach(button => button.addEventListener('click', () => {
    const target = button.dataset.deploy;
    tabButtons.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-selected', String(item === button)); });
    tabPanels.forEach(panel => { panel.classList.toggle('active', panel.dataset.panel === target); });
  }));

  const menu = document.getElementById('menuButton');
  const nav = document.getElementById('courseNav');
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); }));

  const links = [...document.querySelectorAll('.course-nav nav a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
  }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .2, .6] });
  sections.forEach(section => observer.observe(section));

  document.getElementById('resetProgress')?.addEventListener('click', () => {
    if (!confirm('確定清除本機的課程勾選進度？')) return;
    boxes.forEach(box => { box.checked = false; });
    updateProgress();
  });
})();
