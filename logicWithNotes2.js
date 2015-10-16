///////////////////////////////////////////////////////////////////////////////
////////////////////////////Global Variables + Empty Arrays/////////////////////
var playerGuess = [];
var currentCombo = [];
var playerScore = 0;
var count = 0;
var buttons = $('.buttons');
var sound1 = document.querySelector("#sound1");
var sound2 = document.querySelector("#sound2");
var sound3 = document.querySelector("#sound3");
var sound4 = document.querySelector("#sound4");
var soundsArray = [sound1, sound2, sound3, sound4];
////////////////////////////Global Variables + Empty Arrays/////////////////////
////////////////////////////////////////////////////////////////////////////////

/////////////////////////////FLASH BUTTON!!!!//////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function flashButton(index){
  $(buttons[index]).fadeTo('fast', 0.2).fadeTo('fast', 1.0);
  playSound(index);
};
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////FLASH BUTTON!!!!///////////////////////////////////

/////////////////////////////START BUTTON///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Created var buttonClick to assign event listeners. step 1
var buttonClick = document.querySelectorAll('.buttons');
//looped through the entire array and added a function
//when each button is clicked. step 2
var startGame = document.querySelector('.startButton');
  startGame.addEventListener('click', function(){
    //Game starts with currentCombo random input
    if (currentCombo.length < 1){
      currentCombo.push(randomize());
      console.log(currentCombo);
      flashButton(currentCombo[0]);
    }
  count++;
  });
/////////////////////////////START BUTTON///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//////////////////////playerGuess Array Push///////////////////////////////////
$('#greenButton').on('click', function(){
  playerGuess.push(0);
  console.log(playerGuess);
  count++;
  checkScore();
});

$('#redButton').on('click', function(){
  playerGuess.push(1);
  console.log(playerGuess);
  count++;
  checkScore();
});

$('#blueButton').on('click', function(){
  playerGuess.push(2);
  console.log(playerGuess)
  count++;
  checkScore();
});

$('#yellowButton').on('click', function () {
  playerGuess.push(3);
  console.log(playerGuess);
  count++;
  checkScore();
});
//////////////////////playerGuess Array Push///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
////////////////RANDOM SEQUENCER -- RANDOM SEQUENCER////////////////////////////
function randomize () {
  //this chooses a random number between 0-3
  //this helps with indexing later
  //Math.floor rounds the number down, so by adding one you also include 3
  return Math.floor((Math.random()*4))}
////////////////RANDOM SEQUENCER -- RANDOM SEQUENCER////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Jimmy said this was too complicated, said I should use jQuery instead
// for (var i = 0; i < buttonClick.length; i++) {
//   buttonClick[i].addEventListener('click', function (){
//     thisWorks();
//     // here I say: if green clicked, add its denoted value to the playerGuess array
//     if ("#greenButton"){
//       playerGuess.push("Green");
//     }
//     else if ("#redButton"){
//       playerGuess.push("Red")
//     }
//     else if ("#yellowButton") {
//       playerGuess.push("Yellow")
//     }
//     else if ("#blueButton") {
//       playerGuess.push("Blue")
//     }
//       console.log(playerGuess);
//   });
// };



//3 Possible Scenarios - a. user clicks wrong tile = game over b. user clicks correct tile
//but not done with
//If player has not entered incorrect response the number of clicks will be less
//than the length of the sequence, wait for player input.



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////MAIN FUNCTION////////////////////////////////////

var checkScore = function () {
  if(playerGuess.length === currentCombo.length){

    if (playerGuess.toString() === currentCombo.toString()) {
    playerScore++;
    document.getElementById('score1').innerHTML = playerScore;
    currentCombo.push(randomize());
    console.log(currentCombo);
    //use a for loop to iterate over the currentCombo array and flash each button
    //BEST PART!
    for (var i = 0; i < currentCombo.length; i++) {
      setTimeout(function(index) {
        flashButton(currentCombo[index]);
      }, 400*(i+1), i);
    }
    reset();
    }
    else if (playerGuess.toString() !== currentCombo.toString()){
      alert("Incorrect Combo, nice try, your score was " + playerScore);
      document.getElementById('score1').innerHTML = playerScore;
    };
  };
};
///////////////////////////////MAIN FUNCTION////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
////Create always a new sound instance so previous sound won't be overlapped////

function playSound(index) {
  var selectedSound;
  switch(index) {
    case 0:
      selectedSound = "sounds/simonSound1.mp3";
    break;
    case 1:
      selectedSound = "sounds/simonSound2.mp3";
    break;
    case 2:
      selectedSound = "sounds/simonSound3.mp3";
    break;
    case 3:
      selectedSound = "sounds/simonSound4.mp3";
    break;
  }
  var sound = document.createElement('audio');
  sound.src = selectedSound;
  sound.play();
};
////Create always a new sound instance so previous sound won't be overlapped////
////////////////////////////////////////////////////////////////////////////////

///////////////RESET FUNCTION - RESET FUNCTION - RESET FUNCTION ////////////////
////////////////////////////////////////////////////////////////////////////////
function resetAll () {
  playerGuess = [];
  currentCombo = [];
  playerScore = 0;
  console.log(playerGuess + " " + currentCombo);
  document.getElementById('score1').innerHTML = 0;
}
var resetButton = document.querySelectorAll('.resetButton');
for (var i = 0; i < resetButton.length; i++) {
  resetButton[i].addEventListener('click', resetAll)};

  function reset(){
    playerGuess = [];
  }
////////////////////////////////////////////////////////////////////////////////
///////////////RESET FUNCTION - RESET FUNCTION - RESET FUNCTION ////////////////

//This is the counter, keeps track of time
// var game = {
//   score: 0,
//   ellapsedTime: 0
//   };

// setInterval(function(){
//   game.ellapsedTime += 1;
//   // console.log(game.ellapsedTime);
//   $(".game-time").text("Time: " + game.ellapsedTime);
//   $(boxes[game.currentBox]).html("");
//   game.ellapsedTime = Math.floor((Math.random)*9);
//   $(boxes[game.ellapsedTime]).html("<p>mole</p>");
// }, 1000)
