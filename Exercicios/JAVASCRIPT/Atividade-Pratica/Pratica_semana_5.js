const prompt = require("prompt-sync")();
var array_roupas = [];

do {
  console.log("Sistema de Cadastro de roupas");
  console.log("1 - Inserir roupa");
  console.log("2 - Excluir roupas");
  console.log("3 - Listar roupas");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");
  console.clear();
  if (opcao == 1) {
    //Invocar a função gerarID
    let codigoRoupa = gerarID();
    console.log("\n\nInserindo roupa...\n");
    let nomeRoupa = prompt("Nome da Roupa: ");
    let tamanhoRoupa = prompt(
      "Qual o tamanho da roupa (P/M/G): "
    ).toUpperCase();
    let valorRoupa = parseFloat(prompt("Qual o valor da Roupa: R$ "));

    // Neste trecho estamos declarando um objeto
    const roupa = {
      codigoRoupa: codigoRoupa,
      nomeRoupa: nomeRoupa,
      tamanhoRoupa: tamanhoRoupa,
      valorRoupa: valorRoupa,
    };
    // Chamar a função inserir
    inserir_roupa(roupa);
  } else if (opcao == 2) {
    console.log("\n\nExcluir Roupa...\n");
    let codigoRoupa = prompt("Digite o código da roupa: ");
    console.clear();
    // Chamar a função excluir
    excluir_roupa(codigoRoupa);
  } else if (opcao == 3) {
    console.log("\n\nListando roupas...\n");
    // Chamar a função listar
    listar_roupas();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0);

function inserir_roupa(roupa) {
  // Implementar corpo da função
  array_roupas.push(roupa);
}

function excluir_roupa(codigoRoupa) {
  // Implementar corpo da função
  let del = false;
  for (let i = 0; i < array_roupas.length; i++) {
    if (array_roupas[i]["codigoRoupa"] == codigoRoupa) {
      array_roupas.splice(i, 1);
      del = true;
    }
  }
  console.log(`ROUDA DE CÓDIGO ${codigoRoupa} EXCLUÍDA `);
}

function listar_roupas() {
  // Implementar corpo da função
  for (let i = 0; i < array_roupas.length; i++) {
    console.log(
      `${array_roupas[i].codigoRoupa}: ${array_roupas[i]["nomeRoupa"]} - ${array_roupas[i].tamanhoRoupa} - ${array_roupas[i]["valorRoupa"]} `
    );
  }
}

// função para gerar número aleatório.
function gerarID() {
  return Math.random().toString().substring(2, 4);
}
