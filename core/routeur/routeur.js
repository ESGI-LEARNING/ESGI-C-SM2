import BrowserRouter from '../../src/components/BrowserRouter.js';

const JoDOMRouter = {
    render: function (rootElement, routes) {
        BrowserRouter.bind(this)(routes, rootElement);
    },
};

export default JoDOMRouter;
