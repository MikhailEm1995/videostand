import * as express from 'express';

export type RouterConfig {
  [method: string]: Route
}

export type Route {
  [route: string]: RouteHandling
}

export type RouteHandling {
  handler: Function
  middlewares: Function[]
}

export interface Router {
  config: RouterConfig
  router: express.Router
  setCommonMiddlewares(middlewares: Function[]): IRouter
  configureRouter(config: RouterConfig): IRouter
  setConfig(config: RouterConfig): Router
  setMethod(method: string): Router
  setRoutes(): Router
  setRoute(method: string, endpoint: string): Router

  getRouter(): express.Router
}
