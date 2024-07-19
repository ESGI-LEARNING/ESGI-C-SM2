import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import { FormFilter } from '../../components/form/formFilter.js';
import Cards from '../../components/section/cards.js';
import JoDOM from '../../../core/dom/JoDOM.js';
import { fetchData } from '../../components/api/fetchData.js';

export class Events extends JoDOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        fetch('https://api-esgi.faispaschier.fr/events/', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => this.setState({ events: data }));
    }

    render() {
        const { events } = this.state;
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
                                        JoDOM.createElement(
                                            Cards,
                                            { key: index, ...event },
                                            [],
                                        ),
                                    ),
                                },
                            ],
                        },
                    ],
                },
                Footer,
            ],
        };
    }
}
