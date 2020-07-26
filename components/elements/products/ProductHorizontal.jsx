import React, { Component } from 'react';
import Link from 'next/link';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import Rating from '../Rating';
import { formatCurrency } from '../../../utilities/product-helper';
import { baseUrl } from '../../../repositories/Repository';
import { isStaticData } from '../../../utilities/app-settings';
class ProductHorizontal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product, currency } = this.props;
        let thumbnail;
        if (isStaticData === false) {
            thumbnail = product.images[0];
        } else {
            thumbnail = product.thumbnail.url;
        }
        return (
            <div className="ps-product--horizontal">
                <div className="ps-product__thumbnail">
                    <Link href="/shop">
                        <a>
                            <img src={thumbnail} alt="MadeInIndiaGifts" />
                        </a>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating />
                    </div>
                    {product.is_sale === true ? (
                        <p className="ps-product__price sale">
                            {currency ? currency.symbol : '₹'}
                            {formatCurrency(product.bestPrice)}
                            <del className="ml-2">
                                {currency ? currency.symbol : '₹'}
                                {product.sellingPrice}
                            </del>
                        </p>
                    ) : (
                        <p className="ps-product__price">
                            {currency ? currency.symbol : '₹'}
                            {formatCurrency(product.bestPrice)}
                        </p>
                    )}

                    
                   
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductHorizontal);
