function validateForm()
{
	//Did they input a first name?
	var firstName = document.getElementById("firstName").value;
	if(firstName === "")
	{
		alert("Please enter your first name!");
		return false;
	}


	// Did they input a last name?
	var lastName = document.getElementById("lastName").value;
	if(lastName === "")
	{
		alert("Please enter your last name!");
		return false;
	}

	// Is there a valid e-mail?
	var email = document.getElementById("email").value;
	if(email === "")
	{
		alert("Please enter an e-mail address!");
		return false;
	}
	else if(email.indexOf("@") <= 0 || email.indexOf(".") <= 0)
	{
		alert("Invalid e-mail, try again!");
		return false;
	}

	// Output to the page
	document.getElementById("firstNameOutput").innerHTML = firstName;
	document.getElementById("lastNameOutput").innerHTML = lastName;
	document.getElementById("emailOutput").innerHTML = email;

	return true;
}




