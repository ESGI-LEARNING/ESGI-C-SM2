import isClassComponent from '../utils/type.js'

export function createElement(component, props, ...children) {
    if (isClassComponent(component)) {
        const instance = new component(props);
        component = instance.render();
        component.instance = instance;
    } else if (typeof component === "function") {
        return component(props);
    }

    if (typeof component === "object") {
        component.props = { ...component.props, ...props };

        if (!component.children) component.children = [];

        children.forEach((child) => {
            if (Array.isArray(child)) {
                component.children.push(...child);
            } else {
                component.children.push(child);
            }
        });

        return component;
    } else {
        return {
            type: component,
            props: props,
            children: children,
        };
    }
}