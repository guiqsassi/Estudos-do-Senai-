//exercicio 2
//criar variavel
let espaço, tempo, velocidade, ms

//perguntar pro usuario 
espaço = Number(prompt("quanto vc andou meu amigo? (km)"))
tempo = Number(prompt("quanto tempo tu levou pra andar isso amigo ?(horas)"))

//Contas
velocidade = espaço / tempo 
ms = velocidade / 3.6
//mostrar na tela do patrão 
alert(`boa noite meu companheiro, tua velocidade média foi ${velocidade.toFixed(2)} km/h ou ${ms.toFixed(2)} m/s`)