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

////////////////////////////////////

// FUNCTIONS

// FUNCTION DECLARATION - classic functions with helper functions
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) *200;
}

// FUNCTION EXPRESSION - variable name instead of function name (= is used)
const plantNeedsWater1 = function(day){
  if (day === 'Wednesday'){
    return true
  }
  return false
}

// ARROW FUNCTION - omits the function keyword (also called ANONYMOUS FUNCTION)
const plantNeedsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
// concise body arrow function with ternary expression 
// one parameter (no return keyword necessary) this is called an explicit return
const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;
// two parameters
const plantNeedsWater4 = (day,week) => (day === 'Wednesday' && week % 2 !==0) ? true : false;
console.log(plantNeedsWater4('Wednesday',43)); //output true
// zero parameters
const plantNeedsWater5 = () => console.log('Water the plants.');


// HIGHER ORDER FUNCTIONS

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 3;
  let checkB = func(val); // callback function
  if (checkA === checkB){
    return checkB;
  } else {
    return 'inconsistent results';
  }
}
// abstraction 
let shortcut = checkConsistentOutput;
// prints function name
console.log(shortcut.name);
// prints how many parameters
console.log(checkConsistentOutput.length);
// prints string version to view function
console.log(shortcut.toString());

////////////////////////////////////

// LOOPING

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
for (const i in groceryList){
  console.log(`${Number(i)+1}: ${groceryList[i]}`);
  if (groceryList[i] === 'pasta'){
    break
  }
}

let i = 0;
do {
  console.log("Hello");
  i++;
  } while (i < 5);


// ITERATOR METHODS

// forEach() -> apply function to each element in array but does not return new array (return value is always undefined)
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// arrow function
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`))
// function defined externally
function capitalize(element, index, array){
  array[index] = element[0].toUpperCase() + element.slice(1);
}
fruits.forEach(capitalize); // call forEach() and existing array and then print the altered array
console.log(fruits);

// map() -> apply function and returns new array
const animals = ["Hen", "elephant","llama","leopard","ostrich","Whale","octopus","rabbit","lion","dog",];
// arrow function
const secretMessage = animals.map((animal) => {
  return animal[0];
});
console.log(secretMessage.join(""));
// anonymous function
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(function (number) {
  return number / 100;
});
console.log(smallNumbers);

// filter() -> returns new array when callback function element evaluates to true
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
function lessThan(num){
  if (num < 250){return true;}
}
// Call .filter() on randomNumbers
const smallerNumbers = randomNumbers.filter(lessThan);
console.log(smallerNumbers);
// with arrow function
const smallestNumbers = randomNumbers.filter((num)=>{
  if (num < 250){return true;}
});


// findIndex() -> takes in callback function to return the index of the conditional, if index not found return -1
const animalss = ['hippo', 'tiger', 'lion', 'Seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animalss.findIndex((animal) => {if (animal === 'elephant'){return true;}}); //outputs index 7
const startsWithS = animalss.findIndex(animal => {return animal[0].toLowerCase() === 's';}) // outputs index 3

  ////////////////////////////////////

  // OBJECTS

  const team = {
  _players: [
    { firstName: "Pablo", lastName: "Doterrez", age: 18 },
    { firstName: "Jason", lastName: "Firm", age: 24 },
    { firstName: "Francesco", lastName: "Alvarez", age: 20 },
  ],
  _games: [
    { opponent: "FC Madrid", teamPoints: 3, opponentPoints: 1 },
    { opponent: "Chelsea", teamPoints: 0, opponentPoints: 4 },
    { opponent: "Liverpool", teamPoints: 1, opponentPoints: 2 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  // Traditional Function Expression
  addPlayer: function (newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },
  // Method Shorthand (ES6)
  addGame(newOpponent, newTeamPoints, newOppenentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOppenentPoints
    };
    this._games.push(game);
  },
  getTotalGames(){
    let count = 0;
    for (const game in this._games){
      count++
    };
    return count;
  },
  getAverageScore(){
    let count = this.getTotalGames();
    let score = 0;
    for (const game of this._games){
      score += game.teamPoints;
    }
    return `Team Average Score: ${score/count}`;
  }
};

// team.addPlayer("Juan", "Gomez", 22);
// team.addPlayer("Bugs", "Bunny", 76);
// console.log(team.players);
// team.addGame('Titans',100,98);
// console.log(team.games);
// console.log(team.getTotalGames());
// console.log(team.getAverageScore());


