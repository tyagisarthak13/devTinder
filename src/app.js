// Starting point of our application. Main core JS file

const express = require("express");
const connectDB = require("./config/database");
const app = express(); //creating an instance of express js application
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

//! NOTE - Before you start your application your database should be co nnected and that is why we have done app.listen inside
connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777..");
    });
  })
  .catch((err) => {
    console.error("Database can not be connected!!");
  });
