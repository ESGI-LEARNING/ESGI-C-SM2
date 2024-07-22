import JoDOM from '../../../core/dom/JoDOM.js';
export default class Text extends JoDOM.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.validateProps({
            type: 'string',
            content: 'string',
        });
    }

    render() {
        return {
            type: this.props.type,
            children: [
                {
                    type: 'TEXT_NODE',
                    content: this.props.content,
                },
            ],
        };
    }
}
