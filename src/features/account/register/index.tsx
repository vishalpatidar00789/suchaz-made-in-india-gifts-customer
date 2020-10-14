import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'store/auth/action';
import { Form, Input } from 'antd';
import RegisterWrapper from './register.style';
import Link from 'next/link';
const Register: FC = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(register(values));
        //Router.push('/account/login');
    };

    return (
        <RegisterWrapper>
            <div className="container">
                <Form className="ps-form--account" onFinish={handleSubmit}>
                    <ul className="ps-tab-list">
                        <li>
                            <Link href="/account/login">
                                <a>Login</a>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="/account/register">
                                <a>Register</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="ps-tab active" id="register">
                        <div className="ps-form__content">
                            <h5>Register An Account</h5>
                            <div className="form-group">
                                <Form.Item
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name!',
                                        },
                                    ]}>
                                    <Input className="form-control" type="text" placeholder="Name" />
                                </Form.Item>
                            </div>
                            <div className="form-group">
                                <Form.Item
                                    name="phone_number"
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
                                    <Input className="form-control" type="number" placeholder="Phone Number" />
                                </Form.Item>
                            </div>
                            <div className="form-group">
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}>
                                    <Input className="form-control" type="email" placeholder="Email address" />
                                </Form.Item>
                            </div>
                            <div className="form-group form-forgot">
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}>
                                    <Input className="form-control" type="password" placeholder="Password..." />
                                </Form.Item>
                            </div>
                            <div className="form-group submit">
                                <button type="submit" className="ps-btn ps-btn--fullwidth">
                                    Register
                                </button>
                            </div>
                        </div>
                        <div className="ps-form__footer">
                            {/* <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a
                                            className="facebook"
                                            href="#"
                                            onClick={(e) =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="google"
                                            href="#"
                                            onClick={(e) =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="twitter"
                                            href="#"
                                            onClick={(e) =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram"
                                            href="#"
                                            onClick={(e) =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul> */}
                        </div>
                    </div>
                </Form>
            </div>
        </RegisterWrapper>
    );
};

export default Register;
