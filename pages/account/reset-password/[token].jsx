import React from 'react';
import Router from 'next/router';
import FooterDefault from '../../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../../components/elements/BreadCrumb';
import { Form, Input, notification } from 'antd';
import HeaderMobile from '../../../components/shared/headers/HeaderMobile';
import NavigationList from '../../../components/shared/navigation/NavigationList';
import { connect } from 'react-redux';
import axios from 'axios';
import { suchazBaseUrl } from '../../../repositories/SuchazOrderRepository';
class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValidToken: false,
            message: '',
        };
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }
    
    modalShow(type, msg, desc) {
        notification[type]({
            message: msg,
            description: desc,
            duration: 1,
        });
    }

    componentDidMount() {
        const { token } = this.props.query;
        const { query } = this.props;

        if (token) {
            axios
                .get(`${suchazBaseUrl}/authAdmin/reset/${token}`)
                .then((res) => {
                    // console.log(res.data);
                    if (res.data && res.data.status) {
                        this.setState({ isValidToken: true });
                    }
                })
                .catch((error) => {
                    // console.log(error.response.data);
                    this.setState({
                        isValidToken: false,
                        message: error.response.data.message,
                    });
                });
        }

        // Router.events.on('routeChangeStart', (url) => {
        //     const nextPid = url.split('/').pop();
        //     if (nextPid !== '') {
        //         axios
        //             .get(`${suchazBaseUrl}/authAdmin/reset/${nextPid}`)
        //             .then((res) => {
        //                 console.log(res.data);
        //             })
        //             .catch((error) => {
        //                 console.log(error.response.data);
        //             });
        //     }
        // });
    }

    handleLoginSubmit(values) {
        const { token } = this.props.query;
        values.token = token;
        axios
            .post(`${suchazBaseUrl}/authAdmin/password_set`, values)
            .then((res) => {
                this.modalShow('success', 'Success', res.data.message);
                // return Promise.resolve();
                setTimeout(()=> {
                    Router.push('/account/login');
                });
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

    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Reset Password',
            },
        ];

        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <div className="ps-my-account">
                        <div className="container">
                            {!this.state.isValidToken ? (
                                <h3>{this.state.message}</h3>
                            ) : (
                                <Form
                                    className="ps-form--account"
                                    onFinish={this.handleLoginSubmit.bind(
                                        this
                                    )}>
                                    <div className="ps-tab active" id="sign-in">
                                        <div className="ps-form__content">
                                            <h5>Reset Password</h5>
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
                                                <Form.Item
                                                    name="password"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                'Please input your password!',
                                                        },
                                                    ]}>
                                                    <Input
                                                        className="form-control"
                                                        type="password"
                                                        placeholder="Password"
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    name="confirm_password"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                'Please input your confirm password!',
                                                        },
                                                        ({
                                                            getFieldValue,
                                                        }) => ({
                                                            async validator(
                                                                rule,
                                                                value
                                                            ) {
                                                                if (
                                                                    value !=
                                                                        '' &&
                                                                    getFieldValue(
                                                                        'password'
                                                                    ) === value
                                                                ) {
                                                                    return Promise.resolve();
                                                                } else {
                                                                    if (
                                                                        value !=
                                                                        ''
                                                                    ) {
                                                                        return Promise.reject(
                                                                            'The two passwords that you entered do not match!'
                                                                        );
                                                                    }
                                                                }
                                                            },
                                                        }),
                                                    ]}>
                                                    <Input
                                                        className="form-control"
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                    />
                                                </Form.Item>
                                            </div>

                                            <div className="form-group submit">
                                                <button
                                                    type="submit"
                                                    className="ps-btn ps-btn--fullwidth">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                        <div className="ps-form__footer"></div>
                                    </div>
                                </Form>
                            )}
                        </div>
                    </div>
                </div>
                {/* <Newsletters layout="container" /> */}
                <FooterDefault />
            </div>
        );
    }
}

export default connect((state) => state)(ResetPasswordPage);
