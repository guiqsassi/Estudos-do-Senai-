//criar variaveis
let resposta1, resposta2, resposta3, pontos 
pontos = 0
        
        //Boas vindas ao usuário + explicação
    alert("                                     Bem vindo ao quiz!!!!\n \nCada resposta tera sua pontuação especifica e será somada no fim do jogo, para responder basta digitar a letra correspondente a alternativa selecionada")
      
            //Primeira pergunta do quiz + fazer com que a reposta possa ser dada tanto em letra maiscula quanto minuscula
        resposta1 = prompt("1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA) Van Hellsing\nB) Castlevania\nC) The Vampire Diaries\nD) Blade: the series")
            resposta1 = resposta1.toUpperCase()

        //soma de pontos baseada na resposta escolhida pelo usuário + caso seja digitada uma resposta que não esteja na alternativa aparecer uma mensagem notificando que não terá pontuação para essa pergunta
    switch(resposta1){
        case "A":
            pontos = pontos + 3
            break
        case "B":
            pontos = pontos + 3
            break
        case "C":
            pontos = pontos + 2
            break
        case "D":
            pontos = pontos + 1
            break
        default:    
            alert("você não escolheu nenhuma das opções, portanto esta pergunta não lhe rendera pontos")
            break
    }
            //Segunda pergunta do quiz + fazer com que a reposta possa ser dada tanto em letra maiscula quanto minuscula
        resposta2 = prompt("2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA) Alice no País das Maravilhas\nB) O Hobbit\nC) A Fantástica Fábrica de Chocolates\nD) Coraline")
            resposta2 = resposta2.toUpperCase()
          
         //soma de pontos baseada na resposta escolhida pelo usuário + caso seja digitada uma resposta que não esteja na alternativa aparecer uma mensagem notificando que não terá pontuação para essa pergunta
        switch(resposta2){
            case "A":
                pontos = pontos + 3
                break
            case "B":
                pontos = pontos + 2
                break
            case "C":
                pontos = pontos + 3
                break
            case "D":
                pontos = pontos + 2
                break
            default:
                alert("você não escolheu nenhuma das opções, portanto esta pergunta não lhe rendera pontos")
                break   
            }
            //terceira pergunta do quiz + fazer com que a reposta possa ser dada tanto em letra maiscula quanto minuscula
        resposta3 = prompt("3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros")
            resposta3 = resposta3.toUpperCase()
         
         //soma de pontos baseada na resposta escolhida pelo usuário + caso seja digitada uma resposta que não esteja na alternativa aparecer uma mensagem notificandoque não terá pontuação para essa pergunta
        switch(resposta3){
            case "A":
                pontos = pontos + 3
                break
            case "B":
                pontos = pontos + 2
                break
            case "C":
                pontos = pontos + 2
                break
            case "D":
                pontos = pontos + 4
                break
            default:
                alert("você não escolheu nenhuma das opções, portanto esta pergunta não lhe rendera pontos")}

            //Mostrar a tela do resultado
        switch(true){
            case pontos >= 10: 
                alert("Parabéns, você obteve a pontuação máxima!!! (10 pontos)")
                break
            default: 
                alert(`Você não obteve a pontuação máxima, sua pontuação foi de ${pontos} pontos`)
                break
        }
        //agradecer ao jogador
        alert("Muito obrigado por jogar !!!!")