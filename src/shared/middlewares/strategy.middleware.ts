import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class StrategyMiddleware implements NestMiddleware<Request, Response> {
  constructor() {}

  use(req: Request, res: Response, next: NextFunction) {
    next();
  }
}
