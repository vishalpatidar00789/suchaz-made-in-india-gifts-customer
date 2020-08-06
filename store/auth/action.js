export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_VENDOR_REQUEST: 'REGISTER_VENDOR_REQUEST',
    REGISTER_VENDOR_SUCCESS: 'REGISTER_VENDOR_SUCCESS',
    REGISTER_VENDOR_ERROR: 'REGISTER_VENDOR_ERROR',
    GET_AUTH: 'GET_AUTH',
    GET_AUTH_SUCCESS: 'GET_AUTH_SUCCESS',
    GET_AUTH_ERROR: 'GET_AUTH_ERROR',
    REDIRECT_CHECKOUT: 'REDIRECT_CHECKOUT',
    REDIRECT_CHECKOUT_SUCCESS: 'REDIRECT_CHECKOUT_SUCCESS',
};

export function getAuth() {
    return { type: actionTypes.GET_AUTH };
}

export function getAuthSuccess() {
    return { type: actionTypes.GET_AUTH_SUCCESS };
}

export function getAuthError(error) {
    return {
        type: actionTypes.GET_AUTH_ERROR,
        error,
    };
}

export function redirectCheckout() {
    return { type: actionTypes.REDIRECT_CHECKOUT };
}

export function redirectCheckoutSuccess() {
    return { type: actionTypes.REDIRECT_CHECKOUT_SUCCESS };
}

export function login(payload) {
    return { type: actionTypes.LOGIN_REQUEST, payload };
}

export function loginSuccess(payload) {
    return { type: actionTypes.LOGIN_SUCCESS, payload };
}

export function loginError(payload) {
    return { type: actionTypes.LOGIN_ERROR, payload };
}

export function register(payload) {
    return { type: actionTypes.REGISTER_REQUEST, payload };
}

export function registerSuccess(payload) {
    return { type: actionTypes.REGISTER_SUCCESS, payload };
}

export function registerVendor(payload) {
    return { type: actionTypes.REGISTER_VENDOR_REQUEST, payload };
}

export function registerVendorSuccess(payload) {
    return { type: actionTypes.REGISTER_VENDOR_SUCCESS, payload };
}

export function registerVendorError(payload) {
    return { type: actionTypes.REGISTER_VENDOR_ERROR, payload };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}
