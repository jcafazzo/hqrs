(() => {
  const deck = window.DECK;
  if (!deck || !Array.isArray(deck.slides)) throw new Error('Deck content is missing.');

  document.body.dataset.deck = deck.theme;
  document.body.dataset.title = deck.shortTitle;
  document.title = deck.title;

  const main = document.querySelector('.deck');
  main.innerHTML = deck.slides.map((slide, index) => `
    <section class="slide ${slide.className || ''}" data-title="${slide.title || `Slide ${index + 1}`}" data-section="${slide.section || ''}" ${slide.time ? `data-time="${slide.time}"` : ''}>
      ${slide.html}
      ${slide.brand === false ? '' : `<div class="slide-brand" aria-hidden="true"><span class="slide-brand-course">HQRS 846 · Human Factors in Health Care</span><img class="brand-wordmark" src="../assets/brand/queens-emblem-right-v3.png" alt=""></div>`}
      ${slide.source ? `<a class="source" href="${slide.source.url}" target="_blank" rel="noreferrer">${slide.source.label}</a>` : ''}
      <aside class="speaker-note">${slide.note || ''}</aside>
    </section>
  `).join('');

  document.querySelector('.deck-name').textContent = deck.shortTitle;
  document.querySelector('.prototype-runtime').textContent = deck.runtime;
})();
