let img_1 = document.getElementById("img_1")
let img_2 = document.getElementById("img_2")
let img_3 = document.getElementById("img_3")
let img_4 = document.getElementById("img_4")
let img_5 = document.getElementById("img_5")
let img_6 = document.getElementById("img_6")
let img_7 = document.getElementById("img_7")
let img_8 = document.getElementById("img_8")

img_1.addEventListener("click",function(){
    img_1.classList.add("seleccionado");
    img_2.classList.remove("seleccionado");
    img_3.classList.remove("seleccionado");
    img_4.classList.remove("seleccionado");
    img_5.classList.remove("seleccionado");
    img_6.classList.remove("seleccionado");
    img_7.classList.remove("seleccionado");
    img_8.classList.remove("seleccionado");
})
img_2.addEventListener("click",function(){
    img_1.classList.remove("seleccionado");
    img_2.classList.add("seleccionado");
    img_3.classList.remove("seleccionado");
    img_4.classList.remove("seleccionado");
    img_5.classList.remove("seleccionado");
    img_6.classList.remove("seleccionado");
    img_7.classList.remove("seleccionado");
    img_8.classList.remove("seleccionado");
})
img_3.addEventListener("click",function(){
    img_1.classList.remove("seleccionado");
    img_2.classList.remove("seleccionado");
    img_3.classList.add("seleccionado");
    img_4.classList.remove("seleccionado");
    img_5.classList.remove("seleccionado");
    img_6.classList.remove("seleccionado");
    img_7.classList.remove("seleccionado");
    img_8.classList.remove("seleccionado");
})
img_4.addEventListener("click",function(){
    img_1.classList.remove("seleccionado");
    img_2.classList.remove("seleccionado");
    img_3.classList.remove("seleccionado");
    img_4.classList.add("seleccionado");
    img_5.classList.remove("seleccionado");
    img_6.classList.remove("seleccionado");
    img_7.classList.remove("seleccionado");
    img_8.classList.remove("seleccionado");
})
img_5.addEventListener("click",function(){
    img_1.classList.remove("seleccionado");
    img_2.classList.remove("seleccionado");
    img_3.classList.remove("seleccionado");
    img_4.classList.remove("seleccionado");
    img_5.classList.add("seleccionado");
    img_6.classList.remove("seleccionado");
    img_7.classList.remove("seleccionado");
    img_8.classList.remove("seleccionado");
})
img_6.addEventListener("click",function(){
    img_1.classList.remove("seleccionado");
    img_2.classList.remove("seleccionado");
    img_3.classList.remove("seleccionado");
    img_4.classList.remove("seleccionado");
    img_5.classList.remove("seleccionado");
    img_6.classList.add("seleccionado");
    img_7.classList.remove("seleccionado");
    img_8.classList.remove("seleccionado");
})
img_7.addEventListener("click",function(){
    img_1.classList.remove("seleccionado");
    img_2.classList.remove("seleccionado");
    img_3.classList.remove("seleccionado");
    img_4.classList.remove("seleccionado");
    img_5.classList.remove("seleccionado");
    img_6.classList.remove("seleccionado");
    img_7.classList.add("seleccionado");
    img_8.classList.remove("seleccionado");
})
img_8.addEventListener("click",function(){
    img_1.classList.remove("seleccionado");
    img_2.classList.remove("seleccionado");
    img_3.classList.remove("seleccionado");
    img_4.classList.remove("seleccionado");
    img_5.classList.remove("seleccionado");
    img_6.classList.remove("seleccionado");
    img_7.classList.remove("seleccionado");
    img_8.classList.add("seleccionado");
})

function numero_imagen(){
    let valor;
    if(img_1.classList.contains("seleccionado")){valor = 1;}
    if(img_2.classList.contains("seleccionado")){valor = 2;}
    if(img_3.classList.contains("seleccionado")){valor = 3;}
    if(img_4.classList.contains("seleccionado")){valor = 4;}
    if(img_5.classList.contains("seleccionado")){valor = 5;}
    if(img_6.classList.contains("seleccionado")){valor = 6;}
    if(img_7.classList.contains("seleccionado")){valor = 7;}
    if(img_8.classList.contains("seleccionado")){valor = 8;}
    return valor;
}