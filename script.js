var timerEl = document.querySelector(".timer");
var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
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

function quizQuestions() {
  const output = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for(letter in currentQuestion.answers) {
      answers.push(
        
      )
    }
    
  });
}

function quizAnswers() {}

quizQuestions();

submitButton.addEventListener('click', quizAnswers)

const myQuestions = [
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "b"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "c"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "a"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "b"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "b"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "d"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "a"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "c"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "c"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "d"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "a"
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    rightAnswer: "d"
  },
]