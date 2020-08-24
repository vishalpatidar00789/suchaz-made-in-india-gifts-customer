import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';
import { redirectCheckoutSuccess } from '../../../store/auth/action';
import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { suchazBaseUrl } from '../../../repositories/SuchazOrderRepository';
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
            Router.push('/');
        }

        return false;
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Coming Soon...',
            description: '',
            duration: 500,
        });
    }

    modalShow(type, msg, desc) {
        notification[type]({
            message: msg,
            description: desc,
            duration: 1,
        });
    }

    handleLoginSubmit = (values) => {
        if (this._isMounted) {
            axios
                .post(`${suchazBaseUrl}/authAdmin/forgot_password`, values)
                .then((res) => {
                    this.modalShow(
                        'success',
                        'Success',
                        res.data.message
                    );
                })
                .catch((error) => {
                    if (error.response.data) {
                        this.modalShow(
                            'error',
                            'Error',
                            error.response.data.message
                        );
                    }
                    // return Promise.reject(
                    //     'Service not avalible on your postal code'
                    // );
                });

            // setTimeout(() => {
            //     Router.push('/');
            // }, 1200);
        }
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={this.handleLoginSubmit.bind(this)}>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Forgot Password</h5>
                                <div className="form-group">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your email!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email address"
                                        />
                                    </Form.Item>
                                </div>

                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Reset Password
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer"></div>
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
export default connect(mapStateToProps)(ForgotPassword);
