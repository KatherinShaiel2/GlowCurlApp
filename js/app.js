function ingresar(){

let usuario=
document.getElementById("usuario").value;

let password=
document.getElementById("password").value;

let rol=
document.getElementById("rol").value;


if(
usuario===""||
password===""||
rol===""
){

alert("Complete todos los campos");
return;

}

if(rol==="cliente"){

window.location.href=
"/pages/cliente/inicioCliente.html";

}

else{

window.location.href=
"/pages/empresa/dashboard.html";

}

}



function mostrarPassword(){

let pass=
document.getElementById(
"password"
);

if(pass.type==="password"){

pass.type="text";

}else{

pass.type="password";

}

}



function limpiarLogin(){

document.getElementById(
"usuario"
).value="";

document.getElementById(
"password"
).value="";

document.getElementById(
"rol"
).selectedIndex=0;

}

/* CLIENTES */

let filaSeleccionada=null;

function guardar(){

let documento=
document.getElementById(
"documento"
).value;

let nombre=
document.getElementById(
"nombre"
).value;

let apellido=
document.getElementById(
"apellido"
).value;

let telefono=
document.getElementById(
"telefono"
).value;

let cabello=
document.getElementById(
"cabello"
).value;


if(

documento===""||
nombre===""||
apellido===""||
telefono===""||
cabello===""

){

alert(
"Complete todos los campos"
);

return;

}


/* EDITAR */

if(filaSeleccionada){

filaSeleccionada.cells[0].innerHTML=documento;

filaSeleccionada.cells[1].innerHTML=nombre;

filaSeleccionada.cells[2].innerHTML=apellido;

filaSeleccionada.cells[3].innerHTML=telefono;

filaSeleccionada.cells[4].innerHTML=cabello;

filaSeleccionada=null;

limpiarFormulario();

return;

}


/* NUEVO */

let tabla=

document.getElementById(
"tablaClientes"
)
.getElementsByTagName(
"tbody"
)[0];

let fila=
tabla.insertRow();

fila.insertCell(0).innerHTML=documento;
fila.insertCell(1).innerHTML=nombre;
fila.insertCell(2).innerHTML=apellido;
fila.insertCell(3).innerHTML=telefono;
fila.insertCell(4).innerHTML=cabello;


fila.onclick=function(){

filaSeleccionada=fila;

document.getElementById(
"documento"
).value=
fila.cells[0].innerHTML;

document.getElementById(
"nombre"
).value=
fila.cells[1].innerHTML;

document.getElementById(
"apellido"
).value=
fila.cells[2].innerHTML;

document.getElementById(
"telefono"
).value=
fila.cells[3].innerHTML;

document.getElementById(
"cabello"
).value=
fila.cells[4].innerHTML;

}

limpiarFormulario();

}



function editar(){

if(!filaSeleccionada){

alert(
"Seleccione un cliente"
);

return;

}

alert(
"Modifique y pulse Guardar"
);

}


function eliminarRegistro(){

if(!filaSeleccionada){

alert(
"Seleccione un cliente"
);

return;

}

filaSeleccionada.remove();

filaSeleccionada=null;

limpiarFormulario();

}


function limpiarFormulario(){

document.getElementById(
"documento"
).value="";

document.getElementById(
"nombre"
).value="";

document.getElementById(
"apellido"
).value="";

document.getElementById(
"telefono"
).value="";

document.getElementById(
"correo"
).value="";

document.getElementById(
"observaciones"
).value="";

document.getElementById(
"cabello"
).selectedIndex=0;

}



function soloNumeros(campo){

campo.value=
campo.value.replace(
/[^0-9]/g,
""
);

}

function soloLetras(campo){

campo.value=
campo.value.replace(
/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g,
""
);

}
/* EMPLEADOS */

let filaEmpleado=null;

