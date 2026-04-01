(function () {
  var btn = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');

  var saved = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var current = saved || (prefersDark ? 'dark' : 'light');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (icon) icon.textContent = theme === 'dark' ? 'Light theme' : 'Dark theme';
  }

  setTheme(current);

  if (btn) {
    btn.addEventListener('click', function () {
      var next = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }
})();
