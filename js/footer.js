
document.addEventListener("DOMContentLoaded", function () {
  const base = location.pathname.includes("/proyecto/") || location.pathname.includes("/politica") || location.pathname.includes("/aviso") || location.pathname.includes("/accesibilidad") ? "../" : "";

  const bloqueMapa = `
  <div class="footer-mapa" style="margin-top: 20px;">
    <a href="https://www.google.com/maps/place/Calle+Embalse,+s%2Fn,+11500+El+Puerto+de+Santa+Mar%C3%ADa,+C%C3%A1diz" 
       target="_blank" rel="noopener noreferrer" 
       style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
      <i class="fas fa-map-marker-alt" style="color: #6cc2b3; font-size: 1.3em;"></i>
      <span style="color: #fff; font-weight: bold;">Ver ubicación en el mapa</span>
    </a>
  </div>
`;


const footerHTML = `
<footer class="footer">
  <div class="contenedor-footer">
    <div class="footer-info">
      <p><strong>AFANAS El Puerto y Bahía</strong></p>
      <p>Calle Embalse s/n, 11500 El Puerto de Santa María (Cádiz)</p>
      <p>Teléfono: 956 54 34 33</p>
      <p>Mail: contacto@afanas.com</p>
      ${bloqueMapa}
    </div>
    <div class="footer-enlaces">
      <ul>
        <li><a href="${base}politica-privacidad.html">Política de privacidad</a></li>
        <li><a href="${base}politica-cookies.html">Política de cookies</a></li>
        <li><a href="${base}aviso-legal.html">Aviso legal</a></li>
        <li><a href="${base}accesibilidad.html">Accesibilidad</a></li>
      </ul>
    </div>
    <div class="footer-redes">
      <a href="https://www.facebook.com/people/AFANAS-El-Puerto-Y-Bahía/100079529816686/" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/afanas_pyb/" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://twitter.com/afanas_puerto" target="_blank"><i class="fab fa-x-twitter"></i></a>
      <a href="https://www.youtube.com/@ceepilarvarorota" target="_blank"><i class="fab fa-youtube"></i></a>
    </div>
  </div>
  <div class="footer-copy">
    <p>&copy; 2025 AFANAS El Puerto y Bahía. Todos los derechos reservados.</p>
  </div>
</footer>
`;

  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
});
