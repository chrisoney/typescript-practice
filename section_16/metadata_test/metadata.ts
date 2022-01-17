import 'reflect-metadata';

// const plane = {
//   color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);

// Practical below

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrrr');
  }
};
function get(path: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  }
}

function controller(target: typeof Plane) {
  console.log(target)
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path)
    //router.get(path, target.prototype[key])
  }
}