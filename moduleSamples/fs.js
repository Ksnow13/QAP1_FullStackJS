/*
Kyle Snow
Keyin Collage
Jan 14 2023
*/

/*
The Node.js file system module allows you to work with the file system on your computer.
with this module you can do things such as:
1. Read files
2. Create files
3. Update files
4. Delete files
5. Rename files
*/

// syntax for including the file system module
const fs = require("fs");

// syntax for including the http module
var http = require("http");

// setting ports
const port = 3000;
const port2 = 3030;

// give the server a port and html file
serveFile("fs.html", port);

// function to create the server
function serveFile(filename, port) {
  console.log();
  console.log("Two Server's were started! ");
  console.log(
    `Server started on port ${port}, visit localhost:3000 to load page.  `
  );
  http
    .createServer(function (req, res) {
      fs.readFile(filename, function (err, data) {
        if (err) console.log(err);
        else {
          console.log("file " + filename + " was served.");
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    })
    .listen(port);
}

// giving the server a .json file and a port
serveJson("users.json", port2);

// function to create the server
function serveJson(jsonfile, port2) {
  console.log(
    `Another server started on port ${port2}, visit localhost:3030 to load page.  ` +
      "press Ctrl-C to terminate...."
  );
  http
    .createServer(function (req, res) {
      fs.readFile(jsonfile, function (err, data) {
        if (err) console.log(err);
        else {
          console.log("json file " + jsonfile + " was served.");
          res.writeHead(200, { "Content-Type": "text/json" });
          res.write(data);
          return res.end();
        }
      });
    })
    .listen(port2);
}
