type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection type
type ElevatedEmployee = Admin & Employee;

// Same result
// interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable2 = string | number;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;

// function overloading
function add4(a: string, b: string): string;
function add4(a: number, b: number): number;
function add4(a: Combinable2, b: Combinable2) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add4('ob', 'p');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'max',
  job: { title: 'ceo', description: 'my own company' },
};

// optional chaining
// console.log(fetchedUserData?.job?.title);

const userInput2 = null;

// nullish coalescing
const storedData = userInput2 ?? 'default';

type UnknownEmployee = Employee | Admin;

// way for type guard to check non-js types
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  // type guard
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('start date: ' + emp.startDate);
  }
}

// printEmployeeInformation(e1);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amoung: number) {
    console.log('loading cargo... ' + amoung);
  }
}

type Vehicle2 = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle2) {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

// useVehicle(v1);
// useVehicle(v2);

// Discriminated unions

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// Index types    - if property name not known or how many

interface ErrorContainer {
  // { email: 'not a valid email', username: 'Must start with a character'}

  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character',
};
