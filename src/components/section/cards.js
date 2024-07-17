import JoDOM from '../../../core/dom/JoDOM.js';
export default class Cards extends JoDOM.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { sports, nom_site } = this.props;
        return {
            type: 'li',
            props: {
                class: 'card',
            },
            children: [
                {
                    type: 'a',
                    props: {
                        href: '/events/map',
                    },
                    events: {
                        click: [
                            function (event) {
                                event.preventDefault();
                                history.pushState(null, null, '/events/map');
                            },
                        ],
                    },
                    children: [
                        {
                            type: 'img',
                            props: {
                                src: '../../../assets/images/paris.png',
                                alt: '',
                            },
                        },
                        {
                            type: 'div',
                            props: {
                                class: 'content',
                            },
                            children: [
                                {
                                    type: 'span',
                                    props: {
                                        class: 'pill',
                                    },
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: sports,
                                        },
                                    ],
                                },
                                {
                                    type: 'h3',
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: nom_site,
                                        },
                                    ],
                                },
                                {
                                    type: 'p',
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: this.state.description,
                                        },
                                    ],
                                },
                                {
                                    type: 'time',
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: this.state.date,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    }
}
