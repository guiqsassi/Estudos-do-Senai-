

    let alunos = []
    let idade 
    let Addalunos
    
    

    for(i=0; i<30; i++){
        Addalunos = prompt("qual o nome do aluno??")
        idade = Number(prompt("qual a idade do aluno formado??"))

            if(idade < 30 ){
                alunos.unshift(Addalunos)

            }
            else if (idade >= 30){
                alunos.push(Addalunos)
            }
            


}
alert(`A fila para os alunos formados deve seguir a seguinte ordem: ${alunos}`)