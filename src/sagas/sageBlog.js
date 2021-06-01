import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

import {
    GET_BLOG, receiveBlog,
    CREATE_BLOG, DELETE_BLOG,
} from "../action/blog";

function requestDeleteBlog(payload) {
    return axios.delete(`https://likeshikes.somee.com/api/Blog/Delete?postId=${payload}`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerDeleteBlog({payload}) {
    try{
        const response = yield call(requestDeleteBlog, payload.id);
        if(response.data.errors){
            swal( response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
        else{
            swal("Пост удален", {
                icon: "success",
                timer: 3000,
            });
            const response = yield call(requestBlog, payload.page);
            yield put(receiveBlog(response.data));
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

function requestCreateBlog(payload) {
    return axios.post(`https://likeshikes.somee.com/api/Blog/Create`, payload,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerCreateBlog({payload}) {
    try{
        const response = yield call(requestCreateBlog, payload.values);
        if(response.data.errors){
            swal( response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
        else{
            swal("Пост добавлен", {
                icon: "success",
                timer: 3000,
            });
            payload.history.push({pathname: `/Blog`})
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

function requestBlog(payload) {
    return axios.get(`https://likeshikes.somee.com/api/Blog/Posts?page=${payload}`);
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
    yield takeEvery (CREATE_BLOG, workerCreateBlog);
    yield takeEvery (DELETE_BLOG, workerDeleteBlog);
}
