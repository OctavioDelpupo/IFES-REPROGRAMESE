var number = 0;
var soma = 0;
var perfect = 0;

while (perfect < 3) {
  number++;
  soma = 0;
  for (let i = 0; i <= number - 1; i++) {
    if (number % i == 0) {
      soma += i;
    }
  }
  if (soma == number) {
    console.log(`${number} e um numero perfeito`);
    perfect++;
  }
}
