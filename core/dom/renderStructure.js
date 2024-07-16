export function renderStructure(structure) {
    if (structure.type === 'TEXT_NODE') {
        return document.createTextNode(structure.content)
    }

    const element = document.createElement(structure.type)

    if (structure.children) {
        structure.children.forEach(child => {
            const childNode = renderStructure(child)
            element.appendChild(childNode)
        })
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


    if (structure.instance && structure.instance.attachRootElement) {
        structure.instance.attachRootElement(element);

        if (structure.instance.componentDidMount) {
            structure.instance.componentDidMount();
        }
    }

    return element;
}