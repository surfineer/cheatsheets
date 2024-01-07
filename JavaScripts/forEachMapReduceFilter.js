///////////////////
// VARIABLES

let animals = [
  "hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "duck",
];

const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

let singleArray = [34, 234, 45, 12, 23, 5678, 1, -45, 0];

let multiArray = [
  [123, 345, 456, 678],
  [23, 56, 78, 12],
  [1, 8, 5],
  [3456, 899, 23, 1],
];

///////////////////
// ITERATOR GENERAL FUNCTION CONSTRUCT

function arrayIteration(item, index, array) {
  return "do something";
}

function stringConversion(item, index, array) {
  return item.toString();
}
// callback function for .reduce()
function sumedUp(accumulator, item, index, array) {
  return accumulator + item;
}

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

//////////////////////////////////////
// ITERATOR METHODS

///////////////////
// forEach() - logs array with index and capitalized animal names
animals.forEach((item, index, array) => {
  array[index] = item[0].toUpperCase() + item.slice(1);
  console.log(`${index}: ${array[index]}`);
});

// example of passing argument function
function declineEverything1(array) {
  array.forEach((element) => politelyDecline(element));
}
// vs example of applying function directly
function declineEverything2(array) {
  array.forEach(politelyDecline);
}

///////////////////
// map() - returns new array with first letters of animals

// 1
let animalString = animals.map((item, index, array) => {
  return item[0];
});
console.log(animalString.join(""));
// 2
let stringNumbers = singleArray.map(stringConversion);
console.log(stringNumbers);
// 3
let stringNumbers2 = multiArray.map(stringConversion);
console.log(stringNumbers2);
let stringNumbers3 = stringNumbers2.join(",");
console.log(stringNumbers3, typeof stringNumbers3);

///////////////////
// filter() - returns array with values that are true from function condition

// 1
let divisibleByFive = singleArray.filter(function (item, index, array) {
  return item % 5 === 0;
});
console.log(divisibleByFive);
// 2 using .filter() and .includes() to compare two arrays and return matches as new array
const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];
const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];
function justCoolStuff(array1, array2) {
  return array1.filter((element, index, array) => {
    return array2.includes(element);
  });
}
console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

///////////////////
// every() - returns boolean if condition for every element is fulfilled
function isTheDinnerVegan(arrayOfObjects){
  return arrayOfObjects.every(
    (element, index, array) => {
      return element.source === 'plant';
    }
  )
}
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
console.log(isTheDinnerVegan(dinner))
// Should print false


///////////////////
// reduce() - additional parameter 'sumThusFar' (see sumedUp function)

// 1
let totaled = singleArray.reduce(sumedUp, 10); // 10 is a 2nd parameter to add to the total sum (acts as a starting point for the counting up)
console.log(totaled);
// 2
let totaled2 = multiArray.map((element) => element.reduce(sumedUp));
console.log(totaled2);
// 3 reduce() works on strings too!
let animalsReduced = animals.reduce((accumulator, currentElement) => {
  return accumulator + currentElement[0];
}, "");
console.log(animalsReduced);

///////////////////
// sort()

// 1
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
// no function passed in will sort ascending
console.log(years.sort());
// with function passed in can be used to sort descending
function sortYears(arrayOfYears) {
  return arrayOfYears.sort((a, b) => {
    return a < b;
  });
}
console.log(sortYears(years));

// 2 sorting array of objects by their attributes
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
function sortSpeciesByTeeth(arrayOfObject){
  return arrayOfObject.sort(
    (a,b) => a.numTeeth > b.numTeeth
  )
}
console.log(sortSpeciesByTeeth(speciesArray))
// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

///////////////////
// .findIndex() and .indexOf()

// using .indexOf()
const findMyKeys2 = (arrayOfStrings) =>
  arrayOfStrings.indexOf("keys")

// using .findIndex()
function findMyKeys(arrayOfStrings) {
  return arrayOfStrings.findIndex(
    (element) => element === "keys")
  }
const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];
console.log(findMyKeys(randomStuff));
// Should print 4
// should print -1 if no keys in array
