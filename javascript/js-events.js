/**
 * changes the text to all caps when clicked
 **/
function clickEvent() {
	var string = document.getElementById("p1").innerHTML;
	var newString = string.toUpperCase(string);
	document.getElementById("p1").innerText=newString;
}

function openFindAndReplace() {
	document.getElementById("FindAndReplace").style.display = "block";
}

function closeFindAndReplace() {
	document.getElementById("FindAndReplace").style.display = "none";
}

function findAndReplace() {
	var string = document.getElementById("p2").innerHTML;
	var findWord = document.getElementById("find").value;
	var replaceWord = document.getElementById("replace").value;

	var regExpInput = new RegExp(findWord, "g");
	newString = string.replace(regExpInput, replaceWord );

	document.getElementById("p2").innerHTML = newString;

}