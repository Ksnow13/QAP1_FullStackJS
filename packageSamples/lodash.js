/*
Kyle Snow
Keyin Collage
Jan 14 2023
*/

/*
Lodash is a JavaScript library that works on the top of underscore.js. 
It helps in working with arrays, strings, objects, numbers, etc. It provides 
us with various inbuilt functions and uses a functional programming approach 
which makes coding in JavaScript easier to understand because instead of writing 
repetitive functions, tasks can be accomplished with a single line of code. 
It also makes it easier to work with objects in JavaScript if they require 
a lot of manipulation to be done upon them.
*/

// syntax for including the lodash package
const _ = require("lodash");

// setting random number
const randomNumber = _.random(0, 100);

// making array
const listOfNames = ["Kyle", "Ken", "Tyler", "Sarah", "Julia", "Kate"];

// using lodash to gather first and last item in array
const firstNameInList = _.first(listOfNames);
const lastNameInList = _.last(listOfNames);

// chunking the array
const listChunked = _.chunk(listOfNames, 2);

// dropping a number of items in the array
const listDropped = _.drop(listOfNames, 3);

// creating array of cars inside a array
const carsInArray = [
  { id: 1, brand: "BMW", model: "135i", year: "2012" },
  { id: 2, brand: "Ford", model: "F-150", year: "2019" },
  { id: 3, brand: "VW", model: "Golf GTI", year: "2006" },
];

// giving the arrays keys.... by brand
const keyedArray = _.keyBy(carsInArray, "brand");

// logging the info to the console
console.log();
console.log("Lodash NPM Package");
console.log("Here are some simple examples of using the lodash package");
console.log();
console.log(
  "By using .random(#, #) we can easily get a random number from any range you want. "
);
console.log(
  `For eample: if we say, const randomNumber = _.random(0, 100); we get ${randomNumber} `
);
console.log();
console.log("You can also do many thing with arrays with lodash");
console.log(`Here is an array:`);
console.log(listOfNames);
console.log();
console.log(
  `by using .first() we can get the first item in the array: ${firstNameInList}`
);
console.log(
  `by using .last() we can get the last item in the array: ${lastNameInList}`
);
console.log();
console.log(
  `by using .chunk(arrayName, #) we can break the array in to small chunks:`
);
console.log(listChunked);
console.log();
console.log(
  "by using .drop(arrayName, #) we can drop a number of elements in an array:"
);
console.log(
  "If i say, var listDropped = _.drop(arrayName, 3); the array will like like this:"
);
console.log(listDropped);
console.log();
console.log(
  "Another Great thing you can do with lodash is give keys to items in an array"
);
console.log("For example, here is array of cars");
console.log(carsInArray);
console.log(
  "By saying, const keyedArray = _.keyBy(arrayName, 'brand'); the array will now be keyed by brand name."
);
console.log(keyedArray);
