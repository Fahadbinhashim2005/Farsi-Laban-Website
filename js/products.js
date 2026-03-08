export function loadProducts(){

const categories = [
{id:"salankatia",label:"Salankatia"},
{id:"loua",label:"Lou'a"},
{id:"koushri",label:"Koushri"}
];

const products = [

{id:1,category:"salankatia",name:"Classic Salankatia",price:249,rating:4.9,image:"assets/products/salankatia1.png",description:"Traditional creamy salankatia",badge:"Best Seller"},
{id:2,category:"salankatia",name:"Pistachio Salankatia",price:279,rating:5,image:"assets/products/salankatia2.png",description:"Premium pistachio topping"},
{id:3,category:"salankatia",name:"Nutella Salankatia",price:269,rating:4.8,image:"assets/products/salankatia3.png",description:"Chocolate hazelnut swirl"},
{id:4,category:"salankatia",name:"Classic Salankatia",price:249,rating:4.9,image:"assets/products/salankatia1.png",description:"Traditional creamy salankatia",badge:"Best Seller"},
{id:5,category:"salankatia",name:"Pistachio Salankatia",price:279,rating:5,image:"assets/products/salankatia2.png",description:"Premium pistachio topping"},
{id:6,category:"salankatia",name:"Nutella Salankatia",price:269,rating:4.8,image:"assets/products/salankatia3.png",description:"Chocolate hazelnut swirl"},

{id:7,category:"loua",name:"Classic Lou'a",price:199,rating:4.7,image:"assets/products/loua1.png",description:"Traditional Egyptian dessert",badge:"Best Seller"},
{id:8,category:"loua",name:"Mango Lou'a",price:219,rating:4.8,image:"assets/products/loua2.png",description:"Fresh mango flavor"},
{id:9,category:"loua",name:"Vanilla Lou'a",price:209,rating:4.6,image:"assets/products/loua3.png",description:"Classic vanilla taste"},
{id:10,category:"loua",name:"Chocolate Lou'a",price:229,rating:4.9,image:"assets/products/loua4.png",description:"Rich chocolate flavor"},
{id:11,category:"loua",name:"Strawberry Lou'a",price:219,rating:4.8,image:"assets/products/loua5.png",description:"Fresh strawberry swirl"},
{id:12,category:"loua",name:"Pistachio Lou'a",price:239,rating:5,image:"assets/products/loua6.png",description:"Premium pistachio topping"},

{id:13,category:"koushri",name:"Classic Koushri",price:229,rating:4.9,image:"assets/products/koushri1.png",description:"Traditional layered dessert",badge:"Best Seller"},
{id:14,category:"koushri",name:"Mango Koushri",price:249,rating:4.8,image:"assets/products/koushri2.png",description:"Fresh mango flavor"},
{id:15,category:"koushri",name:"Vanilla Koushri",price:239,rating:4.6,image:"assets/products/koushri3.png",description:"Classic vanilla taste"},
{id:16,category:"koushri",name:"Chocolate Koushri",price:259,rating:4.9,image:"assets/products/koushri4.png",description:"Rich chocolate flavor"},
{id:17,category:"koushri",name:"Strawberry Koushri",price:249,rating:4.8,image:"assets/products/koushri5.png",description:"Fresh strawberry swirl"},
{id:18,category:"koushri",name:"Pistachio Koushri",price:269,rating:5,image:"assets/products/koushri6.png",description:"Premium pistachio topping"}

];

const specials=[
{name:"Heba Cake",price:349,rating:5,image:"assets/products/special1.png",description:"Premium royal dessert"},
{name:"Fazea Choco Cake",price:359,rating:5,image:"assets/products/special2.png",description:"Lotus cream masterpiece"},
{name:"DE Paris",price:349,rating:5,image:"assets/products/special1.png",description:"Premium royal dessert"},
{name:"Kabsa",price:359,rating:5,image:"assets/products/special2.png",description:"Lotus cream masterpiece"},
{name:"Cheese Bomb",price:349,rating:5,image:"assets/products/special1.png",description:"Premium royal dessert"}
];

const grid=document.getElementById("product-grid");
const specialGrid=document.getElementById("special-grid");
const filters=document.getElementById("product-filters");

let active="salankatia";


/* ================= PRODUCTS ================= */

function renderProducts(){

grid.innerHTML="";

products
.filter(p=>p.category===active)
.forEach(p=>{

const card=document.createElement("div");
card.className="product-card";

card.innerHTML=`
${p.badge?`<span class="badge">${p.badge}</span>`:""}

<div class="product-image">
<img src="${p.image}">
</div>

<div class="rating">★★★★★ ${p.rating}</div>

<div class="product-title">${p.name}</div>

<div class="product-desc">${p.description}</div>

<div class="product-footer">

<span class="price">₹${p.price}</span>

<div style="display:flex;gap:8px;align-items:center">

<div class="qty">
<button class="minus">-</button>
<span>1</span>
<button class="plus">+</button>
</div>

<button class="cart-btn">🛒</button>

</div>

</div>
`;

grid.appendChild(card);


/* ===== Quantity Controls ===== */

const minus=card.querySelector(".minus");
const plus=card.querySelector(".plus");
const qty=card.querySelector(".qty span");

let count=1;

plus.onclick=()=>{
count++;
qty.textContent=count;
};

minus.onclick=()=>{
if(count>1){
count--;
qty.textContent=count;
}
};

});

}


/* ================= FILTERS ================= */

function renderFilters(){

categories.forEach(cat=>{

const btn=document.createElement("button");

btn.className=`filter-btn ${cat.id===active?"active":""}`;
btn.textContent=cat.label;

btn.onclick=()=>{

active=cat.id;

document.querySelectorAll(".filter-btn")
.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

renderProducts();

};

filters.appendChild(btn);

});

}


/* ================= SPECIAL PRODUCTS ================= */

function renderSpecials(){

specialGrid.innerHTML="";

specials.forEach(p=>{

const card=document.createElement("div");
card.className="product-card";

card.innerHTML=`

<div class="product-image">
<img src="${p.image}">
</div>

<div class="rating">★★★★★ ${p.rating}</div>

<div class="product-title">${p.name}</div>

<div class="product-desc">${p.description}</div>

<div class="product-footer">

<span class="price">₹${p.price}</span>

<button class="cart-btn">🛒</button>

</div>

`;

specialGrid.appendChild(card);

});

}


/* ================= HORIZONTAL SCROLL ================= */

function enableHorizontalScroll(){

const containers = [
document.getElementById("product-grid"),
document.getElementById("special-grid")
];

containers.forEach(container => {

if(!container) return;

container.addEventListener("wheel",(e)=>{

e.preventDefault();

container.scrollLeft += e.deltaY;

});

});

}
/* ================= INITIALIZE ================= */

renderFilters();
renderProducts();
renderSpecials();
enableHorizontalScroll();

}