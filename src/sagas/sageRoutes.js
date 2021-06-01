import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

import {
    GET_ALL_ROUTES, receiveAllRoute,
    ROUTE_FILTER
} from "../action/allRoutes";
import {
    GET_ROUTES, receiveRoute,
    ADD_ROUTE, ADD_COMMENT,
    DELETE_COMMENT, DELETE_ROUTE,
} from "../action/route";




function requestRouteFilter(payload) {
    return axios.post(`http://likeshikes.somee.com/api/Routes/GetRoutesUsingFilter`, payload);
};

function* workerRouteFilter({payload}) {
    try{
        const response = yield call(requestRouteFilter, payload);
        if(!response.data.errors){
            yield put(receiveAllRoute(response.data));
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

function requestDeleteRoute(payload) {
    return axios.delete(`http://likeshikes.somee.com/api/Routes/RemoveRoute?routeId=${payload}`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerDeleteRoute({payload}) {
    try{
        const response = yield call(requestDeleteRoute, payload);
        if(!response.data.errors){
            const route = yield call(requestAllRoute);
            yield put(receiveAllRoute(route.data));
            swal("Маршрут удален", {
                icon: "success",
                timer: 3000,
            });
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

function requestDeleteComment(payload) {
    return axios.delete(`http://likeshikes.somee.com/api/Routes/RemoveRouteReview?routeReviewId=${payload}`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerDeleteComment({payload}) {
    try{
        yield call(requestDeleteComment, payload.idComment);
        const response = yield call(requestRoute, payload.idRoute);
        if(!response.data.errors){
            yield put(receiveRoute(response.data));
            swal("Комментарий удален", {
                icon: "success",
                timer: 3000,
            });
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

function requestAddComment(payload) {
    return axios.post(`http://likeshikes.somee.com/api/Routes/CreateReview`, payload,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerAddComment({payload}) {
    try{
        yield call(requestAddComment, payload);
        const response = yield call(requestRoute, payload.routeId);
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
        swal("Комментарий добавлен", {
            icon: "success",
            timer: 3000,
        });
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Уупс...",
            timer: 5000,
        });
    }
}

function requestAddRoute(payload) {
    return axios.post(`http://likeshikes.somee.com/api/Routes/AddRouteToUser`, {RouteId: payload},
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerAddRoute({payload}) {
    try{
        yield call(requestAddRoute, payload);
        const response = yield call(requestAllRoute);
        yield put(receiveAllRoute(response.data));
        swal("Маршрут добавлен", {
            icon: "success",
            timer: 3000,
        });
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Уупс...",
            timer: 5000,
        });
    }
}

function requestAllRoute() {
    return  axios.get('http://likeshikes.somee.com/api/Routes/GetAllRoutes',
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
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
    return axios.get(`http://likeshikes.somee.com/api/Routes/GetRouteById?id=${payload}`,
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
    yield takeEvery (ADD_ROUTE, workerAddRoute);
    yield takeEvery (ADD_COMMENT, workerAddComment);
    yield takeEvery (DELETE_COMMENT, workerDeleteComment);
    yield takeEvery (DELETE_ROUTE, workerDeleteRoute);
    yield takeEvery (ROUTE_FILTER, workerRouteFilter);
}
