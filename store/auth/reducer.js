import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    isRegister: false,
    authUser: {},
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_AUTH_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.GET_AUTH_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true, authUser: action.payload },
            };
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                ...{ isLoggedIn: false },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false, authUser: {} },
            };
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                ...{
                    isLoggedIn: true,
                    isRegister: true,
                    authUser: action.payload,
                },
            };
        default:
            return state;
    }
}

export default reducer;
