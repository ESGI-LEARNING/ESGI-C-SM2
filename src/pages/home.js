import { Component } from '../componennts/Component.js'
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { HeroHome } from '../components/home/heroHome.js';
import { evenementList } from '../components/home/evenementList.js';
import { mapHome } from '../components/home/mapHome.js';

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
export const Home = {
    type: 'div',
    children: [
        Header,
        {
            type: 'main',
            children: [HeroHome, evenementList, mapHome],
        },
        Footer,
        Footer,
    ],
};
