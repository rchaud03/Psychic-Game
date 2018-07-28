//var letterArray = ["q", "w", "e"]
var letterArray = ["a", "b", "c", "d", "e","f", "g", "h", "i","j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w","x", "z"];
var letterIndex = Math.floor(Math.random()*letterArray.length);
var guessLetter = letterArray[letterIndex];
var remaining = 9;
var wins = 0;
var losses= 0;

    
    function randomLetter () {
        letterIndex = Math.floor(Math.random()*letterArray.length);
        guessLetter = letterArray[letterIndex];
        console.log(guessLetter);
    }


    // var isLetter = function () {
        
    // }

    // alerts when there is a MATCH
    var winAlert = function () {
        alert("Your guess was CORRECT!!!");
    }
    // deducts from remaining attempts
    var deductPoint = function () {
        remaining --;
        console.log
    }

    // adds to loss column
    var addLoss = function () {
        losses++;
    }

    // adds to win column
    var addWin = function () {
        wins++;
    }

    var resetRemaining = function () {
        remaining = 9;
    }

    var resetRecord = function () {
        losses = 0;
        wins=0;
        chosenText.innerHTML = "";
    }

    var resetLetters = function () {
        chosenText.innerHTML = "";
    }

    var lossAlert = function () {
        alert("10 consecutive incorrect guesses. You LOST!!!");
        alert("The random letter was " + guessLetter);
    }
    //var checkInput = function () {
    //     if (inputLetter.indexOf(letterArray) >= 0) {
    //         alert("Please user keys for letters a-z only!");


    //     }
    // } 

     //   checkInput(inputLetter);

    function matchingLetter (inputLetter) {            ///rchaud replaced () with (inputLetter)
        if (inputLetter === guessLetter) {
            console.log("You matched our guess");
            addWin();
            resetRemaining();
            resetLetters();
            winAlert();
            randomLetter();
        }


        else if (remaining > 1) {
        console.log("The else rule kicked in so NO MATCH!");
        deductPoint();
        chosenText.innerHTML += " " + inputLetter + " ";          ///rchaud entire line added here you need a way to update the HTML element.

        }

        else {
        addLoss();
        lossAlert();
        console.log("The else rule kicked in so NO MATCH!");
        //addLoss();
        deductPoint();
        randomLetter();
        resetLetters();
        resetRemaining();
        }
    }

    document.onkeyup = function(event) {
        var inputLetter = event.key.toLowerCase();

        matchingLetter(inputLetter);      /// rchaud - replaced () with (inputLetter) Passing argument into the function.  Effectively the same thing.
        console.log("You typed the letter "+ inputLetter);
        console.log("Our guess was " + guessLetter);


        document.querySelector("#winCount").innerHTML= wins; //writes wins count to HTML
        document.querySelector("#lossCount").innerHTML= losses; //writes losses count to HTML
        document.querySelector("#remainingCount").innerHTML= remaining; //writes to html when guess is wrong
    }