
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


// This function generates the random number
function secretNum(min, max) {
	var secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return secretNumber;
}


// This sets the boundaries of what the secret number could be and sets up the console to display that number
var secretNumber = secretNum(1, 100);
console.log("Secret Number: " + secretNumber);


document.body.style.backgroundColor = '#333';


var oldGuess = 0;


var counter = 30;
$('#count').text(counter);


function newGame() {
    document.location.reload(true);
}


 

function guessFeedback (secretNumber, guessedNumber) {
    var difference = Math.abs(secretNumber - guessedNumber);
    if (difference >= 50) {
        $('#feedback').text('Ice Cold!');
        document.body.style.backgroundColor = '#002cb3';
    } else if (difference >= 30 && difference <= 49) {
        $('#feedback').text('Cold!');
        document.body.style.backgroundColor = '#3333cc';
    } else if (difference >= 20 && difference <= 29) {
        $('#feedback').text('Warm!');
        document.body.style.backgroundColor = '#8533ff';
    } else if (difference >= 10 && difference <= 19) {
        $('#feedback').text('Hot!');
        document.body.style.backgroundColor = '#b84dff';
    } else if (difference >= 1 && difference <= 9) {
        $('#feedback').text('Very Hot!!');
        document.body.style.backgroundColor = '#fc0446';
    } else {
        $('#feedback').text('You got it. Well done!');
        document.body.style.backgroundColor = '#ff0404';
        document.getElementById("userGuess").disabled = true;
        document.getElementById("guessButton").disabled = true;    
    }
}






