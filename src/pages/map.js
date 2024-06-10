import { NavBar } from '../components/navBar.js';
import { Leaflet } from '../components/leaflet.js';

export const Map = {
    type: 'div',
    children: [
        {
            type: 'header',
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
                NavBar,
            ],
        },
        {
            type: 'main',
            children: [
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
                load: [Leaflet()],
            },
        },
        {
            type: 'footer',
            children: [
                {
                    type: 'p',
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: 'Footer',
                        },
                    ],
                },
            ],
        },
    ],
};
