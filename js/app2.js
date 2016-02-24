$(document).ready(function () {


    /* Step 1
    Declare the global variables
    */

    var secretNumber = generateRandomNumber(1, 100);
    //console.log("Secret Number: " + secretNumber);

    var oldGuess = 0;

    //set the counter
    var counter = 0;
    $('#count').text(counter);

    /* Step 2
    Functions definitions
    */

    // Function to start a new game
    function newGame() {
        document.location.reload(true);
    }

    // Function to generate the random number
    function generateRandomNumber(min, max) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }

    // Function to count the number of guesses
    function showGuessCounter(counter) {
        $('#count').text(counter);
    }

    // Function to show the history of guesses
    function guessHistory(guessedNumber) {
        $('#guessList').append('<li>' + guessedNumber + '</li>');
    }

    // Function to implement a simple validation of the user input
    function validation(guessedNumber) {

        //check the guessed number in the console
        //console.log("Guessed Number: " + guessedNumber);


        /* start applying validation, from the less restrictive one to the most restrictive one; each rule NEGATES the truth*/

        //make sure that we get a number
        if (isNaN(guessedNumber)) {
            alert('You must enter a number!');
            //reset the guess value to nothing
            $('#userGuess').val('');
            return false; // this means, stop the loop and don't do anything else
        }

        //if the number is divisible by 1 it means it is an integer (it has no decimals)
        else if (guessedNumber % 1 !== 0) {
            alert('You must enter an integer value!');
            //reset the guess value to nothing
            $('#userGuess').val('');
            return false; // this means, stop the loop and don't do anything else
        }

        //if the guessedNumber is smaller than 1 OR the guessedNumber is bigger than 100...
        else if (guessedNumber < 1 || guessedNumber > 100) {
            alert('Please guess a number between 1 and 100!');
            //reset the guess value to nothing
            $('#userGuess').val('');
            return false; // this means, stop the loop and don't do anything else
        }

        //else the guessedNumber is valid
        else {
            guessFeedback(secretNumber, guessedNumber);
            counter++;
            //update the guess history
            guessHistory(guessedNumber);
            //update the number of guesses
            showGuessCounter(counter);
            $('#userGuess').val('');
        }
    };

    // Function to provide feedback to the user
    function guessFeedback(secretNumber, guessedNumber) {
        //show the absolute value of the difference between the secretNumber and guessedNumber
        var difference = Math.abs(secretNumber - guessedNumber);
        if (difference >= 50) {
            $('#feedback').text('Ice Cold!');
        } else if (difference >= 30 && difference <= 49) {
            $('#feedback').text('Cold!');
        } else if (difference >= 20 && difference <= 29) {
            $('#feedback').text('Warm!');
        } else if (difference >= 10 && difference <= 19) {
            $('#feedback').text('Hot!');
        } else if (difference >= 1 && difference <= 9) {
            $('#feedback').text('Very Hot!!');
        } else {
            $('#feedback').text('You got it. Well done!');
            document.body.style.backgroundColor = '#ff0404';
            document.getElementById("userGuess").disabled = true;
            document.getElementById("guessButton").disabled = true;
        }
    }


    /* Step 3
    Using the Functions
    */

    $('.new').on('click', newGame);

    $('#guessButton').on('click', function () {
        var guessedNumber = $('#userGuess').val();
        var newGuess = guessedNumber;

        //validate all the numbers
        validation(guessedNumber);

    });

    $(document).on('keypress', function (e) {
        //on enter
        if (e.which === 13) {
            e.preventDefault();
            var guessedNumber = parseInt($('#userGuess').val(), 10);
            var newGuess = guessedNumber;

            //validate all the numbers
            validation(guessedNumber);

        }
    });

    // Display information modal box
    $('.what').click(function () {
        $('.overlay').fadeIn(1000);
    });

    // Hide information modal box
    $('a.close').click(function () {
        $('.overlay').fadeOut(1000);
    });

});
