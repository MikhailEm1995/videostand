import * as express from 'express';
import {Router: IRouter, RouterConfig, RouteHandling, Route} from '../interfaces/Router';

export default class Router implement IRouter {
  private router: express.Router;
  private config: RouterConfig;

  constructor(config: RouterConfig) {
    this.router = express.Router();
    this.setConfig(config);
  }

  public setCommonMiddlewares(middlewares: Function[]): IRouter {
    middlewares.forEach((middleware: Function) => {
      this.router.use(middleware);
    });

    return this;
  }

  public configureRouter(config: RouterConfig): IRouter {
    this.setRoutesIfConfigured();

    return this;
  }

  public setConfig(config: RouterConfig): IRouter {
    this.config = config;

    return this;
  }

  private setRoutesIfConfigured(): IRouter {
    if (this.config === undefined) return this;

    this.setRoutes();

    return this;
  }

  private setRoutes(): IRouter {
    Object.keys(this.config).forEach((method: string) => {
      this.setMethodIfDefined(method);
    });

    return this;
  }

  private setMethodIfDefined(method: string): IRouter {
    if (this.config[method] === undefined) return this;

    this.setMethod(method);

    return this;
  }

  private setMethod(method: string): IRouter {
    Object.keys(this.config[method]).forEach((endpoint: string) => {
      this.setRouteIfEndpointDefined(method, endpoint);
    });

    return this;
  }

  private setRouteIfEndpointDefined(method: string, endpoint: string): IRouter {
    const routeHandling: RouteHandling = this.config[method][endpoint];

    if (routeHandling === undefined) return this;

    this.setRouteIfHandlerDefined(method, endpoint);

    return this;
  }

  private setRouteIfHandlerDefined(method: string, endpoint: string): IRouter {
    const routeHandling: RouteHandling = this.config[method][endpoint];
    const handler: Function = routeHandling.handler;

    if (handler === undefined && typeof handler === 'function') return this;

    const middlewares: Function[] = routeHandling.middlewares;

    this.setRoute(method, endpoint, middlewares, handler);

    return this;
  }

  private setRoute(method: string, endpoint: string, middlewares: Function[], handler: Function): IRouter {
    this.router[method](endpoint, ...middlewares, handler);

    return this;
  }

  public getRouter(): express.Router {
    return this.router;
  }
}
