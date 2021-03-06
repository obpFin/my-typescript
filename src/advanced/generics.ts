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

// Generic class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Manu');

// const objStorage = new DataStorage<Object>();
// objStorage.addItem({ name: 'Manu' });

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial type wraps type as optional
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
