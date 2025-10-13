import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUpdateUser } from '../store/actions/userActions'

const Cart = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer.users)
    const products = useSelector((state) => state.productReducer.products)
    console.log(users);

    const IncreaseQuantityHanddler = (index, product) => {
        const copyUser = { ...users, cart: [...users.cart] }

        copyUser.cart[index] = {
            ...copyUser.cart[index],
            quantity: copyUser.cart[index].quantity + 1
        }
        dispatch(asyncUpdateUser(copyUser.id, copyUser))
        console.log(copyUser);

    }
    const decreaseQuantityHanddler = (index, product) => {
        const copyUser = { ...users, cart: [...users.cart] }

        if (users.cart[index].quantity > 1) {
            copyUser.cart[index] = {
                ...copyUser.cart[index],
                quantity: copyUser.cart[index].quantity - 1
            }
        }
        else {
            copyUser.cart.splice(index, 1)
        }

        dispatch(asyncUpdateUser(copyUser.id, copyUser))


    }

    const cartItem = users.cart.map((c, index) => {
        console.log(c);
        return (
            <li key={c.product.id} className='mb-10 flex justify-between items-center bg-gray-800 p-2 rounded'>
                <img className='mr-10 w-[7vmax] h-[7vmax] object-cover' src={c.product.image} alt="" />
                <span>{c.product.title}
                </span>
                <span className='text-green-600'>{c.product.price}</span>
                <p><button onClick={() => decreaseQuantityHanddler(index, c)} className='text-lg'>-</button>
                    <span className='mx-3 bg-gray-600 p-1 rounded '>{" "}{c.quantity} {" "}</span>
                    <button onClick={() => IncreaseQuantityHanddler(index, c)} className='text-lg'>+</button></p>
            </li>
        )

    })
    return (
        <div className='p-10'>

            <ul>{cartItem}</ul>
        </div>
    )
}

export default Cart 
