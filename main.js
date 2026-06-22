// Theme toggle
(function () {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function updateLabel() {
    toggle.textContent = root.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
  }

  updateLabel();

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateLabel();
  });
}

// Mark active nav link
function initNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
});
