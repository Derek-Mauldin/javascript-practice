/**
 * changes the text to all caps when clicked
 **/
function clickEvent() {
	var string = document.getElementById("p1").innerHTML;
	var newString = string.toUpperCase(string);
	document.getElementById("p1").innerText=newString;
}

function popUp() {
	document.getElementById("FindAndReplace").style.display = "block";
}

function closeFindAndReplace() {
	document.getElementById("FindAndReplace").style.display = "none";
}