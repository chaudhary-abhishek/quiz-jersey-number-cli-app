var readLineSync = require('readline-sync');
var score = 0;

var questionArray = [{
  question: "Sachin Tendulkar ",
  answer: "10"
},{
  question: "Brian Lara ",
  answer: "9"
},{
  question: "Jacques Kallis ",
  answer: "3"
},{
  question: "Eoin Morgan ",
  answer: "16"
},{
  question: "Daniel Vettori ",
  answer: "11"
}];

var highScoreOne = {
  name : "Abhishek",
  points : "5"
}
var highScoreTwo = {
  name : "Naman",
  points : "4"
}


function greet(){
  console.log("This is a jersey number game, where you have to quess the jersey numeber of the given player")

var userName = readLineSync.question("Can I have your name please: ");

console.log("Welcome "+userName+" Let's start the game");
}


function play(question,rightAnswer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer===rightAnswer){
    console.log("You were correct");
    score++;
  }
  else{
    console.log("You were wrong");
  }
}

function  callPlay(){
  for(var i=0;i<questionArray.length;i++){
  play(questionArray[i].question,questionArray[i].answer);
  console.log("-------------------------");
}
}

function displayHighScore(){
  console.log("Your score is : "+score);
  console.log("Below is the leaderboard, if your score is higher than these then send me screenshot. I will put you name in leaderboard");
  console.log(highScoreOne.name+" : "+highScoreOne.points+"\n"+highScoreTwo.name+" : "+highScoreTwo.points);
}

greet();
callPlay();
displayHighScore();



