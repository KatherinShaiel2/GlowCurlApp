// =======================
// USUARIO ACTUAL
// =======================
function getUsuario(){
    return JSON.parse(localStorage.getItem("usuarioActual"));
}


// =======================
// REGISTRO CLIENTE
// =======================
function registrarCliente(){

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let correo = document.getElementById("correo").value;
let telefono = document.getElementById("telefono").value;
let cabello = document.getElementById("cabello").value;
let password = document.getElementById("password").value;
let confirmar = document.getElementById("confirmar").value;

if(!nombre || !apellido || !correo || !telefono || !cabello || !password || !confirmar){
alert("Complete todos los campos");
return;
}

if(password !== confirmar){
alert("Las contraseñas no coinciden");
return;
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

usuarios.push({nombre, apellido, correo, telefono, cabello, password});

localStorage.setItem("usuarios", JSON.stringify(usuarios));

alert("Registro exitoso");
window.location.href = "loginCliente.html";
}


// =======================
// LOGIN CLIENTE
// =======================
function ingresarCliente(){

let usuario = document.getElementById("usuarioCliente").value;
let password = document.getElementById("passwordCliente").value;

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let encontrado = usuarios.find(u =>
u.correo === usuario && u.password === password
);

if(encontrado){
localStorage.setItem("usuarioActual", JSON.stringify(encontrado));
window.location.href = "../cliente/inicioCliente.html";
}else{
alert("Credenciales incorrectas");
}
}


// =======================
// PERFIL
// =======================
function cargarPerfil(){
let usuario = getUsuario();
if(!usuario) return;

if(document.getElementById("nombre")){
document.getElementById("nombre").value = usuario.nombre;
document.getElementById("apellido").value = usuario.apellido;
document.getElementById("correo").value = usuario.correo;
document.getElementById("telefono").value = usuario.telefono;
document.getElementById("cabello").value = usuario.cabello;
}
}

function actualizarPerfil(){
let usuario = getUsuario();

usuario.nombre = document.getElementById("nombre").value;
usuario.apellido = document.getElementById("apellido").value;
usuario.correo = document.getElementById("correo").value;
usuario.telefono = document.getElementById("telefono").value;
usuario.cabello = document.getElementById("cabello").value;

localStorage.setItem("usuarioActual", JSON.stringify(usuario));

alert("Perfil actualizado");
}


// =======================
// CITAS
// =======================
function reservar(servicio, idFecha, idHora){

let usuario = getUsuario();
if(!usuario){
alert("Inicia sesión");
return;
}

let fecha = document.getElementById(idFecha).value;
let hora = document.getElementById(idHora).value;

if(!fecha || !hora){
alert("Selecciona fecha y hora");
return;
}

let citas = JSON.parse(localStorage.getItem("citas")) || [];

citas.push({
id: Date.now(),
correo: usuario.correo,
servicio,
fecha,
hora,
estado: "Pendiente"
});

localStorage.setItem("citas", JSON.stringify(citas));

alert("Cita creada");
mostrarCitas();
}


function mostrarCitas(){

let tabla = document.getElementById("listaCitas");
if(!tabla) return;

let usuario = getUsuario();
if(!usuario) return;

let citas = JSON.parse(localStorage.getItem("citas")) || [];

let mis = citas.filter(c => c.correo === usuario.correo);

tabla.innerHTML = "";

if(mis.length === 0){
tabla.innerHTML = `<tr><td colspan="4">No tienes citas</td></tr>`;
return;
}

mis.forEach(c => {
tabla.innerHTML += `
<tr>
<td>${c.servicio}</td>
<td>${c.fecha}</td>
<td>${c.hora}</td>
<td>${c.estado}</td>
</tr>
`;
});
}


// =======================
// HISTORIAL CITAS
// =======================
function mostrarHistorial(){

let tabla = document.getElementById("listaHistorial");
if(!tabla) return;

let usuario = getUsuario();
if(!usuario) return;

let citas = JSON.parse(localStorage.getItem("citas")) || [];

let historial = citas.filter(c =>
c.correo === usuario.correo &&
(c.estado === "Cancelada")
);

tabla.innerHTML = "";

if(historial.length === 0){
tabla.innerHTML = `<tr><td colspan="4">Sin historial</td></tr>`;
return;
}

historial.forEach(c => {
tabla.innerHTML += `
<tr>
<td>${c.servicio}</td>
<td>${c.fecha}</td>
<td>${c.hora}</td>
<td>${c.estado}</td>
</tr>
`;
});
}


// =======================
// CARRITO
// =======================
function agregarCarrito(producto, precio){

let usuario = getUsuario();
if(!usuario){
alert("Inicia sesión");
return;
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let item = carrito.find(p =>
p.correo === usuario.correo && p.producto === producto
);

if(item){
item.cantidad++;
}else{
carrito.push({
correo: usuario.correo,
producto,
precio,
cantidad: 1
});
}

localStorage.setItem("carrito", JSON.stringify(carrito));
mostrarCarrito();
}


function mostrarCarrito(){

let tabla = document.getElementById("listaCarrito");
if(!tabla) return;

let usuario = getUsuario();
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let mis = carrito.filter(p => p.correo === usuario.correo);

tabla.innerHTML = "";

let total = 0;

mis.forEach(p => {
let subtotal = p.precio * p.cantidad;
total += subtotal;

tabla.innerHTML += `
<tr>
<td>${p.producto} x${p.cantidad}</td>
<td>$${subtotal}</td>
<td>
<button onclick="aumentar('${p.producto}')">+</button>
<button onclick="disminuir('${p.producto}')">-</button>
<button onclick="eliminarItem('${p.producto}')">x</button>
</td>
</tr>
`;
});

document.getElementById("totalCarrito").innerText = "$" + total;

if(mis.length === 0){
tabla.innerHTML = `<tr><td colspan="3">Carrito vacío</td></tr>`;
}
}


// =======================
// CARRITO ACCIONES
// =======================
function aumentar(producto){
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

carrito.forEach(p => {
if(p.producto === producto){
p.cantidad++;
}
});

localStorage.setItem("carrito", JSON.stringify(carrito));
mostrarCarrito();
}

function disminuir(producto){
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

carrito.forEach(p => {
if(p.producto === producto){
p.cantidad--;
}
});

carrito = carrito.filter(p => p.cantidad > 0);

localStorage.setItem("carrito", JSON.stringify(carrito));
mostrarCarrito();
}

function eliminarItem(producto){
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

carrito = carrito.filter(p => p.producto !== producto);

localStorage.setItem("carrito", JSON.stringify(carrito));
mostrarCarrito();
}


// =======================
// FINALIZAR COMPRA
// =======================
function finalizarCompra(){

let usuario = getUsuario();

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let compras = JSON.parse(localStorage.getItem("compras")) || [];

let mis = carrito.filter(p => p.correo === usuario.correo);

if(mis.length === 0){
alert("Carrito vacío");
return;
}

mis.forEach(p => {
compras.push({
correo: usuario.correo,
producto: p.producto,
precio: p.precio,
cantidad: p.cantidad,
fecha: new Date().toLocaleDateString()
});
});

carrito = carrito.filter(p => p.correo !== usuario.correo);

localStorage.setItem("carrito", JSON.stringify(carrito));
localStorage.setItem("compras", JSON.stringify(compras));

alert("Compra realizada");

mostrarCarrito();
}


// =======================
// INICIO
// =======================
function cargarInicio(){

let usuario = getUsuario();
if(!usuario) return;

let citas = JSON.parse(localStorage.getItem("citas")) || [];
let compras = JSON.parse(localStorage.getItem("compras")) || [];

let misCitas = citas.filter(c => c.correo === usuario.correo);
let misCompras = compras.filter(c => c.correo === usuario.correo);

let t1 = document.getElementById("totalServicios");
if(t1) t1.innerText = misCitas.length;

let t2 = document.getElementById("totalProductos");
if(t2) t2.innerText = misCompras.length;

let prox = document.getElementById("proximaCita");
if(prox){
prox.innerText = misCitas.length ? misCitas[0].fecha : "Sin citas";
}
}


// =======================
// CARGA GENERAL
// =======================
document.addEventListener("DOMContentLoaded", () => {
cargarPerfil();
mostrarCitas();
mostrarCarrito();
cargarInicio();
});


// =======================
// CERRAR SESIÓN
// =======================
function cerrarSesion(){
localStorage.removeItem("usuarioActual");
window.location.href = "../auth/loginCliente.html";
}