const fs = require('fs');

// Setup server

const http = require('http');
const express = require('express');
const app = express();
var server = http.createServer(app);
server.listen(8080);

// Server pages

app.get('/', (req, res) => {
  res.write(fs.readFileSync("client/index.html"));
  res.end();
})

app.get('/script.js', (req, res) => {
  res.write(fs.readFileSync("client/script.js"));
  res.end();
})

app.get('/style.css', (req, res) => {
  res.write(fs.readFileSync("client/style.css"));
  res.end();
})

app.get("/saveData", (req, res) => {
  data = JSON.parse(fs.readFileSync("data.json"));
  data.data.push(req.query);
  fs.writeFileSync("data.json", JSON.stringify(data));
});