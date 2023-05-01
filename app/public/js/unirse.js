const _abrir = document.getElementById("boton__unirse");
const contenedor_unirse = document.getElementById("contenedor_unirse");
let crear_ventana = document.querySelectorAll(".unirse")[0];
const cerrar_ventana = document.getElementById("unirse_cerrar");

_abrir.addEventListener("click", ()=>{
    contenedor_unirse.style.opacity="1";
    contenedor_unirse.style.visibility="visible";
    crear_ventana.classList.toggle("ocultar")
})




let boton_unirse = document.getElementById("unirse__iniciar__juego");
let codigo_ingresado = document.getElementById("codigo_ingresado");

boton_unirse.addEventListener("click", function(){
    alert("nombre: "+ nombre.value+" imagen: "+numero_imagen()+" codigo: "+codigo_ingresado.value)
    window.location.href="tablero.html"
})


cerrar_ventana.addEventListener("click", ()=>{
    crear_ventana.classList.toggle("ocultar")
    
    setTimeout(function(){
        contenedor_unirse.style.opacity="0";
        contenedor_unirse.style.visibility="hidden";
    },200)
})



window.addEventListener("click", function(e){
    if(e.target==contenedor_unirse){
        crear_ventana.classList.toggle("ocultar")
        setTimeout(function(){
            contenedor_unirse.style.opacity="0";
            contenedor_unirse.style.visibility="hidden";
        },200)
    }
})