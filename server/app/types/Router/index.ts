import * as express from 'express';

export type RouterConfig = {
  [method: string]: Route
}

export type Route = {
  [route: string]: RouteHandling;
}

export type RouteHandling = {
  handler: Function;
  middlewares: Function[];
}

export interface IRouter {
  config: RouterConfig
  router: express.Router
  setCommonMiddlewares(middlewares: Function[]): IRouter
  configureRouter(config: RouterConfig): IRouter
  setConfig(config: RouterConfig): IRouter
  setMethod(method: string): IRouter
  setRoutes(): IRouter
  setRoute(method: string, endpoint: string): IRouter

  getRouter(): express.Router
}
