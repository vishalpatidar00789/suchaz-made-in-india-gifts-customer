import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Input, Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getCart } from '../../../store/cart/action';
import axios from 'axios';
import { suchazBaseUrl } from '../../../repositories/SuchazOrderRepository';
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
} from '../../../store/customization/action';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

class CustomizeGift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalText: 'Content of the modal'
        };
    }

    componentDidMount() {
        this.props.dispatch(getCustomization());
    }

    showModal(product) {
        this.props.dispatch(
            showCustomization({
                visible: true,
                customization_text: product.customization_text,
                customization_maxtext: product.customization_maxtext,
                customization_image: product.customization_image,
                customization_maximage: product.customization_maximage,
            })
        );
    }

    handleOk() {
        this.setState({
            loading: true,
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        this.setState({});
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);

        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }

    handleCancel() {
        this.props.dispatch(hideCustomization());
    }

    handleCancelImgModal() {
        this.props.dispatch(hideImageModal());
    }

    async handleImagePreview(file) {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.props.dispatch(
            onImagePreview({
                previewImage: file.url || file.preview,
                previewVisible: true,
                previewTitle:
                    file.name ||
                    file.url.substring(file.url.lastIndexOf('/') + 1),
            })
        );
    }

    handleUpload() {
        const { fileList, product } = this.props;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('images', file);
        });

        this.props.dispatch(customizationUploading());

        if (fileList.length) {
            axios
                .post(`${suchazBaseUrl}/order/uploadTempImage`, formData)
                .then((res) => {
                    if (res.data.status) {
                        setTimeout(() => {
                            this.props.dispatch(
                                customizationUploadingSuccessData({
                                    product: product,
                                    imgurls: res.data.data,
                                })
                            );
                        }, 100);
                    }
                })
                .catch((error) => {
                    if (error.response.data) {
                        this.props.dispatch(customizationUploadingError());
                    }
                });
        }else{
            this.props.dispatch(customizationUploadingError());
            this.props.dispatch(hideCustomization());
        }
    }

    handleImageChange(fileList) {
        this.props.dispatch(updateCustomizationImageList(fileList.fileList));
    }
    handleChangeText(e) {
        this.props.dispatch(updateCustomizationText(e.target.value));
    }

    render() {
        const {
            product,
            visible,
            confirmLoading,
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
        } = this.props;

        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const props = {
            multiple: false,
            onRemove: (file) => {
                this.props.dispatch(onRemoveImage(file));
            },
            beforeUpload: (file) => {
                this.props.dispatch(beforeUplaodCustomization(file));
                return false;
            },
        };
        return (
            <React.Fragment>
                {product.customization_available === true ? (
                    <a
                        className="customize-gift"
                        onClick={this.showModal.bind(this, product)}>
                        Customize Gift
                    </a>
                ) : (
                    ''
                )}
                <Modal
                    title="Customized gift"
                    visible={visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    footer={[
                        <Button
                            key="back"
                            onClick={this.handleCancel.bind(this)}>
                            Cancel
                        </Button>,
                        <Button
                            key="button"
                            type="primary"
                            loading={confirmLoading}
                            onClick={this.handleUpload.bind(this)}>
                            Save
                        </Button>,
                    ]}>
                    {customization_image ? (
                        <Upload
                            {...props}
                            listType="picture-card"
                            fileList={imagesList}
                            onPreview={this.handleImagePreview.bind(this)}
                            onChange={this.handleImageChange.bind(this)}>
                            {imagesList.length >= customization_maximage
                                ? null
                                : uploadButton}
                        </Upload>
                    ) : (
                        ''
                    )}
                    {customization_text ? (
                        <Input
                            maxLength={customization_maxtext}
                            onChange={this.handleChangeText.bind(this)}
                            placeholder="Text"
                            defaultValue={text}></Input>
                    ) : (
                        ''
                    )}
                    <Modal
                        visible={previewVisible}
                        title={previewTitle}
                        footer={null}
                        onCancel={this.handleCancelImgModal.bind(this)}>
                        <img
                            alt="example"
                            style={{ width: '100%' }}
                            src={previewImage}
                        />
                    </Modal>
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return state.customization;
};
export default connect(mapStateToProps)(CustomizeGift);
