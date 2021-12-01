import { User } from "./models/User";
import axios from 'axios';

const user = new User({name: 'Chris', age: 30});

user.on('change', () => {
  console.log('boo!')
});
user.on('change', () => {
  console.log('ahhhh!')
});

// user.trigger('change');

(async () => {
  const temp = await axios.get('localhost:3000/users');
  console.log(temp)
})()