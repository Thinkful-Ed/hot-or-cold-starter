
$(document).ready(function(){
	
  var randomNumber = secretNumber();

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

    $("#buttonGuess").click(function(){
        userGuess()
    });

    $("#count").html(parseInt($("#count").html())+1);
    
    function newGame(){
      // numbers will be placed in (remove those numbers)
      // tells you whether you are near or far from the answer
      randomNumber = secretNumber();
      console.log("Inside newGame", randomNumber);
      // return x;
    }
    
    
    function userGuess(){
      if (userGuess %1 !== 0) { 
        alert ("Please submit a whole number")
      } else if (userGuess <= secretNumber -50 || userGuess <= secretNumber + 50) {
          $("#feedback").append("Icy Cold")
      } else if (userGuess <= secretNumber -30 || userGuess <= secretNumber +30){
          $("#feedback").append("cold")
      } else if (userGuess <= secretNumber -20 || userGuess <= secretNumber +20){
          $("#feedback").append("warm")
      } else if (userGuess <= secretNumber -10 || userGuess <= secretNumber +10){
          $("#feedback").append("hot")
      } else if (userGuess <= secretNumber -5 || userGuess <= secretNumber +5){
          $("#feedback").append("Sorching hot")
      } else if (userGuess === secretNumber){
          $("#feedback").append("You guessed the number!")
      };
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





