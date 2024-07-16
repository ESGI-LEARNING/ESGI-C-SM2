import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { HeroHome } from '../components/home/heroHome.js';
import { mapHome } from '../components/home/mapHome.js';
import JoDOM from '../../core/dom/JoDOM.js'

export default class Home extends JoDOM.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return {
            type: 'div',
            children: [
                Header,
                {
                    type: 'main',
                    children: [HeroHome, mapHome],
                },
                Footer,
            ],
        };
    }
}
