
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

var finish = false;

var newGame = function() {
      var guessCount = 0;
      var guesses =[];
      var elFeedback = $('#feedback');
      $('#userGuess').val("");
      $('#guessList').text("");
      $('#count').text(guesses.length);
      $('#feedback').text("Make Your Guess!");
      var secretNumber = Math.floor(Math.random()*100);
      finish = false;
      
      $('#guessButton').click(function(e) {
        e.preventDefault();
        var guess = Number($('#userGuess').val());
        guesses.push(guess);
        console.log(guesses);
        var guessString = guesses.toString();
        $('#guessList').text(guessString);
        $('#userGuess').val("");
        var guessDifference = Math.abs(secretNumber - guess);
          if (guessDifference === 0) {
            $('#feedback').text("Congrats!!!! Sound the Alarm");

          } else if (guessDifference > 80){
            $('#feedback').text("Ice Cold")

          }  else if (guessDifference > 60){
            $('#feedback').text("Still Pretty Cold");

          } else if (guessDifference > 40){
            $('#feedback').text("Starting to Thaw Out");
          } else if (guessDifference > 20) {
            $('#feedback').text("Getting Warmer");
          } else if (guessDifference > 10) {
            $('#feedback').text("Getting Hot");
          } else if (guessDifference > 5) {
            $('#feedback').text("Hot!!!!!");
          } else {
            $('#feedback').text("On Fire!");
          }
          

          
          $('#count').text(guesses.length);


   })
}

newGame();