function guardarEmpleado(){

let documento=document.getElementById(
"documentoEmpleado").value;

let nombre=document.getElementById(
"nombreEmpleado").value;

let apellido=document.getElementById(
"apellidoEmpleado").value;

let telefono=document.getElementById(
"telefonoEmpleado").value;

let cargo=document.getElementById(
"cargoEmpleado").value;


if(
documento===""||
nombre===""||
apellido===""||
telefono===""||
cargo===""
){

alert("Complete todos los campos");
return;

}


if(filaEmpleado){

filaEmpleado.cells[0].innerHTML=documento;
filaEmpleado.cells[1].innerHTML=nombre;
filaEmpleado.cells[2].innerHTML=apellido;
filaEmpleado.cells[3].innerHTML=telefono;
filaEmpleado.cells[4].innerHTML=cargo;

filaEmpleado=null;

limpiarEmpleado();

return;

}


let tabla=document.getElementById(
"tablaEmpleados")
.getElementsByTagName(
"tbody")[0];

let fila=tabla.insertRow();

fila.insertCell(0).innerHTML=documento;
fila.insertCell(1).innerHTML=nombre;
fila.insertCell(2).innerHTML=apellido;
fila.insertCell(3).innerHTML=telefono;
fila.insertCell(4).innerHTML=cargo;


fila.onclick=function(){

filaEmpleado=fila;

document.getElementById(
"documentoEmpleado").value=
fila.cells[0].innerHTML;

document.getElementById(
"nombreEmpleado").value=
fila.cells[1].innerHTML;

document.getElementById(
"apellidoEmpleado").value=
fila.cells[2].innerHTML;

document.getElementById(
"telefonoEmpleado").value=
fila.cells[3].innerHTML;

document.getElementById(
"cargoEmpleado").value=
fila.cells[4].innerHTML;

}

limpiarEmpleado();

}



function editarEmpleado(){

if(!filaEmpleado){

alert("Seleccione empleado");
return;

}

alert(
"Modifique los datos y guarde"
);

}


function eliminarEmpleado(){

if(!filaEmpleado){

alert(
"Seleccione empleado"
);

return;

}

filaEmpleado.remove();

filaEmpleado=null;

limpiarEmpleado();

}


function limpiarEmpleado(){

document.getElementById(
"documentoEmpleado").value="";

document.getElementById(
"nombreEmpleado").value="";

document.getElementById(
"apellidoEmpleado").value="";

document.getElementById(
"telefonoEmpleado").value="";

document.getElementById(
"correoEmpleado").value="";

document.getElementById(
"cargoEmpleado").selectedIndex=0;

}
/* PRODUCTOS */

let filaProducto=null;

function guardarProducto(){

let codigo=
document.getElementById(
"codigoProducto").value;

let nombre=
document.getElementById(
"nombreProducto").value;

let marca=
document.getElementById(
"marcaProducto").value;

let cantidad=
document.getElementById(
"cantidadProducto").value;

let precio=
document.getElementById(
"precioProducto").value;

let categoria=
document.getElementById(
"categoriaProducto").value;


if(
codigo===""||
nombre===""||
marca===""||
cantidad===""||
precio===""||
categoria===""
){

alert(
"Complete todos los campos"
);

return;

}


if(filaProducto){

filaProducto.cells[0].innerHTML=codigo;
filaProducto.cells[1].innerHTML=nombre;
filaProducto.cells[2].innerHTML=marca;
filaProducto.cells[3].innerHTML=cantidad;
filaProducto.cells[4].innerHTML=precio;
filaProducto.cells[5].innerHTML=categoria;

filaProducto=null;

limpiarProducto();

return;

}


let tabla=

document.getElementById(
"tablaProductos")
.getElementsByTagName(
"tbody")[0];


let fila=
tabla.insertRow();

fila.insertCell(0).innerHTML=codigo;
fila.insertCell(1).innerHTML=nombre;
fila.insertCell(2).innerHTML=marca;
fila.insertCell(3).innerHTML=cantidad;
fila.insertCell(4).innerHTML=precio;
fila.insertCell(5).innerHTML=categoria;


fila.onclick=function(){

filaProducto=fila;

document.getElementById(
"codigoProducto").value=
fila.cells[0].innerHTML;

document.getElementById(
"nombreProducto").value=
fila.cells[1].innerHTML;

document.getElementById(
"marcaProducto").value=
fila.cells[2].innerHTML;

document.getElementById(
"cantidadProducto").value=
fila.cells[3].innerHTML;

document.getElementById(
"precioProducto").value=
fila.cells[4].innerHTML;

document.getElementById(
"categoriaProducto").value=
fila.cells[5].innerHTML;

}

limpiarProducto();

}



