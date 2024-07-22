import BrowserRouter from '../../src/components/core/BrowserRouter.js';

const JoDOMRouter = {
    render: function (rootElement, routes) {
        BrowserRouter.bind(this)(routes, rootElement);
    },
};

export default JoDOMRouter;
