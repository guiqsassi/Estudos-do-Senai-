//criar variáveis
let pEntra, pSai, repete, leitos, conta
pEntra = 0
pSai = 0
leitos = 40

        //repetir a pergunta até o número de leitos disponiveis chegar a zero
     while(leitos > 0 && leitos <= 40){
        pEntra = Number(prompt("Quantas pessoas entraram?"))
        pSai = Number(prompt("Quantas pessoas sairam do hotel?"))
    conta = leitos - pEntra +pSai
    leitos = conta
    
     //dar mensagem caso todos os leitos estejam livres  
     if(leitos >= 40){
        alert("O número de leitos livres, já está no máximo")
        leitos = leitos - pSai
    }
    }
   
     // avisar que o número de leitos chegou ao limite máximo
    if(leitos <= 0){
        alert("Infelizmente não tem mais leitos disponiveis")
    }
    