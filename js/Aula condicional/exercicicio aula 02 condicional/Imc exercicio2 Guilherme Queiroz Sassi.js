    //criar variaveis
    let altura, peso, imc
     
    //pergubtar informações ao usuario
        altura = Number(prompt("qual a sua altura em (M)"))   
        peso = Number(prompt("qual o seu peso ? (kg)"))
    
        //realizar a conta
    imc = (peso)/ (altura * altura)
    
    //mostrar o resultado para o usuario
    if(imc > 18 && imc < 25){
        alert("seu imc está na faixa ideal e ele:" + imc.toFixed(2)) 
    }
    else if (imc < 18){
        alert("seu imc está abaixo do esperado, ele é: " + imc.toFixed(2))
    }
    else{ 
        alert("seu imc acima do esperado, ele é:" + imc.toFixed(2))
    }

