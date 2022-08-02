//variaveis de notas e contas
let nota1, nota2, nota3
let conta
let peso
let media

//mostra na tela para o aluno escrever as suas notas
nota1 = Number(prompt ("qual a primeira nota do aluno?"))
nota2 = Number(prompt ("qual a segunda nota do aluno?"))
nota3 = Number(prompt ("qual a terceira nota do aluno?"))
//realiza as contas
conta = (nota1 + nota2)
peso = (nota3 * 3)
media = ((conta + peso) / 5)
//mostra a média para o aluno
alert(`bom dia meu patrão tua média é: ${media.toFixed(2)} dnd amigo`)



