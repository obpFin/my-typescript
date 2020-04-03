// Type casting

// v1
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');

// v2 - React way
const userInputElement = document.getElementById('user-input');

// ensure there's no null value
if (userInputElement)
  (userInputElement as HTMLInputElement).value = 'Hi there!';
