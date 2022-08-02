//4) Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.
let numero, menor, maior
numero = 1
menor = 50
maior = 0

    alert("Digite 10 númeors entre 0 e 50")
    for(i = 0; i < 10; i++){
        numero = Number(prompt(`Digite o número ${i +1}`))

    if(numero >= 0 && numero <= 50){
        if (numero > maior){
            maior = numero
        }
        
        else if(numero < menor){
            menor = numero
        }
    }
    }

alert(`O maior número digitador foi: ${maior} \nO menor número digitado foi ${menor}`)