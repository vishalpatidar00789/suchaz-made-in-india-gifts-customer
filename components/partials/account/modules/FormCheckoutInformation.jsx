import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Form, Input, InputNumber } from 'antd';
import {
    addAddress,
    getAddress,
} from '../../../../store/shippingAddress/action';
import { connect } from 'react-redux';
import { suchazBaseUrl } from '../../../../repositories/SuchazOrderRepository';
import { giftWrapSelected } from '../../../../store/cart/action';
class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }
    formRef = React.createRef();

    componentDidMount() {
        // this.props.dispatch(getAddress());
        // this.interval = setInterval(() => {
        //     this.props.dispatch(getAddress());
        //     if (this.props.shippingAddress) {
        //         this.formRef.current.setFieldsValue(this.props.shippingAddress);
        //     }
        // }, 1000);
        if (this.props.shippingAddress) {
            this.formRef.current.setFieldsValue(this.props.shippingAddress);
        }
        // console.log(this.props);
        // this.props.dispatch(getAddress());
        // if(this.props.shippingAddress){
        //     this.formRef.current.setFieldsValue(this.props.shippingAddress);
        // }
    }

    componentWillReceiveProps(props) {
        setInterval(() => {
            if (props.shippingAddress) {
                //  this.formRef.current.setFieldsValue(props.shippingAddress);
            }
        });
    }

    handleLoginSubmit = (values) => {
        //  console.log(values);
        this.props.dispatch(addAddress(values));
        Router.push('/account/shipping');
    };

    handleChange = (e) => {
        const fname = e.target.name;
        const fvalue = e.target.value;
        this.setState({ fname: fvalue });
    };

    handleNumberChange = (value) => {
        const validateStatus = value.length === 10;
        this.setState({
            validateStatus,
            value,
            errorMsg: isValid ? null : 'Invalid Mobile number',
        });
    };

    setChecked(product) {
        this.props.dispatch(giftWrapSelected(product));
    }

    render() {
        const email = this.state.email;
        const { amount, cartItems, cartTotal, shippingAddress, giftWrapCharges } = this.props;

        return (
            <Form
                ref={this.formRef}
                className="ps-form--checkout"
                onFinish={this.handleLoginSubmit.bind(this)}>
                <div className="ps-form__content">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="ps-form__billing-info">
                                <h3 className="ps-form__heading">
                                    Contact information
                                </h3>
                                <div className="form-group">
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                type: 'email',
                                                required: true,
                                                message: 'Enter an email!',
                                            },
                                        ]}>
                                        <Input
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        label="Contact No."
                                        name="contact_no"
                                        rules={[
                                            {
                                                required: true,
                                                maxLength: 10,
                                                message:
                                                    'Enter an contact no.!',
                                            },
                                            ({ getFieldValue }) => ({
                                                async validator(rule, value) {
                                                    if (
                                                        typeof value !=
                                                            'undefined' &&
                                                        value != ''
                                                    ) {
                                                        if (
                                                            value.length == 10
                                                        ) {
                                                            return Promise.resolve();
                                                        } else {
                                                            return Promise.reject(
                                                                'Invalid Contact No.'
                                                            );
                                                        }
                                                    }
                                                },
                                            }),
                                        ]}>
                                        <Input
                                            placeholder="Contact No."
                                            type="number"
                                            maxLength="10"
                                        />
                                    </Form.Item>
                                </div>
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
                                                            'Enter your first name!',
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
                                                            'Enter your last name!',
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
                                                message: 'Enter an address!',
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
                                                message: 'Enter an Apartment!',
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
                                                name="city"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Enter a city!',
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
                                                            'Enter a state!',
                                                    },
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="State"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <Form.Item
                                                name="postalCode"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Enter a postal code!',
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
                                                                                console.log(
                                                                                    res.data
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
                                                                        'Invalid postal code!'
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
                                    <div className="ps-block__footer">
                                        <button className="ps-btn">
                                            Continue to shipping
                                        </button>
                                    </div>
                                </div>
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
                                                    <React.Fragment key={product.id}>
                                                        <Link
                                                            href="/"
                                                            >
                                                            <a>
                                                                <strong>
                                                                    {
                                                                        product.title
                                                                    }
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
                                                                        Want to
                                                                        wrap
                                                                        your
                                                                        gift?
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
                </div>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth, shippingAddress: state.shippingAddress.address };
};

export default connect(mapStateToProps)(FormCheckoutInformation);
