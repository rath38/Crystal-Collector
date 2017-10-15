
$( document ).ready(function() {
	var winCount = 0
	var lossCount = 0
	var totalScore = 0
	var computerGuess = "";
	var rubyValue = "";
	var diamondValue = "";
	var topazValue = "";
	var emeraldValue = ""; 

	function getRandomNumber(min,max) {
        var minNumber = min; 
        var maxNumber = max; 
        var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
        return randomnumber; 
    	}   

	function makeGuess() {
		computerGuess=getRandomNumber(19,120);

	}

	function setCrystalValues() {

		rubyValue=getRandomNumber(1,12);
		diamondValue=getRandomNumber(1,12);
		topazValue=getRandomNumber(1,12);
		emeraldValue=getRandomNumber(1,12);

	}

	function resetAll() {

	makeGuess();
	setCrystalValues();
	$("#randomNumber").text(computerGuess);
	totalScore = 0;
	$("score").text(totalScore);

	}

	function checkScore() {

		if (totalScore > computerGuess) {

		lossCount++;
		$("#lose").text(lossCount);
		resetAll();

		}
		else if (totalScore==computerGuess) {

		winCount++;
		$("#wins").text(winCount);
		resetAll();

		}

		else //(totalScore < computerGuess)
		{}

		}
	

	makeGuess();
	$("#randomNumber").text(computerGuess);
	setCrystalValues();

	$("#ruby").click(function() {
	    
	totalScore += rubyValue;

	$("#score").text(totalScore);

	checkScore();

	});

	$("#diamond").click(function()  {
    
    totalScore += diamondValue;

    $("#score").text(totalScore);

    checkScore();

	});

	$("#topaz").click(function()  {
    
    totalScore += topazValue;

    $("#score").text(totalScore);

    checkScore();

	});

	$("#emerald").click(function()  {
    
	totalScore += emeraldValue;

	$("#score").text(totalScore);

	checkScore();

	});


});
