// imports from various steps. Test yourself on what they were used for
import axios, { AxiosResponse } from 'axios';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserForm } from './views/UserForm';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';

const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json);
});

// turned the json into a list of moedls;
users.fetch();

// when event fires, we create the collectionview userlist and render to the DOM
users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
})


// const user = User.buildUser({ name: 'Name', age: 20 })
// const root = document.getElementById('root');
// if (root) {
//   // const userForm = new UserForm(root, user);
//   // userForm.render();
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   console.log(userEdit)
// } else {
//   throw new Error('Root element not found.')
// }

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