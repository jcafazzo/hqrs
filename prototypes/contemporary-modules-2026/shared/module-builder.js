(() => {
  const module = window.MODULE;
  if (!module || !Array.isArray(module.slides) || module.slides.length !== 10) {
    throw new Error('A ten-slide MODULE definition is required.');
  }

  const sourceById = new Map((module.sources || []).map(source => [source.id, source]));
  const resolveSources = sourceRef => {
    if (!sourceRef) return [];
    const refs = Array.isArray(sourceRef) ? sourceRef : [sourceRef];
    return refs.map(ref => typeof ref === 'string' ? sourceById.get(ref) : ref).filter(Boolean);
  };

  document.body.dataset.module = module.slug;
  document.body.dataset.title = module.shortTitle;
  document.title = module.title;

  const main = document.querySelector('.deck');
  main.innerHTML = module.slides.map((slide, index) => {
    const id = slide.id || `${module.slug}-s${String(index + 1).padStart(2, '0')}`;
    const sources = resolveSources(slide.source);
    const visualType = slide.visualType || 'native';
    const truth = slide.truth || (visualType === 'generated'
      ? 'ORIGINAL GENERATED TEACHING IMAGE · HYPOTHETICAL · NOT CASE EVIDENCE'
      : '');
    return `
      <section id="${id}" class="slide ${slide.className || ''}" data-title="${slide.title || `Slide ${index + 1}`}" data-section="${slide.section || ''}" data-time="${slide.time || ''}" data-visual="${visualType}" aria-label="Slide ${index + 1}: ${slide.title || ''}">
        ${slide.html}
        ${slide.brand === false ? '' : `<div class="slide-brand" aria-hidden="true"><span class="slide-brand-course">HQRS 846 · Human Factors in Health Care</span><img class="brand-wordmark" src="../assets/brand/queens-emblem-right-v3.png" alt=""></div>`}
        ${truth ? `<div class="truth-chip">${truth}</div>` : ''}
        ${sources.length === 1 ? `<a class="source" href="${sources[0].url}" target="_blank" rel="noreferrer">${sources[0].short || sources[0].label}</a>` : ''}
        ${sources.length > 1 ? `<div class="source-stack" aria-label="Slide sources">${sources.map(source => `<a class="source" href="${source.url}" target="_blank" rel="noreferrer">${source.short || source.label}</a>`).join('')}</div>` : ''}
        <aside class="speaker-note">${slide.note || ''}</aside>
      </section>`;
  }).join('');

  document.querySelector('.deck-name').textContent = module.shortTitle;
  document.querySelector('.prototype-runtime').textContent = module.runtime;
  document.querySelector('.module-purpose').textContent = module.purpose || '';

  const outlineList = document.querySelector('.outline-list');
  outlineList.innerHTML = module.slides.map((slide, index) => {
    const id = slide.id || `${module.slug}-s${String(index + 1).padStart(2, '0')}`;
    return `<button type="button" data-slide-target="${id}"><b>${String(index + 1).padStart(2, '0')}</b><span>${slide.title}</span><small>${slide.section || ''}</small></button>`;
  }).join('');

  const sourceList = document.querySelector('.source-list');
  sourceList.innerHTML = (module.sources || []).map(source => `
    <article><span>${source.status || 'SOURCE'}</span><a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a><p>${source.boundary || ''}</p></article>`).join('');
})();
