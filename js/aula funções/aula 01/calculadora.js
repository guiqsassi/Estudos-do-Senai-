    //criar variaveis
    let number1, number2, operacao, resultado

    //perguntar ao usuário sobre os números e a operação para o calculo
    number1 = Number(prompt("qual primeiro número?"))
    number2 = Number(prompt("qual o segundo número"))
    operacao = prompt("qual operador lógico vc deseja \n 1 = soma \n 2 = subtração \n 3 = divisão \n 4 = multiplicação")

    //realizar a operação que foi escolhida
    if (operacao == "1"){
        Soma()
    }
    if(operacao == "2"){
        subtracao()
    }
    if(operacao == "3"){
        divisao()
    }
    if(operacao == "4"){
        multiplicacao
    }


    //funções criadas para relizar as contas e mostrar o resultado
    function Soma(){
       resultado = number1 + number2
       if(Number.isInteger(resultado)){
        alert(`O resultado foi: ${resultado}`)}
        else{
            alert(`O resultado foi: ${resultado.toFixed(2)}`)
        }
    }

    function subtracao(){
        resultado = number1 - number2
        if(Number.isInteger(resultado)){
            alert(`O resultado foi: ${resultado}`)}
            else{
                alert(`O resultado foi: ${resultado.toFixed(2)}`)
            }
     }

     function divisao(){
        resultado = number1 / number2
        if(Number.isInteger(resultado)){
            alert(`O resultado foi: ${resultado}`)}
            else{
                alert(`O resultado foi: ${resultado.toFixed(2)}`)
            }
     }

     function multiplicacao(){
        resultado = number1 * number2
        if(Number.isInteger(resultado)){
            alert(`O resultado foi: ${resultado}`)}
            else{
                alert(`O resultado foi: ${resultado.toFixed(2)}`)
            }
     }

     