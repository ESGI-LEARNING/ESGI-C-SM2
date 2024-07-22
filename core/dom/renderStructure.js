import { propsTypes, validateStructure } from '../typeCheck.js'

export function renderStructure(structure) {
    if (structure.type === 'TEXT_NODE') {
        return document.createTextNode(structure.content);
    }

    const element = document.createElement(structure.type);

    if (structure.children) {
        structure.children.forEach((child) => {
            const childNode = renderStructure(child);
            element.appendChild(childNode);
        });
    }

    if (structure.props) {
        validateStructure(structure.props, propsTypes);

        for (const propName in structure.props) {
            if (propName === 'style') {
                Object.assign(element.style, structure.props[propName]);
            } else if (propName.startsWith('data-')) {
                element.dataset[propName.replace('data-', '')] =
                    structure.props[propName];
            } else {
                element.setAttribute(propName, structure.props[propName]);
            }
        }
    }

    if (structure.events) {
        for (const eventName in structure.events) {
            if (eventName === 'mounted') {
                setTimeout(() => {
                    for (const callback of structure.events[eventName]) {
                        callback(element);
                    }
                }, 0);
            } else {
                for (const eventListeners of structure.events[eventName]) {
                    element.addEventListener(eventName, eventListeners);
                }
            }
        }
    }

    if (structure.instance && structure.instance.setRootElement) {
        structure.instance.setRootElement(element);

        if (
            structure.instance.isRender &&
            structure.instance.componentDidMount
        ) {
            structure.instance.componentDidMount();
        }
    }

    return element;
}
