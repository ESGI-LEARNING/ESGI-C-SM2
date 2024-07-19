import JoDOM from '../../../core/dom/JoDOM.js';
import Text from '../section/text.js';
import { exportMap } from '../leaflet/leafletConfig.js';
export default class CardsSpots extends JoDOM.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.activateMarkerPopup();
    }

    activateMarkerPopup() {
        const mapEvent = exportMap();
        mapEvent.setView(
            [this.props.latitude, this.props.longitude],
            13,
        );
    }

    render() {
        const { name, description } = this.props;

        return {
            type: 'li',
            props: {
                class: 'card-spot',
            },
            events: {
                click: [this.handleClick],
            },
            children: [
                {
                    type: 'div',
                    props: {
                        class: 'content',
                    },
                    children: [
                        JoDOM.createElement(Text, {
                            type: 'h3',
                            class: 'title',
                            content: name,
                        }),
                        JoDOM.createElement(Text, {
                            type: 'p',
                            class: 'description',
                            content: description,
                        }),
                        {
                            type: 'span',
                            props: {
                                class: 'card-extend-button',
                            },
                        },
                    ],
                },
            ],
        };
    }
}
