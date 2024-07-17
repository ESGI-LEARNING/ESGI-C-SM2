import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import { Leaflet } from '../../components/leaflet/leaflet.js';
import { FormFilter } from '../../components/form/formFilter.js';
import JoDOM from '../../../core/dom/JoDOM.js'
import Text from '../../components/section/text.js';

export class EventDetails extends JoDOM.Component {
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
                        JoDOM.createElement(Text, { type: 'h1', content: 'Event' }),
                        {
                            type: 'div',
                            props: {
                                id: 'map',
                            },
                            children: [],
                        },

                    ],
                },
                Footer,
            ],
            events: {
                mounted: [
                    async function () {
                        await Leaflet();
                    },
                ],
            },
        };
    }
}
