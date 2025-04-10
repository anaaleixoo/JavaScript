//Verificar se um aluno foi aprovado

var prompt = require ("prompt-sync")();

let nota1 = Number(prompt("Qual a sua primeira nota: "));

let nota2 = Number(prompt("Qual a sua Segunda nota: "));

let media = (nota1 + nota2) /2;

if (media >= 5){
    console.log("Voce foi aprovado");
}else{
    console.log("Aluno Retido")
}