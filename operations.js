let a = 10, b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

console.log("Hello World from Node.js");

const http = require('node:http');
http.createServer((req, res) => {
res.end("Welcome to Node.js Server");
}).listen(3000);
console.log("Server running on port 3000");

const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Enter your name: ", (name) => {
console.log("Hello " + name);
rl.close();
});