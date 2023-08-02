//Crindo variaveis



// let nome = "Pedro Felix";  //LET É UMA VARIAVEL QUE PODE MUDAR O VALOR ATRIBUIDO
let idade = 45;
let idadeEsposa = "45";
const anoNascimento = 2006; //CONST É USADO QUANDO O VALOR DA VARIAVEL É CONSTANTE E NAO IRA MUDAR

//ESTRUTURA DE REPETIÇÃO

/*  if(idade === idadeEsposa){ //QUANDO É USADO OS DADOS, É COMPARADO SE O CONTEUDO É IGUAL, COM TRES IGUAIS, É COMPARADO O CONTEUDO E O TIPO

    alert("Igual...")

}else {
    alert("Cada um no seu quadrado")
} */


const titulo = document.getElementById("titulo"); //Assim é como selecionamos uma classe/id do HTML, dando o tipo  da cvariavel, o nome e qual a classe/id é ela
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const resultado = document.getElementById("resultado");

titulo.textContent = "Mudei o titulo" //APOS SELECIONAR A VARIAVEL ACIMA, AQUI DEFINO O QUE QUERO FAZER COM ELA
titulo.style.color = "purple"



function mostrarResultado(){ /* Função que sera feita quando o botao for clicado */

    resultado.textContent = "Nome:" + nome.value + " " + "Email:" + email.value  /* dizendo que a variavel RESULTADO sera igual valor da variavel nome e email */

}