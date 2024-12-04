const questions = [
  {
    question: "What is the capital of Japan?",
    options: ["A. Tokyo", "B. Kyoto", "C. Osaka"],
    answer: "A",
  },
  {
    question: "What is a famous Japanese traditional costume?",
    options: ["A. Kimono", "B. Sari", "C. Hanbok"],
    answer: "A",
  },
  {
    question: "What is the Japanese word for 'Thank you'?",
    options: ["A. Sayonara", "B.  Arigatou", "C. Konbanwa"],
    answer: "B",
  },
  {
    question: "Which one is a festival from Japan?",
    options: ["A. Gion Matsuri", "B. Chinese New Year", "C. Happy Deepavali"],
    answer: "A",
  },
  {
    question: "Which creative arts is invented in Japan?",
    options: ["A. Mona Lisa", "B. Starry Night", "C.Origami"],
    answer: "C",
  },
   {
    question: "Which food is derived from Japan",
    options: ["A. Kolo Mee", "B. Ramen", "C Fish and Chips"],
    answer: "B",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function adjustQuestionTextPosition() {
  const questionText = document.querySelector(".quiz-card h2");
  if (questionText) {
    questionText.style.position = "relative"; // Ensure it's positionable
    questionText.style.top = "20px"; // Adjust this value to lower the text
  }
}

function displayQuestion() {
  const questionContainer = document.querySelector(".quiz-card");
  const question = questions[currentQuestionIndex];
//Image taken from https://www.leapoffaithchloe.com/destination/bestpagodasjapan
  questionContainer.innerHTML = `
    <div class="image-circle">
      <img src="images/jpgpagoda.webp" alt="Japanese Pagoda">  
    </div>
    <h2>${question.question}</h2>
    <div class="options">
      <button onclick="checkAnswer('A')">${question.options[0]}</button>
      <button onclick="checkAnswer('B')">${question.options[1]}</button>
      <button onclick="checkAnswer('C')">${question.options[2]}</button>
    </div>
  `;

  adjustQuestionTextPosition();
}

function checkAnswer(selected) {
  const question = questions[currentQuestionIndex];
  if (selected === question.answer) {
    score++;
    alert("Correct!");
  } else {
    alert("Incorrect! The correct answer is " + question.answer);
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const questionContainer = document.querySelector(".quiz-card");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score}/${questions.length}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion();
}

// Initialize the quiz
document.addEventListener("DOMContentLoaded", displayQuestion);
