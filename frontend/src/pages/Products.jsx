import React, { lazy, Suspense, useEffect, useState } from 'react'
import axios from '../api/AxiosConfig';
import InfiniteScroll from 'react-infinite-scroll-component';
const ProductTemplate = lazy(() => import('../components/ProductTemplate'))
const Products = () => {

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



    // const renderProducts = products.map(product => <ProductTemplate key={product.id} product={product} />)


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
                    {products.map(product => (
                        <Suspense fallback={
                            <h1
                                className='text-center text-5xl text-green-800'>
                                LOADING.......
                            </h1>}>

                            <ProductTemplate key={product.id} product={product} />
                        </Suspense>
                    ))}


                </div>

            </InfiniteScroll>
        </div>
    )
}

export default Products