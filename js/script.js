
//FETCH
/*
function fetchData(){
    fetch("./DB/data.json")
    .then(data => console.log(data))
    .then(response => response.json())
    }
    
        const html= data.data
        .map(data=>{
            return `
            <div class="card">
                <img src="${image}" alt="">
                <div class="creador-nfts">${creator}</div>
                <div class="name-ntf">${nftsnam}</div>
                <div class="price-nfts">${price}</div>
                <button class="comprar">Comprar</button>
            </div>
            `;
        })
        .join("");
        console.log(html);
        document.querySelector("#nfts-list").insertAdjacentHTML("afterbegin",html)
    
fetchData()

*/
//CONSTRUCTOR DE CARD

let nfts=[
    {
        "id":1,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":2,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":3,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":4,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":5,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":6,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":7,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":8,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":9,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":10,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":11,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img1.jpeg"
    }
]
const DOMnfts=document.querySelector(".container-pujas")

function createCard(){
    nfts.forEach((nft, indice) => {
        const miNodo = document.createElement('div');
        // Estructura
miNodo.innerHTML+=
`
<div class="card">
    <img src="${nft.image}" alt="">
    <div class="creador-nfts">${nft.creator}</div>
    <div class="name-ntf">${nft.nftsnam}</div>
    <div class="price-nfts">${nft.price}</div>
    <button onclick="prueba()" class="comprar">Comprar</button>
</div>
`
DOMnfts.appendChild(miNodo)
})
}
createCard();


//WALLET DE NFT





/*
<div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMknsLDOU0aQL6wc3cB188TZhjeuqbgRLSoQ&usqp=CAU" alt="">
    <div class="creador-nfts"></div>
    <div class="name-ntf"></div>
    <div class="price-nfts"></div>
     <button class="comprar">Comprar</button>
</div> */




