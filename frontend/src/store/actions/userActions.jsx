import { data } from 'react-router-dom';
import axios from '../../api/AxiosConfig';
import { loadUser, removeUser } from '../reducers/userSlice';


export const asyncCurrentUser = (user) => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) dispatch(loadUser(user))

    } catch (error) {
        console.log(error);

    }
}
export const asyncLogoutUser = (user) => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user")
        dispatch(removeUser())
    } catch (error) {
        console.log(error);

    }
}
export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`, user)
        localStorage.setItem("user", JSON.stringify(data[0]))

    } catch (error) {
        console.log(error);

    }
}

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        const response = await axios.post('/users', user)
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch('/users/' + id, user)
        localStorage.setItem("user", JSON.stringify(data))
        dispatch(asyncCurrentUser())
    } catch (error) {
        console.log(error);
    }
}

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.delete('/users/' + id)
        dispatch(asyncLogoutUser())

    } catch (error) {
        console.log(error);
    }
}  