import JoDOM from '../../../core/dom/JoDOM.js';
import Cards from '../modules/card/Cards.js';

export default class EvenementList extends JoDOM.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        fetch('https://api-esgi.faispaschier.fr/events', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => this.setState({ events: data }));
    }

    render() {
        const { events } = this.state;

        return {
            type: 'section',
            props: {
                class: 'evenement-container',
            },
            children: [
                {
                    type: 'h2',
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: 'EVENEMENT',
                        },
                    ],
                },
                {
                    type: 'section',
                    props: {
                        class: 'carousel-container',
                    },
                    children: [
                        {
                            type: 'ul',
                            props: {
                                class: 'carousel-row',
                            },
                            children: events.slice(0, 5).map((event, index) =>
                                JoDOM.createElement(Cards, {
                                    key: index,
                                    ...event,
                                }),
                            ),
                        },
                    ],
                },
            ],
        };
    }
}
