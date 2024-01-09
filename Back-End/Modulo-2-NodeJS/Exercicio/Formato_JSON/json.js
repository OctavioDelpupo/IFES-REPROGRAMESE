const prompt = require("prompt-sync")();
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "tarefas.json");

function lerTarefa() {
  const arquivo = fs.readFile(filePath, "utf8");
  const tarefas = JSON.parse(arquivo);

  console.log(tarefas);
  // fs.readFile(filePath, "utf8", (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  // });
}

lerTarefa();
// do {
//   console.log(`
//     CADASTRO DE TAREFA
//     1 - Listar Tarefas
//     2 - Cadastrar Tarefa
//     0 - Sair
//     `);

//   op = prompt("Digite a opção desejada: ");

//   console.clear();
//   switch (op) {
//     case "1":
//       prompt(`Enter para continuar...`);
//       break;
//     case "0":
//       console.log("Obrigado por usar o sistema. Até mais!");
//       break;
//     default:
//       console.log("Entrada inválida...");
//       break;
//   }
// } while (op !== "0");
