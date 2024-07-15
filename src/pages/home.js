import { Component } from '../components/Component.js';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { HeroHome } from '../components/home/heroHome.js';
import EvenementList from '../components/home/evenementList.js'
import { mapHome } from '../components/home/mapHome.js';

export class Home extends Component {
    render() {
        return {
            type: 'div',
            children: [
                Header,
                {
                    type: 'main',
                    children: [HeroHome, EvenementList, mapHome],
                },
                Footer,
            ],
        };
    }
}
