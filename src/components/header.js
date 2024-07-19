import { LogoHome } from './BrowserRouter.js';
import { NavBar } from './navBar.js';
import { Burger } from '../../assets/js/components/navbar.js';

export const Header = {
    type: 'header',
    children: [
        LogoHome({ to: '/', title: 'Home' }),
        {
            type: 'button',
            props: {
                class: 'burger-menu',
            },
            className: 'burger-menu',
            children: [
                {
                    type: 'span',
                    props: {
                        class: 'burger-line',
                    },
                },
                {
                    type: 'span',
                    props: {
                        class: 'burger-line',
                    },
                },
                {
                    type: 'span',
                    props: {
                        class: 'burger-line',
                    },
                },
            ],
            events: {
                click: [
                    function () {
                        Burger();
                    },
                ],
            },
        },
        NavBar,
    ],
};
