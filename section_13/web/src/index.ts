import { User } from "./models/User";

const user = new User({ name: "New Record", age: 0 });

// A quick reminder on accessors

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const person = new Person('chris', 'oney');
// console.log(person.fullName)

// A reminder how "this" works in JS

const colors = {
  color: 'red',
  printColor() {
    console.log(this.color)
  }
}

colors.printColor();
const newPrintColor = colors.printColor;
newPrintColor();