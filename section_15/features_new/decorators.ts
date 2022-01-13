// you can add a decorator to a class definition as well
@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`
  }
  @logError('Ah something bad happened')
  pilot(
    @parameterDecorator speed: string, 
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('Swish');
    } else {
      console.log('nothing')
    }
    // throw new Error()
  }
}
// only argument is the constructor function of that class. You can annotate it as a Function or as `typeof Boat`, which is a reference to the constructor funciton of that class
function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}


// Target will be the prototype of Boat (in this case), key will be the name of whatever we use for the second argument. in this case pilot (could also be formattedColor or color)
// Third argument would be property descriptor (object)
// Important note: Decorators are applied when code for the class is ran (NOT when an instance is created)
// Decorator factory: normal function that returns our decorator
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch(e) {
        console.log(errorMessage)
      }
    }
  }
}
