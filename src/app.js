// Starting point of our application. Main core JS file

const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Namaste Sarthak");
});

app.use("/hello", (req, res) => {
  res.send("Hello, hello, hello!");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

// Below callback function will only be called when our server is up an runnung(successfully running).
app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777..");
});
