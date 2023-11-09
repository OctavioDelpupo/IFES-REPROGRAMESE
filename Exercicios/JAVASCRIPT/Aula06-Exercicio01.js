prompt = require("prompt-sync")();

salario = parseFloat(prompt("Digite o salario: "));
ir = parseFloat(prompt("Digite IR: "));

salarioLiquido = salario - ir;

console.log("Salário liquido é: ", salarioLiquido);
