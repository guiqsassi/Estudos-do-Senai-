//criar variaveis
let alturaJ, alturaP, anos

alturaJ = 175
alturaP = 160
anos = 0

    //repetir até Pedro ser mais velho que João
    while(alturaJ > alturaP){
    alturaP = alturaP + 3
    alturaJ = alturaJ + 1
    anos = anos + 1
}
    //Parar a estrutura e mostrar mensagem quando Pedro for o mais velho
    if(alturaP > alturaJ){
        alert(`Pedro irá ser mais alto que João em ${anos} anos`)
    }


