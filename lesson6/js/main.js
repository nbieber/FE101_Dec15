var counter = 0;

function increaseCounter()
{
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
}

function decreaseCounter()
{
    counter = counter - 1;
    document.getElementById("counter").innerHTML = counter;
}

function squareNum()
{
    var userNum = document.getElementById("num").value;
    document.getElementById("squareOutput").innerHTML = userNum * userNum;
}

function changeColor()
{
    document.getElementsByTagName("body")[0].style.backgroundColor = 'red';
}