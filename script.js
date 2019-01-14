var correctSquare;
var correctColor;
var squares = document.querySelectorAll(".square");
squares.forEach(function(square){
    square.addEventListener("click", function(){
        if("rgb(" + correctColor + ")" === square.style.backgroundColor){
            console.log("correct");
        }
        else{
            console.log("false");
        }
    })
});


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

chooseCorrect();
setSquareColors();