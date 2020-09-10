import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Slider, Checkbox } from 'antd';

import {
    getProducts,
    getTotalProducts,
    getProductsByPrice,
    getBrands,
    getProductsByBrand,
    getProductCategories,
    getProductsByCategory,
    getFilterCategory,
} from '../../../../store/product/action';
class ShopWidget extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     minPrice: 0,
        //     maxPrice: 2000,
        //     minOffer: 0,
        //     maxOffer: 100
        // };
    }



    componentDidMount() {
        this.props.dispatch(getBrands());
        this.props.dispatch(getProductCategories());
    }

    render() {
        const { brands, categories, minPrice, maxPrice, minOffer, maxOffer } = this.props;
        const brandsGroup = [];
        if (brands.length > 0) {
            brands.forEach(brand => {
                brandsGroup.push({
                    id: brand.id,
                    value: brand.id,
                    label: brand.name,
                });
            });
        }
        return (
            <div className="ps-layout__left">
                <aside className="widget widget_shop">
                    <h4 className="widget-title">Categories</h4>
                    {categories && categories.length > 0 ? (
                        <ul className="ps-list--categories">
                            <li>
                                <a
                                    href="/gifts"
                                    onClick={e =>
                                        this.props.handleFilterProductsByCategory(
                                            e,
                                            null,
                                            null
                                        )
                                    }>
                                    All
                                </a>
                            </li>
                            {categories.map(category => (
                                <li key={category.id}>
                                    <a
                                        href={`gift?category=${category.slug}`}
                                        onClick={e =>
                                            this.props.handleFilterProductsByCategory(
                                                e,
                                                category.id,
                                                category.title
                                            )
                                        }>
                                        {category.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        'No Category'
                    )}
                </aside>
                <aside className="widget widget_shop">
                    {/* <h4 className="widget-title">By Brands</h4>
                    <figure>
                        <Checkbox.Group
                            options={brandsGroup}
                            onChange={this.handleFilterByBrand.bind(this)}
                        />
                    </figure> */}
                    <figure>
                        <h4 className="widget-title">By Price</h4>
                        <Slider
                            range
                            defaultValue={[0, 5000]}
                            value={[minPrice, maxPrice]}
                            max={20000}
                            onChange={this.props.handleChangeRange.bind(this)}
                        />
                        <p>
                            Price: ₹{minPrice} - ₹
                            {maxPrice}
                        </p>
                    </figure>
                    <figure>
                        <h4 className="widget-title">By Offer</h4>
                        <Slider
                            range
                            defaultValue={[0, 100]}
                            value={[minOffer, maxOffer]}
                            max={100}
                            onChange={this.props.handleChangeOffer.bind(this)}
                        />
                        <p>
                            Offer: {minOffer}% - 
                            {maxOffer}%
                        </p>
                    </figure>
                </aside>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.product;
};
export default connect(mapStateToProps)(ShopWidget);
