import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../src/Product.css';

const Product = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () =>{
    try {
      const res = await axios.get('http://localhost:3000/product')
      console.log(res.data.products)
      setProducts(res.data.products)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-container">
    <h1>All Products</h1>
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <h4>Category: {product.category}</h4>
          <p className="price">Price: ${product.price}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Product
