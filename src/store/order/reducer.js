import { actionTypes } from './action';

export const initialState = {
    allProducts: null
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.PLACE_ORDER_SUCCESS:
            return {
                ...state,
                ...{ allProducts: action.data, productsLoading: false },
            };

        default:
            return state;
    }
}

export default reducer;
