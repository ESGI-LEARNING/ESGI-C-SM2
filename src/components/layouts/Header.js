import { LogoHome } from '../core/BrowserRouter.js';
import JoDOM from '../../../core/dom/JoDOM.js'
import NavBar from './NavBar.js'

export class Header extends JoDOM.Component {
    constructor(props) {
        super(props)

        this.state = {
            burger: false,
        }
    }

    handleBurger(e) {
        e.preventDefault();
        this.setState({ burger: !this.state.burger });
    }

    render() {
        const { burger } = this.state;
        return {
            type: 'header',
            children: [
                LogoHome({ to: '/', title: 'Home' }),
                {
                    type: 'button',
                    props: {
                        class: 'burger-menu',
                    },
                    className: 'burger-menu',
                    children: [
                        {
                            type: 'span',
                            props: {
                                class: 'burger-line',
                            },
                        },
                        {
                            type: 'span',
                            props: {
                                class: 'burger-line',
                            },
                        },
                        {
                            type: 'span',
                            props: {
                                class: 'burger-line',
                            },
                        },
                    ],
                    events: {
                        click: [this.handleBurger],
                    },
                },
                JoDOM.createElement(NavBar, { burger: burger }),
            ],
        }
    }
}
