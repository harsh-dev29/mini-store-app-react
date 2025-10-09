import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncLogoutUser, asyncUpdateUser } from '../../store/actions/userActions'

const UserProfile = () => {



    const { userReducer: { users } } = useSelector(state => state)

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

    const logoutUser = () => {
        dispatch(asyncLogoutUser())
        navigate("/")
    }

    return users ? (
        <div> <form onSubmit={handleSubmit(updateUserHanddler)} className='flex flex-col mt-5 gap-4 pt-3 w-1/2 items-start'>
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


            <div className='flex  gap-5'><button
                className='text-white w-[10rem] ml-1  transition hover:bg-gray-600 p-3 rounded bg-gray-500  hover:scale-108'>Update User</button>
                {/* <div className='flex gap-1 w-[20vw]'>
                        <p>Already Have an account?</p>
                        <Link to='/login' className='font-thin text-blue-400'>Login</Link>
                    </div> */}
                <button type='buttton' onClick={logoutUser} className='text-white w-[10rem] ml-1 hover:scale-108 transition hover:bg-red-600  p-3  rounded bg-red-400  '>Delete User</button>
            </div>
        </form>
        </div>
    ) : "Loading......"
}


export default UserProfile