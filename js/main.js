/* ========================================
FARSI LABAN WEBSITE - MAIN CONTROLLER
This file initializes all modules
======================================== */

import { initCarousel } from "./carousel.js";
import { initUser } from "./user.js";
import { loadProducts } from "./products.js";
import { initStores } from "./store.js";

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
       Initialize Store Locator
    ======================================== */
    if (typeof initStores === "function") {
        initStores();
    }

    /* ========================================
       SPLASH SCREEN
    ======================================== */
    const splash = document.getElementById("farsi-splash");
    const text = document.querySelector(".brand-text");

    if (splash) {
        setTimeout(() => {
            if (text) text.classList.add("show");
        }, 1200);

        setTimeout(() => {
            splash.style.opacity = "0";
            splash.style.transform = "scale(1.1)";
        }, 2800);

        setTimeout(() => {
            splash.remove();
        }, 3400);
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