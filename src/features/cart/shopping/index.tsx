import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemQty, getCart, giftWrapSelected, increaseItemQty, removeItem } from 'store/cart/action';
import { isStaticData } from 'utilities/app-settings';
import ShoppingCartWrapper, { ShoppingCartSection, ShoppingCartSectionFooter } from './shopping-cart.style';
import Router from 'next/router';
import CustomizeGift from 'features/gift';
const ShoppingCart: FC = () => {
    const dispatch = useDispatch();
    const { amount, cartItems } = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(getCart());
    }, []);

    useEffect(() => {
        if (cartItems.length === 0) {
            Router.push('/');
        }
    }, [cartItems]);

    const handleIncreaseItemQty = (product) => {
        dispatch(increaseItemQty(product));
    };

    const handleDecreaseItemQty = (product) => {
        if (product.quantity == 1) {
            dispatch(removeItem(product));
        } else {
            dispatch(decreaseItemQty(product));
        }
    };

    const setChecked = (product) => {
        dispatch(giftWrapSelected(product));
    };

    const handleRemoveCartItem = (product) => {
        dispatch(removeItem(product));
    };

    let currentCartItems = [];
    if (cartItems && cartItems.length > 0) {
        currentCartItems = cartItems;
    }

    return (
        <ShoppingCartWrapper>
            <div className="container">
                {/* <div className="ps-section__header">
                            <h1>Shopping Cart</h1>
                        </div> */}

                <ShoppingCartSection>
                    <table className="table ps-table--shopping-cart">
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
                                        <div className="ps-product--cart">
                                            <div className="ps-product__thumbnail">
                                                <Link href="/product/[pid]" as={`/product/${product.slug}`}>
                                                    <a>
                                                        <img src={product.images[0]} alt="MadeInIndiaGifts.in" />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="ps-product__content">
                                                <Link href="/product/[pid]" as={`/product/${product.slug}`}>
                                                    <a className="ps-product__title">{product.title}</a>
                                                </Link>
                                                <p>
                                                    Sold By:
                                                    <strong>
                                                        {product.vendor?.shop_name
                                                            ? ' ' + product.vendor.shop_name
                                                            : '\u00A0'}
                                                    </strong>
                                                </p>

                                                <CustomizeGift product={product} />

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
                                                                +additional ₹{product.gift_wrap_price} wrapping charge
                                                            </label>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="price">₹{product.bestPrice}</td>
                                    <td>
                                        <div className="form-group--number">
                                            <button className="up" onClick={() => handleIncreaseItemQty(product)}>
                                                +
                                            </button>
                                            <button className="down" onClick={() => handleDecreaseItemQty(product)}>
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
                                    <td>₹{product.quantity * product.bestPrice}</td>
                                    <td>
                                        <a href="#" onClick={() => handleRemoveCartItem(product)}>
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
                                <div className="ps-product--cart-mobile" key={product.id}>
                                    <div className="ps-product__thumbnail">
                                        <Link href="/product/[pid]" as={`/product/${product.slug}`}>
                                            <a>
                                                <img src={product.images[0]} alt="MadeInIndiaGifts.in" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="ps-product__content">
                                        <a className="ps-product__remove" onClick={() => handleRemoveCartItem(product)}>
                                            <i className="icon-cross"></i>
                                        </a>
                                        <Link href="/product/[pid]" as={`/product/${product.slug}`}>
                                            <a className="ps-product__title">{product.title}</a>
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
                                                        +additional ₹{product.gift_wrap_price} wrapping charge
                                                    </label>
                                                </div>
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                        <p>
                                            <strong>Sold by:</strong>
                                            {product.vendor?.shop_name ? ' ' + product.vendor.shop_name : '\u00A0'}
                                        </p>
                                        <small>
                                            <div className="form-group--number w-50">
                                                <button className="up" onClick={() => handleIncreaseItemQty(product)}>
                                                    +
                                                </button>
                                                <button className="down" onClick={() => handleDecreaseItemQty(product)}>
                                                    -
                                                </button>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="1"
                                                    value={product.quantity}
                                                    readOnly={true}
                                                />
                                            </div>{' '}
                                            x ₹{product.bestPrice} = ₹{product.quantity * product.bestPrice}
                                        </small>
                                        <CustomizeGift product={product} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ps-section__cart-actions">
                        <Link href="/gifts">
                            <a>
                                <i className="icon-arrow-left mr-2"></i>
                                Back to Shop
                            </a>
                        </Link>
                    </div>
                </ShoppingCartSection>
                <ShoppingCartSectionFooter>
                    <div className="row justify-content-end">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block--shopping-total">
                                <div className="ps-block__header">
                                    <p>
                                        Subtotal <span> ₹{amount}</span>
                                    </p>
                                </div>
                                <div className="ps-block__content">
                                    <h3>
                                        Total <span>₹{amount}</span>
                                    </h3>
                                </div>
                            </div>
                            <Link href="/account/checkout">
                                <a className="ps-btn ps-btn--fullwidth">Proceed to checkout</a>
                            </Link>
                        </div>
                    </div>
                </ShoppingCartSectionFooter>
            </div>
        </ShoppingCartWrapper>
    );
};

export default ShoppingCart;
