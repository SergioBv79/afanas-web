document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cookie-banner-container");

  if (container && !localStorage.getItem("cookies-set")) {
    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML = `
      <div class="cookie-content">
        <p>🍪 Utilizamos cookies para mejorar tu experiencia y analizar el uso de nuestro sitio. Puedes aceptar todas, rechazarlas o configurarlas.</p>
        <div class="cookie-buttons">
          <button id="accept-cookies">Aceptar todas</button>
          <button id="reject-cookies">Rechazar</button>
          <button id="configure-cookies">Configurar</button>
        </div>
      </div>
    `;
    container.appendChild(banner);

    // Eventos una vez el banner ya está en el DOM
    document.getElementById("accept-cookies").addEventListener("click", () => {
      localStorage.setItem("cookies-set", "accepted");
      localStorage.setItem("cookiesEstadisticas", true);
      localStorage.setItem("cookiesMarketing", true);
      banner.remove();
      cargarScriptsDeTerceros();
    });

    document.getElementById("reject-cookies").addEventListener("click", () => {
      localStorage.setItem("cookies-set", "rejected");
      localStorage.setItem("cookiesEstadisticas", false);
      localStorage.setItem("cookiesMarketing", false);
      banner.remove();
    });

    document.getElementById("configure-cookies").addEventListener("click", () => {
      const settingsContainer = document.getElementById("cookie-settings-container");

      if (document.querySelector(".cookie-settings")) return; // Evita duplicar

      const settings = document.createElement("div");
      settings.className = "cookie-settings";
      settings.innerHTML = `
        <div class="cookie-settings-content">
          <h3>Configuración de cookies</h3>
          <p>Selecciona qué tipo de cookies quieres permitir:</p>
          <label><input type="checkbox" disabled checked> Cookies necesarias (siempre activas)</label><br>
          <label><input type="checkbox" id="cookiesEstadisticas"> Cookies estadísticas</label><br>
          <label><input type="checkbox" id="cookiesMarketing"> Cookies de marketing</label><br>
          <div class="cookie-settings-buttons">
            <button id="save-cookie-settings">Guardar preferencias</button>
            <button id="cancel-cookie-settings">Cancelar</button>
          </div>
        </div>
      `;
      settingsContainer.appendChild(settings);

      // Guardar preferencias
      document.getElementById("save-cookie-settings").addEventListener("click", () => {
        const estadisticas = document.getElementById("cookiesEstadisticas").checked;
        const marketing = document.getElementById("cookiesMarketing").checked;

        localStorage.setItem("cookies-set", "custom");
        localStorage.setItem("cookiesEstadisticas", estadisticas);
        localStorage.setItem("cookiesMarketing", marketing);

        settings.remove();
        banner.remove();
        cargarScriptsDeTerceros();
      });

      // Cancelar configuración
      document.getElementById("cancel-cookie-settings").addEventListener("click", () => {
        settings.remove();
      });
    });
  } else {
    // Si ya se aceptaron cookies en visitas anteriores, cargar lo necesario
    if (localStorage.getItem("cookies-set") === "accepted" || localStorage.getItem("cookies-set") === "custom") {
      cargarScriptsDeTerceros();
    }
  }
});

function cargarScriptsDeTerceros() {
  // ✅ GOOGLE ANALYTICS
  if (localStorage.getItem("cookiesEstadisticas") === "true") {
    const analyticsID = "G-XXXXXXXXXX"; // ← TU ID AQUÍ cuando publiques

    const gtagScript = document.createElement("script");
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsID}`;
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${analyticsID}');
    `;
    document.head.appendChild(inlineScript);
  }

  // ✅ Desbloqueo de mapas y otros contenidos externos
  if (localStorage.getItem("cookiesMarketing") === "true") {
    document.querySelectorAll(".bloqueado-por-cookies").forEach(el => {
      const realContent = el.getAttribute("data-html");
      if (realContent) el.outerHTML = realContent;
    });
  }
}




document.getElementById("abrir-configuracion-cookies")?.addEventListener("click", () => {
  if (document.querySelector(".cookie-settings")) return;

  const settingsContainer = document.getElementById("cookie-settings-container");

  const settings = document.createElement("div");
  settings.className = "cookie-settings";
  settings.innerHTML = `
    <div class="cookie-settings-content">
      <h3>Configuración de cookies</h3>
      <p>Selecciona qué tipo de cookies quieres permitir:</p>
      <label><input type="checkbox" disabled checked> Cookies necesarias (siempre activas)</label><br>
      <label><input type="checkbox" id="cookiesEstadisticas"> Cookies estadísticas</label><br>
      <label><input type="checkbox" id="cookiesMarketing"> Cookies de marketing</label><br>
      <div class="cookie-settings-buttons">
        <button id="save-cookie-settings">Guardar preferencias</button>
        <button id="cancel-cookie-settings">Cancelar</button>
      </div>
    </div>
  `;
  settingsContainer.appendChild(settings);

  document.getElementById("cookiesEstadisticas").checked = localStorage.getItem("cookiesEstadisticas") === "true";
  document.getElementById("cookiesMarketing").checked = localStorage.getItem("cookiesMarketing") === "true";

  document.getElementById("save-cookie-settings").addEventListener("click", () => {
    const estadisticas = document.getElementById("cookiesEstadisticas").checked;
    const marketing = document.getElementById("cookiesMarketing").checked;

    localStorage.setItem("cookies-set", "custom");
    localStorage.setItem("cookiesEstadisticas", estadisticas);
    localStorage.setItem("cookiesMarketing", marketing);

    settings.remove();
    cargarScriptsDeTerceros();
  });

  document.getElementById("cancel-cookie-settings").addEventListener("click", () => {
    settings.remove();
  });
});
