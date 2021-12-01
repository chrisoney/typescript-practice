import { User } from "./models/User";

const user = new User({name: 'Chris', age: 30});

user.on('change', () => {
  console.log('boo!')
});

console.log(user.events)