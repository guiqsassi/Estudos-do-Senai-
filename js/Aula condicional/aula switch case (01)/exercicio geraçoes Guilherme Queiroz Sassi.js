//cria variavel
let ano
    // pergunta a data de
    ano = Number(prompt("Em que ano você nasceu? (XXXX)"))


switch(true){
    case ano < 1945:
        alert("Você não tem geração")
        break
    
    case ano >= 1946 && ano <= 1964:
        alert("Você é um Baby Boomer")
        break
    
    case ano >= 1965 && ano <= 1980:
        alert("Você é da Geração X")
        break
    
    case ano >= 1981 && ano <= 1996:
        alert("Você é da Geração Y")
        break
    
    case ano >= 1997 && ano <= 2010:
        alert("Você é da Geração Z")
        break
    
    default: 
        alert("Você é da Geração Alfa")
        break
}
  
    
