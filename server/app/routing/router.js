const express = require('express');

const Router = (configObj) => {
  const router = express.Router();
  const config = configObj;

  function setRoutesIfConfigured() {
    if (config === undefined) return;
    setRoutes();
  }

  function setRoutes() {
    Object.keys(config).forEach(method => setMethodIfDefined(method));
  }

  function setMethodIfDefined(method) {
    if (config[method] === undefined) return;
    setMethod(method);
  }

  function setMethod(method) {
    Object.keys(config[method]).forEach((endpoint) => {
      setRouteIfEndpointDefined({ method, endpoint });
    });
  }

  function setRouteIfEndpointDefined({ method, endpoint }) {
    const routeHandling = config[method][endpoint];
    if (routeHandling === undefined) return;
    setRouteIfHandlerDefined({ method, endpoint });
  }

  function setRouteIfHandlerDefined({ method, endpoint }) {
    const routeHandling = config[method][endpoint];
    const handler = routeHandling.handler;
    if (handler === undefined || typeof handler !== 'function') return;
    const middlewares = routeHandling.middlewares;
    setRoute({ method, endpoint, middlewares, handler });
  }

  function setRoute({ method, endpoint, middlewares, handler }) {
    router[method](endpoint, ...middlewares, handler);
  }

  return {
    setCommonMiddlewares(middlewares) {
      middlewares.forEach(middleware => router.use(middleware));
    },
    configureRouter() {
      setRoutesIfConfigured();
    },
    getRouter() {
      return router;
    }
  };
};

module.exports = { Router };
