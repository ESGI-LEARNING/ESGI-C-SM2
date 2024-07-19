import JoDOM from '../../../core/dom/JoDOM.js';
export default class Link extends JoDOM.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return {
            type: 'a',
            props: {
                class: this.props.classLink,
                href: this.props.href,
            },
            children: [
                {
                    type: 'TEXT_NODE',
                    content: this.props.content,
                },
            ],
        };
    }
}
