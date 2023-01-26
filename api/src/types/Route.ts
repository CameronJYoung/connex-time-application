import { NextFunction, Request, Response } from 'express';

import MethodType from './MethodType';

type Route = {
  methodType: MethodType;
  path: string;
  middleware: NextFunction[];
  handler: (req: Request, res: Response) => Promise<void>;
}

export default Route;
