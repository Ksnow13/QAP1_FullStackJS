/*
Kyle Snow
Keyin Collage
Jan 14 2023
*/

/*
The moment module is used for parsing, validating, manipulating, and displaying dates 
and times in JavaScript. Feature of moment module: It is easy to get started and
easy to use. It is widely used and popular for formatting date and time.
*/

// syntax for including the moment package
const moment = require("moment");

// setting now as the cureent date
const now = moment();

// formatting the dates
var longFormatDate = now.format("YYYY-MM-DD");
var shortFormatDate = now.format("DD/MM/YY");
var fullFormatDate = now.format("dddd, MMMM Do, YYYY");

// finding out when the day started and when it will finish
var startOfDay = now.startOf("day").fromNow();
var endofDay = now.endOf("day").fromNow();

// finding out the days since node.js was first released
var nodeRelaseDate = moment("2009-05-27");
var daysNodeRelease = now.diff(nodeRelaseDate, "days");

// logging info to the console
console.log();
console.log("Moment NPM Package");
console.log();
console.log(
  `When you log a moment to the console it looks like this by default: ${now} (This is the current Date/Time).`
);
console.log();
console.log("Using the moment package we can format date in many ways");
console.log();
console.log(`formatted to (YYYY-MM-DD): ${longFormatDate}`);
console.log(`formatted to (DD/MM/YY): ${shortFormatDate}`);
console.log(`formatted to full length: ${fullFormatDate}`);
console.log();
console.log("We can add hours, minutes and seconds");
console.log();
console.log("Dates with time:");
console.log(` ${now.format("YYYY-MM-DD  HH:mm:ss a")}`);
console.log(` ${now.format("DD/MM/YY  HH:mm:ss a")}`);
console.log(` ${now.format("dddd, MMMM Do, YYYY  H:mm:ss a")}`);
console.log();
console.log("We can also work with relative time");
console.log();
console.log("For example, When did the day start ?");
console.log(` Answer: the day started ${startOfDay} `);
console.log();
console.log("When does the day end ?");
console.log(` Answer: the day ends ${endofDay} `);
console.log();
console.log("we can do simple math on these dates as well");
console.log();
console.log(`Current date plus 10 years: ${now.add(10, "y")}`);
console.log(`Current date subtract 100 years: ${now.subtract(100, "y")}`);
console.log();
console.log(
  `Node.js was first released on ${nodeRelaseDate.format(
    "MMMM DD YYYY"
  )}, and ${daysNodeRelease} days has passed since then.`
);
