// Playlist de Spotify. Va en su propio archivo para que no dependa de que el globo cargue bien.
(function () {
  const btn = document.getElementById('playlist-btn');
  const panel = document.getElementById('playlist-panel');
  const closeBtn = document.getElementById('playlist-close');
  const holder = document.getElementById('playlist-embed');
  if (!btn || !panel || !holder) return;

  function setOpen(open) {
    // Al abrir por primera vez se crea el iframe; al cerrar solo se oculta el panel,
    // así la música sigue sonando.
    if (open && !holder.querySelector('iframe')) {
      const f = document.createElement('iframe');
      f.src = holder.dataset.src;
      f.title = 'Playlist de Spotify';
      f.loading = 'lazy';
      f.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
      holder.appendChild(f);
    }
    panel.classList.toggle('open', open);
    btn.classList.toggle('playing', open);
    btn.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
  }

  btn.addEventListener('click', () => setOpen(!panel.classList.contains('open')));
  closeBtn.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) setOpen(false);
  });
})();
