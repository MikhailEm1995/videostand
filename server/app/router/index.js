const express = require('express');

const Router = (config) => {
  const router = express.Router;
  const config = config;

  return {
    setCommonMiddlewares(middlewares) {
      middlewares.forEach(middleware => router.use(middleware));
    },
    configureRouter(config) {
      this.setRoutesIfConfigured();
    },
    setRoutesIfConfigured() {
      if (config === undefined) return this;
      this.setRoutes();
      return this;
    },
    setRoutes() {
      Object.keys(config).forEach(method => this.setMethodIfDefined(method));
    },
    setMethodIfDefined(method) {
      if (config[method] === undefined) return this;
      this.setMethod(method);
      return this;
    },
    setMethod(method) {
      Object.keys(config[method]).forEach((endpoint) => {
        this.setRouteIfEndpointDefined({ method, endpoint });
      });
      return this;
    },
    setRouteIfEndpointDefined({ method, endpoint }) {
      const routeHandling = config[method][endpoint];
      if (routeHandling === undefined) return this;
      this.setRouteIfHandlerDefined({ method, endpoint });
      return this;
    },
    setRouteIfHandlerDefined({ method, endpoint }) {
      const routeHandling = config[method][endpoint];
      const handler = routeHandling.handler;
      if (handler === undefined || typeof handler !== 'function') return this;
      const middlewares = routeHandling.middlewares;
      this.setRoute({ method, endpoint, middlewares, handler });
      return this;
    },
    setRoute({ method, endpoint, middlewares, handler }) {
      router.[method](endpoint, ...middlewares, handler);
      return this;
    },
    getRouter() {
      return router;
    }
  };
};

module.exports = Router;
