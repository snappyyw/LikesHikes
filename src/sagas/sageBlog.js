import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

import {GET_BLOG, receiveBlog} from "../action/blog";

function requestBlog(payload) {
    return axios.get(`api/Blog/Posts?page=${payload}`);
};

function* workerBlog({payload}) {
    try{
        const response = yield call(requestBlog, payload);
        yield put(receiveBlog(response.data));
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Уупс...",
            timer: 5000,
        });
    }
}

export function* watchBlog() {
    yield takeEvery (GET_BLOG, workerBlog);
}
