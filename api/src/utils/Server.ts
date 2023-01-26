import { Application } from 'express';

import IServer from '../interfaces/IServer';
import IRouter from '../interfaces/IRouter';
import MiddlewareFunction from '../types/MiddlewareFunction';

class Server implements IServer {
  private app: Application;
  private globalMiddleware: MiddlewareFunction[];
  private router: IRouter;

  constructor(globalMiddleware: MiddlewareFunction[], router: IRouter, app: Application) {
    this.app = app;
    this.globalMiddleware = globalMiddleware;
    this.router = router;
    this.addGlobalMiddleware();
    this.applyRoutes();
  }

  private addGlobalMiddleware(): void {
    if (this.globalMiddleware.length !== 0) {
      this.app.use(this.globalMiddleware);
    }
  }

  private applyRoutes(): void {
    this.app.use(this.router.expressRouter);
  }

  public start(): void {
    this.app.listen(8080, () => {
      console.log('Server started');
    })
  }
}

export default Server;
