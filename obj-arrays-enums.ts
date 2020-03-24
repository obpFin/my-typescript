// const person: {
//   name: string;
//   age: number;
// } = {            Better to let typeScript infer the type for the object
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'obp',
  age: 30,
  hobbies: ['Sports', 'Coding'],
  role: [2, 'author'] // tuple: fixed length array
};

// person.role.push('admin'); // no error
// person.role[1] = 10; // error! not assignable to type string
// person.role = [0, 'test1', 'test2']; // error! types of property length are incompatible

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role {   // enumarated global constant identifier
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person2 = {
  name: 'dude',
  age: 45,
  hobbies: ['Sports', 'Coding'],
  role: Role.AUTHOR
};

let favoriteActivities: any[];    // any type of array
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // ERROR!
}

if (person2.role == Role.AUTHOR) console.log('is author');
