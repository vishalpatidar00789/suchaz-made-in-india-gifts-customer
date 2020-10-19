import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import CheckoutWrapper from './checkout.style';
import CheckoutForm from './checkout-form';
const Checkout: FC = () => {
    const dispatch = useDispatch();
    const { auth, cart, buynow } = useSelector((state) => state);
    useEffect(() => {
        setTimeout(() => {
            if (buynow.cartItems.length === 0 && cart.cartItems.length === 0) {
                Router.push('/');
            }
        }, 500);
    }, []);
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
        <CheckoutWrapper>
            <div className="container">
                {/* <div className="ps-section__header">
                        <h1>Checkout Information</h1>
                    </div> */}
                <div className="ps-section__content">
                    <CheckoutForm
                        amount={amount}
                        cartTotal={cartTotal}
                        giftWrapCharges={giftWrapCharges}
                        cartItems={cartItems}
                    />
                </div>
            </div>
        </CheckoutWrapper>
    );
};

export default Checkout;
