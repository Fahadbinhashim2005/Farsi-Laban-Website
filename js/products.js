export function loadProducts() {

    const categories = [
        { id: "salankatia", label: "Salankatia" },
        { id: "loua", label: "Lou'a" },
        { id: "koushri", label: "Koushri" }
    ];

const products = [
        // SALANKATIA
        { id: 1, category: "salankatia", name: "Lotus Biscoff Salankatia", price: 350, image: "assets/products/lotussalankatia.png", description: "A caramelized biscoff dream <br> blended into a silky dessert", badge: "Best Seller" },
        { id: 2, category: "salankatia", name: "Pistachio Salankatia", price: 350, image: "assets/products/pistachiosalankatia.png", description: "Rich, creamy dessert infused with <br> premium pistachio flavor" },
        { id: 3, category: "salankatia", name: "Nutella Salankatia", price: 350, image: "assets/products/nutellasalankatia.png", description: "Smooth and indulgent chocolate <br> delight made with Nutella" },
        { id: 4, category: "salankatia", name: "Lotus + Pistachio Salankatia", price: 350, image: "assets/products/lotuspistachiosalankatia.png", description: "A blend of caramelized Lotus <br> and smooth pistachio richness", badge: "Best Seller" },
        { id: 5, category: "salankatia", name: "Nutella + Pistachio Salankatia", price: 350, image: "assets/products/nutellapistachiosalankatia.png", description: "A perfect half-and-half fusion of <br> rich Nutella and creamy pistachio" },
        { id: 6, category: "salankatia", name: "Nutella + Lotus Salankatia", price: 350, image: "assets/products/nutellalotussalankatia.png", description: "Double indulgence with rich Nutella <br> chocolate and sweet Lotus spread" },

        // LOU'A
        { id: 7, category: "loua", name: "Lotus Biscoff Lou'a", price: 350, image: "assets/products/lotuslou'a.png", description: "A caramelized biscoff dream <br> blended into a silky dessert", badge: "Best Seller" },
        { id: 8, category: "loua", name: "Nutella Lou'a", price: 350, image: "assets/products/nutellalou'a.png", description: "Smooth and indulgent chocolate <br> delight made with Nutella" },
        { id: 9, category: "loua", name: "Pistachio Lou'a", price: 350, image: "assets/products/pistachiolou'a.png", description: "Rich, creamy dessert infused with <br> premium pistachio flavor" },
        { id: 10, category: "loua", name: "Lotus + Pistachio Lou'a", price: 350, image: "assets/products/lotuspistachiolou'a.png", description: "A blend of caramelized Lotus <br> and smooth pistachio richness" },
        { id: 11, category: "loua", name: "Nutella + Pistachio Lou'a", price: 350, image: "assets/products/nutellapistachiolou'a.png", description: "A perfect half-and-half fusion of <br> rich Nutella and creamy pistachio" },
        { id: 12, category: "loua", name: "Nutella + Lotus Lou'a", price: 350, image: "assets/products/nutellalotuslou'a.png", description: "Double indulgence with rich Nutella <br> chocolate and sweet Lotus spread" },

        // KOUSHRI
        { id: 13, category: "koushri", name: "Lotus Biscoff Koushri", price: 350, image: "assets/products/lotuskoushri.png", description: "A caramelized biscoff dream <br> blended into a silky dessert", badge: "Best Seller" },
        { id: 14, category: "koushri", name: "Nutella Koushri", price: 350, image: "assets/products/nutellakoushri.png", description: "Smooth and indulgent chocolate <br> delight made with Nutella" },
        { id: 15, category: "koushri", name: "Pistachio Koushri", price: 350, image: "assets/products/pistachiokoushri.png", description: "Rich, creamy dessert infused with <br> premium pistachio flavor" },
        { id: 16, category: "koushri", name: "Lotus + Pistachio Koushri", price: 350, image: "assets/products/lotuspistachiokoushri.png", description: "A blend of caramelized Lotus <br> and smooth pistachio richness" },
        { id: 17, category: "koushri", name: "Nutella + Pistachio Koushri", price: 350, image: "assets/products/nutellapistachioskoushri.png", description: "A perfect half-and-half fusion of <br> rich Nutella and creamy pistachio" },
        { id: 18, category: "koushri", name: "Nutella + Lotus Koushri", price: 350, image: "assets/products/nutellalotuskoushri.png", description: "Double indulgence with rich Nutella <br> chocolate and sweet Lotus spread" }
    ];
    const specials = [
    { name: "Heba Cake", price: 350, image: "assets/products/hebacake.png", description: "Soft chocolate layers with creamy<br>texture, pistachio crumbs and drizzle<br>Perfectly balanced dessert" },
    { name: "Fazea Choco Cake", price: 490, image: "assets/products/fazeachocolacake.png", description: "Rich chocolate cake with smooth<br>ganache and crunchy hazelnuts<br>Deep cocoa indulgence" },
    { name: "DE Paris", price: 490, image: "assets/products/deparis.png", description: "Creamy layered dessert with rich<br>mango, strawberry and mulberry<br>Refreshing luxury treat" },
    { name: "Kabsa", price: 350, image: "assets/products/kabsa.png", description: "Chocolate loaded dessert with soft<br>cake bites and choco chunks<br>Crunchy and rich in every bite" },
    { name: "Cheese Bomb", price: 290, image: "assets/products/cheesebomb.png", description: "Crispy kunafa filled with melted<br>cheese and rich chocolate drizzle<br>Warm and gooey delight" }
];
    const grid = document.getElementById("product-grid");
    const specialGrid = document.getElementById("special-grid");
    const filters = document.getElementById("product-filters");

    // Fail-safe to prevent errors if elements aren't on the page
    if (!grid || !specialGrid || !filters) return;

    let active = "salankatia";

    /* ================= DELIVERY MODAL LOGIC ================= */
    
    function createDeliveryModal() {
        if (document.getElementById("delivery-modal")) return; // Don't create if it already exists

        // Inject Custom CSS just for the Modal and Order Button
        const style = document.createElement("style");
        style.innerHTML = `
            .order-btn {
                background: #0077ff; color: white; border: none; padding: 10px 18px;
                border-radius: 14px; font-weight: 600; font-size: 14px; cursor: pointer; 
                transition: 0.3s;
            }
            .order-btn:hover { background: #005ce6; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,119,255,0.2); }
            
            #delivery-modal {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); z-index: 3000;
                display: flex; justify-content: center; align-items: center;
                opacity: 0; visibility: hidden; transition: 0.3s ease;
            }
            #delivery-modal.show { opacity: 1; visibility: visible; }
            
            .delivery-modal-content {
                background: white; padding: 30px; border-radius: 24px;
                text-align: center; max-width: 320px; width: 90%;
                transform: translateY(20px); transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }
            #delivery-modal.show .delivery-modal-content { transform: translateY(0); }
            
            .delivery-modal-content h3 { font-size: 24px; color: #1a1a1a; margin-bottom: 5px; }
            .delivery-modal-content p { color: #666; font-size: 14px; margin-bottom: 25px; }
            
            .delivery-options { display: flex; flex-direction: column; gap: 12px; }
            
            .platform-btn {
                padding: 14px; border-radius: 14px; font-weight: 600; font-size: 16px;
                text-decoration: none; color: white; transition: 0.2s;
            }
            .swiggy-btn { background: #fc8019; }
            .swiggy-btn:hover { background: #e56e10; }
            .zomato-btn { background: #e23744; }
            .zomato-btn:hover { background: #cc2c38; }
            
            .close-modal-btn {
                margin-top: 20px; padding: 10px; background: none; border: none;
                color: #888; cursor: pointer; font-weight: 500; font-size: 15px; transition: 0.2s;
            }
            .close-modal-btn:hover { color: #222; }
        `;
        document.head.appendChild(style);

        // Create Modal HTML
        const modal = document.createElement("div");
        modal.id = "delivery-modal";
        modal.innerHTML = `
            <div class="delivery-modal-content">
                <h3>Order Online</h3>
                <p>Choose your preferred delivery partner</p>
                <div class="delivery-options">
                    <a href="https://www.swiggy.com/menu/1170749" target="_blank" class="platform-btn swiggy-btn">
                        🛵 Order on Swiggy
                    </a>
                    <a href="http://zoma.to/r/22099004" target="_blank" class="platform-btn zomato-btn">
                        🍅 Order on Zomato
                    </a>
                </div>
                <button class="close-modal-btn" id="close-delivery-modal">Cancel</button>
            </div>
        `;
        document.body.appendChild(modal);

        // Close logic when clicking outside or hitting Cancel
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeDeliveryModal();
        });
        document.getElementById("close-delivery-modal").addEventListener('click', closeDeliveryModal);
    }

    function openDeliveryModal() {
        const modal = document.getElementById("delivery-modal");
        if (modal) modal.classList.add("show");
    }

    function closeDeliveryModal() {
        const modal = document.getElementById("delivery-modal");
        if (modal) modal.classList.remove("show");
    }

    /* ================= PRODUCTS ================= */

    function renderProducts() {
        grid.innerHTML = "";

        products
            .filter(p => p.category === active)
            .forEach(p => {
                const card = document.createElement("div");
                card.className = "product-card";

                card.innerHTML = `
                    ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
                    
                    <div class="product-image">
                        <img src="${p.image}">
                    </div>                
                    <div class="product-title">${p.name}</div>
                    
                    <div class="product-desc">${p.description}</div>
                    
                    <div class="product-footer">
                        <span class="price">₹${p.price}</span>
                        <button class="order-btn">Order Now</button>
                    </div>
                `;

                grid.appendChild(card);

                // Attach modal trigger
                card.querySelector(".order-btn").addEventListener("click", openDeliveryModal);
            });
    }

    /* ================= FILTERS ================= */

    function renderFilters() {
        categories.forEach(cat => {
            const btn = document.createElement("button");
            btn.className = `filter-btn ${cat.id === active ? "active" : ""}`;
            btn.textContent = cat.label;

            btn.onclick = () => {
                active = cat.id;

                document.querySelectorAll(".filter-btn")
                    .forEach(b => b.classList.remove("active"));
                
                btn.classList.add("active");
                renderProducts();
            };

            filters.appendChild(btn);
        });
    }

   /* ================= SPECIAL PRODUCTS (FIXED STRUCTURE) ================= */

function renderSpecials() {
    specialGrid.innerHTML = "";

    specials.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";

        // This structure now matches your "SPECIAL SECTION" CSS perfectly
        card.innerHTML = `
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="product-info-column">
                <div class="special-text-top">
                    <div class="product-title">${p.name}</div>
                    <div class="product-desc">${p.description}</div>
                </div>
                <div class="special-action-row">
                    <span class="price">₹${p.price}</span>
                    <button class="order-btn">Order Now</button>
                </div>
            </div>
        `;

        specialGrid.appendChild(card);

        // Attach modal trigger
        card.querySelector(".order-btn").addEventListener("click", openDeliveryModal);
    });
}
    /* ================= HORIZONTAL SCROLL ================= */

    function enableHorizontalScroll() {
        const containers = [
            document.getElementById("product-grid"),
            document.getElementById("special-grid")
        ];

        containers.forEach(container => {
            if (!container) return;

            container.addEventListener("wheel", (e) => {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            });
        });
    }

    /* ================= INITIALIZE ================= */

    createDeliveryModal(); // Inject Modal into DOM
    renderFilters();
    renderProducts();
    renderSpecials();
    enableHorizontalScroll();
}