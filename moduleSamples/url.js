/*
Kyle Snow
Keyin Collage
Jan 14 2023
*/

/*
The URL module can be used to parse URLs,
module splits up a web address into readable parts.
with this you can Parse an address with the url.parse() method,
and it will return a URL object with each part of the address as properties.
 */

// syntax for including url module
var url = require("url");

// creating a url address
var adr = "http://localhost:3040/keyincollage.htm?year=2023&month=january";

var q = url.parse(adr, true);

// getting host name from url
var host = q.host;

// getting path name from url
var pathName = q.pathname;

// getting searches from url
var search = q.search;

// getting query from url
var qdata = q.query;

// getting dates from url
urlYear = qdata.year;
urlMonth = qdata.month;

// logging info to console

console.log();
console.log(
  "Here we will split a web address into readable parts, using the node url module."
);
console.log(`The url provided: ${adr}`);
console.log();
console.log(`Host: ${host}`);
console.log(`path name: ${pathName}`);
console.log(`Search: : ${search}`);
console.log(`Year: ${urlYear}`);
console.log(`Month: ${urlMonth}`);
