import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCart,
    giftWrapSelected,
    updateCartSuccess,
} from '../../../store/cart/action';
import Router from 'next/router';
import Link from 'next/link';
import { placeOrder } from '../../../store/order/action';
import axios from 'axios';
import post from '../../../pages/utils';

class Shipping extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    async handlePlaceOrder(auth, cart, shippingAddress) {
        const { amount, shippingCharges, giftWrapCharges } = cart;
        const { authUser } = auth;
        let totalAmount = this.totalCharge(
            amount,
            shippingCharges,
            giftWrapCharges
        );
        // Router.push('/account/place-order');
        // this.props.dispatch(placeOrder(this.props));
        // let time = new Date().getTime();
        // let orderId = 'ORDER_ID' + time;
        // let params = {
        //     orderId: orderId,
        //     email: shippingAddress.email,
        //     amount: totalAmount,
        //     phone_number: shippingAddress.contact_no,
        // };

        let products = cart.cartItems.map((item) => {
            let totalItemshippingCharge =
                parseFloat(item.shippingCharge) * parseFloat(item.quantity);
            let totalItemAmount =
                parseFloat(item.bestPrice) * parseFloat(item.quantity);
            let gst =
                parseFloat(totalItemAmount) -
                parseFloat(totalItemAmount) / parseFloat('1.' + item.gst);
            return {
                productId: item.id,
                quantity: item.quantity,
                vendorId: item.vendorId,
                lineGiftWrapChargesTotal: '0',
                lineTotal: item.bestPrice,
                giftWrapCharges: (item.giftWrapSelected) ? item.giftWrapCharges : 0,
                giftWrapSelected: item.giftWrapSelected,
                gst: gst.toFixed(2),
                shippingCharges: totalItemshippingCharge.toFixed(2),
            };
        });

        let shipAdd = {
            recipientFistName: shippingAddress.firstName,
            recipientLastName: shippingAddress.lastName,
            addressLine1: shippingAddress.apartment,
            addressLine2: shippingAddress.address,
            city: shippingAddress.city,
            state: shippingAddress.state,
            pinCode: shippingAddress.postalCode,
        };

        const formData = new FormData();
        formData.append('userEmail', shippingAddress.email);
        formData.append('contact_no', shippingAddress.contact_no);
        formData.append('lineItems[]', JSON.stringify(products));
        formData.append('shippingAddress', JSON.stringify(shipAdd));
        formData.append('giftWrapChargesTotal', parseFloat(giftWrapCharges).toFixed(2));
        formData.append('subTotal', cart.amount);
        formData.append('shippingCharges', cart.shippingCharges);
        formData.append('giftWrapCharges', cart.giftWrapCharges);
        formData.append('totalAmount', totalAmount);
        formData.append('GST', cart.gst);
        formData.append('status', '1');
        formData.append('paymentMethod', 'cod');
        formData.append('createdBy', '5f04c9ebe076ff31968e7b01');
        formData.append('lastUpdatedBy', '5f04c9ebe076ff31968e7b01');

        const authorization_prefix = 'Bearer ';
        const token = authUser.token;

        const headers = {
            Authorization: authorization_prefix + token,
        };

        console.log(formData);

        const reponse = await axios
            .post('https://suchaz.com/apiv2/order/placeorder', formData, {
                headers: headers,
            })
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

    totalShippingCharge(cartItems) {
        let totalShippingCharge = 0.0;
        if (cartItems) {
            cartItems.map((product) => {
                const productShippingCharge =
                    parseFloat(product.shippingCharge) * product.quantity;
                totalShippingCharge =
                    parseFloat(totalShippingCharge) +
                    parseFloat(productShippingCharge);
            });
        }
        return totalShippingCharge.toFixed(2);
    }

    totalCharge(amount, shippingCharges, giftWrapCharges) {
        const totalAmount =
            parseFloat(amount) +
            (isNaN(shippingCharges) ? 0 : shippingCharges) +
            parseFloat(giftWrapCharges);
        return totalAmount.toFixed(2);
    }

    setChecked(product) {
        this.props.dispatch(giftWrapSelected(product));
    }

