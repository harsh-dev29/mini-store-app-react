import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'
import { asyncRegisterUser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

const Register = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const RegisterHanlder = (user) => {
        user.id = nanoid()
        user.isAdmin = false
        dispatch(asyncRegisterUser(user))
        navigate('/login')
    }

    return (
        <div className=' bg-black flex h-screen  justify-center'  >
            <div className='flex absolute top-50 right-140'>
                <form onSubmit={handleSubmit(RegisterHanlder)} className='flex flex-col mt-5 gap-4 pt-3 w-1/2 items-start'>
                    <input type="text"
                        {...register("username")}
                        className='outline-0 text-2xl border-b-2 p-2'
                        placeholder='John-doe' />
                    <input type="email"
                        {...register("email")}
                        className='outline-0 text-2xl border-b-2 p-2'
                        placeholder='Johndoe@gmail.com' />
                    <input type="password"
                        {...register("password")}
                        className='outline-0 text-2xl border-b-2 p-2'
                        placeholder='******' />

                    <button
                        className='text-white ml-1  transition hover:bg-gray-600 p-3 rounded bg-gray-500  '>Register User</button>
                    <div className='flex gap-1 w-[20vw]'>
                        <p>Already Have an account?</p>
                        <Link to='/login' className='font-thin text-blue-400'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register