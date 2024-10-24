const fs = require("fs");

console.log("start");

setTimeout(() => {
  console.log("timeout 1");
}, 100);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

setImmediate(() => {
  console.log("immediate");
});

process.nextTick(() => {
  console.log("next tick");
});

Promise.resolve().then(() => {
  console.log("promise");
});

fs.readFile(__filename, () => {
  console.log("File Read");
});

console.log("end");

/**
 *
 * Micro tasks - process.nextTick, Promises
 * Macro tasks - setTimeout, setImmediate, I/O operations
 */

const cluster = require("cluster");
const os = require("os");
const numCpus = os.cpus().length;

if (cluster.master) {
  console.log(`Master process with PID ${process.pid}`);
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
}

/**
 *
 * creating an event emitter class
 * class MyEventEmitter {
 * constructor(){
 * this.events = {};
 *
 * }
 * on(eventName, listener){}
 *
 * emit(eventName, ...args)
 * {}
 */
