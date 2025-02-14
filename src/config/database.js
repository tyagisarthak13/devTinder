const mongoose = require("mongoose");

//! Below we have connected to the cluster
// mongoose.connect(
//   "mongodb+srv://sarthaktyagi797:cmFSmu23wlr8Jugi@namastenode.7pi5i.mongodb.net/"
// ); //! mongoose.connect returns a promise, so we can use a better way

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sarthaktyagi797:cmFSmu23wlr8Jugi@namastenode.7pi5i.mongodb.net/devTinder"
  ); //! after cluster link(connection URL) write /name-of-database to refer to the database.
};

module.exports = connectDB;
