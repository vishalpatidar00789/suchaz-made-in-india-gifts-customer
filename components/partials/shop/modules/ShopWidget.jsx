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
        //     priceMin: 0,
        //     priceMax: 2000,
        //     offerMin: 0,
        //     offerMax: 100
        // };
    }



    componentDidMount() {
        this.props.dispatch(getBrands());
        this.props.dispatch(getProductCategories());
    }

    render() {
        const { brands, categories, priceMin, priceMax, offerMin, offerMax } = this.props;
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
                                    href="/shop"
                                    onClick={e =>
                                        this.props.handleFilterProductsByCategory(
                                            e,
                                            null
                                        )
                                    }>
                                    All
                                </a>
                            </li>
                            {categories.map(category => (
                                <li key={category.id}>
                                    <a
                                        href={`shop?category=${category.slug}`}
                                        onClick={e =>
                                            this.props.handleFilterProductsByCategory(
                                                e,
                                                category.id
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
                            defaultValue={[0, 2000]}
                            max={2000}
                            onAfterChange={this.props.handleChangeRange.bind(this)}
                        />
                        <p>
                            Price: ₹{priceMin} - ₹
                            {priceMax}
                        </p>
                    </figure>
                    <figure>
                        <h4 className="widget-title">By Offer</h4>
                        <Slider
                            range
                            defaultValue={[0, 100]}
                            max={100}
                            onAfterChange={this.props.handleChangeOffer.bind(this)}
                        />
                        <p>
                            Offer: {offerMin}% - 
                            {offerMax}%
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
