import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid'
import { asyncCreateProduct } from '../../store/actions/productActions';

const CreateProduct = () => {
    const { register, reset, handleSubmit } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const CreateProductHanddler = (product) => {
        product.id = nanoid()
        console.log(product);
        dispatch(asyncCreateProduct(product))
        navigate("/products")
    }

    return (
        <div className=' bg-black flex h-screen  justify-center'  >
            <div className='flex absolute top-50'>
                <form onSubmit={handleSubmit(CreateProductHanddler)} className='flex flex-col mt-5 gap-4 pt-3 w-1/2 items-start'>
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
                    <button
                        className='text-white ml-1  transition hover:bg-gray-600 p-3 rounded bg-gray-500  '>Create Product</button>
                    {/* <div className='flex gap-1 w-[20vw]'>
                        <p>Already Have an account?</p>
                        <Link to='/login' className='font-thin text-blue-400'>Login</Link>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default CreateProduct