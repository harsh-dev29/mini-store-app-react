import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncDeleteProduct, asyncUpdateProduct } from '../../store/actions/productActions'

const ProductDetails = () => {
    const { id } = useParams()
    const { productReducer: { products }, userReducer: { users } } = useSelector(state => state)
    const product = products?.find(product => product.id == id)

    // from createproduct component
    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            image: product?.image,
            title: product?.title,
            price: product?.price,
            description: product?.description,
            category: product?.category,
        }
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const updateProductHanddler = (product) => {
        dispatch(asyncUpdateProduct(id, product))
    }

    const DeleteHandler = () => {
        dispatch(asyncDeleteProduct(id))
        navigate("/products")
    }

    return product ? (
        <>
            <div className='w-full font-mono h-[91vh] p-10 flex bg-black'>
                <img className='w-1/2 h-full object-cover ' src={product.image} alt="" />
                <div className='px-3 w-1/2 h-1/2 '>
                    <h1 className='text-5xl font-thin '>{product.title}</h1>
                    <h2 className='text-3xl text-green-500 mb-5'>${product.price}</h2>
                    <p className='mb-5'>{product.description}</p>
                    <div>
                        <button >Add to cart</button>
                    </div>
                </div>
            </div>
            <hr />
            {users && users?.isAdmin && <div>

                <div className=' bg-black flex h-[80vh]  justify-center'  >
                    <div className='flex absolute'>
                        <form onSubmit={handleSubmit(updateProductHanddler)} className='flex flex-col mt-5 gap-4 pt-3 w-1/2 items-start'>
                            <input type="url"
                                {...register("image")}
                                className='outline-0 text-2xl border-b-2 p-2'
                                placeholder='Image Url' />

                            <input type="text"
                                {...register("title")}
                                className='outline-0 text-2xl border-b-2 p-2'
                                placeholder='Title' />
                            <input type="number"
                                {...register("price")}
                                className='outline-0 text-2xl border-b-2 p-2'
                                placeholder='0.00' />
                            <textarea
                                {...register("description")}
                                className='outline-0 text-2xl border-b-2 p-2'
                                placeholder='Enter description here.....' />
                            <input type="text"
                                {...register("category")}
                                className='outline-0 text-2xl border-b-2 p-2'
                                placeholder='Category' />

                            <div className='flex  gap-5'><button
                                className='text-white w-[10rem] ml-1  transition hover:bg-gray-600 p-3 rounded bg-gray-500  hover:scale-108'>Update Product</button>
                                {/* <div className='flex gap-1 w-[20vw]'>
                        <p>Already Have an account?</p>
                        <Link to='/login' className='font-thin text-blue-400'>Login</Link>
                    </div> */}
                                <button type='buttton' onClick={DeleteHandler} className='text-white w-[10rem] ml-1 hover:scale-108 transition hover:bg-red-600  p-3  rounded bg-red-400  '>Delete product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            }

        </>
    ) : "Loading...."
}

export default ProductDetails