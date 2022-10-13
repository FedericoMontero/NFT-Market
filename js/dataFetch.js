
//Modulo Dashboard
//API KEY: coinranking3b6b109547c3dcffe70adc9d9a4892ed0856809aa43432a6
//aca sigo la documentacion de la API, considero que va con la tematica del proyecto.
let baseUrl= "https://api.coinranking.com/v2/coins"
let proxyUrl="https://cors-anywhere.herokuapp.com/"
let apiKey="coinranking3b6b109547c3dcffe70adc9d9a4892ed0856809aa43432a6"

fetch(`${proxyUrl}${baseUrl}`,{
    method:"GET",
    headers:{
        'Content-Type':'application/json',
        'x-access-token':`${apiKey}`,
        'Access-Control-Allow-Origin':'*'
    }
}).then((response)=>{
    if(response.ok){
        response.json().then((json)=>{
            console.log(json.data.coins)

            let coinsData=json.data.coins

            if(coinsData.length>0){
                var cryptoCoins=""
            }

            coinsData.forEach((coin)=>{
                cryptoCoins+="<tr>"
                cryptoCoins+=`<td>${coin.uuid}</td>`;
                cryptoCoins+=`<td>${coin.btcPrice}</td>`;
                cryptoCoins+=`<td>${coin.rank}</td>`;
                cryptoCoins+=`<td>${coin.tier}</td>`;
                cryptoCoins+=`<td>${coin.name}</td>`;
                cryptoCoins+=`<td>${coin.price}</td>`;
                cryptoCoins+=`<td>${coin.symbol}</td>`;"<tr>";
            })
            document.getElementById("data").innerHTML=cryptoCoins
    })
}
}).catch((error)=>{
    console.log(error)
})