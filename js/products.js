/* ========================================
   PRODUCT SYSTEM MODULE
   Handles product database and UI rendering
======================================== */

import { addToCart } from "./cart.js";

/* Product Database */

const products=[

{
name:"Classic Laban",
price:150,
image:"assets/heroproduct-1.png",
desc:"Traditional creamy laban."
},

{
name:"Pistachio Salankatia",
price:180,
image:"assets/heroproduct-3.png",
desc:"Rich pistachio topping."
},

{
name:"Nutella Laban",
price:200,
image:"assets/heroproduct-2.png",
desc:"Chocolate Nutella delight."
},

{
name:"Lotus Laban",
price:210,
image:"assets/heroproduct-4.png",
desc:"Lotus biscuit infused."
},

{
name:"Mango Laban",
price:190,
image:"assets/heroproduct-5.png",
desc:"Fresh mango sweetness."
}

];

/* Load Products into UI */

export function loadProducts(){

const grid=document.getElementById("product-grid");

if(!grid) return;

products.forEach(product=>{

const card=document.createElement("div");

card.className="product-card";

card.innerHTML=`

<img src="${product.image}">
<h3>${product.name}</h3>
<p>${product.desc}</p>
<div class="product-price">₹${product.price}</div>
<button class="add-cart-btn">Add to Cart</button>

`;

card.querySelector("button")
.addEventListener("click",()=>{

addToCart(product.name,product.price);

});

grid.appendChild(card);

});

}