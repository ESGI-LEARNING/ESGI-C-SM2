import { Component } from '../componennts/Component.js'

export class Home extends Component {
    render() {
        return {
            type: 'div',
            children: [
                {
                    type: 'h1',
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: 'Home Page',
                        },
                    ],
                },
                {
                    type: 'p',
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: 'Welcome to the Home Page',
                        },
                    ],
                },
            ],
        }
    }
}