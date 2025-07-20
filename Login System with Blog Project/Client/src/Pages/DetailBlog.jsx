import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "../Styles/DetailBlog.css";

const DetailBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const getBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:7070/blog/getBlog/${id}`, {
        withCredentials: true,
      });
      setBlog(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className="detail-blog-container">
      <h1 className="detail-blog-title">Blog Details</h1>
      <Card className="blog-card">
        <Card.Img variant="top" src={blog.blogImage} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailBlog;
