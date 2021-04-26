import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

import {GET_BLOG, receiveBlog} from "../action/blog";

function requestBlog() {

    return axios.get(``);
};

function* workerBlog() {
    try{
        const response = yield call(requestBlog);
        yield put(receiveBlog(response));
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Oops",
            timer: 5000,
        });
    }
}

export function* watchBlog() {
    yield takeEvery (GET_BLOG, workerBlog);
}