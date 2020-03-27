// TS can infer variables, but not parameters
// Disable error with noImplicitAny: false

let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
}

sendAnalytics('data');

const button = document.querySelector('button');

// error! button can be null
// Disable error with strictNullChecks: false

// button.addEventListener('click', () => console.log('clicked'));

// no error
if (button) {
  button.addEventListener('click', () => console.log('clicked'));
}
