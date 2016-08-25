
$(document).ready(function(){
	
var answer = Math.floor((Math.random() * 100) + 1);
	console.log("The secret number is: " + answer);

/*--- To count the number of User guesses ---*/
	$("#guessButton").on("click", function(e){
		$("#count").html(function(i, val) { return +val+1 });       
});

/*--- User entries box ---*/
var userGuess;

	$("#guessButton").on("click", function(e){
		console.log(answer);
	var userGuess = $("#userGuess").val();	
		console.log(userGuess);
	
	if (userGuess == answer) { 
		$("h2").text("You Got It!");
}
	else if (Math.abs(answer - userGuess) < 10) {
		$("h2").text("Hot");
}

/*--- To get warm response
	else if (Math.abs(answer - userGuess) > 11 && < 20) {
		$("h2").text("Kinda Hot");
}	---*/	

	else {
		$("h2").text("Cold");
}
	e.preventDefault();
});


/*--- To start a new game---*/		 
	$("a.new").on("click", function(e){
	
	e.preventDefault();
	
	answer = Math.floor((Math.random() * 100) + 1);
	console.log("The secret number is: " + answer);
	$("#count").html("0");
	$("#userGuess").val("");
	$("h2").text("Make your Guess!");

 })

	
/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

 /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});



