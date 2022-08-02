//criar variaveis
let nota1, nota2, nota3, nota4, media
//perguntar a nota para o usuario
    nota1 = Number(prompt("qual a primeira nota meu rei"))
    nota2 = Number(prompt("qual a segunda nota meu rei"))
    nota3 = Number(prompt("qual a terceira nota meu rei"))
    nota4 = Number(prompt("qual a quarta nota meu rei"))
//raelizar a operação da média
    media = ((nota1 + nota2 + nota3 + nota4) / 4)
//comparar o valor da média para dar a resposta correspondente
    if(media >= 7){ 
        alert(`parabéns, vc foi aprovado e sua nota foi: ${media.toFixed(2)}` )
    }
    else if(media >= 5 && media < 7){ 
        alert(`voçê vai ir para recuperação, sua média foi: ${media.toFixed(2)}` )
    }
    else{ 
        alert(`você foi abaixo da média \n sua nota foi: ${media.toFixed(2)}`)
    }
    