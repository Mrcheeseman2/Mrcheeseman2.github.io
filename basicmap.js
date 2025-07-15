var map = L.map("map", {
  center: [35.2176665, -80.831473],
  zoom: 10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let centralMarker = L.marker([35.2176665, -80.831473], {title: "CPCC Central Campus"}).addTo(map);
let catoMarker = L.marker([35.2648627, -80.73116], {title: "CPCC Cato Campus"}).addTo(map);
let harperMarker = L.marker([35.173847, -80.922945], {title: "CPCC Harper Campus"}).addTo(map);
let harrisMarker = L.marker([35.227085, --80.843124], {title: "CPCC Harris Campus"}).addTo(map);
let levineMarker = L.marker([35.102469, -80.709380], {title: "CPCC Levine Campus"}).addTo(map);
let merancasMarker = L.marker([35.4332997, --80.852924 ], {title: "CPCC Merancas Campus"}).addTo(map);
