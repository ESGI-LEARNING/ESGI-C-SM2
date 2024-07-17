import './../../../assets/js/components/carousel.js';
import JoDOM from '../../../core/dom/JoDOM.js'
import Cards from '../section/cards.js';
import { fetchData } from '../api/fetchData.js';
import './../../../assets/js/components/carousel.js';

export default class EvenementList extends JoDOM.Component {
    constructor() {
        super();
        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        fetch(
            'https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?order_by=start_date&limit=61&offset=0&exclude=category_id%3Avenue-paralympic&lang=fr&timezone=Europe%2FParis&include_links=false&include_app_metas=true',
            {
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => this.setState({ events: data.results }));
    }

    /*
    componentDidMount() {
        this.setState({
            evenements: [
                {
                    title: 'Evenement 1',
                    description: 'Description de l\'evenement 1',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    title: 'Evenement 2',
                    description: 'Description de l\'evenement 2',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    title: 'Evenement 3',
                    description: 'Description de l\'evenement 3',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    title: 'Evenement 4',
                    description: 'Description de l\'evenement 4',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    title: 'Evenement 5',
                    description: 'Description de l\'evenement 5',
                    image: 'https://via.placeholder.com/150',
                },
            ]
        })
    }
        */

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
                                JoDOM.createElement(Cards, { key: index, ...event })
                            )
                        },
                    ],
                },
            ],
        };
    }
}
