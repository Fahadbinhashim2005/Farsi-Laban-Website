/* ========================================
   CART SYSTEM MODULE
   Handles cart logic and drawer
======================================== */

let cart=[];

export function initCart(){

window.toggleCart=toggleCart;

}

export function addToCart(name,price){

cart.push({name,price});

updateCart();

}

function updateCart(){

const cartItems=document.getElementById("cart-items");
const cartTotal=document.getElementById("cart-total");

if(!cartItems||!cartTotal) return;

cartItems.innerHTML="";

let total=0;

cart.forEach(item=>{

cartItems.innerHTML+=`

<div class="cart-item">
<span>${item.name}</span>
<span>₹${item.price}</span>
</div>

`;

total+=item.price;

});

cartTotal.innerText=total;

}

function toggleCart(){

const drawer=document.getElementById("cartDrawer");

if(!drawer) return;

drawer.classList.toggle("open");

}