document.addEventListener('DOMContentLoaded', function () {

  const quizData = [
    {
      question: "Berapa planet dalam tata surya kita?",
      options: ["6", "8", "9", "10"],
      answer: "8"
    },
    {
      question: "Apa yang menyebabkan gerhana matahari?",
      options: ["Bumi berada di antara Matahari dan Bulan", "Bumi berada di antara Matahari dan Mars", "Mars berada di antara Bumi dan Matahari", "Bulan berada di antara Bumi dan Matahari"],
      answer: "Bumi berada di antara Matahari dan Bulan"
    },
    {
      question: "Apa nama galaksi tempat kita tinggal?",
      options: ["Bima Sakti", "Andromeda", "Galaksi Sombrero", "Galaksi Triangulum"],
      answer: "Bima Sakti"
    },
    {
      question: "Apa nama planet terbesar dalam tata surya?",
      options: ["Jupiter", "Saturnus", "Uranus", "Mars"],
      answer: "Jupiter"
    },
    {
      question: "Apa yang disebut sebagai planet kerdil?",
      options: ["Pluto", "Eris", "Ceres", "Haumea"],
      answer: "Pluto"
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
    // Tambahkan logika atau arahkan pengguna ke halaman lain jika diperlukan
    console.log('Exiting quiz...');
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
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
    resultElement.textContent = `Skor Anda: ${score} dari ${quizData.length}`;
  }

  function showPreviousQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
      nextButton.style.display = 'inline-block';
      if (currentQuestion === 0) {
        prevButton.style.display = 'none';
      }
    }
  }

  function showNextQuestion() {
    currentQuestion++;
    loadQuestion();
    prevButton.style.display = 'inline-block';
    if (currentQuestion === quizData.length - 1) {
      nextButton.style.display = 'none';
    }
  }

  prevButton.addEventListener('click', showPreviousQuestion);
  nextButton.addEventListener('click', showNextQuestion);

  loadQuestion();

});