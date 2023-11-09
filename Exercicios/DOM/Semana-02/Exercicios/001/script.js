area1.addEventListener("mousedown", mouseDown);
area1.addEventListener("mouseup", mouseUp);

area2.addEventListener("mouseover", mouseover);
area2.addEventListener("mouseout", mouseout);

function mouseDown() {
  document.getElementById("area1").innerHTML = "Hello World";
  area1.style.background = "#1ec5e5";
}

function mouseUp() {
  document.getElementById("area1").innerHTML = "Obrigado!";
  area1.style.background = "#f04028";
}

function mouseover() {
  document.getElementById("area2").innerHTML = "Obrigado!";
}

function mouseout() {
  document.getElementById("area2").innerHTML = "Passe o mouse!";
}
