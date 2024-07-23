import { Header } from '../../components/layouts/Header.js';
import { Footer } from '../../components/layouts/Footer.js';
import Cards from '../../components/modules/card/Cards.js';
import JoDOM from '../../../core/dom/JoDOM.js';
import Option from '../../components/modules/form/select/option.js';

export class Events extends JoDOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            categories: [],
            category: null,
            date: null,
        };
    }

    componentDidMount() {
        fetch('https://api-esgi.faispaschier.fr/events/', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => this.setState({ events: data }));

        // get all categories
        fetch('https://api-esgi.faispaschier.fr/categories/', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => this.setState({ categories: data }));
    }

    handleSelectEventWithCategory = (category, date) => {
        let url = 'https://api-esgi.faispaschier.fr/events';

        if (category && date) {
            url += '?category=' + category + '&date=' + date;
        } else if (category) {
            url += '?category=' + category;
        } else if (date) {
            url += '?date=' + date;
        }

        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ events: data, category: category, date: date });
            });
    };

    render() {
        const { events, categories, category: c, date: d } = this.state;
        return {
            type: 'div',
            children: [
                JoDOM.createElement(Header),
                {
                    type: 'main',
                    children: [
                        {
                            type: 'div',
                            props: {
                                class: 'input-events',
                            },
                            children: [
                                {
                                    type: 'div',
                                    props: {
                                        class: 'input-select-container',
                                    },
                                    children: [
                                        {
                                            type: 'select',
                                            props: {
                                                class: 'input-select',
                                                id: 'type',
                                                name: 'type',
                                            },
                                            events: {
                                                change: [
                                                    (event) => {
                                                        const { value } = event.target;
                                                        const selectedCategory = value;
                                                        const selectedDate = this.state.date;
                                                        this.handleSelectEventWithCategory(selectedCategory, selectedDate);
                                                    },
                                                ],
                                            },
                                            children: [
                                                {
                                                    type: 'option',
                                                    props: {
                                                        value: 'category',
                                                    },
                                                    children: [
                                                        {
                                                            type: 'TEXT_NODE',
                                                            content: 'category',
                                                        },
                                                    ],
                                                },
                                                ...categories.map(
                                                    (category, index) =>
                                                        c === category.name
                                                            ? JoDOM.createElement(
                                                                Option,
                                                                {
                                                                    key: index,
                                                                    value: category.name,
                                                                    selected:
                                                                        'selected',
                                                                    children:
                                                                        category.name,
                                                                },
                                                            )
                                                            : JoDOM.createElement(
                                                                Option,
                                                                {
                                                                    key: index,
                                                                    value: category.name,
                                                                    children:
                                                                        category.name,
                                                                },
                                                            ),
                                                ),
                                            ],
                                        },
                                        {
                                            type: 'input',
                                            props: {
                                                type: 'date',
                                                class: 'input-date',
                                                name: 'date',
                                                value: d ?? '',
                                            },
                                            events: {
                                                change: [
                                                    (event) => {
                                                        const { value } = event.target;
                                                        const selectedCategory = this.state.category;
                                                        const selectedDate = value;
                                                        this.handleSelectEventWithCategory(selectedCategory, selectedDate);
                                                        this.setState({ date: value });
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
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
