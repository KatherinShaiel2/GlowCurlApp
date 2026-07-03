// ======================================
// GLOW CURL APP
// CLIENTES.JS
// PARTE 1
// ======================================



// ======================================
// USUARIO ACTUAL
// ======================================

function getUsuario(){

return JSON.parse(
localStorage.getItem("usuarioActual")
);

}



// ======================================
// REGISTRO CLIENTE
// ======================================

function registrarCliente(){

let nombre=document.getElementById("nombre").value.trim();

let apellido=document.getElementById("apellido").value.trim();

let correo=document.getElementById("correo").value.trim();

let telefono=document.getElementById("telefono").value.trim();

let cabello=document.getElementById("cabello").value;

let password=document.getElementById("password").value;

let confirmar=document.getElementById("confirmar").value;


if(
nombre===""||
apellido===""||
correo===""||
telefono===""||
cabello===""||
password===""||
confirmar===""){

alert("Complete todos los campos");

return;

}


if(password!==confirmar){

alert("Las contraseñas no coinciden");

return;

}


let usuarios=

JSON.parse(
localStorage.getItem("usuarios")
)||[];


let existe=

usuarios.find(

u=>u.correo===correo

);


if(existe){

alert("Ya existe un usuario con ese correo.");

return;

}


usuarios.push({

nombre,
apellido,
correo,
telefono,
cabello,
password

});


localStorage.setItem(

"usuarios",

JSON.stringify(
usuarios
)

);


alert("Registro exitoso");


window.location.href="loginCliente.html";

}



// ======================================
// LOGIN
// ======================================

function ingresarCliente(){

let usuario=

document.getElementById(
"usuarioCliente"
).value.trim();

let password=

document.getElementById(
"passwordCliente"
).value;


if(usuario===""||password===""){

alert("Ingrese usuario y contraseña");

return;

}


let usuarios=

JSON.parse(
localStorage.getItem("usuarios")
)||[];


let encontrado=

usuarios.find(

u=>

u.correo===usuario &&

u.password===password

);


if(!encontrado){

alert("Correo o contraseña incorrectos");

return;

}


localStorage.setItem(

"usuarioActual",

JSON.stringify(
encontrado
)

);


window.location.href="../cliente/inicioCliente.html";

}



// ======================================
// LIMPIAR LOGIN
// ======================================

function limpiarCliente(){

let u=document.getElementById("usuarioCliente");

let p=document.getElementById("passwordCliente");

if(u)u.value="";

if(p)p.value="";

}



// ======================================
// MOSTRAR PASSWORD
// ======================================

function mostrarPasswordCliente(){

let pass=document.getElementById("passwordCliente");

if(!pass)return;

if(pass.type==="password"){

pass.type="text";

}else{

pass.type="password";

}

}



// ======================================
// PERFIL
// ======================================

function cargarPerfil(){

let usuario=getUsuario();

if(!usuario)return;


if(document.getElementById("nombre")){

document.getElementById("nombre").value=usuario.nombre;

document.getElementById("apellido").value=usuario.apellido;

document.getElementById("correo").value=usuario.correo;

document.getElementById("telefono").value=usuario.telefono;

document.getElementById("cabello").value=usuario.cabello;

}

}



// ======================================
// ACTUALIZAR PERFIL
// ======================================

function actualizarPerfil(){

let usuario=getUsuario();

if(!usuario)return;


usuario.nombre=document.getElementById("nombre").value;

usuario.apellido=document.getElementById("apellido").value;

usuario.correo=document.getElementById("correo").value;

usuario.telefono=document.getElementById("telefono").value;

usuario.cabello=document.getElementById("cabello").value;


localStorage.setItem(

"usuarioActual",

JSON.stringify(usuario)

);


let usuarios=

JSON.parse(
localStorage.getItem("usuarios")
)||[];


usuarios=usuarios.map(

u=>{

if(u.correo===usuario.correo){

return usuario;

}

return u;

}

);


localStorage.setItem(

"usuarios",

JSON.stringify(
usuarios
)

);


alert("Perfil actualizado correctamente.");

}



