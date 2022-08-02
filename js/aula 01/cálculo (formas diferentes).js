let number1, number2, conta

number1 = Number(prompt("Dale no primeiro número"))
number2 = Number(prompt("Dale no segundo"))

    conta = [(number1 * number1 / number2).toFixed(2)]

alert(` O resultado é ${conta}`)
// caso vc queira mais bonita, usar a crase para transformar tudo em literal e colocar ${} na parte em que for código
