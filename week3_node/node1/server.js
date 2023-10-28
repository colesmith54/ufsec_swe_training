// nodejs runs on a server, not in a browser
// the console is now the terminal
// console.log("hello world");

// global object instead of window object
// console.log(global);

// has common core modules instead of es6 modules
const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide } = require("./math.js");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

console.log(divide(1, 2));
