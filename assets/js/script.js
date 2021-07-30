/****  Select All Elements ****/
//Make variable names the same as classes and ids 
var viewHighScores = document.querySelector("#view-scores");
// console.log(viewHighScores);
var timer = document.querySelector(".time");
// console.log(timer);
var startButton = document.querySelector("#startbtn");
// console.log(startbtn);
var questions = document.querySelector("#questions");
// console.log(questions);
var answerChoice1 = document.querySelector("#answer1");
// console.log(answerChoice1);
var answerChoice2 = document.querySelector("#answer2");
// console.log(answerChoice2);
var answerChoice3 = document.querySelector("#answer3");
// console.log(answerChoice3);
var answerChoice4 = document.querySelector("#answer4");
// console.log(answerChoice4);
var scoreTotal = document.querySelector("#score");
// console.log(scoreTotal);
var initials = document.querySelector("#initials");
// console.log(initials);
var submitButton = document.querySelector("#submit-score");
// console.log(submitButton);
var scoreList = document.querySelector("#score-list");
// console.log(scoreList);
var backButton = document.querySelector("#backbtn");
// console.log(backButton);
var clearScores = document.querySelector("#clear-scores");
// console.log(clearScores);
var intro = document.querySelector("#intro");
// var secondsLeft = 75;


// var questionCounter = 0;
// var score = 0;


// // add event listener to start button and each answer button

// /** use innerText for each question 
//     use innerText for each answer
//     add event listener to parent of each answer **/

 


//Question for the code quiz
var questionAsk = [
{ // break down each answer individual
    //question 1
    question: "Commonly used data types do NOT include:",
    choice1: "strings",  
    choice2: "booleans", 
    choice3: "alerts", 
    choice4: "numbers",
    correctAnswer: "choice3",
},
{
    // question 2
    question: "What does DOM stand for?",
    choice1: "Document Object Model",
    choice2:  "Display Object Management", 
    choice3: "Digital Ordinance Model", 
    choice4: "Desktop Oriented Mode",
    correctAnswer:"choice1",
},
{
    // question 3
    question: "What HTML attribute references an external JavaScript file?",
    choice1: "href", 
    choice2: "src", 
    choice3: "class", 
    choice4: "id",
    correctAnswer:"choice2"
},
{
    // question 4
    question: "String values must be enclosed within ___ when being assigned to variables",
    choice1: "commas",
    choice2: "curly brackets", 
    choice3: "quotes",
    choice4: "parentheses",
    correctAnswer:"choice3"
},
{
    // question 5
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "terminal/bash", 
    choice3: "for loops", 
    choice4: "console.log",
    correctAnswer:"choice4",
}
];

// /****  Creating the Code Quiz ****/

var startQuiz = function(event) {
};

questions = function() {
    
    questions.innerText = questionAsk;
console.log(questions);

};

var countdown = function() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        secondsLeft--;
        if(timeLeft === 0) {

        }
    });
    console.log(countdown);
};
// // // localStorage to keep track of the scores
// var saveScore = function () {};
// var loadScore = function () {};

// var generateQuiz = function (questions, quiz) {};

startButton.addEventListener("click", startQuiz);