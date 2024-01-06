const prompt = require("prompt-sync")();

function generateMessage(name, age, city) {
  const message = `Olá, meu nome é ${name}, tenho ${age} anos e moro em ${city}.`;
  return message;
}
const personName = prompt("Nome: ");
const personAge = prompt("Idade: ");
const personCity = prompt("Cidade: : ");
const formattedMessage = generateMessage(personName, personAge, personCity);
console.log(formattedMessage);
