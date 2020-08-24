import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { redirectCheckout } from '../../../store/auth/action';
import FormCheckoutInformation from './modules/FormCheckoutInformation';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { auth, cart, buynow } = this.props;

        setTimeout(() => {
            if (this.props.buynow.cartItems.length === 0 && this.props.cart.cartItems.length === 0) {
                Router.push('/');
            }
        }, 500);
    }

    render() {
        const { cart, buynow } = this.props;
        let amount = cart.amount;
        let cartTotal = cart.cartTotal;
        let cartItems = cart.cartItems;
        let giftWrapCharges = cart.giftWrapCharges;
        if (buynow.cartItems.length > 0) {
            amount = buynow.amount;
            cartTotal = buynow.cartTotal;
            cartItems = buynow.cartItems;
            giftWrapCharges = buynow.giftWrapCharges;
        }
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    {/* <div className="ps-section__header">
                        <h1>Checkout Information</h1>
                    </div> */}
                    <div className="ps-section__content">
                        <FormCheckoutInformation
                            amount={amount}
                            cartTotal={cartTotal}
                            giftWrapCharges={giftWrapCharges}
                            cartItems={cartItems}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(Checkout);
