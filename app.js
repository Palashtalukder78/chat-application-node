//External Error
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//Internam Error
const {
  notfoundHandler,
  errorHandler,
} = require("./middlewares/common/errorhandler");

const app = express();
dotenv.config();

//database-connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("Database connection successfully"))
  .catch((err) => console.log(err));

//Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup

//404 not found handler
app.use(notfoundHandler);
//common error Handler
app.use(errorHandler);

//app listening
app.listen(process.env.PORT, () => {
  console.log(`app listening port ${process.env.PORT}`);
});
