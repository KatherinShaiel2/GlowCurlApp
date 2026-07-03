// ===============================
// ABRIR MENÚ
// ===============================
function toggleMenu() {

    document.getElementById("sidebar").classList.toggle("activo");
    document.querySelector(".overlay").classList.toggle("activo");

}

// ===============================
// CERRAR MENÚ
// ===============================
function cerrarMenu() {

    document.getElementById("sidebar").classList.remove("activo");
    document.querySelector(".overlay").classList.remove("activo");

}

// ===============================
// CARGAR CONFIGURACIÓN
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    let config = JSON.parse(localStorage.getItem("configuracion"));

    if (!config) return;

    // Cambiar nombre de la empresa
    let titulo = document.getElementById("nombreEmpresa");

    if (titulo) {

        titulo.innerText = config.empresa || "Glow Curl App";

    }

    // Aplicar tema
    if (config.tema === "rosa") {

        document.documentElement.style.setProperty("--sidebar", "#d46aa3");
        document.documentElement.style.setProperty("--boton", "#d46aa3");
        document.documentElement.style.setProperty("--fondo", "#fdeaf3");

    }

    else if (config.tema === "beige") {

        document.documentElement.style.setProperty("--sidebar", "#b68b63");
        document.documentElement.style.setProperty("--boton", "#b68b63");
        document.documentElement.style.setProperty("--fondo", "#f5eee6");

    }

    else {

        document.documentElement.style.setProperty("--sidebar", "#d89c7d");
        document.documentElement.style.setProperty("--boton", "#d89c7d");
        document.documentElement.style.setProperty("--fondo", "#f4e4da");

    }

});