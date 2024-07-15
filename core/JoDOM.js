import BrowserRouter from '../src/components/BrowserRouter.js'

const JoDOMRouter = {
    render: function (rootElement, routes) {
        BrowserRouter.bind(this)(routes, rootElement);
    },

    renderStructure: function generateDom(structure) {
        let element;
        let componentObserver;

        if (typeof structure.type === "string") {
            if (structure.type === "TEXT_NODE") {
                return document.createTextNode(structure.content);
            }

            element = document.createElement(structure.type);
        } else {
            const props = structure.props || {};
            const state = structure.state || {};

            const componentInstance = new structure(props, state);
            componentInstance.componentDidMount();

            componentObserver = {
                update: function(component) {
                    const newElement = JoDOMRouter.renderStructure(component.render());
                    element.replaceWith(newElement);
                    element = newElement;
                }
            };

            componentInstance.subscribe(componentObserver);

            element = this.renderStructure(componentInstance.render());
        }

        if (structure.props) {
            for (const propName in structure.props) {
                if (propName === "style") {
                    Object.assign(element.style, structure.props[propName]);
                } else if (propName.startsWith("data-")) {
                    element.dataset[propName.replace("data-", "")] =
                        structure.props[propName];
                } else {
                    element.setAttribute(propName, structure.props[propName]);
                }
            }
        }

        if (structure.events) {
            for (const eventName in structure.events) {
                for (const eventListeners of structure.events[eventName]) {
                    element.addEventListener(eventName, eventListeners);
                }
            }
        }

        if (structure.children) {
            for (const child of structure.children) {
                element.appendChild(this.renderStructure(child));
            }
        }

        return element;
    },
};

export default JoDOMRouter;