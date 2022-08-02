//criar variaveis
let username, password

    //perguntar nome e senha para o usuário 
    username = prompt("qual o seu nome usuário?")
    password = prompt("qual a sua senha usuário?")
   
//verificar se o nome e a senha estão corretos para efetuar o login
if (username == "admin" && password == "1234"){
        alert("Parabéns vc está logado")
    }   
    //mensagens de erro respectivas para onde o úsuário digitou errado
    else if(username == "admin" && password != "1234"){
        alert(" A senha digitada está incorreta")
    }
    else if(username == "admin" && password != "1234"){
        alert(" A senha digitada está incorreta")
    }
    else if(username != "admin" && password == "1234"){
        alert("O nome digitado está incorreto")
    }
    else{
        alert(" Tanto a senha quanto o nome estão incorretos")
    }