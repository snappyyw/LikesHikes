import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

import {
    REGISTRATION, LOGIN, setUser,
    AUTH, logout, GET_USER_ROUTES,
    SaveUserData, DELETE_MY_ROUTE,
    PUBLISH_MY_ROUTE, COMPLETE_ROUTE,
    CREATE_REPORT, GET_REPORT,
    saveReport, DELETE_REPORT,
} from "../action/user";
import {removeCoordinat, CREATE_ROUTE} from "../action/creatingRoutes";




function requestDeleteReport(payload) {
    return axios.delete(`/api/PersonalArea/RemoveReport?routeId=${payload}`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerDeleteReport({payload}) {
    try{
        const response = yield call(requestDeleteReport, payload.id);
        if(response.data.errors){
            swal(response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
        else{
            swal("Отчет удален", {
                icon: "success",
                timer: 3000,
            });
            payload.history.push({pathname: `/Profile`})
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

function requestReport(payload) {
        return axios.get(`/api/PersonalArea/GetReport?routeId=${payload}`,
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerReport({payload}) {
    try{
        const response = yield call(requestReport, payload);
        if(response.data.errors){
            swal(response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
        else{
            yield put(saveReport(response.data));
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

function requestCreateReport(payload) {
    return axios.post(`/api/PersonalArea/CreateOrEditReport`, payload,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerCreateReport({payload}) {
    try{
        const response = yield call(requestCreateReport, payload.values);
        if(response.data.errors){
            swal( response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
        else{
            swal("Отчет создан", {
                icon: "success",
                timer: 3000,
            });
            payload.history.push({pathname: `/Profile`})
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

function requestCompleteRoute(payload) {
    return axios.put(`/api/PersonalArea/ChangeRoutePassed`, {RouteId: payload},
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerCompleteRoute({payload}) {
    try{
        yield call(requestCompleteRoute, payload);
        const response = yield call(requestUserData);
        yield put(SaveUserData(response.data));
        const data = yield call(requestAuth);
        yield put(setUser(data.data));
        swal("Маршрут пройден", {
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

function requestPublishMyRoute(payload) {
    return axios.put(`/api/PersonalArea/PublishRoute`, {RouteId: payload},
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerPublishMyRoute({payload}) {
    try{
        const response = yield call(requestPublishMyRoute, payload);
        if(response.data.errors){
            swal( response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
        else {
            const dataUser = yield call(requestUserData);
            yield put(SaveUserData(dataUser.data));
            swal("Маршрут опубликован", {
                icon: "success",
                timer: 3000,
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

function requestCreateRoutes(payload) {
    return axios.post(`/api/PersonalArea/CreateOrEditRoute`, payload,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
};

function* workerCreateRoutes({payload}) {
    try{
        yield call(requestCreateRoutes, payload.values);
        const data = yield call(requestAuth);
        yield put(setUser(data.data));
        swal("Маршрут создан", {
            icon: "success",
            timer: 3000,
        });
        payload.history.push({pathname: `/Profile`})
        yield put(removeCoordinat());
    }
    catch (err) {
        swal( err.toString(), {
            icon: "error",
            title: "Уупс...",
            timer: 5000,
        });
    }
}

function requestDeleteMyRoute(payload) {
    return axios.delete(`/api/PersonalArea/RemoveRoute?RouteId=${payload}`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
}

function* workerDeleteMyRoute({payload}) {
    try{
        const response = yield call(requestDeleteMyRoute, payload);
        if(response.data.errors){
            swal( response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
        else{
            swal("Вы успешно удалили маршрут", {
                icon: "success",
                timer: 3000,
            });
            const response = yield call(requestUserData);
            yield put(SaveUserData(response.data));
            const data = yield call(requestAuth);
            yield put(setUser(data.data));
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

function requestRegistration(payload) {
    return axios.post(`/api/Account/registration`, payload);
}

function* workerRegistration({payload}) {
    try{
        const response = yield call(requestRegistration, payload.values);
        if(!response.data.errors){
            swal("Вы успешно зарегистрировались", {
                icon: "success",
                timer: 3000,
            });
            payload.history.push({pathname: `/Authorization`})
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

function requestUserData() {
    return axios.get(`/api/PersonalArea/GetUserRoutes`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
}

function* workerUserData() {
    try{
        const response = yield call(requestUserData);
        if(response.data.errors){
            swal( response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
        else {
            yield put(SaveUserData(response.data));
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

function requestLogin(payload) {

    return axios.post('/api/Account/login', payload);
}

function* workerLogin({payload}) {
    try{
        const response = yield call(requestLogin, payload.values);
        if(response.data.errors){
            swal( response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
        else{
            yield put(setUser(response.data));
            localStorage.setItem('token', response.data.token);
            payload.history.push({pathname: `/`})
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

function requestAuth() {
    return  axios.get(`/api/Account/GetUserData`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
}

function* workerAuth() {
    try{
        const response = yield call(requestAuth);

        if(!response.data.errors){
            yield put(setUser(response.data));
        }
        else{
            yield put(logout());
            localStorage.removeItem('token');
            swal( response.data.errors, {
                icon: "error",
                title: "Уупс...",
                timer: 5000,
            });
        }
    }
    catch (err) {
        swal(err.toString(), {
            icon: "error",
            title: "Уупс...",
            timer: 5000,
        });
    }
}



export function* watchUser() {

    yield takeEvery (REGISTRATION, workerRegistration);
    yield takeEvery (LOGIN, workerLogin);
    yield takeEvery (AUTH, workerAuth);
    yield takeEvery (GET_USER_ROUTES, workerUserData);
    yield takeEvery (DELETE_MY_ROUTE, workerDeleteMyRoute);
    yield takeEvery (CREATE_ROUTE, workerCreateRoutes);
    yield takeEvery (PUBLISH_MY_ROUTE, workerPublishMyRoute);
    yield takeEvery (COMPLETE_ROUTE, workerCompleteRoute);
    yield takeEvery (CREATE_REPORT, workerCreateReport);
    yield takeEvery (GET_REPORT, workerReport);
    yield takeEvery (DELETE_REPORT, workerDeleteReport);
}
