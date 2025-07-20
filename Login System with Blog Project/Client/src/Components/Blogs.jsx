import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../Styles/Blogs.css";

const Blogs = () => {
  const [blog, setBlog] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:7070/blog/getAllBlogs", {
        withCredentials: true,
      });
      setBlog(res.data.allBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:7070/blog/deleteBlog/${id}`, {
        withCredentials: true
      });
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Blogs</h1>
      {!(blog.length > 0) ? (
        <h2 className="blogs-empty">No Blogs Found</h2>
      ) : (
        <div className="blogs-grid">
          {blog.map((el) => (
            <Card className="blog-card" key={el._id}>
              <Link to={`/blog/${el._id}`}>
                <Card.Img variant="top" src={el.blogImg} alt={el.title} />
              </Link>
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Button
                  variant="danger"
                  onClick={() => deleteBlog(el._id)}
                  className="me-2"
                >
                  Delete
                </Button>
                <Button variant="info">Edit</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;

