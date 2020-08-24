import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import Rating from '../../../Rating';
import { addItem, updateCartSuccess } from '../../../../../store/cart/action';
import { addItemToCompare } from '../../../../../store/compare/action';
import { addItemToWishlist } from '../../../../../store/wishlist/action';
import {
    formatCurrency,
    sliceTitle,
} from '../../../../../utilities/product-helper';
import { addBuyNowItem } from '../../../../../store/buynow/action';
class InformationDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
    }

    handleAddItemToCart = (e) => {
        e.preventDefault();
        const { product } = this.props;
        let tempProduct = product;
        tempProduct.quantity = this.state.quantity;
        this.props.dispatch(addItem(product));
    };

    handleBuyNow = (e) => {
        e.preventDefault();
        const { product } = this.props;
        let tempProduct = product;
        tempProduct.quantity = this.state.quantity;
        this.props.dispatch(addBuyNowItem(product));
        Router.push('/account/checkout');
    };

    handleAddItemToCompare = (e) => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToCompare(product));
    };

    handleAddItemToWishlist = (e) => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToWishlist(product));
    };

    handleIncreaseItemQty = (e) => {
        e.preventDefault();
        this.setState({ quantity: this.state.quantity + 1 });
    };

    handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
    };

    render() {
        const { product, currency } = this.props;
        const isSamePrice = product.bestPrice == product.sellingPrice;
        return (
            <div className="ps-product__info">
                <h1>{product.title}</h1>
                <div className="ps-product__meta">
                    {/* <p>
                        Brand:
                        <Link href="/shop">
                            <a className="ml-2 text-capitalize">
                                {product.vendor?.shop_name
                                    ? product.vendor.shop_name
                                    : '\u00A0'}
                            </a>
                        </Link>
                    </p> */}
                    <div className="ps-product__rating">
                        <Rating rating={product.customerAvgRating} />
                        {' '}
                        <span>
                        {' '} {product.customerAvgRating}
                        </span>
                    </div>
                </div>
                <h4 className="ps-product__price sale">
                    {currency ? currency.symbol : '₹'}
                    {formatCurrency(product.bestPrice)}
                    {!isSamePrice ? (
                        <del className="ml-2">
                            {currency ? currency.symbol : '₹'}
                            {formatCurrency(product.sellingPrice)}
                        </del>
                    ) : (
                        <del className="ml-2"></del>
                    )}
                    {!isSamePrice ? (
                        <small>
                            {product.discountRate
                                ? product.discountRate + '% off'
                                : '\u00A0'}
                        </small>
                    ) : (
                        <small>Best price for you!</small>
                    )}
                </h4>
                {/* {product.is_sale === true ? (
                    <h4 className="ps-product__price sale">
                        <del className="mr-2">
                            {currency ? currency.symbol : '$'}
                            {product.sale_price}
                        </del>
                        {currency ? currency.symbol : '$'}
                        {product.bestPrice}
                    </h4>
                ) : (
                    <h4 className="ps-product__price">
                        {currency ? currency.symbol : '$'}
                        {product.bestPrice}
                    </h4>
                )} */}
                <div className="ps-product__desc">
                    <p>
                        Sold By:
                        {/* <Link href="/gift"> */}
                        <a>
                            <strong>
                                {product.vendor?.shop_name
                                    ? ' ' + product.vendor.shop_name
                                    : '\u00A0'}
                            </strong>
                        </a>
                        {/* </Link> */}
                    </p>
                    <p>{product.description}</p>
                    {/* <ul className="ps-list--dot">
                        <li>Unrestrained and portable active stereo speaker</li>
                        <li> Free from the confines of wires and chords</li>
                        <li> 20 hours of portable capabilities</li>
                        <li>
                            Double-ended Coil Cord with 3.5mm Stereo Plugs
                            Included
                        </li>
                        <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul> */}
                </div>
                {product.quantity > 0 ? (
                    <div className="ps-product__shopping">
                        <figure>
                            <figcaption>Quantity</figcaption>
                            <div className="form-group--number">
                                <button
                                    className="up"
                                    onClick={this.handleIncreaseItemQty.bind(
                                        this
                                    )}>
                                    <i className="fa fa-plus"></i>
                                </button>
                                <button
                                    className="down"
                                    onClick={this.handleDecreaseItemQty.bind(
                                        this
                                    )}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={this.state.quantity}
                                    disabled
                                />
                            </div>
                        </figure>
                        <a
                            className="ps-btn ps-btn--black"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            Add to cart
                        </a>
                        <a
                            className="ps-btn"
                            href="#"
                            onClick={this.handleBuyNow.bind(this)}>
                            Buy Now
                        </a>

                        {/* <div className="ps-product__actions">
                  <a
                      href="#"
                      onClick={this.handleAddItemToWishlist.bind(this)}>
                      <i className="icon-heart"></i>
                  </a>
                  <a
                      href="#"
                      onClick={this.handleAddItemToCompare.bind(this)}>
                      <i className="icon-chart-bars"></i>
                  </a>
              </div> */}
                    </div>
                ) : (
                    <div className="flexbtn w-100">
                        <a href="#" className="ps-btn ps-btn--black text-white">
                            Coming Soon
                        </a>
                    </div>
                )}

                {/* <div className="ps-product__specification">
                    <Link href="/page/blank">
                        <a className="report">Report Abuse</a>
                    </Link>
                    <p>
                        <strong>SKU:</strong> SF1133569600-1
                    </p>
                    <p className="categories">
                        <strong> Categories:</strong>
                        <Link href="/shop">
                            <a>Consumer Electronics</a>
                        </Link>
                        <Link href="/shop">
                            <a>Refrigerator</a>
                        </Link>
                        <Link href="/shop">
                            <a>Babies & Moms</a>
                        </Link>
                    </p>
                    <p className="tags">
                        <strong> Tags</strong>
                        <Link href="/shop">
                            <a>sofa</a>
                        </Link>
                        <Link href="/shop">
                            <a>technologies</a>
                        </Link>
                        <Link href="/shop">
                            <a>wireless</a>
                        </Link>
                    </p>
                </div> */}
                {/* <div className="ps-product__sharing">
                    <a className="facebook" href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="google" href="#">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a className="linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="instagram" href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                </div> */}
                {product.quantity > 0 ? (
                    <div className="ps-product__actions-mobile">
                        <a
                            className="ps-btn ps-btn--black"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            Add to cart
                        </a>
                        <a
                            className="ps-btn"
                            href="#"
                            onClick={this.handleBuyNow.bind(this)}>
                            Buy Now
                        </a>
                    </div>
                ) : (
                    <div className="ps-product__actions-mobile"></div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.setting;
};

export default connect(mapStateToProps)(InformationDefault);
