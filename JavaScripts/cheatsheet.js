console.log(Math.random()*50);

// let to assign changabel values and undefined
let celsius1;
let fahrenheit1 = celsius * (9/5) + 32;
console.log(typeof fahrenheit); //this prints the data type of the variable!

// const for unchanging values
const pi = 3.14

const kelvin = 293;
const celsius = kelvin - 273;
// fahrenheit conversion, this can be changed
let fahrenheit = celsius * (9/5) + 32;
// making sure the conversion is rounded down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

////////////////////////////////////

// conditions
let username1 = '';
let defaultName1;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

// short circuit evaluation:
let username = '';
let defaultName = username || 'Stranger'; // either value is true (not empty or null)
// && AND operator
// ! negafier (eg. !true => false)
console.log(defaultName); // Prints: Stranger

////////////////////////////////////

// ternary operators

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// will be
// condition ? if true then : else if false

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

////////////////////////////////////

// switch (which variable to check) case (which condition) break (always required to stop code block when match is hit) otherwise all other statement will be run after match is hit


let athleteFinalPosition = '4th place';
switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break
  case 'second place':
  console.log('You get the silver medal!');
  break
  case 'third place':
  console.log('You get the bronze medal!');
  break
  default:
  console.log('No medal awarded.');
  break
}