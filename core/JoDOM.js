const JoDOMRouter = {
    render: function (rootElement, routes) {
        const pathname = window.location.pathname;
        const route = routes.find((route) => route.path === pathname);

        if (route) {
            const Component = route.component;
            const props = route.props || {};
            const componentInstance = new Component(props);
            const structure = componentInstance.render();

            if (JoDOMRouter.currentDomElement) {
                // Mettez à jour l'arborescence du DOM existante
                JoDOMRouter.updateStructure(
                    JoDOMRouter.currentDomElement,
                    structure,
                );
            } else {
                // Rendez la structure pour la première fois
                const domElement = JoDOMRouter.renderStructure(structure);
                JoDOMRouter.currentDomElement = domElement;
                rootElement.appendChild(domElement);
            }
        } else {
            console.error(`Pas de route pour la route "${pathname}"`);
        }
    },

    updateStructure: function (domNode, newStructure) {
        // Si les types ne correspondent pas, remplacez le noeud entier
        if (
            domNode.nodeName !== newStructure.type &&
            domNode.nodeType !== Node.TEXT_NODE
        ) {
            const newDomNode = JoDOMRouter.renderStructure(newStructure);
            domNode.parentNode.replaceChild(newDomNode, domNode);
            return;
        }

        if (newStructure.props) {
            Object.keys(newStructure.props).forEach((propName) => {
                const propValue = newStructure.props[propName];
                // Mettez à jour la propriété seulement si elle a changé
                if (domNode[propName] !== propValue) {
                    if (propName.startsWith('on')) {
                        domNode.addEventListener(
                            propName.toLowerCase().substring(2),
                            propValue,
                        );
                    } else if (propName === 'style') {
                        Object.assign(domNode.style, propValue);
                    } else {
                        domNode.setAttribute(propName, propValue);
                    }
                }
            });
        }

        if (newStructure.children) {
            while (domNode.childNodes.length > newStructure.children.length) {
                domNode.removeChild(domNode.lastChild);
            }
            while (domNode.childNodes.length < newStructure.children.length) {
                const newChild = JoDOMRouter.renderStructure(
                    newStructure.children[domNode.childNodes.length],
                );
                domNode.appendChild(newChild);
            }
            for (let i = 0; i < domNode.childNodes.length; i++) {
                JoDOMRouter.updateStructure(
                    domNode.childNodes[i],
                    newStructure.children[i],
                );
            }
        }
    },

    renderStructure: function (structure) {
        if (structure.type === 'TEXT_NODE') {
            return document.createTextNode(structure.content);
        }

        const domElement = document.createElement(structure.type);

        if (structure.props) {
            Object.keys(structure.props).forEach((propName) => {
                const propValue = structure.props[propName];

                if (propName.startsWith('on')) {
                    domElement.addEventListener(
                        propName.toLowerCase().substring(2),
                        propValue,
                    );
                } else if (propName === 'style') {
                    Object.assign(domElement.style, propValue);
                } else {
                    domElement.setAttribute(propName, propValue);
                }
            });
        }
        /*
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
         */

        if (structure.loop) {
            const container = document.createElement('ul');
            for (let i = 0; i < structure.loop.count; i++) {
                const loopElement = this.renderStructure({
                    ...structure.loop.template,
                    props: {
                        ...structure.loop.template.props,
                        'data-index': i,
                    },
                });
                container.appendChild(loopElement);
            }
            domElement.appendChild(container);
        }

        if (structure.children) {
            structure.children.forEach((child) => {
                const childNode = JoDOMRouter.renderStructure(child);
                domElement.appendChild(childNode);
            });
        }

        return domElement;
    },
};

export default JoDOMRouter;
