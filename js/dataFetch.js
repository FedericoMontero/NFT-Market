
//Modulo Dashboard
//API KEY: coinranking3b6b109547c3dcffe70adc9d9a4892ed0856809aa43432a6

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
                let cryptoCoins=""
            }

            coinsData.forEach((coins)=>{
                cryptoCoins+="<tr>"
                cryptoCoins+=`<td>${coin.uuid}</td>`;
                cryptoCoins+=`<td>${coin.uuid}</td>`;
                cryptoCoins+=`<td>${coin.uuid}</td>`;
                cryptoCoins+=`<td>${coin.uuid}</td>`;
                cryptoCoins+=`<td>${coin.uuid}</td>`;
                cryptoCoins+=`<td>${coin.uuid}</td>`;
                cryptoCoins+=`<td>${coin.uuid}</td>`;
            })//https://www.youtube.com/watch?v=-fn_cse80-4 
            //min 25.04
    })
}
}).catch((error)=>{
    console.log(error)
})