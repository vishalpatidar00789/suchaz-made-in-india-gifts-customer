import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactus } from 'store/auth/action';
import ContactFormWrapper from './contact-form.style';
import { Form, Input } from 'antd';
const { TextArea } = Input;
const ContactForm: FC = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(contactus(values));
    };

    return (
        <ContactFormWrapper>
            <div className="container">
                <Form onFinish={handleSubmit}>
                    <h3>Get In Touch</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <Form.Item
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name!',
                                        },
                                    ]}>
                                    <Input type="text" placeholder="Name" />
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
                                            message: 'Please input your email!',
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
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            max: 10,
                                            message: 'Please input your phone number!',
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
                                    <Input placeholder="Phone Number" type="number" maxLength={10} />
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
                                            message: 'Please input your subject!',
                                        },
                                    ]}>
                                    <Input type="text" placeholder="Subject" />
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
                                            message: 'Please input your subject!',
                                        },
                                    ]}>
                                    <TextArea placeholder="Messsage" />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="form-group submit">
                        <button type="submit" className="ps-btn">
                            Send message
                        </button>
                    </div>
                </Form>
            </div>
        </ContactFormWrapper>
    );
};

export default ContactForm;
