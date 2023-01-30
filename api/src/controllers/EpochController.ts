import { Request, Response } from 'express';

import IController from '../interfaces/IController';
import IEpochService from '../interfaces/IEpochService';
import Route from '../types/Route';

class EpochController implements IController {
  public basePath = '/time';
  private epochService: IEpochService;

  constructor(epochService: IEpochService) {
    this.epochService = epochService;
  }

  public timeHandler = async (req: Request, res: Response) => {
    const epochSeconds = this.epochService.generateEpoch();
    
    res.status(200).json({
      epoch: epochSeconds
    });
  };
  
  public routes: Route[] = [
    {
      middleware: [],
      path: '/',
      handler: this.timeHandler,
      methodType: 'GET'
    }
  ];
}

export default EpochController;
