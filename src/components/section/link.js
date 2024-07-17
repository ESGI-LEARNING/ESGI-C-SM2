import JoDOM from '../../../core/dom/JoDOM.js';
export default class Link extends JoDOM.Component {
    constructor(props) {
        super(props);
    }
    render(href, content, classLink = '') {
        return {
            type: 'a',
            props: {
                class: classLink,
                href: href,
            },
            children: [
                {
                    type: 'TEXT_NODE',
                    content: content,
                },
            ],
        };
    }
}