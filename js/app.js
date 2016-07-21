
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

/*Create a function that generates a random number to start a new game */
function newGame() {
/* generate a random number from 1-100 */
		var randomNumber = Math.floor((Math.random()*100)+1);
		console.log(randomNumber);
/*When user clicks on "new game", console.log a random number*/
	}

	var newClass = document.getElementById('newButton');
	newClass.addEventListener('click', newGame);
/* Add event listener to "new game" button*/
/* Take user guess, and determine if it's close to randomNumber */
function checkGuess() {
	var guess = document.getElementById('userGuess');
	var guessDiff = randomNumber - guess;
	if (guessDiff < abs(10)) {
		return
	}
}
