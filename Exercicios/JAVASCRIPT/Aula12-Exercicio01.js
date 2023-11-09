const prompt = require("prompt-sync")();

function calIMC(n1, n2) {
  let peso = n1;
  let altura = n2;
  let imc = peso / (altura * altura);

  return imc;
}

function codSituacao(imc) {
  if (imc < 18.5) {
    return 1;
  } else if (imc >= 18.5 && imc >= 24.9) {
    return 2;
  } else if (imc >= 18.5 && imc >= 24.9) {
    return 2;
  }
}

function situacao(codigo) {
  switch (codigo) {
    case 1:
      console.log("Você está abaixo do peso ideal");
      break;
    case 2:
      console.log("Parabéns! Você está em seu peso normal!");
      break;
    case 3:
      console.log("Você está acima de seu peso (sobrepeso)!");
      break;
    case 4:
      console.log("Obesidade!");
      break;
  }
}

for (let i = 0; i < 5; i++) {
  console.log(`PESSOA ${i + 1}`);
  let nome = toString(prompt("Entre com o nome: "));
  let peso = parseFloat(prompt("Entre com o peso (Kg): "));
  let altura = parseFloat(prompt("Entre com a altura (Metros): "));

  let imc = calIMC(peso, altura);
  let codigoSituacao = codSituacao(imc);
  situacao(codigoSituacao);
  console.log("\n");
}
