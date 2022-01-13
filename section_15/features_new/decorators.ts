class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`
  }
  @logError
  pilot(): void {
    throw new Error('BLAH!')
    console.log('Swish');
  }
}
// Target will be the prototype of Boat (in this case), key will be the name of whatever we use for the second argument. in this case pilot (could also be formattedColor or color)
// Third argument would be property descriptor (object)
// Important note: Decorators are applied when code for the class is ran (NOT when an instance is created)
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;
  desc.value = function() {
    try {
      method();
    } catch(e) {
      console.log(`Oops, boat sunk.`)
    }
  }
}

new Boat().pilot()