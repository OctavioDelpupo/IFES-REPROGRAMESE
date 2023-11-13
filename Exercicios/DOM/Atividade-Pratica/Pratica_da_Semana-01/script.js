// Selecionar todos elementos da classe 'produto_preco'
const lists = document.querySelectorAll(".produto_preco");

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
var valorTotal = 0;

for (let valor of lists) {
  valorTotal += parseFloat(valor.innerText);
}

// Escrever no conteúdo da página o valor da soma
document.write(`TOTAL: R$ ${valorTotal}`);
