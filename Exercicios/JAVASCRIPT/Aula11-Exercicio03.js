prompt = require("prompt-sync")();

let array1 = [];
let array2 = [];
let array3 = [];

for (i = 0; i < 5; i++) {
  array1.push(parseInt(prompt(`Digite o ${i + 1}º número do ARRAY 1: `)));
  array2.push(parseInt(prompt(`Digite o ${i + 1}º número do ARRAY 2: `)));
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (array1[i] == array2[j]) {
      array3.push(array1[i]);
    }
  }
}

console.log(array3);
