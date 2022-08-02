let sorteado, palpites = [], Addpalpite
let min, max


sorteado = Math.floor(Math.random() * (100 - 0))

    
    while(Addpalpite != sorteado){
        Addpalpite = prompt("qual vai ser o seu palpite?")

            if(Addpalpite != sorteado){
                palpites.push(Addpalpite)
            }

    }


alert(`parabéns!!!, vc acertou o numero sorteado!! \n o seu número de tentativas foram: ${palpites.length} e os palpites que você deu até acertar foram: ${palpites}`)
