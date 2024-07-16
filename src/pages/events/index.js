import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import { FormFilter } from '../../components/form/formFilter.js';
import { Cards } from '../../components/section/cards.js';
import JoDOM from '../../../core/dom/JoDOM.js'

export class Events extends JoDOM.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return {
            type: 'div',
            children: [
                Header,
                {
                    type: 'main',
                    children: [
                        FormFilter,
                        {
                            type: 'h1',
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Event',
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
                                    loop: {
                                        count: 12,
                                        template: Cards,
                                    },
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
