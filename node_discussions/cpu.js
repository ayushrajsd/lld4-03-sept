const express = require("express");
const { fork } = require("child_process");
const path = require("path");

const app = express();

// function calculateFibonacci(number) {
//   if (number <= 1) {
//     return number;
//   }
//   return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
// }

app.use(express.static("public"));

app.get("/fib", (req, res) => {
  const { number, requestNumber } = req.query;
  console.log("handler function ran for req", requestNumber);
  if (!number || isNaN(number) || number < 0) {
    return res.status(400).send("Invalid number");
  }
  // const answer = calculateFibonacci(number);
  // create a child process
  const fiboRes = fork(path.join(__dirname, "fiboWorker.js"));
  fiboRes.send({ number: parseInt(number, 10) });
  // receiving data from child process
  fiboRes.on("message", (answer) => {
    res.status(200).json({
      status: "success",
      message: answer,
      requestNumber,
    });
    fiboRes.kill();
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
