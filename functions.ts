// let someValue: undefined   // undefined is a type in TS

function add2(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number): void {
  console.log('Result: ' + num);
}

let combineValues: (a: number, b: number) => number; // function type with parameters with types

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult2(add2(5, 23));


combineValues = add2;
// combineValues = 5 // Error!

console.log(combineValues(8, 8));

addAndHandle(10, 20, result => {
  console.log('Callback result: ', result);
  return result;    // TS doesn't care if function returns something even though void was declared
});

