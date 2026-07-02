function toggleMenu() {

    document.getElementById("sidebar").classList.toggle("activo");
    document.querySelector(".overlay").classList.toggle("activo");

}

function cerrarMenu() {

    document.getElementById("sidebar").classList.remove("activo");
    document.querySelector(".overlay").classList.remove("activo");

}