import JoDOM from '../../core/dom/JoDOM.js';
import { Cta } from '../components/core/BrowserRouter.js';
import { Footer } from '../components/layouts/Footer.js';
import { Header } from '../components/layouts/Header.js';

export default class NotFound extends JoDOM.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return {
            type: 'div',
            children: [
                JoDOM.createElement(Header),
                {
                    type: 'main',
                    children: [
                        {
                            type: 'section',
                            props: {
                                class: 'container-not-found',
                            },
                            children: [
                                {
                                    type: 'h1',
                                    props: {
                                        class: 'title',
                                    },
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: '404',
                                        },
                                    ],
                                },
                                {
                                    type: 'p',
                                    props: {
                                        class: 'subtitle',
                                    },
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: 'Page non trouvée',
                                        },
                                    ],
                                },
                                Cta({
                                    title: "Retourner à l'accueil",
                                    to: '/',
                                    props: {
                                        class: 'cta',
                                    },
                                }),
                            ],
                        },
                    ],
                },
                Footer,
            ],
        };
    }
}
