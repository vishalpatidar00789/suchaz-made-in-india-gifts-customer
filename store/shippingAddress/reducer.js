import { actionTypes } from './action';

export const initCart = {
    address: {},
};

function reducer(state = initCart, action) {
    switch (action.type) {
        case actionTypes.GET_ADDRESS:
            return {
                ...state,
            };
        case actionTypes.UPDATE_ADDRESS_SUCCESS:
            return {
                ...state,
                ...{ address: action.address }
            };
        default:
            return state;
    }
}

export default reducer;
