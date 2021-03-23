import axios from 'axios'
import swal from 'sweetalert'

import { setUser } from '../reducers/user';

export const registration = async (values) => {
    try{
        const response = await axios.post(``, JSON.stringify(values, null, 2))
        swal(response.toString(), {
            icon: "success",
            timer: 3000,
        })
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Oops",
            timer: 5000,
        })
    }
}

export const login = (values) => {
    return async dispatch => {
        try{
            const response = await axios.post(``, JSON.stringify(values, null, 2))
            dispatch(setUser(response.user))
            localStorage.setItem('token', response.token)

        }
        catch (err) {
            swal( err.toString(), {
                icon: "error",
                title: "Oops",
                timer: 5000,
            })
        }
    }
}

export const auth = () => {
    return async dispatch =>{
        try{
            const response = await axios.get(``, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.user))
            localStorage.setItem('token', response.token)
        }
        catch (err) {
            swal( err.toString(), {
                icon: "error",
                title: "Oops",
                timer: 5000,
            })
            localStorage.removeItem('token')
        }
    }
}