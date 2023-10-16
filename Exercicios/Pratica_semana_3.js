var n = 1;
var pares = 0;
var impares = 0;

for (i = 1; i <= 20; i++) {
  n = i ** 2;
  console.log(n);
  if (n % 2 == 0) {
    pares += n;
  } else if (n % 2 != 0) {
    impares += n;
  }
}
console.log("A soma de quadrados pares: ", pares);
console.log("A soma de quadrados impares: ", impares);
