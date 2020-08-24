import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import LayoutShopV2 from '../../components/partials/shop/LayoutShopV2';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ShopBrands from '../../components/partials/shop/ShopBrands';
import ShopBanner from '../../components/partials/shop/ShopBanner';
import ShopCategories from '../../components/partials/shop/ShopCategories';
import ShopWidget from '../../components/partials/shop/modules/ShopWidget';
import { suchazBaseUrl } from '../../repositories/SuchazOrderRepository';

import axios from 'axios';
import {
    getProducts,
    getTotalProducts,
    getProductsByCategory,
    getProductsById,
    getFilterCategory,
} from '../../store/product/action';
import { getCollections, getMenus } from '../../store/collection/action';

class ShopDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }
    _isMounted = false;
    state = {
        products: [],
    };

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    async componentDidMount() {
        this._isMounted = true;
        const { cat } = this.props.query;
        const { query } = this.props;
        if (query) {
            await axios
                .get(`${suchazBaseUrl}/filterSections/${cat}`)
                .then((res) => {
                    if (res.data) {
                        this.setState({products: res.data.data.docs});
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.data) {
                            
                        }
                        return error.response.data;
                    }
                });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    // generateURLRoute = () => {

    // }

    render() {
        const { query } = this.props;
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Gifts',
            },
        ];

        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--shop">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-container">
                        <div className="ps-layout--shop pt-15">
                            <div className="ps-layout">
                                <LayoutShopV2 products={this.state.products} />
                            </div>
                        </div>
                    </div>
                </div>
                <FooterDefault />
            </div>
        );
    }
}
export default connect((state) => state)(ShopDefaultPage);
