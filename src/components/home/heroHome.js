import { Cta } from '../BrowserRouter.js';
import JoDOM from '../../../core/dom/JoDOM.js';
export default class HeroHome extends JoDOM.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return {
            type: 'section',
            props: {
                class: 'hero-container',
            },
            children: [
                {
                    type: 'div',
                    props: {
                        class: 'hero-row',
                    },
                    children: [
                        {
                            type: 'h1',
                            props: {
                                class: 'hero-title',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Où trouver le spot dont vous rêvez ?',
                                },
                            ],
                        },
                        {
                            type: 'p',
                            props: {
                                class: 'hero-content',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content:
                                        'Paris 2024 sera marqué par une multitude de sites emblématiques répartis dans toute la ville et ses environs. Voici quelques lieux incontournables où vous pourriez trouver le spot de vos rêve. ',
                                },
                            ],
                        },
                        Cta({
                            title: 'En savoir plus',
                            to: '/events',
                            props: {
                                class: 'cta',
                            },
                        }),
                    ],
                },
                {
                    type: 'div',
                    props: {
                        class: 'hero-row',
                    },
                    children: [
                        {
                            type: 'img',
                            props: {
                                class: 'hero-img',
                                src: '../../../assets/images/mascotte-home.png',
                                alt: 'hero-img',
                            },
                        },
                    ],
                },
            ],
        };
    }
}

