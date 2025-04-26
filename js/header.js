
document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header class="cabecera">
      <div class="banner-top">
        <i class="fas fa-heart" aria-hidden="true"></i> “Creemos en las personas. Apostamos por sus capacidades.”
      </div>
      <div class="cabecera-contenido">
        <div class="menu-superior">
          <div class="logo-superior">
            <a href="../index.html" class="logo"><img src="../icons/Logo bandera (1).png" alt="Logo AFANAS"></a>
          </div>
           <!-- 🔵 AQUÍ METO EL BOTÓN HAMBURGUESA PARA DISEÑO RESPONSIVE Y ZOOM-->
  <button class="menu-hamburguesa" id="menu-hamburguesa" aria-label="Abrir menú">
    ☰
  </button>
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
});

// 🔵 LÓGICA DEL BOTÓN HAMBURGUESA
document.addEventListener('DOMContentLoaded', function () {
  const botonHamburguesa = document.getElementById('menu-hamburguesa');
  const menuPrincipal = document.querySelector('.menu-principal');
  const menuSuperior = document.querySelector('.menu-superior');

  if (botonHamburguesa && menuPrincipal && menuSuperior) {
    botonHamburguesa.addEventListener('click', function () {
      menuPrincipal.classList.toggle('activo');
      menuSuperior.classList.toggle('activo'); // 🔵 También ocultamos/mostramos menú superior
    });
  }
});
