let jogador1, jogador2, cartas1, cartas2, somaCartas1, somaCartas2


        alert("                                         Bem vindo!!!             \n para jogar basta dar o nome dos jogadores e escolherem números entre 0 e 13, caso contrário o jogo será reiniciado")

    jogador1 = prompt("Qual o nome do jogador 1")
    jogador2 = prompt("Qual o nome do jogador 2")

    
        for(i=0;i < 5; i++){
           
            cartas1 = Number(prompt(`Qual carta vc vai jogar?, jogador um (${i+1})`))
                if(cartas1 >= 0 && cartas1 <=13){   
                somaCartas1 = cartas1 + somaCartas1} 
                else{
                    alert("Você escolheu um número inválido")
                    reset()
                }
            cartas2 = Number(prompt(`Qual carta vc vai jogar?, jogador dois (${i+1})`))
            if(cartas2 >= 0 && cartas2 <=13){   
                somaCartas2 = cartas2 + somaCartas2} 
                else{
                    alert("Você escolheu um número inválido")
                    reset()
                }
        }


    if(somaCartas1 > somaCartas2){
      alert(`Parabéns ${jogador1}, vc foi o vitorioso e sua pontuação é de: ${somaCartas1}!!!`)  
    } 
    else if(somaCartas1 >somaCartas2){
        alert(`Parabéns ${jogador2}, vc foi o vitorioso e sua pontuação é de: ${somaCartas2}!!!`)  
      } 
    else{
        alert(`O jogo deu empate :>`)
    }


    function reset(){
        for(i=0;i < 5; i++){
           
            cartas1 = Number(prompt(`Qual carta vc vai jogar?, jogador um (${i+1})`))
                if(cartas1 >= 0 && cartas1 <=13){   
                somaCartas1 = cartas1 + somaCartas1} 
                else{
                    alert("Você escolheu um número inválido")
                    reset()
                }
            cartas2 = Number(prompt(`Qual carta vc vai jogar?, jogador dois (${i+1})`))
            if(cartas2 >= 0 && cartas2 <=13){   
                somaCartas2 = cartas2 + somaCartas2} 
                else{
                    alert("Você escolheu um número inválido")
                    reset()
                }
        }


    if(somaCartas1 > somaCartas2){
      alert(`Parabéns ${jogador1}, vc foi o vitorioso e sua pontuação é de: ${somaCartas1}!!!`)  
    } 
    else if(somaCartas1 >somaCartas2){
        alert(`Parabéns ${jogador2}, vc foi o vitorioso e sua pontuação é de: ${somaCartas2}!!!`)  
      } 
    else{
        alert(`O jogo deu empate :>`)
    }
        
     
    }