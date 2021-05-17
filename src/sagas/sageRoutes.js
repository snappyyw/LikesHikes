import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

import {GET_ALL_ROUTES, receiveAllRoute} from "../action/allRoutes";
import {GET_ROUTES, receiveRoute} from "../action/route";
import {GET_MY_ROUTES, receiveMyRoute} from '../action/myRoutes';
import {CREATE_ROUTE, clearRoute} from '../action/creatingRoutes';

function requestAllRoute() {
    return axios.get("http://likeshikes.somee.com/api/Routes/GetAllRoutes", JSON.stringify({"routeFilter": null}));
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

function requestMyRoutes({payload}) {
    return axios.get(`/${payload}`);
};

function* workerMyRoutes({payload}) {
    try{
        const response = yield call(requestMyRoutes, payload);
        yield put(receiveMyRoute(response));
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Oops",
            timer: 5000,
        });
    }
}

function requestCreateRoutes({payload}) {
    return axios.get(``, JSON.stringify(payload, null, 2));
};

function* workerCreateRoutes({payload}) {
    try{
        yield call(requestCreateRoutes, payload);
        yield put(clearRoute());

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
    yield takeEvery (GET_MY_ROUTES, workerMyRoutes);
    yield takeEvery (CREATE_ROUTE, workerCreateRoutes);
}
