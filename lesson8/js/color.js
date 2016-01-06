function red()
{
	$('body').css('background', 'red');
}

function orange()
{
	$('body').css('background', 'orange');
}

function yellow()
{
	$('body').css('background', 'yellow');
}

/////

function addItem()
{
	// Get item from text box
	var item = $("#item").val();

	// Add new li to "todo"
	$("#todo").append("<li>" + item + "</li>");

	// or add it in two steps
	// var li = $("<li>");
	// li.append(item);
	// $("#todo").append(li);
}