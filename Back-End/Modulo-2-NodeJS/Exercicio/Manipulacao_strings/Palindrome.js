const prompt = require("prompt-sync")();
let palavras = [];

function isPalindrome(word) {
  const newWord = word.toLowerCase();
  const reversedWord = newWord.split("").reverse().join("");
  palavras.push(reversedWord);

  return newWord === reversedWord;
}

do {
  console.log("\nPARA SAIR DIGITE NÚMERO 0\n");
  palavra = prompt("Digite uma palavra: ");
  isPalindrome(palavra);

  console.clear();
} while (palavra !== "0");

palavras.pop();

palavras.forEach((word) => {
  const result = isPalindrome(word) ? "é um palíndromo" : "não é um palíndromo";
  console.log(`A palavra "${word}" ${result}.`);
});

// function isPalindrome(word) {
//   // Transformar em minúsculas para comparação
//   const cleanWord = word.toLowerCase();
//   // Reverter a string
//   const reversedWord = cleanWord.split("").reverse().join("");
//   // Verificar se a palavra limpa é igual à palavra revertida
//   return cleanWord === reversedWord;
// }
// // Testar com algumas palavras
// const wordsToTest = [
//   "arara",
//   "banana",
//   "radar",
//   "javascript",
//   "reconocer",
//   "palindrome",
// ];

// wordsToTest.forEach((word) => {
//   const result = isPalindrome(word) ? "é um palíndromo" : "não é um palíndromo";
//   console.log(`A palavra "${word}" ${result}.`);
// });
