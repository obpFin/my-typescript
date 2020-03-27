type Combinable = number | string; // custom type with union type
type conversionDescriptor = 'as-number' | 'as-text' // custom type with literal union type

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: conversionDescriptor  
) {
  let result;
  // with union types, you sometimes need extra runtime type checking
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '21', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('max', 'anna', 'as-text');
console.log(combinedNames);
