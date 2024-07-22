import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import FormFilter from '../../components/form/formFilter.js';
import Cards from '../../components/section/cards.js';
import JoDOM from '../../../core/dom/JoDOM.js';

export class Events extends JoDOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            filteredEvents: [],
        };
    }
    componentDidMount() {
        console.log('Events - Component mounted');
        this.fetchEvents();
    }
    
    fetchEvents(category = '') {
        console.log('Events - Fetching events with category:', category);
        let url = 'https://api-esgi.faispaschier.fr/events';
        if (category) {
            url += `?category=${category}`;
        }
        console.log('Events - Fetch URL:', url);
    
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Events - Fetched data:', data);
                this.setState({ events: data, filteredEvents: data });
            })
            .catch((error) => {
                console.error('Events - Error fetching data:', error);
            });
    }
    
    handleCategoryChange = (category) => {
        console.log('Events - Category changed to:', category);
        this.fetchEvents(category);
    }
    
    render() {
        const { filteredEvents } = this.state;
        console.log('Events - Rendering with filteredEvents:', filteredEvents);
        return {
            type: 'div',
            children: [
                Header,
                {
                    type: 'main',
                    children: [
                        JoDOM.createElement(FormFilter, {
                            onCategoryChange: this.handleCategoryChange
                        }),
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
                                    children: filteredEvents.map((event, index) =>
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