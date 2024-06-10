import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { Leaflet } from '../components/leaflet.js';

export const Map = {
    type: 'div',
    children: [
        Header,
        {
            type: 'main',
            children: [
                {
                    type: 'h1',
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: 'Map',
                        },
                    ],
                },
                {
                    type: 'div',
                    props: {
                        id: 'map',
                        style: {
                            height: '60vh',
                        },
                    },
                    children: [],
                },
            ],
            events: {
                mount: [Leaflet()],
            },
        },
        Footer
    ],
};
