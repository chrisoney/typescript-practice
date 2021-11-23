class Vehicle {
  color: string = 'red';
  honk(): void {
    console.log('beep');
  }
};
const vehicle = new Vehicle();

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom')
  }
}

const car = new Car();

vehicle.honk();