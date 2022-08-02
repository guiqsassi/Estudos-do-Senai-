//criar variaveis
let habitantes, area, densidade
    //perguntar os valores a usuário
    habitantes = Number(prompt("quantos habitantes nessa região?"))
    area = Number(prompt("qual a área dessa região? (m²)"))
//conta para verificar a densidade
densidade = (habitantes / area)


//dar uma resposta baseada na densidade

if(densidade >= 100){ 
    alert(`A densidade nessa área (${densidade} habintantes por km²) é considerada alta`)
}

else if(densidade >= 25 && densidade < 100){
    alert(`A densidade nessa área (${densidade} habintantes por km²) é considerada média`)

}
else{ 
    alert(`A densidade nessa área (${densidade} habintantes por km²) é considerada baixa`)
}

