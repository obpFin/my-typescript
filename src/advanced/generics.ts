// const names: Array<string> = []; // string[]
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     'this is done';
//   }, 2000);
// });

// promise.then((data) => {
//   data.split('');
// });

function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: 'Max', hobbies: ['sports'] },
  { age: 23 }
);
