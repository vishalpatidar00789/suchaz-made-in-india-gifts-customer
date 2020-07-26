import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import LayoutShop from '../../components/partials/shop/LayoutShop';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ShopBrands from '../../components/partials/shop/ShopBrands';
import ShopBanner from '../../components/partials/shop/ShopBanner';
import ShopCategories from '../../components/partials/shop/ShopCategories';
import ShopWidget from '../../components/partials/shop/modules/ShopWidget';
import {
    getProducts,
    getTotalProducts,
    getProductsByCategory,
    getProductsById,
    getFilterCategory,
} from '../../store/product/action';
import { getCollections } from '../../store/collection/action';

class ShopDefaultPage extends React.Component {
    constructor(props) {
        super(props);
       
    }
    state = {
        priceMin: 0,
        priceMax: 2000,
        offerMin: 0,
        offerMax: 100,
        listView: true,
        category: '',
        sortBy: 'latest',
        page: 1,
        limit: 20
    };


    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    handleChangeRange = async (value) => {
       await this.setState({
            priceMin: value[0],
            priceMax: value[1]
        });
        const params = {
            search: '',
            page: 1,
            limit: this.state.limit,
            category: this.state.category,
            sort: this.state.sortBy,
            price_min: value[0],
            price_max: value[1],
            offer_min: this.state.offerMin,
            offer_max: this.state.offerMax,
        };
        this.props.dispatch(getFilterCategory(params));
        Router.push({ pathname: '/shop', query: {
            sort: this.state.sortBy, 
            category: this.state.category, 
            priceMin: value[0],
            priceMin: value[1],
            priceMax: this.state.priceMax,
            offerMin: this.state.offerMin,
            offerMax: this.state.offerMax
         } });
    }

    handleChangeOffer = async (value) => {
        await this.setState({
            offerMin: value[0],
            offerMax: value[1],
        });
        const params = {
            search: '',
            page: 1,
            limit: this.state.limit,
            category: this.state.category,
            sort: this.state.sortBy,
            price_min: this.state.priceMin,
            price_max: this.state.priceMax,
            offer_min: value[0],
            offer_max: value[1]
        };
        this.props.dispatch(getFilterCategory(params));
        Router.push({ pathname: '/shop', query: {
            sort: this.state.sortBy, 
            category: this.state.category, 
            priceMin: this.state.priceMin,
            priceMin: this.state.priceMin,
            priceMax: this.state.priceMax,
            offerMin: value[0],
            offerMax: value[1]
         } });
    }

    handleFilterByBrand = async (value) => {
        if (value.length > 0) {
            this.props.dispatch(getProductsByBrand(value));
            Router.push({ pathname: '/shop', query: { brand: value } });
        } else {
            const params =     {
                search: '',
                page: 1,
                limit: this.state.limit,
                category: this.state.category,
                sort: this.state.sortBy,
                price_min: this.state.priceMin,
                price_max: this.state.priceMax,
                offer_min: this.state.offerMin,
                offer_max: this.state.offerMax
            }
            this.props.dispatch(getProducts(params));
            this.props.dispatch(getTotalProducts());
            this.generateURLRoute();
        }
    }

    handleFilterProductsByCategory = async (e, slug) => {
        e.preventDefault();
        await this.setState({
            category: slug,
        });
        if (slug !== null && slug !== '') {
            // Router.push({ pathname: '/shop', query: { category: slug } });
            const params =     {
                search: '',
                page: 1,
                limit: 20,
                category: slug,
                sort: this.state.sortBy,
                price_min: this.state.priceMin,
                price_max: this.state.priceMax,
                offer_min: this.state.offerMin,
                offer_max: this.state.offerMax
            }
            await this.props.dispatch(getFilterCategory(params));
            Router.push({ pathname: '/shop', query: {
                sort: this.state.sortBy, 
                category: slug, 
                priceMin: this.state.priceMin,
                priceMin: this.state.priceMin,
                priceMax: this.state.priceMax,
                offerMin: this.state.offerMin,
                offerMax: this.state.offerMax
             } });
        } else {
            const params =     {
                search: '',
                page: 1,
                limit: 20,
                category: slug,
                sort: this.state.sortBy,
                price_min: this.state.priceMin,
                price_max: this.state.priceMax,
                offer_min: this.state.offerMin,
                offer_max: this.state.offerMax
            }
            this.props.dispatch(getFilterCategory(params));
            this.props.dispatch(getTotalProducts());
            Router.push({ pathname: '/shop', query: {
                sort: this.state.sortBy, 
                category: slug, 
                priceMin: this.state.priceMin,
                priceMin: this.state.priceMin,
                priceMax: this.state.priceMax,
                offerMin: this.state.offerMin,
                offerMax: this.state.offerMax
             } });
        }
    }

    
    handlePagination = async (page, pageSize) => {
        await this.setState({ page: page });
        const params =     {
            search: '',
            page: page,
            limit: this.state.limit,
            category: this.state.category,
            sort: this.state.sortBy,
            price_min: this.state.priceMin,
            price_max: this.state.priceMax,
            offer_min: this.state.offerMin,
            offer_max: this.state.offerMax
        }
        this.props.dispatch(getFilterCategory(params));
        Router.push({ pathname: '/shop', query: {
            sort: this.state.sortBy, 
            category: this.state.category, 
            priceMin: this.state.priceMin,
            priceMin: this.state.priceMin,
            priceMax: this.state.priceMax,
            offerMin: this.state.offerMin,
            offerMax: this.state.offerMax
         } });
    }

