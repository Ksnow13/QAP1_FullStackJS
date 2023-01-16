/*
Node.js has a built-in module called HTTP,
which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
To use the HTTP server in node, we need to require the HTTP module. The HTTP module
creates an HTTP server that listens to server ports and gives a response back to the client.
*/

const http = require("http");
const port = 3000;
const port2 = 3030;

const server = http.createServer((request, response) => {
  console.log("Page was entered on port 3000");
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(
    "Welcome, here is a simple example of using the node http module to serve text."
  );
});

//--------------------------------------------------------

serveHtml(
  "<html><body><h1>Node.js HTTP Module</h1><hr><h3>Welcome,</h3><p>here is a simple example of using the node http module to serve text in HTML elements.</p><p>To learn more about core node modules visit this <a href='https://towardsdev.com/core-node-modules-you-must-know-as-a-nodejs-developer-181df49d558'>article by Kisan Tamang</a></p></body></html>",
  port2
);

function serveHtml(theHtml, port2) {
  http
    .createServer(function (req, res) {
      console.log(`Page was entered on port ${port2}`);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(theHtml);
      res.end();
    })
    .listen(port2);
}

//---------------------------------------------------------

server.listen(port, port2, () =>
  console.log(
    `The server started on port ${port} and port ${port2} ` +
      "press Ctrl-C to terminate...."
  )
);
