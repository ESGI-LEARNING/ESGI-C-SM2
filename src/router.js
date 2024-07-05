import { Contact } from './pages/contact.js';
import { Home } from './pages/home.js';
import { Events } from './pages/events/index.js';
import { EventDetails } from './pages/events/show.js';

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
        path: '/show',
        component: EventDetails,
    },
];
