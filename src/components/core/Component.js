import { renderStructure } from '../../../core/dom/renderStructure.js';

export default class Component {
    constructor(props = {}) {
        this.state = {};
        this.props = props;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.update();
    }

    update() {
        this.isRender = false;
        const oldElement = renderStructure(this.render());
        const currentElement = this.__rootElement;
        const parent = currentElement.parentElement;

        if (parent && currentElement) {
            if (this.componentWillUnmount) {
                this.componentWillUnmount();
            }

            parent.replaceChild(oldElement, currentElement);

            if (this.componentDidUpdate) {
                this.componentDidUpdate();
            }

            this.__rootElement = oldElement;
        }
    }

    setRootElement(element) {
        this.__rootElement = element;
    }

    render() {
        return null;
    }
}
