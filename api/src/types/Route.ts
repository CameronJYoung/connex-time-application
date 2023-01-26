import { Request, Response } from 'express';

import MethodType from './MethodType';
import MiddlewareFunction from './MiddlewareFunction';

type Route = {
  methodType: MethodType;
  path: string;
  middleware: MiddlewareFunction[];
  handler: (req: Request, res: Response) => Promise<void>;
}

export default Route;
