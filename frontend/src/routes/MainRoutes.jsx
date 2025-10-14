import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UnAuthWrapper from './UnAuthWrapper'

const Cart = lazy(() => import('../pages/Cart'))
const AuthWrapper = lazy(() => import('./AuthWrapper'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const ProductDetails = lazy(() => import('../pages/admin/ProductDetails'))
const CreateProduct = lazy(() => import('../pages/admin/CreateProduct'))
const UserProfile = lazy(() => import('../pages/users/UserProfile'))
const Register = lazy(() => import('../pages/Register'))
const Login = lazy(() => import('./../pages/Login'))
const Products = lazy(() => import('./../pages/Products'))



const MainRoutes = () => {

    const { users } = useSelector((state) => state.userReducer)


    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/login" element={
                <UnAuthWrapper>
                    <Login />
                </UnAuthWrapper>
            } />
            <Route path="/register" element={<Register />} />

            <Route path="/admin/create-product" element={<AuthWrapper><CreateProduct /></AuthWrapper>} />
            <Route path="/admin/user-profile" element={<AuthWrapper><UserProfile /></AuthWrapper>} />

            <Route path='/cart' element={<AuthWrapper><Cart /></AuthWrapper>} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default MainRoutes