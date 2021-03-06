import { actionTypes } from './action';

export const initialState = {
    collections: [],
    menuData: [],
    newarrivals: [],
    categories: [],
    collection: {},
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_COLLECTIONS_SUCCESS:
            return {
                ...state,
                ...{ collections: action.payload },
            };
        case actionTypes.GET_MENUS_SUCCESS:
            return {
                ...state,
                ...{ menuData: action.payload },
            };
        case actionTypes.GET_NEWARRIVALS_SUCCESS:
            return {
                ...state,
                ...{ newarrivals: action.payload },
            };
        case actionTypes.GET_COLLECTION_SUCCESS:
            return {
                ...state,
                ...{ collection: action.payload },
            };
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                ...{ categories: action.payload },
            };
        default:
            return state;
    }
}

export default reducer;
