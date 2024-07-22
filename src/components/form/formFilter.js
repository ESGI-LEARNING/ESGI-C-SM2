import JoDOM from '../../../core/dom/JoDOM.js';
import Option from './select/option.js';

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
        console.log('FormFilter - Selected category:', value);
        if (this.props.onCategoryChange) {
            console.log('FormFilter - Calling onCategoryChange');
            this.props.onCategoryChange(value);
        } else {
            console.log('FormFilter - onCategoryChange is not defined');
        }
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
                                        value: '',
                                    },
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: 'Toutes les catégories',
                                        },
                                    ],
                                },
                                ...categories.map((category, index) =>
                                    JoDOM.createElement(Option, {
                                        key: index,
                                        value: category.name,
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