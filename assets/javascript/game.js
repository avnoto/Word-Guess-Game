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
    //display: none for game page
    }

function backToMain() {
    document.getElementById("instructions-container").style.display = "none";
    document.getElementById("welcomePage").style.display = "block";
    //display: none for game  page
}

//need function for startGame

