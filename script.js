var correctSquare;
var correctColor;
var hardMode = true;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var h1 = document.querySelector("h1");

function init(){
    squares.forEach(function(square){
        square.addEventListener("click", checkSquare);
    });

    resetButton.addEventListener("click", reset);
    easyButton.addEventListener("click", changeMode);
    hardButton.addEventListener("click", changeMode);
    reset();
}

function chooseCorrect(){
    if(hardMode){
        correctSquare = Math.floor(Math.random() * 6);
    }
    else{
        correctSquare = Math.floor(Math.random() * 3);
    }
}

function checkSquare(){
    if(correctColor === this.style.backgroundColor){
        messageDisplay.textContent = "CORRECT!";
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = correctColor;
        squares.forEach(function(square){
            square.style.backgroundColor = correctColor;
        });
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again"
    }
}

function setSquareColors(){
    for(var i = 0; i<squares.length; i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        squares[i].style.backgroundColor = "RGB(" + r + ", " + g + ", " + b + ")";
        if(correctSquare === i){
            correctColor = "rgb(" + r + ", " + g + ", " + b  + ")";
            document.querySelector("#answer").textContent = correctColor;
        }
    }
}

function changeMode(){
    easyButton.classList.remove("selected");
    hardButton.classList.remove("selected");
    this.classList.add("selected");
    if("EASY" === this.textContent && hardMode){
        hardMode = !hardMode;
        squares.forEach(function(square){
            square.style.backgroundColor = "#232323";
        });
        squares = document.querySelectorAll(".easySquare");
        reset();
    }
    else if("HARD" === this.textContent && !hardMode){
        hardMode = !hardMode;
        squares = document.querySelectorAll(".square");
        reset();
    }
}

function reset(){
    chooseCorrect();
    setSquareColors();
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    document.querySelector("h1").style.backgroundColor = "steelblue";
}

init();