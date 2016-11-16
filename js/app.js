'use strict';

var gameState = {
	secretNumber: null,
	userGuesses: null,
	guessCount: null,
	feedback: null,
	gameWon: false,
};

function displayGameState(gameState) {
	// display feedback to the user
	$('.js-feedback').text(gameState.feedback);
	// display the userGuesses so far, if any
	$('.js-guess-list').text(gameState.userGuesses.join(', '));
	// display count of guesses so far
	$('.js-guess-count').text(gameState.guessCount);
}

function startNewGame() {
	// when game starts, the feedback component should display
	// "Make your guess!"
	gameState.feedback = 'Make your guess!';
	// this line sets `gameState.secretNumber` to random number
	// between 1 and 100 -- http://stackoverflow.com/a/7228322
	gameState.secretNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
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
	// When user clicks guess button, get the value of their
	// guess, send it along with correct answer to checkUserGuess
	// in order to generate new feedback to display.
	// Then update gameState with new feedback, and display game state
	$('#js-guess-submit').click(function(event) {
		// by default if user clicks a submit button/input,
		// the browser will try to submit form. but that's not
		// what we want to happen -- we want javascript to handle
		// the form submission, so this line stops the default behavior.
		event.preventDefault();
		// increment `gameState.guessCount` by 1, since it's a new guess
		gameState.guessCount += 1;
		var userGuessRaw = $('#js-user-guess').val();
		// the raw value will be a string, `parseInt` converts it to an
		// integer.
		// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
		var userGuess = parseInt(userGuessRaw, 10);
		//generate new feedback based on guess, and update `gameState`
		var newFeedback = checkUserGuess(userGuess);
		gameState.feedback = newFeedback;

		// add the userGuess to `gameState.userGuesses`
		gameState.userGuesses.push(userGuess);
		// display the updated gameState
		displayGameState(gameState);
		// zero out the user guess so they can guess again
		$('#js-user-guess').val(null);
	});
}

function getAnswerDifference(correctAnswer, guess) {
	// find the difference between `correctAnswer` and `guess`
	// and convert it to absolute value (i.e., if difference is -20
	// we want to convert that to 20).
	// http://www.w3schools.com/jsref/jsref_abs.asp
	return Math.abs(correctAnswer - guess);
}

function checkUserGuess(userAnswer) {
	// if game already won, tell them to start a new game
	if (gameState.gameWon) {
		return 'You Won this game already! You need to start a new game.';
	}
	var answerDifference = getAnswerDifference(
		gameState.secretNumber, userAnswer);
	console.log('`answerDifference` is ' + answerDifference);
	// if they just won the game, update gameState and tell them they won
	if (answerDifference === 0) {
		gameState.gameWon = true;
		return 'Yay! You guessed it!!';
	}
	if (answerDifference <= 20) {
		return 'You\'re getting hot!';
	}
	else {
		return 'You\'re cold!';
	}
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
	
});


