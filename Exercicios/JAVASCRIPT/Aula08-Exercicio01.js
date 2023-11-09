prompt = require("prompt-sync")();

var num1 = parseInt(prompt("Digite o primeiro número: "));
var num2 = parseInt(prompt("Digite o segundo número: "));

if (num1 <= 0 || num2 <= 0) {
  console.log("Existe pelo menos um número 0 ou negativo!");
} else {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    console.log("Os dois números são pares");
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    console.log("Os dois números são ímpares");
  } else {
    onsole.log("Um par e um ímpar");
  }
}
