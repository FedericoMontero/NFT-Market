
//CONSTRUCTOR DE CARD


let nfts=[
    {
        "id":1,
        "nftsnam":"NFT 1",
        "creator":"Pedro Juan",
        "price":25,
        "image":"./assets/img1.jpeg"
    },
    {
        "id":2,
        "nftsnam":"NFT 2",
        "creator":"Alex G.",
        "price":25,
        "image":"./assets/img2.jpeg"
    },
    {
        "id":3,
        "nftsnam":"NFT 3",
        "creator":"Juan M.",
        "price":25,
        "image":"./assets/img3.jpeg"
    },
    {
        "id":4,
        "nftsnam":"NFT 4",
        "creator":"Pepe T.",
        "price":25,
        "image":"./assets/img4.jpeg"
    },
    {
        "id":5,
        "nftsnam":"NFT 5",
        "creator":"Debora M.",
        "price":25,
        "image":"./assets/img5.jpeg"
    },
    {
        "id":7,
        "nftsnam":"NFT 6",
        "creator":"Ariel M.",
        "price":25,
        "image":"./assets/img6.jpeg"
    },
    {
        "id":9,
        "nftsnam":"NFT 7",
        "creator":"Adrian T.",
        "price":25,
        "image":"./assets/img7.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 8",
        "creator":"Elva J.",
        "price":25,
        "image":"./assets/img8.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 9",
        "creator":"Federico M.",
        "price":25,
        "image":"./assets/img9.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 10",
        "creator":"Chris C.",
        "price":25,
        "image":"./assets/img10.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 11",
        "creator":"Samuel D.",
        "price":25,
        "image":"./assets/img11.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 12",
        "creator":"Ruben D.",
        "price":25,
        "image":"./assets/img12.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 13",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img13.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 14",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img14.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 15",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img15.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 16",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img16.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 17",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img17.jpeg"
    },
    {
        "id":11,
        "nftsnam":"gg",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img18.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 18",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img19.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 19",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img20.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 20",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img21.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 21",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img22.jpeg"
    },
    {
        "id":11,
        "nftsnam":"NFT 22",
        "creator":"Pedro",
        "price":25,
        "image":"./assets/img23.jpeg"
    },
];



const dibujarNFT=()=>{
let contenedor=document.getElementById("container-pujas");
nfts.forEach((nft,indice) => {
    let card = document.createElement("div");
    card.classList.add("card","col-sm-12", "col-lg-3")
    card.innerHTML+=`
    <img src="${nft.image}" alt="">
    <div class="creador-nfts">${nft.creator}</div>
    <div class="name-ntf">${nft.nftsnam}</div>
    <div class="price-nfts">${nft.price}</div>
    <button id="agregar${nft.id}" onclick="agregarCarrito(${indice})" class="comprar">Comprar</button>
    <div class="like-animation"></div>

    `
    contenedor.appendChild(card)
});
};

dibujarNFT();
let carrito=[]
let modalcarrito=document.getElementById("carrito")

const agregarCarrito=(indice)=>{
    const indiceEncontradoCarrito= carrito.findIndex((elemento)=>{
        return elemento.id===nfts[indice].id
    })
    if(indiceEncontradoCarrito===-1){
        const nftAgregar=nfts[indice]
        nftAgregar.cantidad=1;
        carrito.push(nftAgregar);
        dibujarCarrito();

    }else{
        carrito[indiceEncontradoCarrito].cantidad+=1;
        dibujarCarrito()
    }
};

let total=0


const dibujarCarrito=()=>{
    modalcarrito.className="carrito";
    modalcarrito.innerHTML="";
    if(carrito.length>0){
        //me quede en 2.16.36
        carrito.forEach((nft,indice) =>{
            total=total+nft.price*nft.cantidad;
            const carritoContainer=document.createElement("div");
            carritoContainer.className="nft-galeria";
            carritoContainer.innerHTML=`
            <img class=car-img src="${nft.image}"/>
            <div class="name-ntf">${nft.nftsnam}</div>
            
            `
            modalcarrito.appendChild(carritoContainer);
        }); 
    }else{
        modalcarrito.classList.remove("carrito")
    }
}

