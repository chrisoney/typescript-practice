import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { AppRouter } from '../../AppRouter';
import { NextFunction, Request, Response, RequestHandler } from 'express';

function bodyValidators(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request.');
      return;
    }
    
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send('Invalid request.');
        return;
      }
    }
  }
}

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();
    
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );

      const middlewares = Reflect.getMetadata(
        MetadataKeys.middleware,
        target.prototype,
        key
      ) || [];

      const keys = Reflect.getMetadata();
      
      if (path) {
        router[method](`${routePrefix}${path}`, middlewares, routeHandler);
      }
    }
  }
}