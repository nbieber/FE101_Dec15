function greaterNum(num1, num2)
{
	if(num1 <= num2)
	{
		return num2;	
	}
	else
	{
		return num1;
	}
}

greaterNum(5, 3);

function helloWorld(lang)
{
	if(lang === "es")
	{
		return "Hola, Mundo";
	}
	else if(lang === "de")
	{
		return "Hallo welt";
	}
	else if(lang === "fr")
	{
		return "Bonjour tout le monde";
	}
	else
	{
		return "Hello World";
	}
}

helloWorld("en");
helloWorld("de");
helloWorld("fr");

if(score >= 90 && score <= 100)


//DO NOT DO THIS!!!! if(100 >= score >= 90)




function assignGrade(score)
{
	if(score >= 95)
	{
		return "A+";
	}
	else if(score >= 90)
	{
		return "A";
	}
	else if(score >= 80)
	{
		return "B";
	}
	else if(score >= 70)
	{
		return "C";
	}
	else if(score >= 60)
	{
		return "D";
	}
	else
	{
		return "F";
	}
}

assignGrade(100);


var plurals = {
	octopus: "octopi",
	people: "person",
	moose: "moose"
}



function pluralize(noun, number)
{
	if (noun === "octopus")
	{
		if(number !== 1)
		{
			return number + " octopi";
		}
		else
		{
			return number + " octopus";
		}
	}
	else if(noun === "person")
	{
		if(number !== 1)
		{
			return number + " people";
		}
		else
		{
			return number + " person";
		}
	}
	else if(number !== 1 && noun !== "moose")
	{
		return number + " " + noun + "s";
	}
	else
	{
		return number + " " + noun;
	}
}

pluralize
