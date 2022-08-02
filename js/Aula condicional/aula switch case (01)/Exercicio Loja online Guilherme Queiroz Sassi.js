//criar variavel
let opcao
    //perguntar a opção desejada pelo usuario
    opcao = prompt("DIGITE UMA OPÇÃO \n A- Falar com o/a atendente \n B- Falar com o RH \n C- Falar com o gerente\n D- Sair" ) 
    //fazer a resposta ser sempre em maiscula
    opcao = opcao.toLocaleUpperCase()

    //dar uma resposta baseada na opção escolhida
    switch(opcao){
        case "A":
            alert("BOM DIAAAAA. \n vai um plano de internet aí???")
            Menu()
        break

        case "B":
            alert("Bem vindo a nossa empresa, ta contratado")  
            Menu()
        break
        
        case "C":
            alert("Eu sou o gerente, qual problema quer resolver?")
            Menu()
        break

        case "D":
            alert("Sair :>")
            
        break
        default:
            alert("Digite uma das opções")
            Menu()
        }

        
        // tornar infinito 
        function Menu(){
            let opcao
            //perguntar a opção desejada pelo usuario
            opcao = prompt("DIGITE UMA OPÇÃO \n A- Falar com o/a atendente \n B- Falar com o RH \n C- Falar com o gerente\n D- Sair" ) 
            //fazer a resposta ser sempre em maiscula
            opcao = opcao.toLocaleUpperCase()
        
            //dar uma resposta baseada na opção escolhida
            switch(opcao){
                case "A":
                    alert("BOM DIAAAAA. \n vai um plano de internet aí???")
                    Menu()
                break
        
                case "B":
                    alert("Bem vindo a nossa empresa, ta contratado")  
                    Menu()
                break
                
                case "C":
                    alert("Eu sou o gerente, qual problema quer resolver?")
                    Menu()
                break
        
                case "D":
                    alert("Sair :>")
                    
                break
                default:
                    alert("Digite uma das opçôes")
                    Menu()
                }} 
        
                