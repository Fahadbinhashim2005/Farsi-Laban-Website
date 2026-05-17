const stores = [
    { id:1,  name:"Farsi Laban Kothamangalam", state:"Kerala",     district:"Ernakulam",       city:"Kothamangalam", address:"Kothamangalam, Ernakulam",     phone:"+91 94966 30643", lat:10.0600, lng:76.6220 },
    { id:2,  name:"Farsi Laban Thodupuzha",    state:"Kerala",     district:"Idukki",          city:"Thodupuzha",    address:"Thodupuzha, Idukki",           phone:"+91 77363 29030", lat:9.8959,  lng:76.7184 },
    { id:3,  name:"Farsi Laban Kottayam",      state:"Kerala",     district:"Kottayam",        city:"Kottayam",      address:"Kottayam",                     phone:"+91 90377 42109", lat:9.5916,  lng:76.5222 },
    { id:4,  name:"Farsi Laban Thiruvalla",    state:"Kerala",     district:"Pathanamthitta",  city:"Thiruvalla",    address:"Thiruvalla, Pathanamthitta",   phone:"+91 85930 42261", lat:9.3834,  lng:76.5750 },
    { id:5,  name:"Farsi Laban Kollam",        state:"Kerala",     district:"Kollam",          city:"Kollam",        address:"Kollam",                       phone:"+91 88912 00470", lat:8.8932,  lng:76.6141 },
    { id:6,  name:"Farsi Laban Alapuzha",      state:"Kerala",     district:"Alappuzha",       city:"Alappuzha",     address:"Alapuzha Town",                phone:"",                lat:9.4981,  lng:76.3388 },
    { id:7,  name:"Farsi Laban Kazhakootam",   state:"Kerala",     district:"Trivandrum",      city:"Kazhakootam",   address:"Kazhakootam, Trivandrum",      phone:"+91 95671 37115", lat:8.5686,  lng:76.8731 },
    { id:8,  name:"Farsi Laban Ulloor",        state:"Kerala",     district:"Trivandrum",      city:"Ulloor",        address:"Ulloor, Trivandrum",           phone:"+91 95449 00139", lat:8.5241,  lng:76.9194 },
    { id:9,  name:"Farsi Laban Marthandam",    state:"Tamil Nadu", district:"Kanyakumari",     city:"Marthandam",    address:"Marthandam, Tamil Nadu",       phone:"+91 95449 00139", lat:8.3114,  lng:77.2185 },
    { id:10, name:"Farsi Laban Alwarpet",      state:"Tamil Nadu", district:"Chennai",         city:"Chennai",       address:"Alwarpet, Chennai",            phone:"+91 97907 85455", lat:13.0335, lng:80.2524 },
    { id:11, name:"Farsi Laban Anna Nagar",    state:"Tamil Nadu", district:"Chennai",         city:"Chennai",       address:"Anna Nagar, Chennai",          phone:"+91 92893 61364", lat:13.0850, lng:80.2101 },
    { id:12, name:"Farsi Laban OMR",           state:"Tamil Nadu", district:"Chennai",         city:"Chennai",       address:"OMR, Chennai",                 phone:"+91 99400 81755", lat:12.9165, lng:80.2274 },
    { id:13, name:"Farsi Laban Ramanathapuram",state:"Tamil Nadu", district:"Ramanathapuram",  city:"Ramanathapuram",address:"Ramanathapuram",               phone:"+91 90034 30086", lat:9.3639,  lng:78.8320 },
    { id:14, name:"Farsi Laban RS Puram",      state:"Tamil Nadu", district:"Coimbatore",      city:"Coimbatore",    address:"RS Puram, Coimbatore",         phone:"+91 81489 19893", lat:11.0076, lng:76.9498 },
    { id:15, name:"Farsi Laban Saravanampatti",state:"Tamil Nadu", district:"Coimbatore",      city:"Coimbatore",    address:"Saravanampatti, Coimbatore",   phone:"+91 81489 19893", lat:11.0797, lng:76.9997 },
];
 
