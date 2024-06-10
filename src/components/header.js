import { NavBar } from './navBar.js';

export const Header = {
    type: 'header',
    children: [
        {
            type: 'h1',
            children: [
                {
                    type: 'TEXT_NODE',
                    content: 'Header',
                },
            ],
        },
        NavBar,
    ],
};