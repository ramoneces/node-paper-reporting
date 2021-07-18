var http = require("http");
var renderer = require("./renderer");

http
  .createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: image/svg+xml
    response.writeHead(200, { "Content-Type": "image/svg+xml" });

    // Send the response body as "Hello World"
    response.end(renderer.renderLine());
  })
  .listen(8081);

// Console will print the message
console.log("Server running at http://127.0.0.1:8081/");
