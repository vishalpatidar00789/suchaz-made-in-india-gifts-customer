import { all, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';

import {
    actionTypes,
    getAddress,
    getAddressError,
    updateAddress,
} from './action';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'shipping address saved!',
        duration: 1,
    });
};


const modalWarning = (type) => {
    notification[type]({
        message: 'Remove A Item',
        description: 'This product has been removed from your cart!',
        duration: 1,
    });
};

function* getAddressSaga() {
    try {
        yield put(getAddress());
    } catch (err) {
        yield put(getAddressError(err));
    }
}

function* addAddressSaga(payload) {
    try {
        const { address } = payload;
        let localAddress = JSON.parse(
            localStorage.getItem('persist:martfury')
        ).shippingAddress;
        localAddress = address;
        yield put(updateAddress(localAddress));
        modalSuccess('success');
    } catch (err) {
        yield put(getAddressError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ADDRESS, getAddressSaga)]);
    yield all([takeEvery(actionTypes.ADD_ADDRESS, addAddressSaga)]);
}
