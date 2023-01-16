/*
The URL module can be used to parse URLs,
module splits up a web address into readable parts.
with this you can Parse an address with the url.parse() method,
and it will return a URL object with each part of the address as properties.
 */

var url = require("url");

var adr = "http://localhost:3040/keyincollage.htm?year=2023&month=january";

var q = url.parse(adr, true);

var host = q.host;

var pathName = q.pathname;

var search = q.search;

var qdata = q.query;

urlYear = qdata.year;
urlMonth = qdata.month;

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
