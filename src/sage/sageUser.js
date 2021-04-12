import {put, takeEvery, call} from 'redux-saga/effects'
import axios from 'axios'
import swal from 'sweetalert'

import {REGISTRATION, LOGIN, setUser, AUTH, logout} from "../action/user"

function requestRegistration(payload) {

    return axios.post(``, JSON.stringify(payload, null, 2))
}

function* workerRegistration({payload}) {
    try{

        const response = yield call(requestRegistration, payload)

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

function requestLogin(payload) {

    return axios.post(``, JSON.stringify(payload, null, 2))
}

function* workerLogin({payload}) {
    try{

        const response = yield call(requestLogin, payload)

        yield put(setUser(response.user))

        localStorage.setItem('token', response.token)

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

function requestAuth() {

    return axios.post(``, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
}

function* workerAuth() {
    try{

        const response = yield call(requestAuth)

        yield put(setUser(response.user))

        localStorage.setItem('token', response.token)

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
        yield put(logout())
        localStorage.removeItem('token')
    }
}



export function* watchUser() {

    yield takeEvery (REGISTRATION, workerRegistration)

    yield takeEvery (LOGIN, workerLogin)

    yield takeEvery (AUTH, workerAuth)
}
