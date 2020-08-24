import React, { Component } from 'react';
import Router from 'next/router';
import { registerVendor, contactus } from '../../../store/auth/action';
import axios from 'axios';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
import { suchazBaseUrl } from '../../../repositories/SuchazOrderRepository';
const { TextArea } = Input;

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (values) => {
        this.props.dispatch(contactus(values));
    }

    returnString(event) {
        return /[a-z]/i.test(event.key);
    };

    render() {
        return (
             <div className="ps-contact-form">
        <div className="container">
                    <Form
                        className="ps-form--contact-us"
                        onFinish={this.handleSubmit.bind(this)}>
                                <h3>Get In Touch</h3>
                                <div className="row">
                                    <div className="col-sm-6">
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
                                
                                    <div className="col-sm-6">
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
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Form.Item
                                                name="phone"
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
                                                name="subject"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your subject!',
                                                    },
                                                ]}>
                                                <Input
                                                    type="text"
                                                    placeholder="Subject"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                               <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Form.Item
                                                name="message"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Please input your subject!',
                                                    },
                                                ]}>
                                                <TextArea
                                                    type="textarea"
                                                    placeholder="Messsage"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group submit">
                                <button  type="submit" className="ps-btn">Send message</button>
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
export default connect(mapStateToProps)(ContactForm);
