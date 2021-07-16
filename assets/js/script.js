/****  Select All Elements ****/
var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
var questionsE1 = document.querySelector("#questions");
var timerEl = document.querySelector("time");
var secondsLeft = 75;
var scoreTotalEl = document.querySelector("#score");
// var introEl = document.querySelector("#intro");
// var queriesEl = document.querySelector("queries");

var questionCounter = 0;
var score = 0;

/****  Creating the Code Quiz ****/


 


//Question for the code quiz
var questionAsk = [
{
    //question 1
    question: "Commonly used data types do NOT include:",
    answer: ["1. strings",  "2.booleans", "3. alerts", "4. numbers"],
    correctAnswer: "",
},
{
    // question 2
    question: "The condition if/else statement is enclosed within _____:",
    answer: ["1. quotes", "2. Curly brackets", "3.parentheses", "4. square brackets"],
    correctAnswer:"",
},
{
    // question 3
    question: "Arrays in JavaScript can be used to store ___:",
    answer: ["1. number and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer:""
},
{
    // question 4
    question: "String values must be enclosed within ___ when being assigned to variables",
    answer: ["1. commas", "2. curly brackets", "3. quotes", "4. [parentheses"],
    correctAnswer:""
},
{
    // question 5
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: ["1. JavaScript", "2.terminal/bash", "3. for loops", "4. console.log"],
    correctAnswer:"",
}
];


var countdown = function() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        secondsLeft--;
    })
};
var startQuiz = function() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    
};

// // localStorage to keep track of the scores
var saveScore = function () {};
var loadScore = function () {};

var generateQuiz = function (questions, quiz) {};

