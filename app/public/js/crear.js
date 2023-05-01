const abrir = document.getElementById("boton__crear");
const contenedor_crear = document.getElementById("contenedor_crear");
let crear = document.querySelectorAll(".crear")[0];
const cerrar = document.getElementById("crear__cerrar");
const nombre = document.getElementById("nombre__jugador");

var cantidad_jugadores;
var nombre_jugador;


abrir.addEventListener("click", ()=>{
        contenedor_crear.style.opacity="1";
        contenedor_crear.style.visibility="visible";
        crear.classList.toggle("ocultar")
})

let cantidad_1 = document.getElementById("cantidad_1");
let cantidad_2 = document.getElementById("cantidad_2");
let cantidad_3 = document.getElementById("cantidad_3");

cantidad_1.addEventListener("click",function(){
    cantidad_1.classList.add("cantidad_seleccionada");
    cantidad_2.classList.remove("cantidad_seleccionada");
    cantidad_3.classList.remove("cantidad_seleccionada");
})
cantidad_2.addEventListener("click",function(){
    cantidad_1.classList.remove("cantidad_seleccionada");
    cantidad_2.classList.add("cantidad_seleccionada");
    cantidad_3.classList.remove("cantidad_seleccionada");
})
cantidad_3.addEventListener("click",function(){
    cantidad_1.classList.remove("cantidad_seleccionada");
    cantidad_2.classList.remove("cantidad_seleccionada");
    cantidad_3.classList.add("cantidad_seleccionada");
})

let boton = document.getElementById("crear__iniciar__juego");


var imagen_perfil;

boton.addEventListener("click", function(){
    if(cantidad_1.classList.contains("cantidad_seleccionada")){

        cantidad_jugadores=2;
        nombre_jugador = nombre.value;
        num_imagen = numero_imagen();

        alert("2 jugadores, nombre:"+ nombre.value+" imagen: "+numero_imagen());
    }else if(cantidad_2.classList.contains("cantidad_seleccionada")){

        cantidad_jugadores=2;
        nombre_jugador = nombre.value;
        num_imagen = numero_imagen();

        alert("3 jugadores, nombre:"+ nombre.value+" imagen: "+numero_imagen())
    }else{

        cantidad_jugadores=2;
        nombre_jugador = nombre.value;
        num_imagen = numero_imagen();

        alert("4 jugadores, nombre:"+ nombre.value+" imagen: "+numero_imagen())
    }
    datos={
        cantidad_jugadores,
        nombre_jugador,
        num_imagen
    }
    console.log(datos)
    socket.emit('datos:interfaz', datos);

    window.location.href="tablero.html"
})

cerrar.addEventListener("click", ()=>{
    crear.classList.toggle("ocultar")
    
    setTimeout(function(){
        contenedor_crear.style.opacity="0";
        contenedor_crear.style.visibility="hidden";
    },200)
})
window.addEventListener("click", function(e){
    if(e.target==contenedor_crear){
        crear.classList.toggle("ocultar")
        setTimeout(function(){
            contenedor_crear.style.opacity="0";
            contenedor_crear.style.visibility="hidden";
        },200)
    }
})
