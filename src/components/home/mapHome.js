import { Cta } from '../BrowserRouter.js';
import JoDOM from '../../../core/dom/JoDOM.js';
import { Leaflet } from '../leaflet/leaflet.js';
export default class mapHome extends JoDOM.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('https://api-esgi.faispaschier.fr/events/', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                const map = L.map('map').setView([48.8566, 2.3522], 12);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors',
                }).addTo(map);
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

                        L.marker([latitude, longitude], { icon: customIcon }).addTo(map).bindPopup('Vous êtes ici').openPopup();
                    });
                }
                data.forEach((event) => {
                    L.marker([event.latitude, event.longitude])
                        .addTo(map)
                        .bindPopup(`<b>${event.title}</b><br>${event.description}`)
                });
            });
    }

    render() {
        return {
            type: 'section',
            props: {
                class: 'amuse-section flex flex-between',
            },
            children: [
                {
                    type: 'h2',
                    props: {
                        class: 'amuse-title1',
                    },
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: 'AMUSE DE TOI',
                        },
                    ],
                },
                {
                    type: 'div',
                    props: {
                        id: 'map',
                        class: 'map-home',
                    },
                    events: {
                        mounted: [
                            async function () {
                                await Leaflet();
                            },
                        ],
                    },
                },
                {
                    type: 'div',
                    props: {
                        class: 'amuse-content',
                    },
                    children: [
                        {
                            type: 'h2',
                            props: {
                                class: 'amuse-title2',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'AMUSE DE TOI',
                                },
                            ],
                        },
                        {
                            type: 'p',
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content:
                                        "Le judo, littéralement \"voie de la souplesse\", est un art martial d'origine japonaise fondé par Jigoro Kano en 1882. Plus qu'une simple technique de combat, le judo est une discipline qui prône des valeurs d'humilité, de respect et de persévérance. Il s'agit d'un sport complet qui allie technique, force physique et stratégie mentale.",
                                },
                            ],
                        },
                        Cta({
                            title: 'En savoir plus',
                            to: '/events',
                            props: {
                                class: 'cta',
                            },
                        }),
                    ],
                },
            ],
        };
    }
}
