let palindromo = []

        for(i=0;i<7;i++){
    palindromo.push(prompt("digite os números do palindromo"))

}

if(palindromo[0] == palindromo[6] && palindromo[1] == palindromo[5] && palindromo[2] == palindromo[4]){
    alert(`Ta tudo certo meu companheiro ${palindromo}`)
}
else{
    alert("não")
}