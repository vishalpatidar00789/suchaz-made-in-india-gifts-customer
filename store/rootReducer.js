import { combineReducers } from 'redux';
import post from './post/reducer';
import product from './product/reducer';
import setting from './setting/reducer';
import cart from './cart/reducer';
import buynow from './buynow/reducer';
import customization from './customization/reducer';
import compare from './compare/reducer';
import auth from './auth/reducer';
import wishlist from './wishlist/reducer';
import collection from './collection/reducer';
import shippingAddress from './shippingAddress/reducer';

export default combineReducers({
    auth,
    post,
    product,
    setting,
    cart,
    buynow,
    customization,
    compare,
    wishlist,
    collection,
    shippingAddress
});
