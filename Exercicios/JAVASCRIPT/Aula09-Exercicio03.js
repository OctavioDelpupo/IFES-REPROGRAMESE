prompt = require("prompt-sync")();

let soma = 0;

while (true) {
  var entrada = parseFloat(prompt("Digite um número: "));

  var continuar = prompt("Deseja continuar (s/n)? ");

  soma += entrada;

  if (continuar !== "s") {
    break;
  }
}

console.log("A soma dos números digitados é: ", soma);
