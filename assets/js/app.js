// app.js — microinteracciones y tema

// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle de tema con persistencia
const root = document.documentElement; // <html>
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
});

// (Opcional) Scroll suave ya está vía CSS: html{scroll-behavior:smooth}
