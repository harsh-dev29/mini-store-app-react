import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { asyncUpdateUser } from '../store/actions/userActions';
import axios from '../api/AxiosConfig';
import InfiniteScroll from 'react-infinite-scroll-component';
const Products = () => {
    const dispatch = useDispatch()

    const users = useSelector((state) => state.userReducer.users)
    // const products = useSelector((state) => state.productReducer.products)

    const [products, setproducts] = useState([])
    const [hasMore, sethasMore] = useState(true)

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(`/products?_limit=6&_start=${products.length}`)
            if (!data.length == 0) {
                sethasMore(true)
                setproducts([...products, ...data])
            } else {
                sethasMore(false)
            }

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

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


    const renderProducts = products.map(product => {
        return <div className='w-[25%]  p-3 mr-3 mb-3 border shadow' key={product.id}>
            <img className='w-full h-[30vh] object-cover' src={product.image} alt="" />
            <h1>{product.title}</h1>
            <small>{product.description.slice(0, 100)}</small>
            <div className='mt-3 flex justify-around p-3 items-center'>
                <p>{product.price}</p>
                <button onClick={() => addToCartHanddler(product)} className='border rounded-2xl p-2 hover:cursor-pointer hover:bg-gray-900'>Add to cart</button>
            </div>
            <Link className=' block w-full text-center' to={`/product/${product.id}`}>More Info</Link>
        </div>
    })


    return (
        <div className=' flex p-10 bg-black'>
            <InfiniteScroll

                dataLength={products.length}
                hasMore={hasMore}
                next={fetchProducts}
                loader={<h4>Loading......</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! you have seen it all </b>
                    </p>
                }
            >
                <div className="flex flex-wrap justify-center">
                    <Suspense fallback={<h1 className='text-center text-5xl text-green-800'>LOADING.......</h1>}>

                        {renderProducts}
                    </Suspense>
                </div>

            </InfiniteScroll>
        </div>
    )
}

export default Products