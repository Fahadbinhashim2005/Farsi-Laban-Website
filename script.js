console.log("Farsi Laban Website loaded");

document.addEventListener('DOMContentLoaded', () => {
    // Logic will be added here
});

const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".product-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

document.querySelectorAll(".product-scroll").forEach(scrollContainer => {

  scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault(); // stop vertical scroll
    scrollContainer.scrollLeft += e.deltaY;
  }, { passive: false });

});


  // Init map
  const map = L.map("map").setView([9.5, 76.5], 7);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const markers = [];

  // Add markers
  document.querySelectorAll(".store-item").forEach((item) => {
    const lat = item.dataset.lat;
    const lng = item.dataset.lng;

    const marker = L.marker([lat, lng]).addTo(map);
    markers.push(marker);

    item.addEventListener("click", () => {
      document
        .querySelectorAll(".store-item")
        .forEach((el) => el.classList.remove("active"));

      item.classList.add("active");
      map.setView([lat, lng], 13);
    });
  });


