var right = 0;
var numOfQuestions = 5;
var score = 0;
function rightAnswer() {
    console.log("he got it right");
    score = score + 20;
    right = right + 1;
}
function onSubmit() {
    window.alert("You got " + right + " out of " + numOfQuestions + " right , a score of " + score);
    return false;
}
