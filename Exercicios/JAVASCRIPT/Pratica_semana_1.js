/*
          Prática da Semana 1
Elabore um algoritmo que receba três números e ao final imprima na tela, a soma dos três números e a média dos três números.
*/

const prompt = require("prompt-sync")();

// Leia os três números
num1 = parseFloat(prompt("Digite o número1: "));
num2 = parseFloat(prompt("Digite o número2: "));
num3 = parseFloat(prompt("Digite o número3: "));
// Calcule a soma e a média
soma = num1 + num2 + num3;
media = soma / 3;
// Mostre na tela o valor da soma e média
console.log("A soma é: ", soma);
console.log("A media é: ", media);
