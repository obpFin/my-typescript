let userInput: unknown; // any variable can be assigned to any type,
// but set type can't be assigned to unknown

let userName: string;

userInput = 5;
userInput = '5';
// userName = userInput; // Error!

function generateError(message: string, code: number): never {    // never return value
  throw { message, errorCode: code };
}

generateError('An error occurred', 500);
