const express = require("express");

const app = express();
require("dotenv").config(); // load env variables into process.env

/**
 * to read from env file, we use a package called
 * dotenv
 * what it does is, it reads the .env file and populates the process.env object
 */

const connectDB = require("./config/db");
/**
 * diff between import and require
 * import is ES6 syntax
 * require is commonJS syntax
 * require can be conditional. import cannot be conditional
 * import happens at the beginning of the file
 * require can be used anywhere in the file
 * require can be conditionally loaded
 */

connectDB();

/**
 * routes
 */
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRouter");
const theatreRouter = require("./routes/theatreRouter");

app.use(express.json());

/**
 * routes
 */
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/theatres", theatreRouter);
app.use("/api/shows", require("./routes/showRouter"));

app.listen(8082, () => {
  console.log("Server started at port 8082");
});
