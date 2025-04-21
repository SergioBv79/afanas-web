// --------------------------------------
// Carrusel de imágenes manual
// --------------------------------------
let indiceSlide = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(n) {
  slides[indiceSlide]?.classList.remove("active");
  indiceSlide = (n + slides.length) % slides.length;
  slides[indiceSlide]?.classList.add("active");
}

function moverSlide(n) {
  mostrarSlide(indiceSlide + n);
}

// --------------------------------------
// Efectos al hacer scroll:
// 1. Ocultar menú de redes sociales
// 2. Reducir altura y logo de la franja superior
// --------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const menuRedes = document.querySelector('.menu-redes');
  const menuSuperior = document.querySelector('.menu-superior');
  const body = document.body;

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Ocultar o mostrar menú de redes y reducir cabecera
    if (scrollTop > lastScrollTop) {
      menuRedes?.classList.add('oculto');
      menuSuperior?.classList.add('reducido');
      body.classList.add("scroll-down");
    } else {
      menuRedes?.classList.remove('oculto');
      menuSuperior?.classList.remove('reducido');
      body.classList.remove("scroll-down");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in-up");
  elementos.forEach(el => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 300);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-down').forEach(el => {
    el.classList.add('visible');
  });
});


// --------------------------------------
// script historia.html
// --------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const frases = document.querySelectorAll('.frase-historia');
  frases.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(-50px)';
    setTimeout(() => {
      el.style.transition = 'all 1.2s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 400);
  });
});
