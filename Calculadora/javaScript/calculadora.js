const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const result = document.getElementById("result");

let total = 0;

function soma(){
    
    
    result.textContent = numberOne.value + numberTwo.value;
}

function sub(){
    
    
    result.textContent = numberOne.value - numberTwo.value;
}

function div(){
    
    
    result.textContent = numberOne.value / numberTwo.value;
}

function mult(){
    
    
    result.textContent = numberOne.value * numberTwo.value;
}