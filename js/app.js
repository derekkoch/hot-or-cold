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

    $("#guessButton").click(function() {
      var userGuess = $("#userGuess").val();
      var result = hotOrCold(userGuess);

      if (checkInput(userGuess) === true) {

        if (result === 0) {
          $("#feedback").html(userGuess + " is correct!");

        } else if (result === 1) {
          $("#feedback").html("You're hot!");

        } else if (result === 2) {
          $("#feedback").html("You're warm.");

        } else {
          $("#feedback").html("You're cold. :(");

        }

        totalGuesses += 1;
        $("#guessList").append("<li> " + userGuess + "</li>");
        $("#count").html(totalGuesses);

      } else {
        $("#feedback").closest("h2").html("Try again.");

      }

    });

    $(document).on('keydown', function(event) {

      if (event.keyCode == 13) {
        var userGuess = $("#userGuess").val();
        var result = hotOrCold(userGuess);

        if (checkInput(userGuess) === true) {

          if (result === 0) {
            $("#feedback").html(userGuess + " is correct!");

          } else if (result === 1) {
            $("#feedback").html("You're hot!");
            //console.log("The secret number is " + secretNumber);
            //console.log("The user's guess is " + userGuess);

          } else if (result === 2) {
            $("#feedback").html("You're warm.");

          } else {
            $("#feedback").html("You're cold. :(");

          }

          totalGuesses += 1;
          $("#guessList").append("<li> " + userGuess + "</li>");
          $("#count").html(totalGuesses);

        } else {
          $("#feedback").closest("h2").html("Try again.");

        }

      }

    });

});

function checkInput(value) {
	if (value - Math.floor(value) != 0 || value < 0 || value > 100) {
		return false;

	} else {
		return true;

	}
}

function hotOrCold(value) {
  var number = Math.abs(value - secretNumber);
  //console.log("the number is", number);

  if (number === 0) {
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
  totalGuesses = 0; 
  secretNumber = Math.floor(Math.random() * 100) + 1;
  $("#feedback").html("Make Your Guess!");
  $("#guessList").html("");
  $("#count").html(totalGuesses);
  $("#userGuess").val("");
}