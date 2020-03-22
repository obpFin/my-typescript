// without types the func concats the numbers, resulting to wrong result
// with types the compiler returns error

function add(n1: number, n2:number) {
  return n1 + n2;
}

const number1 = '5';
const number2 = 2.5;

const res = add(number1, number2);

console.log(res)
