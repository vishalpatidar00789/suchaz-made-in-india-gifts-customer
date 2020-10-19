import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomizeGiftWrapper from './customize-gift.style';
import { Button, Input, Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { suchazBaseUrl } from 'repositories/SuchazOrderRepository';
import {
    getCustomization,
    showCustomization,
    hideCustomization,
    onImagePreview,
    hideImageModal,
    onRemoveImage,
    updateCustomizationText,
    beforeUplaodCustomization,
    updateCustomizationImageList,
    customizationUploading,
    customizationUploadingSuccessData,
    customizationUploadingError,
} from 'store/customization/action';
type CustomizeGiftProps = {
    product: any;
};
const CustomizeGift: FC<CustomizeGiftProps> = ({ product }) => {
    const dispatch = useDispatch();
    const {
        customization_text,
        customization_maxtext,
        customization_image,
        customization_maximage,
        previewVisible,
        previewImage,
        fileList,
        imagesList,
        previewTitle,
        text,
    } = useSelector((state) => state.customization);
    let { visible, confirmLoading } = useSelector((state) => state.customization);
    const [modalText, setModalText] = useState<string>('Content of the modal');
    useEffect(() => {
        dispatch(getCustomization());
    }, []);

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const showModal = (product) => {
        dispatch(
            showCustomization({
                visible: true,
                customization_text: product.customization_text,
                customization_maxtext: product.customization_maxtext,
                customization_image: product.customization_image,
                customization_maximage: product.customization_maximage,
            })
        );
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        confirmLoading = true;

        setTimeout(() => {
            visible = false;
        }, 3000);

        setTimeout(() => {
            visible = false;
            confirmLoading = false;
        }, 2000);
    };

    const handleCancel = () => {
        dispatch(hideCustomization());
    };

    const handleCancelImgModal = () => {
        dispatch(hideImageModal());
    };

    const handleImagePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        dispatch(
            onImagePreview({
                previewImage: file.url || file.preview,
                previewVisible: true,
                previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
            })
        );
    };

    const handleUpload = () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('images', file);
        });

        dispatch(customizationUploading());

        if (fileList.length) {
            axios
                .post(`${suchazBaseUrl}/order/uploadTempImage`, formData)
                .then((res) => {
                    if (res.data.status) {
                        dispatch(
                            customizationUploadingSuccessData({
                                product: product,
                                imgurls: res.data.data,
                            })
                        );
                        // setTimeout(() => {
                        //     dispatch(
                        //         customizationUploadingSuccessData({
                        //             product: product,
                        //             imgurls: res.data.data,
                        //         })
                        //     );
                        // }, 300);
                    }
                })
                .catch((error) => {
                    if (error.response.data) {
                        dispatch(customizationUploadingError());
                    }
                });
        } else {
            dispatch(customizationUploadingError());
            dispatch(hideCustomization());
        }
    };

    const handleImageChange = ({ fileList }) => {
        dispatch(updateCustomizationImageList(fileList));
    };
    const handleChangeText = (e) => {
        dispatch(updateCustomizationText(e.target.value));
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    const props = {
        multiple: false,
        onRemove: (file) => {
            dispatch(onRemoveImage(file));
        },
        beforeUpload: (file) => {
            dispatch(beforeUplaodCustomization(file));
            return false;
        },
    };

    return (
        <CustomizeGiftWrapper>
            {product.customization_available === true ? (
                <a className="customize-gift" onClick={() => showModal(product)}>
                    Customize Gift
                </a>
            ) : (
                ''
            )}

            <Modal
                title="Customized gift"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="button" type="primary" loading={confirmLoading} onClick={handleUpload}>
                        Save
                    </Button>,
                ]}>
                {customization_image ? (
                    <Upload
                        {...props}
                        listType="picture-card"
                        fileList={imagesList}
                        onPreview={handleImagePreview}
                        onChange={handleImageChange}>
                        {imagesList.length >= customization_maximage ? null : uploadButton}
                    </Upload>
                ) : (
                    ''
                )}
                {customization_text ? (
                    <Input
                        maxLength={customization_maxtext}
                        onChange={handleChangeText}
                        placeholder="Text"
                        defaultValue={text}></Input>
                ) : (
                    ''
                )}
                <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancelImgModal}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </Modal>
        </CustomizeGiftWrapper>
    );
};

export default CustomizeGift;
