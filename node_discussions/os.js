const os = require("os");

console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.platform());
console.log(os.arch());
console.log("release", os.release());
console.log(os.networkInterfaces());
