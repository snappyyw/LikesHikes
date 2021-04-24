import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

import {GET_ALL_ROUTES, receiveAllRoute} from "../action/allRoutes";
import {GET_ROUTES, receiveRoute} from "../action/route";

function requestAllRoute() {
    return axios.get(``);
};

function* workerAllRoute() {
    try{
        const response = yield call(requestAllRoute);
        yield put(receiveAllRoute(response));
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Oops",
            timer: 5000,
        });
    }
}

function requestRoute({payload}) {
    return axios.get(`/${payload}`);
};

function* workerRoute({payload}) {
    try{
        const response = yield call(requestRoute, payload);
        yield put(receiveRoute(response));
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Oops",
            timer: 5000,
        });
    }
}


export function* watchRoute() {
    yield takeEvery (GET_ALL_ROUTES, workerAllRoute);
    yield takeEvery (GET_ROUTES, workerRoute);
}
