//criar variavies
let idade, comorbidade, nome

    // perguntar informações ao usuario
    nome = prompt("qual seu nome?")
    idade = Number(prompt ("quantos anos vc tem?"))
    comorbidade = prompt("você tem alguma comorbidade? (S ou N)")
        // Fazer com que a comorbidade sempre seja igual, mesmo com letra maiscula e minuscula
        comorbidade = comorbidade.toLocaleLowerCase()

if(idade >= 60 || comorbidade == "s"){
    alert(`Você pode se vacinar!! ${nome} parabéns!!`)
}
else{ 
    alert(`Você não pode se vacinar ${nome} sinto muito `)
}