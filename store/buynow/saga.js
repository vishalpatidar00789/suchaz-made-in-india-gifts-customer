import { all, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import { Router } from 'next/router';

import {
    actionTypes,
    getBuyNowError,
    getBuyNowSuccess,
    updateBuyNowSuccess,
    updateBuyNowError,
} from './action';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
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

export const countShippingCharges = (cartItems) => {
    let totalShippingCharge = 0.0;
    if (cartItems) {
        cartItems.map((product) => {
            const productShippingCharge =
                parseFloat(product.shippingCharge) * product.quantity;
            totalShippingCharge =
                parseFloat(totalShippingCharge) +
                parseFloat(productShippingCharge);
        });
    }
    return parseFloat(totalShippingCharge);
};

export const calculateGST = (cartItems) => {
    let totalItemGST = 0.0;
    if (cartItems) {
        cartItems.map((product) => {
            let totalTax = parseFloat(product.gst);
            let totalAmount = parseFloat(product.bestPrice) * product.quantity;
            let totalItemGSTAmount =
                parseFloat(totalAmount) -
                parseFloat(totalAmount) / parseFloat('1.' + totalTax);

            totalItemGST =
                parseFloat(totalItemGST) + parseFloat(totalItemGSTAmount);
        });
    }
    return parseFloat(totalItemGST).toFixed(2);
};

export const calculateGiftWrapCharges = (cartItems) => {
    let totalItemWrapCharge = 0;
    if (cartItems) {
        cartItems.map((product) => {
            if (product.giftWrapSelected == true) {
                let totalAmount =
                    parseFloat(product.gift_wrap_price) * product.quantity;
                totalItemWrapCharge =
                    parseFloat(totalItemWrapCharge) + parseFloat(totalAmount);
            }
        });
    }
    return parseFloat(totalItemWrapCharge).toFixed(2);
};

export const calculateAmount = (obj) =>
    Object.values(obj)
        .reduce((acc, { quantity, bestPrice }) => acc + quantity * bestPrice, 0)
        .toFixed(2);

function* getBuyNowSaga() {
    try {
        yield put(getBuyNowSuccess());
    } catch (err) {
        yield put(getBuyNowError(err));
    }
}

function* addItemSaga(payload) {
    try {
        const { product } = payload;
     
        try {
            let currentCart = JSON.parse(
                JSON.parse(localStorage.getItem('persist:martfury')).buynow
            );
            product.quantity = 1;
            product.giftWrapSelected = false;
            product.giftWrapCharges = 0;
            currentCart.amount = 0;
            currentCart.shippingCharges = 0;
            currentCart.gst = 0;
            currentCart.giftWrapCharges = 0;
            currentCart.cartTotal = 0;
            if (product.gift_wrap_available == 'true') {
                let giftWrapCharges =
                    parseFloat(product.gift_wrap_price) *
                    parseFloat(product.quantity);
                product.giftWrapCharges = giftWrapCharges.toFixed(2);
            }
            currentCart.cartItems = [];
            currentCart.cartItems.push(product);
    
            currentCart.amount = calculateAmount(currentCart.cartItems);
            currentCart.shippingCharges = countShippingCharges(
                currentCart.cartItems
            );
            currentCart.gst = calculateGST(currentCart.cartItems);
            currentCart.giftWrapCharges = calculateGiftWrapCharges(
                currentCart.cartItems
            );
            currentCart.cartTotal++;
            yield put(updateBuyNowSuccess(currentCart));
            modalSuccess('success');
        } catch (err) {
            console.log(err);
        }
    
    } catch (err) {
        yield put(getBuyNowError(err));
    }
}

function* removeItemSaga(payload) {
    try {
        const { product } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).buynow
        );
        let index = localCart.cartItems.findIndex(
            (item) => item.id === product.id
        );
        localCart.cartTotal = localCart.cartTotal - product.quantity;
        localCart.cartItems.splice(index, 1);
        localCart.amount = calculateAmount(localCart.cartItems);
        localCart.shippingCharges = countShippingCharges(localCart.cartItems);
        localCart.gst = calculateGST(localCart.cartItems);
        localCart.giftWrapCharges = calculateGiftWrapCharges(
            localCart.cartItems
        );
        if (localCart.cartItems.length === 0) {
            localCart.cartItems = [];
            localCart.amount = 0;
            localCart.cartTotal = 0;
            localCart.shippingCharges = 0;
            localCart.giftWrapCharges = 0;
            localCart.gst = 0;
        }
        yield put(updateBuyNowSuccess(localCart));
        modalWarning('warning');
    } catch (err) {
        yield put(getBuyNowError(err));
    }
}

