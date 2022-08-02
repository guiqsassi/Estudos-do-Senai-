    //criar variaveis
    let altura, peso, conta
        //pergubtar informações ao usuario
        altura = Number(prompt("qual a sua altura em (M)"))   
        peso = Number(prompt("qual o seu peso ? (kg)"))
    //realizar a conta
    conta = (peso)/ (altura * altura)
    //mostrar o resultado para o usuario
alert(`o seu Imc tem como resultado: ${conta.toFixed(3)}`)