// const person: {
//   name: string;
//   age: number;
// } = {            Better to let typeScript infer the type for the object
const person = {
  name: 'obp',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // ERROR!
}
