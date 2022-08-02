let nome, idade, sexo, nacionalidade, dados

    nome = prompt("qual seu nome?")
    idade = prompt("qual sua idade?")
    nacionalidade = prompt("qual sua nacionalidade?")

function MostraDados(){
    dados = (`teu nome é ${nome}, tua idade é: ${idade} anos, tua nacionalidade é: ${nacionalidade}`)
    alert(dados)
}
MostraDados()