function* increaseQtySaga(payload) {
    try {
        const { product } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).buynow
        );
        let selectedItem = localCart.cartItems.find(
            (item) => item.id === product.id
        );
        if (selectedItem) {
            selectedItem.quantity++;
            if (selectedItem.gift_wrap_available == 'true') {
                let giftWrapCharges =
                    parseFloat(selectedItem.gift_wrap_price) *
                    parseFloat(selectedItem.quantity);
                selectedItem.giftWrapCharges = parseFloat(
                    giftWrapCharges
                ).toFixed(2);
            }
            localCart.cartTotal++;
            localCart.amount = calculateAmount(localCart.cartItems);
            localCart.shippingCharges = countShippingCharges(
                localCart.cartItems
            );
            localCart.gst = calculateGST(localCart.cartItems);
            localCart.giftWrapCharges = calculateGiftWrapCharges(
                localCart.cartItems
            );
        }
        yield put(updateBuyNowSuccess(localCart));
    } catch (err) {
        yield put(getBuyNowError(err));
    }
}

function* giftWrapSelectedSaga(payload) {
    try {
        const { product } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).buynow
        );
        let selectedItem = localCart.cartItems.find(
            (item) => item.id === product.id
        );
        if (selectedItem) {
           // console.log(selectedItem);
            selectedItem.giftWrapSelected = !selectedItem.giftWrapSelected;
            localCart.giftWrapCharges = calculateGiftWrapCharges(
                localCart.cartItems
            );
        }
        yield put(updateBuyNowSuccess(localCart));
    } catch (err) {
        yield put(getBuyNowError(err));
    }
}

function* decreaseItemQtySaga(payload) {
    try {
        const { product } = payload;
        const localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).buynow
        );
        let selectedItem = localCart.cartItems.find(
            (item) => item.id === product.id
        );

        if (selectedItem) {
            selectedItem.quantity--;
            localCart.cartTotal--;
            localCart.amount = calculateAmount(localCart.cartItems);
            localCart.shippingCharges = countShippingCharges(
                localCart.cartItems
            );
            localCart.gst = calculateGST(localCart.cartItems);
            localCart.giftWrapCharges = calculateGiftWrapCharges(
                localCart.cartItems
            );
        }
        yield put(updateBuyNowSuccess(localCart));
    } catch (err) {
        yield put(getBuyNowError(err));
    }
}

function* clearBuyNowSaga() {
    try {
        const emptyCart = {
            cartItems: [],
            amount: 0,
            cartTotal: 0,
        };
        yield put(updateBuyNowSuccess(emptyCart));
    } catch (err) {
        yield put(updateBuyNowError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_BUYNOW, getBuyNowSaga)]);
    yield all([takeEvery(actionTypes.ADD_BUYNOW_ITEM, addItemSaga)]);
    yield all([takeEvery(actionTypes.REMOVE_BUYNOW_ITEM, removeItemSaga)]);
    yield all([takeEvery(actionTypes.INCREASE_BUYNOW_QTY, increaseQtySaga)]);
    yield all([
        takeEvery(actionTypes.DECREASE_BUYNOW_QTY, decreaseItemQtySaga),
    ]);
    yield all([
        takeEvery(actionTypes.GIFT_WRAP_SELECTED, giftWrapSelectedSaga),
    ]);
}
