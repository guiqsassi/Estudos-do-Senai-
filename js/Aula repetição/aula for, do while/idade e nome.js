//criar variaveis
let nome, idade, soma, media
let maioridade, maiornome
//atribuir valores as variaveis
soma = 0
maioridade = 0
    //estrutura de repetição da pergunta
    for(i = 0; i < 5; i++){
        nome = prompt(`qual seu nome? ${i + 1}`)
        idade = Number(prompt(`qual sua idade  ${i + 1}`))
        // soma de todas as idades escritas
        soma = soma + idade
        // verificar a maior idade
        if(idade > maioridade){
            maioridade = 0
            maioridade = maioridade + idade
            maiornome = nome
        }
        //fazer a média das idades
        media = soma / 5
    }
    //mensagem final
    alert(`A média de todas as idades foram:${media}, a pessoa com maior idade é:${maiornome} com ${maioridade}`)
