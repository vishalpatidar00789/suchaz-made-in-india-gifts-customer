import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeItem } from 'store/cart/action';
import {
    PanelCartContent,
    PanelCartWrapper,
    PanelCartProduct,
    PanelCartProductThumbnail,
    PanelCartProductContent,
    PanelCartProductRemove,
    PanelCartProductItems,
    PanelCartProductFooter,
} from './panel.style';
import { isStaticData } from '../../../utilities/app-settings';
import Link from 'next/link';

const PanelCart: FC = () => {
    const dispatch = useDispatch();
    const { amount, cartItems } = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(getCart());
    }, []);

    const handleRemoveCartItem = (product) => {
        dispatch(removeItem(product));
    };

    return (
        <PanelCartWrapper>
            <PanelCartContent>
                {cartItems && cartItems.length > 0 ? (
                    cartItems.map((product) => (
                        <PanelCartProduct key={product.id}>
                            <PanelCartProductThumbnail>
                                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                                    <a>
                                        <img
                                            src={isStaticData ? product.thumbnail.url : product.images[0]}
                                            alt="MadeInIndiaGifts.in"
                                        />
                                    </a>
                                </Link>
                            </PanelCartProductThumbnail>
                            <PanelCartProductContent>
                                <PanelCartProductRemove onClick={() => handleRemoveCartItem(product)}>
                                    <i className="icon-cross"></i>
                                </PanelCartProductRemove>
                                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                                    <a>{product.title}</a>
                                </Link>
                                <p>
                                    <strong>Sold by:</strong>
                                    {product.vendor?.shop_name ? ' ' + product.vendor.shop_name : '\u00A0'}
                                </p>
                                <small>
                                    {product.quantity} x ₹{product.bestPrice}
                                </small>
                            </PanelCartProductContent>
                        </PanelCartProduct>
                    ))
                ) : (
                    <PanelCartProductItems>
                        <span>No products in cart</span>
                    </PanelCartProductItems>
                )}
            </PanelCartContent>
            {cartItems && cartItems.length > 0 ? (
                <PanelCartProductFooter>
                    <h3>
                        Sub Total:<strong>₹{amount}</strong>
                    </h3>
                    <figure>
                        <Link href="/account/shopping-cart">
                            <a className="ps-btn">View Cart</a>
                        </Link>
                        <Link href="/account/checkout">
                            <a className="ps-btn">Checkout</a>
                        </Link>
                    </figure>
                </PanelCartProductFooter>
            ) : (
                <PanelCartProductFooter>
                    <Link href="/shop">
                        <a className="ps-btn ps-btn--fullwidth">Shop now</a>
                    </Link>
                </PanelCartProductFooter>
            )}
        </PanelCartWrapper>
    );
};
export default PanelCart;
