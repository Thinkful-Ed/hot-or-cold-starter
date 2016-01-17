
$(document).ready(function(){
	



// This function generates the random number
function secretNum(min, max) {
	var secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return secretNumber;
}


// This sets the boundaries of what the secret number could be and sets up the console to display that number
var secretNumber = secretNum(1, 100);
console.log("Secret Number: " + secretNumber);

/*backgroundColor change included in JS document so that it may change colors,
depending on whether the guess was hotter or colder..*/
document.body.style.backgroundColor = '#333';

//the player's old guess must start at 0.
var oldGuess = 0;

/* this is a jQuery function that tags the 'count' ID in the CSS file, applies
 the .text method to it to insert text into the HTML based on what was put
 into the variable 'counter'.*/
var counter = 30;
$('#count').text(counter);

// the location.reload function is used to reload the page.
function newGame() {
    document.location.reload(true);
}


 
/*This section sets the boundaries for how hot/cold the user is, and the
parameters that each temperature definition lies in */
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


    // Function to provide "relative feedback" to the user (based on what the user's prior guess was).
    function relativeFeedback(secretNumber, oldGuess, newGuess) {
        var oldDiff = parseInt(Math.abs(secretNumber - oldGuess));
        var newDiff = parseInt(Math.abs(secretNumber - newGuess));
        if (newDiff > oldDiff) {
            $('#relative-feedback').text('You are colder than the last guess!');
        } else if (newDiff === oldDiff) {
            $('#relative-feedback').text('You are as far as your previous guess!');
        } else {
            $('#relative-feedback').text('You are hotter than the last guess!');
        }
    }

    // Function to count the number of guesses
    function guessCounter(counter) {
        $('#count').text(counter);
    }

    // Function to show the history of guesses
    function guessHistory() {
        $('#guessList').append('<li>' + parseInt($('#userGuess').val(), 10) + '</li>');
    }


    // Function to implement a simple validation of the user input
    function validation(guessedNumber) {

        //check the guessed number in the console
        console.log("Guessed Number: " + guessedNumber)

        //if the number is divisible by 1 it means it is an integer (it has no decimals)
        if (guessedNumber % 1 !== 0) {
            alert('You must enter an integer value!!');
            //reset the guess value to nothing
            $('#userGuess').val('');
            return false; // this means, stop the loop and don't do anything else
        }

        //if the guessedNumber is smaller than 1 OR the guessedNumber is bigger than 100...
        else if (guessedNumber < 1 || guessedNumber > 100) {
            alert('Please guess a number between 1 to 100!!');
            //reset the guess value to nothing
            $('#userGuess').val('');
            return false; // this means, stop the loop and don't do anything else
        }

        //else the guessedNumber is valid
        else {
            guessFeedback(secretNumber, guessedNumber);
            counter--;
            guessHistory();
            $('#userGuess').val('');
        }

        //if the number of guesses is smaller than 0 it means that the game is over
        if (counter <= 0) {
            $('#feedback').text('Game Over!');
            document.getElementById("userGuess").disabled = true;
            document.getElementById("guessButton").disabled = true;
            alert('The Secret number was ' + secretNumber + ' ! Better luck next time !!');
        }

        //update the number of guesses
        guessCounter(counter);
    }

// declared functions above, invoked functions below.....

    $('.new').on('click', newGame);

    $('#guessButton').on('click', function () {
        var guessedNumber = parseInt($('#userGuess').val(), 10);
        var newGuess = parseInt(guessedNumber);

        validation(guessedNumber);

        if (oldGuess !== 0 && guessedNumber >= 1 && guessedNumber <= 100) {
            relativeFeedback(secretNumber, oldGuess, newGuess);
        }
        oldGuess = newGuess;
    });

    $('#userGuess').on('keypress', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            var guessedNumber = parseInt($('#userGuess').val(), 10);
            var newGuess = parseInt(guessedNumber);

            validation(guessedNumber);

            if (oldGuess !== 0 && guessedNumber >= 1 && guessedNumber <= 100) {
                relativeFeedback(secretNumber, oldGuess, newGuess);
            }
            oldGuess = newGuess;
        }
    });


    /*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });

});

