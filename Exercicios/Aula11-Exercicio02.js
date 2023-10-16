const prompt = require("prompt-sync")();

let array1 = [];
let array2 = [];
let array3 = [];
let soma = 0;

for (let i = 0; i <= 3; i++) {
  array1.push(
    parseInt(prompt(`Digite o ${i + 1}º número inteiro do array1: `))
  );
  array2.push(
    parseInt(prompt(`Digite o ${i + 1}º número inteiro do array2: `))
  );

  let soma = array1[i] + array2[i];
  array3.push(soma);
}

console.log(array3);
