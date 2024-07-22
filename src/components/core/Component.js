import { renderStructure } from '../../../core/dom/renderStructure.js';
import { validateStructure, validator } from '../../../core/typeCheck.js'

export default class Component {
    constructor(props = {}) {
        this.state = {};
        this.props = props;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.update();
    }

    validateProps(data) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                let type = data[key];
                if (validator.hasOwnProperty(type)) {
                    if (!validator[type](this.props[key])) {
                        console.error(`Validation failed for prop ${key}. Expected type ${type}.`);
                    }
                } else {
                    console.error(`Unknown validator type ${type} for prop ${key}.`);
                }
            }
        }
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
