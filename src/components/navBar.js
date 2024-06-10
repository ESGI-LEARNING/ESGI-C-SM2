import { BrowserLink } from '../components/BrowerRouter.js';

export const NavBar = {
    type: 'div',
    children: [
        BrowserLink({
            title: 'home',
            to: '/',
        }),
        BrowserLink({
            title: 'event',
            to: '/events',
        }),
        BrowserLink({
            title: 'contact',
            to: '/contact',
        }),
        BrowserLink({
            title: 'map',
            to: '/map',
        }),
    ],
};
