(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const progress = document.querySelector('.progress-bar');
  const count = document.querySelector('.slide-count');
  const time = document.querySelector('.time-estimate');
  const label = document.querySelector('.deck-label');
  const notesText = document.querySelector('.notes-text');
  const panels = [...document.querySelectorAll('.module-panel')];
  const actionButtons = [...document.querySelectorAll('[data-action]')];
  const idIndex = new Map(slides.map((slide, index) => [slide.id, index]));
  const requested = location.hash.slice(1);
  let index = idIndex.has(requested) ? idIndex.get(requested) : 0;

  const fragments = (slide = slides[index]) => [...slide.querySelectorAll('.fragment')];

  function closePanels() {
    panels.forEach(panel => {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    });
    actionButtons.forEach(button => button.setAttribute('aria-expanded', 'false'));
  }

  function togglePanel(name) {
    const panel = document.querySelector(`[data-panel="${name}"]`);
    if (!panel) return;
    const shouldOpen = !panel.classList.contains('open');
    closePanels();
    if (shouldOpen) {
      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
      const button = document.querySelector(`[data-action="${name}"]`);
      if (button) button.setAttribute('aria-expanded', 'true');
      panel.querySelector('button,a')?.focus({ preventScroll: true });
    }
  }

  function updateHash() {
    history.replaceState(null, '', `#${slides[index].id}`);
  }

  function updateUI() {
    slides.forEach((slide, slideIndex) => {
      const current = slideIndex === index;
      slide.classList.toggle('is-current', current);
      slide.setAttribute('aria-hidden', String(!current));
    });
    const current = slides[index];
    count.textContent = `${index + 1} / ${slides.length}`;
    time.textContent = current.dataset.time ? `${current.dataset.time} min` : '';
    label.textContent = current.dataset.title || document.title;
    progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    notesText.textContent = current.querySelector('.speaker-note')?.textContent.trim() || 'No presenter note for this slide.';
    document.querySelectorAll('[data-slide-target]').forEach(button => {
      const currentTarget = button.dataset.slideTarget === current.id;
      button.classList.toggle('current', currentTarget);
      button.setAttribute('aria-current', currentTarget ? 'true' : 'false');
    });
    updateHash();
    document.title = `${index + 1}/${slides.length} · ${document.body.dataset.title}`;
  }

  function goTo(next) {
    index = Math.max(0, Math.min(slides.length - 1, next));
    closePanels();
    updateUI();
  }

  function advance() {
    const hidden = fragments().find(fragment => !fragment.classList.contains('revealed'));
    if (hidden) {
      const group = hidden.dataset.group;
      if (group) fragments().filter(fragment => fragment.dataset.group === group).forEach(fragment => fragment.classList.add('revealed'));
      else hidden.classList.add('revealed');
      return;
    }
    goTo(index + 1);
  }

  function retreat() {
    const shown = fragments().filter(fragment => fragment.classList.contains('revealed'));
    if (shown.length) {
      const last = shown.at(-1);
      const group = last.dataset.group;
      if (group) shown.filter(fragment => fragment.dataset.group === group).forEach(fragment => fragment.classList.remove('revealed'));
      else last.classList.remove('revealed');
      return;
    }
    goTo(index - 1);
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
      else await document.exitFullscreen();
    } catch (error) {
      document.body.dataset.fullscreenError = error.name;
    }
  }

  document.addEventListener('keydown', event => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(event.key)) {
      event.preventDefault();
      advance();
    } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      retreat();
    } else if (event.key.toLowerCase() === 'n') {
      event.preventDefault(); togglePanel('notes');
    } else if (event.key.toLowerCase() === 'o') {
      event.preventDefault(); togglePanel('outline');
    } else if (event.key.toLowerCase() === 's') {
      event.preventDefault(); togglePanel('sources');
    } else if (event.key.toLowerCase() === 'h' || event.key === '?') {
      event.preventDefault(); togglePanel('help');
    } else if (event.key.toLowerCase() === 'f') {
      event.preventDefault(); toggleFullscreen();
    } else if (event.key === 'Home') {
      event.preventDefault(); goTo(0);
    } else if (event.key === 'End') {
      event.preventDefault(); goTo(slides.length - 1);
    } else if (event.key === 'Escape') {
      closePanels();
    }
  });

  document.querySelector('.deck').addEventListener('click', event => {
    if (event.target.closest('a,button')) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left + bounds.width * .25) retreat();
    else advance();
  });

  actionButtons.forEach(button => button.addEventListener('click', () => {
    const action = button.dataset.action;
    if (action === 'fullscreen') toggleFullscreen();
    else togglePanel(action);
  }));

  document.querySelectorAll('[data-close-panel]').forEach(button => button.addEventListener('click', closePanels));
  document.querySelectorAll('[data-slide-target]').forEach(button => button.addEventListener('click', () => goTo(idIndex.get(button.dataset.slideTarget))));
  addEventListener('hashchange', () => {
    const target = location.hash.slice(1);
    if (idIndex.has(target)) goTo(idIndex.get(target));
  });

  closePanels();
  updateUI();
  window.__moduleReady = true;
})();
