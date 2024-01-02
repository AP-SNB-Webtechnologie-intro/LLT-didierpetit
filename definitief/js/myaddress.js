let map = L.map('myMap').setView([51.29407, 4.49548],18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// bepaal de rechthoek rondom locatie
let bounds = [[51.29402, 4.495334], [51.29415, 4.49562]];

// kleur de rechthoek in met de groene kleur
L.rectangle(bounds, {color: "#7E805D", weight: 5}).addTo(map);

// marker met tekst "De Bakkerie - Bredabaan 388 - 2930 Brasschaat"
let marker = L.marker([51.294074278823516, 4.495487887644627], { title:"De Bakkerie" }).addTo(map);
marker.bindPopup("<strong>De Bakkerie</strong><br>Bredabaan 388<br>2930 Brasschaat").openPopup;
