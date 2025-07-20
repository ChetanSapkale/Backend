import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import SignUp from '../Pages/SignUp'
import Blogs from '../Components/Blogs'
import CreateBlog from '../Pages/CreateBlog'
import Login from '../Pages/Login'
import DetailBlog from '../Pages/DetailBlog'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/createblog' element={<CreateBlog />}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/detailblog/:id' element={<DetailBlog/>}></Route>
    </Routes>
  )
}

export default AllRoutes
