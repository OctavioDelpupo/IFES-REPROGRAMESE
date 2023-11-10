const random = document.getElementById("btnRandom");

random.addEventListener("click", function () {
  const aleatorio = parseInt(Math.random() * 100 + 1);
  const novaTabela = document.createElement("tr");
  novaTabela.innerHTML = `<td>${aleatorio}</td>`;
  document.querySelector("#tabela1").appendChild(novaTabela);
});
