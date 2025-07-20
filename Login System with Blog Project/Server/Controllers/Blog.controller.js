const express = require("express");
const checkIsAuth = require("../Middleware/Auth");
const BlogModel = require("../Models/Blog.model");

const blogRouter = express.Router();

blogRouter.post("/createBlog", checkIsAuth, async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).send({ message: "All the fields are required" });
    return;
  }
  try {
    const blog = await BlogModel.create({
      title,
      content,
      userId: req?.user?._id,
    });

    if (!blog) {
      return res.status(400).json({ message: "Blog not created" });
    }

    res.status(200).json({ message: "Blog Created Successfully", blog });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

blogRouter.get("/getAllBlogs", checkIsAuth, async (req, res) => {
  try {
    const allBlogs = await BlogModel.find({ userId: req?.user?._id });

    if (allBlogs.length === 0) {
      return res.status(200).json({ message: "No blogs found", allBlogs: [] });
    }

    res.status(200).json({ message: "Successfully got all blogs", allBlogs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

blogRouter.get("/getBlog/:blogId", checkIsAuth, async (req, res) => {
  try {
    const blog = await BlogModel.findOne({
      _id: req.params.blogId,
      userId: req?.user?._id,
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Successfully got the blog", blog });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong", error });
  }
});

blogRouter.patch("/updateBlog/:blogId", checkIsAuth, async (req, res) => {
  if (req.body.userId) {
    return res
      .status(400)
      .json({ message: "You are not authorized to update userId" });
  }
  try {
    const isBlogExists = await BlogModel.findOne({
      _id: req.params.blogId,
    });

    if (!isBlogExists) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if(isBlogExists?.userId !== req?.user?._id) {
    return res.status(403).json({ message: "You are not authorized to update this blog" });    }
    await BlogModel.findByIdAndUpdate(
      req.params.blogId,
      req.body
    )
    res.status(200).json({ message: "Blog updated successfully" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong", error });
  }
});

blogRouter.delete("/deleteBlog/:blogId", checkIsAuth, async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findOneAndDelete({
      _id: req.params.blogId,
      userId: req?.user?._id,
    });

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong", error });
  }
});

module.exports = blogRouter;
