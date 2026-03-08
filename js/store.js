// Added state, district, and city to each object for the filter logic
const stores = [
    { id:1, name:"Farsi Laban Kothamangalam", state: "Kerala", district: "Ernakulam", city: "Kothamangalam", address:"Kothamangalam, Ernakulam", phone:"+91 94966 30643", lat:10.0600, lng:76.6220 },
    { id:2, name:"Farsi Laban Thodupuzha", state: "Kerala", district: "Idukki", city: "Thodupuzha", address:"Thodupuzha, Idukki", phone:"+91 77363 29030", lat:9.8959, lng:76.7184 },
    { id:3, name:"Farsi Laban Kottayam", state: "Kerala", district: "Kottayam", city: "Kottayam", address:"Kottayam", phone:"+91 90377 42109", lat:9.5916, lng:76.5222 },
    { id:4, name:"Farsi Laban Thiruvalla", state: "Kerala", district: "Pathanamthitta", city: "Thiruvalla", address:"Thiruvalla, Pathanamthitta", phone:"+91 85930 42261", lat:9.3834, lng:76.5750 },
    { id:5, name:"Farsi Laban Kollam", state: "Kerala", district: "Kollam", city: "Kollam", address:"Kollam", phone:"+91 88912 00470", lat:8.8932, lng:76.6141 },
    { id:6, name:"Farsi Laban Alapuzha", state: "Kerala", district: "Alappuzha", city: "Alappuzha", address:"Alapuzha Town", phone:"", lat:9.4981, lng:76.3388 },
    { id:7, name:"Farsi Laban Kazhakootam", state: "Kerala", district: "Trivandrum", city: "Kazhakootam", address:"Kazhakootam, Trivandrum", phone:"+91 95671 37115", lat:8.5686, lng:76.8731 },
    { id:8, name:"Farsi Laban Ulloor", state: "Kerala", district: "Trivandrum", city: "Ulloor", address:"Ulloor, Trivandrum", phone:"+91 95449 00139", lat:8.5241, lng:76.9194 },
    { id:9, name:"Farsi Laban Marthandam", state: "Tamil Nadu", district: "Kanyakumari", city: "Marthandam", address:"Marthandam, Tamil Nadu", phone:"+91 95449 00139", lat:8.3114, lng:77.2185 },
    { id:10, name:"Farsi Laban Alwarpet", state: "Tamil Nadu", district: "Chennai", city: "Chennai", address:"Alwarpet, Chennai", phone:"+91 97907 85455", lat:13.0335, lng:80.2524 },
    { id:11, name:"Farsi Laban Anna Nagar", state: "Tamil Nadu", district: "Chennai", city: "Chennai", address:"Anna Nagar, Chennai", phone:"+91 92893 61364", lat:13.0850, lng:80.2101 },
    { id:12, name:"Farsi Laban OMR", state: "Tamil Nadu", district: "Chennai", city: "Chennai", address:"OMR, Chennai", phone:"+91 99400 81755", lat:12.9165, lng:80.2274 },
    { id:13, name:"Farsi Laban Ramanathapuram", state: "Tamil Nadu", district: "Ramanathapuram", city: "Ramanathapuram", address:"Ramanathapuram", phone:"+91 90034 30086", lat:9.3639, lng:78.8320 },
    { id:14, name:"Farsi Laban RS Puram", state: "Tamil Nadu", district: "Coimbatore", city: "Coimbatore", address:"RS Puram, Coimbatore", phone:"+91 81489 19893", lat:11.0076, lng:76.9498 },
    { id:15, name:"Farsi Laban Saravanampatti", state: "Tamil Nadu", district: "Coimbatore", city: "Coimbatore", address:"Saravanampatti, Coimbatore", phone:"+91 81489 19893", lat:11.0797, lng:76.9997 }
];

// SVG Icons matching your React component
const Icons = {
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
};

