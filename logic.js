//global variables and empty arrays
var playerGuess  = []
,   currentCombo = []
,   playerScore  = 0
,   count        = 0
,   buttons      = $('.buttons')
,   sound1       = document.querySelector("#sound1")
,   sound2       = document.querySelector("#sound2")
,   sound3       = document.querySelector("#sound3")
,   sound4       = document.querySelector("#sound4")
,   sound5       = document.querySelector("#sound5")
,   soundsArray  = [sound1, sound2, sound3, sound4, sound5];

//flash the button
function flashButton(index){
  $(buttons[index]).fadeTo('fast', 0.2).fadeTo('fast', 1.0);
  playSound(index);
};

//start button query selector
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

$('.buttons').on('click', function () {
  var value = $(this).data('button');
  playerGuess.push(value);
  console.log(playerGuess);
  count++;
  playSound(value);
  compareClick();
});

//randomizer function
function randomize () {
  return Math.floor((Math.random()*4))}

//1st main function
var compareClick = function(){
  var lastClick = playerGuess[playerGuess.length-1];
  var position = playerGuess.length - 1;

  if (lastClick !== currentCombo[position]){
    //wrong, end
    inform("Incorrect Combo, nice try, your score was " + playerScore);
    document.getElementById('score1').innerHTML = playerScore;
    playSound(4);
  } else {
    if (playerGuess.length === currentCombo.length){
      //round complete
      playerScore++;
      document.getElementById('score1').innerHTML = playerScore;
      nextRound();
    } else {
      //continue, don't do anyting
    }
  }
}
//second main function
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

//Create always a new sound switch index so previous sound won't be overlapped
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

//jquery explode
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
};

//reset functions
function resetAll () {
  playerGuess = [];
  currentCombo = [];
  playerScore = 0;
  console.log(playerGuess + " " + currentCombo);
  document.getElementById('score1').innerHTML = 0;
};

var resetButton = document.querySelectorAll('.resetButton');
for (var i = 0; i < resetButton.length; i++) {
  resetButton[i].addEventListener('click', resetAll)};
//next round function
function nextRound(){
    currentCombo.push(randomize());
    console.log(currentCombo);
    for (var i = 0; i < currentCombo.length; i++) {
      setTimeout(function(index) {
        flashButton(currentCombo[index]);
      }, 400*(i+1), i);
    }
    playerGuess = [];
};
