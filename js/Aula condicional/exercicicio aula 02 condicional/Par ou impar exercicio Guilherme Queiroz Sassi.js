//criar variavies
let number, divisao
    // perguntar o número para o usuario
    number = Number(prompt("qual o número?"))
    //dividir o número por 2, para verificar se tem casa após a virgula
    divisao = number/2

    //se ele for um numero inteiro, é par, caso não é impar
    if(Number.isInteger(divisao)){
        alert("é par")
    }
    else{
        alert("é impar")
    }
    