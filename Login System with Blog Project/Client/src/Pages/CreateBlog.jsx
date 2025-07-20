import React, { useState } from "react";
import axios from "axios";
import "../Styles/CreateBlog.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:7070/blog/createBlog",
        { title, content },
        { withCredentials: true }
      );
      console.log(res);
      alert("Blog created successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to create blog.");
    }
  };

  return (
    <div className="create-blog-container">
      <form className="create-blog-form" onSubmit={handleSubmit}>
        <h1>Create Blog</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          rows="8"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
