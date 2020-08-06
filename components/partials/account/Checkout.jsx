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
        const { auth } = this.props;

        if (auth.isLoggedIn == false) {
            this.props.dispatch(redirectCheckout());
            Router.push('/account/login');
        }

      
    }

    render() {
        const { cart } = this.props;
        const { amount, cartTotal, cartItems, giftWrapCharges } = cart;
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Checkout Information</h1>
                    </div>
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
