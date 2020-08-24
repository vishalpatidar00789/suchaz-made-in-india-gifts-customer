import { all } from 'redux-saga/effects';
import PostSaga from './post/saga';
import ProductSaga from './product/saga';
import SettingSaga from './setting/saga';
import CartSaga from './cart/saga';
import BuyNowSaga from './buynow/saga';
import AuthSaga from './auth/saga';
import CompareSaga from './compare/saga';
import WishlistSaga from './wishlist/saga';
import CollectionSaga from './collection/saga';
import ShippingAddressSaga from './shippingAddress/saga';
import orderSaga from './order/saga';
import customizationSaga from './customization/saga';

export default function* rootSaga() {
    yield all([
        PostSaga(),
        ProductSaga(),
        SettingSaga(),
        CartSaga(),
        BuyNowSaga(),
        customizationSaga(),
        AuthSaga(),
        CompareSaga(),
        WishlistSaga(),
        CollectionSaga(),
        ShippingAddressSaga(),
        orderSaga()
    ]);
}
