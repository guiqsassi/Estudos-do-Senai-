//criar variaveis
let plastico, papel, metal, contaplastico, contapapel, contametal, total

    //perguntar ao usuario sobre a quantidade de materias a ser reciclada
    plastico = Number(prompt("quantos kilos de plástico você deseja entregar? (kg)"))
    papel = Number(prompt("quantos kilos de papel você deseja entregar? (kg)"))
    metal = Number(prompt("quantos kilos de metal você deseja entregar? (kg)"))

    //realização das contas para informar o valor dos produtos de acordo com a sua quantidade
contaplastico = ((plastico / 10) * 2)
contapapel = ((papel / 30) *3 )
contametal = ((metal / 50 ) * 3)
    //soma de valor de todos os materiais 
    total = (contametal + contapapel + contaplastico)
//mostrar o resultado para o usuario
alert(`o valor total recebido pelos materiais recliados será de: R$ ${total.toFixed(2)}.`)
