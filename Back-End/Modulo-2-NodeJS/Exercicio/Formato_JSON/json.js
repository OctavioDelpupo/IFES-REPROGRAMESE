const fs = require("fs");
const path = require("path");
const prompt = require("prompt-sync")();
const filePath = path.join(__dirname, "tarefas.json");

function lerTarefas() {
  try {
    const conteudo = fs.readFileSync(filePath, "utf-8");
    const tarefas = JSON.parse(conteudo);

    if (tarefas.length > 0) {
      console.log("Lista de Tarefas:");
      tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
      });
    } else {
      console.log("Lista de tarefas vazia.");
    }
  } catch (error) {
    console.log(
      'Arquivo "tarefas.json" não encontrado. Criando um novo arquivo.'
    );
    fs.writeFileSync(filePath, "[]", "utf-8");
  }
}

function adicionarTarefa(tarefa) {
  try {
    const conteudo = fs.readFileSync(filePath, "utf-8");
    const tarefas = JSON.parse(conteudo);

    tarefas.push(tarefa);

    fs.writeFileSync(filePath, JSON.stringify(tarefas, null, 2), "utf-8");
    console.log(`Tarefa '${tarefa}' adicionada com sucesso.`);
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error);
  }
}

function main() {
  let op;
  do {
    console.log(`
  Sistema de listagem e cadastro de tarefas
  1 - Cadastrar Tarefa:
  2 - Listar Tarefa:
  0 - Sair:
  `);

    op = prompt("Digite a opção desejada: ");
    console.clear();

    switch (op) {
      case "1":
        console.log(`CADASTRAR TAREFA
        `);

        let novaTarefa = prompt("Digite a tarefa: ");
        adicionarTarefa(novaTarefa);
        prompt(`Enter para continuar...`);

        break;

      case "2":
        console.log("LISTAR TAREFAS\n");
        lerTarefas();
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
