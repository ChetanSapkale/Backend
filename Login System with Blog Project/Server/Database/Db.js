const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/BlogsData");

module.exports = connection;