import { Contact } from './pages/contact.js';
import { Home } from './pages/home.js';
import { Events } from './pages/events/index.js';
import { Map } from './pages/map.js';

export const routes = {
    '*': Home,
    '/': Home,
    '/map': Map,
    '/events': Events,
    '/events/:id': Events,
    '/contact': Contact,
};
