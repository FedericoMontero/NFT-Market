//Profile Primera entrega
    let disponible_dolares=2000
    let disponible_BTC=5
    let cotizacion_BTC=25
    document.getElementById("disponibledolares").innerHTML="USD "+disponible_dolares
    document.getElementById("disponiblebtc").innerHTML="BTC "+disponible_BTC

function comprar(){
    let disponible_dolares=2000
    let disponible_BTC=5
    let cotizacion_BTC=25

    document.getElementById("disponibledolares").innerHTML="USD "+disponible_dolares
    document.getElementById("disponiblebtc").innerHTML="BTC "+disponible_BTC

    let movimiento = prompt("Elija 1 para comprar BTC o 2 para agregar dinero a la cartera")
    if (movimiento==="1"){
        let montoBTCcompra = Number(prompt("Cuantos BTC quiere comprar?"))
        let nuevo_BTCdisponible=disponible_BTC+montoBTCcompra
        let nuevo_Dolaresdisponible=montoBTCcompra*cotizacion_BTC-disponible_dolares

    document.getElementById("disponibledolares").innerHTML="USD " + nuevo_Dolaresdisponible
    document.getElementById("disponiblebtc").innerHTML="BTC " + nuevo_BTCdisponible
}
}

