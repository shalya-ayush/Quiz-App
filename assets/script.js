const questionBank = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
var quizContainer = document.getElementById("quiz-container");
var scoreBoard = document.getElementById("score-board");
var questionContainer = document.getElementById("questions");
var item = document.querySelectorAll("li");
var userScore = document.getElementById("score");
var time = document.getElementById("time");
var i = 0;
let score = 0;
let intialTime = questionBank.length * 10;


function startQuiz() {
  i = 0;
  if (quizContainer.style.display !== "none") {
    quizContainer.style.display = "none";
    scoreBoard.style.display = "none";
    questionContainer.style.display = "block";
    displayQuestion();
    startTimer();
  }
}

function displayQuestion() {
  for (var a = 0; a < item.length; a++) {
    item[a].style.backgroundColor = "#218380";
  }

  question.innerHTML = "Q." + (i + 1) + " " + questionBank[i].questionText;
  option1.innerHTML = questionBank[i].options[0];
  option2.innerHTML = questionBank[i].options[1];
  option3.innerHTML = questionBank[i].options[2];
  option4.innerHTML = questionBank[i].options[3];
}

function nextQuestion() {
  if (i <= questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
    
  }
}
function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.backgroundColor = "limegreen";
  } else {
    document.getElementById(e.id).style.backgroundColor = "red";
  }

  setTimeout(nextQuestion, 1000);
}

function startTimer() {
  setInterval(() => {
    time.innerText = "Time: " + intialTime;

    if (intialTime <= 0) {
      scoreBoard.style.display = "block";
      questionContainer.style.display = "none";
    } else if (intialTime > 0 && i === questionBank.length) {
      intialTime = 0;
      userScore.innerHTML = score + " / " + questionBank.length;
    } else {
      intialTime = intialTime - 1;
    }
  }, 1000);
}
