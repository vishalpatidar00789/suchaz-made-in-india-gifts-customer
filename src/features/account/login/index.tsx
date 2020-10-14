import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'store/auth/action';
import { Form, Input } from 'antd';
import LoginWrapper from './login.style';
import Router from 'next/router';
import Link from 'next/link';
const Login: FC = () => {
    const dispatch = useDispatch();

    const handleLoginSubmit = (values) => {
        dispatch(login(values));

        setTimeout(() => {
            Router.push('/');
        }, 1200);
    };

    return (
        <LoginWrapper>
            <div className="container">
                <Form className="ps-form--account" onFinish={handleLoginSubmit}>
                    <ul className="ps-tab-list">
                        <li className="active">
                            <Link href="/account/login">
                                <a>Login</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/account/register">
                                <a>Register</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="ps-tab active" id="sign-in">
                        <div className="ps-form__content">
                            <h5>Log In Your Account</h5>
                            <div className="form-group">
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}>
                                    <Input className="form-control" type="text" placeholder="Email address" />
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
                            {/* <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="remember-me"
                                            name="remember-me"
                                        />
                                        <label htmlFor="remember-me">
                                            Rememeber me
                                        </label>
                                    </div>
                                </div> */}
                            <div className="form-group submit">
                                <button type="submit" className="ps-btn ps-btn--fullwidth">
                                    Login
                                </button>
                            </div>
                            <div className="form-group text-right">
                                <Link href="/account/forgot-password">
                                    <a className="">Forgot Password?</a>
                                </Link>
                            </div>
                        </div>
                        <div className="ps-form__footer">
                            {/* <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a
                                            className="facebook"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="google"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="twitter"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram"
                                            href="#"
                                            onClick={e =>
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
        </LoginWrapper>
    );
};

export default Login;