// ======================================
// INICIO CLIENTE
// ======================================

function cargarInicio(){

let usuario=getUsuario();

if(!usuario)return;


let citas=

JSON.parse(
localStorage.getItem("citas")
)||[];


let compras=

JSON.parse(
localStorage.getItem("compras")
)||[];


let misCitas=

citas.filter(

c=>c.correo===usuario.correo

);


let misCompras=

compras.filter(

c=>c.correo===usuario.correo

);


let totalServicios=

document.getElementById("totalServicios");

if(totalServicios){

totalServicios.innerHTML=misCitas.length;

}


let totalProductos=

document.getElementById("totalProductos");

if(totalProductos){

totalProductos.innerHTML=misCompras.length;

}



// =======================
// PRÓXIMA CITA
// =======================

let proxima = document.getElementById("proximaCita");

if(proxima){

    let pendientes = misCitas.filter(c =>
        c.estado.includes("Pendiente")
    );

    if(pendientes.length > 0){

        pendientes.sort((a,b)=>{

            let fechaA = new Date(a.fecha + " " + a.hora);
            let fechaB = new Date(b.fecha + " " + b.hora);

            return fechaA - fechaB;

        });

        let cita = pendientes[0];

        proxima.innerHTML = `
        <strong>${cita.servicio}</strong><br>
        📅 ${cita.fecha}<br>
        🕒 ${cita.hora}
        `;

    }else{

        proxima.innerHTML = "Sin citas";

    }

}

}



// ======================================
// CERRAR SESIÓN
// ======================================

function cerrarSesion(){

localStorage.removeItem("usuarioActual");

window.location.href="../auth/loginCliente.html";

}
// ======================================
// SERVICIOS Y CITAS
// ======================================


// ======================================
// RESERVAR CITA
// ======================================

function reservar(servicio,idFecha,idHora){

let usuario=getUsuario();

if(!usuario){

alert("Debe iniciar sesión.");

return;

}

let fecha=document.getElementById(idFecha).value;

let hora=document.getElementById(idHora).value;


if(fecha===""||hora===""){

alert("Seleccione una fecha y una hora.");

return;

}


// FECHA MÍNIMA

let hoy=new Date();

hoy.setHours(0,0,0,0);

let fechaSeleccionada=new Date(fecha);

if(fechaSeleccionada<hoy){

alert("No puede reservar fechas anteriores.");

return;

}


// HORARIO OCUPADO

let citas=

JSON.parse(
localStorage.getItem("citas")
)||[];


let ocupada=

citas.find(

c=>

c.fecha===fecha &&

c.hora===hora &&

c.estado!=="Cancelada"

);


if(ocupada){

alert("Ese horario ya está reservado.");

return;

}


let nueva={

id:Date.now(),

correo:usuario.correo,

servicio:servicio,

fecha:fecha,

hora:hora,

estado:"Pendiente"

};


citas.push(nueva);
console.log(nueva);

localStorage.setItem(

"citas",

JSON.stringify(citas)

);


alert("Cita reservada correctamente.");

mostrarCitas();

cargarInicio();

}




// ======================================
// MOSTRAR CITAS
// ======================================

function mostrarCitas(){

let tabla=document.getElementById("listaCitas");

if(!tabla)return;


let usuario=getUsuario();

if(!usuario)return;


let citas=

JSON.parse(
localStorage.getItem("citas")
)||[];


let mis=

citas.filter(

c=>

c.correo===usuario.correo &&

c.estado!=="Cancelada"

);


mis.sort(

(a,b)=>

new Date(a.fecha)-new Date(b.fecha)

);


tabla.innerHTML="";


if(mis.length===0){

tabla.innerHTML=`

<tr>

<td colspan="5">

No tienes citas registradas

</td>

</tr>

`;

return;

}


mis.forEach(c=>{

tabla.innerHTML+=`

<tr>

<td>${c.servicio}</td>

<td>${c.fecha}</td>

<td>${c.hora}</td>

<td>${c.estado}</td>

<td>

<button onclick="cancelarCita(${c.id})">

Cancelar

</button>

<button onclick="reprogramarCita(${c.id})">

Cambiar

</button>

</td>

</tr>

`;

});

}




