var secretNumber = Math.floor(Math.random() * 100) + 1;
var totalGuesses = 0;

$(document).ready(function(){
	
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("#guessButton").on("click", function(){ 
      e.preventDefault();
  		var userGuess = $("#userGuess").val();

  		if (checkInput(userGuess) === true) {
        totalGuesses += 1;

        /*--- Output user guess and add to list ---*/
  			$("#feedback").closest("h2").html("You guessed " + userGuess);
        $("#guessList").append("<li> " + userGuess + "</li>");

        /*--- Presents updated guess counter ---*/
        $("#count").closest("span").html(totalGuesses);

  		} else {
        /* Prevent entry of non-numbers */
  			$("#feedback").closest("h2").html("Try again.");

  		}

  	});


});

function checkInput(value) {
	if (value - Math.floor(value) != 0) {
		return false;
	} else {
		return true;
	}
}

function hotOrCold(value) {
  /*--- For use in the future --*/
  if ((value - secretNumber) < 10 || (value - secretNumber) > -10 ) {
     return 0;

  } else if ((value - secretNumber) > 30 || (value - secretNumber) < -30 ) {
     return 2;

  } else {
    return 1;

  }

}