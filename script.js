var timerEl = document.querySelector(".timer");
var secondsLeft = 60;
var quizContainer = document.getElementById('quiz');
var scoreContainer = document.getElementById('score');
var submitButton = document.getElementById('submit');
var userAnswer = '';
var answerContainer = quizContainer.querySelectorAll('.answers');
var score = 0;

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

setTime();

// questions array

var myQuestions = [
  {
    question: "What is HTML used for in coding?",
    answers: [
      "create the structure of a website",
      "control versions of website",
      "host a website",
      "all of the above"
    ],
    rightAnswer: "a"
  },
  {
    question: "How do you update your local repository?",
    answers: [
      "git add -A",
      "git commit -m",
      "git pull origin main",
      "git status"
    ],
    rightAnswer: "c"
  },
  {
    question: "Who inveed javaScript?",
    answers: [
      "Brendan Eich",
      "Elon Musk",
      "Mark Zuckerberg",
      "Steve Jobs"
    ],
    rightAnswer: "a"
  },
  {
    question: "What are the ways to style a site using CSS?",
    answers: [
      "Inline CSS and Outline CSS",
      "Internal CSS, Inline CSS, and External CSS",
      "Margin CSS, Internal CSS, and Outline CSS",
      "None of the above"
    ],
    rightAnswer: "b"
  },
  {
    question: "What does API stand for?",
    answers: [
      "Application Presentation Interfaces",
      "Application Programming Interfaces",
      "Assorted Progamming Ideas",
      "Accurate Programming Intel"
    ],
    rightAnswer: "b"
  },
  {
    question: "What company first developed Bootstrap?",
    answers: [
      "Apple",
      "Microsoft",
      "Dell",
      "Facebook"
    ],
    rightAnswer: "d"
  },
  {
    question: "Where does padding add space?",
    answers: [
      "around the content inside an element",
      "outside of the element",
      "inside the head",
      "inside the footer"
    ],
    rightAnswer: "a"
  },
  {
    question: "Where does margin add space?",
    answers: [
      "around the content inside an element",
      "inside the footer",
      "outside of the element",
      "inside the head"
    ],
    rightAnswer: "c"
  },
  {
    question: "When should JavaScript be added in HTML?",
    answers: [
      "at the end of the element using the script",
      "in the beginning of teh element using the script",
      "towards the end of the HTML, just before the closing tag",
      "toards the beginning of the HTML, just after the opening tag"
    ],
    rightAnswer: "c"
  },
  {
    question: "What is a wireframe?",
    answers: [
      "blueprintfor your javascript",
      "code for your webpage",
      "blueprint for your code",
      "schematic for your webpage"
    ],
    rightAnswer: "d"
  },
  {
    question: "What is pseudocode?",
    answers: [
      "notes on your code",
      "code that is only read once",
      "groupings of code",
      "practice code"
    ],
    rightAnswer: "a"
  },
  {
    question: "What does MVP stand for?",
    answers: [
      "minor viable project",
      "most valuable project",
      "most viable project",
      "minimum viable project"
    ],
    rightAnswer: "d"
  },
];

// Show quiz

var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);

var questionIndex = 0;

function startQuiz() {
  var currentQuestion = myQuestions[questionIndex]
  document.getElementById("questions").innerText = currentQuestion.question;
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.innerText = currentQuestion.answers[i];
    document.getElementById("answers").append(choiceButton);
    choiceButton.addEventListener("click", checkAnswer);
  }
}
function checkAnswer(userAnswer) {
  // console.log("testing:");
  // for (var i = 0; i < myQuestions.length; i++) {
  //   userAnswer = (answerContainer[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

    // document.getElementById("answers").innerHTML = "";
    if (userAnswer === myQuestions.rigthAnswer) {
      score = score + 1;
    } else {
      if (userAnswer != myQuestions.rigthAnswer) {
        secondsLeft = -5;
      }
    }
 
  questionIndex++;

  startQuiz();
}

console.log(userAnswer.innerHTML)
