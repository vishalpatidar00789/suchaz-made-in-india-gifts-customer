import React, { FC, useState } from 'react';
import ProductHomeWrapper, {
    ProductHomeButtonWrapper,
    ProductHomeContainer,
    ProductHomeContent,
    ProductHomeRating,
    ProductHomeThumbnailContainer,
} from './product-home.style';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import Router from 'next/router';
import { addItem, updateCartSuccess } from 'store/cart/action';
import { isStaticData } from 'utilities/app-settings';
import { addBuyNowItem } from 'store/buynow/action';
import { formatCurrency } from 'utilities/product-helper';
import Link from 'next/link';
import Rating from 'components/rating';
type ProductHomeProps = {
    product: any;
};
const ProductHome: FC<ProductHomeProps> = ({ product }) => {
    const dispatch = useDispatch();
    const { currency } = useSelector((state) => state.setting);
    const [quantity, setQuantity] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    let productBadge = null;
    const isSamePrice = product.bestPrice == product.sellingPrice;
    if (product.badge && product.badge !== null) {
        product.badge.map((badge) => {
            if (badge.type === 'sale') {
                return (productBadge = <div className="ps-product__badge">{badge.value}</div>);
            } else if (badge.type === 'outStock') {
                return (productBadge = <div className="ps-product__badge out-stock">{badge.value}</div>);
            } else {
                return (productBadge = <div className="ps-product__badge hot">{badge.value}</div>);
            }
        });
    }

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        let tempProduct = product;
        tempProduct.quantity = quantity;
        dispatch(addItem(product));
    };

    const handleBuyNow = (e) => {
        e.preventDefault();
        let tempProduct = product;
        tempProduct.quantity = quantity;
        dispatch(addBuyNowItem(product));
        Router.push('/account/checkout');
    };
    return (
        <>
            {loading ? (
                <p>loading</p>
            ) : (
                <ProductHomeWrapper>
                    <ProductHomeThumbnailContainer>
                        <Link href="/product/[pid]" as={`/product/${product.slug}`}>
                            <a>
                                <LazyLoad>
                                    <img
                                        src={isStaticData === false ? product.images[0] : product.thumbnail.url}
                                        alt="MadeInIndiaGifts.in"
                                    />
                                </LazyLoad>
                            </a>
                        </Link>
                        {product.badge ? productBadge : '\u00A0'}
                    </ProductHomeThumbnailContainer>
                    <ProductHomeContainer>
                        <a className="ps-product__vendor">
                            {product.vendor?.shop_name ? product.vendor.shop_name : '\u00A0'}
                        </a>
                        <ProductHomeContent>
                            <p className="ps-product__price">
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
                                    <small>{product.discountRate ? product.discountRate + '% off' : '\u00A0'}</small>
                                ) : (
                                    <small>Best price for you!</small>
                                )}
                            </p>
                            <Link href="/product/[pid]" as={`/product/${product.slug}`}>
                                <a className="ps-product__title">{product.title}</a>
                            </Link>
                            <ProductHomeRating>
                                <Rating rating={product.customerAvgRating} />
                                <span> {product.customerAvgRating}</span>
                            </ProductHomeRating>
                            <ProductHomeButtonWrapper>
                                {product.quantity > 0 ? (
                                    <div className="w-100">
                                        <div className="flexbtn">
                                            <a href="#" onClick={handleAddItemToCart} className="bttn">
                                                Add to Cart
                                            </a>
                                        </div>
                                        <div className="flexbtn dark">
                                            <a href="#" onClick={handleBuyNow} className="bttn-dark">
                                                Buy Now
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flexbtn w-100">
                                        <a href="#" className="bttn-dark">
                                            Coming Soon
                                        </a>
                                    </div>
                                )}
                            </ProductHomeButtonWrapper>
                        </ProductHomeContent>
                    </ProductHomeContainer>
                </ProductHomeWrapper>
            )}
        </>
    );
};
export default ProductHome;
