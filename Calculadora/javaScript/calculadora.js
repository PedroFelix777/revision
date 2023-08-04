const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const result = document.getElementById("result");

function soma(){
    result.textContent = parseInt(numberOne.value)  + parseInt(numberTwo.value);

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