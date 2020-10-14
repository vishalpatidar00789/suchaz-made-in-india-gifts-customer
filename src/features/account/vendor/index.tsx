import React, { FC, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerVendor } from 'store/auth/action';
import { Form, Input, notification } from 'antd';
import VendorRegisterWrapper from './vendor-register.style';
import axios from 'axios';
import { suchazBaseUrl } from 'repositories/SuchazOrderRepository';
const { TextArea } = Input;
const VendorRegister: FC = () => {
    const dispatch = useDispatch();
    const { currency } = useSelector((state) => state.setting);
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [otpSent, setOtpSent] = useState<boolean>(false);
    const [contactNo, setContactNo] = useState<string>('');

    const formRef = useRef(null);

    const modalShow = (type, message, desc) => {
        notification[type]({
            message: message,
            description: desc,
            duration: 1,
        });
    };

    const handleSubmit = (values) => {
        dispatch(registerVendor(values));
    };

    const handleVerificationCodeChange = (e) => {
        const verification_code = e.target.value;
        setVerificationCode(verification_code);
    };

    const handleContactChange = (e) => {
        const contact_no = e.target.value;
        setContactNo(contact_no);
    };

    const onResendVerification = async () => {
        if (contactNo && contactNo.length == 10) {
            let result = await axios
                .post(`${suchazBaseUrl}/auth/resendCode`, {
                    country_code: '+91',
                    phone: contactNo,
                })
                .then((res) => {
                    if (res.data) {
                        modalShow('success', 'Success', 'Verification Code Sent Successfully');
                        setOtpSent(true);
                        setIsVerified(false);
                        setVerificationCode('');
                        formRef.current.setFieldsValue({
                            verification_code: '',
                        });
                    }
                    return res.data;
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.data) {
                            if (error.response.data.status == 429) {
                                modalShow('error', 'Error', 'Too Many Requests Please try after some time');
                            } else {
                                modalShow('error', 'Error', error.response.data.message);
                            }
                        }
                        return error.response.data;
                    }
                });
        }
    };

    const onVerifySubmit = async () => {
        if (contactNo && contactNo.length == 10) {
            let result = await axios
                .post(`${suchazBaseUrl}/auth/resendCode`, {
                    country_code: '+91',
                    phone: contactNo,
                })
                .then((res) => {
                    if (res.data) {
                        setOtpSent(true);
                        setIsVerified(false);
                        modalShow('success', 'Success', 'Verification Code Sent Successfully');
                    }
                    return res.data;
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.data) {
                            if (error.response.data.status == 429) {
                                modalShow('error', 'Error', 'Too Many Requests Please try after some time');
                            } else {
                                modalShow('error', 'Error', error.response.data.message);
                            }
                        }

                        return error.response.data;
                    }
                });
        }
    };

    const onVerificationSubmitHandle = async () => {
        if (verificationCode && verificationCode.length === 6) {
            let result = await axios
                .post(`${suchazBaseUrl}/auth/verifyCode`, {
                    country_code: '+91',
                    phone: contactNo,
                    verification_code: verificationCode,
                })
                .then((res) => {
                    if (res.data) {
                        modalShow('success', 'Success', 'Verified Phone Number Successfully');
                        setOtpSent(false);
                        setIsVerified(true);
                        setVerificationCode('');
                        formRef.current.setFieldsValue({
                            verification_code: '',
                        });
                    }
                    return res.data;
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.data) {
                            modalShow('error', 'Error', error.response.data.message);
                        }
                        return error.response.data;
                    }
                });
        }
    };

    const returnString = (event) => {
        return /[a-z]/i.test(event.key);
    };

    return (
        <VendorRegisterWrapper>
            <div className="container">
                <Form className='ps-form--vendor-account' ref={formRef} onFinish={handleSubmit}>
                    <div className="ps-tab active" id="register">
                        <div className="ps-form__content">
                            <h5>Register Vendor Account</h5>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Form.Item
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your name',
                                                },
                                            ]}>
                                            <Input type="text" placeholder="Name" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Form.Item
                                            name="shop_name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your shop name',
                                                },
                                            ]}>
                                            <Input
                                                onKeyPress={(e) => returnString(e)}
                                                type="text"
                                                placeholder="Shop Name"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    type: 'email',
                                                    required: true,
                                                    message: 'Please input your email',
                                                },
                                            ]}>
                                            <Input type="email" placeholder="Email" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <Form.Item
                                            name="contact_number"
                                            rules={[
                                                {
                                                    required: true,
                                                    max: 10,
                                                    message: 'Please input your phone number',
                                                },
                                                ({ getFieldValue }) => ({
                                                    async validator(rule, value) {
                                                        if (typeof value != 'undefined' && value != '') {
                                                            if (typeof value != 'undefined' && value.length == 10) {
                                                                return Promise.resolve();
                                                            } else {
                                                                return Promise.reject('Invalid phone number.');
                                                            }
                                                        }
                                                    },
                                                }),
                                            ]}>
                                            <Input
                                                placeholder="Phone Number"
                                                type="number"
                                                max="10"
                                                onChange={handleContactChange}
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        {otpSent ? (
                                            <button onClick={onResendVerification} className="ps-btn ps-btn--sm">
                                                Re-send Verification Code
                                            </button>
                                        ) : !isVerified ? (
                                            <button onClick={onVerifySubmit} className="ps-btn ps-btn--sm">
                                                Verify Phone
                                            </button>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            </div>

                            {otpSent ? (
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Form.Item
                                                name="verification_code"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Enter an verification code',
                                                    },
                                                    {
                                                        len: 6,
                                                        message: 'Verification code should be 6 digits long.',
                                                    },
                                                ]}>
                                                <Input
                                                    placeholder="Verification Code"
                                                    type="password"
                                                    onChange={handleVerificationCodeChange}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <button onClick={onVerificationSubmitHandle} className="ps-btn ps-btn--sm">
                                                Validate Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Form.Item
                                            name="gst_no"
                                            rules={[
                                                {
                                                    message: 'Please input your GST number',
                                                },
                                                ({ getFieldValue }) => ({
                                                    async validator(rule, value) {
                                                        if (typeof value != 'undefined' && value != '') {
                                                            let regex = /[0-9]{2}[A-Z]{5}[0-9]{4}[1-9A-Z]{1}[1-9A-Z]{1}[1-9A-Z]{1}[1-9A-Z]{1}$/.test(
                                                                value
                                                            );
                                                            if (regex) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject('Invalid GST number');
                                                        }
                                                    },
                                                }),
                                            ]}>
                                            <Input type="text" placeholder="GST Number (optional)" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Form.Item
                                            name="address"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your address',
                                                },
                                            ]}>
                                            <Input type="text" placeholder="Address" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Form.Item
                                            name="postalcode"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Enter a postal code',
                                                },
                                                ({ getFieldValue }) => ({
                                                    async validator(rule, value) {
                                                        if (typeof value != 'undefined' && value != '') {
                                                            if (value.length == 6) {
                                                                //  return Promise.resolve();

                                                                await axios
                                                                    .post(`${suchazBaseUrl}/pincode/check`, {
                                                                        pincode: value,
                                                                    })
                                                                    .then((res) => {
                                                                        formRef.current.setFieldsValue({
                                                                            city: res.data.data.city,
                                                                            state: res.data.data.state,
                                                                        });
                                                                        return Promise.resolve();
                                                                    })
                                                                    .catch((error) => {
                                                                        return Promise.resolve();
                                                                        // return Promise.reject(
                                                                        //     'Service not avalible on your postal code'
                                                                        // );
                                                                    });
                                                            } else {
                                                                return Promise.reject('Invalid postal code');
                                                            }
                                                        }
                                                    },
                                                }),
                                            ]}>
                                            <Input type="number" placeholder="Postal Code" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <Form.Item
                                            name="city"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your city',
                                                },
                                            ]}>
                                            <Input type="text" placeholder="City" />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <Form.Item
                                            name="state"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your state',
                                                },
                                            ]}>
                                            <Input type="text" placeholder="State" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Form.Item
                                            name="description"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'Please input your description',
                                                },
                                            ]}>
                                            <Input.TextArea rows={4} placeholder="Description" />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group submit">
                                <button type="submit" className="ps-btn ps-btn--fullwidth">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </VendorRegisterWrapper>
    );
};

export default VendorRegister;
