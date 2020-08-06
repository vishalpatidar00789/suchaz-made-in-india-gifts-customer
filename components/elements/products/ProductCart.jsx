import React from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { isStaticData } from '../../../utilities/app-settings';
import { baseUrl } from '../../../repositories/Repository';
const ProductCart = ({ product }) => {
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                <Link
                    href="/product/[pid]"
                    as={`/product/${product.productId}`}>
                    <a>
                        <LazyLoad>
                            <img
                                src={
                                    isStaticData === false
                                        ? product.vendorItem.images[0]
                                        : product.thumbnail.url
                                }
                                alt="MadeInIndiaGifts.in"
                            />
                        </LazyLoad>
                    </a>
                </Link>
            </div>
            <div className="ps-product__content">
                <React.Fragment>
                    <Link
                        href="/product/[pid]"
                        as={`/product/${product.productId}`}>
                        <a className="ps-product__title">
                            {product.vendorItem.title}
                        </a>
                    </Link>
                    {product.giftWrapCharges > 0 ? (
                        <small>
                         <br/>   +additional ₹{product.giftWrapCharges} wrapping
                            charge
                        </small>
                    ) : (
                        ''
                    )}
                </React.Fragment>
            </div>
        </div>
    );
};

export default ProductCart;
