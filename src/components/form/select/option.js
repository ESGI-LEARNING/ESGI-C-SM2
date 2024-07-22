import JoDOM from '../../../../core/dom/JoDOM.js';
export default class Option extends JoDOM.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, children, selected } = this.props;
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
