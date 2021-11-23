class Vehicle {
  // color: string;
  // constructor(color:string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  honk(): void {
    console.log('beep');
  }
};
const vehicle = new Vehicle('orange');

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom')
  }
}

// const car = new Car();

vehicle.honk();