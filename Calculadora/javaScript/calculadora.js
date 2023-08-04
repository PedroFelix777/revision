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

/* Maneira de usar o if para poupar e facilitar código, sendo if  ou switch case */
/* Assim, após o onclick devemos colocar o nome da function entre aspas (no caso calculo, e dentro do parenteses e aspas simples devemos por o nome dos parametros) */

/* function calculo (parametros){

    if ( parametros === 'somar'){
        result.textContent = parseInt(numberOne.value)  + parseInt(numberTwo.value);

    }else if( parametros === 'sub'){
        result.textContent = numberOne.value - numberTwo.value;

    } else if ( parametros === div ){
        result.textContent = numberOne.value / numberTwo.value;

    } else if ( parametros === mult ){
        result.textContent = numberOne.value * numberTwo.value;

}
} */

/* A função eval verifica se podem ser executadas as ações que form passadas */