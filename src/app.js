// Starting point of our application. Main core JS file

const express = require("express");

const app = express();

// A route can have multiple route handlers.
app.use(
  "/user",
  [
    (req, res, next) => {
      // Route Handler
      console.log("Handling the route user!!");
      // res.send("Response!!");
      next();
    },
    (req, res, next) => {
      // Route Handler 2
      console.log("Handling the route user 2 ");
      next();
      // res.send("2nd Response!!");
    },
  ],
  (req, res, next) => {
    console.log("Handling the route user 3");
    next();
    // res.send("3rd Response");
  },
  (req, res, next) => {
    console.log("Handling the route user 4");
    res.send("4th Response");
  }
);
// We can also send these callback functions in arrays by enclosing them inside []
// app.use("/route", [RH1, RH2, RH3], RH4, RH5 )
// app.use("/route", [RH1, RH2, RH3, RH4, RH5] )
// app.use("/route", RH1, RH2, [RH3], RH4, RH5 )

// Below callback function will only be called when our server is up an runnung(successfully running).
app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777..");
});
