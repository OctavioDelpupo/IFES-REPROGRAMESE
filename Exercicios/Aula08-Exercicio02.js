prompt = require("prompt-sync")();

var angulo1 = parseFloat(prompt("Digite o valor do primeiro ângulo: "));
var angulo2 = parseFloat(prompt("Digite o valor do segundo ângulo: "));
var angulo3 = parseFloat(prompt("Digite o valor do terceiro ângulo: "));
var resultado = " ";

var soma = angulo1 + angulo2 + angulo3;

if (soma == 180) {
  if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
    resultado = "Acutângulo";
  } else if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
    resultado = "Retângulo";
  } else {
    resultado = "Obtusângulo";
  }
} else {
  console.log("Não e triângulo!");
}

console.log(resultado);
