///////////////////////////////////////////////////////////////////////////////
////////////////////////////Global Variables + Empty Arrays/////////////////////
var playerGuess = [],
currentCombo = [],
playerScore = 0,
count = 0,
buttons = $('.buttons'),
sound1 = document.querySelector("#sound1"),
sound2 = document.querySelector("#sound2"),
sound3 = document.querySelector("#sound3"),
sound4 = document.querySelector("#sound4"),
sound5 = document.querySelector("#sound5"),

soundsArray = [sound1, sound2, sound3, sound4, sound5];
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

var buttonClick = document.querySelectorAll('.buttons');
var startGame = document.querySelector('.startButton');
  startGame.addEventListener('click', function(){
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
  playSound(0);
});

$('#redButton').on('click', function(){
  playerGuess.push(1);
  console.log(playerGuess);
  count++;
  checkScore();
  playSound(1);
});

$('#blueButton').on('click', function(){
  playerGuess.push(2);
  console.log(playerGuess)
  count++;
  checkScore();
  playSound(2);
});

$('#yellowButton').on('click', function () {
  playerGuess.push(3);
  console.log(playerGuess);
  count++;
  checkScore();
  playSound(3);
});
//////////////////////playerGuess Array Push///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////RANDOM SEQUENCER -- RANDOM SEQUENCER////////////////////////////
function randomize () {
  return Math.floor((Math.random()*4))}
////////////////RANDOM SEQUENCER -- RANDOM SEQUENCER////////////////////////////
////////////////////////////////////////////////////////////////////////////////

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
      // alert("Incorrect Combo, nice try, your score was " + playerScore);
      inform("Incorrect Combo, nice try, your score was " + playerScore);
      document.getElementById('score1').innerHTML = playerScore;
      playSound(4);
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
    case 4:
    selectedSound = "sounds/game_over.wav";
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

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////jQuery UI Explode///////////////////////////////
$(document).ready(function () {
  $("#dialog").dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 375
      },
      hide: {
        effect: "explode",
        duration: 800
      }
    });
});
function inform(message) {
  $( "#dialog .dialogMsg").html(message);
  $( "#dialog" ).dialog( "open" );
}
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////jQuery UI Explode///////////////////////////////
