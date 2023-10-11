prompt = require("prompt-sync")();

prime = 0;
let endSystem = null;
let validation = "";
do {
  let number = parseInt(
    prompt("Digite um numero inteiro positivo " + validation + ": ")
  );

  if (number < 1 || isNaN(number)) {
    validation = "valido";
  } else {
    for (i = 1; i <= number; i++) {
      divisores = 0;
      for (j = 1; j <= i; j++) {
        if (i % j == 0) {
          divisores = divisores + 1;
        }
      }
      if (divisores == 2) {
        prime += 1;
        endSystem = true;
      }
    }
    console.log(
      "A quantidade de números primos entre 1 e",
      number,
      "é:",
      prime
    );
  }
} while (endSystem != true);
