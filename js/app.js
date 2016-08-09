
$(document).ready(function(){
	newGame();
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
		$("a.new").click(function() {
			newGame();
		});
/* Declare all variables */
var randomNumber; // random number generated at start of the Game
var numberGenerated // variable that stores random number logged by console in the function newGame()
var userGuess // the value of the user's guess
var guessDiff; // stores the difference between the number generated and the user's guess
var numberOfGuesses = 0; // count of the number of guesses user has made
var listGuesses; // lists out the guesses the user has made
var correct = false;
var guessError;


// start a new game
function newGame() {
	numberOfGuesses = 0;
	setCount(numberOfGuesses);
	userGuess = "";
	giveFeedback("Enter your numerical guess!");
	listGuesses = [];
	updateDisplay();
	$("ul#guessList li").remove();
	setFocus();
	clearText();
	generateNumber();
}
newGame();

/* start new game when user clicks on "+New" */
$(".new").click(function(){
	event.preventDefault
	newGame();
});

/*Create a function that generates a random number to start a new game */
function generateNumber() {
/* generate a random number from 1-100 */
		numberGenerated = Math.floor((Math.random()*100)+1);
		console.log(numberGenerated);
		return numberGenerated;
}

/* Ensure that user's entry is valid */
function checkEntry(userEntry) {
	if (isNaN(userEntry)) {
	  giveFeedback("Numbers only, please.");
		return true;
	}
	else if (userEntry < 1 || userEntry > 100) {
		giveFeedback("Remember, your Number must be from 1 to 1-100");
	}
	else {
			return false;
		};
	}
	// once user submits guess
	$("form").submit(function(event){
			event.preventDefault();
	    	if (!correct) {
				$('#userGuess').val();
				console.log("User guess = "+ userGuess);
				clearText();
				setFocus();
				guessError = checkGuess(userGuess);
				if (!guessError) {
					guessCount++;
					setCount(guessCount);
					$("ul#guessList").append("<li>" + userGuess + "</li>");
					guessError = checkTemparature(Math.abs(randomNumber - userGuess));
				};
			} else {
				giveFeedback("You already won! Woo-hoo! Start a new game.");
				//disableGuess();
			};
	  	});

	/* Take user guess, and determine if it's close to randomNumber, tell user if it's too high, too low, just right.*/
	// If user is >50 values away, alert "Brr...it's cold in here", if user is between 30 and 50 values away, they are "cold",
	// If user is between 20-30 values away, they are "You're getting warmer...try again!"
	// If user is between 10-20 values away, they are "Your guess is hot!"
	// If user is between 1-10 values away, alert "I smell something burning!"
	// If values are equal, they "GUESSED IT!"
	// When user clicks on "guess", the number entered is evaluated
	$("#guessButton").click(function checkGuess(guess) {
		guess = $("#guessButton").val();
	// Take user's input and evaluate it --> requires input field to be selected
		guessDiff = numberGenerated - guess;
		if (guessDiff < Math.abs(50)) {
			giveFeedback("Brr...it's cold in here.")
		}
		else if (guessDiff >= Math.abs(20) && guessDiff <= Math.abs(30)) {
			giveFeedback("you're getting warmer...try again!")
		}
		else if (guessDiff > Math.abs(10) && guessDiff <= Math.abs(20)) {
			giveFeedback("Your guess is hot!")
		}
		else if (guessDiff <= Math.abs(10)) {
			giveFeedback("I smell something burning!")
			}
		else if (guessDiff == 0) {
			giveFeedback("Eureka! You've guessed it!")
		}
	});
	/* Function that clears textbox for new game */
	function clearText() {
		$('#userGuess').val('');
	}
	/* Fuction changing focus to inputbox for new game */
	function setFocus() {
		$('#userGuess').focus();
	}

// update display with appropriate information according to information user has entered
function updateDisplay() {
	$("#userGuess").val(userGuess);
	$("#listGuesses").empty();
	if (listGuesses.length > 0) {
		for(var i = 0; i < listGuesses.length; i++) {
			var list = "<li>" + listGuesses[i] + "</li>"
			$("#guessList").append(list);
		}
	}
	$("#userGuess").focus();
}
// give feedback
	function giveFeedback(feedback) {
		$('#feedback').text(feedback);
}
function guess() {
	var guess = $("#userGuess").val();
	if (!checkGuessValidity(guess)) {
		userGuess = "";
		updateDisplay();
		return;
	}
	giveFeedback = checkGuess();
	numberOfGuesses++;
	listGuesses.push(guess);
	userGuess = "";
	updateDisplay();
}

/* update display with user guess */
function setCount(count) {
	$('#count').text(numberOfGuesses);
}
});
