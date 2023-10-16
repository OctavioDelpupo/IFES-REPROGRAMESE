const prompt = require("prompt-sync")();

var numInteiro;
var soma = 0;
var media = 0;
var arr = [];

for (let i = 0; i < 8; i++) {
  numInteiro = parseInt(prompt(`Digite ${i + 1}º número inteiro: `));
  arr.push(numInteiro);
  soma += numInteiro;
}

media = soma / 8;
console.log("ARRAY = ", arr);
console.log("SOMA = ", soma);
console.log("MEDIA = ", media.toFixed(2));

for (let i = 0; i < 7; i++) {
  if (arr[i] > media) {
    console.log(arr[i]);
  }
}
