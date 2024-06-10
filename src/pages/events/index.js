import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';

export const Events = {
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
                            content: 'Event',
                        },
                    ],
                },
            ],
        },
        Footer
    ],
};
