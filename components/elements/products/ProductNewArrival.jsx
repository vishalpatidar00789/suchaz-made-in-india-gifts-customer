import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import { addItemToCompare } from '../../../store/compare/action';
import { addItemToWishlist } from '../../../store/wishlist/action';
import Link from 'next/link';
import { Modal } from 'antd';
import Router from 'next/router';
import ProductDetailQuickView from '../detail/ProductDetailQuickView';
import Rating from '../Rating';
import { baseUrl } from '../../../repositories/Repository';
import { formatCurrency } from '../../../utilities/product-helper';
import { isStaticData } from '../../../utilities/app-settings';
import LazyLoad from 'react-lazyload';
class ProductNewArrival extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuickView: false,
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
        this.props.dispatch(addItem(product));
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

    handleShowQuickView = (e) => {
        e.preventDefault();
        this.setState({ isQuickView: true });
    };

    handleHideQuickView = (e) => {
        e.preventDefault();
        this.setState({ isQuickView: false });
    };

    render() {
        const { product, currency } = this.props;
        let productBadge = null;
        const isSamePrice = product.bestPrice == product.sellingPrice;
        if (product.badge && product.badge !== null) {
            product.badge.map((badge) => {
                if (badge.type === 'sale') {
                    return (productBadge = (
                        <div className="ps-product__badge">{badge.value}</div>
                    ));
                } else if (badge.type === 'outStock') {
                    return (productBadge = (
                        <div className="ps-product__badge out-stock">
                            {badge.value}
                        </div>
                    ));
                } else {
                    return (productBadge = (
                        <div className="ps-product__badge hot">
                            {badge.value}
                        </div>
                    ));
                }
            });
        }
        let thumbnail;
        if (isStaticData === false) {
            thumbnail = product.images[0];
        } else {
            thumbnail = product.images[0];
        }
        return (
            <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a>
                            <LazyLoad>
                                <img src={thumbnail} alt="MadeInIndiaGifts" />
                            </LazyLoad>
                        </a>
                    </Link>
                    {product.badge ? productBadge : '\u00A0'}
                    {/* <ul className="ps-product__actions">
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Read More"
                                onClick={this.handleAddItemToCart.bind(this)}>
                                <i className="icon-bag2"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                                onClick={this.handleShowQuickView.bind(this)}>
                                <i className="icon-eye"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to wishlist"
                                onClick={this.handleAddItemToWishlist.bind(
                                    this
                                )}>
                                <i className="icon-heart"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                                onClick={this.handleAddItemToCompare.bind(
                                    this
                                )}>
                                <i className="icon-chart-bars"></i>
                            </a>
                        </li>
                    </ul> */}
                </div>
                <div className="ps-product__container">
                    <Link href="/shop">
                        <a className="ps-product__vendor">
                            {product.vendor?.shop_name
                                ? product.vendor.shop_name
                                : '\u00A0'}
                        </a>
                    </Link>
                    <div className="ps-product__content">
                        <p className="ps-product__price sale">
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
                        </p>
                        {/* {product.is_sale === true ? (
                            <p className="ps-product__price sale">
                                {currency ? currency.symbol : '₹'}
                                {formatCurrency(product.bestPrice)}
                                <del className="ml-2">
                                    {currency ? currency.symbol : '₹'}
                                    {formatCurrency(product.sellingPrice)}
                                </del>
                                <small>18% off</small>
                            </p>
                        ) : (
                            <p className="ps-product__price">
                                {currency ? currency.symbol : '₹'}
                                {formatCurrency(product.bestPrice)}
                            </p>
                        )} */}
                        <Link
                            href="/product/[pid]"
                            as={`/product/${product.id}`}>
                            <a className="ps-product__title">
                                {product.title}
                            </a>
                        </Link>

                        <div className="ps-product__rating">
                            <Rating rating={product.customerAvgRating} />
                            <span>0</span>
                        </div>
                        <div className="product-buybtn">
                            {/* <div className="btn-group" role="group" aria-label="Basic example" style={{width:'100%'}}>
                                <button type="button" className="btn btn-primary cart-btn" >Add to cart</button>
                                <button type="button" className="btn btn-primary shop-btn"   >    Buy now   </button>
                            </div> */}
                            {product.quantity > 0 ? (
                                <div className="w-100">
                                    <div className="flexbtn">
                                        <a
                                            href="#"
                                            onClick={this.handleAddItemToCart.bind(
                                                this
                                            )}
                                            className="bttn">
                                            Add to Cart
                                        </a>
                                    </div>
                                    <div className="flexbtn dark">
                                        <a
                                            href="#"
                                            onClick={this.handleBuyNow.bind(
                                                this
                                            )}
                                            className="bttn-dark">
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="flexbtn" className="w-100">
                                    <a href="#" className="bttn-dark">
                                        Coming Soon
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* <div
                            className="ps-product__progress-bar ps-progress"
                            data-value={product.inventory}>
                            <div className="ps-progress__value">
                                {(product.depot / product.inventory) * 100 <
                                100 ? (
                                    <span
                                        style={{
                                            width:
                                                (product.depot /
                                                    product.inventory) *
                                                    100 +
                                                '%',
                                        }}></span>
                                ) : (
                                    <span style={{ width: '100%' }}></span>
                                )}
                            </div>
                            {product.inventory - product.depot >= 0 ? (
                                <p>Sold: {product.inventory - product.depot}</p>
                            ) : (
                                <p>Sold: {product.inventory}</p>
                            )}
                        </div> */}
                    </div>
                </div>
                <Modal
                    title={product.title}
                    centered
                    footer={null}
                    width={1024}
                    onCancel={this.handleHideQuickView}
                    visible={this.state.isQuickView}>
                    <ProductDetailQuickView product={product} />
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductNewArrival);
