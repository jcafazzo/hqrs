(() => {
  const chrome = `
    <div class="deck-shell">
      <header class="deck-chrome">
        <a class="back-link" href="./">← Library</a>
        <span class="deck-label">Loading module</span>
        <span class="module-purpose"></span>
        <div class="chrome-actions">
          <button class="chrome-button" data-action="outline" aria-expanded="false" type="button">Outline</button>
          <button class="chrome-button" data-action="sources" aria-expanded="false" type="button">Sources</button>
          <button class="chrome-button" data-action="notes" aria-expanded="false" type="button">Notes</button>
          <button class="chrome-button" data-action="fullscreen" type="button">Full screen</button>
          <button class="chrome-button" data-action="help" aria-expanded="false" type="button">Help</button>
        </div>
      </header>
      <main class="deck" aria-live="polite"></main>
      <footer class="deck-footer"><span class="deck-name"></span><div class="progress-track"><div class="progress-bar"></div></div><span class="prototype-runtime"></span><span class="time-estimate"></span><span class="slide-count"></span></footer>
    </div>
    <aside class="module-panel" data-panel="notes" aria-hidden="true"><div class="module-panel-head"><h2>Presenter note</h2><button class="panel-close" data-close-panel type="button" aria-label="Close notes">×</button></div><p class="notes-text"></p></aside>
    <aside class="module-panel" data-panel="outline" aria-hidden="true"><div class="module-panel-head"><h2>Module outline</h2><button class="panel-close" data-close-panel type="button" aria-label="Close outline">×</button></div><div class="outline-list"></div></aside>
    <aside class="module-panel" data-panel="sources" aria-hidden="true"><div class="module-panel-head"><h2>Sources and boundaries</h2><button class="panel-close" data-close-panel type="button" aria-label="Close sources">×</button></div><div class="source-list"></div></aside>
    <aside class="module-panel" data-panel="help" aria-hidden="true"><div class="module-panel-head"><h2>Presenter controls</h2><button class="panel-close" data-close-panel type="button" aria-label="Close help">×</button></div><div class="help-grid"><kbd>→ / Space</kbd><span>Advance</span><kbd>←</kbd><span>Go back</span><kbd>N</kbd><span>Notes</span><kbd>O</kbd><span>Outline</span><kbd>S</kbd><span>Sources</span><kbd>F</kbd><span>Full screen</span><kbd>H / ?</kbd><span>Help</span><kbd>Esc</kbd><span>Close panel</span></div></aside>`;
  document.body.innerHTML = chrome;
})();
