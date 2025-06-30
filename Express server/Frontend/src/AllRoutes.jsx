import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/Home'
import Product from '../src/Product'
import AddProduct from '../src/AddProduct'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
    </Routes>
  )
}

export default AllRoutes
