import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

import {GET_ALL_ROUTES, receiveAllRoute} from "../action/allRoutes";
import {GET_ROUTES, receiveRoute} from "../action/route";

function requestAllRoute() {
    return axios.get('/api/Routes/GetAllRoutes');
};

function* workerAllRoute() {
    try{
        const response = yield call(requestAllRoute);
        yield put(receiveAllRoute(response.data));
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Уупс...",
            timer: 5000,
        });
    }
}

function requestRoute(payload) {
    return axios.get(`/api/Routes/GetRouteById?id=${payload}`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerRoute({payload}) {
    try{
        const response = yield call(requestRoute, payload);
        if(!response.data.errors){
            yield put(receiveRoute(response.data));
        }
        else{
            swal( response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Уупс...",
            timer: 5000,
        });
    }
}

export function* watchRoute() {
    yield takeEvery (GET_ALL_ROUTES, workerAllRoute);
    yield takeEvery (GET_ROUTES, workerRoute);
}
