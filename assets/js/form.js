// assets/js/cuestionario.js
document.addEventListener('DOMContentLoaded', () => {
  const timerSpan = document.getElementById('timer');
  const countdownDiv = document.getElementById('countdown');
  const quizContainer = document.getElementById('quiz-container');

  let timeLeft = 10; // segundos
  const interval = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(interval);
      // ocultar cuenta regresiva
      countdownDiv.style.display = 'none';
      // mostrar contenedor del cuestionario
      quizContainer.style.display = 'block';
      // llamar función para cargar cuestionario
      iniciarCuestionario();
    }
  }, 1000);

  function iniciarCuestionario() {
    // Aquí luego pondremos la lógica completa del cuestionario
    quizContainer.innerHTML = '<p>Cargando preguntas…</p>';
  }
});