function editarProducto(){

if(!filaProducto){

alert(
"Seleccione producto"
);

return;

}

alert(
"Modifique y pulse Guardar"
);

}


function eliminarProducto(){

if(!filaProducto){

alert(
"Seleccione producto"
);

return;

}

filaProducto.remove();

filaProducto=null;

limpiarProducto();

}


function limpiarProducto(){

document.getElementById(
"codigoProducto").value="";

document.getElementById(
"nombreProducto").value="";

document.getElementById(
"marcaProducto").value="";

document.getElementById(
"cantidadProducto").value="";

document.getElementById(
"precioProducto").value="";

document.getElementById(
"categoriaProducto").selectedIndex=0;

}
/* SERVICIOS */

let filaServicio=null;

function guardarServicio(){

let codigo=
document.getElementById(
"codigoServicio").value;

let nombre=
document.getElementById(
"nombreServicio").value;

let duracion=
document.getElementById(
"duracionServicio").value;

let precio=
document.getElementById(
"precioServicio").value;

let categoria=
document.getElementById(
"categoriaServicio").value;


if(
codigo===""||
nombre===""||
duracion===""||
precio===""||
categoria===""){

alert(
"Complete todos los campos"
);

return;

}


if(filaServicio){

filaServicio.cells[0].innerHTML=codigo;
filaServicio.cells[1].innerHTML=nombre;
filaServicio.cells[2].innerHTML=duracion;
filaServicio.cells[3].innerHTML=precio;
filaServicio.cells[4].innerHTML=categoria;

filaServicio=null;

limpiarServicio();

return;

}


let tabla=
document.getElementById(
"tablaServicios")
.getElementsByTagName(
"tbody")[0];

let fila=
tabla.insertRow();

fila.insertCell(0).innerHTML=codigo;
fila.insertCell(1).innerHTML=nombre;
fila.insertCell(2).innerHTML=duracion;
fila.insertCell(3).innerHTML=precio;
fila.insertCell(4).innerHTML=categoria;


fila.onclick=function(){

filaServicio=fila;

document.getElementById(
"codigoServicio").value=
fila.cells[0].innerHTML;

document.getElementById(
"nombreServicio").value=
fila.cells[1].innerHTML;

document.getElementById(
"duracionServicio").value=
fila.cells[2].innerHTML;

document.getElementById(
"precioServicio").value=
fila.cells[3].innerHTML;

document.getElementById(
"categoriaServicio").value=
fila.cells[4].innerHTML;

}

limpiarServicio();

}



function editarServicio(){

if(!filaServicio){

alert(
"Seleccione servicio"
);

return;

}

alert(
"Modifique y guarde"
);

}


function eliminarServicio(){

if(!filaServicio){

alert(
"Seleccione servicio"
);

return;

}

filaServicio.remove();

filaServicio=null;

limpiarServicio();

}


function limpiarServicio(){

document.getElementById(
"codigoServicio").value="";

document.getElementById(
"nombreServicio").value="";

document.getElementById(
"duracionServicio").value="";

document.getElementById(
"precioServicio").value="";

document.getElementById(
"categoriaServicio").selectedIndex=0;

document.getElementById(
"descripcionServicio").value="";

}
/* CITAS */

let filaCita=null;

