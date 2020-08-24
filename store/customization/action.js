export const actionTypes = {
    ADD_CUSTOMIZATION: 'ADD_CUSTOMIZATION',
    GET_CUSTOMIZATION: 'GET_CUSTOMIZATION',
    GET_CUSTOMIZATION_SUCCESS: 'GET_CUSTOMIZATION_SUCCESS',
    SHOW_CUSTOMIZATION: 'SHOW_CUSTOMIZATION',
    HIDE_CUSTOMIZATION: 'HIDE_CUSTOMIZATION',
    UPDATE_CUSTOMIZATION_TEXT: 'UPDATE_CUSTOMIZATION_TEXT',
    UPDATE_CUSTOMIZATION_IMAGE_LIST: 'UPDATE_CUSTOMIZATION_IMAGE_LIST',
    BEFORE_UPLOAD_CUSTOMIZATION: 'BEFORE_UPLOAD_CUSTOMIZATION',
    BEFORE_UPLOAD_CUSTOMIZATION_SUCCESS: 'BEFORE_UPLOAD_CUSTOMIZATION_SUCCESS',
    ON_UPLOAD_CUSTOMIZATION: 'ON_UPLOAD_CUSTOMIZATION',
    ON_IMAGE_PREVIEW: 'ON_IMAGE_PREVIEW',
    HIDE_IMAGE_PREVIEW: 'HIDE_IMAGE_PREVIEW',
    ON_REMOVE_IMAGE: 'ON_REMOVE_IMAGE',
    ON_REMOVE_IMAGE_SUCCESS: 'ON_REMOVE_IMAGE_SUCCESS',
    CUSTOMIZATION_UPLOADING: 'CUSTOMIZATION_UPLOADING',
    CUSTOMIZATION_UPLOADING_SUCCESS: 'CUSTOMIZATION_UPLOADING_SUCCESS',
    CUSTOMIZATION_UPLOADING_SUCCESS_DATA: 'CUSTOMIZATION_UPLOADING_SUCCESS_DATA',
    CUSTOMIZATION_UPLOADING_ERROR: 'CUSTOMIZATION_UPLOADING_ERROR',
    CUSTOMIZATION_EMPTY: 'CUSTOMIZATION_EMPTY',
};



export function addCustomization(payload) {
    return { type: actionTypes.ADD_CUSTOMIZATION, payload };
}
export function showCustomization(payload) {
    return { type: actionTypes.SHOW_CUSTOMIZATION, payload };
}
export function hideCustomization(payload) {
    return { type: actionTypes.HIDE_CUSTOMIZATION, payload };
}
export function updateCustomizationText(payload) {
    return { type: actionTypes.UPDATE_CUSTOMIZATION_TEXT, payload };
}
export function updateCustomizationImageList(payload) {
    return { type: actionTypes.UPDATE_CUSTOMIZATION_IMAGE_LIST, payload };
}
export function beforeUplaodCustomization(payload) {
    return { type: actionTypes.BEFORE_UPLOAD_CUSTOMIZATION, payload };
}
export function beforeUplaodCustomizationSuccess(payload) {
    return { type: actionTypes.BEFORE_UPLOAD_CUSTOMIZATION_SUCCESS, payload };
}
export function onUplaodCustomization(payload) {
    return { type: actionTypes.ON_UPLOAD_CUSTOMIZATION, payload };
}
export function onImagePreview(payload) {
    return { type: actionTypes.ON_IMAGE_PREVIEW, payload };
}
export function hideImageModal(payload) {
    return { type: actionTypes.HIDE_IMAGE_PREVIEW, payload };
}
export function onRemoveImage(payload) {
    return { type: actionTypes.ON_REMOVE_IMAGE, payload };
}
export function onRemoveImageSuccess(payload) {
    return { type: actionTypes.ON_REMOVE_IMAGE_SUCCESS, payload };
}
export function customizationUploading(payload) {
    return { type: actionTypes.CUSTOMIZATION_UPLOADING, payload };
}
export function customizationUploadingSuccessData(payload) {
    return { type: actionTypes.CUSTOMIZATION_UPLOADING_SUCCESS_DATA, payload };
}
export function customizationUploadingSuccess(payload) {
    return { type: actionTypes.CUSTOMIZATION_UPLOADING_SUCCESS, payload };
}
export function customizationUploadingError(payload) {
    return { type: actionTypes.CUSTOMIZATION_UPLOADING_ERROR, payload };
}
export function customizationEmpty(payload) {
    return { type: actionTypes.CUSTOMIZATION_EMPTY, payload };
}
export function getCustomization() {
    return { type: actionTypes.GET_CUSTOMIZATION };
}
export function getCustomizationSuccess() {
    return { type: actionTypes.GET_CUSTOMIZATION_SUCCESS };
}

