import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

import {GET_ROUTER, receiveRouter} from "../action/routers";

function requestRouter() {
    return axios.get(``);
};

function* workerRouter() {
    try{
        const response = yield call(requestRouter);
        yield put(receiveRouter(response));
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Oops",
            timer: 5000,
        });
    }
}

export function* watchRouter() {
    yield takeEvery (GET_ROUTER, workerRouter);
}
