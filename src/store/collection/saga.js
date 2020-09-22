import { all, put, call, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import { actionTypes, getCategoriesSuccess, getCollectionsSuccess, getNewArrival, getNewArrivalSuccess, getMenus, getMenusSuccess } from './action';
import { isStaticData } from '../../utilities/app-settings';
import CollectionRepository from '../../repositories/CollectionRepository';
import SuchazCollectionRepository from '../../repositories/SuchazCollectionRepository';
import StaticCollectionRepository from '../../repositories/static/StaticCollectionRepository';
polyfill();

function* getCollections({ payload }) {
    try {
        if (isStaticData === false) {
            const data = yield call(
                SuchazCollectionRepository.getCollections,
                payload
            );
            yield put(getCollectionsSuccess(data));
        } else {
            const data = yield call(
                StaticCollectionRepository.getCollections,
                payload
            );
            yield put(getCollectionsSuccess(data));
        }
    } catch (err) {
       // console.log(err);
    }
}

function* getMenuData({ payload }) {
    try {
        if (isStaticData === false) {
            const data = yield call(
                SuchazCollectionRepository.getMenus,
                payload
            );
            if (data && data.status == true){
                yield put(getMenusSuccess(data.data));
            }
          
        } else {
            const data = yield call(
                StaticCollectionRepository.getMenus,
                payload
            );
            yield put(getMenusSuccess(data));
        }
    } catch (err) {
       // console.log(err);
    }
}

function* getNewArrivals({ payload }) {
    try {
        if (isStaticData === false) {
            const data = yield call(
                SuchazCollectionRepository.getNewArrivals,
                payload
            );
            yield put(getNewArrivalSuccess(data));
        } else {
            const data = yield call(
                StaticCollectionRepository.getCollections,
                payload
            );
            yield put(getCollectionsSuccess(data));
        }
    } catch (err) {
       // console.log(err);
    }
}
function* getCollectionByCategories({ payload }) {
    try {
        if (isStaticData === false) {
            const data = yield call(
                CollectionRepository.getCategoriesBySlug,
                payload
            );
            yield put(getCategoriesSuccess(data));
        } else {
            const data = yield call(
                StaticCollectionRepository.getCollections,
                payload
            );
            yield put(getCollectionsSuccess(data));
        }
    } catch (err) {
       // console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_COLLECTIONS, getCollections)]);
    yield all([takeEvery(actionTypes.GET_MENUS, getMenuData)]);
    yield all([takeEvery(actionTypes.GET_NEWARRIVALS, getNewArrivals)]);
    yield all([takeEvery(actionTypes.GET_CATEGORIES, getCollectionByCategories)]);
}
