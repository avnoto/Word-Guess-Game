window.onload = function() {
    createLetters();
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
    document.getElementById("maxWrong").innerHTML = maxWrong;

    document.addEventListener('keydown', function(event) { 
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userGuess(String.fromCharCode(event.keyCode));
        }
    });
            
    randomWord();
    guessedWord();
}

function randomWord() {
    answer = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
}

function updateMistakes() {
    document.getElementById("mistakes").innerHTML = mistakes;
}

var answer = "";
var maxWrong = 5;
var mistakes = 0;
var guessed = [];
var wordStatus = null;

var wordBank = ["baratheon", "stark", "targaryen"];
//var firstWord = ["Baratheon"];
//var secondWord = ["Stark"];
//var thirdWord = ["Targaryen"];

//var x = firstWord.length;
//var y = secondWord.length;
//var z = thirdWord.length;


function guessedWord() {
    wordStatus = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter : " __ ")).join("");
    document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function userGuess(rawChosenLetter) {
    if (!rawChosenLetter) return;
    let chosenLetter = rawChosenLetter.toLowerCase();
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter): null;

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        checkIfGameLost();
    }
}

function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById("win-lose").innerHTML = "You Win!";
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById("win-lose").innerHTML = "You Lost!";
    }
}

function createLetters() {  
    for (i = 0; i < 26; i++) {    
        let letter = (i + 10).toString(36);    
        let letterBank = document.getElementById('letterBank')    
        let newDiv = document.createElement("div");    
        newDiv.innerHTML = letter.toUpperCase();    
        newDiv.addEventListener("click", () => { userGuess(letter) }, false);
        letterBank.appendChild(newDiv);

    }
}


