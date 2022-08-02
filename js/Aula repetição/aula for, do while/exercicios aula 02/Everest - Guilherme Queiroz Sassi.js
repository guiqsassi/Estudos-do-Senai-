//criar variáveis
let dias, altura 
dias = 0
    //estrutura de repetição para perguntar o usuário por 8 dias seu progresso com a subida 
    for(i = 0;i < 8; i++){
        dias = dias + 1
        altura = Number(prompt(`Quantos metros você conseguiu subir hj? dia: ${dias}`))
            // dar mensagem caso alcance o cume em 8 dias
            if(altura >= 5360){
                alert ("Parabéns, você chegou ao cume do monte Everest!!!! :>")
                break
            }
    }
    //dar mensagem para voltar caso não alcance 
    if(dias == 8 && altura < 5360){
        alert(`Você deve voltar, pois corre risco de ficar sem oxigênio`)
    }