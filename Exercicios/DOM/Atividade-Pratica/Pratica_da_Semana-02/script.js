var cachorros = [
  { nome: "Thor", imagem: "dog1" },
  { nome: "Zeca", imagem: "dog2" },
  { nome: "Zeus", imagem: "dog3" },
  { nome: "Pingo", imagem: "dog4" },
];

var gatos = [
  { nome: "Dunga", imagem: "cat1" },
  { nome: "Mika", imagem: "cat2" },
  { nome: "Conan", imagem: "cat3" },
  { nome: "Messi", imagem: "cat4" },
];

// Selecionar elemento 'select_animais' ( 1 ponto)
let selectAnimais = document.getElementById("select_animais");
// Selecionar elemento 'container' ( 1 ponto)
let selectContainer = document.getElementById("container");
// Selecionar elemento 'nome' ( 1 ponto)
let selectNome = document.getElementById("nome");
// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
selectAnimais.addEventListener("input", listarAnimais);
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
selectContainer.addEventListener("mouseover", mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
selectContainer.addEventListener("mouseout", limparNome);

function listarAnimais() {
  // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  let animais = selectAnimais.value === "dog" ? cachorros : gatos;

  for (const animal of animais) {
    let img = document.createElement("img");
    let caminho = `./img/${animal.imagem}.jpg`;
    img.setAttribute("src", caminho);
    img.setAttribute("alt", animal.nome);
    selectContainer.appendChild(img);
  }
}

function mostrarNome(e) {
  // Implementação da função (4 pontos)
  // Implementar...
  nome.innerText = `Nome do animal: ${event.target.alt}`;
}

function limparNome() {
  nome.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}
