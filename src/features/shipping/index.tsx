import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import ShippingWrapper, { ShippingBlock, ShippingOrder } from './shipping.style';
import { getCart, giftWrapSelected } from 'store/cart/action';
import { getBuyNow } from 'store/buynow/action';
import axios from 'axios';
import { customizationEmpty } from 'store/customization/action';
import post from 'utilities/utils';
import Link from 'next/link';
const Shipping: FC = () => {
    const dispatch = useDispatch();
    const { auth, cart, buynow, customization } = useSelector((state) => state);
    const { address } = useSelector((state) => state.shippingAddress);

    const shippingAddress = address;
    useEffect(() => {
        dispatch(getCart());
        dispatch(getBuyNow());
        setTimeout(() => {
            if (cart.cartItems.length === 0 && buynow.cartItems.length === 0) {
                Router.push('/');
            }
        }, 200);
    }, []);

    const handlePlaceOrder = async (auth, cartOrder, shippingAddress) => {
        cartOrder = cart;
        cartOrder = buynow.cartItems.length ? buynow : cartOrder;
        let amount = cartOrder.amount;
        let cartTotal = cartOrder.cartTotal;
        let cartItems = cartOrder.cartItems;
        let giftWrapCharges = cartOrder.giftWrapCharges;
        let shippingCharges = cartOrder.shippingCharges;
        if (buynow.cartItems.length > 0) {
            amount = buynow.amount;
            cartTotal = buynow.cartTotal;
            cartItems = buynow.cartItems;
            giftWrapCharges = buynow.giftWrapCharges;
            shippingCharges = buynow.shippingCharges;
        }

        const { authUser } = auth;
        let totalAmount = totalCharge(amount, shippingCharges, giftWrapCharges);
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
            let totalItemshippingCharge = parseFloat(item.shippingCharge) * parseFloat(item.quantity);
            let totalItemAmount = parseFloat(item.bestPrice) * parseFloat(item.quantity);
            let gst = totalItemAmount - totalItemAmount / parseFloat('1.' + item.gst);

            let customizationUrl = customization.imagesUrl.filter((url) => {
                return url.productId == item.id;
            })[0];
            return {
                productId: item.id,
                quantity: item.quantity,
                vendorId: item.vendorId,
                lineGiftWrapChargesTotal: '0',
                lineTotal: item.bestPrice,
                giftWrapCharges: item.giftWrapSelected ? item.giftWrapCharges : 0,
                giftWrapSelected: item.giftWrapSelected,
                gst: gst.toFixed(2),
                shippingCharges: totalItemshippingCharge.toFixed(2),
                customize_selected: customizationUrl ? true : false,
                customize_text: customization.text ? customization.text : '',
                customize_images: customizationUrl ? customizationUrl.urls : [],
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
        const authorization_prefix = 'Bearer ';
        let token = authUser.token ? authUser.token : '';

        if (auth.isLoggedIn === false) {
            let name = shippingAddress.firstName + ' ' + shippingAddress.lastName;
            let email = shippingAddress.email;
            let randomPass = generateP();

            const reponse = await axios
                .post(`${process.env.API_URL}/auth/register`, {
                    name: name,
                    email: email,
                    password: randomPass,
                })
                .then((res) => {
                    return res.data;
                })
                .catch((error) => {
                    return error.response.data;
                });
            if (reponse && reponse.status == true) {
                token = reponse.token;
            }
        }

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

        const headers = {
            Authorization: authorization_prefix + token,
        };

        // console.log(formData);

        const reponse = await axios
            .post(`${process.env.API_URL}/order/placeorder`, formData, {
                headers: headers,
            })
            .then((res) => {
                return res.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));

        if (reponse.status == true) {
            dispatch(customizationEmpty());
            const processParam = reponse.data;

            console.log('process params :: ');
            console.log(processParam);
            let details = {
                action: `${process.env.PAYTM_URL}`,
                params: processParam,
            };
            post(details);
        }
    };

    const generateP = () => {
        var pass = '';
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
        let i;
        for (i = 1; i <= 8; i++) {
            var char = Math.floor(Math.random() * str.length + 1);

            pass += str.charAt(char);
        }

        return pass;
    };

    const totalShippingCharge = (cartItems) => {
        let totalShippingCharge = 0.0;
        if (cartItems) {
            cartItems.map((product) => {
                const productShippingCharge = parseFloat(product.shippingCharge) * product.quantity;
                totalShippingCharge = totalShippingCharge + productShippingCharge;
            });
        }
        return totalShippingCharge.toFixed(2);
    };

    const totalCharge = (amount, shippingCharges, giftWrapCharges) => {
        const totalAmount =
            parseFloat(amount) + (isNaN(shippingCharges) ? 0 : shippingCharges) + parseFloat(giftWrapCharges);
        return totalAmount.toFixed(2);
    };

    const setChecked = (product) => {
        dispatch(giftWrapSelected(product));
    };

    let amount = cart.amount;
    let cartTotal = cart.cartTotal;
    let cartItems = cart.cartItems;
    let giftWrapCharges = cart.giftWrapCharges;
    let shippingCharges = cart.shippingCharges;
    let gst = cart.gst;
    if (buynow.cartItems.length > 0) {
        amount = buynow.amount;
        cartTotal = buynow.cartTotal;
        cartItems = buynow.cartItems;
        giftWrapCharges = buynow.giftWrapCharges;
        shippingCharges = buynow.shippingCharges;
        gst = buynow.gst;
    }

    return (
        <ShippingWrapper>
            <div className="container">
                {/* <div className="ps-section__header">
                        <h1>Shipping Information</h1>
                    </div> */}
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <ShippingBlock>
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
                                            {shippingAddress.apartment} {shippingAddress.address},{' '}
                                            {shippingAddress.city}, {shippingAddress.state} -{' '}
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
                                    <div className="pr-0 pt-20 pb-20 col-xl-6 col-lg-6 col-md-6 col-sm-12 text-right">
                                        <a
                                            onClick={() => handlePlaceOrder(auth, cart, shippingAddress)}
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
                            </ShippingBlock>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                            <ShippingOrder>
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
                                                    <React.Fragment key={product.slug}>
                                                        <Link href="/">
                                                            <a>
                                                                <strong>
                                                                    {product.title}
                                                                    <span>x{product.quantity}</span>
                                                                </strong>
                                                                <small>₹{product.quantity * product.bestPrice}</small>
                                                            </a>
                                                        </Link>
                                                        {product.gift_wrap_available == 'true' ? (
                                                            <div className="form-group">
                                                                <div className="ps-checkbox">
                                                                    <input
                                                                        className="form-control"
                                                                        type="checkbox"
                                                                        id={product.id}
                                                                        name="giftWrapSelected"
                                                                        checked={product.giftWrapSelected}
                                                                        onChange={() => setChecked(product)}
                                                                    />
                                                                    <label htmlFor={product.id}>
                                                                        Want to wrap your gift?
                                                                        <br />
                                                                        +additional ₹{product.gift_wrap_price} wrapping
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
                                                    {!isNaN(parseFloat(totalShippingCharge(cartItems))) ? (
                                                        <span>₹{shippingCharges}</span>
                                                    ) : (
                                                        <span>Free</span>
                                                    )}
                                                </small>
                                            </figcaption>
                                        </figure>
                                        {giftWrapCharges != 0 ? (
                                            <figure>
                                                <figcaption>
                                                    <strong>Gift Wrap Charge</strong>
                                                    <small>₹{giftWrapCharges}</small>
                                                </figcaption>
                                            </figure>
                                        ) : (
                                            ''
                                        )}
                                        <figure className="ps-block__total">
                                            <h3>
                                                Total
                                                <strong>
                                                    ₹{totalCharge(amount, shippingCharges, giftWrapCharges)}
                                                </strong>
                                            </h3>
                                        </figure>
                                    </div>
                                </div>
                            </ShippingOrder>
                        </div>
                    </div>
                </div>
            </div>
        </ShippingWrapper>
    );
};

export default Shipping;
