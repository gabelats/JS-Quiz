//VARIABLE DECLORATION
var startButton = document.querySelector(".start-button");
var timerClass = document.querySelector(".timer-count");
//
var questionStar = document.querySelector("#question");
var answerDiv = document.querySelector(".answers");
var questionArr = [
  {
    question: "What is a boolean",
    choices: ["a true or false statement ", "a number", "a list of words"],
    answer: "a true or false statement ",
  },
  {
    question: "what is a string ",
    choices: ["an integer", "a true or false statement", "textual data"],
    answer: "textual data",
  },
  {
    question: "what data type is this, 0",
    choices: [, "boolean", "srting", "integer"],
    answer: "integer",
  },
  {
    question: "what do these {} represent in js",
    choices: ["Array", "Object", "function"],
    answer: "Object",
  },
];
var qArrIndex = 0;
var answers = [];
var correctAnswers = 0;
var wrongAnswers = 0;
// var stats = [{ correctAnswers, wrongAnswers }];
var timer;
var timerCount;
//Functions
function startQuiz() {
  timerCount = 25;
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
  // console.log(questionStar);
  let choiceItems = "";
  var choices = questionArr[qArrIndex].choices;
  for (var i = 0; i < choices.length; i++) {
    choiceItems += `<li>${choices[i]}</li>`;
    answerDiv.innerHTML = choiceItems;
  }
}

function checkChoice(clickChoice) {
  var userChoice = clickChoice.textContent;
  var correctChoice = questionArr[qArrIndex].answer;
  console.log(userChoice, correctChoice);
  if (userChoice === correctChoice) {
    correctAnswers += 1;
  } else {
    wrongAnswers += 1;
    timerCount -= 3;
  }
  qArrIndex++;
  if (questionArr.length > qArrIndex) {
    displayQuestion();
  } else {
    clearInterval(timer);
    endScreen();
  }
}
function endScreen() {
  var quizEnd = (document.querySelector(".quiz-end").textContent =
    "End of quiz");
  var stats = (document.querySelector("#score").textContent = correctAnswers);
  var displ = (document.querySelector("#sent").textContent =
    "Answered correcly");
  var resetButton = (document.querySelector("#reset-button").textContent =
    "Reset");
  localStorage.setItem("Correct answers", correctAnswers);
  localStorage.setItem("Wrong answers", wrongAnswers);
}
//Event listeners
startButton.addEventListener("click", startQuiz);
answerDiv.addEventListener("click", function (event) {
  console.log("clicked");
  event.preventDefault();
  const clickChoice = event.target;
  if (clickChoice.matches("li")) {
    checkChoice(clickChoice);
  }
});
resetButton.addEventListener("click");
