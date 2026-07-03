// ===============================
// ABRIR MENÚ
// ===============================
function toggleMenu() {

    let sidebar = document.getElementById("sidebar");
    let overlay = document.querySelector(".overlay");

    if(sidebar) sidebar.classList.toggle("activo");
    if(overlay) overlay.classList.toggle("activo");

}

// ===============================
// CERRAR MENÚ
// ===============================
function cerrarMenu() {

    let sidebar = document.getElementById("sidebar");
    let overlay = document.querySelector(".overlay");

    if(sidebar) sidebar.classList.remove("activo");
    if(overlay) overlay.classList.remove("activo");

}

// ===============================
// CARGAR CONFIGURACIÓN
// ===============================
document.addEventListener("DOMContentLoaded", function(){

    let config = JSON.parse(localStorage.getItem("configuracion"));

    if(!config) return;

    // Nombre empresa
    let titulo = document.getElementById("nombreEmpresa");

    if(titulo){

        titulo.innerHTML = config.empresa || "Glow Curl App";

    }

    // Tema
    switch(config.tema){

        case "rosa":

            document.documentElement.style.setProperty("--sidebar","#d46aa3");
            document.documentElement.style.setProperty("--boton","#d46aa3");
            document.documentElement.style.setProperty("--fondo","#fdeaf3");

        break;

        case "beige":

            document.documentElement.style.setProperty("--sidebar","#b68b63");
            document.documentElement.style.setProperty("--boton","#b68b63");
            document.documentElement.style.setProperty("--fondo","#f5eee6");

        break;

        default:

            document.documentElement.style.setProperty("--sidebar","#d89c7d");
            document.documentElement.style.setProperty("--boton","#d89c7d");
            document.documentElement.style.setProperty("--fondo","#f4e4da");

    }

});