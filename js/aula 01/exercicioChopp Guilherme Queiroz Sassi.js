//criar variaveis
let choppConsumido, choppDesperdiçado, choppResto, conta1, conta2
   
//perguntar ao usuario sobre o consumo de chopp
    choppConsumido = Number(prompt("Quanto de Chopp foi consumido?(L)"))
    choppDesperdiçado = Number(prompt("Quanto de Chopp foi desperdiçado? (L)"))
    choppResto = Number(prompt("Quanto de Chopp sobrou? (L)"))

        //realziar as contas para chegar no total de chopp consumido
        conta1 = (choppResto + choppDesperdiçado)
        conta2 = ((choppConsumido - conta1) / 45) 
    
 //relatar o resultado ao usuario
alert(`O total de chopp consumido na festa foi: ${conta2.toFixed(2)}`)
