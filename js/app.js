


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



  $('.new').click(function(){
      newGame();
    
  })

  


});


//var newGame = function() 
//math.random to generate new random numbers
//clear out form
//form: submit test number against random number hot,cold or correct.
//.click run another function
  //get the value they've entered
  //test against random #

/* $("newGamebutton").click(function() {
      reset form
      reset guesses #
      reset array
      reset random #
}*/

var newGame = function() {
      var guesses =[];
      $('#userGuess').val("");
      $('#guessList').val("");

      $('#guessButton').click(function() {


    })
  }

var guessGame = function() {
  var guess = $('#userGuess').val();
  


}

