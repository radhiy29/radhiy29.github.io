document.addEventListener('DOMContentLoaded', function () {
  const quizData = [
    {
      question: "Apa nama planet terdekat dari Matahari?",
      options: ["venus", "merkurius", "bumi", "jupiter"],
      answer: "merkurius"
    },
    {
      question: "Apa yang menyebabkan siang dan malam di Bumi?",
      options: ["Rotasi Bumi pada sumbu", "Revolusi Bumi mengelilingi Matahari", "Gerhana Matahari", "Gerhana Bulan"],
      answer: "Rotasi Bumi pada sumbu"
    },
    {
      question: "Apa yang menyebabkan warna langit menjadi biru?",
      options: ["Gas metana", "Debu atmosfer", "Cahaya Matahari yang dipantulkan oleh awan", "Penyerapan cahaya oleh atmosfer"],
      answer: "Penyerapan cahaya oleh atmosfer"
    },
    {
      question: "Berapa banyak bulan yang mengelilingi Bumi?",
      options: ["4", "3", "2", "1"],
      answer: "1"
    },
    {
      question: "Siapakah astronom terkenal yang menemukan hukum gerak planet?",
      options: ["Johannes Kepler", "Galileo Galilei", "Nicolaus Copernicus", "Tycho Brahe"],
      answer: "Johannes Kepler"
    }
  ];

  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');
  const prevButton = document.getElementById('prevBtn');
  const nextButton = document.getElementById('nextBtn');
  const exitButton = document.getElementById('exitBtn');
  exitButton.addEventListener('click', exitQuiz);

  let currentQuestion = 0;
  let score = 0;

  function exitQuiz() {
    console.log('Keluar dari kuis...');
    // Anda bisa menambahkan logika tambahan atau mengarahkan pengguna ke halaman lain jika diperlukan.
  }

  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement('button');
      optionElement.textContent = option;
      optionElement.classList.add('option-btn');
      optionElement.addEventListener('click', () => checkAnswer(option));
      optionsElement.appendChild(optionElement);
    });

    // Tampilkan tombol "Exit" pada soal pertama
    exitButton.style.display = currentQuestion === 0 ? 'inline-block' : 'none';

    // Tampilkan tombol "Previous" pada soal-soal kecuali pertama
    prevButton.style.display = currentQuestion === 0 ? 'none' : 'inline-block';

    // Tampilkan tombol "Next" pada semua soal kecuali terakhir
    nextButton.style.display = currentQuestion === quizData.length - 1 ? 'none' : 'inline-block';

    // Geser tombol "Previous" ke tengah jika ini soal terakhir
    if (currentQuestion === quizData.length - 1) {
      prevButton.style.margin = '0 auto';
    } else {
      prevButton.style.margin = ''; // Menghapus margin jika bukan soal terakhir
    }
  }

  function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.answer) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    exitButton.style.display = 'none';
    resultElement.textContent = `Skor Anda: ${score} dari ${quizData.length}`;
  }

  function showPreviousQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
    }
  }

  function showNextQuestion() {
    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      showResult();
    }
  }

  prevButton.addEventListener('click', showPreviousQuestion);
  nextButton.addEventListener('click', showNextQuestion);

  loadQuestion();
});