
document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header class="cabecera">
      <div class="banner-top">
        <i class="fas fa-heart" aria-hidden="true"></i> “Creemos en las personas. Apostamos por sus capacidades.”
      </div>
      <button class="menu-hamburguesa" id="menu-hamburguesa" aria-label="Abrir menú">
        ☰
      </button>
      <div class="cabecera-contenido">
        <div class="menu-superior">
          <div class="logo-superior">
            <a href="../index.html" class="logo"><img src="../icons/Logo bandera (1).png" alt="Logo AFANAS"></a>
          </div>
          <ul>
            <li><a href="#"><i class="fas fa-newspaper"></i> Actualidad</a></li>
            <li><a href="#"><i class="fas fa-bullhorn"></i> Prensa</a></li>
            <li><a href="#"><i class="fas fa-pen-nib"></i> Blog</a></li>
            <li><a href="#"><i class="fas fa-network-wired"></i> Pertenecemos a</a></li>
            <li><a href="#"><i class="fas fa-award"></i> Premios y reconocimientos</a></li>
            <li><a href="#"><i class="fas fa-envelope"></i> Contacto</a></li>
            <li><a href="#"><i class="fas fa-briefcase"></i> Trabaja con nosotros</a></li>
          </ul>
        </div>
        <div class="linea-separadora"></div>
        <div class="menu-principal">
          <nav>
            <ul>
              <li class="submenu">
                <a href="#"><i class="fas fa-users" style="color:#6cc2b3;"></i> El proyecto</a>
                <ul class="submenu-lista">
                  <li><a href="../proyecto/quienes-somos.html">Quiénes somos</a></li>
                  <li><a href="../proyecto/mision-vision.html">Misión, Visión y Valores</a></li>
                  <li><a href="../proyecto/historia.html">Historia</a></li>
                  <li><a href="../proyecto/transparencia.html">Transparencia</a></li>
                  <li><a href="../proyecto/equipo.html">Equipo</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="#"><i class="fas fa-hand-holding-heart" style="color:#f06;"></i> Ámbito social</a>
                <ul class="submenu-lista">
                  <li><a href="#">Discapacidad intelectual</a></li>
                  <li><a href="#">Atención a menores</a></li>
                  <li><a href="#">Personas mayores</a></li>
                  <li><a href="#">Atención temprana</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="#"><i class="fas fa-industry" style="color:#00bcd4;"></i> Ámbito empresarial</a>
                <ul class="submenu-lista">
                  <li><a href="#">Centros especiales de empleo</a></li>
                  <li><a href="#">Servicios productivos</a></li>
                  <li><a href="#">Tienda online</a></li>
                </ul>
              </li>
              <li><a href="#"><i class="fas fa-map-marked-alt" style="color:#9c27b0;"></i> Visitas</a></li>
              <li class="submenu">
                <a href="#"><i class="fas fa-hands-helping" style="color:#ff7043;"></i> Colabora con nosotros</a>
                <ul class="submenu-lista">
                  <li><a href="#">Voluntariado</a></li>
                  <li><a href="#">Hazte socio</a></li>
                  <li><a href="#">Haz tu donación</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="#"><i class="fas fa-leaf" style="color:#4caf50;"></i> RSC y Sostenibilidad</a>
                <ul class="submenu-lista">
                  <li><a href="#">Responsabilidad social</a></li>
                  <li><a href="#">Sostenibilidad</a></li>
                  <li><a href="#">Alianzas</a></li>
                </ul>
              </li>
              <li><a href="#"><i class="fas fa-box" style="color:#f5a623;"></i> Tienda online</a></li>
            </ul>
          </nav>
        </div>
        <div class="menu-redes">
          <span class="siguenos"><i class="fas fa-handshake" aria-hidden="true"></i> Síguenos:</span>
          <ul>
            <li><a href="https://www.facebook.com/people/AFANAS-El-Puerto-Y-Bah%C3%ADa/100079529816686/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.instagram.com/afanas_pyb/" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://twitter.com/afanas_puerto" target="_blank"><i class="fab fa-x-twitter"></i></a></li>
            <li><a href="https://www.youtube.com/@ceepilarvarorota" target="_blank"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
        <div class="linea-separadora"></div>
      </div>
    </header>
  `;

  const header = document.createElement("div");
  header.innerHTML = headerHTML;
  document.body.insertBefore(header, document.body.firstChild);

  const menuOverlay = document.createElement('div');
  menuOverlay.id = 'menu-overlay';

  const esIndex = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
  const ruta = esIndex ? "" : "../";

  menuOverlay.innerHTML = `
  <div class="banner-responsive">“Creemos en las personas. Apostamos por sus capacidades.”</div>
  <div class="menu-overlay-contenido">
    <div class="cabecera-menu-responsive">
      <div class="logo-menu-responsive">
        <a href="${ruta}index.html">
          <img src="${ruta}icons/Logo bandera (1).png" alt="Logotipo AFANAS">
        </a>
      </div>
      <button id="cerrar-menu-overlay" aria-label="Cerrar menú">✕</button>
    </div>
    <ul class="menu-principal-responsive">
      <li class="item-con-submenu">
        <span class="desplegable">El proyecto <span class="flecha flecha-desplegable">&#62;</span></span>
        <ul class="submenu-responsive">
          <li><a href="${ruta}proyecto/quienes-somos.html">Quiénes somos</a></li>
          <li><a href="${ruta}proyecto/mision-vision.html">Misión, Visión y Valores</a></li>
          <li><a href="${ruta}proyecto/historia.html">Historia</a></li>
          <li><a href="${ruta}proyecto/transparencia.html">Transparencia</a></li>
          <li><a href="${ruta}proyecto/equipo.html">Equipo</a></li>
        </ul>
      </li>
      <li><span class="desplegable">Ámbito social <span class="flecha">&#62;</span></span></li>
      <li><span class="desplegable">Ámbito empresarial <span class="flecha">&#62;</span></span></li>
      <li><span class="desplegable">Visitas <span class="flecha">&#62;</span></span></li>
      <li><span class="desplegable">Colabora con nosotros <span class="flecha">&#62;</span></span></li>
      <li><span class="desplegable">RSC y Sostenibilidad <span class="flecha">&#62;</span></span></li>
      <li><span class="desplegable">Tienda online <span class="flecha">&#62;</span></span></li>
    </ul>
    <hr class="separador-menu-responsive" />
    <ul class="menu-secundario-responsive">
      <li><a href="#">Actualidad</a></li>
      <li><a href="#">Prensa</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Pertenecemos a</a></li>
      <li><a href="#">Premios y reconocimientos</a></li>
      <li><a href="#">Contacto</a></li>
      <li><a href="#">Trabaja con nosotros</a></li>
    </ul>
  </div>`;

  document.body.appendChild(menuOverlay);
});

document.addEventListener('DOMContentLoaded', function () {
  const botonHamburguesa = document.getElementById('menu-hamburguesa');
  const menuOverlay = document.getElementById('menu-overlay');
  const cerrarBtn = document.getElementById('cerrar-menu-overlay');

  botonHamburguesa.addEventListener('click', function () {
    menuOverlay.classList.add('activo');
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("desplegable") || e.target.closest('.desplegable')) {
      const target = e.target.closest('.desplegable');
      const submenu = target.nextElementSibling;
      const flecha = target.querySelector(".flecha-desplegable");
      const isVisible = submenu.style.display === "block";

      document.querySelectorAll(".submenu-responsive").forEach(s => s.style.display = "none");
      document.querySelectorAll(".flecha-desplegable").forEach(f => f.style.visibility = "visible");

      if (!isVisible) {
        submenu.style.display = "block";
        if (flecha) flecha.style.visibility = "hidden";
      }
    }
  });

  cerrarBtn.addEventListener('click', function () {
    menuOverlay.classList.remove('activo');
  });
});
