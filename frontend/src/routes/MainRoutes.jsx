import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import UpdateProduct from '../pages/admin/ProductDetails'
import ProductDetails from '../pages/admin/ProductDetails'
import { useSelector } from 'react-redux'
import UserProfile from '../pages/users/UserProfile'

const MainRoutes = () => {

    const { users } = useSelector((state) => state.userReducer)


    return (
        <Routes>
            <Route path="/" element={users ? <Home /> : ""} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/admin/create-product" element={<CreateProduct />} />
            <Route path="/admin/user-profile" element={<UserProfile
            />} />
        </Routes>
    )
}

export default MainRoutes