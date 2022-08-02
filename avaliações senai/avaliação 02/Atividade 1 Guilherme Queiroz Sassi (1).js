//criar variaveis
let nacionalidade, sexo, idade, tempoB

    nacionalidade = prompt("Você é brasileiro? (S/N)")
        nacionalidade = nacionalidade.toUpperCase()
            if(nacionalidade == "N"){
                tempoB = Number(prompt("A quanto tempo você está morando no Brasil?"))
            }

    sexo = prompt("Você se identifica com o sexo masculino ou feminino? (M/F)")
            sexo = sexo.toUpperCase()

    idade = Number(prompt("Qual a sua idade? (responda apenas com números)"))

//Verificação da possibilidade de cadastro

    if(nacionalidade == "S" && sexo == "M" && idade >= 18 && idade <= 65){
        alert("Você pode se cadastrar no sistema!")
    }
   else if(nacionalidade == "S" && sexo == "F" && idade >= 18 && idade <= 60){
        alert("Você pode se cadastrar no sistema!")
    }
    else if(nacionalidade == "N" && tempoB > 3 && idade >= 21 && idade <= 30){
        alert("Você pode se cadastrar no sistema!")
    }
    else{
        alert("Você não pode se cadastrar no sistema")
    }  

