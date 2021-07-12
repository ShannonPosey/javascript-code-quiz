/****  Creating the Code Quiz ****/
// create a quiz that has five questions
//  * each question has a list of answer to select from
//  * if user selects the correct answer display the word "Correct!"
//  * if user selects the wrong answer (this would be an else statement)  display the word "Wrong!"
//  * next question will appear after the questions have been answered
// includes a timer in the upper right hand corner
//  * using a countdown function with certain amount of time to take the quiz
//  * time is subtract for the quiz if question is answer incorrectly (decrement count/er--)
// include a "View Highscore" in the upper left hand corner
//  * use increment count/er++ to add score together
// when all the questions or timer reaches 0 game is over
// when game is over the user can save their name and score
// use the assignments 2-5 as resource to build the quiz

/**** Styling the Code Quiz ****/
// use assignment 1 to style the quiz

// need variables for timer
var timerEl = document.getElementById('');
// need variable for seconds counting down from 75
var secondsEl = function() {};
// need variable for scores
var scoreTotalEl = function() {};
// need variable and Function for intro section
var introEl = function () {};
// need Function to addEventListener for start button 
var startBtn = document.getElementById('');
// need Function for question to be displayed
// need Function to addEventListener for answer button 
// need Function for number Of questions answer
// need Function for final section that display final scores
// need to save score to localStorage
// need Function for user to input initials 
// need to save initials to localStorage
// need Functions to display highscore in list ordered
 

// timer that counts down from 75
function countdown() {
    var timeleft = 75;
}

//Question for the code quiz
var questions = [
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

// // localStorage to keep track of the scores
var saveScore = function () {};
var loadScore = function () {};

var generateQuiz = function (questions, quiz) {};


// need Function to addEventListener for submit score button 
// need Function to addEventListener for go back button 
// need Function to addEventListener for clear scores button 
// need Function to addEventListener for view scores button