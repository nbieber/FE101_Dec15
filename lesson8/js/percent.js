function squareNumber(num) {
    var squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}

function halfOf(num) {
    var half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
}

function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

function areaOfCircle(radius) {
    var area = Math.PI * squareNumber(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;
}

function doCrazyStuff(num) {
    var half    = halfOf(num);
    var squared = squareNumber(half);
    var area    = areaOfCircle(squared);
    var result  = percentOf(squared, area);
    return result;
}

//////

function percentOfFromHTML()
{
	// Grab the inputs from the text box
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;

	// Call percentOf
	var result = percentOf(num1, num2);

	// Put the output in the HTML
	document.getElementById('num1Copy').innerHTML = num1;
	document.getElementById('num2Copy').innerHTML = num2;
	document.getElementById('percent').innerHTML = result;
}

function doCrazyStuffFromHTML()
{
	// Grab the inputs from the text box
	var num = document.getElementById('num').value;

	// Call the mega function
	var result = doCrazyStuff(num);

	// Put the output in the HTML
	document.getElementById('crazyOutput').innerHTML = result;
}