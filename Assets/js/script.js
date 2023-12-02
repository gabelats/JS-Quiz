//VARIABLE DECLORATION
var startButton = document.querySelector(".start-button");
var timerClass = document.querySelector(".timer-count");
var resetButton = document.querySelector("#reset-button");
var questionStar = document.querySelector("#question");
var questionArr = [
  {
    question: "question one",
    choices: ["answer 1", "answer 2", "answer 3"],
    answer: "answer 2",
  },
  {
    question: "question two",
    choices: ["answer 1", "answer 2", "answer 3"],
    answer: "answer 2",
  },
  {
    question: "question three",
    choices: ["answer 1", "answer 2", "answer 3"],
    answer: "answer 2",
  },
  {
    question: "question four",
    choices: ["answer 1", "answer 2", "answer 3"],
    answer: "answer 2",
  },
];
var qArrIndex = 0;
var answers = [];
var stats = [(correctAnswers = 0), (wrongAnswers = 0)];
var timer;
var timerCount;
//Functions
function startQuiz() {
  timerCount = 10;
  startButton.disabled = true;
  startTimer();
  displayQuestion();
}
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerClass.textContent = timerCount;
    if (timerCount <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}
function displayQuestion() {
  questionStar.textContent = questionArr[qArrIndex].question;
  console.log(questionStar);
  var answerDiv = document.querySelector(".answers");
  let choiceItems = "";
  var choices = questionArr[qArrIndex].choices;
  for (var i = 0; i < choices.length; i++) {
    choiceItems += `<li>${choices[i]}</li>`;
    answerDiv.innerHTML = choiceItems;
  }
}

//Event listeners
startButton.addEventListener("click", startQuiz);
// startButton.addEventListener("click");
