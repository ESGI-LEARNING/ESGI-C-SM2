import { Header } from '../../components/layouts/Header.js';
import { Footer } from '../../components/layouts/Footer.js';
import { Leaflet } from '../../tools/leaflet/leaflet.js';
import JoDOM from '../../../core/dom/JoDOM.js';
import Text from '../../components/section/Text.js';
import CardsSpots from '../../components/modules/card/CardSpot.js';
import { BrowserLink } from '../../components/core/BrowserRouter.js';

export class EventDetails extends JoDOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: [],
            eventSpots: [],
            map: null,
        };
    }

    componentDidMount() {
        fetch(`https://api-esgi.faispaschier.fr/events/${this.props.id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) =>
                this.setState({ event: data, eventSpots: data.spots }),
            );
    }

    render() {
        const { event, eventSpots } = this.state;
        const sport = event.category || {};
        return {
            type: 'div',
            children: [
                Header,
                {
                    type: 'main',
                    props: {
                        class: '',
                    },
                    children: [
                        BrowserLink({
                            to: '/events',
                            title: 'Retour',
                            class: 'breadcrumb',
                        }),
                        {
                            type: 'div',
                            props: {
                                class: 'main-show',
                            },
                            children: [
                                {
                                    type: 'div',
                                    props: {
                                        class: 'main-show-header',
                                    },
                                    children: [
                                        {
                                            type: 'div',
                                            props: {
                                                class: 'content-show',
                                            },
                                            children: [
                                                {
                                                    type: 'div',
                                                    props: {
                                                        class: '',
                                                    },
                                                    children: [
                                                        JoDOM.createElement(
                                                            Text,
                                                            {
                                                                type: 'h2',
                                                                content:
                                                                    event.title,
                                                            },
                                                        ),
                                                        JoDOM.createElement(
                                                            Text,
                                                            {
                                                                type: 'p',
                                                                content:
                                                                    event.description,
                                                            },
                                                        ),
                                                    ],
                                                },
                                                {
                                                    type: 'div',
                                                    props: {
                                                        class: 'content-show-info',
                                                    },
                                                    children: [
                                                        JoDOM.createElement(
                                                            Text,
                                                            {
                                                                type: 'time',
                                                                content:
                                                                    new Date(
                                                                        event.startDate,
                                                                    ).toLocaleDateString(),
                                                            },
                                                        ),
                                                        JoDOM.createElement(
                                                            Text,
                                                            {
                                                                type: 'span',
                                                                class: 'pill',
                                                                content:
                                                                    sport.name,
                                                            },
                                                        ),
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'div',
                                            props: {
                                                class: 'map-container',
                                            },
                                            children: [
                                                {
                                                    type: 'section',
                                                    props: {
                                                        class: 'card-spot-container',
                                                    },
                                                    children: [
                                                        {
                                                            type: 'ul',
                                                            props: {
                                                                class: 'card-spot-list',
                                                            },
                                                            children:
                                                                eventSpots.map(
                                                                    (
                                                                        spot,
                                                                        index,
                                                                    ) =>
                                                                        JoDOM.createElement(
                                                                            CardsSpots,
                                                                            {
                                                                                key: index,
                                                                                ...spot,
                                                                            },
                                                                            [],
                                                                        ),
                                                                ),
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: 'div',
                                                    props: {
                                                        id: 'map',
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                            events: {
                                mounted: [
                                    async function () {
                                        await Leaflet(event);
                                    },
                                ],
                            },
                        },
                    ],
                },
                Footer,
            ],
        };
    }
}
