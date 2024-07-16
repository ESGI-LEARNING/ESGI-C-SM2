import { renderStructure } from '../../core/dom/renderStructure.js'

export default class Component {
    constructor(props = {}) {
        this.state = {};
        this.props = props;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.update()
    }

    update() {
        const oldElement = renderStructure(this.render());
        const currentElement = this.__rootElement;
        const parent = currentElement.parentElement;

        if (parent && currentElement) this.componentWillUpdate();
        parent.replaceChild(oldElement, currentElement);

        if (this.componentDidUpdate) {
            this.componentDidUpdate();
        }

        this.__rootElement = oldElement;
    }



    render() {
        return null;
    }
}