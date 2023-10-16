let arr = [];
let quadrado = 0;
let somaPar = 0;
let somaImpar = 0;

for (let i = 1; i <= 20; i++) {
  quadrado = i * i;
  console.log(`${i}² = ${quadrado}`);
  arr.push(quadrado);
}

for (let i = 0; i < 20; i++) {
  if (arr[i] % 2 == 0) {
    somaPar += parseInt(arr[i]);
  } else {
    somaImpar += parseInt(arr[i]);
  }
}

console.log("A soma de quadrados pares: ", somaPar);
console.log("A soma de quadrados impares: ", somaImpar);
