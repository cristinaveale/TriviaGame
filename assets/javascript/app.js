// Totally Trivial Trivia game is played with a 90-second timer.

// - The player is asked to guess true/false to a series of trivia questions. 

// - Their score is tallied with each answer, and wins & losses appear on the last screen/page.

// - Timer begins countdown to zero when player presses start button to begin play.

// - Try to tighten up code (too lengthy).


var CorrectAnswers = 0;
for(var i=0; i <questions.length; i++){
    var response = window.prompt (questions[i].prompt)
if (response === questions[i].answer){
    score++;
}

var IncorrectAnswers = 0;
for(var i=0; i <questions.length; i++){
    var response = window.prompt (questions[i].prompt)
if (response === questions[i].answer){
    score++;
}

var Unanswered = 0;
for(var i=0; i <questions.length; i++){
    var response = window.prompt (questions[i].prompt)
if (response  !==  questions[i].answer){
    score++;
}


var True = "Yes"
var False = "No"


var questions = [    
{
    prompt: "Gorillas can catch human colds and other illnesses.,True or False",
    answer: "True"
},
{
    prompt: "Ostriches can run faster than horses.,True or False",
    answer: "True"
},
{
    prompt: "The bat is one of many mammals that can fly.,True or False",
    answer: "False"
},
{
    prompt: "Some male songbirds sing over 50,000 times per day.,True or False",
    answer: "False"
},
{   
    prompt: "For every human in the world there are one million ants.,True or False",
    answer: "True"
},
{
    prompt: "The average fox weighs 14 pounds.,True or False",
    answer: "True"
},
{
    prompt: "Alligators can live up to 100 years old.,True or False",
    answer: "True"
},
{   
    prompt: "The honey bee has been around for only one million years.,True or False",
    answer: "False"
},
{
    prompt: "The smell of a skunk cannot be detected by a human a mile away.,True or False",
    answer: "False"
},
{
    prompt: "Great horned owls have a sense of smell equal to that of a dog's sense of smell.,True or False",
    answer: "False"
},
{
    prompt: "On average, cows poop 16 times per day.,True or False",
    answer: "True"
},
{
    prompt: "A whale's heart beats only nine times a minute.,True or False",
    answer: "True"
}]





var myVar;

function timedCountStart() {
    myVar = setTimeout(function(){("Start"); }, 9000);
}

function timedCountStop() {; 0;
    clearTimeout(myVar)
}}


// - want to produce correct true or false answers and track scores- /
var questions;
document.getElementById().innerHTML = question[0 ++];


function check() {
    document.getElementById("Yes").checked = True(question[0 ++]);
}
function check() {
    document.getElementById("No").checked = False(question[0 ++]);
}}

// - need uncheck functions here too - //
}

function timedCountStart(onclick) {
    var key = event.scores;
    document.getElementById().innerHTML = scores;
}