// ======================================
// CANCELAR CITA
// ======================================

function cancelarCita(id){

let citas=

JSON.parse(
localStorage.getItem("citas")
)||[];


citas.forEach(c=>{

if(c.id===id){

c.estado="Cancelada";

}

});


localStorage.setItem(

"citas",

JSON.stringify(citas)

);


alert("La cita fue cancelada.");

mostrarCitas();

mostrarHistorial();

cargarInicio();

}




// ======================================
// REPROGRAMAR
// ======================================

function reprogramarCita(id){

let nuevaFecha=

prompt("Ingrese la nueva fecha (AAAA-MM-DD)");

if(!nuevaFecha)return;


let nuevaHora=

prompt("Ingrese la nueva hora (Ej: 10:00)");

if(!nuevaHora)return;


let citas=

JSON.parse(
localStorage.getItem("citas")
)||[];


let existe=

citas.find(

c=>

c.fecha===nuevaFecha &&

c.hora===nuevaHora &&

c.estado!=="Cancelada"

);


if(existe){

alert("Ese horario ya está ocupado.");

return;

}


citas.forEach(c=>{

if(c.id===id){

c.fecha=nuevaFecha;

c.hora=nuevaHora;

c.estado="Reprogramada";

}

});


localStorage.setItem(

"citas",

JSON.stringify(citas)

);


alert("La cita fue reprogramada.");

mostrarCitas();

mostrarHistorial();

cargarInicio();

}




// ======================================
// HISTORIAL
// ======================================

function mostrarHistorial(){

let tabla=document.getElementById("listaHistorial");

if(!tabla)return;


let usuario=getUsuario();

if(!usuario)return;


let citas=

JSON.parse(
localStorage.getItem("citas")
)||[];


let historial=

citas.filter(

c=>

c.correo===usuario.correo &&

(

c.estado==="Cancelada"||

c.estado==="Reprogramada"

)

);


tabla.innerHTML="";


if(historial.length===0){

tabla.innerHTML=`

<tr>

<td colspan="4">

No hay historial de citas

</td>

</tr>

`;

return;

}


historial.forEach(c=>{

tabla.innerHTML+=`

<tr>

<td>${c.servicio}</td>

<td>${c.fecha}</td>

<td>${c.hora}</td>

<td>${c.estado}</td>

</tr>

`;

});

}
// ======================================
// PRODUCTOS
// ======================================

// COMPRAR DIRECTAMENTE
function comprarProducto(producto,precio){

let usuario=getUsuario();

if(!usuario){
alert("Debe iniciar sesión.");
return;
}

let compras=JSON.parse(localStorage.getItem("compras"))||[];

compras.push({

correo:usuario.correo,

producto:producto,

precio:precio,

cantidad:1,

fecha:new Date().toLocaleDateString()

});

localStorage.setItem("compras",JSON.stringify(compras));

alert("Compra realizada.");

cargarInicio();

}



// ======================================
// CARRITO
// ======================================

function agregarCarrito(producto,precio){

let usuario=getUsuario();

if(!usuario){
alert("Debe iniciar sesión.");
return;
}

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];


let existe=

carrito.find(

p=>

p.correo===usuario.correo &&

p.producto===producto

);


if(existe){

existe.cantidad++;

}else{

carrito.push({

correo:usuario.correo,

producto:producto,

precio:precio,

cantidad:1

});

}


localStorage.setItem("carrito",JSON.stringify(carrito));

alert("Producto agregado al carrito.");

mostrarCarrito();

}



// ======================================
// MOSTRAR CARRITO
// ======================================

