const { log } = require("console");
const fs = require("fs");
const prompt = require("prompt-sync")();

let logoEmpresa = [
  `  ┌─────── •✧✧• ──────┐
   ✶𝓒adastr𝓞 d𝑒 𝓒arr𝓞✶
  └─────── •✧✧• ──────┘
  `,
  `  ┌─────── •✧✧• ──────┐
   ✶𝓒adastrar  𝓒arr𝓞✶
  └─────── •✧✧• ──────┘`,
  `  
  ┌─────── •✧✧• ──────┐
   ✶ Listar 𝓒arr𝓞s✶
  └─────── •✧✧• ──────┘`,
];

function adicionarCarro(lista, carro) {
  lista.push(carro);
  json = JSON.stringify({ carros: lista });

  return new Promise((resolve, reject) => {
    fs.writeFile("./bd.json", json, (erro) => {
      //retorne aqui um erro com o reject ou uma mensagem de sucesso com o resolve
      if (erro) {
        reject(erro);
      }
      resolve();
    });
  });
}

function obterCarros() {
  return new Promise((resolve, reject) => {
    fs.readFile("./bd.json", "utf-8", (erro, data) => {
      //retorne aqui um erro com o reject ou os dados com o resolve
      if (erro) {
        reject(erro);
      }
      resolve(data);
    });
  });
}

async function listarCarros() {
  try {
    var json = await obterCarros();
    var carros = JSON.parse(json).carros;

    console.table(carros);
  } catch (erro) {
    console.log("Ocorreu um erro ao buscar os carros: " + erro);
  }
}

async function incluirCarro() {
  const placa = prompt("Digite a placa do carro: ");
  const nome = prompt("Digite o nome do carro: ");
  const montadora = prompt("Digite a montadora do carro: ");

  const carro = {
    placa: placa,
    nome: nome,
    montadora: montadora,
  };

  try {
    const carros = await obterCarros();
    const lista = JSON.parse(carros).carros;

    adicionarCarro(lista, carro);
    console.log("Carro cadastrado com sucesso...");
  } catch (erro) {
    console.log("Ocorreu um erro ao adicionar o carro: " + erro);
  }
}

async function excluirCarro() {
  const manutencao = "Estamos em manutenção";
  console.log(manutencao);
}

async function main() {
  let op;
  console.log(logoEmpresa[0]);
  do {
    console.log(`
    1 - Listar carros
    2 - Cadastrar carros    
    0 - Sair
    `);

    op = prompt("Digite a opção desejada: ");
    console.clear();
    switch (op) {
      case "1":
        console.log(logoEmpresa[2]);
        await listarCarros();
        prompt(`Enter para continuar...`);
        console.clear();
        break;
      case "2":
        console.log(logoEmpresa[1]);
        await incluirCarro();
        prompt(`Enter para continuar...`);
        console.clear();
        break;
      case "3":
        await excluirCarro();
        prompt(`Enter para continuar...`);
        console.clear();
        break;
      case "0":
        console.log("Obrigado por usar o sistema. Até mais!");
        break;
      default:
        console.log("Entrada inválida...");
        break;
    }
  } while (op !== "0");
}

main();
