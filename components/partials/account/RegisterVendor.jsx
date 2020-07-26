import React, { Component } from 'react';
import Router from 'next/router';
import { registerVendor } from '../../../store/auth/action';
import axios from 'axios';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
import { suchazBaseUrl } from '../../../repositories/SuchazOrderRepository';

class RegisterVendor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (values) => {
        this.props.dispatch(registerVendor(values));
    };

    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
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
                                                            'Please input your name!',
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
                                                onkeypress="return /[a-z]/i.test(event.key)"
                                                name="shop_name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your shop name!',
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
                                                            'Please input your email!',
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
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Form.Item
                                                name="contact_number"
                                                rules={[
                                                    {
                                                        required: true,
                                                        maxLength: 10,
                                                        message:
                                                            'Please input your phone number!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        async validator(
                                                            rule,
                                                            value
                                                        ) {
                                                            if (
                                                                typeof value !=
                                                                'undefined' && value != ''
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
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Form.Item
                                                name="gst_no"
                                                rules={[
                                                    {
                                                        message:
                                                            'Please input your GST number!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        async validator(
                                                            rule,
                                                            value
                                                        ) {
                                                            if (
                                                                typeof value !=
                                                                'undefined' && value != ''
                                                            ) {
                                                                let regex = /[0-9]{2}[A-Z]{5}[0-9]{4}[1-9A-Z]{1}[1-9A-Z]{1}[1-9A-Z]{1}[1-9A-Z]{1}$/.test(
                                                                    value
                                                                );
                                                                if (regex) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject(
                                                                    'Invalid GST number!'
                                                                );
                                                            }
                                                        },
                                                    }),
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="GST Number"
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
                                                            'Please input your address!',
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
                                                name="city"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your city!',
                                                    },
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="City"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Form.Item
                                                name="state"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your state!',
                                                    },
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="State"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Form.Item
                                                name="postalcode"
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
                                                                'undefined' && value != ''
                                                            ) {

                                                                if(value.length == 6){
                                                                    return Promise.resolve();
                                                                
                                                                // return await axios
                                                                //     .post(
                                                                //         `${suchazBaseUrl}/pincode/check`,
                                                                //         {
                                                                //             pincode: value,
                                                                //         }
                                                                //     )
                                                                //     .then(
                                                                //         (
                                                                //             res
                                                                //         ) => {
                                                                //             console.log(
                                                                //                 res.data
                                                                //             );
                                                                //             return Promise.resolve();
                                                                //         }
                                                                //     )
                                                                //     .catch(
                                                                //         (
                                                                //             error
                                                                //         ) => {
                                                                //             return Promise.reject(
                                                                //                 'Service not avalible on your postal code'
                                                                //             );
                                                                //         }
                                                                //     );
                                                                }else{
                                                                    return Promise.reject(
                                                                        'Invalid postal code!'
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
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Form.Item
                                                name="description"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Please input your description!',
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
