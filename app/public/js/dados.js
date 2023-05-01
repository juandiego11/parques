var numero_aleatorio_1;
var numero_aleatorio_2;


const dado1 = document.getElementById("dado_1")
const dado2 = document.getElementById("dado_2")

const contenedor_tiros = document.getElementById("posibles_tiros")

var direccion_anterior_1 = "dado_numero_1";
var direccion_anterior_2 = "dado_numero_1";

dado1.addEventListener("click", lanzar)
dado2.addEventListener("click", lanzar)

var carcel=true;
var cont_pares = 0;

function lanzar(){
    numero_aleatorio_1 = Math.floor(Math.random()*6)+1;
    numero_aleatorio_2 = Math.floor(Math.random()*6)+1;
    
       
    direccion_dado_1 = "dado_numero_"+numero_aleatorio_1; 
    dado1.classList.remove(direccion_anterior_1);
    
    direccion_dado_2 = "dado_numero_"+numero_aleatorio_2; 
    dado2.classList.remove(direccion_anterior_2);
    
    switch(numero_aleatorio_1){
        case 1:dado1.classList.add(direccion_dado_1); break;
        case 2:dado1.classList.add(direccion_dado_1); break;
        case 3:dado1.classList.add(direccion_dado_1); break;
        case 4:dado1.classList.add(direccion_dado_1); break;
        case 5:dado1.classList.add(direccion_dado_1); break;
        case 6:dado1.classList.add(direccion_dado_1); break;
    }  
    switch(numero_aleatorio_2){
        case 1:dado2.classList.add(direccion_dado_2); break;
        case 2:dado2.classList.add(direccion_dado_2); break;
        case 3:dado2.classList.add(direccion_dado_2); break;
        case 4:dado2.classList.add(direccion_dado_2); break;
        case 5:dado2.classList.add(direccion_dado_2); break;
        case 6:dado2.classList.add(direccion_dado_2); break;
    }  
    direccion_anterior_1 = direccion_dado_1; 
    direccion_anterior_2 = direccion_dado_2; 
    animacion(dado1,dado2)
   
   
    if(carcel == true){
        if(numero_aleatorio_1 == numero_aleatorio_2){
           setTimeout(salir_de_carcel,2000) 
        }else{
            cont_pares++;
        }
    }else{
        deshabilitar_dados()
        mostrar_numeros()
    }
}

function deshabilitar_dados(){
    dado1.style.pointerEvents="none"
    dado2.style.pointerEvents="none"
}

function mostrar_numeros(){
    setTimeout(function(){
        contenedor_tiros.style.visibility="visible"
        contenedor_tiros.children[0].innerHTML = numero_aleatorio_1;
        contenedor_tiros.children[1].innerHTML = numero_aleatorio_2;
        pieza_1.style.pointerEvents="all"
        pieza_2.style.pointerEvents="all"
        pieza_3.style.pointerEvents="all"
    },2000)
}


function animacion(x,y) {
    x.classList.add("cargando");
    y.classList.add("cargando");

    setTimeout(function(){
        x.classList.remove("cargando");
        y.classList.remove("cargando");
    },2000)
}
