const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  blogImg: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1609386464554-31f6618a86b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  content: {
    type: String,
    required: true,
  },
});

const BlogModel = mongoose.model("Blogs", blogSchema);

module.exports = BlogModel;
