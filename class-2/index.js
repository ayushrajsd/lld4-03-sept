// import the express module
const express = require("express");

// create an express application
const app = express();
app.use(express.json());
// app.use(express.static("public"));

const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // call the next middleware in the chain
};

// app.use(loggerMiddleware);

// define a route
app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.get("/about", (req, res) => {
  res.send("this is the about page");
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("received a post request");
});

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
];

// POST endpoint to create a new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  const userId = users.length + 1;
  newUser.id = userId;

  // add the new user to the list
  users.push(newUser);
  res.status(201).json({ message: "User created successfully", user: newUser });
});

app.get("/users", (req, res) => {
  console.log("get user request");
  res.status(200).json({ data: users });
});

app.get("/users/:id", (req, res) => {
  console.log("get particular user request");
  const userId = req.params.id;
  const user = users.find((user) => user.id == userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ data: user });
});

/**
 * Route paramters: /users/3  => /users/:userId
 * delete a user with id 3 => /users/3 => /users/:userId
 */

// delete endpoint to delete a user by id
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  console.log("user id", userId);

  const userIndex = users.findIndex((user) => user.id == userId);
  if (userIndex == -1) {
    return res.status(404).json({ message: "User not found" });
  }
  // remove the user from the array
  users.splice(userIndex, 1); // [1, 2, 3, 4, 5] => [1, 2, 4, 5]
  res.json({ message: "user deleted successfully" });
});

app.get("/special", loggerMiddleware, (req, res) => {
  res.send("special page");
});

/**
 * Query parameters: /users?name=John
 */
app.get("/search", (req, res) => {
  // access query parameters using req.query
  const query = req.query;
  console.log("Query parameters:", query);
  res.send(`Your parameters are: ${JSON.stringify(query)}`);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
