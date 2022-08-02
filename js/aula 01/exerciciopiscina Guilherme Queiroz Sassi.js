//criar variaveis
let comprimento, largura, conta
    //perguntar ao usuario o tamanho da piscina
    comprimento = Number(prompt("qual o comprimento da piscina desejada? (m)"))
    largura = Number(prompt("qual a largura da piscina desejada? (m)"))

    //realizar a conta para saber o tamanho da piscina em m² e também a quantidade de azulejos necessária
conta = ((comprimento * largura) * 120)

    //mostrar para o usuario a quantidade de azulejos que precisa ser comprada comprada
    alert(`A quantidade de azulejos que precisa ser comprada são: ${conta.toFixed(1)}`)
