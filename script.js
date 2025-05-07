const questions = [
  {
    chapter: "Chapter 1: Introduction",
    question: "What is commerce?",
    options: ["Study of plants", "Trade and business", "Computer science", "Mathematics"],
    answer: "Trade and business"
  },
  {
    chapter: "Chapter 1: Introduction",
    question: "Which is a component of commerce?",
    options: ["Teaching", "Transport", "Painting", "Programming"],
    answer: "Transport"
  }
];

let currentQuestion = 0;
let score = 0;
let timer = 0;
let interval;

function startQuiz() {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter your name!");
    return;
  }
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("quizBox").style.display = "block";
  interval = setInterval(() => {
    timer++;
    document.getElementById("timer").innerText = timer;
  }, 1000);
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("chapterTitle").innerText = q.chapter;
  document.getElementById("questionBox").innerText = q.question;
  const optionsBox = document.getElementById("optionsBox");
  optionsBox.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  if (selected === q.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(interval);
  document.getElementById("questionBox").innerText = "";
  document.getElementById("optionsBox").innerHTML = "";
  document.getElementById("chapterTitle").innerText = "Quiz Completed!";
  document.getElementById("scoreBox").innerText = `Your score is ${score}/${questions.length} in ${timer} seconds.`;
}
