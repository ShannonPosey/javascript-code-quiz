In the following code, what would be logged to the console?
if (5 === 5) {
  console.log("Hi!");
}
else {
  console.log("Hello!");
}

Answers: "Hi!"
Answers: "Hello!"

Correct Answers: : Hi

In the following code, what would be logged to the console?
var name = "lernantino";
if (name === "Lernantino") {
  console.log("dogs!");
}
else {
  console.log("cats!");
}

Answers: "dogs!"
"dogs!"

"cats!"
"cats!"
Correct: Since machines apply a different value for uppercase and lowercase letters, the value of the name variable, "lernantino", is not the same as the string "Lernantino". Because of this, the condition results in false and we execute the else statement.
In the following code, what would be logged to the console?

var name = "lernantino";

if (name) {
  console.log("sheep!");
}
else {
  console.log("goats!");
}

"sheep!"
"sheep!"

"goats!"
"goats!"
Correct: When we use a condition, we check for a boolean true or "truthy" result. In this case, when we check to see if name is true, JavaScript simply checks to see if there's anything in the string. If there is, then it's a true statement. If the string is empty and looks like "", then it is considered to be a false or "falsy" value.
Which of these values is NOT considered false?

0
0

"0"
"0"

null
null

""
""
Correct: If a string in JavaScript has any content at all, it will be considered true.