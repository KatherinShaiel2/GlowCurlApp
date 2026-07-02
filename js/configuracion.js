window.addEventListener(
"load",
cargarConfiguracion
);


//======================
// GUARDAR
//======================

function guardarConfiguracion(){

const configuracion={

empresa:
document.getElementById("empresa").value,

correo:
document.getElementById("correo").value,

telefono:
document.getElementById("telefono").value,

direccion:
document.getElementById("direccion").value,

horaInicio:
document.getElementById("horaInicio").value,

horaFin:
document.getElementById("horaFin").value,

tema:
document.getElementById("tema").value

};


localStorage.setItem(

"configuracion",

JSON.stringify(
configuracion
)

);

actualizarEmpresa();

aplicarTema();

alert(
"✅ Configuración guardada"
);

}



//======================
// CARGAR
//======================

function cargarConfiguracion(){

const datos=

JSON.parse(

localStorage.getItem(
"configuracion"
)

);


if(!datos)return;


document.getElementById(
"empresa"
).value=

datos.empresa || "";


document.getElementById(
"correo"
).value=

datos.correo || "";


document.getElementById(
"telefono"
).value=

datos.telefono || "";


document.getElementById(
"direccion"
).value=

datos.direccion || "";


document.getElementById(
"horaInicio"
).value=

datos.horaInicio || "";


document.getElementById(
"horaFin"
).value=

datos.horaFin || "";


document.getElementById(
"tema"
).value=

datos.tema || "normal";


actualizarEmpresa();

aplicarTema();

}



//======================
// CAMBIAR EMPRESA
//======================

function actualizarEmpresa(){

const datos=

JSON.parse(

localStorage.getItem(
"configuracion"
)

);

if(

datos &&
datos.empresa

){

document.querySelector(
".sidebar h2"
)

.textContent=

datos.empresa;

}

}



//======================
// CAMBIAR TEMA
//======================

function aplicarTema(){

const datos=

JSON.parse(

localStorage.getItem(
"configuracion"
)

);

if(!datos)return;


// TEMA ACTUAL

if(datos.tema==="normal"){

document.documentElement.style.setProperty(
"--fondo",
"#f4e4da"
);

document.documentElement.style.setProperty(
"--sidebar",
"#d89c7d"
);

document.documentElement.style.setProperty(
"--card",
"white"
);

document.documentElement.style.setProperty(
"--texto",
"#333"
);

document.documentElement.style.setProperty(
"--boton",
"#d89c7d"
);

}


// TEMA ROSA

else if(datos.tema==="rosa"){

document.documentElement.style.setProperty(
"--fondo",
"#ffe4ee"
);

document.documentElement.style.setProperty(
"--sidebar",
"#f28bb2"
);

document.documentElement.style.setProperty(
"--card",
"#fff5f8"
);

document.documentElement.style.setProperty(
"--texto",
"#6d3f52"
);

document.documentElement.style.setProperty(
"--boton",
"#ec75a4"
);

}


// TEMA BEIGE

else if(datos.tema==="beige"){

document.documentElement.style.setProperty(
"--fondo",
"#f5ede3"
);

document.documentElement.style.setProperty(
"--sidebar",
"#c8aa8c"
);

document.documentElement.style.setProperty(
"--card",
"#fffaf4"
);

document.documentElement.style.setProperty(
"--texto",
"#5d4b3d"
);

document.documentElement.style.setProperty(
"--boton",
"#b68f70"
);

}

}



//======================
// BORRAR
//======================

function restablecerConfiguracion(){

if(

confirm(
"¿Desea borrar la configuración?"
)

){

localStorage.removeItem(
"configuracion"
);

location.reload();

}

}