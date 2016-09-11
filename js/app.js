
$(document).ready(function(){
	
  var randomNumber = secretNumber();
  console.log('randomNumber', randomNumber);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



    $(".new").click(function(){
      newGame();
    });
    function clear() { //clear html and texbox// 
      $('.clear').on('click', function() { 
        $('.result').empty(); 
        $('#userInput').val(''); 
      }); 
    }

    $("#guessButton").click(function(event){
      event.preventDefault();
      var guess = $('#userGuess').val()
        userGuess(guess);
    });

    $("#count").html(parseInt($("#count").html())+1);
    
    function newGame(){
      // numbers will be placed in (remove those numbers)
      // tells you whether you are near or far from the answer
      randomNumber = secretNumber();
      console.log("Inside newGame", randomNumber);
      // return x;
    }

    // contract
    function userGuess(guess){
      guess = parseInt(guess);
      console.log(
        guess <= randomNumber -5,
        guess >= randomNumber +5,
        randomNumber + 5,
        randomNumber - 5
       );
      if (guess %1 != 0) { 
        alert ("Please submit a whole number")
        
      } else if (guess <= randomNumber -50 || guess >= randomNumber + 50) {
          $("#feedback").html("Icy Cold")
      } else if (guess <= randomNumber -30 || guess >= randomNumber +30){
          $("#feedback").html("cold")
      } else if (guess <= randomNumber -20 || guess >= randomNumber +20){
          $("#feedback").html("warm")
      } else if (guess <= randomNumber -10 || guess >= randomNumber +10){
          $("#feedback").html("hot")
      } else if (guess >= randomNumber -5 && guess <= randomNumber +5){
          $("#feedback").html("Sorching hot")
      } else if (guess === randomNumber){          
        $("#feedback").html("You guessed the number!")
      }
      else {
        $("#feedback").html("Otherwise");
      }
    }

    function secretNumber(){
      return Math.floor((Math.random() * 100) + 1);
    }
});

//function clear() { //clear html and texbox $('.clear').on('click', function() { $('.result').empty(); $('#userInput').val(''); }); }
//else if (userGuess <= secretNumber -50) {alert ("Sorching Hot")}
//$("#feedback").append("Icy Cold")//reports results into feedback

//(value % 1 !== 0) //makes sure guess isn't a decimal
//if (userGuess %1 !== 0) { alert ("Please submit a whole number")}





