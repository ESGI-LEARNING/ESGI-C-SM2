import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import HeroHome from '../components/home/heroHome.js';
import EvenementList from '../components/home/evenementList.js';
import mapHome from '../components/home/mapHome.js';
import JoDOM from '../../core/dom/JoDOM.js'

export default class Home extends JoDOM.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
        }
    }

    handleIncrement = (e) => {
        e.preventDefault();
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        const { counter } = this.state;
        console.log('Home render', counter);
        return {
            type: 'div',
            children: [
                Header,
                {
                    type: 'main',
                    children: [
                        JoDOM.createElement(HeroHome),
                        JoDOM.createElement(EvenementList),
                        JoDOM.createElement(mapHome)
                    ],
                },
                Footer,
            ],
        };
    }
}
