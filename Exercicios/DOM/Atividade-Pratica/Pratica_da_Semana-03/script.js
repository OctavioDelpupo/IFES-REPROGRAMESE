(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
        } else {
          inserir();
          form.classList.remove("was-validated");
          form.reset();
        }
        event.preventDefault();
        event.stopPropagation();
      },
      false
    );
  });
})();

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_notebooks")) ?? [];
}

function setLocalStorage(bd_notebooks) {
  localStorage.setItem("bd_notebooks", JSON.stringify(bd_notebooks));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function imgPlacaDeVideo(placa) {
  let imgPlaca = placa;

  if (imgPlaca === "NV") {
    img.src = "/img/geforce-experience.svg";
  }
}

function atualizarTabela() {
  // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_notebooks = getLocalStorage();
  let index = 0;
  for (let notebook of bd_notebooks) {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td >${notebook.nome}</td>
        <td>${notebook.processador}</td>
        <td class="ocultar">${notebook.tipoProcessador}</td>
        <td class="ocultar"> <img src="${notebook.placaDeVideo}" width="45" alt=""></td>
        <td class="ocultar">${notebook.memoria}</td>
        <td class="ocultar">${notebook.armazenamento}GB</td>
        <td class="ocultar">R$ ${notebook.valor}</td>       
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})"><i class="bi bi-trash fs-5"></i></button>
        </td>
    `;
    document.querySelector("#tabela>tbody").appendChild(novaLinha);
    index++;
  }
}

function inserir() {
  // Adaptação da função inserir (10 pontos)
  const notebook = {
    nome: document.getElementById("nome").value,
    processador: document.getElementById("processador").value,
    processador: document.getElementById("processador").value,
    tipoProcessador: document.getElementById("tipoProcessador").value,
    placaDeVideo: document.getElementById("placa").value,
    memoria: document.getElementById("ram").value,
    armazenamento: document.getElementById("hd").value,
    valor: document.getElementById("valor").value,
  };
  const bd_notebooks = getLocalStorage();
  bd_notebooks.push(notebook);
  setLocalStorage(bd_notebooks);
  atualizarTabela();
}

function excluir(index) {
  // Adaptação da função excluir (5 pontos)
  const bd_notebooks = getLocalStorage();
  bd_notebooks.splice(index, 1);
  setLocalStorage(bd_notebooks);
  atualizarTabela();
}

function editar() {
  console.log("teste");
}

function validarNotebook() {
  // Adaptação da função validar (10 pontos)
  const bd_notebook = getLocalStorage();
  for (let notebook of bd_notebook) {
    if (nome.value == notebook.nome) {
      nome.setCustomValidity("Este notebook já existe!");
      feedbackNotebook.innerText = "Este notebook já existe!";
      return false;
    } else {
      nome.setCustomValidity("");
      feedbackNotebook.innerText = "Informe o notebook corretamente.";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const notebook = document.getElementById("nome");
const feedbackNotebook = document.getElementById("feedbackNotebook");
notebook.addEventListener("input", validarNotebook);
