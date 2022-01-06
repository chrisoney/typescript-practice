import axios, { AxiosResponse } from 'axios';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserForm } from './views/UserForm';


const userForm = new UserForm(document.getElementById('root'));

userForm.render();

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection)
// })

// collection.fetch()


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