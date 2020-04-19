window.onload = function() {
    window.setTimeout(intro, 3000);
  }
  
function fadeout() {
    document.getElementById("fadeout").style.opacity = "0"; 
  }


function intro() {
    fadeout();
    window.setTimeout(logoFadeIn, 1000);
    logoFadeIn();
    window.setTimeout(fadein, 1000);
}
function logoFadeIn() {
    document.getElementById("got-logo").style.opacity = "100";
}

function fadein(){
    document.getElementById("welcomeText").style.opacity = "100";

}


function instructions() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("instructions-container").style.display = "block";
    document.getElementById("gamePage").style.display = "none";
    
    }

function backToMain() {
    document.getElementById("instructions-container").style.display = "none";
    document.getElementById("welcomePage").style.display = "block";
    document.getElementById("gamePage").style.display = "none";
}

function startGame() {
    document.getElementById("instructions-container").style.display = "none";
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
    document.getElementById("challengeWord").style.display = "block";
    document.getElementById("maxWrong").innerHTML = maxWrong;

    function guessedWord() {
        wordStatus = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter : " __ ")).join("");
        document.getElementById("wordSpotlight").innerHTML = wordStatus;
    }
    
    randomWord();
    guessedWord();

    function userGuess(chosenLetter) {
        guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter): null;
        document.getElementById(chosenLetter).setAttribute("disabled", true);
    
        if (answer.indexOf(chosenLetter) >= 0) {
            guessedWord();
        } else if (answer.indexOf(chosenLetter) === -1) {
            mistakes++;
            updateMistakes();
        }
    }

    userGuess();
}

function randomWord() {
    answer = wordBank[Math.floor(Math.random() * wordBank.length)];
}

function updateMistakes() {
    document.getElementById("mistakes").innerHTML = mistakes;
}

var answer = "";
var maxWrong = 5;
var mistakes = 0;
var guessed = [];
var wordStatus = null;

var wordBank = ["Baratheon", "Stark", "Targaryen"];
var firstWord = ["Baratheon"];
var secondWord = ["Stark"];
var thirdWord = ["Targaryen"];

var x = firstWord.length;
var y = secondWord.length;
var z = thirdWord.length;




function userGuess() {
    var target = event.target || event.srcElement;
    target.style.visibility = "hidden";
    var letter = document.getElementById(letter).getAttribute("value");
    
}








