/**
 * on load store the contents of p1
 **/
function store () {

	document.getElementById("storeP1").innerHTML = document.getElementById("p1").innerHTML;

}


/**
 * changes the text to all caps
 **/
function capitalize() {

	// get stored string
	var string = document.getElementById("storeP1").innerHTML;

	//capitalize string and display it back in p1
	var newString = string.toUpperCase(string);
	document.getElementById("p1").innerText = newString;

	// remove capitalize button and display uncapitalized and restore buttons
	document.getElementById("capButton").style.display = "none";
	document.getElementById("lowCaseButton").style.display = "inline-block";
	document.getElementById("restoreButton").style.display = "inline-block";
}

/**
 * change the text to all lowercase
 **/
function unCap() {
	// get stored string
	var string = document.getElementById("storeP1").innerHTML;

	//set sting to lowercase and display it back in p1
	var newString = string.toLowerCase(string);
	document.getElementById("p1").innerText = newString;

	// remove Uncapitalize button and display Capitalize and Restore buttons
	document.getElementById("lowCaseButton").style.display = "none";
	document.getElementById("restoreButton").style.display = "inline-block";
	document.getElementById("capButton").style.display = "inline-block";

}

function restore() {

	// get stored string and put in back in p1
	var string = document.getElementById("storeP1").innerHTML;
	document.getElementById("p1").innerHTML = string;

	// remove restore button and display Uncapitalize and Capitalize buttons
	document.getElementById("restoreButton").style.display = "none";
	document.getElementById("lowCaseButton").style.display = "inline-block";
	document.getElementById("capButton").style.display = "inline-block";

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

	// clean up user input
	findWord = findWord.trim();
	replaceWord = replaceWord.trim();

	// capitalize the replacement word and make it bold
	 var replaceWordCap = replaceWord.toUpperCase(replaceWord);
	replaceWordCap = "<b>" + replaceWordCap + "</b>";

	// setup the regular expression and execute the replacement
	var regExpInput = new RegExp("\\b"+findWord+"\\b", "gi");
	var newString = string.replace(regExpInput, replaceWordCap );

	// put the newString back into p2
	document.getElementById("p2").innerHTML = newString;
}
