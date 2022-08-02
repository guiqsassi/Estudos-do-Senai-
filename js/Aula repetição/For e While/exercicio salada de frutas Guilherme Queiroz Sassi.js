//criar variaives
let fruta, quantidade
    fruta = ""
        //titulo
        alert ("vamos fazer uma salada de frutas!!! :>")
    //perguntar as frutas desejadas na salada
    fruta = prompt("qual fruta vc quer adcionar? (para acabar adcione a cereja)")
        fruta = fruta.toLocaleLowerCase()
        quantidade = 1
//estrutura de repetição enquanto não adcionar a cereja
while (fruta != "cereja"){
    fruta = prompt("qual fruta vc quer adcionar?")
    fruta = fruta.toLocaleLowerCase()
    quantidade = (quantidade + 1)
}
    // parar a estrutura quando for cereja
    if(fruta == "cereja"){
        alert(`sua salada de frutas está pronta e a quantidade de frutas escolhidas foram ${quantidade} frutas`)
    }