function guardarCita(){

let cliente=
document.getElementById(
"clienteCita").value;

let servicio=
document.getElementById(
"servicioCita").value;

let fecha=
document.getElementById(
"fechaCita").value;

let hora=
document.getElementById(
"horaCita").value;

let estado=
document.getElementById(
"estadoCita").value;


if(
cliente===""||
servicio===""||
fecha===""||
hora===""||
estado===""){

alert(
"Complete todos los campos"
);

return;

}


if(filaCita){

filaCita.cells[0].innerHTML=cliente;
filaCita.cells[1].innerHTML=servicio;
filaCita.cells[2].innerHTML=fecha;
filaCita.cells[3].innerHTML=hora;
filaCita.cells[4].innerHTML=estado;

filaCita=null;

limpiarCita();

return;

}


let tabla=
document.getElementById(
"tablaCitas")
.getElementsByTagName(
"tbody")[0];

let fila=
tabla.insertRow();

fila.insertCell(0).innerHTML=cliente;
fila.insertCell(1).innerHTML=servicio;
fila.insertCell(2).innerHTML=fecha;
fila.insertCell(3).innerHTML=hora;
fila.insertCell(4).innerHTML=estado;


fila.onclick=function(){

filaCita=fila;

document.getElementById(
"clienteCita").value=
fila.cells[0].innerHTML;

document.getElementById(
"servicioCita").value=
fila.cells[1].innerHTML;

document.getElementById(
"fechaCita").value=
fila.cells[2].innerHTML;

document.getElementById(
"horaCita").value=
fila.cells[3].innerHTML;

document.getElementById(
"estadoCita").value=
fila.cells[4].innerHTML;

}

limpiarCita();

}



function editarCita(){

if(!filaCita){

alert(
"Seleccione una cita"
);

return;

}

alert(
"Modifique y guarde"
);

}


function eliminarCita(){

if(!filaCita){

alert(
"Seleccione una cita"
);

return;

}

filaCita.remove();

filaCita=null;

limpiarCita();

}


function limpiarCita(){

document.getElementById(
"clienteCita").value="";

document.getElementById(
"servicioCita").selectedIndex=0;

document.getElementById(
"fechaCita").value="";

document.getElementById(
"horaCita").value="";

document.getElementById(
"estadoCita").selectedIndex=0;

}
/* VENTAS */

let filaVenta=null;

function guardarVenta(){

let cliente=
document.getElementById(
"clienteVenta").value;

let producto=
document.getElementById(
"productoVenta").value;

let cantidad=
document.getElementById(
"cantidadVenta").value;

let precio=
document.getElementById(
"precioVenta").value;

let pago=
document.getElementById(
"metodoPago").value;


if(
cliente===""||
producto===""||
cantidad===""||
precio===""||
pago===""){

alert(
"Complete todos los campos"
);

return;

}


if(filaVenta){

filaVenta.cells[0].innerHTML=cliente;
filaVenta.cells[1].innerHTML=producto;
filaVenta.cells[2].innerHTML=cantidad;
filaVenta.cells[3].innerHTML=precio;
filaVenta.cells[4].innerHTML=pago;

filaVenta=null;

limpiarVenta();

return;

}


let tabla=
document.getElementById(
"tablaVentas")
.getElementsByTagName(
"tbody")[0];

let fila=
tabla.insertRow();

fila.insertCell(0).innerHTML=cliente;
fila.insertCell(1).innerHTML=producto;
fila.insertCell(2).innerHTML=cantidad;
fila.insertCell(3).innerHTML=precio;
fila.insertCell(4).innerHTML=pago;


fila.onclick=function(){

filaVenta=fila;

document.getElementById(
"clienteVenta").value=
fila.cells[0].innerHTML;

document.getElementById(
"productoVenta").value=
fila.cells[1].innerHTML;

document.getElementById(
"cantidadVenta").value=
fila.cells[2].innerHTML;

document.getElementById(
"precioVenta").value=
fila.cells[3].innerHTML;

document.getElementById(
"metodoPago").value=
fila.cells[4].innerHTML;

}

limpiarVenta();

}



function editarVenta(){

if(!filaVenta){

alert(
"Seleccione una venta"
);

return;

}

alert(
"Modifique y guarde"
);

}


