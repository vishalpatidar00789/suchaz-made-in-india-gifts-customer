export const actionTypes = {
    GET_BUYNOW: 'GET_BUYNOW',
    GET_BUYNOW_SUCCESS: 'GET_BUYNOW_SUCCESS',
    GET_BUYNOW_ERROR: 'GET_BUYNOW_ERROR',

    GET_BUYNOW_TOTAL_QUANTITY: 'GET_BUYNOW_TOTAL_QUANTITY',
    GET_BUYNOW_TOTAL_QUANTITY_SUCCESS: 'GET_BUYNOW_TOTAL_QUANTITY_SUCCESS',

    ADD_BUYNOW_ITEM: 'ADD_BUYNOW_ITEM',
    REMOVE_BUYNOW_ITEM: 'REMOVE_BUYNOW_ITEM',

    CLEAR_BUYNOW: 'CLEAR_BUYNOW',
    CLEAR_BUYNOW_SUCCESS: 'CLEAR_BUYNOW_SUCCESS',
    CLEAR_BUYNOW_ERROR: 'CLEAR_BUYNOW_ERROR',

    INCREASE_BUYNOW_QTY: 'INCREASE_BUYNOW_QTY',
    INCREASE_BUYNOW_QTY_SUCCESS: 'INCREASE_BUYNOW_QTY_SUCCESS',
    INCREASE_BUYNOW_QTY_ERROR: 'INCREASE_BUYNOW_QTY_ERROR',

    GIFT_WRAP_SELECTED: 'GIFT_WRAP_SELECTED',
    GIFT_WRAP_SELECTED_SUCCESS: 'GIFT_WRAP_SELECTED_SUCCESS',
    GIFT_WRAP_SELECTED_ERROR: 'GIFT_WRAP_SELECTED_ERROR',

    DECREASE_BUYNOW_QTY: 'DECREASE_BUYNOW_QTY',
    UPDATE_BUYNOW: 'UPDATE_BUYNOW',

    UPDATE_BUYNOW_SUCCESS: 'UPDATE_BUYNOW_SUCCESS',
    UPDATE_BUYNOW_ERROR: 'UPDATE_BUYNOW_ERROR',
};

export function getBuyNow() {
    return { type: actionTypes.GET_BUYNOW };
}

export function getBuyNowSuccess() {
    return {
        type: actionTypes.GET_BUYNOW_SUCCESS,
    };
}

export function getBuyNowError(error) {
    return {
        type: actionTypes.GET_BUYNOW_ERROR,
        error,
    };
}

export function addBuyNowItem(product) {
    return { type: actionTypes.ADD_BUYNOW_ITEM, product };
}

export function removeBuyNowItem(product) {
    return { type: actionTypes.REMOVE_BUYNOW_ITEM, product };
}

export function increaseBuyNowItemQty(product) {
    return { type: actionTypes.INCREASE_BUYNOW_QTY, product };
}

export function giftWrapSelected(product) {
    return { type: actionTypes.GIFT_WRAP_SELECTED, product };
}

export function decreaseBuyNowItemQty(product) {
    return { type: actionTypes.DECREASE_BUYNOW_QTY, product };
}

export function updateBuyNowSuccess(payload) {
    return {
        type: actionTypes.UPDATE_BUYNOW_SUCCESS,
        payload,
    };
}

export function updateBuyNowError(payload) {
    return {
        type: actionTypes.UPDATE_BUYNOW_ERROR,
        payload,
    };
}
