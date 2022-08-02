//criar variaveis
let nome, populacao
//perguntar informações ao usuários
    nome = prompt("qual o nome da espécie?")
    populacao = Number(prompt(`quantos animais restão dessa espécie? (${nome})`))
//dar a resposta correspondente a informação
if(populacao >= 200 && populacao <= 500){
    alert(`os ${nome} estão criticamente em perigo (espécie criticamente em perigo)`)
}
 else if(populacao > 500 && populacao <= 1000){
    alert(`os ${nome} estão em perigo (espécie em perigo)`)
} 
else{
    alert(`os ${nome} estão vulneráveis`)
}