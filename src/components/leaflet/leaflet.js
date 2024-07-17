import { initMap } from './leafletConfig.js';
import { addEventMarker, addSpotMarkers } from './addMarkers.js';

export const Leaflet = async function Leaflet(event) {
    if (document.getElementById('map') && event) {
        const map = initMap();
        if (event.spots) {
            addSpotMarkers(map, event.spots);
            addEventMarker(map, event);
        }
    }
};