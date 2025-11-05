// assets/js/app.js

// Actualiza el año automáticamente
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Toggle de tema claro / oscuro
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  }
}

// Botón iniciar cuestionario
const startQuizBtn = document.getElementById('startQuizBtn');
if (startQuizBtn) {
  startQuizBtn.addEventListener('click', () => {
    window.location.href = 'posts/cuestionario.html';
  });
}
