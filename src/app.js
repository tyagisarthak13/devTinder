// Starting point of our application. Main core JS file

const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User({
    firstName: "Sachin",
    lastName: "Tendulkar",
    emailId: "sachintendulkar@gmail.com",
    password: "sachin@123",
  });
  try {
    await user.save(); //save data to the database
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

//! NOTE - Before you start your application your database should be cpnnected and that is why we have done app.listen inside
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
