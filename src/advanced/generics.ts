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

const mergedObj = merge({ name: 'Max', hobbies: ['sports'] }, { age: 23 });

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descText = 'Got no value. ';
  if (element.length > 0) {
    descText = 'Got ' + element.length + ' elements';
  }
  return [element, descText];
}

console.log(countAndDescribe('Hi there'));

// U is key of T
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  console.log(obj[key]);
}

extractAndConvert({ name: 'Manny' }, 'name');
