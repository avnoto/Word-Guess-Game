window.onload = function() {
    window.setTimeout(intro, 3000);
  }
  
function fadeout() {
    document.getElementById('fadeout').style.opacity = '0'; 
  }


function intro() {
    fadeout();
    window.setTimeout(fadein, 1000);
}

function fadein(){
    document.getElementById('welcome-container').style.opacity = '100';

}









let playButton = document.getElementById('play-btn');
playButton.addEventListener('click', startGame);

function startGame() {
playButton.classList.add('hide');

}

function instructions() {


}

function backToMain() {



}