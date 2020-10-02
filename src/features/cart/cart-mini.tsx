import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeItem } from 'store/cart/action';
import { isStaticData } from '../../utilities/app-settings';
import CartMiniWrapper, {
    CartMiniIcon,
    CartMiniContainer,
    CartMiniItems,
    CartMiniFooter,
    CartMiniProduct,
    CartMiniProductThumbnail,
    CartMiniProductContent,
    CartMiniRemove,
} from './cart-mini.style';
const CartMini: FC = () => {
    const dispatch = useDispatch();
    const { amount, cartTotal, cartItems } = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(getCart());
    }, []);

    const handleRemoveCartItem = (product) => {
        dispatch(removeItem(product));
    };

    return (
        <CartMiniWrapper>
            <CartMiniIcon href="#">
                <i className="icon-bag2"></i>
                <span>
                    <i>{cartTotal ? cartTotal : 0}</i>
                </span>
            </CartMiniIcon>
            {cartItems && cartItems.length > 0 ? (
                <CartMiniContainer>
                    <CartMiniItems>
                        {cartItems && cartItems.length > 0
                            ? cartItems.map((product) => (
                                  <CartMiniProduct key={product.id}>
                                      <CartMiniProductThumbnail>
                                          <Link href="/product/[pid]" as={`/product/${product.id}`}>
                                              <a>
                                                  <img
                                                      src={
                                                          isStaticData === false
                                                              ? product.images[0]
                                                              : product.thumbnail.url
                                                      }
                                                      alt="MadeInIndiaGifts.in"
                                                  />
                                              </a>
                                          </Link>
                                      </CartMiniProductThumbnail>
                                      <CartMiniProductContent>
                                          <CartMiniRemove onClick={() => handleRemoveCartItem(product)}>
                                              <i className="icon-cross"></i>
                                          </CartMiniRemove>
                                          <Link href="/product/[pid]" as={`/product/${product.id}`}>
                                              <a className="ps-product__title">{product.title}</a>
                                          </Link>
                                          <p>
                                              <strong>Sold by:</strong>
                                              {product.vendor?.shop_name ? ' ' + product.vendor.shop_name : '\u00A0'}
                                          </p>
                                          <small>
                                              {product.quantity} x ₹{product.bestPrice}
                                          </small>
                                      </CartMiniProductContent>
                                  </CartMiniProduct>
                              ))
                            : ''}
                    </CartMiniItems>
                    <CartMiniFooter>
                        <h3>
                            Sub Total:
                            <strong>₹{amount ? amount : 0}</strong>
                        </h3>
                        <figure>
                            <Link href="/account/shopping-cart">
                                <a className="ps-btn">View Cart</a>
                            </Link>
                            <Link href="/account/checkout">
                                <a className="ps-btn">Checkout</a>
                            </Link>
                        </figure>
                    </CartMiniFooter>
                </CartMiniContainer>
            ) : (
                <CartMiniContainer>
                    <CartMiniItems>
                        <span>No products in cart</span>
                    </CartMiniItems>
                </CartMiniContainer>
            )}
        </CartMiniWrapper>
    );
};

export default CartMini;
