import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncLoginUser } from '../store/actions/userActions'
const Login = () => {
    const navigate = useNavigate()
    const { register, reset, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const LoginHandler = (user) => {
        console.log(user)
        dispatch(asyncLoginUser(user))
    }

    return (
        <div className='bg-black h-screen flex items-center justify-center'>
            <div className='flex absolute top-50'>

                <form onSubmit={handleSubmit(LoginHandler)} className='flex flex-col gap-4 pt-3 w-1/2 items-start'>
                    <input type="email"
                        {...register("email")}
                        className='outline-0 text-2xl border-b-2 p-2'
                        placeholder='Johndoe@gmail.com' />
                    <input type="password"
                        {...register("password")}
                        className='outline-0 text-2xl border-b-2 p-2'
                        placeholder='******' />

                    <button
                        onClick={() => { navigate('/products') }}
                        className='text-white ml-1 w-full transition hover:bg-gray-600 p-3 rounded bg-gray-500  '>Login User</button>
                    <div className='flex gap-1 w-[20vw]'>
                        <p>Dont Have an account?</p>
                        <Link to='/register' className='font-thin text-blue-400'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login