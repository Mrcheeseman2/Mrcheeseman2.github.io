let coordinates = [35.652832, 139.839478];

let map = L.map("map", {
  center: coordinates,
  zoom: 18
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let tokyoMarker = L.marker([35.652832, 139.839478], {title: "Tokyo"}).bindPopup("<p>Tokyo</p>").addTo(map);
