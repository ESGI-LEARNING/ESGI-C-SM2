import { NavBar } from '../../components/navBar.js';
export const Events = {
    type: 'div',
    children: [
        NavBar,
        {
            type: 'h1',
            children: [
                {
                    type: 'TEXT_NODE',
                    content: 'Event',
                },
            ],
        },
    ],
};
