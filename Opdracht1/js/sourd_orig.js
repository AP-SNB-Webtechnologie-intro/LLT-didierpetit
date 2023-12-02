let map = L.map('sourd_orig').setView([30.249577,35.397092],6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// bepaal de rechthoek rondom locatie
let bounds = [[32.925130,31.074296], [27.925130,40.074296]];

// kleur de rechthoek in met de groene kleur
L.rectangle(bounds, {color: "#7E805D", weight: 5}).addTo(map);

// marker met tekst "De Bakkerie - Bredabaan 388 - 2930 Brasschaat"
let marker = L.marker([30.249577,35.397092], { title:"De bakermat van desem" }).addTo(map);
marker.bindPopup("Egypte & Mesopotamië").openPopup;
