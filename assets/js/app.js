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
const quizBtn = document.getElementById('startQuizBtn');
if (quizBtn) {
  quizBtn.addEventListener('click', () => {
    window.location.href = "./posts/form.html";
  });
}


async function mostrarHoraBuenosAires() {
  const el = document.getElementById('buenosAiresTime');
  if (!el) return;

  try {
    const res = await fetch('https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires');
    const data = await res.json();
    const fechaHora = new Date(data.datetime);

    const opciones = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };

    el.textContent = `⏰ Buenos Aires: ${fechaHora.toLocaleString('es-AR', opciones)}`;
  } catch (error) {
    console.error("No se pudo obtener la hora:", error);
  }
}

mostrarHoraBuenosAires();
