import { Header } from '../components/layouts/Header.js';
import { Footer } from '../components/layouts/Footer.js';
import { formContact } from '../components/modules/form/formContact.js';
import JoDOM from '../../core/dom/JoDOM.js';

export class Contact extends JoDOM.Component {
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
                    props: {
                        class: 'contact-main',
                    },
                    children: [
                        {
                            type: 'div',
                            props: {
                                class: 'contact-header',
                            },
                            children: [
                                {
                                    type: 'img',
                                    props: {
                                        src: '../../assets/images/mascotte-contact.png',
                                        alt: 'Mascotte JO 2024',
                                        class: 'mascotte-contact',
                                    },
                                },
                                {
                                    type: 'h1',
                                    props: {
                                        class: 'contact-title',
                                    },
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: 'Contact',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'section',
                            props: {
                                class: 'contact-info',
                            },
                            children: [formContact],
                        },
                    ],
                },
                Footer,
            ],
        };
    }
}
