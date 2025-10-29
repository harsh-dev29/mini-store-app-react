import React from 'react'
import { Link } from 'react-router-dom'
import { asyncUpdateUser } from '../store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const ProductTemplate = ({ product }) => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer.users)


    const addToCartHanddler = (product) => {
        const copyUser = { ...users, cart: [...users.cart] }
        const x = copyUser.cart.findIndex((c) => c?.product?.id == product.id)
        console.log(x);
        if (x == -1) {
            copyUser.cart.push({ product, quantity: 1 })
        } else {
            copyUser.cart[x] = { product, quantity: copyUser.cart[x].quantity + 1 }
        }
        dispatch(asyncUpdateUser(copyUser.id, copyUser))

    }
    return (
        <div className='w-[25%]  p-3 mr-3 mb-3 border shadow' key={product.id}>
            <img className='w-full h-[30vh] object-cover' src={product.image} alt="" />
            <h1>{product.title}</h1>
            <small>{product.description.slice(0, 100)}</small>
            <div className='mt-3 flex justify-around p-3 items-center'>
                <p>{product.price}</p>
                <button onClick={() => addToCartHanddler(product)} className='border rounded-2xl p-2 hover:cursor-pointer hover:bg-gray-900'>Add to cart</button>
            </div>
            <Link className=' block w-full text-center' to={`/product/${product.id}`}>More Info</Link>
        </div>
    )
}

export default ProductTemplate