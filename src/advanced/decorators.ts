function Logger(logString: string) {
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const p = new constructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

@WithTemplate('<h1>My Person object</h1>', 'app')
class Person2 {
  name = 'Max';

  constructor() {
    console.log('creating person object');
  }
}

const pers = new Person2();

console.log(pers);
