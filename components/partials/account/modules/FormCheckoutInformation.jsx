import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Form, Input, InputNumber, Button } from 'antd';
import {
    addAddress,
    getAddress,
} from '../../../../store/shippingAddress/action';
import { connect } from 'react-redux';
import { suchazBaseUrl } from '../../../../repositories/SuchazOrderRepository';
import { giftWrapSelected } from '../../../../store/cart/action';
import { autologin } from '../../../../store/auth/action';
import { notification } from 'antd';
import CustomizeGift from '../CustomizeGift';

const modalShow = (type, message, desc) => {
    notification[type]({
        message: message,
        description: desc,
        duration: 1,
    });
};

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            state: '',
            contact_no: '',
            email: '',
            password: '',
            verification_code: '',
            emailExist: false,
            showPassword: false,
            isVerified: false,
            otpSent: false,
        };
    }
    _isMounted = false;
    typingTimer = null;

    formRef = React.createRef();
    formRef1 = React.createRef();

    async componentDidMount() {
        this._isMounted = true;
        if (this.props.shippingAddress) {
            //  this.formRef.current.setFieldsValue(this.props.shippingAddress);
            // if (this.props.shippingAddress.email != '') {
            // this.checkUserEmail(true, this.props.shippingAddress.email);
            // }

            await setTimeout(async () => {
                if (this.props.auth && this.props.auth.isLoggedIn) {
                    const { authUser } = this.props.auth;
                    if (this._isMounted && authUser && authUser.data && authUser.data.email) {

                        await this.setState({
                            email:
                                authUser.data && authUser.data.email
                                    ? authUser.data.email
                                    : '',
                            contact_no:
                                authUser.data && authUser.data.userProfile &&
                                authUser.data.userProfile.contact
                                    ? authUser.data.userProfile.contact
                                    : '',
                        });

                        // this.formRef.current.setFieldsValue({
                        //     contact_no: this.state.contact_no,
                        // });
                        
                    }
                    this.formRef.current.setFieldsValue({
                        email: this.state.email,
                    });
                    // console.log(this.state.contact_no);

                    //  this.formRef.getFieldDecorator().setFieldsValue(props.shippingAddress);
                }
            }, 200);
        }
    }

    checkUserEmail(result, value) {
        if (result) {
            if (this._isMounted) {
                this.setState({
                    email: value,
                    emailExist: true,
                    showPassword: true,
                });
            }
        } else {
            if (this._isMounted) {
                this.setState({
                    email: value,
                    emailExist: false,
                    showPassword: false,
                });
            }
        }
    }

    handleLoginSubmit = (values) => {
        // console.log(values);
        this.props.dispatch(addAddress(values));
        Router.push('/account/shipping');
    };

    handleChange = (e) => {
        const fname = e.target.name;
        const fvalue = e.target.value;
        this.setState({ fname: fvalue });
    };

    handleContactChange = (e) => {
        const contact_no = e.target.value;
        this.setState({ contact_no: contact_no });
    };

    handlePasswordChange = (e) => {
        const password = e.target.value;
        this.setState({ password: password });
    };

    handleVerificationCodeChange = (e) => {
        const verification_code = e.target.value;
        this.setState({ verification_code: verification_code });
    };

    handleNumberChange = (value) => {
        const validateStatus = value.length === 10;
        this.setState({
            validateStatus,
            value,
            errorMsg: isValid ? null : 'Invalid Mobile number',
        });
    };

    onLoginHandle = () => {
        this.props.dispatch(
            autologin({
                email: this.state.email,
                password: this.state.password,
            })
        );
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
                        'Verified Contact No. Successfully'
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
    };

    sendOtp(value) {
        this.setState({ isVerified: true });
    }

    setChecked(product) {
        this.props.dispatch(giftWrapSelected(product));
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const {
            email,
            contact_no,
            showPassword,
            isVerified,
            otpSent,
            city,
            state,
        } = this.state;
        const {
            auth,
            amount,
            cartItems,
            cartTotal,
            shippingAddress,
            giftWrapCharges,
        } = this.props;
        const self = this;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <Form
                                ref={this.formRef}
                                className="ps-form--checkout"
                                onFinish={this.handleLoginSubmit.bind(this)}>
                                <div className="ps-form__content">
                                    <div className="ps-form__billing-info">
                                        <h3 className="ps-form__heading">
                                            Contact information
                                        </h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Contact No."
                                                        name="contact_no"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                maxLength: 10,
                                                                message:
                                                                    'Enter an contact no.',
                                                            },
                                                            ({
                                                                getFieldValue,
                                                            }) => ({
                                                                async validator(
                                                                    rule,
                                                                    value
                                                                ) {
                                                                    if (
                                                                        typeof value !=
                                                                            'undefined' &&
                                                                        value !=
                                                                            ''
                                                                    ) {
                                                                        if (
                                                                            value.length ==
                                                                            10
                                                                        ) {
                                                                            // self.setState(
                                                                            //     {
                                                                            //         otpSent: true,
                                                                            //         isVerified: false,
                                                                            //     }
                                                                            // );
                                                                            return Promise.resolve();

                                                                            // let result = await axios
                                                                            //     .post(
                                                                            //         `${suchazBaseUrl}/auth/resendCode`,
                                                                            //         {
                                                                            //             country_code:
                                                                            //                 '+91',
                                                                            //             phone: value,
                                                                            //         }
                                                                            //     )
                                                                            //     .then(
                                                                            //         (
                                                                            //             res
                                                                            //         ) => {
                                                                            //             return res.data;
                                                                            //         }
                                                                            //     )
                                                                            //     .catch(
                                                                            //         (
                                                                            //             error
                                                                            //         ) => {
                                                                            //             if (
                                                                            //                 error.response
                                                                            //             ) {
                                                                            //                 return error
                                                                            //                     .response
                                                                            //                     .data;
                                                                            //             }
                                                                            //         }
                                                                            //     );
                                                                            // if (
                                                                            //     result
                                                                            // ) {
                                                                            //     self.setState({ otpSent: true, isVerified: false });
                                                                            //     return Promise.resolve();
                                                                            // }
                                                                        } else {
                                                                            return Promise.reject(
                                                                                'Invalid Contact No.'
                                                                            );
                                                                        }
                                                                    }
                                                                },
                                                            }),
                                                        ]}>
                                                        {isVerified ? (
                                                            <Input
                                                                placeholder="Contact No."
                                                                type="number"
                                                                value={
                                                                    this.state
                                                                        .contact_no
                                                                }
                                                                maxLength="10"
                                                                disabled
                                                            />
                                                        ) : (
                                                            <Input
                                                                placeholder="Contact No."
                                                                type="number"
                                                                value={
                                                                    this.state
                                                                        .contact_no
                                                                }
                                                                onChange={this.handleContactChange.bind(
                                                                    this
                                                                )}
                                                                maxLength="10"
                                                            />
                                                        )}
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
                                                            Re-send Verification
                                                            Code
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
                                                            label="Verification Code"
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
                                        <div className="form-group">
                                            <Form.Item
                                                label="Email"
                                                name="email"
                                                rules={[
                                                    {
                                                        type: 'email',
                                                        required: true,
                                                        message:
                                                            'Enter an email',
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
                                                                var re = /\S+@\S+\.\S+/;
                                                                let isEmail = re.test(
                                                                    value
                                                                );
                                                                if (isEmail) {
                                                                    let result = await axios
                                                                        .post(
                                                                            `${suchazBaseUrl}/auth/checkEmail`,
                                                                            {
                                                                                email: value,
                                                                            }
                                                                        )
                                                                        .then(
                                                                            (
                                                                                res
                                                                            ) => {
                                                                                return res.data;
                                                                            }
                                                                        )
                                                                        .catch(
                                                                            (
                                                                                error
                                                                            ) => {
                                                                                if (
                                                                                    error.response
                                                                                ) {
                                                                                    return error
                                                                                        .response
                                                                                        .data;
                                                                                }
                                                                            }
                                                                        );
                                                                    if (
                                                                        result
                                                                    ) {
                                                                        self.checkUserEmail(
                                                                            result.status,
                                                                            value
                                                                        );
                                                                    }
                                                                    return Promise.resolve();
                                                                }
                                                            }
                                                        },
                                                    }),
                                                ]}>
                                                {auth.isLoggedIn ? (
                                                    <Input
                                                        placeholder="Email"
                                                        type="email"
                                                        initialvalues={email}
                                                        disabled
                                                    />
                                                ) : (
                                                    <Input
                                                        placeholder="Email"
                                                        type="email"
                                                        initialvalues={email}
                                                    />
                                                )}
                                            </Form.Item>
                                        </div>
                                        {!auth.isLoggedIn && showPassword ? (
                                            <React.Fragment>
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Password"
                                                        name="password"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Enter your password',
                                                            },
                                                        ]}>
                                                        <Input
                                                            placeholder="Password"
                                                            type="password"
                                                            onChange={
                                                                this
                                                                    .handlePasswordChange
                                                            }
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className="form-group">
                                                    <button
                                                        onClick={this.onLoginHandle.bind(
                                                            this
                                                        )}
                                                        className="ps-btn ps-btn--md">
                                                        Login
                                                    </button>
                                                </div>
                                            </React.Fragment>
                                        ) : (
                                            ''
                                        )}

                                        {/* <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            type="checkbox"
                                            id="keep-update"
                                        />
                                        <label htmlFor="keep-update">
                                            Keep me up to date on news and
                                            exclusive offers?
                                        </label>
                                    </div>
                                </div> */}
                                        <h3 className="ps-form__heading">
                                            Shipping address
                                        </h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="First Name"
                                                        name="firstName"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Enter your first name',
                                                            },
                                                        ]}>
                                                        <Input
                                                            type="text"
                                                            placeholder="First Name"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Last Name"
                                                        name="lastName"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Enter your last name',
                                                            },
                                                        ]}>
                                                        <Input
                                                            type="text"
                                                            placeholder="Last Name"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="ant-col ant-form-item-label">
                                                <label
                                                    htmlFor="address"
                                                    className="ant-form-item-required"
                                                    title="Recipient Address">
                                                    Enter Recipient's Address
                                                </label>
                                            </div>
                                            <Form.Item
                                                name="address"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            `Enter recipient's address`,
                                                    },
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="Address"
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="form-group">
                                            <Form.Item
                                                name="apartment"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Enter apartment number',
                                                    },
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="Apartment, suite, etc. (optional)"
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <Form.Item
                                                        name="postalCode"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Enter postal code',
                                                            },
                                                            ({
                                                                getFieldValue,
                                                            }) => ({
                                                                async validator(
                                                                    rule,
                                                                    value
                                                                ) {
                                                                    if (
                                                                        typeof value !=
                                                                            'undefined' &&
                                                                        value !=
                                                                            ''
                                                                    ) {
                                                                        if (
                                                                            value.length ==
                                                                            6
                                                                        ) {
                                                                            return await axios
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
                                                                                        return Promise.reject(
                                                                                            'Delivery not avalible on your postal code'
                                                                                        );
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
                                                            type="postalCode"
                                                            placeholder="Postal Code"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <Form.Item
                                                        name="city"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Enter city',
                                                            },
                                                        ]}>
                                                        <Input
                                                            type="city"
                                                            placeholder="City"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <Form.Item
                                                        name="state"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Enter state',
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
                                        {/* <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            type="checkbox"
                                            id="keep-update1"
                                        />
                                        <label htmlFor="keep-update1">
                                            Save this information for next time
                                        </label>
                                    </div>
                                </div> */}
                                        <div className="ps-form__submit">
                                            <Link href="/account/shopping-cart">
                                                <a>
                                                    <i className="icon-arrow-left mr-2"></i>
                                                    Return to shopping cart
                                                </a>
                                            </Link>
                                            <div className="ps-block__footer mt-20 mb-20">
                                                {auth.isLoggedIn ? (
                                                    <button className="ps-btn">
                                                        Continue to shipping
                                                    </button>
                                                ) : (
                                                    <button className="ps-btn">
                                                        Continue to shipping
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                        <div className="ps-form__orders">
                            <h3>Your order</h3>
                            <div className="ps-block--checkout-order">
                                <div className="ps-block__content">
                                    <figure>
                                        <figcaption>
                                            <strong>Product</strong>
                                            <strong>total</strong>
                                        </figcaption>
                                    </figure>
                                    <figure className="ps-block__items">
                                        {cartItems &&
                                            cartItems.map((product) => (
                                                <React.Fragment
                                                    key={product.id}>
                                                    <Link href="/">
                                                        <a>
                                                            <strong>
                                                                {product.title}
                                                                <span>
                                                                    x
                                                                    {
                                                                        product.quantity
                                                                    }
                                                                </span>
                                                            </strong>
                                                            <small>
                                                                ₹
                                                                {product.quantity *
                                                                    product.bestPrice}
                                                            </small>
                                                        </a>
                                                    </Link>
                                                    <CustomizeGift
                                                            product={product}
                                                        />

                                                    {product.gift_wrap_available ==
                                                    'true' ? (
                                                        <div className="form-group">
                                                            <div className="ps-checkbox">
                                                                <input
                                                                    className="form-control"
                                                                    type="checkbox"
                                                                    id={
                                                                        product.id
                                                                    }
                                                                    name="giftWrapSelected"
                                                                    checked={
                                                                        product.giftWrapSelected
                                                                    }
                                                                    onChange={this.setChecked.bind(
                                                                        this,
                                                                        product
                                                                    )}
                                                                />
                                                                <label
                                                                    htmlFor={
                                                                        product.id
                                                                    }>
                                                                    Want to wrap
                                                                    your gift?
                                                                    <br />
                                                                    +additional
                                                                    ₹
                                                                    {
                                                                        product.gift_wrap_price
                                                                    }{' '}
                                                                    wrapping
                                                                    charge
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )}
                                                </React.Fragment>
                                            ))}
                                    </figure>
                                    <figure>
                                        <figcaption>
                                            <strong>Subtotal</strong>
                                            <small>₹{amount}</small>
                                        </figcaption>
                                    </figure>
                                    {giftWrapCharges != 0 ? (
                                        <figure>
                                            <figcaption>
                                                <strong>
                                                    Gift Wrap Charge
                                                </strong>
                                                <small>
                                                    ₹{giftWrapCharges}
                                                </small>
                                            </figcaption>
                                        </figure>
                                    ) : (
                                        ''
                                    )}
                                    <figure className="ps-block__shipping">
                                        <h3>Shipping</h3>
                                        <p>Calculated at next step</p>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth, shippingAddress: state.shippingAddress.address };
};

export default connect(mapStateToProps)(FormCheckoutInformation);
