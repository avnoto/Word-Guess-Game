var answer = "";
const maxWrong = 6;
var mistakes = 0;
var guessed = [];
var wordStatus = null;
var gameOver = false;

var wordBank = ["baratheon", "stark", "targaryen", "cersei", "tormund", "melisandre", "dragonstone"];



window.onload = function() {
    document.addEventListener('keydown', function(event) { 
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            let letter = String.fromCharCode(event.keyCode).toLowerCase();
            if (guessed.indexOf(letter) === -1) userGuess(letter);
        }
    });
    createLetters();
    intro();
  }
  


function intro() {
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
    document.getElementById("instructionsPage").style.display = "block";
    document.getElementById("gamePage").style.display = "none";
    }

function backToMain() {
    document.getElementById("instructionsPage").style.display = "none";
    document.getElementById("welcomePage").style.display = "block";
    document.getElementById("gamePage").style.display = "none";

}

function startGame() {
    showLetters();
    mistakes = 0;
    guessed = [];
    wordStatus = null;
    gameOver = false;
    updateMistakes();
    document.getElementById("winLose").style.display = "none";
    document.getElementById("instructionsPage").style.display = "none";
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
    document.getElementById("maxWrong").innerHTML = maxWrong;

            
    randomWord();
    guessedWord();

}

function randomWord() {
    answer = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
}

function updateMistakes() {
    document.getElementById("mistakes").innerHTML = mistakes;
}


function guessedWord() {
    wordStatus = answer.split("").map(letter => letter == " " ? "&nbsp;" : (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join("");
    document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function userGuess(rawChosenLetter) {
    if (gameOver) return;
    if (!rawChosenLetter) return;
    let chosenLetter = rawChosenLetter.toLowerCase();
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter): null;
    document.getElementById(chosenLetter).style.visibility = "hidden";
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
        let winLose = document.getElementById("winLose");
        winLose.style.display = "block";
        winLose.innerHTML = "You Win!";
        gameOver = true;
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        let winLose = document.getElementById("winLose");
        winLose.style.display = "block";
        winLose.innerHTML = "You Lost!";
        gameOver = true;
    }
}

function createLetters() {  
    for (i = 0; i < 26; i++) {    
        let letter = (i + 10).toString(36);    
        let letterBank = document.getElementById('letterBank')    
        let newDiv = document.createElement("div");    
        newDiv.innerHTML = letter.toUpperCase(); 
        newDiv.id = letter;   
        newDiv.addEventListener("click", () => { userGuess(letter) }, false);
        letterBank.appendChild(newDiv);

    }
}

function showLetters() {  
    for (i = 0; i < 26; i++) {    
        let letter = (i + 10).toString(36); 
        document.getElementById(letter).style.visibility = "visible";
    }
}

