import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import SuchazProductRepository from '../../repositories/SuchazProductRepository';
import StaticProductRepository from '../../repositories/static/StaticProductRepository';
import Router from 'next/router';
import { notification } from 'antd';

import { actionTypes, placeOrderSuccess } from './action';
import { updateCartSuccess } from './../cart/action';
import { isStaticData } from '../../utilities/app-settings';
polyfill();
const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'New order placed successfully!',
        duration: 1,
    });
};

function* placeOrder({ payload }) {
    try {
        if (isStaticData === false) {
            // const data = yield call(ProductRepository.getRecords, payload);
            // yield put(getProductsSuccess(data));

            const data = yield call(
                SuchazProductRepository.placeOrder,
                payload
            );
            // console.log(data);
            // yield put(placeOrderSuccess(data));
            //modalSuccess('success');

            Router.push(`/thank-you?orderID=${data.id}`);

            const emptyCart = {
                cartItems: [],
                amount: 0,
                cartTotal: 0,
                shippingCharges: 0,
                gst: 0,
            };
            yield put(updateCartSuccess(emptyCart));
        } else {
            // const data = yield call(StaticProductRepository.placeOrder);
            // yield put(getProductsSuccess(data));
        }
    } catch (err) {
        //  yield put(getProductsError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.PLACE_ORDER, placeOrder)]);
}
