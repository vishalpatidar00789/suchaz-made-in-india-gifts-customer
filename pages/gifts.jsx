import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { Drawer } from 'antd';
import FooterDefault from '../components/shared/footers/FooterDefault';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import LayoutShop from '../components/partials/shop/LayoutShop';
import BreadCrumb from '../components/elements/BreadCrumb';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import ShopWidget from '../components/partials/shop/modules/ShopWidget';
import {
    getProducts,
    getTotalProducts,
    getProductsByCategory,
    getProductsById,
    getFilterCategory,
} from '../store/product/action';
import { getCollections, getMenus } from '../store/collection/action';

class ShopDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }
    _isMounted = false;
    state = {
        by: '',
        name: '',
        minPrice: 0,
        maxPrice: 2000,
        minOffer: 0,
        maxOffer: 100,
        listView: true,
        id: '',
        sortBy: 'latest',
        page: 1,
        limit: 20,
        filterDrawer: false,
    };

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    handleChangeRange = async (value) => {
        await this.setState({
            minPrice: value[0],
            maxPrice: value[1],
        });
        const params = {
            search: '',
            page: 1,
            limit: this.state.limit,
            category: this.state.id,
            name: this.state.name,
            sort: this.state.sortBy,
            price_min: value[0],
            price_max: value[1],
            offer_min: this.state.minOffer,
            offer_max: this.state.maxOffer,
        };
        this.props.dispatch(getFilterCategory(params));
        Router.push({
            pathname: '/gifts',
            query: {
                by: this.state.by,
                name: this.state.name,
                id: this.state.id,
                sortBy: this.state.sortBy,
                minPrice: value[0],
                maxPrice: value[1],
                minOffer: this.state.minOffer,
                maxOffer: this.state.maxOffer,
            },
        });
    };

    handleChangeOffer = async (value) => {
        await this.setState({
            minOffer: value[0],
            maxOffer: value[1],
        });
        const params = {
            search: '',
            page: 1,
            limit: this.state.limit,
            category: this.state.id,
            id: this.state.id,
            sort: this.state.sortBy,
            name: this.state.name,
            price_min: this.state.minPrice,
            price_max: this.state.maxPrice,
            offer_min: value[0],
            offer_max: value[1],
        };
        this.props.dispatch(getFilterCategory(params));
        Router.push({
            pathname: '/gifts',
            query: {
                by: this.state.by,
                name: this.state.name,
                id: this.state.id,
                sortBy: this.state.sortBy,
                minPrice: this.state.minPrice,
                maxPrice: this.state.maxPrice,
                minOffer: value[0],
                maxOffer: value[1],
            },
        });
    };

    handleFilterByBrand = async (value) => {
        if (value.length > 0) {
            this.props.dispatch(getProductsByBrand(value));
            Router.push({ pathname: '/gifts', query: { brand: value } });
        } else {
            const params = {
                search: '',
                page: 1,
                limit: this.state.limit,
                category: this.state.id,
                id: this.state.id,
                name: this.state.name,
                sort: this.state.sortBy,
                price_min: this.state.minPrice,
                price_max: this.state.maxPrice,
                offer_min: this.state.minOffer,
                offer_max: this.state.maxOffer,
            };
            this.props.dispatch(getProducts(params));
            // this.props.dispatch(getTotalProducts());
            this.generateURLRoute();
        }
    };

    handleFilterProductsByCategory = async (e, slug, title) => {
        e.preventDefault();
        await this.setState({
            category: slug,
            id: slug,
            name: title,
        });
        if (slug !== null && slug !== '') {
            // Router.push({ pathname: '/gifts', query: { category: slug } });
            const params = {
                search: '',
                page: 1,
                limit: 20,
                category: slug,
                sort: this.state.sortBy,
                id: slug,
                name: this.state.name,
                price_min: this.state.minPrice,
                price_max: this.state.maxPrice,
                offer_min: this.state.minOffer,
                offer_max: this.state.maxOffer,
            };
            await this.props.dispatch(getFilterCategory(params));
            Router.push({
                pathname: '/gifts',
                query: {
                    by: this.state.by,
                    name: this.state.name,
                    id: slug,
                    sortBy: this.state.sortBy,
                    minPrice: this.state.minPrice,
                    maxPrice: this.state.maxPrice,
                    minOffer: this.state.minOffer,
                    maxOffer: this.state.maxOffer,
                },
            });
        } else {
            const params = {
                search: '',
                page: 1,
                limit: 20,
                category: slug,
                sort: this.state.sortBy,
                price_min: this.state.minPrice,
                id: slug,
                price_max: this.state.maxPrice,
                offer_min: this.state.minOffer,
                offer_max: this.state.maxOffer,
            };
            this.props.dispatch(getFilterCategory(params));
            // this.props.dispatch(getTotalProducts());
            Router.push({
                pathname: '/gifts',
                query: {
                    by: this.state.by,
                    name: this.state.name,
                    id: slug,
                    sortBy: this.state.sortBy,
                    minPrice: this.state.minPrice,
                    maxPrice: this.state.maxPrice,
                    minOffer: this.state.minOffer,
                    maxOffer: this.state.maxOffer,
                },
            });
        }
    };

    handlePagination = async (page, pageSize) => {
        await this.setState({ page: page });
        const params = {
            search: '',
            page: page,
            limit: this.state.limit,
            category: this.state.id,
            sort: this.state.sortBy,
            name: this.state.name,
            id: this.state.id,
            price_min: this.state.minPrice,
            price_max: this.state.maxPrice,
            offer_min: this.state.minOffer,
            offer_max: this.state.maxOffer,
        };
        this.props.dispatch(getFilterCategory(params));
        Router.push({
            pathname: '/gifts',
            query: {
                by: this.state.by,
                name: this.state.name,
                id: this.state.id,
                sortBy: this.state.sortBy,
                minPrice: this.state.minPrice,
                maxPrice: this.state.maxPrice,
                minOffer: this.state.minOffer,
                maxOffer: this.state.maxOffer,
            },
        });
    };

    handleSortBy = async (event) => {
        // console.log(event.target.value);
        await this.setState({ sortBy: event.target.value });
        const params = {
            search: '',
            page: 1,
            limit: this.state.limit,
            category: this.state.id,
            id: this.state.id,
            sort: this.state.sortBy,
            name: this.state.name,
            price_min: this.state.minPrice,
            price_max: this.state.maxPrice,
            offer_min: this.state.minOffer,
            offer_max: this.state.maxOffer,
        };
        this.props.dispatch(getFilterCategory(params));
        Router.push({
            pathname: '/gifts',
            query: {
                by: this.state.by,
                name: this.state.name,
                id: this.state.id,
                sortBy: this.state.sortBy,
                minPrice: this.state.minPrice,
                minPrice: this.state.minPrice,
                maxPrice: this.state.maxPrice,
                minOffer: this.state.minOffer,
                maxOffer: this.state.maxOffer,
            },
        });
    };

    async componentDidMount() {
        this._isMounted = true;
        const { query } = this.props;
        if (query) {
            if (query.category) {
                if (this._isMounted) {
                    await this.setState(
                        {
                            by: query.by ? query.by : this.state.by,
                            name: query.name ? query.name : this.state.name,
                            sortBy: query.sortBy
                                ? query.sortBy
                                : this.state.sortBy,
                            id: query.id ? query.id : this.state.id,
                            minPrice: query.minPrice
                                ? query.minPrice
                                : this.state.minPrice,
                            maxPrice: query.maxPrice
                                ? query.maxPrice
                                : this.state.maxPrice,
                            minOffer: query.minOffer
                                ? query.minOffer
                                : this.state.minOffer,
                            maxOffer: query.maxOffer
                                ? query.maxOffer
                                : this.state.maxOffer,
                        },
                        () => {
                            const params = {
                                search: '',
                                page: 1,
                                limit: this.state.limit,
                                sort: this.state.sortBy,
                                category: this.state.id,
                                name: this.state.name,
                                id: this.state.id,
                                price_min: this.state.minPrice,
                                price_max: this.state.maxPrice,
                                offer_min: this.state.minOffer,
                                offer_max: this.state.maxOffer,
                            };
                            this.props.dispatch(getFilterCategory(params));
                            Router.push({
                                pathname: '/gifts',
                                query: {
                                    by: query.by ? query.by : this.state.by,
                                    name: query.name
                                        ? query.name
                                        : this.state.name,
                                    id: query.id ? query.id : this.state.id,
                                    sortBy: query.sortBy
                                        ? query.sortBy
                                        : this.state.sortBy,
                                    minPrice: query.minPrice
                                        ? query.minPrice
                                        : this.state.minPrice,
                                    maxPrice: query.maxPrice
                                        ? query.maxPrice
                                        : this.state.maxPrice,
                                    minOffer: query.minOffer
                                        ? query.minOffer
                                        : this.state.minOffer,
                                    maxOffer: query.maxOffer
                                        ? query.maxOffer
                                        : this.state.maxOffer,
                                },
                            });
                        }
                    );
                }
            } else {
                if (this._isMounted) {
                    await this.setState({
                        by: query.by ? query.by : '',
                        name: query.name ? query.name : this.state.name,
                        id: query.id ? query.id : this.state.id,
                        sortBy: query.sortBy ? query.sortBy : this.state.sortBy,
                        minPrice: query.minPrice
                            ? query.minPrice
                            : this.state.minPrice,
                        maxPrice: query.maxPrice
                            ? query.maxPrice
                            : this.state.maxPrice,
                        minOffer: query.minOffer
                            ? query.minOffer
                            : this.state.minOffer,
                        maxOffer: query.maxOffer
                            ? query.maxOffer
                            : this.state.maxOffer,
                    });

                    const params = {
                        search: '',
                        page: 1,
                        limit: this.state.limit,
                        sort: this.state.sortBy,
                        category: this.state.id,
                        id: this.state.id,
                        name: this.state.name,
                        price_min: this.state.minPrice,
                        price_max: this.state.maxPrice,
                        offer_min: this.state.minOffer,
                        offer_max: this.state.maxOffer,
                    };
                    await this.props.dispatch(getFilterCategory(params));
                    // await this.props.dispatch(getTotalProducts());
                    Router.push({
                        pathname: '/gifts',
                        query: {
                            by: query.by ? query.by : '',
                            name: query.name ? query.name : this.state.name,
                            id: query.id ? query.id : this.state.id,
                            sortBy: query.sortBy
                                ? query.sortBy
                                : this.state.sortBy,
                            minPrice: query.minPrice
                                ? query.minPrice
                                : this.state.minPrice,
                            maxPrice: query.maxPrice
                                ? query.maxPrice
                                : this.state.maxPrice,
                            minOffer: query.minOffer
                                ? query.minOffer
                                : this.state.minOffer,
                            maxOffer: query.maxOffer
                                ? query.maxOffer
                                : this.state.maxOffer,
                        },
                    });
                }
            }
            const collectionsParams = [
                'shop_best_sale_items',
                'shop-recommend-items',
            ];
            this.props.dispatch(getCollections(collectionsParams));
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleDrawerClose = () => {
        this.setState({
            filterDrawer: false,
        });
    };
    handleDrawerShow = () => {
        this.setState({
            filterDrawer: true,
        });
    };

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
        if (query.name) {
            breadCrumb.push({ text: query.name });
        }
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--shop">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="pl-15 pr-15">
                        <div className="pt-15">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                    <div className="filter-mobile">
                                        <button
                                            className="ps-btn filter-mobile-btn"
                                            onClick={this.handleDrawerShow}>
                                            Filter
                                        </button>
                                        <Drawer
                                            className="ps-panel--mobile filter-mobile-panel"
                                            placement="right"
                                            closable={false}
                                            onClose={this.handleDrawerClose}
                                            visible={this.state.filterDrawer}>
                                            <div className="ps-panel--wrapper">
                                                <div className="ps-panel__header">
                                                    <span
                                                        className="ps-panel__close"
                                                        onClick={
                                                            this
                                                                .handleDrawerClose
                                                        }>
                                                        <i className="icon-cross"></i>
                                                    </span>
                                                </div>
                                                <div className="ps-panel__content">
                                                    <div className="pt-3">
                                                        <ShopWidget
                                                            handleChangeRange={
                                                                this
                                                                    .handleChangeRange
                                                            }
                                                            handleChangeOffer={
                                                                this
                                                                    .handleChangeOffer
                                                            }
                                                            handleFilterByBrand={
                                                                this
                                                                    .handleFilterByBrand
                                                            }
                                                            handleFilterProductsByCategory={
                                                                this
                                                                    .handleFilterProductsByCategory
                                                            }
                                                            minPrice={
                                                                this.state
                                                                    .minPrice
                                                            }
                                                            maxPrice={
                                                                this.state
                                                                    .maxPrice
                                                            }
                                                            minOffer={
                                                                this.state
                                                                    .minOffer
                                                            }
                                                            maxOffer={
                                                                this.state
                                                                    .maxOffer
                                                            }
                                                        />
                                                        <button
                                                            className="ps-btn "
                                                            onClick={
                                                                this
                                                                    .handleDrawerClose
                                                            }>
                                                            Apply
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Drawer>
                                    </div>
                                    <div className="filter-web">
                                        <ShopWidget
                                            handleChangeRange={
                                                this.handleChangeRange
                                            }
                                            handleChangeOffer={
                                                this.handleChangeOffer
                                            }
                                            handleFilterByBrand={
                                                this.handleFilterByBrand
                                            }
                                            handleFilterProductsByCategory={
                                                this
                                                    .handleFilterProductsByCategory
                                            }
                                            minPrice={this.state.minPrice}
                                            maxPrice={this.state.maxPrice}
                                            minOffer={this.state.minOffer}
                                            maxOffer={this.state.maxOffer}
                                        />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                                    <div className="ps-layout__right">
                                        <LayoutShop
                                            handlePagination={
                                                this.handlePagination
                                            }
                                            handleSortBy={this.handleSortBy}
                                            sortBy={this.state.sortBy}
                                            page={this.state.page}
                                            limit={this.state.limit}
                                        />
                                    </div>
                                </div>
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
