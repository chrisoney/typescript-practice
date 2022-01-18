import 'reflect-metadata';

function routeBinder(method: string) {
  return function(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    }
  }
}

export const get = routeBinder('GET');
export const post = routeBinder('POST');
export const put = routeBinder('PUT');
export const patch = routeBinder('PATCH');
export const del = routeBinder('DELETE');