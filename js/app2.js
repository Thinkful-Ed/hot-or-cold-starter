$(document).ready(function() {
function newGame() {
  numberGenerated = Math.floor((Math.random()*100)+1);
  counter = 0;
  console.log(numberGenerated);
  $("#guessButton").click(function() {
    var userGuess = $("#userGuess").val();
    console.log(userGuess)
   if (userGuess == numberGenerated) {
     alert("Correct!");
   };
   if (userGuess > numberGenerated) {
     var difference = (userGuess - numberGenerated);
   } else {
     var difference = (numberGenerated - userGuess);
}
console.log(difference);
  if(difference >= 1 && difference <= 10) {
    $("#feedback").html("I smell something burning!")
  }
  if(difference >= 10 && difference <= 20) {
    $("#feedback").html("The kettle is boiling, my friend.")
  }
  if(difference >= 20 && difference <= 30) {
    $("#feedback").html("You're getting warmer...")
  }
  if(difference >= 50) {
    $("#feedback").html("Brr...it's cold in here.")
  }
  if(difference == 0) {
    $("#feedback").html("Eureka! You've guessed it!")
  }
  counter++;
  $("span#count").html(counter);
  $("#guessList").prepend("<li>"+ userGuess +"</li>");
$("#userGuess").val("").focus();
})
}
$("#newButton").click(function() {
  newGame();
})
})
