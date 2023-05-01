const pieza_1 = document.getElementById("pieza_roja_1")
const pieza_2 = document.getElementById("pieza_roja_2")
const pieza_3 = document.getElementById("pieza_roja_3")

const casillas_filas_centro = [ 
    "1/2",
    "2/3",
    "3/4",
    "4/5",
    "5/6",
    "6/7",
    "7/8",
    "8/9",

    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",

    "12/13",
    "15/16",

    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",

    "16/17",
    "17/18",
    "18/19",
    "19/20",
    "20/21",
    "21/22",
    "22/23",

    "23/24",
    "23/24",
    "23/24",

    "22/23",
    "21/22",
    "20/21",
    "19/20",
    "18/19",
    "17/18",
    "16/17",

    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",

    "15/16",
    "12/13",
    "9/10",

    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    
    "8/9",
    "7/8",
    "6/7",
    "5/6",
    "4/5",
    "3/4",
    "2/3",
    "1/2",
    "1/2",


]
const casillas_columnas_centro = [ 
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",

    "8/9",
    "7/8",
    "6/7",
    "5/6",
    "4/5",
    "3/4",
    "2/3",
    "1/2",
    
    "1/2",
    "1/2",

    "2/3",
    "3/4",
    "4/5",
    "5/6",
    "6/7",
    "7/8",
    "8/9",

    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    "9/10",
    
    "9/10",
    "12/13",
    "15/16",

    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",

    "16/17",
    "17/18",
    "18/19",
    "19/20",
    "20/21",
    "21/22",
    "22/23",

    "23/24",
    "23/24",
    "23/24",
    
    "22/23",
    "21/22",
    "20/21",
    "19/20",
    "18/19",
    "17/18",
    "16/17",
    
    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",
    "15/16",

    "12/13"
]
const casillas_filas_dentro = [ 
    "1/2",
    "2/3",
    "3/4",
    "4/5",
    "5/6",
    "6/7",
    "7/8",
    "8/9",

    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    

    "11/12",
    "14/15",

    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    
    "16/17",
    "17/18",
    "18/19",
    "19/20",
    "20/21",
    "21/22",
    "22/23",

    "23/24",
    "23/24",
    "23/24",

    "22/23",
    "21/22",
    "20/21",
    "19/20",
    "18/19",
    "17/18",
    "16/17",

    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    
    "14/15",
    "13/14",
    "10/11",

    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    
    
    "8/9",
    "7/8",
    "6/7",
    "5/6",
    "4/5",
    "3/4",
    "2/3",
    "1/2",
    "1/2",


]
const casillas_columnas_dentro = [ 
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    

    "8/9",
    "7/8",
    "6/7",
    "5/6",
    "4/5",
    "3/4",
    "2/3",
    "1/2",
    
    "1/2",
    "1/2",

    "2/3",
    "3/4",
    "4/5",
    "5/6",
    "6/7",
    "7/8",
    "8/9",

    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    "10/11",
    
    
    "10/11",
    "11/12",
    "14/15",

    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    

    "16/17",
    "17/18",
    "18/19",
    "19/20",
    "20/21",
    "21/22",
    "22/23",

    "23/24",
    "23/24",
    "23/24",
    
    "22/23",
    "21/22",
    "20/21",
    "19/20",
    "18/19",
    "17/18",
    "16/17",
    
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    "14/15",
    

    "13/14"
]
const casillas_filas_fuera = [ 
    "1/2",
    "2/3",
    "3/4",
    "4/5",
    "5/6",
    "6/7",
    "7/8",
    "8/9",

    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    

    "13/14",
    "16/17",

    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
   

    "16/17",
    "17/18",
    "18/19",
    "19/20",
    "20/21",
    "21/22",
    "22/23",

    "23/24",
    "23/24",
    "23/24",

    "22/23",
    "21/22",
    "20/21",
    "19/20",
    "18/19",
    "17/18",
    "16/17",

    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    

    "16/17",
    "11/12",
    "8/9",

    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
        
    
    "8/9",
    "7/8",
    "6/7",
    "5/6",
    "4/5",
    "3/4",
    "2/3",
    "1/2",
    "1/2",


]
const casillas_columnas_fuera = [ 
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
   
   

    "8/9",
    "7/8",
    "6/7",
    "5/6",
    "4/5",
    "3/4",
    "2/3",
    "1/2",
    
    "1/2",
    "1/2",

    "2/3",
    "3/4",
    "4/5",
    "5/6",
    "6/7",
    "7/8",
    "8/9",

    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    "8/9",
    
    
    "8/9",
    "13/14",
    "16/17",

    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    
    

    "16/17",
    "17/18",
    "18/19",
    "19/20",
    "20/21",
    "21/22",
    "22/23",

    "23/24",
    "23/24",
    "23/24",
    
    "22/23",
    "21/22",
    "20/21",
    "19/20",
    "18/19",
    "17/18",
    "16/17",
    
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    "16/17",
    

    "11/12"
]


