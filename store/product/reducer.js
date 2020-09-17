import { actionTypes } from './action';

export const initialState = {
    orderHistory: null,
    orderHistorySuccess: null,
    allProducts: null,
    singleProduct: null,
    error: false,
    totalProducts: 0,
    categories: null,
    brands: [],
    productsLoading: true,
    productLoading: true,
    searchResults: null,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ORDER_HISTORY:
            return {
                ...state,
                ...{ orderHistory: action.payload },
            };
        case actionTypes.GET_ORDER_HISTORY_SUCCESS:
            return {
                ...state,
                ...{ orderHistorySuccess: action.payload },
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...{ allProducts: action.data, productsLoading: false },
            };
        case actionTypes.GET_FILTER_CATEGORY_SUCCESS:
            return {
                ...state,
                ...{
                    allProducts: action.payload.docs,
                    totalProducts: action.payload.totalDocs,
                    productsLoading: false,
                },
            };
        case actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...{ totalProducts: action.payload },
            };
        case actionTypes.GET_BRANDS_SUCCESS:
            return {
                ...state,
                ...{ brands: action.payload },
            };
        case actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS:
            return {
                ...state,
                ...{ categories: action.payload },
            };
        case actionTypes.GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                ...{ singleProduct: action.data, productLoading: false },
            };
        case actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS:
            return {
                ...state,
                ...{ searchResults: action.payload },
            };

        case actionTypes.GET_PRODUCTS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        default:
            return state;
    }
}

export default reducer;
