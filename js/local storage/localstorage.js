let username 
username = document.getElementById("username")
let user = []


let password 
password = document.getElementById("password")
let pass = []


function cadastro(){

    user = JSON.parse(localStorage.getItem("usuarios"))

    if(user == null){

       user = []
        user.push(username.value)
        
        localStorage.setItem("usuarios",JSON.stringify(user))

    }
    else{
        
        user.push(username.value)
        
        localStorage.setItem("usuarios", JSON.stringify(user))
    }

    pass = JSON.parse(localStorage.getItem("senhas"))
        if(pass == null){
            pass = []
            pass.push(password.value)

            localStorage.setItem("senhas",JSON.stringify(pass))
        }
        else{
            pass.push(password.value)

            localStorage.setItem("senhas",JSON.stringify(pass))
        }
        window.location.href = "login.html"
    alert("cadastro efetuado")
}

let nome = document.getElementById("nome")
let senha = document.getElementById("senha")
    function login(){
        user = JSON.parse(localStorage.getItem("usuarios"))
        pass = JSON.parse(localStorage.getItem("senhas"))

        if(user.includes(nome.value) && pass.includes(senha.value)){
            
            alert("Login efetuado")
            window.open("https://www.youtube.com/watch?v=N57u3DEbGs4")
        }
        
    }
   