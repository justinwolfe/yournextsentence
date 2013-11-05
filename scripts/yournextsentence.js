// your next sentence - justin wolfe, 9/13
// a web app to help you write your next sentence
// runtime/functions

$(document).ready(function() {
	loadLS();
	getChoices();
	addEventListeners();
	updateAllStats();
});

function addEventListeners(){
	$("#title").click(function(){
		getChoices();
	});
	$(document).keydown(function(event){
		var keyPressed = event.keyCode;
		if (keyPressed == 32){
			getChoices();
		};
	});
	$("#settingsIcon").click(function(){
		goToSettings();
	});
	$("#aboutButton").click(function(){
		goToAbout();
	});
	$("#back").click(function(){
		if (settingsMenu.currentState == "does"){
			$("#doesMenu").hide();
			$("#isMenu").show();
			$("#menuLabel").text("3. is");
			settingsMenu.currentState = "is";
		} else if (settingsMenu.currentState == "contains"){
			$("#containsMenu").hide();
			$("#doesMenu").show();
			$("#menuLabel").text("1. does");
			settingsMenu.currentState = "does";
		} else if (settingsMenu.currentState == "is"){
			$("#isMenu").hide();
			$("#containsMenu").show();
			$("#menuLabel").text("2. contains");
			settingsMenu.currentState = "contains";
		};
	});
	$("#forward").click(function(){
		if (settingsMenu.currentState == "does"){
			$("#doesMenu").hide();
			$("#containsMenu").show();
			$("#menuLabel").text("2. contains");
			settingsMenu.currentState = "contains";
		} else if (settingsMenu.currentState == "contains"){
			$("#containsMenu").hide();
			$("#isMenu").show();
			$("#menuLabel").text("3. is");
			settingsMenu.currentState = "is";
		} else if (settingsMenu.currentState == "is"){
			$("#isMenu").hide();
			$("#doesMenu").show();
			$("#menuLabel").text("1. does");
			settingsMenu.currentState = "does";
		};
	});
	$(".subtract").click(function(){
		var classList = $(this).attr('class').split(/\s+/);
		var category = classList[0]
		var parameter = classList[1]
		if (weights[category].remaining <= 95){
			if (weights[category][parameter] >= 5){
				weights[category][parameter] = weights[category][parameter] - 5;
				weights[category].remaining = weights[category].remaining + 5;
			};
		} else {
		};
		updateStats(category);
	});
	$(".add").click(function(){
		var classList = $(this).attr('class').split(/\s+/);
		var category = classList[0]
		var parameter = classList[1]
		if (weights[category].remaining >= 5){
			if (weights[category][parameter] <= 95){
				weights[category][parameter] = weights[category][parameter] + 5;
				weights[category].remaining = weights[category].remaining - 5;
			};
		} else {
		};
		updateStats(category);
	});
};

function getChoice(inputArray){
	var weightedArray = new Array();
	var doesChoice = "";
	var containsChoice = "";
	var isChoice = "";
	for (var i = 0; i < inputArray.weight.length; i++) {
        var multiplier = inputArray.weight[i];
        for (var j = 0; j < multiplier; j++) {
            weightedArray.push(inputArray.type[i]);
        };
	};
	var random = Math.floor(Math.random()*100);
	var choice = weightedArray[random]
	if (inputArray.name == "sentenceIs"){
		settingsMenu.currentIs = choice;
	} else if (inputArray.name == "sentenceDoes" || inputArray.name == "sentenceContains"){
		var subChoice = inputArray[choice][Math.floor(Math.random() * inputArray[choice].length)];
		if (inputArray.name == "sentenceDoes"){
			settingsMenu.currentDoes = subChoice;
		} else {
			settingsMenu.currentContains = subChoice;
		};
	};
};

function getChoices(){
	getChoice(sentenceDoes);
	getChoice(sentenceContains);
	getChoice(sentenceIs);
	if (settingsMenu.specialMoves = true){
		specialMove();
	};
	printChoices();
};

function printChoices(){
	$("#doesInner").text(settingsMenu.currentDoes);
	$("#containsInner").text(settingsMenu.currentContains);
	$("#isInner").text(settingsMenu.currentIs);
};

function goToAbout(){
	if (settingsMenu.aboutDisplayed == false){
		$("#mainMenu").css('display', 'none');
		$("#aboutMenu").css('display', 'block');
		settingsMenu.aboutDisplayed = true;
	} else {
		$("#aboutMenu").css('display', 'none');
		$("#mainMenu").css('display', 'block');
		settingsMenu.aboutDisplayed = false;
	};
};

function goToSettings(){
	if (settingsMenu.displayed == false){
		$("#metaContainer").css('display', 'none');
		$("#menuContainerOuter").css('display', 'block');
		settingsMenu.displayed = true;
	} else {
		$("#menuContainerOuter").css('display', 'none');
		$("#metaContainer").css('display', 'block');
		settingsMenu.displayed = false;
	};
};

function updateStats(category){
	var transferArray = [];
	for (var i in weights[category]){
		transferArray.push(weights[category][i]);
		var jLabel = "." + i + "." + "counter";
		var remainingLabel = "." + category + "." + "remaining";
		$(jLabel).text(weights[category][i]);
		if (weights[category][i] == "5"){
			$(jLabel).text("05");
		};
		if (weights[category][i] == "0"){
			$(jLabel).text("00");
		};
		$(remainingLabel).text(weights[category].remaining);
		if (weights[category].remaining > 0){
			$(remainingLabel).css("color", "#A32121");
		} else {
			$(remainingLabel).css("color", "#2B2B2B");
		};
	};
	if (category == "does"){
		sentenceDoes.weight = transferArray.slice(0, 10);
	} else if (category == "contains"){
		sentenceContains.weight = transferArray.slice(0, 10);
	} else if (category == "is"){
		sentenceIs.weight = transferArray.slice(0, 5);
	};
	saveLS();
};

function updateAllStats(){
	updateStats("does");
	updateStats("contains");
	updateStats("is");
};

function specialMove(){
	var randomDoes = specialMoves.specialDoes[Math.floor(Math.random() * specialMoves.specialDoes.length)];
	var randomContains = specialMoves.specialContains[Math.floor(Math.random() * specialMoves.specialContains.length)];
	var roll = Math.random(); 
	if (roll <= settingsMenu.randomPercentage){
		$("#doesInner").text(randomDoes);
	};
	roll = Math.random();
	if (roll <= settingsMenu.randomPercentage){
		$("#containsInner").text(randomContains);
	};		
};

 function loadLS(){
	if (localStorage.runYNS == "yes"){
		weights = JSON.parse(localStorage.stats);
	};
 };
 
 function saveLS(){
	if (localStorage.runYNS != "yes"){
		localStorage.runYNS = "yes";
	};
	localStorage.stats = JSON.stringify(weights);
 };


