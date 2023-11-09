const btn = document.getElementById("btnCalcular");
btn.addEventListener("click", calcular);

function calcular() {
  const altura = parseFloat(document.getElementById("txtAltura").value);
  const peso = parseFloat(document.getElementById("txtPeso").value);
  const resultado = document.getElementById("divIMC");

  let imc = peso / (altura * altura);
  resultado.innerHTML = `O IMC é: <strong>${imc.toFixed(2)}</strong>`;
}
