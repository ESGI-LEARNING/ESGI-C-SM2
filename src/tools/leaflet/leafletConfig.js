import 'leaflet/dist/leaflet.js';

let map = null;

export const initMap = () => {
    map = L.map('map').setView([48.854444, 2.347722], 12);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            map.setView([latitude, longitude], 12);
            let customIcon = L.icon({
                iconUrl:
                    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
            });

            L.marker([latitude, longitude], { icon: customIcon })
                .addTo(map)
                .bindPopup('Vous êtes ici');
        });
    }
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    return map;
};

export const exportMap = () => {
    return map;
};
