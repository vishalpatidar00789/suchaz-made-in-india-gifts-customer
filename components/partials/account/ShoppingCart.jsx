import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input } from 'antd';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
    giftWrapSelected
} from '../../../store/cart/action';

import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    componentDidMount() {
        this.props.dispatch(getCart());
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
    }

    setChecked(product){
        this.props.dispatch(giftWrapSelected(product));
    }

    handleRemoveCartItem = (product) => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }
        return (
            <div className="ps-section--shopping ps-shopping-cart">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className="ps-section__content">
                        <div className="table-responsive">
                            <table className="table ps-table--shopping-cart">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
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
                                                            as={`/product/${product.id}`}>
                                                            <a>
                                                                <img
                                                                    src={
                                                                        product
                                                                            .images[0]
                                                                    }
                                                                    alt="MadeInIndiaGifts"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="ps-product__content">
                                                        <Link
                                                            href="/product/[pid]"
                                                            as={`/product/${product.id}`}>
                                                            <a className="ps-product__title">
                                                                {product.title}
                                                            </a>
                                                        </Link>
                                                        <p>
                                                            Sold By:
                                                            <strong>
                                                                {product.vendor
                                                                    ?.shop_name
                                                                    ? ' ' +product
                                                                          .vendor
                                                                          .shop_name
                                                                    : '\u00A0'}
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            {product.gift_wrap_available ==
                                                            'true' ? (
                                                                <div className="form-group">
                                                                    <div className="ps-checkbox">
                                                                        <input
                                                                            className="form-control"
                                                                            type="checkbox"
                                                                            id={product.id}
                                                                            name="giftWrapSelected"
                                                                            checked={product.giftWrapSelected}
                                                                            onChange={this.setChecked.bind(
                                                                                this,
                                                                                product
                                                                            )}
                                                                        />
                                                                        <label htmlFor={product.id}>
                                                                            Want
                                                                            to
                                                                            wrap
                                                                            your
                                                                            gift?
                                                                            <br/>
                                                                            +additional ₹{product.gift_wrap_price} wrapping charge
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                ''
                                                            )}
                                                        </p>
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
        );
    }
}

const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(ShoppingCart);
