prompt = require("prompt-sync")();

var maior = 0;

do {
  var entrada = parseInt(
    prompt("Digite um número inteiro positivo ou 0 para siar: ")
  );

  if (entrada > maior) {
    maior = entrada;
  } else {
    console.log("Digite um número inteiro positivo válido");
  }
} while (entrada !== 0);

console.log("O maior número digitado foi: ", maior);
