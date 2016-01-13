// Number Guessing Game
// Computer picks # from 1-100, player guesses
// Computer says too high, too low, or you win
// Player keeps guessing until they win

// Computer picks a number from 1-100
var computerNumber = Math.ceil(Math.random()*100);

// User picks a number
var userNumber = prompt('Pick a number from 1-100');

// while user # is not equal to computer #
while(userNumber != computerNumber)
{
	// if it's too high, print "too high"
	if(userNumber > computerNumber)
	{
		alert("Too high");
	}
	else // it's too low
	{
		alert("Too low");
	}
	
	// guess again
	userNumber = prompt('Try again. Pick a number from 1-100');
}
// They're equal
alert("You win!");
// print "you win"