function eliminarVenta(){

if(!filaVenta){

alert(
"Seleccione una venta"
);

return;

}

filaVenta.remove();

filaVenta=null;

limpiarVenta();

}


function limpiarVenta(){

document.getElementById(
"clienteVenta").value="";

document.getElementById(
"productoVenta").value="";

document.getElementById(
"cantidadVenta").value="";

document.getElementById(
"precioVenta").value="";

document.getElementById(
"metodoPago").selectedIndex=0;

}
/* INVENTARIO */

let filaInventario=null;

function guardarInventario(){

let codigo=
document.getElementById(
"codigoInventario").value;

let producto=
document.getElementById(
"productoInventario").value;

let stock=
document.getElementById(
"stockInventario").value;

let minimo=
document.getElementById(
"minimoInventario").value;

let estado=
document.getElementById(
"estadoInventario").value;


if(
codigo===""||
producto===""||
stock===""||
minimo===""||
estado===""
){

alert(
"Complete todos los campos"
);

return;

}


if(filaInventario){

filaInventario.cells[0].innerHTML=codigo;
filaInventario.cells[1].innerHTML=producto;
filaInventario.cells[2].innerHTML=stock;
filaInventario.cells[3].innerHTML=minimo;
filaInventario.cells[4].innerHTML=estado;

filaInventario=null;

limpiarInventario();

return;

}


let tabla=
document.getElementById(
"tablaInventario")
.getElementsByTagName(
"tbody")[0];

let fila=
tabla.insertRow();

fila.insertCell(0).innerHTML=codigo;
fila.insertCell(1).innerHTML=producto;
fila.insertCell(2).innerHTML=stock;
fila.insertCell(3).innerHTML=minimo;
fila.insertCell(4).innerHTML=estado;


fila.onclick=function(){

filaInventario=fila;

document.getElementById(
"codigoInventario").value=
fila.cells[0].innerHTML;

document.getElementById(
"productoInventario").value=
fila.cells[1].innerHTML;

document.getElementById(
"stockInventario").value=
fila.cells[2].innerHTML;

document.getElementById(
"minimoInventario").value=
fila.cells[3].innerHTML;

document.getElementById(
"estadoInventario").value=
fila.cells[4].innerHTML;

}

limpiarInventario();

}



function editarInventario(){

if(!filaInventario){

alert(
"Seleccione un registro"
);

return;

}

alert(
"Modifique y guarde"
);

}


function eliminarInventario(){

if(!filaInventario){

alert(
"Seleccione un registro"
);

return;

}

filaInventario.remove();

filaInventario=null;

limpiarInventario();

}


function limpiarInventario(){

document.getElementById(
"codigoInventario").value="";

document.getElementById(
"productoInventario").value="";

document.getElementById(
"stockInventario").value="";

document.getElementById(
"minimoInventario").value="";

document.getElementById(
"estadoInventario").selectedIndex=0;

}
/* PROVEEDORES */

function guardarProveedor(){

let empresa=
document.getElementById(
"empresaProveedor").value;

let nombre=
document.getElementById(
"nombreProveedor").value;

let telefono=
document.getElementById(
"telefonoProveedor").value;

let correo=
document.getElementById(
"correoProveedor").value;


if(
empresa===""||
nombre===""||
telefono===""||
correo===""){

alert(
"Complete los campos"
);

return;

}

let tabla=
document.getElementById(
"tablaProveedores")
.getElementsByTagName(
"tbody")[0];

let fila=
tabla.insertRow();

fila.insertCell(0).innerHTML=empresa;
fila.insertCell(1).innerHTML=nombre;
fila.insertCell(2).innerHTML=telefono;
fila.insertCell(3).innerHTML=correo;

limpiarProveedor();

}



function limpiarProveedor(){

document.getElementById(
"empresaProveedor").value="";

document.getElementById(
"nombreProveedor").value="";

document.getElementById(
"telefonoProveedor").value="";

document.getElementById(
"correoProveedor").value="";

}