function mostrarCarrito(){

let tabla=document.getElementById("listaCarrito");

if(!tabla)return;

let usuario=getUsuario();

if(!usuario)return;

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

let mis=carrito.filter(

p=>p.correo===usuario.correo

);

tabla.innerHTML="";

let total=0;


if(mis.length===0){

tabla.innerHTML=`

<tr>

<td colspan="3">

El carrito está vacío

</td>

</tr>

`;

let t=document.getElementById("totalCarrito");

if(t)t.innerHTML="$0";

return;

}


mis.forEach(p=>{

let subtotal=p.precio*p.cantidad;

total+=subtotal;

tabla.innerHTML+=`

<tr>

<td>

${p.producto}

<br>

Cantidad: ${p.cantidad}

</td>

<td>

$${subtotal}

</td>

<td>

<button onclick="aumentar('${p.producto}')">+</button>

<button onclick="disminuir('${p.producto}')">-</button>

<button onclick="eliminarItem('${p.producto}')">🗑</button>

</td>

</tr>

`;

});


let t=document.getElementById("totalCarrito");

if(t){

t.innerHTML= total.toLocaleString("es-CO");

}

}



// ======================================
// AUMENTAR
// ======================================

function aumentar(producto){

let usuario=getUsuario();

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

carrito.forEach(p=>{

if(

p.correo===usuario.correo &&

p.producto===producto

){

p.cantidad++;

}

});

localStorage.setItem("carrito",JSON.stringify(carrito));

mostrarCarrito();

}



// ======================================
// DISMINUIR
// ======================================

function disminuir(producto){

let usuario=getUsuario();

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

carrito.forEach(p=>{

if(

p.correo===usuario.correo &&

p.producto===producto

){

p.cantidad--;

}

});


carrito=carrito.filter(

p=>p.cantidad>0

);


localStorage.setItem("carrito",JSON.stringify(carrito));

mostrarCarrito();

}



// ======================================
// ELIMINAR PRODUCTO
// ======================================

function eliminarItem(producto){

let usuario=getUsuario();

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

carrito=carrito.filter(

p=>

!(

p.correo===usuario.correo &&

p.producto===producto

)

);

localStorage.setItem("carrito",JSON.stringify(carrito));

mostrarCarrito();

}



// ======================================
// VACIAR CARRITO
// ======================================

function vaciarCarrito(){

let usuario=getUsuario();

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

carrito=carrito.filter(

p=>p.correo!==usuario.correo

);

localStorage.setItem("carrito",JSON.stringify(carrito));

mostrarCarrito();

alert("Carrito vaciado.");

}



// ======================================
// FINALIZAR COMPRA
// ======================================

function finalizarCompra(){

let usuario=getUsuario();

if(!usuario)return;

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

let compras=JSON.parse(localStorage.getItem("compras"))||[];

let mis=carrito.filter(

p=>p.correo===usuario.correo

);


if(mis.length===0){

alert("El carrito está vacío.");

return;

}


mis.forEach(p=>{

compras.push({

correo:usuario.correo,

producto:p.producto,

precio:p.precio,

cantidad:p.cantidad,

fecha:new Date().toLocaleDateString()

});

});


localStorage.setItem(

"compras",

JSON.stringify(compras)

);


carrito=carrito.filter(

p=>p.correo!==usuario.correo

);


localStorage.setItem(

"carrito",

JSON.stringify(carrito)

);


alert("Compra realizada correctamente.");

mostrarCarrito();

mostrarCompras();

cargarInicio();

}



// ======================================
// MOSTRAR COMPRAS
// ======================================

function mostrarCompras(){

let tabla=document.getElementById("listaCompras");

if(!tabla)return;

let usuario=getUsuario();

if(!usuario)return;

let compras=JSON.parse(localStorage.getItem("compras"))||[];

let mis=compras.filter(

c=>c.correo===usuario.correo

);

tabla.innerHTML="";


if(mis.length===0){

tabla.innerHTML=`

<tr>

<td colspan="4">

No hay compras registradas

</td>

</tr>

`;

return;

}


mis.forEach(c=>{

tabla.innerHTML+=`

<tr>

<td>${c.producto}</td>

<td>${c.cantidad}</td>

<td>$${c.precio}</td>

<td>${c.fecha}</td>

</tr>

`;

});

}



// ======================================
// CARGA GENERAL
// ======================================

document.addEventListener(

"DOMContentLoaded",

function(){

cargarPerfil();

cargarInicio();

mostrarCitas();

mostrarHistorial();

mostrarCarrito();

mostrarCompras();

}

);