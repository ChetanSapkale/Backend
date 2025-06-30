import React, { useState } from "react";
import "./AddProduct.css";
import axios from "axios";

const AddProduct = () => {

  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, imageUrl, price, category, description } = formData;
    const product = {
      title,
      image: imageUrl,
      price: parseFloat(price),
      category,
      description,
    };
    
    axios.post("http://localhost:3000/addProduct", product)
      .then((response) => {
        console.log("Product added successfully:", response.data);
        setFormData({
          title: "",
          imageUrl: "",
          price: "",
          category: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  }
  
  
  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" required onChange={handleChange} />
        </div>

        <div>
          <label>Image URL:</label>
          <input type="text" name="imageUrl" required onChange={handleChange} />
        </div>

        <div>
          <label>Price:</label>
          <input type="number" name="price" required onChange={handleChange} />
        </div>

        <div>
          <label>Category:</label>
          <select name="category" required onChange={handleChange}>
            <option value="">Select category</option>
            <option value="electronics">men's clothing</option>
            <option value="clothing">jewelery</option>
            <option value="books">electronics</option>
            <option value="home">women's clothing</option>
          </select>
        </div>

        <div>
          <label>Description:</label>
          <textarea name="description" required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
