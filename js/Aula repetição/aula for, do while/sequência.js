//criar variaveis
let sequencia, numero
//atribuir valores as variaveis
sequencia = 11
numero = 0

    alert("digite uma sequência de 10 até 1, de forma invertida!")
    //estrutura de repetição para perguntar os números e checar
    while(sequencia > 1){
        numero = prompt("qual seu número")
        sequencia = sequencia - 1
        if(numero != sequencia){
            alert("vc errou")
            break
        }
        else if(sequencia == "1"){
            alert("Você conseguiu parabéns!!")
        }
    }
  