function Logger(logString: string) {
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function<T extends {new(...arg: any[]): {name: string}}>(originalConstructor: T) {
    // Returns new class
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate('<h1>My Person object</h1>', 'app')
class Person2 {
  name = 'Max';

  constructor() {
    // console.log('creating person object');
  }
}

function Log(target: any, propertyName: string) {
  console.log('Property decorator');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
  return {}
}

function Log4(target: any, name: string, position: number) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  get price() {
    return this._price;
  }

  @Log2
  set price(val: number) {
    if (val > 0) this._price = val;
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price + (1 + tax);
  }
}

const product = new Product('title', 224);

// bind this to caller
function Autobind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  message = 'This works!';
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const printerButton = document.querySelector('button')!;
printerButton.addEventListener('click', p.showMessage);

