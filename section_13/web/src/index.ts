import { User } from "./models/User";

const user = new User({name: 'Chris', age: 30});

user.on('change', () => {
  console.log('boo!')
});
user.on('change', () => {
  console.log('ahhhh!')
});

user.trigger('change');