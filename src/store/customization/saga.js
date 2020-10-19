import { all, put, takeEvery } from 'redux-saga/effects';
import {
    actionTypes,
    getCustomizationSuccess,
    beforeUplaodCustomizationSuccess,
    onRemoveImageSuccess,
    customizationUploadingSuccess,
} from './action';

function* getCustomizationSaga() {
    try {
        const localCustomization = JSON.parse(localStorage.getItem('persist:suchaz')).customization;
        yield put(getCustomizationSuccess(localCustomization));
    } catch (err) {
        // console.log(err);
    }
}

function* beforeUplaodCustomizationSaga(payload) {
    try {
        let localCustomization = JSON.parse(JSON.parse(localStorage.getItem('persist:suchaz')).customization);
        console.log(localCustomization);
        const newFileList = [...localCustomization.fileList, payload.payload];
        console.log(newFileList);

        yield put(beforeUplaodCustomizationSuccess(newFileList));
    } catch (err) {
        console.log(err);
    }
}

function* onRemoveImageSage(payload) {
    try {
        let localCustomization = JSON.parse(JSON.parse(localStorage.getItem('persist:suchaz')).customization);

        const index = localCustomization.fileList.indexOf(payload.payload);
        const newFileList = localCustomization.fileList.slice();
        newFileList.splice(index, 1);
        // console.log(localCustomization);
        // const newFileList = [...localCustomization.fileList, payload.payload];
        // console.log(newFileList);

        yield put(onRemoveImageSuccess(newFileList));
    } catch (err) {
        console.log(err);
    }
}

function* customizationUploadSuccessDataSaga(payload) {
    try {
        let imgurls = payload.payload.imgurls;
        let productId = payload.payload.product.id;
        let localCustomization = JSON.parse(JSON.parse(localStorage.getItem('persist:suchaz')).customization);
        let filteredProduct = localCustomization.imagesUrl.filter((image) => {
            return image.productId == productId;
        })[0];
        if (filteredProduct) {
            imgurls.forEach((url) => {
                filteredProduct.urls.push(url);
            });
        } else {
            let newImgObj = {
                productId: productId,
                urls: [],
            };
            imgurls.forEach((url) => {
                newImgObj.urls.push(url);
            });

            localCustomization.imagesUrl.push(newImgObj);
        }
        console.log(localCustomization.imagesUrl);

        // const index = localCustomization.fileList.indexOf(payload.payload);
        // const newFileList = localCustomization.fileList.slice();
        // newFileList.splice(index, 1);
        // console.log(localCustomization);
        // const newFileList = [...localCustomization.fileList, payload.payload];
        // console.log(newFileList);

        yield put(customizationUploadingSuccess(localCustomization.imagesUrl));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_CUSTOMIZATION, getCustomizationSaga)]);
    yield all([takeEvery(actionTypes.BEFORE_UPLOAD_CUSTOMIZATION, beforeUplaodCustomizationSaga)]);
    yield all([takeEvery(actionTypes.ON_REMOVE_IMAGE, onRemoveImageSage)]);
    yield all([takeEvery(actionTypes.CUSTOMIZATION_UPLOADING_SUCCESS_DATA, customizationUploadSuccessDataSaga)]);
    // yield all([takeEvery(actionTypes.ON_UPLOAD_CUSTOMIZATION, removeItemSaga)]);
}
