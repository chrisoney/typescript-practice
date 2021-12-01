import { User } from "./models/User";

const user = new User({name: 'Chris', age: 30});

console.log(user.get('age'))
console.log(user.get('name'))