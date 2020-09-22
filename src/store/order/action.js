export const actionTypes = {
    PLACE_ORDER: 'PLACE_ORDER',
    PLACE_ORDER_SUCCESS: 'PLACE_ORDER_SUCCESS'
}

export function placeOrder(payload) {
    return { type: actionTypes.PLACE_ORDER, payload };
}

export function placeOrderSuccess(payload) {
    return { type: actionTypes.PLACE_ORDER_SUCCESS, payload };
}


