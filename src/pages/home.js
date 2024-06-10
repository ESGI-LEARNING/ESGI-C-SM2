import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';

export const Home = {
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
                            content: 'Home',
                        },
                    ],
                },
            ],
        },
        Footer
    ],
};
