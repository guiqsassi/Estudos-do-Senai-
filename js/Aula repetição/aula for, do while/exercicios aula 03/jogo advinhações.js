let numeros, secreto, 



    while (numeros != secreto) {
        numeros = Number(prompt("qual número será colocado"))
    if(numeros >= 0 && numeros <= 100){

        if(numeros < secreto){
            alert("O número secreto é um pouco menor")
        }
       else if(numeros > secreto){
            alert("O número secreto é um pouco maior")
        }
    } 
    }
      
    if(numero == secreto){
        alert("parabéns, vc achou o número secreto!")
    }

    