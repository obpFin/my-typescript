// without types the funcion concats the numbers, resulting to wrong result
// with types the compiler returns error if parameter is wrong type

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
  return;
}

let number1: number;  // type should be only declared when the var is not instanciated
number1 = 5;

// TypeScript guesses the types with type inference when the variables are declared with a value
const number2 = 2.5;
const printResult = true;
const resultPhrase = 'Result is ';

add(number1, number2, printResult, resultPhrase);

// Tuples

// Type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
const tea: Drink = ['brown', false, 0]


