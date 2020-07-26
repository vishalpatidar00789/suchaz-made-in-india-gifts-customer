import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import FormCheckoutInformation from './modules/FormCheckoutInformation';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        setTimeout(() => {
            const { cartItems } = this.props;
            if (cartItems.length == 0){
                Router.push('/');
            }
        },500);
        
    }

    render() {
        const { amount, cartTotal, cartItems, giftWrapCharges } = this.props;
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

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(Checkout);
