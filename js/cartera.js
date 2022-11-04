

//Profile Primera entrega
    let disponible_dolares=2000
    let disponible_BTC=5
    let cotizacion_BTC=25
    //muestro las variables en los elementos html
    document.getElementById("disponibledolares").innerHTML="USD "+disponible_dolares
    document.getElementById("disponiblebtc").innerHTML="BTC "+disponible_BTC

    //esto no deberia entar aca peeero quedo jeje
function comprar(){
    document.getElementById("getserver").innerHTML = "Usted aun no esta autorizado a comprar.";
   
}



const element = document.getElementById("vendernft");
element.addEventListener("click", vender);
function vender(){
    document.getElementById("getserver").innerHTML = "Usted aun no esta autorizado a vender.";
    
}

//funcion basica de guardar datos en el localstorage
guardar_datos();

//guardo datos en el localstorage
function guardar_datos(){
    let usuario="Federico Montero"
    let pais="Uruguay"
    localStorage.setItem("usuario",JSON.stringify(usuario));
    localStorage.setItem("pais",JSON.stringify(pais));
}

//consumo esos datos en el local storage.
var nombre = localStorage.getItem("usuario");
var pais = localStorage.getItem("pais");     
document.getElementById("profile_nombre").innerHTML = nombre;
document.getElementById("profile_pais").innerHTML = pais; 

function functionRemove(){
    localStorage.clear(pais)
}
