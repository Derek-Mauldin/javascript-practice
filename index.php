<!DOCTYPE html>
	<html lang="en">

	<head>
		<meta	charset="utf-8" />
		<title>JavaScript Assn #1</title>
		<script type="text/javascript" src="javascript/js-events.js" ></script>

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">

		<!-- customized style sheet -->
		<link rel="stylesheet" href="css/javascript-practice.css" />

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>

	</head>

	<body onload="store();">

		<header class="container-fluid">
			<h1>JavaScript Practice</h1>
		</header>

		<div class="container">
			<div class="row">

				<div class="col-md-6">

					<h2>Paragraph 1</h2>

					<p id="p1">The Deliverator belongs to an elite order, a hallowed subcategory. He ' s got esprit up to here. Right now, he is preparing to carry out his third mission of the night. His uniform is black as activated charcoal, filtering the very light out of the air. A bullet will bounce off its arachnofiber weave like a wren hitting a patio door, but excess perspiration wafts through it like a breeze through a freshly napalmed forest, Where his body has bony extremities, the suit has sintered armorgel: feels like gritty jello, protects like a stack of telephone books.</p>

					<div class="container">
						<button type="button" class="btn btn-success" id="capButton" onclick="capitalize();">Capitzilize</button>
						<button type="button" class="btn btn-warning" id="lowCaseButton" onclick="unCap();">Uncapitzilize</button>
						<button type="button" class="btn btn-info" id="restoreButton" onclick="restore();">Restore</button>
					</div>

					<p class="store" id="storeP1"></p>

				</div>


			<div class="col-md-6">
				<h2>Paragraph 2</h2>
				<p id="p2">
					When they gave him the job, they gave him a gun. The Deliverator never deals in cash, but someone might come after him anyway -- might want his car, or his cargo. The gun is tiny, acm-styled, lightweight, the kind of gun a fashion designer would carry; it fires teensy darts that fly at five times the velocity of an SR-71 spy plane, and when you get done using it, you have to plug it into the cigarette lighter, because it runs on electricity.
				</p>
				<button type="button" class="btn btn-primary" id="button" onclick="openFindAndReplace();">Find and Replace a word in the above paragraph</button>
					<div id="FindAndReplace">
						<input type="text" id="find" placeholder="Word to be replaced">
						<input type="text" id="replace" placeholder="Replace it with..." >
						<button type="button" class="btn btn-danger btn-sm" onclick="findAndReplace();">Execute</button>
						<button type="button" class="btn btn-default btn-sm" onclick="closeFindAndReplace();">Close</button>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2>Paragraph 3</h2>
					<p id="p3">
						The Deliverator never pulled that gun in anger, or in fear. He pulled it once in Gila Highlands. Some punks in Gila Highlands, a fancy Burbclave, wanted themselves a delivery, and they didn't want to pay for it. Thought they would impress the Deliverator with a baseball bat. The Deliverator took out his gun, centered its laser doohickey on that poised Louisville Slugger, fired it. The
						recoil was immense, as though the weapon had blown up in his hand. The middle third of the baseball bat turned into a column of burning sawdust accelerating in all directions like a bursting star. Punk ended up holding this bat handle with milky smoke pouring out the end. Stupid look on his face. Didn't get nothing but trouble from the Deliverator.
					</p>
				</div>
			</div>
		</div>
	</body>


</html>