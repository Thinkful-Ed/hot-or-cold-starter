
$(document).ready(function(){
  var randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  var allGuesses = [];
  var diff;
  var message;

    $("#guessButton").click(function() {
      var guess = $("#userGuess").val();
      $("#userGuess").val('');
      allGuesses.push(guess);
      $("#guessList").append("<li>" + guess + "</li>")
      console.log('Guess = ' + guess);

      diff = Math.abs(guess - randomNumber);

      if (diff > 80) {
        message = "You're ice cold!"
      } else if (diff > 50) {
        message = "Pretty cold!"
      } else if (guess == randomNumber) {
        message = "You got it!"
      }
      $("#feedback").text(message);

      return false;
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


