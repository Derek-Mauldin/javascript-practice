/**
 * changes the text to all caps when clicked
 **/
function clickEvent() {
	var string = document.getElementById("p1").innerHTML;
	var newString = string.toUpperCase(string);
	document.getElementById("p1").innerText=newString;

}