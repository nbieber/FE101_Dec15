/*
	Print #s up to 100
	Instead of multiples of 3, print fizz
	instead of multiples of 5,
	print buzz
	instead of multiples of 15, print fizzbuzz
*/



var x = 0; // Initialize the counter
while(x <= 100) // condition
{
	// Is x a multiple of 3?
	if(x % 3 === 0 && x % 5 === 0)
	{
		console.log('FizzBuzz');
	}
	else if(x % 3 === 0)
	{
		console.log('Fizz');
	}
	else if(x % 5 === 0)
	{
		console.log('Buzz');
	}
	else
	{
		console.log(x);
	}
	x++;
}
   // init the counter, condition, increment/update
for(var x = 0; x <= 100; x++)
{
	// Is x a multiple of 3?
	if(x % 3 === 0 && x % 5 === 0)
	{
		console.log('FizzBuzz');
	}
	else if(x % 3 === 0)
	{
		console.log('Fizz');
	}
	else if(x % 5 === 0)
	{
		console.log('Buzz');
	}
	else
	{
		console.log(x);
	}
}

var a = 0;
var b = 5;

while(a != b)
{
	a = prompt('Guess a number');
}
