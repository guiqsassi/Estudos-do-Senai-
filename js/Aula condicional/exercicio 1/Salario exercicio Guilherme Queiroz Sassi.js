//criar variaveis
let salario, pisoSalario
    //perguntar o salario e a média salarial para o usuario 
    salario = Number(prompt(" Qual seu salário?"))
    pisoSalario = Number(prompt(" Quanto é a média do salário de sua profissão?"))
    // comparar o salário com a média salaria e mostrar o resultado na tela

    salario = (salario / 12)
if (salario > pisoSalario){ 
    alert("Seu salario é superior a média em sua profissão, \n vc está ganhando justamente :D")
}
else if(salario = pisoSalario){
    alert("seu salário é igual a média na sua profissão")
}
else{ 
    alert("tu ta bem não amigão, muda de emprego vai")
}