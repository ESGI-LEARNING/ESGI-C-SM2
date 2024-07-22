import JoDOM from '../../../core/dom/JoDOM.js';
import Option from './select/option.js';
import '../../pages/events/index.js';
export default class FormFilter extends JoDOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    componentDidMount() {
        fetch('https://api-esgi.faispaschier.fr/categories/', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => this.setState({ categories: data }));
    }

    updateEvents(value) {
        console.log(value);
        console.log(this.state.events);
    }

    render() {
        const { categories } = this.state;
        return {
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
                                        this.updateEvents(value);
                                    },
                                ]
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
                                ...categories.map((category, index) =>
                                    JoDOM.createElement(Option, {
                                        key: index,
                                        value: category.id,
                                        children: category.name,
                                    }),
                                ),
                            ],
                        },
                    ],
                },
            ],
        };
    }
}
