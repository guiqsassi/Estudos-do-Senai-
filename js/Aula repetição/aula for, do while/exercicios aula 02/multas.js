let multas, pontos,valor, somaValor, somaPontos
multa = 0
pontos = 0
valor = 0
somaValor = 0
somaPontos = 0

    multas = Number(prompt("quantas multas vc deseja colocar?"))

for(i=0; i < multas; i++){
    valor = Number(prompt(`Qual o valor da multa ${i+1}`))
    pontos = Number(prompt(`Quantos pontos serão perdidos com a multa ${i+1}`))

somaValor = valor + somaValor
somaPontos = pontos + somaPontos
}

if(somaPontos >= 21){
    alert(`Você está irregular e terá de pagar R$: ${somaValor} em multas`)
}
 else if(somaValor == 0){                                                                           
    alert(`Você está regular, e não terá de pagar multas`)
}
else{
    alert(`Você está regular, porém terá de pagar R$: ${somaValor} em multas`)
}   
