import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Nav = () => {
    const user = useSelector((state) => state.userReducer.users)

    return (
        <div className='bg-gray-700  text-white flex justify-center items-center gap-x-5 p-5'>
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/products">Products< /NavLink> */}
            {user ? <>
                <NavLink to="/admin/create-product">Create Product</NavLink>
                <NavLink to="/admin/user-profile">Profile</NavLink>
            </> : <>
                <NavLink to="/login">login</NavLink>
            </>}
            {/* <NavLink to="/admin/update-product">Update Product</NavLink> */}


        </div>
    )
}

export default Nav