
const botaoAbrir = document.getElementById("abrirSobre");
const modal = document.getElementById("modalSobre");
const botaoFechar = modal.querySelector(".fechar");

botaoAbrir.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; 
});

botaoFechar.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; 
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});