import { Request, Response } from 'express';

import IController from '../interfaces/IController';
import Route from '../types/Route';

class HomeController implements IController {
  public basePath = '';

  public baseHandler = async (req: Request, res: Response) => {
    res.send('Welcome to the epoch API!')
  };

  public notFoundHandler = async (req: Request, res: Response) => {
    res.status(404).send('This route does not exist!');
  };
  
  public routes: Route[] = [
    {
      middleware: [],
      path: '/',
      handler: this.baseHandler,
      methodType: 'ALL'
    },
    {
      middleware: [],
      path: '*',
      handler: this.notFoundHandler,
      methodType: 'ALL'
    }
  ];
}

export default HomeController;
