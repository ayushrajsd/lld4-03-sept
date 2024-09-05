// fs module - file system module

const fs = require("fs"); // commonJS
// import fs from 'fs'; // ES6

// fs.readFile("file1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// // fs.readFileSync("file1.txt", "utf8");

// const content = "Hello from Node.js";
// fs.writeFile("example.txt", content, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File created successfully");
// });

// fs.rename("example.txt", "example2.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File renamed successfully");
// });

// fs.stat("file1.txt", (err, stats) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("file size", stats.size);
//   console.log("is directory", stats.isDirectory());
// });

// const directoryName = "new-directory";

// fs.mkdir(directoryName, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Directory created successfully");
// });

// fs.rmdir(directoryName, { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Directory deleted successfully");
// });

// path module - path module provides utilities for working with file and directory paths
/**
 *
 * FIle path format differe in windows and linux
 * for windows - C:\Users\user\file.txt
 * for linux/ POSIX - /home/user/file.txt
 */

// const path = require("path");

// const fullpath = path.join("folder", "subFolder", "file.txt");
// console.log(fullpath);

// const absolutePath = path.resolve("folder", "subFolder", "file.txt");
// console.log(absolutePath);

// const fileName = path.basename("./dir/file.txt");
// console.log(fileName);

// const dirName = path.dirname("./dir/file.txt");

// const extName = path.extname("./dir/file.txt");
// console.log(extName);

/**
 * relative paths
 * ./ - current directory
 * ../ - parent directory
 * ./../../ - parent of parent directory
 */
// const normalizedPath = path.normalize("/path/to/../file.txt");
// console.log(normalizedPath); // /path/file.txt

// const relativePath = path.relative("/path/from", "/path/to");
// console.log(relativePath);

const sourceFilePath = "./dir/file1.txt";
const destinationFilePath = "./destination-file.txt";

// create a readable stream from source file
const readStream = fs.createReadStream(sourceFilePath);

// create a writable stream to destination file
const writeStream = fs.createWriteStream(destinationFilePath);

// pipe the read stream to write stream
readStream.pipe(writeStream);

// handle any errors that may occur during thecopy process
readStream.on("error", (err) => {
  console.error(`Error reading the file: ${err.message}`);
});

writeStream.on("error", (err) => {
  console.error(`Error writing the file: ${err.message}`);
});

writeStream.on("finish", () => {
  console.log("File copied successfully");
});
