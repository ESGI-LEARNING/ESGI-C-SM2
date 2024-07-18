export const addEventMarker = (map, data) => {
    const { latitude, longitude, title, category, startDate, endDate } = data;
    let customIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

    marker.bindPopup(
        `<b>${title}</b><br>${category.name}<br><time>${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}</time>`,
    );
};

export const addSpotMarkers = (map, data) => {
    for (let i = 0; i < data.length; i++) {
        const { latitude, longitude, name, description } = data[i];
        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(`<b>${name}</b><br>${description}`);
    }
}