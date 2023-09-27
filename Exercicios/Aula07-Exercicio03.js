prompt = require("prompt-sync")();

var nomeCliente = String(prompt("Nome do Cliente: "));
var varloDaCompra = parseFloat(prompt("Valor da compra R$: "));

if (varloDaCompra > 1000) {
  var desconto = varloDaCompra / 0.5 - varloDaCompra;
} else if (varloDaCompra < 5000) {
  var desconto = varloDaCompra - varloDaCompra / 0.1;
} else {
  var desconto = varloDaCompra - varloDaCompra / 0.15;
}

console.log("Nome : ", nomeCliente, "\nDesconto : ", desconto);
