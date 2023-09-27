prompt = require("prompt-sync")();

var resultado = ' '
var nomeAluno = String(prompt('Nome do Aluno: '));
var nota1 = parseFloat(prompt('Digita a primeira nota: '));
var nota2 = parseFloat(prompt('Digita a segunda nota: '));
var nota3 = parseFloat(prompt('Digita a terceira nota: '));

var media = (nota1 + nota2 + nota3) / 3;

if (media >= 6 )  {
  resultado = 'Aprovado';
}else{
  resultado = 'Reprovado';
}

console.log('\nAluno: ',nomeAluno,'\nMedia: ', media,'\nResultado: ', resultado );