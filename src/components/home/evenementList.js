import { Cards } from '../section/cards.js';
import './../../../assets/js/components/carousel.js';
import { Component } from '../Component.js'

export default class EvenementList extends Component {
    constructor() {
        super()

        this.state = {
            evenements: [],
        }
    }

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
        });

        console.log(this.state)
    }



    render() {
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
                            events: {
                                click: [
                                    function (event) {
                                        event.preventDefault();
                                        // slice in state
                                        this.setState({
                                            evenements: this.state.evenements.slice(0, 3)
                                        });
                                    },
                                ],
                            }
                        },
                    ],
                },
                {
                    type: 'div',
                    props: {
                        class: 'carousel-container',
                    },
                    children: [
                        {
                            type: 'ul',
                            props: {
                                class: 'carousel-row',
                            },
                            children: this.state.evenements.map((evenement, index) => (
                                new Cards({
                                    title: evenement.title,
                                    url: `/events/${index}`,
                                    description: evenement.description,
                                    image: evenement.image,
                                }).render()
                            )),
                        },
                    ],
                },
            ],
        }
    }
}
