let coins=[
    {id:1,titulo:"Solana",precio:20},
    {id:2,titulo:"btc",precio:30},
    {id:3,titulo:"ñery coin",precio:0.000001},
];
for (coin of coins){
    let contenedor = document.createElement("div");
    contenedor.innerHTML=`<h3> Moneda: ${coin.titulo}</h3>
    <p>Precio: ${coin.precio}</p>`;
    document.body.appendChild(contenedor)
}




