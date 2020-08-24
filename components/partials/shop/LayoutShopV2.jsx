import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../elements/products/Product';
import ProductWide from '../../elements/products/ProductWide';
import ShopWidget from './modules/ShopWidget';
import BestSaleItems from './modules/BestSaleItems';
import RecommendItems from './modules/RecommendItems';
import { Pagination, Skeleton } from 'antd';
import { getProducts, getFilterCategory } from '../../../store/product/action';

class LayoutShopV2 extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        listView: true,
        sortBy: 'latest',
        page: 1,
        limit: 20,
    };

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };

    render() {
        const { products } = this.props;
        return (
            <div className="ps-shopping">
                {/* <BestSaleItems collectionSlug="shop_best_sale_items" />
                <RecommendItems collectionSlug="shop-recommend-items" /> */}
                <div className="ps-shopping__header">
                    <p>
                        <strong className="mr-2">{products.length}</strong>
                        Products found
                    </p>
                    <div className="ps-shopping__actions">
                        {/* <div className="ps-shopping__view">
                            <p>View</p>
                            <ul className="ps-tab-list">
                                <li
                                    className={
                                        viewMode === true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-grid"></i>
                                    </a>
                                </li>
                                <li
                                    className={
                                        viewMode !== true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-list4"></i>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="ps-shopping__content">
                    <div className="ps-shopping-product">
                        <div className="row">
                            {products && products.length > 0 ? (
                                products.map((item, index) => (
                                    <div
                                        className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 "
                                        key={index}>
                                        <Product product={item} />
                                    </div>
                                ))
                            ) : (
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                                    <p>No products found.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => state.product)(LayoutShopV2);
