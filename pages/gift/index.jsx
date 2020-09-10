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
        by: '',
        minPrice: 0,
        maxPrice: 5000,
        minOffer: 0,
        maxOffer: 100,
        listView: true,
        id: '',
        sortBy: 'latest',
        page: 1,
        limit: 20
    };


    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    handleChangeRange = async (value) => {
       await this.setState({
            minPrice: value[0],
            maxPrice: value[1]
        });
        const params = {
            search: '',
            page: 1,
            limit: this.state.limit,
            category: this.state.id,
            sort: this.state.sortBy,
            price_min: value[0],
            price_max: value[1],
            offer_min: this.state.minOffer,
            offer_max: this.state.maxOffer,
        };
        this.props.dispatch(getFilterCategory(params));
        Router.push({ pathname: '/gift', query: {
            by: this.state.by, 
            id: this.state.id, 
            sortBy: this.state.sortBy, 
            minPrice: value[0],
            maxPrice: value[1],
            minOffer: this.state.minOffer,
            maxOffer: this.state.maxOffer
         } });
    }

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
            sort: this.state.sortBy,
            price_min: this.state.minPrice,
            price_max: this.state.maxPrice,
            offer_min: value[0],
            offer_max: value[1]
        };
        this.props.dispatch(getFilterCategory(params));
        Router.push({ pathname: '/gift', query: {
            by: this.state.by, 
            id: this.state.id, 
            sortBy: this.state.sortBy,  
            minPrice: this.state.minPrice,
            maxPrice: this.state.maxPrice,
            minOffer: value[0],
            maxOffer: value[1]
         } });
    }

    handleFilterByBrand = async (value) => {
        if (value.length > 0) {
            this.props.dispatch(getProductsByBrand(value));
            Router.push({ pathname: '/gift', query: { brand: value } });
        } else {
            const params =     {
                search: '',
                page: 1,
                limit: this.state.limit,
                category: this.state.id,
                sort: this.state.sortBy,
                price_min: this.state.minPrice,
                price_max: this.state.maxPrice,
                offer_min: this.state.minOffer,
                offer_max: this.state.maxOffer
            }
            this.props.dispatch(getProducts(params));
            // this.props.dispatch(getTotalProducts());
            this.generateURLRoute();
        }
    }

    handleFilterProductsByCategory = async (e, slug) => {
        e.preventDefault();
        await this.setState({
            category: slug,
        });
        if (slug !== null && slug !== '') {
            // Router.push({ pathname: '/gift', query: { category: slug } });
            const params =     {
                search: '',
                page: 1,
                limit: 20,
                category: slug,
                sort: this.state.sortBy,
                price_min: this.state.minPrice,
                price_max: this.state.maxPrice,
                offer_min: this.state.minOffer,
                offer_max: this.state.maxOffer
            }
            await this.props.dispatch(getFilterCategory(params));
            Router.push({ pathname: '/gift', query: {
                by: this.state.by, 
                id: slug, 
                sortBy: this.state.sortBy, 
                minPrice: this.state.minPrice,
                maxPrice: this.state.maxPrice,
                minOffer: this.state.minOffer,
                maxOffer: this.state.maxOffer
             } });
        } else {
            const params =     {
                search: '',
                page: 1,
                limit: 20,
                category: slug,
                sort: this.state.sortBy,
                price_min: this.state.minPrice,
                price_max: this.state.maxPrice,
                offer_min: this.state.minOffer,
                offer_max: this.state.maxOffer
            }
            this.props.dispatch(getFilterCategory(params));
            // this.props.dispatch(getTotalProducts());
            Router.push({ pathname: '/gift', query: {
                by: this.state.by, 
                id: slug, 
                sortBy: this.state.sortBy, 
                minPrice: this.state.minPrice,
                maxPrice: this.state.maxPrice,
                minOffer: this.state.minOffer,
                maxOffer: this.state.maxOffer
             } });
        }
    }

    
    handlePagination = async (page, pageSize) => {
        await this.setState({ page: page });
        const params =     {
            search: '',
            page: page,
            limit: this.state.limit,
            category: this.state.id,
            sort: this.state.sortBy,
            price_min: this.state.minPrice,
            price_max: this.state.maxPrice,
            offer_min: this.state.minOffer,
            offer_max: this.state.maxOffer
        }
        this.props.dispatch(getFilterCategory(params));
        Router.push({ pathname: '/gift', query: {
            by: this.state.by, 
            id: this.state.id,
            sortBy: this.state.sortBy, 
            minPrice: this.state.minPrice,
            maxPrice: this.state.maxPrice,
            minOffer: this.state.minOffer,
            maxOffer: this.state.maxOffer
         } });
    }

    handleSortBy = async (event) =>  {
        // console.log(event.target.value);
        await this.setState({ sortBy: event.target.value });
        const params =     {
            search: '',
            page: 1,
            limit: this.state.limit,
            category: this.state.id,
            sort: this.state.sortBy,
            price_min: this.state.minPrice,
            price_max: this.state.maxPrice,
            offer_min: this.state.minOffer,
            offer_max: this.state.maxOffer
        }
        this.props.dispatch(getFilterCategory(params));
        Router.push({ pathname: '/gift', query: {
            by: this.state.by, 
            id: this.state.id, 
            sortBy: this.state.sortBy, 
            minPrice: this.state.minPrice,
            minPrice: this.state.minPrice,
            maxPrice: this.state.maxPrice,
            minOffer: this.state.minOffer,
            maxOffer: this.state.maxOffer
         } });
    }

    async componentDidMount() {
        const { query } = this.props;
        if (query) {
            console.log(query);
            if (query.category) {
               await this.setState({
                    by: (query.by) ? query.by : this.state.by,
                    sortBy: (query.sortBy) ? query.sortBy : this.state.sortBy,
                    id: (query.id) ? query.id : this.state.id,
                    minPrice: (query.minPrice) ? query.minPrice : this.state.minPrice,
                    maxPrice: (query.maxPrice) ? query.maxPrice : this.state.maxPrice,
                    minOffer: (query.minOffer) ? query.minOffer : this.state.minOffer,
                    maxOffer: (query.maxOffer) ? query.maxOffer : this.state.maxOffer
                }, () => {
                    const params =     {
                        search: '',
                        page: 1,
                        limit: this.state.limit,
                        sort: this.state.sortBy,
                        category: this.state.id,
                        price_min: this.state.minPrice,
                        price_max: this.state.maxPrice,
                        offer_min: this.state.minOffer,
                        offer_max: this.state.maxOffer
                    }
                    this.props.dispatch(getFilterCategory(params));
                    Router.push({ pathname: '/gift', query: {
                        by: (query.by) ? query.by : this.state.by,
                        id: (query.id) ? query.id : this.state.id,
                        sortBy: (query.sortBy) ? query.sortBy : this.state.sortBy,
                        minPrice: (query.minPrice) ? query.minPrice : this.state.minPrice,
                        maxPrice: (query.maxPrice) ? query.maxPrice : this.state.maxPrice,
                        minOffer: (query.minOffer) ? query.minOffer : this.state.minOffer,
                        maxOffer: (query.maxOffer) ? query.maxOffer : this.state.maxOffer
                     } });
                });
        
            } else {

                await this.setState({
                    by: (query.by) ? query.by : '',
                    id: (query.id) ? query.id : this.state.id,
                    sortBy: (query.sortBy) ? query.sortBy : this.state.sortBy,
                    minPrice: (query.minPrice) ? query.minPrice : this.state.minPrice,
                    maxPrice: (query.maxPrice) ? query.maxPrice : this.state.maxPrice,
                    minOffer: (query.minOffer) ? query.minOffer : this.state.minOffer,
                    maxOffer: (query.maxOffer) ? query.maxOffer : this.state.maxOffer
                });

                const params =     {
                    search: '',
                    page: 1,
                    limit: this.state.limit,
                    sort: this.state.sortBy,
                    category: this.state.id,
                    price_min: this.state.minPrice,
                    price_max: this.state.maxPrice,
                    offer_min: this.state.minOffer,
                    offer_max: this.state.maxOffer
                }
                await this.props.dispatch(getFilterCategory(params));
                // await this.props.dispatch(getTotalProducts());
                Router.push({ pathname: '/gift', query: {
                    by: (query.by) ? query.by : '',
                    id: (query.id) ? query.id : this.state.id,
                    sortBy: (query.sortBy) ? query.sortBy : this.state.sortBy,
                    minPrice: (query.minPrice) ? query.minPrice : this.state.minPrice,
                    maxPrice: (query.maxPrice) ? query.maxPrice : this.state.maxPrice,
                    minOffer: (query.minOffer) ? query.minOffer : this.state.minOffer,
                    maxOffer: (query.maxOffer) ? query.maxOffer : this.state.maxOffer
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
                text: 'Gift',
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
                            minPrice={this.state.minPrice}
                            maxPrice={this.state.maxPrice}
                            minOffer={this.state.minOffer}
                            maxOffer={this.state.maxOffer}
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
