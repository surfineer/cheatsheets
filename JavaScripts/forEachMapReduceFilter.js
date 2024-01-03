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

let singleArray = [34, 234, 45, 12, 23, 5678, 1, -45, 0];

let multiArray = [
  [123, 345, 456, 678],
  [23, 56, 78, 12],
  [1, 8, 5],
  [3456, 899, 23, 1],
];

// ITERATOR GENERAL FUNCTION CONSTRUCT

function arrayIteration(item, index, array) {
    return 'do something';
}

function stringConversion(item, index, array){
    return item.toString();
}
// callback function for .reduce()
function sumedUp(accumulator, item, index, array) {
  return accumulator + item;
}

// ITERATOR METHODS

// forEach() - logs array with index and capitalized animal names
animals.forEach((item, index, array) => {
  array[index] = item[0].toUpperCase() + item.slice(1);
  console.log(`${index}: ${array[index]}`);
});

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

// filter() - returns array with values that are true from function condition
// 1
let divisibleByFive = singleArray.filter(function (item, index, array) {
    return item % 5 === 0;
});
console.log(divisibleByFive);
// 2

// reduce() - additional parameter 'sumThusFar' (see sumedUp function)
// 1
let totaled = singleArray.reduce(sumedUp, 10); // 10 is a 2nd parameter to add to the total sum (acts as a starting point for the counting up)
console.log(totaled);
// 2
let totaled2 = multiArray.map(
    (element) => element.reduce(sumedUp)
);
console.log(totaled2);
// 3 reduce() works on strings too!
let animalsReduced = animals.reduce((accumulator, currentElement) => {
  return accumulator + currentElement[0];
}, "");
console.log(animalsReduced);