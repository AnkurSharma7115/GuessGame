const guessNum =Math.floor((Math.random()* 100) + 1);

const highBtn = document.getElementById("high-value");
const equalBtn = document.getElementById("equal-value");
const lowBtn = document.getElementById("low-value");

const gameConfig = document.querySelector(".game-config");
const gameBody = document.querySelector(".game-body");

const message = document.querySelector(".message");
const playButton = document.querySelector("#button");

function gameStatus(msg, color, playBtn, buttons) {
    gameBody.classList.remove("hidden");
    message.textContent = msg;
    message.style.color = color;
    if (playBtn === true) {
        playButton.value = "Play again";
        playButton.classList.add("play-again", "button-primary");
        playAgain();
    }
    
    if (buttons === true) {
        highBtn.disabled = true;
        equalBtn.disabled = true;
        lowBtn.disabled = true;
    }
}

function playAgain(){
    const playButton = document.querySelector(".play-again");
    playButton.addEventListener("mousedown", function () {
        window.parent.location = window.parent.location.href;
    });
}

function numberResult(outputNumber){
    if(outputNumber === "HIGH" && guessNum > 50
       || outputNumber === "EQUAL" && guessNum === 50
       || outputNumber === "LOW" && guessNum < 50){
        gameStatus(`Congratulation!! Your Guess was Correct. Number was ${guessNum}`, "green", true, true);
       }else{
        gameStatus(`You Loose!! Game over. Winning number was ${guessNum}.`, "red", true, true);
    }
}

function highNumber(){
    numberResult("HIGH");
}

function equalNumber(){
    numberResult("EQUAL");
}

function lowNumber(){
    numberResult("LOW");
}

highBtn.addEventListener("click", highNumber);
equalBtn.addEventListener("click", equalNumber);
lowBtn.addEventListener("click", lowNumber);

