import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'newer name', age: 42 });

user.on('save', () => {
  console.log('saved', user);
});

user.save();
