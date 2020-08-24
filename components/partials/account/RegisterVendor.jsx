import React, { Component } from 'react';
import Router from 'next/router';
import { registerVendor } from '../../../store/auth/action';
import axios from 'axios';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
import { suchazBaseUrl } from '../../../repositories/SuchazOrderRepository';
import { notification } from 'antd';

const modalShow = (type, message, desc) => {
    notification[type]({
        message: message,
        description: desc,
        duration: 1,
    });
};

class RegisterVendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verification_code: '',
            isVerified: false,
            otpSent: false,
            contact_no: '',
        };
    }
    formRef = React.createRef();

    handleSubmit = (values) => {
        this.props.dispatch(registerVendor(values));
    };

    handleVerificationCodeChange = (e) => {
        const verification_code = e.target.value;
        this.setState({ verification_code: verification_code });
    };

    handleContactChange = (e) => {
        const contact_no = e.target.value;
        this.setState({ contact_no: contact_no });
    };

    onResendVerification = async () => {
        if (this.state.contact_no.length == 10) {
            let result = await axios
                .post(`${suchazBaseUrl}/auth/resendCode`, {
                    country_code: '+91',
                    phone: this.state.contact_no,
                })
                .then((res) => {
                    if (res.data) {
                        modalShow(
                            'success',
                            'Success',
                            'Verification Code Sent Successfully'
                        );
                        this.setState({
                            otpSent: true,
                            isVerified: false,
                            verification_code: '',
                        });
                        this.formRef.current.setFieldsValue({
                            verification_code: '',
                        });
                    }
                    return res.data;
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.data) {
                            if (error.response.data.status == 429) {
                                modalShow(
                                    'error',
                                    'Error',
                                    'Too Many Requests Please try after some time'
                                );
                            } else {
                                modalShow(
                                    'error',
                                    'Error',
                                    error.response.data.message
                                );
                            }
                        }
                        return error.response.data;
                    }
                });
        }
    };

    onVerifySubmit = async () => {
        if (this.state.contact_no.length == 10) {
            let result = await axios
                .post(`${suchazBaseUrl}/auth/resendCode`, {
                    country_code: '+91',
                    phone: this.state.contact_no,
                })
                .then((res) => {
                    if (res.data) {
                        this.setState({
                            otpSent: true,
                            isVerified: false,
                        });
                        modalShow(
                            'success',
                            'Success',
                            'Verification Code Sent Successfully'
                        );
                    }
                    return res.data;
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.data) {
                            if (error.response.data.status == 429) {
                                modalShow(
                                    'error',
                                    'Error',
                                    'Too Many Requests Please try after some time'
                                );
                            } else {
                                modalShow(
                                    'error',
                                    'Error',
                                    error.response.data.message
                                );
                            }
                        }

                        return error.response.data;
                    }
                });
        }
    };

    onVerificationSubmitHandle = async () => {
        if (this.state.verification_code.length === 6) {
            let result = await axios
                .post(`${suchazBaseUrl}/auth/verifyCode`, {
                    country_code: '+91',
                    phone: this.state.contact_no,
                    verification_code: this.state.verification_code,
                })
                .then((res) => {
                    if (res.data) {
                        modalShow(
                            'success',
                            'Success',
                            'Verified Phone Number Successfully'
                        );
                        this.setState({
                            otpSent: false,
                            isVerified: true,
                            verification_code: '',
                        });
                        this.formRef.current.setFieldsValue({
                            verification_code: '',
                        });
                    }
                    return res.data;
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.data) {
                            modalShow(
                                'error',
                                'Error',
                                error.response.data.message
                            );
                        }
                        return error.response.data;
                    }
                });
        }
    };

    returnString(event) {
        return /[a-z]/i.test(event.key);
    }

    render() {
        const { contact_no, isVerified, otpSent } = this.state;
        const self = this;
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        ref={this.formRef}
                        className="ps-form--vendor-account"
                        onFinish={this.handleSubmit.bind(this)}>
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
                                                        message:
                                                            'Please input your name',
                                                    },
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Form.Item
                                                onKeyPress={(e) =>
                                                    this.returnString.bind(e)
                                                }
                                                name="shop_name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your shop name',
                                                    },
                                                ]}>
                                                <Input
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
                                                        message:
                                                            'Please input your email',
                                                    },
                                                ]}>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                />
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
                                                        maxLength: 10,
                                                        message:
                                                            'Please input your phone number',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        async validator(
                                                            rule,
                                                            value
                                                        ) {
                                                            if (
                                                                typeof value !=
                                                                    'undefined' &&
                                                                value != ''
                                                            ) {
                                                                if (
                                                                    typeof value !=
                                                                        'undefined' &&
                                                                    value.length ==
                                                                        10
                                                                ) {
                                                                    return Promise.resolve();
                                                                } else {
                                                                    return Promise.reject(
                                                                        'Invalid phone number.'
                                                                    );
                                                                }
                                                            }
                                                        },
                                                    }),
                                                ]}>
                                                <Input
                                                    placeholder="Phone Number"
                                                    type="number"
                                                    maxLength="10"
                                                    onChange={this.handleContactChange.bind(
                                                        this
                                                    )}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            {otpSent ? (
                                                <button
                                                    onClick={this.onResendVerification.bind(
                                                        this
                                                    )}
                                                    className="ps-btn ps-btn--sm">
                                                    Re-send Verification Code
                                                </button>
                                            ) : !isVerified ? (
                                                <button
                                                    onClick={this.onVerifySubmit.bind(
                                                        this
                                                    )}
                                                    className="ps-btn ps-btn--sm">
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
                                                            message:
                                                                'Enter an verification code',
                                                        },
                                                        {
                                                            len: 6,
                                                            message:
                                                                'Verification code should be 6 digits long.',
                                                        },
                                                    ]}>
                                                    <Input
                                                        placeholder="Verification Code"
                                                        type="password"
                                                        onChange={this.handleVerificationCodeChange.bind(
                                                            this
                                                        )}
                                                    />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <button
                                                    onClick={this.onVerificationSubmitHandle.bind(
                                                        this
                                                    )}
                                                    className="ps-btn ps-btn--sm">
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
                                                        message:
                                                            'Please input your GST number',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        async validator(
                                                            rule,
                                                            value
                                                        ) {
                                                            if (
                                                                typeof value !=
                                                                    'undefined' &&
                                                                value != ''
                                                            ) {
                                                                let regex = /[0-9]{2}[A-Z]{5}[0-9]{4}[1-9A-Z]{1}[1-9A-Z]{1}[1-9A-Z]{1}[1-9A-Z]{1}$/.test(
                                                                    value
                                                                );
                                                                if (regex) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject(
                                                                    'Invalid GST number'
                                                                );
                                                            }
                                                        },
                                                    }),
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="GST Number (optional)"
                                                />
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
                                                        message:
                                                            'Please input your address',
                                                    },
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="Address"
                                                />
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
                                                        message:
                                                            'Enter a postal code',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        async validator(
                                                            rule,
                                                            value
                                                        ) {
                                                            if (
                                                                typeof value !=
                                                                    'undefined' &&
                                                                value != ''
                                                            ) {
                                                                if (
                                                                    value.length ==
                                                                    6
                                                                ) {
                                                                    //  return Promise.resolve();

                                                                    await axios
                                                                        .post(
                                                                            `${suchazBaseUrl}/pincode/check`,
                                                                            {
                                                                                pincode: value,
                                                                            }
                                                                        )
                                                                        .then(
                                                                            (
                                                                                res
                                                                            ) => {
                                                                                self.formRef.current.setFieldsValue(
                                                                                    {
                                                                                        city:
                                                                                            res
                                                                                                .data
                                                                                                .data
                                                                                                .city,
                                                                                        state:
                                                                                            res
                                                                                                .data
                                                                                                .data
                                                                                                .state,
                                                                                    }
                                                                                );
                                                                                return Promise.resolve();
                                                                            }
                                                                        )
                                                                        .catch(
                                                                            (
                                                                                error
                                                                            ) => {
                                                                                return Promise.resolve();
                                                                                // return Promise.reject(
                                                                                //     'Service not avalible on your postal code'
                                                                                // );
                                                                            }
                                                                        );
                                                                } else {
                                                                    return Promise.reject(
                                                                        'Invalid postal code'
                                                                    );
                                                                }
                                                            }
                                                        },
                                                    }),
                                                ]}>
                                                <Input
                                                    type="number"
                                                    placeholder="Postal Code"
                                                />
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
                                                        message:
                                                            'Please input your city',
                                                    },
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="City"
                                                />
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
                                                        message:
                                                            'Please input your state',
                                                    },
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="State"
                                                />
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
                                                        message:
                                                            'Please input your description',
                                                    },
                                                ]}>
                                                <Input.TextArea
                                                    rows={4}
                                                    type="text"
                                                    placeholder="Description"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.auth;
};
export default connect(mapStateToProps)(RegisterVendor);
