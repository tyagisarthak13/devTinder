// Starting point of our application. Main core JS file

const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  try {
    // Logic of DB call and get user data
    throw new Error("dvbzhjf");
    res.send("User data sent");
  } catch (err) {
    res.status(500).send("Some error contact support team");
  }
});
// Handle errors using try catch block or as shown below

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error
    res.status(500).send("Something went wrong");
  }
});

// Below callback function will only be called when our server is up an runnung(successfully running).
app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777..");
});
