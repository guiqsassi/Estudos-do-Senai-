let numeros = []
let teste
let dividir
let quantidade = 0
    for(i=0; i<5;i++){
        teste = Number(prompt("fala um numero meu zeca"))
        dividir = teste/2
        if(Number.isInteger(dividir)){
            
        }
        else{
            numeros.push(teste)
            quantidade++
        }
    }
        if(quantidade ==5)
            alert(`a soma dos números impares é: ${numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4]} e os numeros foram: ${numeros} `)
        else if(quantidade ==4){
            alert(`a soma dos números impares é: ${numeros[0] + numeros[1] + numeros[2] + numeros[3] } e os numeros foram: ${numeros} `)
        }
        else if(quantidade ==3){
            alert(`a soma dos números impares é: ${numeros[0] + numeros[1] + numeros[2]} e os numeros foram: ${numeros} `)
        }
        else if(quantidade ==4){
            alert(`a soma dos números impares é: ${numeros[0] + numeros[1]} e os numeros foram: ${numeros} `)
        }
        else if(quantidade ==4){
            alert(`a soma dos números impares é: ${numeros[0]} e os numeros foram: ${numeros} `)
        }