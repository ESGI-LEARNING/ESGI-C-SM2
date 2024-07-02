import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import { Leaflet } from '../../components/leaflet/leaflet.js';
import { FormFilter } from '../../components/form/formFilter.js';
import { Component } from '../../componennts/Component.js';

export class EventDetails extends Component {
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
