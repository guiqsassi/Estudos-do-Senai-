//criar variaveis
let expoente, base, baseOriginal
    //perguntar dados ao usuario
    base = Number(prompt("qual a base desejada ?"))
    expoente = Number(prompt("qual o expoente desejada ?"))
    baseOriginal = base
    //repetir a multiplicação baseado no expoente
    for(i = 0; i < expoente - 1; i++){
       base = base * baseOriginal
    }
//mostrar resultado
alert(`O resultado da sua exponenciação foi: ${base}`)

