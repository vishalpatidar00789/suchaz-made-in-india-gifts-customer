import { all, put, takeEvery, call } from 'redux-saga/effects';
import { notification } from 'antd';
import SuchazAuthRepository from '../../repositories/SuchazAuthRepository';
import Router from 'next/router';

import {
    actionTypes,
    loginSuccess,
    logOutSuccess,
    registerSuccess,
    registerVendorSuccess,
    registerVendorError,
    getAuthSuccess,
    getAuthError,
    loginError,
} from './action';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Wellcome back',
        description: 'You are login successful!',
    });
};

const modalRegisterSuccess = (type, message) => {
    notification[type]({
        message: 'Success',
        description: message,
    });
};

const modalWarning = (type) => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};

const modalError = (type, msg) => {
    notification[type]({
        message: 'Error',
        description: msg,
    });
};

function* loginSaga(payload) {
    try {
        const result = yield call(
            SuchazAuthRepository.loginRequest,
            payload.payload
        );
        if (typeof result.error === 'undefined') {
            yield put(loginSuccess(result));
            modalSuccess('success');
           
        } else {
            yield put(loginError(result));
            modalError('error', 'Invalid Email or Password!');
        }
    } catch (err) {
        yield put(loginError(err));
        modalError('error', err.message);
    }
}

 
function* registerSaga(payload) {
    try {
        const result = yield call(
            SuchazAuthRepository.registerRequest,
            payload.payload
        );

        if (result.status == false) {
            modalError('error', result.message);
        } else {
            //yield put(registerSuccess(result));
            modalSuccess('success');
               setTimeout(() => {
                Router.push('/account/login')
            }, 800);
            
        }
    } catch (err) {
        // yield put(registerVendorError(err));
        modalError('error', err.message);
    }
}

function* registerVendorSaga(payload) {
    try {
        const result = yield call(
            SuchazAuthRepository.registerVendorRequest,
            payload.payload
        );
        if (result.status == false) {
            yield put(registerVendorError(result.message));
            modalError('error', result.message);
        } else {
            yield put(registerVendorSuccess(result));
            // modalRegisterSuccess('success', result.message);
            setTimeout(() => {
                Router.push('/account/vendor/thank-you');
            }, 800);
        }
    } catch (err) {
        yield put(registerVendorError(err));
        modalError('error', err.message);
    }
}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
        Router.push('/');
    } catch (err) {
        console.log(err);
    }
}

function* getAuthSaga() {
    try {
        yield put(getAuthSuccess());
    } catch (err) {
        yield put(getAuthError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_AUTH, getAuthSaga)]);
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_REQUEST, registerSaga)]);
    yield all([
        takeEvery(actionTypes.REGISTER_VENDOR_REQUEST, registerVendorSaga),
    ]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
