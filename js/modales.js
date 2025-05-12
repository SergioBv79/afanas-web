
function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("visible");
    document.body.style.overflow = 'hidden';
  }
}

function cerrarModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("visible");
    document.body.style.overflow = 'auto';
  }
}
