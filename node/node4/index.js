const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// init event emitter
const myEmitter = new MyEmitter();

// add listener
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
    myEmitter.emit("log", "Log event emitted");
}, 2000);
