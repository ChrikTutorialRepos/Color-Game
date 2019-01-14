var correctSquare;
var correctColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
squares.forEach(function(square){
    square.addEventListener("click", function(){
        if("rgb(" + correctColor + ")" === square.style.backgroundColor){
            messageDisplay.textContent = "CORRECT!";
            resetButton.textContent = "Play Again?";
            document.querySelector("h1").style.backgroundColor = "rgb(" + correctColor + ")";
            squares.forEach(function(square){
                square.style.backgroundColor = "rgb(" + correctColor + ")";
            })
        }
        else{
            square.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again"
        }
    })
});

resetButton.addEventListener("click", reset);

function chooseCorrect(){
    correctSquare = Math.floor(Math.random() * 6);
}

function setSquareColors(){
    for(var i = 0; i<squares.length; i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        squares[i].style.backgroundColor = "RGB(" + r + ", " + g + ", " + b + ")";
        if(correctSquare === i){
            correctColor = r + ", " + g + ", " + b;
            document.querySelector("#answer").textContent = correctColor;
        }
    }
}

function reset(){
    chooseCorrect();
    setSquareColors();
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    document.querySelector("h1").style.backgroundColor = "#232323";
}

reset();