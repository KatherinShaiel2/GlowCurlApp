// =======================
// CLIENTE - RESERVAR
// =======================

function reservar(servicio) {
    let citas = JSON.parse(localStorage.getItem("citas")) || [];

    let nuevaCita = {
        servicio: servicio,
        fecha: "Pendiente",
        hora: "Pendiente",
        estado: "⏳ Pendiente"
    };

    citas.push(nuevaCita);
    localStorage.setItem("citas", JSON.stringify(citas));

    alert("Servicio reservado correctamente");
}


// =======================
// MOSTRAR CITAS (CLIENTE)
// =======================

document.addEventListener("DOMContentLoaded", function () {
    let tabla = document.getElementById("listaCitas");

    if (!tabla) return;

    let citas = JSON.parse(localStorage.getItem("citas")) || [];

    tabla.innerHTML = "";

    if (citas.length === 0) {
        tabla.innerHTML = `
            <tr>
                <td colspan="4">No tienes citas registradas</td>
            </tr>
        `;
        return;
    }

    citas.forEach(cita => {
        tabla.innerHTML += `
            <tr>
                <td>${cita.servicio}</td>
                <td>${cita.fecha}</td>
                <td>${cita.hora}</td>
                <td>${cita.estado}</td>
            </tr>
        `;
    });
});


// =======================
// CERRAR SESIÓN
// =======================

function cerrarSesion() {
    localStorage.removeItem("usuarioActual");
    window.location.href = "../auth/login.html";
}