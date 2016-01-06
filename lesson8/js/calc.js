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

////////

function percentOfFromHTML()
{
    // Grab the inputs
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();

    // Call percentOf
    var result = percentOf(num1, num2);

    // Put the answer back in the HTML
    $("#num1Copy").html(num1);
    $("#num2Copy").html(num2);
    $("#percent").html(result);
}