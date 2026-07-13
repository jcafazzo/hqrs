(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const progress = document.querySelector('.progress-bar');
  const count = document.querySelector('.slide-count');
  const time = document.querySelector('.time-estimate');
  const label = document.querySelector('.deck-label');
  const notesDrawer = document.querySelector('.notes-drawer');
  const notesText = document.querySelector('.notes-text');
  const help = document.querySelector('.help-dialog');
  let index = Math.max(0, Math.min(slides.length - 1, Number(location.hash.slice(1)) - 1 || 0));

  function fragments(slide = slides[index]) {
    return [...slide.querySelectorAll('.fragment')];
  }

  function updateHash() {
    history.replaceState(null, '', `#${index + 1}`);
  }

  function updateUI() {
    slides.forEach((slide, i) => {
      const current = i === index;
      slide.classList.toggle('is-current', current);
      slide.setAttribute('aria-hidden', String(!current));
    });
    const current = slides[index];
    const minutes = current.dataset.time || '';
    count.textContent = `${index + 1} / ${slides.length}`;
    time.textContent = minutes ? `${minutes} min` : '';
    label.textContent = current.dataset.title || document.title;
    progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    const note = current.querySelector('.speaker-note');
    notesText.textContent = note ? note.textContent.trim() : 'No presenter note for this slide.';
    updateHash();
    document.title = `${index + 1}/${slides.length} · ${document.body.dataset.title || 'HQRS prototype'}`;
  }

  function advance() {
    const hidden = fragments().find(el => !el.classList.contains('revealed'));
    if (hidden) {
      const group = hidden.dataset.group;
      if (group) fragments().filter(el => el.dataset.group === group).forEach(el => el.classList.add('revealed'));
      else hidden.classList.add('revealed');
      return;
    }
    if (index < slides.length - 1) {
      index += 1;
      updateUI();
    }
  }

  function retreat() {
    const shown = fragments().filter(el => el.classList.contains('revealed'));
    if (shown.length) {
      const last = shown.at(-1);
      const group = last.dataset.group;
      if (group) shown.filter(el => el.dataset.group === group).forEach(el => el.classList.remove('revealed'));
      else last.classList.remove('revealed');
      return;
    }
    if (index > 0) {
      index -= 1;
      fragments().forEach(el => el.classList.add('revealed'));
      updateUI();
    }
  }

  function goTo(next) {
    index = Math.max(0, Math.min(slides.length - 1, next));
    updateUI();
  }

  function toggleNotes() {
    notesDrawer.classList.toggle('open');
    help.classList.remove('open');
  }

  function toggleHelp() {
    help.classList.toggle('open');
    notesDrawer.classList.remove('open');
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
      event.preventDefault();
      toggleNotes();
    } else if (event.key.toLowerCase() === 'h' || event.key === '?') {
      event.preventDefault();
      toggleHelp();
    } else if (event.key === 'Home') {
      event.preventDefault();
      goTo(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      goTo(slides.length - 1);
    } else if (event.key === 'Escape') {
      notesDrawer.classList.remove('open');
      help.classList.remove('open');
    }
  });

  document.querySelector('.deck').addEventListener('click', event => {
    if (event.target.closest('a,button')) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left + bounds.width * .25) retreat();
    else advance();
  });

  document.querySelectorAll('[data-action]').forEach(button => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      if (action === 'help') toggleHelp();
      if (action === 'notes') toggleNotes();
      if (action === 'next') advance();
      if (action === 'back') retreat();
    });
  });

  addEventListener('hashchange', () => {
    const requested = Number(location.hash.slice(1)) - 1;
    if (Number.isFinite(requested)) goTo(requested);
  });

  updateUI();
})();
