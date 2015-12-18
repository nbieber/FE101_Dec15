var shoppingList = "corgi";

function addItem(item)
{
    shoppingList = shoppingList + ", " + item;
}

function numItems(list)
{
    return list.length;
}


function getGenre(song)
{
    if(song === "Song 1" ||
       song === "Song 2" ||
       song === "Song 3")
       {
           return "classical";
       }
    else if(song === "Song 4" ||
       song === "Song 5")
       {
           return "hip hop";
       }
    else if(song === "Song 6" ||
       song === "Song 7")
       {
           return "rock";
       }
}

var genre = getGenre("Song 1");
console.log("The genre of Song 1 is " + genre);

addItem("BB8 robot");
addItem("macbook");
addItem("markers");
console.log(shoppingList);