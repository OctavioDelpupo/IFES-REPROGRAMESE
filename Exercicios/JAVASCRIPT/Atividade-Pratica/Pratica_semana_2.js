/*
                        Prática da Semana 2
                        
Elabore um programa para que leia a idade, o tempo de serviço e o valor do último salário recebido de um trabalhador. Como resultado escreva se ele pode ou não se aposentar. E caso ele possa se aposentar calcule e mostre o valor de seu salário de aposentadoria. As condições para aposentadoria são:

Ter pelo menos 65 anos, ou;
Ter trabalhado pelo menos 30 anos, ou;
Ter pelo menos 60 anos e trabalhado pelo menos 25 anos;
Em caso de aposentadoria, o salário desse trabalhador seguirá as seguintes regras:

Caso o tempo de serviço seja maior que 20 anos, seu salário de aposentadoria poderá ser de até 80% do último salário recebido como trabalhador;
Caso o tempo de serviço seja menor ou igual a 20 anos, seu salário de aposentadoria poderá ser de até 60% do último salário recebido como trabalhador;
O valor mínimo será de R$ 1212,00 e o valor máximo será de R$ 7087,22;
*/

const prompt = require("prompt-sync")();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if (idade >= 65 || tempo >= 30 || (idade >= 60 && tempo >= 25)) {
  console.log("Você pode se aposentar");
} else {
  console.log("Você não pode se aposentar");
}

// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
if (tempo > 20) {
  aposentadoria = salario * 0.8;
} else {
  aposentadoria = salario * 0.6;
}

// Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
var ValorMin = 1212.0;
var ValorMax = 7087.22;

if (aposentadoria < ValorMin) {
  aposentadoria = ValorMin;
} else if (aposentadoria > ValorMax) {
  aposentadoria = ValorMax;
}
console.log("Seu salário de aposentado será: R$" + aposentadoria);
