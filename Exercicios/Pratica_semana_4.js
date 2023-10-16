const prompt = require("prompt-sync")();

let alturas = [];

for (let i = 0; i < 10; i++) {
  alturas.push(parseFloat(prompt(`Digite a ${i + 1}ª Altura: `)));
}

for (let i = 0; i < 10; i++) {
  let cont = 0;
  for (let j = 0; j < 10; j++) {
    if (alturas[i] > alturas[j]) {
      cont++;
    }
  }
  console.log(`Aluno ${i} maior que ${cont} aluno(s)`);
}
