// Header theme toggle. Each click flips what you see; picking the theme the OS
// already wants clears the override, so the site goes back to following it.
(() => {
  const root = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  const os = matchMedia('(prefers-color-scheme: dark)');
  if (!btn) return;

  const current = () => root.dataset.theme || (os.matches ? 'dark' : 'light');
  const metas = document.querySelectorAll('meta[name="theme-color"]');
  const sync = () => {
    // the metas carry media queries; a pinned theme has to override both
    metas.forEach((m) => {
      const t = root.dataset.theme || (m.media.includes('dark') ? 'dark' : 'light');
      m.content = t === 'dark' ? '#0f0f0e' : '#ffffff';
    });
    btn.setAttribute('aria-label', `Switch to ${current() === 'dark' ? 'light' : 'dark'} theme`);
  };

  btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    const followsOs = next === (os.matches ? 'dark' : 'light');
    try {
      if (followsOs) localStorage.removeItem('theme');
      else localStorage.setItem('theme', next);
    } catch (e) {}
    if (followsOs) delete root.dataset.theme;
    else root.dataset.theme = next;
    sync();
  });
  os.addEventListener('change', sync);
  sync();
})();
