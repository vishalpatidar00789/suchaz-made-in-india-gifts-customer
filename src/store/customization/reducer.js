import { actionTypes } from './action';

export const initState = {
    visible: false,
    confirmLoading: false,
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
    imagesList: [],
    imagesUrl:[],
    customization_text: false,
    customization_maxtext: 10,
    customization_image: false,
    customization_maximage: 1,
    uploading: false,
    text: ''
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.ADD_CUSTOMIZATION:
            return {
                ...state,
                ...{
                    imagesList: action.payload,
                },
            };
        case actionTypes.SHOW_CUSTOMIZATION:
            return {
                ...state,
                ...{
                    visible: action.payload.visible,
                    customization_text: action.payload.customization_text,
                    customization_maxtext: action.payload.customization_maxtext,
                    customization_image: action.payload.customization_image,
                    customization_maximage: action.payload.customization_maximage,
                },
            };
        case actionTypes.HIDE_CUSTOMIZATION:
            return {
                ...state,
                ...{
                    visible: false,
                },
            };
        case actionTypes.UPDATE_CUSTOMIZATION_TEXT:
            return {
                ...state,
                ...{
                    text: action.payload
                },
            };
        case actionTypes.UPDATE_CUSTOMIZATION_IMAGE_LIST:
            return {
                ...state,
                ...{
                    imagesList: action.payload
                },
            };
        case actionTypes.BEFORE_UPLOAD_CUSTOMIZATION_SUCCESS:
            return {
                ...state,
                ...{
                    fileList: action.payload
                },
            };
        case actionTypes.HIDE_IMAGE_PREVIEW:
            return {
                ...state,
                ...{
                    previewVisible: false
                },
            };
        case actionTypes.ON_IMAGE_PREVIEW:
            return {
                ...state,
                ...{
                    previewImage: action.payload.previewImage,
                    previewVisible: action.payload.previewVisible,
                    previewTitle: action.payload.previewTitle
                },
            };
        case actionTypes.ON_REMOVE_IMAGE_SUCCESS:
            return {
                ...state,
                ...{
                    fileList: action.payload,
                    previewImage: '',
                    previewTitle: ''
                },
            };
        case actionTypes.CUSTOMIZATION_UPLOADING:
            return {
                ...state,
                ...{
                    uploading: true,
                },
            };
        case actionTypes.CUSTOMIZATION_UPLOADING_SUCCESS:
            return {
                ...state,
                ...{
                    imagesUrl: action.payload,
                    fileList: [],
                    uploading: false,
                    loading: false,
                    ModalText: 'The modal will be closed after two seconds',
                    confirmLoading: false,
                    visible: false,
                },
            };
        case actionTypes.CUSTOMIZATION_UPLOADING_ERROR:
            return {
                ...state,
                ...{
                    uploading: false,
                },
            };
        case actionTypes.CUSTOMIZATION_EMPTY:
            return {
                ...state,
                ...{
                    fileList: [],
                    imagesUrl: [],
                    imagesList: []
                },
            };
        case actionTypes.GET_CUSTOMIZATION_SUCCESS:
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default reducer;
