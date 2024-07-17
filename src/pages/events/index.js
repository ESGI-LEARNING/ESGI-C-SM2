import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import { FormFilter } from '../../components/form/formFilter.js';
import Cards from '../../components/section/cards.js';
import JoDOM from '../../../core/dom/JoDOM.js'
import { fetchData } from '../../components/api/fetchData.js';

export class Events extends JoDOM.Component {
    constructor(props) {
        super(props);
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


    render() {
        const { events } = this.state;
        console.log(events);
        return {
            type: 'div',
            children: [
                Header,
                {
                    type: 'main',
                    children: [
                        FormFilter,
                        {
                            type: 'section',
                            props: {
                                class: 'card-list',
                            },
                            children: [
                                {
                                    type: 'ul',
                                    props: {
                                        class: 'cards',
                                    },
                                    children: events.map((event, index) =>
                                        JoDOM.createElement(Cards, { key: index, ...event }, [])
                                    )
                                }
                            ]

                        },
                    ],
                },
            ],
            Footer,
        };
    };

}

