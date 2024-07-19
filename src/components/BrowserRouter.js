import { renderStructure } from '../../core/dom/renderStructure.js';
import JoDOM from '../../core/dom/JoDOM.js';
import isClassComponent from '../../core/utils/type.js';
import NotFound from '../pages/404.js';

const BrowserRouter = function (routes, rootElement) {
    const matchRoute = (pathname) => {
        return routes.find((route) => {
            const routeParts = route.path.split('/');
            const pathParts = pathname.split('/');

            if (routeParts.length !== pathParts.length) return false;

            return routeParts.every((part, index) => {
                if (part.startsWith(':')) return true;
                return part === pathParts[index];
            });
        });
    };

    const getParams = (route, pathname) => {
        const routeParts = route.path.split('/');
        const pathParts = pathname.split('/');
        const params = {};

        routeParts.forEach((part, index) => {
            if (part.startsWith(':')) {
                const key = part.slice(1);
                params[key] = pathParts[index];
            }
        });

        return params;
    };

    const generatePage = () => {
        const pathname = window.location.pathname;
        const route = matchRoute(pathname);

        if (route) {
            const params = getParams(route, pathname);
            let g;

            if (isClassComponent(route.component)) {
                const Component = route.component;
                const page = JoDOM.createElement(Component, params);
                g = renderStructure(page);
            } else if (typeof route.component === 'function') {
                g = new route.component(params);
            } else {
                g = renderStructure(route.component);
            }

            if (rootElement.childNodes.length) {
                rootElement.replaceChild(g, rootElement.childNodes[0]);
            } else {
                rootElement.appendChild(g);
            }
        } else {
            console.error(`Pas de route pour la route "${pathname}"`);
            const page = JoDOM.createElement(NotFound);
            const g = renderStructure(page);
            rootElement.appendChild(g);
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
            class: props.class,
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
