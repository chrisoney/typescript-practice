class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
};

class Car extends Vehicle {

}

const vehicle = new Car();
vehicle.honk();