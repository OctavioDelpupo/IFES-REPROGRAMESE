const html = document.querySelector("html");

document.getElementById("btnSwitch").addEventListener("click", () => {
  let tema;
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    temaLight();
    tema = "light";
  } else {
    const nome = document.getElementById("nomeTema");
    temaDark();
    tema = "dark";
  }
  localStorage.setItem("tema", JSON.stringify(tema));
});

function temaLight() {
  const nome = document.getElementById("nomeTema");
  const btnSwitch = document.getElementById("btnSwitch");
  document.documentElement.setAttribute("data-bs-theme", "light");
  nome.setAttribute("class", "form-check-label fs-4 fw-bold text-dark ms-2");
  nome.innerText = "Tema Light";
  btnSwitch.setAttribute("class", "form-check-input fs-4 ");
}

function temaDark() {
  const nome = document.getElementById("nomeTema");
  const btnSwitch = document.getElementById("btnSwitch");
  const dark = "dark";
  document.documentElement.setAttribute("data-bs-theme", dark);
  nome.setAttribute("class", "form-check-label fs-4 fw-bold text-light ms-2");
  nome.innerText = "Tema Dark";
  btnSwitch.setAttribute("class", "form-check-input fs-4 ");
}

function getTema() {
  let tema = JSON.parse(localStorage.getItem("tema"));
  document.documentElement.setAttribute("data-bs-theme", tema);
}

getTema();
