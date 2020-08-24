import { actionTypes } from './action';

export const initCart = {
    cartItems: [],
    amount: 0,
    shippingCharges: 0,
    giftWrapCharges: 0,
    gst: 0,
    cartTotal: 0,
};

function reducer(state = initCart, action) {
    switch (action.type) {
        case actionTypes.GET_BUYNOW_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.UPDATE_BUYNOW_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ shippingCharges: action.payload.shippingCharges },
                ...{ giftWrapCharges: action.payload.giftWrapCharges },
                ...{ gst: action.payload.gst },
                ...{ cartTotal: action.payload.cartTotal },
            };
        case actionTypes.CLEAR_BUYNOW_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ shippingCharges: action.payload.shippingCharges },
                ...{ giftWrapCharges: action.payload.giftWrapCharges },
                ...{ gst: action.payload.gst },
                ...{ cartTotal: action.payload.cartTotal },
            };
        case actionTypes.GET_BUYNOW_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.UPDATE_BUYNOW_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;
