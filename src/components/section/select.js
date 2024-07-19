export default class Select extends JoDOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options,
            class: this.props.class,
            id: this.props.id,
        };
    }
    render() {
        return {
            type: 'select',
            props: {
                class: this.state.class,
                id: this.state.id,
            },
            children: this.state.options.map((option) => {
                return {
                    type: 'option',
                    props: {
                        value: option.value,
                    },
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: option.content,
                        },
                    ],
                };
            }, this),
        };
    }
}
