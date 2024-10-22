// // console.log(global);
// // global is an object that contains all the global variables
// console.log(process);
const fs = require("fs");
const path = require("path");

// const content = Math.random().toString(36).repeat(10000000);// a-z0-9

// fs.writeFileSync("big.file", content);

const http = require("http");
const server = http.createServer();
// server.on("request", (req, res) => {
//   fs.readFile("big.file", (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       res.end(data);
//     }
//   });
// });
server.on("request", (req, res) => {
  const src = fs.createReadStream("big.file");
  src.pipe(res);
});

// const filePath = path.join(__dirname, "big.file");
// console.log(filePath);
// const readableStream = fs.createReadStream(filePath);
// const writableStream = fs.createWriteStream("copy.file");
// readableStream.on("data", (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data.`);
//   writableStream.write(chunk);
// });
// readableStream.pipe(writableStream);
// readableStream.on("error", (err) => {
//   console.log("error", err);
// });
// writableStream.on("error", (err) => {
//   console.log("error", err);
// });
// readableStream.on("end", () => {
//   console.log("end of file");
//   writableStream.end();
//   console.log("file copied");
// });

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