var posicion_pieza_1;
var posicion_pieza_2;
var posicion_pieza_3;


/******* Salir de carcel ******/
function salir_de_carcel(){
    pieza_1.style.pointerEvents="all"
    pieza_1.style.gridColumn = "9/10"
    pieza_1.style.gridRow = "5/6"
    pieza_2.style.pointerEvents="all"
    pieza_2.style.gridColumn = "8/9"
    pieza_2.style.gridRow = "5/6"
    pieza_3.style.pointerEvents="all"
    pieza_3.style.gridColumn = "10/11"
    pieza_3.style.gridRow = "5/6"
    posicion_pieza_1 = 5;
    posicion_pieza_2 = 5;
    posicion_pieza_3 = 5;
    cont_pares = 0;
    pieza_1.style.pointerEvents="none"
    pieza_2.style.pointerEvents="none"
    pieza_3.style.pointerEvents="none"
    carcel = false;
}
/****** */


var movimientos = 0

pieza_1.addEventListener("click",function(){
    if(movimientos==0){
        mover_pieza(pieza_1,numero_aleatorio_1,posicion_pieza_1,casillas_filas_centro,casillas_columnas_centro)
        movimientos++;
    }else{
        mover_pieza(pieza_1,numero_aleatorio_2,posicion_pieza_1,casillas_filas_centro,casillas_columnas_centro)
        movimientos=0;
        nuevo_turno();
    }
})
pieza_2.addEventListener("click",function(){
    if(movimientos==0){
        mover_pieza(pieza_2,numero_aleatorio_1,posicion_pieza_2, casillas_filas_fuera,casillas_columnas_fuera)
        movimientos++;
    }else{
        mover_pieza(pieza_2,numero_aleatorio_2,posicion_pieza_2, casillas_filas_fuera,casillas_columnas_fuera)
        movimientos=0;
        nuevo_turno();
    }
})
pieza_3.addEventListener("click",function(){
    if(movimientos==0){
        mover_pieza(pieza_3,numero_aleatorio_1,posicion_pieza_3, casillas_filas_dentro,casillas_columnas_dentro)
        movimientos++;
    }else{
        mover_pieza(pieza_3,numero_aleatorio_2,posicion_pieza_3, casillas_filas_dentro,casillas_columnas_dentro)
        movimientos=0;
        nuevo_turno();
    }
})

function mover_pieza(x,n,pi,filas,columnas){
    i=pi;
    var id = setInterval(function(){
        x.style.gridRow = filas[i];
        x.style.gridColumn = columnas[i];
        i++;
        if(i>=n+pi){
            if(filas == casillas_filas_centro){
                console.log(pi)
                posicion_pieza_1=i;
            }
            if(filas == casillas_filas_fuera){
                console.log(pi)
                posicion_pieza_2=i;
            }
            if(filas == casillas_filas_dentro){
                console.log(pi)
                posicion_pieza_3=i;
            }
            clearInterval(id)
        }
    },300)
    contenedor_tiros.children[0].classList.remove("tiro_ejecutar")
    contenedor_tiros.children[1].classList.add("tiro_ejecutar")
}

function nuevo_turno(){
    setTimeout(function(){
        dado1.style.pointerEvents="all"
        dado2.style.pointerEvents="all"
        contenedor_tiros.style.visibility="hidden"
        pieza_1.style.pointerEvents="none"
        pieza_2.style.pointerEvents="none"
        pieza_3.style.pointerEvents="none"
        contenedor_tiros.children[1].classList.remove("tiro_ejecutar")
        contenedor_tiros.children[0].classList.add("tiro_ejecutar")
    },500)
    
}




