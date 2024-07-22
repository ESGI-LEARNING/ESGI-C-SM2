import { BrowserLink } from '../core/BrowserRouter.js';
import JoDOM from '../../../core/dom/JoDOM.js'

export default class NavBar extends JoDOM.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return {
            type: 'nav',
            props: {
                class: this.props.burger ?? 'open',
            },
            children: [
                {
                    type: 'ul',
                    children: [
                        {
                            type: 'li',
                            children: [
                                BrowserLink({
                                    title: 'home',
                                    to: '/',
                                }),
                            ],
                        },
                        {
                            type: 'li',
                            children: [
                                BrowserLink({
                                    title: 'event',
                                    to: '/events',
                                }),
                            ],
                        },
                        {
                            type: 'li',
                            children: [
                                BrowserLink({
                                    title: 'contact',
                                    to: '/contact',
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    }
}
