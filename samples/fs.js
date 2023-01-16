/*
The Node.js file system module allows you to work with the file system on your computer.
with this module you can do things such as:
1. Read files
2. Create files
3. Update files
4. Delete files
5. Rename files
*/

const fs = require("fs");
var http = require("http");

const port = 3000;
const port2 = 3030;

serveFile("fs.html", port);

function serveFile(filename, port) {
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

//----------------------------------------------------------------------------

serveJson("users.json", port2);

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
