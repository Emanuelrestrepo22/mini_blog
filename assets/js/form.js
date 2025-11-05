// assets/js/form.js

document.addEventListener('DOMContentLoaded', () => {
  const quizContainer = document.getElementById('quiz');
  const timerEl = document.getElementById('time‑left');
  const resultMessage = document.getElementById('resultMessage');
  const restartBtn = document.getElementById('restartBtn');

  // Preguntas basadas en tu sitio web (puedes ampliar).
  const questions = [
    {
      question: '¿En qué ciudad nació Emanuel Restrepo?',
      options: ['Buenos Aires', 'Maracay', 'Caracas', 'Sevilla (Valle del Cauca)'],
      answer: 1
    },
    {
      question: '¿Cuál de estas actividades NO es un hobby mencionado de Emanuel?',
      options: ['Tenis', 'Cocinar lasaña', 'Running', 'Surf'],
      answer: 3
    },
    {
      question: '¿Cuál es el nombre de la perrita mayor de Emanuel?',
      options: ['Bruna', 'Greta', 'Luna', 'Mia'],
      answer: 1
    },
    {
      question: '¿Qué lenguaje se utilizó para su framework de automatización QA?',
      options: ['JavaScript', 'Python', 'Ruby', 'Java'],
      answer: 1
    },
    {
      question: '¿En qué barrio de Buenos Aires vive Emanuel actualmente?',
      options: ['Palermo', 'Recoleta', 'Belgrano', 'San Telmo'],
      answer: 2
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let timerId;
  const timePerQuestion = 10; // segundos

  function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultMessage.classList.add('hidden');
    restartBtn.classList.add('hidden');
    quizContainer.innerHTML = '';
    showQuestion();
  }

  function showQuestion() {
    const q = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
      <div class="question">${q.question}</div>
      <ul class="options">
        ${q.options.map((opt, idx) => `<li><button data‑idx="${idx}">${opt}</button></li>`).join('')}
      </ul>
    `;
    timerEl.textContent = timePerQuestion;
    startTimer();

    document.querySelectorAll('.options button').forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(timerId);
        const selected = parseInt(btn.getAttribute('data‑idx'));
        if (selected === q.answer) {
          score++;
          showFeedback(true);
        } else {
          showFeedback(false);
        }
      });
    });
  }

  function startTimer() {
    let timeLeft = timePerQuestion;
    timerEl.textContent = timeLeft;
    timerId = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerId);
        showFeedback(false, true);
      }
    }, 1000);
  }

  function showFeedback(correct, timedOut = false) {
    // Limpiar opciones para evitar más clicks
    document.querySelectorAll('.options button').forEach(btn => btn.disabled = true);

    const msgDiv = document.createElement('div');
    if (correct) {
      msgDiv.textContent = '¡Correcto! 🎉';
      msgDiv.style.color = 'var(--c-primary)';
    } else if (timedOut) {
      msgDiv.textContent = 'Se acabó el tiempo. ⏳';
      msgDiv.style.color = 'var(--c-accent)';
    } else {
      msgDiv.textContent = 'Respuesta incorrecta. ❌';
      msgDiv.style.color = 'var(--c-accent)';
    }
    quizContainer.appendChild(msgDiv);

    // Esperar un segundo y pasar a siguiente o fin
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        endQuiz();
      }
    }, 1500);
  }

  function endQuiz() {
    quizContainer.innerHTML = '';
    if (score === questions.length) {
      resultMessage.textContent = `¡Felicidades! Obtuviste ${score} de ${questions.length} respuestas correctas. 🏆`;
      // efecto confetti
      launchConfetti();
    } else {
      resultMessage.textContent = `Gracias por intentarlo. Obtuviste ${score} de ${questions.length} respuestas correctas. `;
    }
    resultMessage.classList.remove('hidden');
    restartBtn.classList.remove('hidden');
  }

  restartBtn.addEventListener('click', () => {
    startQuiz();
  });

  // Confetti función usando librería externa
  function launchConfetti() {
    if (window.JSConfetti) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ['🎉','✨','🎊'],
        confettiNumber: 200
      });
    }
  }

  // Inicio
  startQuiz();
});
