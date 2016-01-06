$("a").css('color', 'green');


$("a").html("Google");
// console.log(linkText);
// alert(linkText);

// var linkHref = $("a").attr("href");
// alert(linkHref);

$("a").attr("href", "http://google.com");

var p = $('<p>Hello!</p>');
p.addClass('special');
p.css('color', 'green');

$("body").append(p);

/////////

$("body").append("<p>Paragraph 2</p>");
