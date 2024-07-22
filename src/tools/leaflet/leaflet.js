import { initMap } from './leafletConfig.js';
import { addEventMarker, addSpotMarkers } from './addMarkers.js';

export const Leaflet = async function Leaflet(event) {
    if (document.getElementById('map') && event) {
        const mapEvent = initMap();
        if (event.spots) {
            addSpotMarkers(mapEvent, event.spots);
            addEventMarker(mapEvent, event);

            return mapEvent;
        }
    }
};
