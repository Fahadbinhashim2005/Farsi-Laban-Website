/* ========================================
   HERO CAROUSEL MODULE
   Handles rotating arc images in hero section
======================================== */

export function initCarousel(){

const items=document.querySelectorAll(".arc-item");
const positions=["pos1","pos2","pos3","pos4","pos5"];

function rotate(){

items.forEach((item)=>{

let currentIndex=positions.findIndex(pos=>
item.classList.contains(pos)
);

if(currentIndex===-1) return;

item.classList.remove(positions[currentIndex]);

let nextIndex=(currentIndex+1)%positions.length;

item.classList.add(positions[nextIndex]);

});

}

/* Auto rotation */

if(items.length>0){
setInterval(rotate,3000);
}

/* Scroll rotation */

const heroSection=document.querySelector(".arc-carousel");

if(heroSection){

let scrollCooldown=false;

heroSection.addEventListener("wheel",(e)=>{

e.preventDefault();

if(scrollCooldown) return;

scrollCooldown=true;

rotate();

setTimeout(()=>{
scrollCooldown=false;
},500);

},{passive:false});

}

}