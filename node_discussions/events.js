const eventEmitter = require("events");

const myEmitter = new eventEmitter();

// listeners
myEmitter.on("myEvent", (...args) => {
  console.log("there is a new event:", args);
});

myEmitter.on("myEvent", (...args) => {
  console.log("another listener for the new event:", args);
  console.log("-----------------");
});

// emit an event
myEmitter.emit("myEvent");
myEmitter.emit("myEvent", 1, 2);
myEmitter.emit("myEvent", [1, 2, 3]);
