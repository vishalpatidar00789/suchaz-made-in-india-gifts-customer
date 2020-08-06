import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter, Router } from 'next/router';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import axios from 'axios';
import post from '../../pages/utils';
import { connect, useDispatch } from 'react-redux';
import { updateCartSuccess } from '../../store/cart/action';

class ThankYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const emptyCart = {
            cartItems: [],
            amount: 0,
            cartTotal: 0,
            shippingCharges: 0,
            gst: 0,
        };
        setTimeout(() => {
            this.props.dispatch(updateCartSuccess(emptyCart));
        }, 200);
     
        if (typeof window !== 'undefined') {
            history.pushState(null, document.title, location.href);
            window.addEventListener('popstate', function (event) {
                history.pushState(null, document.title, location.href);
            });
        }
    }

    async handleRetryPlaceOrder(orderId) {
        const { auth } = this.props;

        const { authUser } = auth;
    
        const authorization_prefix = 'Bearer ';
        const token = authUser.token;
    
        const headers = {
            Authorization: authorization_prefix + token,
        };
    
        const reponse = await axios
            .post(
                'https://suchaz.com/apiv2/admin/order/paytmRetryChecksum',
                { orderId: orderId },
                {
                    headers: headers,
                }
            )
            .then((res) => {
                return res.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
    
        if (reponse.status == true) {
            const processParam = reponse.data;
            let details = {
                action: 'https://securegw-stage.paytm.in/order/process',
                params: processParam,
            };
            post(details);
        }
    }

    
    render() {

        const router = this.props.router;
        const { orderid } = router.query;
        const { status } = router.query;
        const { msg } = router.query;
        let title = 'Thank You!';
        let message = 'Your order is successfully placed!';
        if (status == 'TXN_FAILURE') {
            title = 'Sorry!';
            message = msg;
        } else if (status == 'TXN_SUCCESS') {
            title = 'Thank You!';
            message = 'Your order is successfully placed!';
        }

        return (
            <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="jumbotron text-center bg-white">
                <h1 className="display-3">{title}</h1>
                {orderid ? (
                    <div>
                        <h4>
                            <strong>{message}</strong>
                        </h4>
                        <h5>
                            <strong>Order ID : {orderid}</strong>
                        </h5>
                    </div>
                ) : (
                    <h4>
                        <strong>{message}</strong>
                    </h4>
                )}
                <p className="lead">
                    <strong>Please check your email</strong> for further
                    instructions.
                </p>
                {status == 'TXN_FAILURE' ? (
                    <p>
                        <a
                            onClick={this.handleRetryPlaceOrder.bind(this, orderid)
                            }
                            className="ps-btn ps-btn--sm text-white"
                            href="#"
                            role="button">
                            Try again
                        </a>
                    </p>
                ) : (
                    ''
                )}
                <hr />
                <p className="lead">
                    <Link href="/">
                        <a className="ps-btn text-white" href="#" role="button">
                            Continue shopping!
                        </a>
                    </Link>
                </p>
            </div>
     
            <FooterDefault />
        </div>
        );
    }

}
const mapStateToProps = (state) => {
    return state;
};

export default withRouter(connect(mapStateToProps)(ThankYou));
