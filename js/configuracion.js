// ===============================
// CARGAR CONFIGURACIÓN
// ===============================

window.onload = function () {

    let config = JSON.parse(localStorage.getItem("configuracion"));

    if(config){

        document.getElementById("empresa").value = config.empresa;
        document.getElementById("correo").value = config.correo;
        document.getElementById("telefono").value = config.telefono;
        document.getElementById("direccion").value = config.direccion;
        document.getElementById("horaInicio").value = config.horaInicio;
        document.getElementById("horaFin").value = config.horaFin;
        document.getElementById("tema").value = config.tema;

        aplicarTema(config.tema);

    }

}


// ===============================
// GUARDAR CONFIGURACIÓN
// ===============================

function guardarConfiguracion(){

    let configuracion={

        empresa:document.getElementById("empresa").value,

        correo:document.getElementById("correo").value,

        telefono:document.getElementById("telefono").value,

        direccion:document.getElementById("direccion").value,

        horaInicio:document.getElementById("horaInicio").value,

        horaFin:document.getElementById("horaFin").value,

        tema:document.getElementById("tema").value

    };

    localStorage.setItem(
        "configuracion",
        JSON.stringify(configuracion)
    );

    aplicarTema(configuracion.tema);

    alert("Configuración guardada correctamente.");

}


// ===============================
// RESTABLECER
// ===============================

function restablecerConfiguracion(){

    if(confirm("¿Desea restablecer la configuración?")){

        localStorage.removeItem("configuracion");

        location.reload();

    }

}


// ===============================
// CAMBIAR TEMA
// ===============================

function aplicarTema(tema){

    if(tema=="rosa"){

        document.documentElement.style.setProperty("--sidebar","#d46aa3");
        document.documentElement.style.setProperty("--boton","#d46aa3");
        document.documentElement.style.setProperty("--fondo","#fdeaf3");

    }

    else if(tema=="beige"){

        document.documentElement.style.setProperty("--sidebar","#b68b63");
        document.documentElement.style.setProperty("--boton","#b68b63");
        document.documentElement.style.setProperty("--fondo","#f5eee6");

    }

    else{

        document.documentElement.style.setProperty("--sidebar","#d89c7d");
        document.documentElement.style.setProperty("--boton","#d89c7d");
        document.documentElement.style.setProperty("--fondo","#f4e4da");

    }

}