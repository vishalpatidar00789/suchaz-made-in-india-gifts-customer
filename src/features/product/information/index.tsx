import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBuyNowItem } from 'store/buynow/action';
import { addItem, getCart, removeItem } from 'store/cart/action';
import ProductInfoWrapper, {
    ProductInfoMeta,
    ProductInfoRatingWrapper,
    ProductInfoPriceWrapper,
    ProductInfoDescWrapper,
    ProductInfoShoppingWrapper,
    ProductInfoActionMobileWrapper,
} from './product-info.style';
import Router from 'next/router';
import Rating from 'components/rating';
import { formatCurrency } from 'utilities/product-helper';
type ProductInfoProps = {
    product: any;
};
const ProductInformation: FC<ProductInfoProps> = ({ product }) => {
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
                <ProductInfoRatingWrapper>
                    <Rating rating={product.customerAvgRating} />{' '}
                    <span className="ps-review-num"> {product.customerAvgRating}</span>
                </ProductInfoRatingWrapper>
            </ProductInfoMeta>
            <ProductInfoPriceWrapper className="sale">
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
            </ProductInfoPriceWrapper>
            {/* {product.is_sale === true ? (
                    <ProductInfoPriceWrapper className='sale'>
                        <del className="mr-2">
                            {currency ? currency.symbol : '$'}
                            {product.sale_price}
                        </del>
                        {currency ? currency.symbol : '$'}
                        {product.bestPrice}
                    </ProductInfoPriceWrapper>
                ) : (
                    <ProductInfoPriceWrapper>
                        {currency ? currency.symbol : '$'}
                        {product.bestPrice}
                    </ProductInfoPriceWrapper>
                )} */}
            <ProductInfoDescWrapper>
                <p>
                    Sold By:
                    {/* <Link href="/gift"> */}
                    <a>
                        <strong>{product.vendor?.shop_name ? ' ' + product.vendor.shop_name : '\u00A0'}</strong>
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
            </ProductInfoDescWrapper>
            {product.quantity > 0 ? (
                <ProductInfoShoppingWrapper>
                    <figure>
                        <figcaption>Quantity</figcaption>
                        <div className="form-group--number">
                            <button className="up" onClick={handleIncreaseItemQty}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button className="down" onClick={handleDecreaseItemQty}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <input className="form-control" type="text" placeholder={quantity.toString()} disabled />
                        </div>
                    </figure>
                    <a className="ps-btn ps-btn--black" href="#" onClick={handleAddItemToCart}>
                        Add to cart
                    </a>
                    <a className="ps-btn" href="#" onClick={handleBuyNow}>
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
                </ProductInfoShoppingWrapper>
            ) : (
                <div className="flexbtn w-100">
                    <a href="#" className="ps-btn ps-btn--black text-white">
                        Coming Soon
                    </a>
                </div>
            )}
            {product.quantity > 0 ? (
                <ProductInfoActionMobileWrapper>
                    <a className="ps-btn ps-btn--black" href="#" onClick={handleAddItemToCart}>
                        Add to cart
                    </a>
                    <a className="ps-btn" href="#" onClick={handleBuyNow}>
                        Buy Now
                    </a>
                </ProductInfoActionMobileWrapper>
            ) : null}
        </ProductInfoWrapper>
    );
};

export default ProductInformation;
