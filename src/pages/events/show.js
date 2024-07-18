import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import { Leaflet } from '../../components/leaflet/leaflet.js';
import { FormFilter } from '../../components/form/formFilter.js';
import JoDOM from '../../../core/dom/JoDOM.js'
import Text from '../../components/section/text.js';
import CardsSpots from '../../components/section/cardSpot.js';

export class EventDetails extends JoDOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: [],
            eventSpots: [],
        };
    }

    componentDidMount() {
        fetch(
            `https://api-esgi.faispaschier.fr/events/${this.props.id.slice(1)}`,
            {
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => this.setState({ event: data, eventSpots: data.spots }));
    }



    render() {
        const { event, eventSpots } = this.state;

        return {
            type: 'div',
            children: [
                Header,
                {
                    type: 'main',
                    children: [
                        JoDOM.createElement(Text, { type: 'h1', content: event.title }),
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
                                            children: eventSpots.map((spot, index) =>
                                                JoDOM.createElement(CardsSpots, { key: index, ...spot }, [])
                                            )
                                        }
                                    ]
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
                Footer,
            ],
            events: {
                mounted: [
                    async function () {
                        await Leaflet(event);
                    },
                ],
            },
        };
    }
}
