let nome1, nome2, nome3, nome4, nome5
let idade1, idade2, idade3, idade4, idade5, media

    nome1 = prompt("qual seu nome? (1)")
    nome2 = prompt("qual seu nome? (2)")
    nome3 = prompt("qual seu nome?(3)")
    nome4 = prompt("qual seu nome? (4)")
    nome5 = prompt("qual seu nome? (5)")

    idade1 = Number(prompt("qual a idade da primeira pessoa?"))
    idade2 = Number(prompt("qual a idade da segunda pessoa?"))
    idade3 = Number(prompt("qual a idade da terceira pessoa?"))
    idade4 = Number(prompt("qual a idade da quarta pessoa?"))
    idade5 = Number(prompt("qual a idade da quinta pessoa?"))

        media = (idade1 + idade2 + idade3 + idade4 + idade5 / 5)

        if( idade1 > idade2 && idade1 > idade3 && idade1 > idade4 && idade1 > idade5){
            alert(`A pessoa com maior idade é: ${nome1} que tem: ${idade1} anos \n E a média das idades dessas pessoas é: ${media.toFixed(2)}`)
        }
        else if( idade2 > idade1 && idade2 > idade3 && idade2 > idade4 && idade2 > idade5){
            alert(`A pessoa com maior idade é: ${nome2} que tem: ${idade2} anos \n E a média das idades dessas pessoas é: ${media.toFixed(2)}`)
        }
        else if( idade3 > idade2 && idade3 > idade1 && idade3 > idade4 && idade3 > idade5){
            alert(`A pessoa com maior idade é: ${nome3} que tem: ${idade3} anos \n E a média das idades dessas pessoas é: ${media.toFixed(2)}`)
        }
        else if( idade4 > idade2 && idade4 > idade3 && idade4 > idade1 && idade4 > idade5){
            alert(`A pessoa com maior idade é: ${nome4} que tem: ${idade4} anos \n E a média das idades dessas pessoas é: ${media.toFixed(2)}`)
        }
        else{
            alert(`A pessoa com maior idade é: ${nome5} que tem: ${idade5} anos \n E a média das idades dessas pessoas é: ${media.toFixed(2)}`)
        }
