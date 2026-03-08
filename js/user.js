/* ========================================
   USER MEMORY MODULE
   Stores and retrieves guest name
======================================== */

export function initUser(){

const nameDisplay=document.getElementById("user-name");

let userName=localStorage.getItem("farsi_user_name");

if(!userName){

setTimeout(()=>{

let name=prompt("Welcome to Farsi Laban! What is your name?");

if(name){

localStorage.setItem("farsi_user_name",name);

if(nameDisplay){
nameDisplay.innerText=name;
}

}

},4000);

}else{

if(nameDisplay){
nameDisplay.innerText=userName;
}

}

}