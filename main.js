alert("Hello world!")

alert("Vamos realizar quatro operação matemáticas a seguir")
let numberOne =  prompt("Digite o primeiro número: ")
let numberTwo =  prompt("Digite o segundo número: ")
let result = Number(numberOne) + Number(numberTwo)
alert(result)
let sub = Number(numberOne) - Number(numberTwo)
alert(sub)
let div = Number(numberOne) / Number(numberTwo)
alert(div)
let mult = Number(numberOne) * Number(numberTwo)
alert(mult)

let number = prompt("Digite um número:")
if(number % 2 === 0){
    alert("É um número par")
}else{
    alert("É um número ímpar")
}


var valor = prompt("Digite um valor booleano:");

if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
    alert("É um booleano");
} else {
    alert("Não é um booleano");
}


var valor = prompt("Digite um número:");

if (!isNaN(valor)) {
    alert("É um número");
} else {
    alert("Não é um número");
}

var valor = prompt("Digite uma frase: ")

if(typeof valor === "string" ){
    alert("É uma string")
}else{
    alert("Não é uma string")
}

