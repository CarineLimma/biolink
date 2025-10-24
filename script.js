document.getElementById("abrirSobre").onclick = function() {
  document.getElementById("modalSobre").style.display = "block";
}

document.querySelector(".fechar").onclick = function() {
  document.getElementById("modalSobre").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("modalSobre")) {
    document.getElementById("modalSobre").style.display = "none";
  }
}
