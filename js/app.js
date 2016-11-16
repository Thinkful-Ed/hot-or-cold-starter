var gameState = {
	secretNumber: null,
	userGuesses: null,
	guessCount: null,
	feedback: null,
	gameWon: false
};



function displayGameState(gameState) {
	// display feedback to the user
	// display the userGuesses so far, if any
	// display count of guesses so far
}

function startNewGame() {
	// when game starts, the feedback component should display
	// "Make your guess!"
	gameState.feedback = 'Make your guess!';
	// this line sets `gameState.secretNumber` to random number
	// between 1 and 100 -- http://stackoverflow.com/a/7228322
	gameState.secretNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  console.log(gameState.secretNumber);
	// user hasn't made any guesses yet, so it's an empty array
	gameState.userGuesses = [];
	// user hasn't made any guesses at game start, so set
	// `gameState.guessCount` to 0
	gameState.guessCount = 0;
	// game not won yet, so set state accordingly
	gameState.gameWon = false;

	displayGameState(gameState);
}

function handleUserGuesses() {
	// When user clicks guess button, get the value they've
	// entered as their guess and store as variable
}

function checkUserGuess(correctAnswer, userAnswer) {
	// Compare user’s guess to the correct answer
	// If number is correct, congratulate the user
    // If number is incorrect:
    //   Add the number the list of guesses so far and display it
	//   Add 1 to the guess counter and update the display
    //   Give user feedback on whether their guess was hot or cold.
    //   		If further than 20, cold.
    //   		If closer than 20 hot.
    //
		// Extra credit: If guess was closer than previous guess,
		// “getting hotter.” If further, “getting cooler.”
}

function handleGameReset() {
	// When user clicks new game button,
	// reset everything: correct answer, guess counter, list of guesses
}


function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
  		$(".overlay").fadeOut(1000);
  	});
}


// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
$(document).ready(function(){
	handleInstructionsModal();
	startNewGame();
	handleUserGuesses();
	handleGameReset();
});


