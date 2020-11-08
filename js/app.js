//JQuery JS for number guessing game
var randomNumber 
var userGuess 
var difference 
var guessList = [] 
   
$(document).ready(function(){
        generateNum();

        $(".what").click(function(){
        $(".overlay").fadeIn(1000);
        });
        $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
        });
        
      $("form").on("submit", function(event) {
        event.preventDefault();
        userGuess = $(".text").val();
        // alert("userGuess is" + userGuess);
        
        validateNum();
        guessFeedback();
        showGuess();
       
        

        })
      function generateNum(){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        // alert("this is the random number" + randomNumber);
      }
      function validateNum(){
        if (isNaN(userGuess) || userGuess % 1 !=0 || userGuess > 100) {
        alert("Must be a number 1 - 100");    
       }if(guessList.length > 0){
        $.each(guessList,function(guess,value){
          if(userGuess == value){
            alert("already used that one!")
          }
    });
   }
 }

     function guessFeedback() {
     difference = Math.abs(userGuess - randomNumber);
    // alert("the difference" + difference);
    if (difference == 0) {
      $("h2").html("So Hot, you got it!");
    }else if(difference >= 1 && difference <= 5 ){
        $("h2").html("on fire!");
  }else if(difference >= 6 && difference <= 10){
        $("h2").html("hot");
  }else if(difference >= 11 && difference  <= 29){
        $("h2").html("warm");
  }else if(difference >= 30 && difference <= 39){
        $("h2").html("lukewarm");
  }else if(difference <= 40 && difference <= 49){
        $("h2").html("big chill");      
  }else{
        $("h2").html("cold");

  }
 
}

function showGuess(){
  
    guessList.push(userGuess);
    // alert(guessList);
    for (var i = 0; i < guessList.length; i++){
    $("#guessList").html("List guesses : " + guessList + "</br>");
    $("#count").html(i + 1);
    userGuess = $(".text").val("");
    }
   }
  
     $("a.new").click(function(){ 
     $("form")[0].reset();
     $("#guessList").html("Try to guess a number between 1 and 100 use the hot cold clues to win!");
     $("#feedback").html("Make your Guess!");
     guessList = [];
     $("#count").html(0);
     generateNum();
    });

  
 });
