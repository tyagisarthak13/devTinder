// Starting point of our application. Main core JS file

const express = require("express");

const app = express();

//! These are called route handlers
//! Order of these routes matters a lot
// app.use("/user", (req, res) => {
//   res.send("HAHAHAHAHAHAHAHA");
// });

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Harry", lastName: "Kane" });
});

//! Dynamic route
app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Harry", lastName: "Kane" });
});

//! Also a dynamic route
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Harry", lastName: "Kane" });
});

// This will only handle GET call to/user
app.get("/user", (req, res) => {
  res.send({ firstName: "Akshay", lastName: "Saini" });
});

// Means that b is optional
app.get("/ab?c", (req, res) => {
  res.send({ firstName: "Cristiano", lastName: "Ronaldo" });
});

//! Can group also, here bc should be optional
// app.get("/a(bc)?d", (req, res) => {
//   res.send({ firstName: "Cristiano", lastName: "Ronaldo" });
// });

// Means that a should be at first and c should be at last, in middle it could be anything
app.use("/ab+c", (req, res) => {
  res.send({ firstName: "James", lastName: "Maddison" });
});

// Means that ab should be at start and cs should at last in between it could be anything
app.use("/ab*cd", (req, res) => {
  res.send({ firstName: "Cristian", lastName: "Romero" });
});

app.post("/user", (req, res) => {
  // saving data to DB
  res.send("Data successfully saved to the database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully!");
});

// This will match all the HTTPmethod API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

// Below callback function will only be called when our server is up an runnung(successfully running).
app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777..");
});
