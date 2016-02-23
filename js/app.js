
$(document).ready(function(){
  var randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  var allGuesses = [];
  var diff;
  var message;
  var guess;

    $("#guessButton").click(function() {
    	var guess = $("#userGuess").val();
  		$("#userGuess").val('');
    	  allGuesses.push(guess);
     	 if (guess != '') {
     		 $("#guessList").append("<li>" + guess + "</li>");
     }
      	console.log('Guess = ' + guess);
    

      diff = Math.abs(guess - randomNumber);

      if (diff >= 80) {
         message = "You're ice cold!"
      } 

      else if ((diff >= 60) && (diff < 80)) {
        message = "Very cold!"
      }

      else if ((diff >= 40) && (diff < 60)) {
      	message = "Cold!"
      }

      else if ((diff >= 20) && (diff < 40)) {
      	message = "Still pretty chilly!"
      }

      else if ((diff >= 11) && (diff < 20)) {
    	 message = "You're warming up!"
    }
      else if ((diff >= 1) && (diff < 11)) {
      	message = "You're hot!"
      }

	  else if (guess == randomNumber) {
        message = "You got it!"
      }

	$("#feedback").text(message);
    return false;
    

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  });

});




