/**
 * changes the text to all caps when clicked
 **/
function clickEvent() {
	var string = document.getElementById("p1").innerHTML;
	var newString = string.toUpperCase(string);
	document.getElementById("p1").innerText=newString;
}

/**
 * opens the FindAndReplace <div>
 **/
function openFindAndReplace() {
	document.getElementById("FindAndReplace").style.display = "block";
}

/**
 * closes the FindAndReplace <div>
 **/
function closeFindAndReplace() {
	document.getElementById("FindAndReplace").style.display = "none";
}

/**
 * function to find a word in a string from the "find" text box
 * and replace it with the string in the "replace" text box
 **/
function findAndReplace() {

	// get input from the document
	var string = document.getElementById("p2").innerHTML;
	var findWord = document.getElementById("find").value;
	var replaceWord = document.getElementById("replace").value;

	// setup the regular expression and execute the replacement
	var regExpInput = new RegExp(findWord, "g");
	newString = string.replace(regExpInput, replaceWord );

	// put the newString back into p2
	document.getElementById("p2").innerHTML = newString;
}