    handleSortBy = async (event) =>  {
        // console.log(event.target.value);
        await this.setState({ sortBy: event.target.value });
        const params =     {
            search: '',
            page: 1,
            limit: this.state.limit,
            category: this.state.category,
            sort: this.state.sortBy,
            price_min: this.state.priceMin,
            price_max: this.state.priceMax,
            offer_min: this.state.offerMin,
            offer_max: this.state.offerMax
        }
        this.props.dispatch(getFilterCategory(params));
        Router.push({ pathname: '/shop', query: {
            sort: this.state.sortBy, 
            category: this.state.category, 
            priceMin: this.state.priceMin,
            priceMin: this.state.priceMin,
            priceMax: this.state.priceMax,
            offerMin: this.state.offerMin,
            offerMax: this.state.offerMax
         } });
    }

    async componentDidMount() {
        const { query } = this.props;
        if (query) {
            if (query.category) {
               await this.setState({
                    sortBy: (query.sort) ? query.sort : this.state.sortBy,
                    category: (query.category) ? query.category : this.state.category,
                    priceMin: (query.priceMin) ? query.priceMin : this.state.priceMin,
                    priceMax: (query.priceMax) ? query.priceMax : this.state.priceMax,
                    offerMin: (query.offerMin) ? query.offerMin : this.state.offerMin,
                    offerMax: (query.offerMax) ? query.offerMax : this.state.offerMax
                }, () => {
                    console.log(this.state.sortBy);
                    const params =     {
                        search: '',
                        page: 1,
                        limit: this.state.limit,
                        sort: this.state.sortBy,
                        category: this.state.category,
                        price_min: this.state.priceMin,
                        price_max: this.state.priceMax,
                        offer_min: this.state.offerMin,
                        offer_max: this.state.offerMax
                    }
                    this.props.dispatch(getFilterCategory(params));
                    Router.push({ pathname: '/shop', query: {
                        sort: (query.sort) ? query.sort : this.state.sortBy,
                        category: (query.category) ? query.category : this.state.category,
                        priceMin: (query.priceMin) ? query.priceMin : this.state.priceMin,
                        priceMax: (query.priceMax) ? query.priceMax : this.state.priceMax,
                        offerMin: (query.offerMin) ? query.offerMin : this.state.offerMin,
                        offerMax: (query.offerMax) ? query.offerMax : this.state.offerMax
                     } });
                });
        
            } else {

                await this.setState({
                    sortBy: (query.sort) ? query.sort : this.state.sortBy,
                    category: (query.category) ? query.category : this.state.category,
                    priceMin: (query.priceMin) ? query.priceMin : this.state.priceMin,
                    priceMax: (query.priceMax) ? query.priceMax : this.state.priceMax,
                    offerMin: (query.offerMin) ? query.offerMin : this.state.offerMin,
                    offerMax: (query.offerMax) ? query.offerMax : this.state.offerMax
                });

                const params =     {
                    search: '',
                    page: 1,
                    limit: this.state.limit,
                    sort: this.state.sortBy,
                    category: this.state.category,
                    price_min: this.state.priceMin,
                    price_max: this.state.priceMax,
                    offer_min: this.state.offerMin,
                    offer_max: this.state.offerMax
                }
                await this.props.dispatch(getFilterCategory(params));
                await this.props.dispatch(getTotalProducts());
                Router.push({ pathname: '/shop', query: {
                    sort: (query.sort) ? query.sort : this.state.sortBy,
                    category: (query.category) ? query.category : this.state.category,
                    priceMin: (query.priceMin) ? query.priceMin : this.state.priceMin,
                    priceMax: (query.priceMax) ? query.priceMax : this.state.priceMax,
                    offerMin: (query.offerMin) ? query.offerMin : this.state.offerMin,
                    offerMax: (query.offerMax) ? query.offerMax : this.state.offerMax
                 } });
            }
            const collectionsParams = [
                'shop_best_sale_items',
                'shop-recommend-items',
            ];
            this.props.dispatch(getCollections(collectionsParams));
        }
    }

    // generateURLRoute = () => {
     
    // }

    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Shop',
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
                        {/* <ShopBanner /> */}
                        {/* <ShopBrands /> */}
                        {/* <ShopCategories /> */}
                        <div className="ps-layout--shop pt-15">
                            <ShopWidget handleChangeRange={this.handleChangeRange}
                            handleChangeOffer={this.handleChangeOffer}
                            handleFilterByBrand={this.handleFilterByBrand}
                            handleFilterProductsByCategory={this.handleFilterProductsByCategory}
                            priceMin={this.state.priceMin}
                            priceMax={this.state.priceMax}
                            offerMin={this.state.offerMin}
                            offerMax={this.state.offerMax}
                            />
                            <div className="ps-layout__right">
                                <LayoutShop handlePagination={this.handlePagination}
                                 handleSortBy={this.handleSortBy}
                                 sortBy={this.state.sortBy}
                                 page={this.state.page}
                                 limit={this.state.limit}
                                 />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Newletters layout="container" /> */}
                <FooterDefault />
            </div>
        );
    }
}
export default connect(state => state)(ShopDefaultPage);
