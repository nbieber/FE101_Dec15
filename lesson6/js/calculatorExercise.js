function squareNumber(num1)
{
    var result = num1 * num1;
    console.log("The result of squaring " + num1 + " is " + result);
    return result;
}

squareNumber(5);

function halfNumber(num)
{
    var result = num / 2;
    console.log("Half of " + num + " is " + result);
    return result;
}

halfNumber(10);

function percentOf(num1, num2)
{
    var result = num1 / num2 * 100;
    console.log(num1 + " is " + result + "% of " + num2);
    return result;
}

percentOf(2, 10);

function areaOfCircle(radius)
{
    var result = radius * radius * Math.PI;
    console.log("The area for a circle with radius " + radius + " is " + result);
    return result;
}

areaOfCircle(5);

function megaFunction(num)
{
    var result1 = halfNumber(num);
    var result2 = squareNumber(result1);
    var result3 = areaOfCircle(result2);
    var result4 = percentOf(result3, result2);
    return result4;
}






