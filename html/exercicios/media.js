let nota1 
nota1 = document.getElementById("nota1")

let nota2 
nota2 = document.getElementById("nota2")

let nota3 
nota3 = document.getElementById("nota3")

let nota4 
nota4 = document.getElementById("nota4")

let media 

function mostrarMedia(){ 
    media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value) + Number(nota4.value) ) / 4 
        if(media >= 7){
            alert(`Parabéns vc tirou uma nota acima da média ${media}`)
        }
        else if(media < 7 && media >= 5){
            alert(`Infelizmente vc ficou de exame, sua média foi ${media}`)
        }
        else{
            alert(`Vc foi reprovado, sua média ${media}`)
        }
}

