var squareObject = {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    getHeight: function(){
        return this.height;
    },
    getWidth: function(){
        return this.width;
    },
    getBackground: function(){
        return this.backgroundColor;
    }
}

//Noklusējuma vērtību ielādē no objekta
var square = document.querySelector('.square')
square.style.height = squareObject.getHeight() + "px";
square.style.width = squareObject.getWidth() + "px";
square.style.background = squareObject.getBackground();

//Vērtību ielasīšana no dokumenta
var squareHeight = document.querySelector('.input-height');
var buttonHeight = document.querySelector('#hightButton');
var squareWidth = document.querySelector('.input-width');
var buttonWidth = document.querySelector('#widthButton');
var squareColor = document.querySelector('.input-color');
var buttonColor = document.querySelector('#colorButton');

//Kastītes garuma maiņa
buttonHeight.addEventListener('click', changeHeight);
function changeHeight(){
    var inputValue = squareHeight.value;
    if(inputValue != ""){
        square.style.height = inputValue + "px";
    }else{
        alert("ievadiet augstumu!")
    }  
}

//Kastītes platuma maiņa
buttonWidth.addEventListener('click', changeWidth);
function changeWidth(){
    var inputValue = squareWidth.value;
    if(inputValue != ""){
        square.style.width = inputValue + "px";
    }else{
        alert("ievadiet platumu!")
    }  
}

//Kastītes krāsas maiņa
buttonColor.addEventListener('click', changeColor);
function changeColor(){
    var inputValue = squareColor.value;
    console.log(inputValue)
    if(inputValue != ""){
        square.style.background = inputValue;
    }else{
        alert("ievadiet krāsu!")
    }  
}

