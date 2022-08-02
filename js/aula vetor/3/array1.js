    let preco = [], produto, produtos = []
    let quantidadeC = 0, precoAdd = 0
    let soma = 0
    let = media = 0
    let divisao = 0
        for(i=0;i<5;i++){
            produto = (prompt("Qual produto será inserido no sistema"))
            precoAdd = Number(prompt("Qual o preço do produto"))
            if(precoAdd >= 50 ){
                quantidadeC = quantidadeC + 1}

            if(precoAdd >= 50 && precoAdd <= 100){
                produtos.push(produto)
            }
            else if(precoAdd > 100){
                soma = precoAdd + soma
                    divisao++
            }
        }
media = soma / divisao



alert(`a quantidade de produtos acima dos 50 reais é: ${quantidadeC} \n os produtos entre 50 reais e 100 são: ${produtos} \n e a média dos acima de 100 é: ${media} `)