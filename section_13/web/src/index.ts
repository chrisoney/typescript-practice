import { User } from "./models/User";

const user = User.buildUser({ id: 1, name: 'Newer Name', age: 0 });

user.on('save', () => {
  console.log(user)
})

user.save();

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

// const colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color)
//   }
// }

// colors.printColor();
// const newPrintColor = colors.printColor;
// newPrintColor();