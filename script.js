var timerEl = document.querySelector(".timer");
var secondsLeft = 60; ``

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timerEl.textContent = "Times's Up!";
}

// Questions array

const myQuestions = [
  {
    question: "What is HTML used for in coding?",
    answers: [
      "create the structure of a website",
      "control versions of website",
      "host a website",
      "all of the above"
    ],
    rightAnswer: "create the structure of a website"
  },
  {
    question: "How do you update your local repository?",
    answers: [
      "git add -A",
      "git commit -m",
      "git pull origin main",
      "git status"
    ],
    rightAnswer: "git pull origin main"
  },
  {
    question: "What does API stand for?",
    answers: [
      "Application Presentation Interfaces",
      "Application Programming Interfaces",
      "Assorted Progamming Ideas",
      "Accurate Programming Intel"
    ],
    rightAnswer: "Application Programming Interfaces"
  },
  {
    question: "When should JavaScript be added in HTML?",
    answers: [
      "at the end of the element using the script",
      "in the beginning of the element using the script",
      "towards the end of the HTML, just before the closing tag",
      "toards the beginning of the HTML, just after the opening tag"
    ],
    rightAnswer: "towards the end of the HTML, just before the closing tag"
  },
  {
    question: "What does MVP stand for?",
    answers: [
      "minor viable project",
      "most valuable project",
      "most viable project",
      "minimum viable project"
    ],
    rightAnswer: "minimum viable project"
  },
];

// Show quiz

var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);
var questionIndex = 0;

function changeLabel() {
  const startButton = document.getElementById("start");
  startButton.remove();
}

function startQuiz() {
  var currentQuestion = myQuestions[questionIndex]
  document.getElementById("questions").innerText = currentQuestion.question;
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.innerText = currentQuestion.answers[i];
    document.getElementById("answers").append(choiceButton);
    choiceButton.addEventListener("click", checkAnswer);
  }
  return;
}

// Checking answers and scoring
let score = 0;

function checkAnswer(event) {
  let userChoice = event.target.textContent;
  let correctAnswer = myQuestions[questionIndex].rightAnswer;

  if (userChoice === correctAnswer) {
    score++;
  } else {
    secondsLeft -= 10;
  } if (secondsLeft <= 0) {
    sendMessage();
    secondsLeft = null;
  }
  questionIndex++;
  
  localStorage.setItem("endScore", score);
  console.log(score + " inside checkAnwser");
  startQuiz();
}


function showScore(score) {
  localStorage.getItem("endscore");
  document.getElementById("score").append(score);
};
showScore();

let restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restartQuiz);
function restartQuiz() {
  location.assign('index.html');
};


// console.log(choiceButton.innerHTML)
