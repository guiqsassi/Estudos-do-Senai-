let nome
nome = document.getElementById("nome")
let autor
autor = document.getElementById("autor")
let ano
ano = document.getElementById("ano")
let livrosLS = []

let Livros = {}
    


function cadastrar(){

  if(nome.value == "" || autor.value == "" || ano.value == ""){
      alert("insira todas as informações")
  }  

else{ 
  livrosLS = JSON.parse(localStorage.getItem("livros")) 


  if(livrosLS == null){ 
      livrosLS = []
   Livros = {
        nome: nome.value,
        autor: autor.value,
        ano: ano.value 

   } 
        livrosLS.push(Livros)

   localStorage.setItem("livros", JSON.stringify(livrosLS))

    alert("livro cadastrado")}
    else{
        Livros = {
            nome: nome.value,
            autor: autor.value,
            ano: ano.value 
    
       } 
            livrosLS.push(Livros)
    
       localStorage.setItem("livros", JSON.stringify(livrosLS))
    
        alert("livro cadastrado")

    }
    
}

}

function Listar(){
    let mostrar
    livrosLS = JSON.parse(localStorage.getItem("livros")) 
    let autores = []
    let nomes = []
    let anos = []
    index = livrosLS

    for(var i in livrosLS){
        mostrar = livrosLS[i]
        nomes.push(mostrar.nome)
        autores.push(mostrar.autor)
        anos.push(mostrar.ano)
    }


    for(var i in nomes){
        let tabela = []
        tabela.push(nomes[i])
        

        let li = document.getElementById("li")
        let item = document.createElement("tr")
        item.appendChild(document.createTextNode(nomes[i]))
        li.appendChild(item)
    }
    
    for(var i in autores){
        let tabela = []
        tabela.push(autores[i])


        let le = document.getElementById("le")
        let item = document.createElement("tr")
        item.appendChild(document.createTextNode(autores[i]))
        le.appendChild(item)
    }

    for(var i in anos){
        let tabela = []
        tabela.push(anos[i])

        let la = document.getElementById("la")
        let item = document.createElement("tr")
        item.appendChild(document.createTextNode(anos[i]))
        la.appendChild(item)
    }
}