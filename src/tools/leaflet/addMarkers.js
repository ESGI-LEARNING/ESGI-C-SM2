export const addEventMarker = (map, data) => {
    const { latitude, longitude, title, category, startDate, endDate } = data;
    let customIcon = L.icon({
        iconUrl:
            'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(
        map,
    );

    marker
        .bindPopup(
            `<b>${title}</b><br><span class="pill">${category.name}</span><br><time>${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}</time>`,
        )
        .openPopup();
};

export const addSpotMarkers = (map, data) => {
    const markers = [];
    for (let i = 0; i < data.length; i++) {
        const { latitude, longitude, name, description, id } = data[i];
        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.options.spotId = id;
        marker.bindPopup(`<b>${name}</b><br>${description}`);
        markers.push(marker);
    }
    return markers;
};
