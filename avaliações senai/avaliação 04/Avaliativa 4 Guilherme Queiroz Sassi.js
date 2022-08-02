let nomeInput = document.getElementById("nome")
let valorInput = document.getElementById("valor")
let quantInput = document.getElementById("quant")
let marcaInput = document.getElementById("marca")

let produtos= {}
let Produtors = []
let edita = document.getElementById("edita")

function cadastro(){

    Produtors = JSON.parse(localStorage.getItem("produtosLoja"))    

        if(Produtors == null){
            Produtors = []

            produtos = {
                nome: nomeInput.value ,
                preco: valorInput.value ,
                quant: quantInput.value , 
                marca: marcaInput.value
                
            }

            Produtors.push(produtos)
            localStorage.setItem("produtosLoja", JSON.stringify(Produtors))
            alert("produto cadastrado")

        }
        else{
            produtos = {
                nome: nomeInput.value ,
                preco: valorInput.value ,
                quant: quantInput.value , 
                marca: marcaInput.value
            }

            Produtors.push(produtos)
            localStorage.setItem("produtosLoja", JSON.stringify(Produtors))
            alert("produto cadastrado")
        }



}

function editar(){
    Produtors = JSON.parse(localStorage.getItem("produtosLoja")) 
    if(Produtors == null){
        alert("não existem produtos cadastrados para serem editados")
    }
    else{ 
    edita = `<input placeholder="escreva o nome do produto que será editado" id="nomeEdit"> <br>
    <input placeholder="O novo nome que o produto vai receber" id="novoNome"> <br>
    <input placeholder="O novo valor que o produto vai receber" id="novoValor"> <br>
    <input placeholder="quantidade do novo produto" id="novaQuant"> <br>
    <input placeholder="marca do produto" id="novaMarca"> <br>
    <button onclick=" mudar()"> mudar </button>`

    document.getElementById("edita").innerHTML = edita
    }
}

function mudar(){
    
    Produtors = JSON.parse(localStorage.getItem("produtosLoja")) 
    let nomeEdit = document.getElementById("nomeEdit")
    
    let novoNome = document.getElementById("novoNome")
    let novoValor = document.getElementById("novoValor")
    let novaQuant = document.getElementById("novaQuant")
    let novaMarca = document.getElementById("novaMarca")
   
let nomes = []
let mostrar
let index

if(nomeEdit == null){
    alert("digite o nome de um produto para edita-lo")
}
else{ 

if(novoNome == null || novoValor == null || novaQuant == null || novaMarca == null){
    alert("Para editar um produto preencha todos os inputs")
}
else{

        for(i in Produtors){
          mostrar = Produtors[i]
          
          nomes.push(mostrar.nome)
        }

        if(nomes.includes(nomeEdit.value)){

           index = nomes.indexOf(nomeEdit.value)
            Produtors.splice(index, 0)

            
                produtos = {
                    nome: novoNome.value ,
                    preco: novoValor.value ,
                    quant: novaQuant.value , 
                    marca: novaMarca.value
                }
    
                Produtors[index] = produtos
                localStorage.setItem("produtosLoja", JSON.stringify(Produtors))
                alert("produto editado")
            
        }
        else{
            alert("não existe nenhum produto com este nome cadastrado")
        }
        edita = ""
        document.getElementById("edita").innerHTML = edita
}}}
function deleta(){
    Produtors = JSON.parse(localStorage.getItem("produtosLoja")) 
    if(Produtors == null){
        alert("Não existem produtos para deletar")
    }
    else{ 
    edita = `<input placeholder="escreva o nome do produto que será removido" id="nomeRemove"> <br>
    <button onclick=" remove()"> mudar </button>`

    document.getElementById("edita").innerHTML = edita
    } 

}

function remove(){

    Produtors = JSON.parse(localStorage.getItem("produtosLoja")) 
    let nomeRemove = document.getElementById("nomeRemove")
   
let nomes = []
let mostrar
let index
        for(i in Produtors){
          mostrar = Produtors[i]
          
          nomes.push(mostrar.nome)
        }
        if(nomes.includes(nomeRemove.value)){

            index = nomes.indexOf(nomeRemove.value)
             Produtors.splice(index, 1)
             localStorage.setItem("produtosLoja", JSON.stringify(Produtors))
            
            } 
        else{
            alert("não existe nenhum produto     com este nome cadastrado")
        }
        edita = ""
        document.getElementById("edita").innerHTML = edita

}


function listar(){
    Produtors = JSON.parse(localStorage.getItem("produtosLoja")) 
    if(Produtors == null){
        alert("não existem produtos cadastrados para serem listados")
        lista =   ""    
        document.getElementById("lista").innerHTML = lista 
    
    }
    else{ 
    let lista = document.getElementById("lista")
    lista = ""
    let nomes = []
    let valores = []
    let quantidades = []
    let marcas = []
    let mostrar

    lista = ` <table > 
    <tr>
        <td >Nomes</td>
        <td >Preço</td>
        <td >Marca</td> 
        <td >Quantidade</td>
    </tr>
    
`
        for(i in Produtors){
            mostrar = Produtors[i]
            nomes.push(mostrar.nome)
            valores.push(mostrar.preco)
            marcas.push(mostrar.marca)
            quantidades.push(mostrar.quant)
            
            lista = lista + `  <tr>
            <td >${nomes[i]}</td>
            <td >${valores[i]}</td>
            <td >${marcas[i]}</td> 
            <td >${quantidades[i]}</td>
        </tr>`
        }
lista = lista + "</table>"
document.getElementById("lista").innerHTML = lista
}}