import { Contact } from './pages/Contact.js';
import { Events } from './pages/events/index.js';
import { EventDetails } from './pages/events/show.js';
import Home from './pages/Home.js'

export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/events',
        component: Events,
    },
    {
        path: '/events/map',
        component: EventDetails,
    },
];