    render() {
        const { auth, cart, shippingAddress } = this.props;
        const {
            amount,
            cartItems,
            shippingCharges,
            gst,
            giftWrapCharges,
        } = cart;
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Shipping Information</h1>
                    </div>
                    <div className="ps-section__content">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="ps-block--shipping">
                                    <div className="ps-block__panel">
                                        <figure>
                                            <small>Contact</small>
                                            <p>{shippingAddress.email}</p>
                                            <Link href="/account/checkout">
                                                <a>Change</a>
                                            </Link>
                                        </figure>
                                        <figure>
                                            <small>Ship to</small>
                                            <p>
                                                {shippingAddress.apartment}{' '}
                                                {shippingAddress.address},{' '}
                                                {shippingAddress.city},{' '}
                                                {shippingAddress.state} -{' '}
                                                {shippingAddress.postalCode}
                                            </p>
                                            <Link href="/account/checkout">
                                                <a>Change</a>
                                            </Link>
                                        </figure>
                                    </div>
                                    {/* <h4>Shipping Method</h4> */}
                                    {/* <div className="ps-block__panel">
                                        <figure>
                                            <small>
                                                International Shipping
                                            </small>
                                            <strong>
                                                {!isNaN(
                                                    this.totalShippingCharge(
                                                        cartItems
                                                    )
                                                ) ? (
                                                    <span>
                                                        ₹
                                                        {this.totalShippingCharge(
                                                            cartItems
                                                        )}
                                                    </span>
                                                ) : (
                                                    <span>Free</span>
                                                )}
                                            </strong>
                                        </figure>
                                    </div> */}
                                    <div className="ps-block__footer">
                                        <div className="pl-0 pb-10 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <Link href="/account/checkout">
                                                <a>
                                                    <i className="icon-arrow-left mr-2"></i>
                                                    Return to information
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="pr-0 pb-10 col-xl-6 col-lg-6 col-md-6 col-sm-12 text-right">
                                            <a
                                                onClick={this.handlePlaceOrder.bind(
                                                    this,
                                                    auth,
                                                    cart,
                                                    shippingAddress
                                                )}
                                                className="ps-btn text-white">
                                                Place Order
                                            </a>
                                        </div>

                                        {/* <Link href="/account/payment">
                                            <a className="ps-btn">
                                                Continue to payment
                                            </a>
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                                <div className="ps-form__orders">
                                    <div className="ps-block--checkout-order">
                                        <div className="ps-block__content">
                                            <figure>
                                                <figcaption>
                                                    <strong>Product</strong>
                                                    <strong>total</strong>
                                                </figcaption>
                                            </figure>
                                            <figure className="ps-block__items">
                                                {cartItems &&
                                                    cartItems.map((product) => (
                                                        <React.Fragment
                                                            key={product.id}>
                                                            <Link href="/">
                                                                <a>
                                                                    <strong>
                                                                        {
                                                                            product.title
                                                                        }
                                                                        <span>
                                                                            x
                                                                            {
                                                                                product.quantity
                                                                            }
                                                                        </span>
                                                                    </strong>
                                                                    <small>
                                                                        ₹
                                                                        {product.quantity *
                                                                            product.bestPrice}
                                                                    </small>
                                                                </a>
                                                            </Link>
                                                            {product.gift_wrap_available ==
                                                            'true' ? (
                                                                <div className="form-group">
                                                                    <div className="ps-checkbox">
                                                                        <input
                                                                            className="form-control"
                                                                            type="checkbox"
                                                                            id={
                                                                                product.id
                                                                            }
                                                                            name="giftWrapSelected"
                                                                            checked={
                                                                                product.giftWrapSelected
                                                                            }
                                                                            onChange={this.setChecked.bind(
                                                                                this,
                                                                                product
                                                                            )}
                                                                        />
                                                                        <label
                                                                            htmlFor={
                                                                                product.id
                                                                            }>
                                                                            Want
                                                                            to
                                                                            wrap
                                                                            your
                                                                            gift?
                                                                            <br />
                                                                            +additional
                                                                            ₹
                                                                            {
                                                                                product.gift_wrap_price
                                                                            }{' '}
                                                                            wrapping
                                                                            charge
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                ''
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                            </figure>
                                            <figure>
                                                <figcaption>
                                                    <strong>Subtotal</strong>
                                                    <small>₹{amount}</small>
                                                </figcaption>
                                                <figcaption>
                                                    <small
                                                        style={{
                                                            fontSize: 12,
                                                        }}>
                                                        GST of ₹{gst} Inclusive
                                                    </small>
                                                </figcaption>
                                            </figure>
                                            <figure>
                                                <figcaption>
                                                    <strong>Shipping</strong>
                                                    <small>
                                                        {!isNaN(
                                                            this.totalShippingCharge(
                                                                cartItems
                                                            )
                                                        ) ? (
                                                            <span>
                                                                ₹
                                                                {
                                                                    shippingCharges
                                                                }
                                                            </span>
                                                        ) : (
                                                            <span>Free</span>
                                                        )}
                                                    </small>
                                                </figcaption>
                                            </figure>
                                            {giftWrapCharges != 0 ? (
                                                <figure>
                                                    <figcaption>
                                                        <strong>
                                                            Gift Wrap Charge
                                                        </strong>
                                                        <small>
                                                            ₹{giftWrapCharges}
                                                        </small>
                                                    </figcaption>
                                                </figure>
                                            ) : (
                                                ''
                                            )}
                                            <figure className="ps-block__total">
                                                <h3>
                                                    Total
                                                    <strong>
                                                        ₹
                                                        {this.totalCharge(
                                                            amount,
                                                            shippingCharges,
                                                            giftWrapCharges
                                                        )}
                                                    </strong>
                                                </h3>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        cart: state.cart,
        shippingAddress: state.shippingAddress.address,
    };
};
export default connect(mapStateToProps)(Shipping);
