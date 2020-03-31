// type AddFn = (a: number, b: number) => number;

// interface as function type
interface AddFn {
  (a: number, b: number): number;
}

let add3: AddFn;

add3 = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name?: string;
  outputName?: string;
}

// interface can inherit interface
interface Greetable extends Named {
  name?: string;

  greet(phrase: string): void;
}

let user1: Greetable;

class Person implements Greetable {
  name?: string;
  age: number;

  constructor(n?: string) {
    if (n) this.name = n;
    this.age = 33;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + '' + this.name);
    } else {
      console.log("hi!");
    }
  }
}

// name is optional
user1 = new Person();

user1.greet('Hi there, I am ');
