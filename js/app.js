var secretNumber = Math.floor(Math.random() * 100) + 1;
var totalGuesses = 0;

$(document).ready(function(){
	
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $(".new").click(function() {
      newGame();

    });

});

$(document).on("click", "#guessButton", function() {
      var userGuess = $("#userGuess").val();
      var result = hotOrCold(userGuess);

      if (checkInput(userGuess) === true) {

        if (result === 0) {
          $("#feedback").html(userGuess + " is correct!");
          console.log(secretNumber);

        } else if (result === 1) {
          $("#feedback").html("You're hot!");
          console.log(secretNumber);

        } else if (result === 2) {
          $("#feedback").html("You're warm.");
          console.log(secretNumber);

        } else {
          $("#feedback").html("You're cold. :(");
          console.log(secretNumber);

        }

        totalGuesses += 1;
        $("#guessList").append("<li> " + userGuess + "</li>");
        $("#count").html(totalGuesses);
        event.stopPropagation();

      } else {
        $("#feedback").closest("h2").html("Try again.");
        event.stopPropagation();
      }

});

$(document).on('keydown', function(event) {
    if (event.keyCode == 13) {
      var userGuess = $("#userGuess").val();
      var result = hotOrCold(userGuess);

      if (checkInput(userGuess) === true) {

        if (result === 0) {
          $("#feedback").html(userGuess + " is correct!");
          console.log(secretNumber);

        } else if (result === 1) {
          $("#feedback").html("You're hot!");
          console.log(secretNumber);

        } else if (result === 2) {
          $("#feedback").html("You're warm.");
          console.log(secretNumber);

        } else {
          $("#feedback").html("You're cold. :(");
          console.log(secretNumber);

        }
 
        totalGuesses += 1;
        $("#guessList").append("<li> " + userGuess + "</li>");
        $("#count").html(totalGuesses);
        event.stopPropagation();

      } else {
        $("#feedback").closest("h2").html("Try again.");
        event.stopPropagation();

      }

  }
      
});

function checkInput(value) {
	if (value - Math.floor(value) != 0 || value < 0) {
		return false;
	} else {
		return true;
	}
}

function hotOrCold(value) {
  var number = Math.abs(value - secretNumber);

  if (number = 0) {
     return 0;

  } else if (number <= 10) {
     return 1;

  } else if (number <= 30) {
    return 2;

  } else {
    return 3;
  }

}

function newGame() {
  //Clear guesses section
  //Set total guesses to 0
  //Reset feedback section to original text "Make Your Guess!"
  //secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log("You pressed new game!");
}