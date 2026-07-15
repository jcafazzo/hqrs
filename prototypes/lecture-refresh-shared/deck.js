(() => {
  const lecture = window.LECTURE || {};
  const teaching = lecture.teachingPath || [];
  const originals = lecture.originalMap || [];
  const slide = document.querySelector('.slide');
  const progress = document.querySelector('.progress-bar');
  const position = document.querySelector('[data-position]');
  const sectionLabel = document.querySelector('[data-section]');
  const outlineList = document.querySelector('[data-outline-list]');
  const outlineSearch = document.querySelector('[data-outline-search]');
  const notes = document.querySelector('[data-notes]');
  const sourceButton = document.querySelector('[data-action="source"]');
  const panels = [...document.querySelectorAll('.drawer,.help-dialog')];
  let mode = sessionStorage.getItem(`${lecture.slug}-mode`) || 'teaching';
  if (mode === 'originals' && !originals.length) mode = 'teaching';
  let index = 0;
  let forceOriginal = false;
  let lastFocused = null;

  const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const list = () => mode === 'originals' ? originals : teaching;
  const current = () => list()[index];
  const mark = () => `<img class="queen-mark" src="../assets/brand/queens-emblem-right-v3.png" alt="Queen's University">`;
  const sourcePath = page => `assets/source/page-${String(page).padStart(3,'0')}.jpg`;
  const num = entry => `<span class="slide-number">${entry.sourcePage ? `p.${String(entry.sourcePage).padStart(3,'0')}` : String(index + 1).padStart(2,'0')}</span>`;
  const chrome = (entry, eyebrow = '') => `<p class="course-line">HQRS 846 · ${esc(entry.section || lecture.shortTitle || '')}</p>${mark()}${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}`;

  function titleSlide(entry){
    return {className:'paper title-slide',html:`${chrome(entry)}<h1 class="display">${entry.htmlTitle || esc(entry.title)}</h1><div class="credentials"><strong>Joseph Cafazzo <small>PhD PEng</small></strong>${esc(entry.subtitle || lecture.meta?.subtitle || '')}</div><div class="terrain" aria-hidden="true"></div><div class="route" aria-hidden="true"></div>`};
  }
  function statementSlide(entry){
    const words = String(entry.title || '').split(/\s+/).length;
    const size = entry.size || (words <= 9 ? '' : words <= 19 ? 'wide' : 'compact');
    return {className:entry.theme || 'blue',html:`${chrome(entry,entry.eyebrow || '')}<h1 class="display ${size}">${entry.htmlTitle || esc(entry.title)}</h1>${entry.body ? `<p class="support">${entry.body}</p>` : ''}${citation(entry)}`};
  }
  function sourceSlide(entry, originalOnly=false){
    const page = entry.sourcePage;
    return {className:`source-slide ${entry.fit === 'contain' ? 'contain' : ''}`,html:`<div class="source-placeholder" aria-hidden="true"><strong>Classroom source image</strong><span>Available in the private teaching build</span></div><img class="source-page" src="${sourcePath(page)}" alt="Original lecture slide ${page}: ${esc(entry.title)}"><div class="field-label"><strong>${originalOnly ? 'Original' : esc(entry.label || 'Observe')}</strong><span>${esc(entry.caption || entry.title)}</span></div>${entry.status ? `<span class="status-tag ${esc(entry.status)}">${esc(entry.status)}</span>` : ''}`};
  }
  function metricsSlide(entry){
    const metrics = (entry.metrics || []).map(item => `<div class="metric"><strong>${item.value}</strong><span>${item.label}</span>${item.detail ? `<em>${item.detail}</em>` : ''}</div>`).join('');
    return {className:entry.theme || 'blue',html:`${chrome(entry,entry.eyebrow || '')}<div class="metric-grid" style="--columns:${Math.max(1,entry.metrics?.length || 1)}">${metrics}</div>${entry.body ? `<p class="support">${entry.body}</p>` : ''}${citation(entry)}`};
  }
  function compareSlide(entry){
    const cards = entry.cards || [];
    return {className:entry.theme || 'paper',html:`${chrome(entry,entry.eyebrow || '')}<div class="compare"><article class="compare-card"><h2>${cards[0]?.title || ''}</h2><p>${cards[0]?.body || ''}</p></article><div class="compare-arrow">${entry.arrow || '→'}</div><article class="compare-card"><h2>${cards[1]?.title || ''}</h2><p>${cards[1]?.body || ''}</p></article></div>${citation(entry)}`};
  }
  function stepsSlide(entry){
    const steps = (entry.steps || []).map((text,i) => `<div class="step"><strong>${String(i+1).padStart(2,'0')}</strong><span>${text}</span></div>`).join('');
    return {className:entry.theme || 'paper',html:`${chrome(entry,entry.eyebrow || '')}<div class="steps">${steps}</div>${citation(entry)}`};
  }
  function flowSlide(entry){
    const nodes = (entry.nodes || []).map(node => `<div class="flow-node"><b>${node.kicker || ''}</b><strong>${node.title}</strong><span>${node.body || ''}</span></div>`).join('');
    return {className:entry.theme || 'blue',html:`${chrome(entry,entry.eyebrow || '')}<div class="flow">${nodes}</div>${entry.body ? `<p class="support">${entry.body}</p>` : ''}${citation(entry)}`};
  }
  function blueprintSlide(entry){
    const rows = (entry.rows || []).map(row => `<div class="blueprint-row"><div class="blueprint-label">${row.label}</div><div class="blueprint-cells" style="--cells:${row.cells.length}">${row.cells.map(cell => `<div class="blueprint-cell">${cell}</div>`).join('')}</div></div>`).join('');
    return {className:'paper',html:`${chrome(entry,entry.eyebrow || '')}<div class="blueprint">${rows}</div>${citation(entry)}`};
  }
  function rolesSlide(entry){
    const roles = (entry.roles || []).map(role => `<article class="role-card"><strong>${role.title}</strong><span>${role.body || ''}</span></article>`).join('');
    return {className:entry.theme || 'paper',html:`${chrome(entry,entry.eyebrow || '')}<h1 class="role-title">${entry.htmlTitle || esc(entry.title)}</h1><div class="role-grid" style="--role-columns:${entry.columns || 3}">${roles}</div>${entry.body ? `<p class="role-foot">${entry.body}</p>` : ''}${citation(entry)}`};
  }
  function quoteSlide(entry){
    return {className:'paper',html:`${chrome(entry,entry.eyebrow || '')}<blockquote class="quote">${entry.htmlTitle || esc(entry.title)}</blockquote><cite class="quote-by">${esc(entry.by || '')}</cite>${citation(entry)}`};
  }
  function assetSlide(entry){
    return {className:`asset-slide ${entry.fit === 'contain' ? 'contain' : ''}`,html:`<img class="asset-page" src="${esc(entry.asset)}" alt="${esc(entry.alt || entry.title)}"><div class="field-label"><strong>${esc(entry.label || 'Evidence')}</strong><span>${esc(entry.caption || entry.title)}</span></div>${citation(entry)}`};
  }
  function citation(entry){
    if (!entry.source) return '';
    const label = entry.sourceLabel || entry.source.replace(/^https?:\/\//,'').split('/')[0];
    const second = entry.source2 ? ` + <a href="${esc(entry.source2)}" target="_blank" rel="noreferrer">${esc(entry.sourceLabel2 || entry.source2.replace(/^https?:\/\//,'').split('/')[0])}</a>` : '';
    return `<p class="small-source">Source: <a href="${esc(entry.source)}" target="_blank" rel="noreferrer">${esc(label)}</a>${second}${entry.caveat ? ` · ${esc(entry.caveat)}` : ''}</p>`;
  }
  function originalTreatment(entry){
    const text = String(entry.sourceText || '').trim();
    const words = text.split(/\s+/).filter(Boolean).length;
    if (entry.native && text && words <= 28) return statementSlide({...entry,title:text,eyebrow:`${entry.status} · original p.${entry.sourcePage}`,theme:entry.status === 'park' ? 'gold' : 'paper'});
    return sourceSlide(entry,true);
  }
  function treatment(entry){
    if (forceOriginal && entry.sourcePage) return sourceSlide(entry,true);
    if (mode === 'originals') return originalTreatment(entry);
    const types = {title:titleSlide,statement:statementSlide,source:sourceSlide,metrics:metricsSlide,compare:compareSlide,steps:stepsSlide,flow:flowSlide,blueprint:blueprintSlide,roles:rolesSlide,quote:quoteSlide,asset:assetSlide};
    return (types[entry.type] || statementSlide)(entry);
  }
  function render(){
    const pages = list();
    if (!pages.length){slide.innerHTML='<h1>No slides loaded.</h1>';return}
    index=Math.max(0,Math.min(pages.length-1,index));
    const entry=pages[index];
    const view=treatment(entry);
    slide.className=`slide ${view.className || 'blue'} ${entry.type === 'prompt' ? 'question-slide' : ''}`;
    slide.innerHTML=`${view.html}${view.html.includes('slide-number') ? '' : num(entry)}`;
    const sourceImage = slide.querySelector('.source-page');
    if (sourceImage) sourceImage.addEventListener('error',()=>slide.classList.add('source-unavailable'),{once:true});
    slide.setAttribute('aria-label',entry.title || `Slide ${index+1}`);
    position.textContent=`${index+1} / ${pages.length}${entry.sourcePage ? ` · p.${entry.sourcePage}` : ''}`;
    sectionLabel.textContent=entry.section || lecture.shortTitle || '';
    progress.style.width=`${((index+1)/pages.length)*100}%`;
    document.querySelectorAll('[data-mode]').forEach(button=>button.classList.toggle('is-active',button.dataset.mode===mode));
    sourceButton.classList.toggle('is-active',forceOriginal);
    sourceButton.disabled=!entry.sourcePage;
    notes.innerHTML=`<h3>Teaching intent</h3><p>${entry.note || entry.reason || 'Preserve the original teaching beat.'}</p>${entry.delivery ? `<h3>Delivery</h3><p>${entry.delivery}</p>` : ''}${entry.caveat ? `<h3>Caveat</h3><p>${entry.caveat}</p>` : ''}${entry.source ? `<h3>Evidence</h3><p><a href="${esc(entry.source)}" target="_blank" rel="noreferrer">Open primary source</a>${entry.source2 ? ` · <a href="${esc(entry.source2)}" target="_blank" rel="noreferrer">Open second source</a>` : ''}</p>` : ''}<h3>Editorial status</h3><p>${entry.sourcePage ? `Original page ${entry.sourcePage} · ` : 'New 2026 material · '}${entry.status || (mode === 'teaching' ? 'teaching path' : 'inventory')}</p>`;
    document.title=`${index+1} · ${entry.title || lecture.shortTitle}`;
    history.replaceState(null,'',`#${mode === 'originals' ? 'p' : 's'}-${entry.sourcePage || entry.id || index+1}`);
    preload(pages[index+1]);preload(pages[index-1]);refreshOutline();
  }
  function preload(entry){if(!entry?.sourcePage)return;const image=new Image();image.src=sourcePath(entry.sourcePage)}
  function go(delta){index=Math.max(0,Math.min(list().length-1,index+delta));forceOriginal=false;render()}
  function setMode(next){if(next==='originals'&&!originals.length)return;mode=next;sessionStorage.setItem(`${lecture.slug}-mode`,mode);index=0;forceOriginal=false;buildOutline();render()}
  function goTo(target){const found=list().findIndex((entry,i)=>String(entry.id || entry.sourcePage || i+1)===String(target));if(found>=0){index=found;forceOriginal=false;render();closePanels()}}
  function closePanels(restoreFocus=true){
    panels.forEach(panel=>{panel.classList.remove('open');panel.setAttribute('aria-hidden','true');panel.inert=true});
    if(restoreFocus&&lastFocused?.isConnected)lastFocused.focus();
    if(restoreFocus)lastFocused=null;
  }
  function openPanel(selector){
    const trigger=document.activeElement;
    closePanels(false);
    lastFocused=trigger instanceof HTMLElement?trigger:null;
    const panel=document.querySelector(selector);
    panel.inert=false;panel.classList.add('open');panel.setAttribute('aria-hidden','false');
    requestAnimationFrame(()=>panel.querySelector('input,button,a,[tabindex]:not([tabindex="-1"])')?.focus());
  }
  function restoreFromHash(){
    const match=location.hash.match(/^#(s|p)-(.+)$/);
    if(!match)return;
    mode=match[1]==='p'&&originals.length?'originals':'teaching';
    sessionStorage.setItem(`${lecture.slug}-mode`,mode);
    const found=list().findIndex((entry,i)=>String(entry.id || entry.sourcePage || i+1)===decodeURIComponent(match[2]));
    if(found>=0)index=found;
  }
  function refreshOutline(){document.querySelectorAll('.outline-item').forEach(button=>button.classList.toggle('current',button.dataset.key===String(current()?.id || current()?.sourcePage || index+1)))}
  function buildOutline(query=''){
    const needle=query.trim().toLowerCase();
    const items=list().map((entry,i)=>({...entry,_index:i,_key:String(entry.id || entry.sourcePage || i+1)})).filter(entry=>!needle || `${entry.title} ${entry.section} ${entry.sourcePage || ''}`.toLowerCase().includes(needle));
    outlineList.innerHTML=items.map(entry=>`<button class="outline-item" type="button" data-key="${esc(entry._key)}"><span class="page">${entry.sourcePage ? `p.${String(entry.sourcePage).padStart(3,'0')}` : String(entry._index+1).padStart(2,'0')}</span><span><strong>${esc(entry.title || 'Visual source')}</strong><small>${esc(entry.section || '')}</small></span><em>${esc(entry.status || (mode==='teaching'?'main':'source'))}</em></button>`).join('');
    outlineList.querySelectorAll('[data-key]').forEach(button=>button.addEventListener('click',()=>goTo(button.dataset.key)));refreshOutline();
  }
  document.addEventListener('click',event=>{
    const action=event.target.closest('[data-action]')?.dataset.action;
    const nextMode=event.target.closest('[data-mode]')?.dataset.mode;
    if(nextMode)setMode(nextMode);else if(action==='next')go(1);else if(action==='back')go(-1);else if(action==='source'&&!sourceButton.disabled){forceOriginal=!forceOriginal;render()}else if(action==='outline')openPanel('.outline-drawer');else if(action==='notes')openPanel('.notes-drawer');else if(action==='help')openPanel('.help-dialog');else if(action==='close')closePanels();
  });
  document.addEventListener('keydown',event=>{
    const openPanelElement=panels.find(panel=>panel.classList.contains('open'));
    if(event.key==='Tab'&&openPanelElement){
      const focusable=[...openPanelElement.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(element=>!element.inert);
      if(focusable.length){const first=focusable[0],last=focusable.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}
      return;
    }
    if(event.key==='Escape'){closePanels();return}
    if(event.target.closest('input,textarea,select,button,a,[contenteditable="true"]'))return;
    if(['ArrowRight','PageDown',' '].includes(event.key)){event.preventDefault();go(1)}else if(['ArrowLeft','PageUp'].includes(event.key)){event.preventDefault();go(-1)}else if(event.key.toLowerCase()==='m'&&originals.length)setMode(mode==='teaching'?'originals':'teaching');else if(event.key.toLowerCase()==='o'&&!sourceButton.disabled){forceOriginal=!forceOriginal;render()}else if(event.key.toLowerCase()==='n')openPanel('.notes-drawer');else if(event.key.toLowerCase()==='h')openPanel('.help-dialog');
  });
  window.addEventListener('hashchange',()=>{restoreFromHash();buildOutline();render()});
  outlineSearch.addEventListener('input',event=>buildOutline(event.target.value));
  if(!originals.length){
    document.querySelector('[data-mode="originals"]')?.setAttribute('hidden','');
    document.querySelectorAll('.shortcut').forEach(row=>{if(/Teaching path \/ original inventory/.test(row.textContent))row.hidden=true});
  }
  closePanels(false);restoreFromHash();buildOutline();render();
})();
