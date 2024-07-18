import JoDOM from '../../../core/dom/JoDOM.js';
import Text from '../section/text.js';
export default class CardsSpots extends JoDOM.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description } = this.props;
        return {
            type: 'li',
            props: {
                class: 'card-spot',
            },
            children: [
                {
                    type: 'div',
                    props: {
                        class: 'content',
                    },
                    children: [
                        JoDOM.createElement(Text, { type: 'h3', class: 'title', content: name }),
                        JoDOM.createElement(Text, { type: 'p', class: 'description', content: description }),
                        {
                            type: 'span',
                            props: {
                                class: 'card-extend-button',
                            },
                            events: {
                                click: [
                                    function (event) {
                                        event.preventDefault();

                                    },
                                ],
                            },
                        }
                    ],
                },
            ],
        }
    };
}
