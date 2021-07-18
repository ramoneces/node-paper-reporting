var renderer = require("./renderer");
var express = require("express");

var app = express();
var host = "http://localhost";
var port = 3000;

app.get("/test", (req, res, next) => {
  res.json({
    greetings: [
      "hola",
      "buenas",
      "¿qué hay?",
      "¿qué tal andas?",
      "¿qué marcha me llevas?",
    ],
  });
});
console.log(`Endpoint GET: ${host}:${port}/test`);

app.get("/line", (req, res, next) => {
  res.writeHead(200, { "Content-Type": "image/svg+xml" });
  res.end(renderer.renderLine());
});
console.log(`Endpoint GET: ${host}:${port}/line`);

app.listen(port, () => {
  console.log(`Server running at ${host}:${port}/`);
});
