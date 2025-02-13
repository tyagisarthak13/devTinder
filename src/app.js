// Starting point of our application. Main core JS file

const express = require("express");

const app = express();

// Express takes and matches the route by going through the middlewares one after the other till it sends the response back.
// The only job of express is to take the request and give the response ASAP, and it goes in order.
app.use("/", (req, res, next) => {
  // res.send("Handling /route");
  next();
});

app.use("/user", (req, res, next) => {
  console.log("Handling the route user!!");
  // res.send("Response!!");
  next();
});

// These also works exactly same as calling one route handle inside another
app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user!!");
    // res.send("Response 2!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user");
    res.send("Response Received!!!");
  }
);

// Below callback function will only be called when our server is up an runnung(successfully running).
app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777..");
});
