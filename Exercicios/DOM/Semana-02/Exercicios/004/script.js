const tecnologia = document.getElementById("imgTecnologia");
const btnHtml = document.getElementById("btnHTML");
const btnCss = document.getElementById("btnCSS");
const btnJs = document.getElementById("btnJS");

btnHtml.addEventListener("click", tecnologiaHTML);
btnCss.addEventListener("click", tecnologiaCSS);
btnJs.addEventListener("click", tecnologiaJS);
imgTecnologia.addEventListener("click", tecnologiaTodas);

function tecnologiaHTML() {
  imgTecnologia.src = "./img/html.png";
}

function tecnologiaCSS() {
  imgTecnologia.src = "./img/css.png";
}

function tecnologiaJS() {
  imgTecnologia.src = "./img/js.png";
}
