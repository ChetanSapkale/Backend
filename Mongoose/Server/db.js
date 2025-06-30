const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/userDatabase");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
});

const UserModel = mongoose.model("userData", userSchema);
module.exports = { connection, UserModel };