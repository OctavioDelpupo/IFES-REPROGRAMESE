const fs = require("fs");
const path = require("path");
const prompt = require("prompt-sync")();
const filePath = path.join(__dirname, "tarefas.json");

function main() {
  let op;
  do {
    console.log(`
    1 - Sistema de rodízio de carro
    2 - Data formatada
    3 - Divisão do primeiro com o segundo número.
    4 - Lista e cadastro de pessoa
    0 - Siar
  `);

    op = prompt("Digite a opção desejada: ");
    console.clear();

    switch (op) {
      case "1":
        console.log("Sistema de rodízio de carro");
        prompt(`\nEnter para continuar...`);
        console.clear();
        break;

      case "2":
        console.log("Data formatada");
        prompt(`\nEnter para continuar...`);
        console.clear();
        break;

      case "3":
        console.log("Divisão do primeiro com o segundo número.");
        prompt(`\nEnter para continuar...`);
        console.clear();
        break;

      case "4":
        console.log("Lista e cadastro de pessoa");
        prompt(`\nEnter para continuar...`);
        console.clear();
        break;

      case "0":
        console.log("OBRIGADO POR UTILIZA NOSSO SISTEMA");
        break;

      default:
        console.log("Entrada inválida...");
        prompt(`\nEnter para continuar...`);
        console.clear();
        break;
    }
  } while (op !== "0");
}

main();
