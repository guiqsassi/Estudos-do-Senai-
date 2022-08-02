//criar variaveis
let numero, media, verificador, final, soma
soma = 0
numero = 0
media = 0
    //
    for(i=0; i < 5;i++){
        numero = Number(prompt("digite um número"))
        verificador = numero / 2
       
        if(Number.isInteger(verificador)){
          soma = numero + soma
          final = "par"
      }
      else{
          final = "impar"
      }

    }

    function Final(){
        if(final == "impar"){
            alert("Vc digitou um número impar, logo não terá seu resultado")
        }
        else if(final == "par"){
            alert(`A médias dos números digitados é ${media}`)
        }
    }

    Final()