export function initStores() {
    const grid = document.getElementById("stores-grid");
    const mapView = document.getElementById("stores-map-view");
    const list = document.getElementById("stores-list");
    const map = document.getElementById("store-map");
    const container = document.getElementById("stores-container");

    if (!grid || !mapView || !list || !map || !container) return;

    /* ========================================
       1. INJECT CYAN FILTER UI & REACT CARD CSS
    ======================================== */
    const style = document.createElement("style");
    style.innerHTML = `
        /* Filter Container (From your screenshot) */
        .store-filters { display: flex; gap: 12px; margin-bottom: 30px; flex-wrap: wrap; align-items: center; }
        
        .filter-select, .filter-search {
            flex: 1; min-width: 180px; padding: 14px 16px; border-radius: 8px;
            font-family: inherit; font-size: 14px; outline: none; height: 50px; transition: 0.3s;
        }

        .filter-select {
            background: #ffffff; border: 1px solid #75cbf5; color: #4db9ec;
            appearance: none; cursor: pointer;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="%234db9ec"/><path d="M10 13l6 6 6-6" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
            background-repeat: no-repeat; background-position: right 8px center; padding-right: 40px;
        }
        .filter-select:disabled { opacity: 0.6; cursor: not-allowed; }
        .filter-select:focus { border-color: #00aaff; box-shadow: 0 0 0 3px rgba(0, 170, 255, 0.1); }

        .filter-search {
            background: #7bd0f7 url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="white"/><circle cx="14" cy="14" r="5" fill="none" stroke="%237bd0f7" stroke-width="2.5"/><line x1="22" y1="22" x2="18" y2="18" stroke="%237bd0f7" stroke-width="2.5" stroke-linecap="round"/></svg>') no-repeat 12px center;
            border: none; color: #ffffff; padding-left: 48px;
        }
        .filter-search::placeholder { color: #ffffff; font-weight: 500; }
        .filter-search:focus { box-shadow: 0 0 0 3px rgba(123, 208, 247, 0.3); }
        
        /* React Component Card Styles */
        .store-card, .store-list-item {
            padding: 20px; border-radius: 16px; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            cursor: pointer; background: #ffffff; text-align: left;
            border: 1px solid transparent; box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }
        .store-card:hover, .store-list-item:hover { background: #f8fafc; transform: translateX(6px); }
        .store-list-item.active {
            background: rgba(255, 255, 255, 0.9); box-shadow: 0 10px 30px rgba(0,0,0,0.08); 
            border-color: rgba(0, 119, 255, 0.2);
        }

        .react-store-name { font-weight: 700; font-size: 16px; color: #1a1a1a; margin-bottom: 6px; }
        .react-store-address { display: flex; align-items: flex-start; gap: 8px; font-size: 14px; color: #64748b; margin-bottom: 12px; line-height: 1.4; }
        .react-store-address svg { margin-top: 2px; flex-shrink: 0; color: #94a3b8; }
        .react-store-bottom { display: flex; align-items: center; justify-content: space-between; margin-top: 12px; }
        .react-store-phone { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #64748b; }
        .react-store-phone svg { color: #94a3b8; }
        
        /* React Call Button UI */
        .react-call-btn {
            display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px;
            border-radius: 12px; background: rgba(0, 119, 255, 0.1); color: #0077ff;
            font-size: 12px; font-weight: 600; text-decoration: none; transition: 0.3s;
        }
        .react-call-btn:hover { background: #0077ff; color: white; }
    `;
    document.head.appendChild(style);

    const filterDiv = document.createElement("div");
    filterDiv.className = "store-filters";
    filterDiv.innerHTML = `
        <select id="filter-state" class="filter-select"><option value="">Select State</option></select>
        <select id="filter-district" class="filter-select" disabled><option value="">Select District</option></select>
        <select id="filter-city" class="filter-select" disabled><option value="">Select City</option></select>
        <input type="text" id="filter-search" class="filter-search" placeholder="Search">
    `;
    // Insert filter bar right above the stores container
    container.parentNode.insertBefore(filterDiv, container);

    /* ========================================
       2. FILTER LOGIC
    ======================================== */
    const stateSel = document.getElementById("filter-state");
    const districtSel = document.getElementById("filter-district");
    const citySel = document.getElementById("filter-city");
    const searchInp = document.getElementById("filter-search");

    let filteredStores = [...stores];

    const states = [...new Set(stores.map(s => s.state))];
    states.forEach(state => stateSel.add(new Option(state, state)));

    function applyFilters() {
        const sState = stateSel.value;
        const sDist = districtSel.value;
        const sCity = citySel.value;
        const sText = searchInp.value.toLowerCase();

        filteredStores = stores.filter(store => {
            return (!sState || store.state === sState) &&
                   (!sDist || store.district === sDist) &&
                   (!sCity || store.city === sCity) &&
                   (!sText || store.name.toLowerCase().includes(sText) || store.address.toLowerCase().includes(sText));
        });

        mapView.classList.add("hidden");
        grid.classList.remove("hidden");
        
        loadGrid();
    }

    stateSel.addEventListener("change", () => {
        districtSel.innerHTML = '<option value="">Select District</option>';
        citySel.innerHTML = '<option value="">Select City</option>';
        citySel.disabled = true;

        if (stateSel.value) {
            districtSel.disabled = false;
            const dists = [...new Set(stores.filter(s => s.state === stateSel.value).map(s => s.district))];
            dists.forEach(d => districtSel.add(new Option(d, d)));
        } else districtSel.disabled = true;
        applyFilters();
    });

    districtSel.addEventListener("change", () => {
        citySel.innerHTML = '<option value="">Select City</option>';
        if (districtSel.value) {
            citySel.disabled = false;
            const cities = [...new Set(stores.filter(s => s.district === districtSel.value).map(s => s.city))];
            cities.forEach(c => citySel.add(new Option(c, c)));
        } else citySel.disabled = true;
        applyFilters();
    });

    citySel.addEventListener("change", applyFilters);
    searchInp.addEventListener("input", applyFilters);

    /* ========================================
       3. RENDER LOGIC (REACT LAYOUT)
    ======================================== */
    function getCardHTML(store) {
        // React's onClick stopPropagation logic applied directly to the anchor
        const phoneLink = store.phone ? store.phone.replace(/\s/g, "") : "";
        const callButtonHTML = store.phone 
            ? `<a href="tel:${phoneLink}" class="react-call-btn" onclick="event.stopPropagation()">${Icons.phone} Call</a>` 
            : `<span style="font-size: 12px; color: #aaa;">Coming Soon</span>`;

        return `
            <div class="react-store-name">${store.name}</div>
            <div class="react-store-address">
                ${Icons.mapPin} ${store.address}
            </div>
            <div class="react-store-bottom">
                <div class="react-store-phone">
                    ${Icons.phone} ${store.phone || "Number pending"}
                </div>
                ${callButtonHTML}
            </div>
        `;
    }

    function loadGrid() {
        grid.innerHTML = "";
        
        if (filteredStores.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #777;">No stores found matching your criteria.</p>`;
            return;
        }

        filteredStores.forEach(store => {
            const card = document.createElement("div");
            card.className = "store-card";
            card.innerHTML = getCardHTML(store);
            card.onclick = () => openStore(store);
            grid.appendChild(card);
        });
    }

    function openStore(store) {
        grid.classList.add("hidden");
        mapView.classList.remove("hidden");
        renderList(store);
        updateMap(store);
    }

    function renderList(active) {
        list.innerHTML = "";
        filteredStores.forEach(store => {
            const item = document.createElement("div");
            item.className = "store-list-item";
            
            if (store.id === active.id) {
                item.classList.add("active");
            }

            item.innerHTML = getCardHTML(store);
            
            item.onclick = () => {
                updateMap(store);
                renderList(store); // Re-render to move the "active" class
            };
            
            list.appendChild(item);
        });
    }

    function updateMap(store) {
        // Corrected URL structure to ensure proper map loading
        map.src = `http://maps.google.com/maps?q=${store.lat},${store.lng}&z=15&output=embed`;
    }

    // Start the whole process
    loadGrid();
}