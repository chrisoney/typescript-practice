import { User } from "./models/User";

const user = new User({ name: "New Record", age: 0 });

user.save();
user.events.on('change', () => {
  console.log('test')
});

user.events.trigger('change');