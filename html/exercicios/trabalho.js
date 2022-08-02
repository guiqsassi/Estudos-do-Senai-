let horas
horas = document.getElementById("horas")
let preco
preco = document.getElementById("preco")

let precofinal


function valor(){
    precofinal = (Number(preco.value) * Number(horas.value))
    alert(`O valor final do trabalho é R$ ${precofinal}`)
}

