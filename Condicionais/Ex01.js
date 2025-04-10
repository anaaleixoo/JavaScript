//Verificar se um número é positivo, negativo ou zero. 

var prompt = require('prompt-sync')(); 

let Numero = Number(prompt('digite um numero:')); 

if(Numero >= 0){
    console.log("o numero é positivo ");

}else if(Numero < 0){

    console.log("o numero é negativo");

}else{
    console.log("Essa informação é invalida!");
}