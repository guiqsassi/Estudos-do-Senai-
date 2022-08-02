let aluno,media = [], aprovados = [], notas = [], soma


    for(i=0;i<15;i++){

        aluno = prompt("insira o nome do aluno")

        for(d = 0; d <4; d++){
            notas.push(Number(prompt(`Qual foi a nota da avaliação ${d+1}`)))

        }
        soma = notas[0]+notas[1]+notas[2]+notas[3]
        media.push (soma/4)
        

    soma = 0

        for(c = 0; c<4; c++){

            notas.pop()}

        if(media[i] >= 7){
            aprovados.push(aluno)
            alert(`Este aluno foi aprovado, e sua média foi: ${media[i]}`)
        }
        else{
            alert(`Este aluno não obteve a média necessária, e ela foi: ${media[i]}`)
        }
        

    }

    alert(`Os alunos que foram aprovados são: ${aprovados}`)