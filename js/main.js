/* ========================================
   FARSI LABAN WEBSITE - MAIN CONTROLLER
   This file initializes all modules
======================================== */

import { initCarousel } from "./carousel.js";
import { initUser } from "./user.js";
import { loadProducts } from "./products.js";
import { initCart } from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {

    /* Initialize Product System */
    loadProducts();

    /* Initialize Hero Carousel */
    initCarousel();

    /* Initialize Guest Memory */
    initUser();

    /* Initialize Cart System */
    initCart();

});


/* ========================================
   HERO BUTTON FUNCTIONS
======================================== */

function scrollToProducts(){

    const section = document.getElementById("products");

    if(section){

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ========================================
   MAKE FUNCTIONS GLOBAL (IMPORTANT)
======================================== */

window.scrollToProducts = scrollToProducts;