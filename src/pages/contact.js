import { NavBar } from '../components/navBar.js';

export const Contact = {
    type: 'div',
    children: [
        NavBar,
        {
            type: 'h1',
            children: [
                {
                    type: 'TEXT_NODE',
                    content: 'Contact',
                },
            ],
        },
    ],
};
