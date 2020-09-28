import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import ProductDetailFullwidth from '../../components/elements/detail/ProductDetailFullwidth';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobileProduct from '../../components/shared/header-mobile/HeaderMobileProduct';
import { getProductsById } from '../../store/product/action';
import HeaderProduct from '../../components/shared/headers/HeaderProduct';
import { getCollections, getMenus } from '../../store/collection/action';
import { NextSeo } from 'next-seo';

class ProductDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }
    componentDidMount() {
        const { pid } = this.props.query;
        const { query } = this.props;
        // if (isNaN(pid)) {
        //     Router.push('/page/page-404');
        // }

        if (query) {
            const collectionsParams = [
                'customer_bought',
                'shop-recommend-items',
                'widget_same_brand',
            ];
            this.props.dispatch(getMenus(pid));
            this.props.dispatch(getProductsById(pid));
            this.props.dispatch(getCollections(collectionsParams));
        }
        Router.events.on('routeChangeStart', (url) => {
            const nextPid = url.split('/').pop();
            if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
                this.props.dispatch(getProductsById(nextPid));
            }
        });
    }

    render() {
        const { singleProduct } = this.props;
        console.log('single product ')
        console.log(singleProduct)
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Gift',
            },
            {
                text: singleProduct ? singleProduct.title : '',
            },
        ];

        return (
            <div>
                <div className="layout--product">
                    {singleProduct ? (
                        <HeaderProduct productData={singleProduct} />
                    ) : (
                        ''
                    )}
                    <HeaderMobileProduct />
                    <NavigationList />
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-page--product">
                        <div className="ps-container">
                            <div className="ps-page__container">
                                <ProductDetailFullwidth />
                                {/* <div className="ps-page__left">
                                <ProductDetailFullwidth />
                            </div> */}
                                {/* <div className="ps-page__right">
                                <ProductWidgets collectionSlug="widget_same_brand" />
                            </div> */}
                            </div>
                            {/* <CustomerBought
                            layout="fullwidth"
                            collectionSlug="customer_bought"
                        />
                        <RelatedProduct
                            layout="fullwidth"
                            collectionSlug="shop-recommend-items"
                        /> */}
                        </div>
                    </div>
                    {/* <Newletters /> */}
                    <FooterDefault />
                </div>
                <div>
                    {singleProduct ? (
                        <NextSeo
                        title = {singleProduct.pageTitle}
                        description = {singleProduct.pageDescription}
                        keywords = {singleProduct.keywords}
                        openGraph={{ 
                            type: 'website',
                            url: `https://www.madeinindiagifts.in/product/${singleProduct.slug}`,
                            title: `${singleProduct.pageTitle}`,
                            description: `${singleProduct.pageDescription}`,
                            images: [
                                {
                                    url: `${singleProduct.images[0]}`,
                                    width: 800,
                                    height: 600,
                                    alt: `${singleProduct.pageTitle}`,
                                },
                            ]
                        }}
                      />
                    ) : (
                        ''
                    )}
                </div>
            </div>
        );
    }
}

export default connect((state) => state.product)(ProductDefaultPage);
