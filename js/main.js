/* ========================================
   FARSI LABAN WEBSITE - MAIN CONTROLLER
   This file initializes all modules
======================================== */

import { initCarousel } from "./carousel.js";
import { initUser } from "./user.js";
import { loadProducts } from "./products.js";
import { initCart } from "./cart.js";


document.addEventListener("DOMContentLoaded", () => {

    console.log("Farsi Laban Website Initialized");

    /* ========================================
       Initialize Product System
    ======================================== */

    if (typeof loadProducts === "function") {
        loadProducts();
    }


    /* ========================================
       Initialize Hero Carousel
    ======================================== */

    if (typeof initCarousel === "function") {
        initCarousel();
    }


    /* ========================================
       Initialize Guest Memory
    ======================================== */

    if (typeof initUser === "function") {
        initUser();
    }


    /* ========================================
       Initialize Cart System
    ======================================== */

    if (typeof initCart === "function") {
        initCart();
    }

});


/* ========================================
   HERO BUTTON FUNCTIONS
======================================== */

function scrollToProducts() {

    const section = document.getElementById("products");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* ========================================
   OPTIONAL: SCROLL TO TOP
   (Useful later)
======================================== */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ========================================
   MAKE FUNCTIONS GLOBAL (IMPORTANT)
======================================== */

window.scrollToProducts = scrollToProducts;
window.scrollToTop = scrollToTop;