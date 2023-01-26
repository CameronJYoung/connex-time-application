import express, { Router as ExpressRouter } from 'express';

import IController from '../interfaces/IController';

class Router {
  public expressRouter: ExpressRouter;
  private controllers: IController[];

  constructor(controllers: IController[]) {
    this.controllers = controllers;
    this.expressRouter = express.Router();
    this.applyControllers();
  }

  private applyControllers() {
    this.controllers.forEach((controller) => {
      controller.routes.forEach((route) => {
        switch (route.methodType) {
          case 'DELETE':
            this.expressRouter.delete(controller.basePath + route.path, [...route.middleware, route.handler]);
            break;
          case 'POST':
            this.expressRouter.post(controller.basePath + route.path, [...route.middleware, route.handler]);
            break;
          case 'PUT':
            this.expressRouter.put(controller.basePath + route.path, [...route.middleware, route.handler]);
            break;
          case 'GET':
            this.expressRouter.get(controller.basePath + route.path, [...route.middleware, route.handler]);
            break;
          case 'ALL':
            this.expressRouter.all(controller.basePath + route.path, [...route.middleware, route.handler]);
            break;
        }
      })
    })
  }
}

export default Router;
