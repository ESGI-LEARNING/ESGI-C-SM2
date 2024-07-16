import { renderStructure } from '../../core/dom/renderStructure.js'
import JoDOM from '../../core/dom/JoDOM.js'
import isClassComponent from '../../core/utils/type.js'

const BrowserRouter = function (routes, rootElement) {
    const generatePage = () => {
        let g;
        const pathname = window.location.pathname
        const route = routes.find(route => route.path === pathname)

        if (route) {
            if(isClassComponent(route.component)) {
                const component = route.component;
                const page = JoDOM.createElement(component);
                g = renderStructure(page);
            } else if (typeof route.component === "function") {
                console.log(route)
                g = new route.component();
            } else {
                console.log('coucou 1')
                g = renderStructure(route.component);
            }

            if (rootElement.childNodes.length) {
                rootElement.replaceChild(g, rootElement.childNodes[0]);
            } else {
                rootElement.appendChild(g);
            }
        } else {
            console.error(`Pas de route pour la route "${pathname}"`);
        }
    };

    generatePage();

    const oldPushState = history.pushState;
    history.pushState = function (state, title, url) {
        oldPushState.call(history, state, title, url);
        window.dispatchEvent(new Event('popstate'));
    };

    window.onpopstate = generatePage;
};

export const BrowserLink = function (props) {
    return {
        type: 'a',
        props: {
            href: props.to,
        },
        events: {
            click: [
                function (event) {
                    event.preventDefault();
                    history.pushState(null, null, props.to);
                },
            ],
        },
        children: [
            {
                type: 'TEXT_NODE',
                content: props.title,
            },
        ],
    };
};

export const Cta = function (props) {
    return {
        type: 'a',
        props: {
            href: props.to,
            class: 'cta',
        },
        events: {
            click: [
                function (event) {
                    event.preventDefault();
                    history.pushState(null, null, props.to);
                },
            ],
        },
        children: [
            {
                type: 'TEXT_NODE',
                content: props.title,
            },
        ],
    };
};

export const LogoHome = function (props) {
    return {
        type: 'a',
        props: {
            href: props.to,
        },
        events: {
            click: [
                function (event) {
                    event.preventDefault();
                    history.pushState(null, null, props.to);
                },
            ],
        },
        children: [
            {
                type: 'img',
                props: {
                    src: '../../assets/images/icons/logo.svg',
                    alt: 'logo',
                },
            },
        ],
    };
};
export default BrowserRouter;
