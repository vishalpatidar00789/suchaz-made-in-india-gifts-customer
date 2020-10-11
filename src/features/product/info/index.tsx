import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBuyNowItem } from 'store/buynow/action';
import { addItem, getCart, removeItem } from 'store/cart/action';
import ProductInfoWrapper, { ProductInfoMeta } from './product-info.style';
import Router from 'next/router';
import Rating from 'components/rating';
type ProductInfoProps = {
    product: any;
};
const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
    const dispatch = useDispatch();
    const { currency } = useSelector((state) => state.setting);
    const [quantity, setQuantity] = useState<number>(1);

    const handleRemoveCartItem = (product) => {
        dispatch(removeItem(product));
    };

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

    const handleIncreaseItemQty = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    };

    const handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const isSamePrice = product.bestPrice == product.sellingPrice;

    return (
        <ProductInfoWrapper>
            <h1>{product.title}</h1>
            <ProductInfoMeta>
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
                    <Rating rating={product.customerAvgRating} />{' '}
                    <span className="ps-review-num"> {product.customerAvgRating}</span>
                </div>
            </ProductInfoMeta>
        </ProductInfoWrapper>
    );
};

export default ProductInfo;
