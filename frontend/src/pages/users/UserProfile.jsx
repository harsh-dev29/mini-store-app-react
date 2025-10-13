import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from '../../store/actions/userActions'

const UserProfile = () => {



    const users = useSelector(state => state.userReducer.users)

    // from createproduct component
    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            username: users?.username,
            email: users?.email,
            password: users?.password,
            description: users?.description,
            category: users?.category,
        }
    })


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const updateUserHanddler = (user

    ) => {
        dispatch(asyncUpdateUser(users.id, user

        ))
    }

    const deleteHanddler = () => {
        dispatch(asyncDeleteUser(users.id))
        navigate("/login")
    }
    const logoutUser = () => {
        dispatch(asyncLogoutUser())
        navigate('/login')
    }

    return users ? (
        <div className='h-screen bg-black w-full items-cneter justify-center flex'>
            <div>
                <h1 className='font-thin text-5xl text-gray-700 '> username : {users.username}</h1>
                <h1 className='font-thin text-3xl text-gray-700'> email : {users.email}</h1>
            </div>
            <hr />
            <div className='flex absolute top-50 '>
                <form onSubmit={handleSubmit(updateUserHanddler)} className='flex flex-col mt-5 gap-4 pt-3 w-1/2 items-start'>
                    <input type="text"
                        {...register("username")}
                        className='outline-0 text-2xl border-b-2 p-2'
                        placeholder='Username' />

                    <input type="email"
                        {...register("email")}
                        className='outline-0 text-2xl border-b-2 p-2'
                        placeholder='Email' />
                    <input type="password"
                        {...register("password")}
                        className='outline-0 text-2xl border-b-2 p-2'
                        placeholder='********' />

                    <button type='buttton' onClick={logoutUser} className='text-white w-[10rem] ml-1 hover:scale-108 transition hover:bg-red-300  p-3  rounded bg-red-400  '>Logout User</button>
                    <div className='flex  gap-5'><button
                        className='text-white w-[10rem] ml-1  transition hover:bg-gray-600 p-3 rounded bg-gray-500  hover:scale-108'>Update User</button>
                        {/* <div className='flex gap-1 w-[20vw]'>
                        <p>Already Have an account?</p>
                        <Link to='/login' className='font-thin text-blue-400'>Login</Link>
                    </div> */}
                        <button type='buttton' onClick={deleteHanddler} className='text-white w-[10rem] ml-1 hover:scale-108 transition hover:bg-red-600  p-3  rounded bg-red-400  '>Delete User</button>
                    </div>
                </form>
            </div>
        </div>
    ) : "Loading......"
}


export default UserProfile