const Icons = {
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    phone:  `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    back:   `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>`,
};
 
export function initStores() {
    const grid      = document.getElementById("stores-grid");
    const mapView   = document.getElementById("stores-map-view");
    const list      = document.getElementById("stores-list");
    const map       = document.getElementById("store-map");
    const container = document.getElementById("stores-container");
 
    if (!grid || !mapView || !list || !map || !container) return;
 
    /* ─────────────────────────────────────────────
       INJECT STYLES (already in components.css —
       this fallback keeps it self-contained)
    ───────────────────────────────────────────── */
    /* (styles now in components.css — nothing to inject) */
 
    /* ─────────────────────────────────────────────
       FILTER UI
    ───────────────────────────────────────────── */
    const filterDiv = document.createElement("div");
    filterDiv.className = "store-filters";
    filterDiv.innerHTML = `
        <select id="filter-state"    class="filter-select"><option value="">All States</option></select>
        <select id="filter-district" class="filter-select" disabled><option value="">All Districts</option></select>
        <select id="filter-city"     class="filter-select" disabled><option value="">All Cities</option></select>
        <input  type="text" id="filter-search" class="filter-search" placeholder="Search stores…">
    `;
    container.parentNode.insertBefore(filterDiv, container);
 
    const stateSel    = document.getElementById("filter-state");
    const districtSel = document.getElementById("filter-district");
    const citySel     = document.getElementById("filter-city");
    const searchInp   = document.getElementById("filter-search");
 
    // Populate states
    [...new Set(stores.map(s => s.state))].forEach(st => stateSel.add(new Option(st, st)));
 
    let filteredStores = [...stores];
 
    function applyFilters() {
        const sState = stateSel.value;
        const sDist  = districtSel.value;
        const sCity  = citySel.value;
        const sText  = searchInp.value.toLowerCase();
 
        filteredStores = stores.filter(s =>
            (!sState || s.state    === sState) &&
            (!sDist  || s.district === sDist)  &&
            (!sCity  || s.city     === sCity)  &&
            (!sText  || s.name.toLowerCase().includes(sText) || s.address.toLowerCase().includes(sText))
        );
 
        // Go back to grid view on filter change
        mapView.classList.add("hidden");
        grid.classList.remove("hidden");
        loadGrid();
    }
 
    stateSel.addEventListener("change", () => {
        districtSel.innerHTML = '<option value="">All Districts</option>';
        citySel.innerHTML     = '<option value="">All Cities</option>';
        citySel.disabled      = true;
 
        if (stateSel.value) {
            districtSel.disabled = false;
            [...new Set(stores.filter(s => s.state === stateSel.value).map(s => s.district))]
                .forEach(d => districtSel.add(new Option(d, d)));
        } else {
            districtSel.disabled = true;
        }
        applyFilters();
    });
 
    districtSel.addEventListener("change", () => {
        citySel.innerHTML = '<option value="">All Cities</option>';
        if (districtSel.value) {
            citySel.disabled = false;
            [...new Set(stores.filter(s => s.district === districtSel.value).map(s => s.city))]
                .forEach(c => citySel.add(new Option(c, c)));
        } else {
            citySel.disabled = true;
        }
        applyFilters();
    });
 
    citySel.addEventListener("change", applyFilters);
    searchInp.addEventListener("input", applyFilters);
 
    /* ─────────────────────────────────────────────
       SHARED CARD HTML
    ───────────────────────────────────────────── */
    function cardHTML(store) {
        const tel  = store.phone.replace(/\s/g, "");
        const call = store.phone
            ? `<a href="tel:${tel}" class="react-call-btn" onclick="event.stopPropagation()">${Icons.phone} Call</a>`
            : `<span style="font-size:12px;color:#aaa;">Coming Soon</span>`;
 
        return `
            <div class="react-store-name">${store.name}</div>
            <div class="react-store-address">${Icons.mapPin} ${store.address}</div>
            <div class="react-store-bottom">
                <div class="react-store-phone">${Icons.phone} ${store.phone || "Number pending"}</div>
                ${call}
            </div>`;
    }
 
    /* ─────────────────────────────────────────────
       GRID VIEW
    ───────────────────────────────────────────── */
    function loadGrid() {
        grid.innerHTML = "";
 
        if (filteredStores.length === 0) {
            grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#777;padding:40px 0;">No stores found matching your criteria.</p>`;
            return;
        }
 
        filteredStores.forEach(store => {
            const card = document.createElement("div");
            card.className = "store-card";
            card.innerHTML = cardHTML(store);
            card.onclick   = () => openStore(store);
            grid.appendChild(card);
        });
    }
 
    /* ─────────────────────────────────────────────
       MAP VIEW — slider + map
    ───────────────────────────────────────────── */
    // Inject loader overlay + pin flash into .stores-map (once)
    const storesMapDiv = document.querySelector(".stores-map");
    if (storesMapDiv && !storesMapDiv.querySelector(".map-loader-overlay")) {
        storesMapDiv.insertAdjacentHTML("afterbegin", `
            <div class="map-loader-overlay" id="map-loader-overlay">
                <div style="position:relative;width:110px;height:110px;display:flex;align-items:center;justify-content:center;">
                    <div class="ml-pin ml-pin-1"></div>
                    <div class="ml-pin ml-pin-2"></div>
                    <div class="ml-pin ml-pin-3"></div>
                    <div class="ml-cream"></div>
                    <div class="ml-drop"></div>
                    <div class="ml-rim"></div>
                    <div class="ml-cup"></div>
                </div>
                <div class="map-loader-text">Finding your store…</div>
                <div class="map-loader-dots"><span></span><span></span><span></span></div>
            </div>
            <div class="map-pin-flash" id="map-pin-flash">
                <svg width="52" height="62" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 0C11.6 0 0 11.6 0 26c0 19.5 26 36 26 36s26-16.5 26-36C52 11.6 40.4 0 26 0z" fill="#00aaff"/>
                    <circle cx="26" cy="26" r="10" fill="white"/>
                </svg>
            </div>
        `);
    }
 
    const loaderOverlay = document.getElementById("map-loader-overlay");
    const pinFlash      = document.getElementById("map-pin-flash");
 
    /* slider state */
    let sliderOffset   = 0;
    const THUMB_STEP   = 152; // thumb min-width + gap
 
    function openStore(store) {
        grid.classList.add("hidden");
        mapView.classList.remove("hidden");
        renderMapView(store);
    }
 
    function renderMapView(activeStore) {
        list.innerHTML = "";
 
        /* ── Back button ── */
        const backBtn = document.createElement("button");
        backBtn.className   = "stores-back-btn";
        backBtn.innerHTML   = `${Icons.back} All Stores`;
        backBtn.onclick     = () => {
            mapView.classList.add("hidden");
            grid.classList.remove("hidden");
        };
        list.appendChild(backBtn);
 
        /* ── Slider nav ── */
        const navRow = document.createElement("div");
        navRow.className = "store-slider-nav";
        navRow.innerHTML = `
            <button class="store-slider-btn" id="sl-prev">‹</button>
            <div class="store-slider-track-wrap">
                <div class="store-slider-track" id="sl-track"></div>
            </div>
            <button class="store-slider-btn" id="sl-next">›</button>
            <span class="store-slider-counter" id="sl-counter"></span>
        `;
        list.appendChild(navRow);
 
        const track   = navRow.querySelector("#sl-track");
        const counter = navRow.querySelector("#sl-counter");
        const prevBtn = navRow.querySelector("#sl-prev");
        const nextBtn = navRow.querySelector("#sl-next");
 
        /* Build thumbnails */
        filteredStores.forEach((store, i) => {
            const thumb = document.createElement("div");
            thumb.className  = "store-thumb" + (store.id === activeStore.id ? " active" : "");
            thumb.innerHTML  = `
                <div class="store-thumb-name">${store.name.replace("Farsi Laban ", "")}</div>
                <div class="store-thumb-area">${store.city}, ${store.state}</div>
            `;
            thumb.onclick = () => selectStore(store);
            track.appendChild(thumb);
        });
 
        function updateCounter() {
            const idx = filteredStores.findIndex(s => s.id === activeStore.id);
            counter.textContent = `${idx + 1} / ${filteredStores.length}`;
        }
 
        function updateThumbs(active) {
            track.querySelectorAll(".store-thumb").forEach((t, i) => {
                t.classList.toggle("active", filteredStores[i].id === active.id);
            });
            // scroll active thumb into view
            const idx = filteredStores.findIndex(s => s.id === active.id);
            const wrap = navRow.querySelector(".store-slider-track-wrap");
            const wrapW = wrap ? wrap.offsetWidth : 400;
            const visible = Math.floor(wrapW / THUMB_STEP);
            const targetOff = Math.max(0, idx - Math.floor(visible / 2)) * THUMB_STEP;
            const maxOff = Math.max(0, (filteredStores.length - visible) * THUMB_STEP);
            sliderOffset = Math.min(targetOff, maxOff);
            track.style.transform = `translateX(-${sliderOffset}px)`;
        }
 
        function selectStore(store) {
            activeStore = store;
            updateThumbs(store);
            updateCounter();
            renderActiveCard(store);
            updateMap(store);
        }
 
        prevBtn.onclick = () => {
            const idx = filteredStores.findIndex(s => s.id === activeStore.id);
            if (idx > 0) selectStore(filteredStores[idx - 1]);
        };
 
        nextBtn.onclick = () => {
            const idx = filteredStores.findIndex(s => s.id === activeStore.id);
            if (idx < filteredStores.length - 1) selectStore(filteredStores[idx + 1]);
        };
 
        /* ── Active store card (single visible card below slider) ── */
        const cardArea = document.createElement("div");
        cardArea.id = "sl-active-card";
        list.appendChild(cardArea);
 
        function renderActiveCard(store) {
            const tel  = store.phone.replace(/\s/g, "");
            const call = store.phone
                ? `<a href="tel:${tel}" class="react-call-btn">${Icons.phone} Call</a>`
                : `<span style="font-size:12px;color:#aaa;">Coming Soon</span>`;
 
            cardArea.innerHTML = `
                <div class="store-list-item active">
                    <div class="react-store-name">${store.name}</div>
                    <div class="react-store-address">${Icons.mapPin} ${store.address}</div>
                    <div class="react-store-bottom">
                        <div class="react-store-phone">${Icons.phone} ${store.phone || "Number pending"}</div>
                        ${call}
                    </div>
                    <div style="margin-top:14px;display:flex;gap:8px;">
                        <a href="https://maps.google.com/?q=${store.lat},${store.lng}" target="_blank"
                           style="flex:1;text-align:center;padding:9px 0;border-radius:10px;background:linear-gradient(135deg,#0055aa,#00aaff);color:#fff;font-size:13px;font-weight:600;text-decoration:none;transition:0.2s;">
                            Get Directions ↗
                        </a>
                        ${store.phone
                            ? `<a href="https://wa.me/91${store.phone.replace(/[^\d]/g,'').slice(-10)}?text=Hi!+I%27d+like+to+order+from+${encodeURIComponent(store.name)}" target="_blank"
                               style="flex:1;text-align:center;padding:9px 0;border-radius:10px;background:#eaf9f0;color:#00a651;font-size:13px;font-weight:600;text-decoration:none;border:1.5px solid #c0ecd4;transition:0.2s;">
                                WhatsApp
                               </a>`
                            : ""}
                    </div>
                </div>`;
        }
 
        /* init */
        updateThumbs(activeStore);
        updateCounter();
        renderActiveCard(activeStore);
        updateMap(activeStore);
    }
 
    /* ─────────────────────────────────────────────
       MAP LOADING (with animation)
    ───────────────────────────────────────────── */
    function updateMap(store) {
        // Show loader, hide current map
        if (loaderOverlay) {
            loaderOverlay.classList.remove("hidden-anim");
        }
        map.classList.remove("map-loaded");
        map.src = "";
 
        // Small delay so the loader renders before the iframe starts fetching
        setTimeout(() => {
            map.src = `https://maps.google.com/maps?q=${store.lat},${store.lng}&z=16&output=embed`;
        }, 200);
 
        map.onload = () => {
            if (loaderOverlay) loaderOverlay.classList.add("hidden-anim");
            map.classList.add("map-loaded");
 
            // Flash pin
            if (pinFlash) {
                pinFlash.classList.remove("animate");
                void pinFlash.offsetWidth; // force reflow
                pinFlash.classList.add("animate");
            }
        };
    }
 
    /* ─────────────────────────────────────────────
       BOOT
    ───────────────────────────────────────────── */
    loadGrid();
}