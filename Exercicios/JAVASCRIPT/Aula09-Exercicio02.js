prompt = require("prompt-sync")();

for (var i = 1; i <= 100; i++) {
  var result = i % 10 === 0;
  if (result == true) {
    console.log("Múltiplo de 10", i);
  } else {
    console.log(i);
  }
}
