class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`
  }
  @logError('Ah something bad happened')
  pilot(): void {
    throw new Error()
    console.log('Swish');
  }
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
