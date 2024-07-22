import JoDOM from '../../../../../core/dom/JoDOM.js';
export default class Option extends JoDOM.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.validateProps({
            value: 'string',
            children: 'string',
        });
    }

    render() {
        const { value, children } = this.props;
        return {
            type: 'option',
            props: {
                value: value,
            },
            children: [
                {
                    type: 'TEXT_NODE',
                    content: children,
                },
            ],
        };
    }
}
