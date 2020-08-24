import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
    giftWrapSelected,
} from '../../../store/cart/action';
import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';
import CustomizeGift from './CustomizeGift';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    componentDidMount() {
        this.props.dispatch(getCart());
        setTimeout(() => {
            const { cartItems } = this.props;
            if (cartItems.length === 0) {
                Router.push('/');
            }
        }, 200);
    }

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    handleDecreaseItemQty(product) {
        if (product.quantity == 1) {
            this.props.dispatch(removeItem(product));
        } else {
            this.props.dispatch(decreaseItemQty(product));
        }

        setTimeout(() => {
            const { cartItems } = this.props;
            if (cartItems.length === 0) {
                Router.push('/');
            }
        }, 200);
    }

    setChecked(product) {
        this.props.dispatch(giftWrapSelected(product));
    }

    handleRemoveCartItem(product) {
        this.props.dispatch(removeItem(product));

        setTimeout(() => {
            const { cartItems } = this.props;
            if (cartItems.length === 0) {
                Router.push('/');
            }
        }, 200);
    }

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }
        return (
            <React.Fragment>
                <div className="ps-section--shopping ps-shopping-cart">
                    <div className="container">
                        <div className="ps-section__header">
                            <h1>Shopping Cart</h1>
                        </div>
                        <div className="ps-section__content">
                            <table className="table ps-table--shopping-cart-1">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentCartItems.map((product) => (
                                        <tr key={product.id}>
                                            <td>
                                                {/* <ProductCart
                                                    product={product}
                                                /> */}
                                                <div className="ps-product--cart">
                                                    <div className="ps-product__thumbnail">
                                                        <Link
                                                            href="/product/[pid]"
                                                            as={`/product/${product.slug}`}>
                                                            <a>
                                                                <img
                                                                    src={
                                                                        product
                                                                            .images[0]
                                                                    }
                                                                    alt="MadeInIndiaGifts.in"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="ps-product__content">
                                                        <Link
                                                            href="/product/[pid]"
                                                            as={`/product/${product.slug}`}>
                                                            <a className="ps-product__title">
                                                                {product.title}
                                                            </a>
                                                        </Link>
                                                        <p>
                                                            Sold By:
                                                            <strong>
                                                                {product.vendor
                                                                    ?.shop_name
                                                                    ? ' ' +
                                                                      product
                                                                          .vendor
                                                                          .shop_name
                                                                    : '\u00A0'}
                                                            </strong>
                                                        </p>

                                                        <CustomizeGift
                                                            product={product}
                                                        />

                                                        <React.Fragment>
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
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="price">
                                                ₹{product.bestPrice}
                                            </td>
                                            <td>
                                                <div className="form-group--number">
                                                    <button
                                                        className="up"
                                                        onClick={this.handleIncreaseItemQty.bind(
                                                            this,
                                                            product
                                                        )}>
                                                        +
                                                    </button>
                                                    <button
                                                        className="down"
                                                        onClick={this.handleDecreaseItemQty.bind(
                                                            this,
                                                            product
                                                        )}>
                                                        -
                                                    </button>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="1"
                                                        value={product.quantity}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                ₹
                                                {product.quantity *
                                                    product.bestPrice}
                                            </td>
                                            <td>
                                                <a
                                                    href="#"
                                                    onClick={this.handleRemoveCartItem.bind(
                                                        this,
                                                        product
                                                    )}>
                                                    <i className="icon-cross"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="ps-cart--mobile shopping-cart-mobile">
                                <div className="ps-cart__content">
                                    {currentCartItems.map((product) => (
                                        <div
                                            className="ps-product--cart-mobile"
                                            key={product.id}>
                                            <div className="ps-product__thumbnail">
                                                <Link
                                                    href="/product/[pid]"
                                                    as={`/product/${product.slug}`}>
                                                    <a>
                                                        <img
                                                            src={
                                                                product
                                                                    .images[0]
                                                            }
                                                            alt="MadeInIndiaGifts.in"
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="ps-product__content">
                                                <a
                                                    className="ps-product__remove"
                                                    onClick={this.handleRemoveCartItem.bind(
                                                        this,
                                                        product
                                                    )}>
                                                    <i className="icon-cross"></i>
                                                </a>
                                                <Link
                                                    href="/product/[pid]"
                                                    as={`/product/${product.slug}`}>
                                                    <a className="ps-product__title">
                                                        {product.title}
                                                    </a>
                                                </Link>
                                                {product.gift_wrap_available ==
                                                'true' ? (
                                                    <div className="form-group">
                                                        <div className="ps-checkbox">
                                                            <input
                                                                className="form-control"
                                                                type="checkbox"
                                                                id={product.id}
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
                                                                Want to wrap
                                                                your gift?
                                                                <br />
                                                                +additional ₹
                                                                {
                                                                    product.gift_wrap_price
                                                                }{' '}
                                                                wrapping charge
                                                            </label>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    ''
                                                )}
                                                <p>
                                                    <strong>Sold by:</strong>
                                                    {product.vendor?.shop_name
                                                        ? ' ' +
                                                          product.vendor
                                                              .shop_name
                                                        : '\u00A0'}
                                                </p>
                                                <small>
                                                    <div className="form-group--number w-50">
                                                        <button
                                                            className="up"
                                                            onClick={this.handleIncreaseItemQty.bind(
                                                                this,
                                                                product
                                                            )}>
                                                            +
                                                        </button>
                                                        <button
                                                            className="down"
                                                            onClick={this.handleDecreaseItemQty.bind(
                                                                this,
                                                                product
                                                            )}>
                                                            -
                                                        </button>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="1"
                                                            value={
                                                                product.quantity
                                                            }
                                                            readOnly={true}
                                                        />
                                                    </div>{' '}
                                                    x ₹{product.bestPrice} = ₹
                                                    {product.quantity *
                                                        product.bestPrice}
                                                </small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="ps-section__cart-actions">
                                <Link href="/shop">
                                    <a>
                                        <i className="icon-arrow-left mr-2"></i>
                                        Back to Shop
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="ps-section__footer">
                            <div className="row justify-content-end">
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                    <div className="ps-block--shopping-total">
                                        <div className="ps-block__header">
                                            <p>
                                                Subtotal <span> ₹{amount}</span>
                                            </p>
                                        </div>
                                        <div className="ps-block__content">
                                            {/* <ul className="ps-block__product">
                                            {cartItems.length > 0
                                                ? cartItems.map(
                                                      (product, index) => {
                                                          if (index < 3) {
                                                              return (
                                                                  <li
                                                                      key={
                                                                          product.id
                                                                      }>
                                                                      <span className="ps-block__estimate">
                                                                          <Link
                                                                              href="/product/[pid]"
                                                                              as={`/product/${product.id}`}>
                                                                              <a className="ps-product__title">
                                                                                  {
                                                                                      product.title
                                                                                  }
                                                                                  <br />{' '}
                                                                                  x{' '}
                                                                                  {
                                                                                      product.quantity
                                                                                  }
                                                                              </a>
                                                                          </Link>
                                                                      </span>
                                                                  </li>
                                                              );
                                                          }
                                                      }
                                                  )
                                                : ''}
                                        </ul> */}
                                            <h3>
                                                Total <span>₹{amount}</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <Link href="/account/checkout">
                                        <a className="ps-btn ps-btn--fullwidth">
                                            Proceed to checkout
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(ShoppingCart);
