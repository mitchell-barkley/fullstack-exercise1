const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 1100;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Node Exercise - Setting up a Node Server</h1>');
});
console.log("Server is running at http://${hostname}:${port}/");
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});