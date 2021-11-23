class Vehicle {
  color: string;
  constructor(color:string) {
    this.color = color;
  }

  honk(): void {
    console.log('beep');
  }
};
const vehicle = new Vehicle('orange');

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom')
  }
}

// const car = new Car();

vehicle.honk();