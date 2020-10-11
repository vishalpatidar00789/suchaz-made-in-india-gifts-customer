import React, { useState, useEffect } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import Router, { useRouter } from 'next/router';
import { NextPage } from 'next';
import { OpenGraph, OpenGraphImages } from 'next-seo/lib/types';
import BreadCrumb from 'components/bread-crumb';
import { IBreadCrumb } from 'components/bread-crumb/types';
import FilterShop from 'features/shop/filter';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterCategory, getProductsById } from 'store/product/action';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { Drawer } from 'antd';
import LayoutShop from 'features/shop/layout';
import { getMenus } from 'store/collection/action';
import ProductPageWrapper, { ProductPageDetailWrapper, ProductPageDetailContainer } from './product.style';
import Header from 'layouts/header';
import HeaderMobile from 'layouts/header/header-mobile';
import { NavigationMobileDrawerHeader } from 'layouts/header/navigation/navigation-mobile.style';
import Footer from 'layouts/footer';
import ProductLayout from 'layouts/product-layout';
import ProductDetail from 'features/product/product-detail';
type Page = NextPage & { Layout?: React.FC };

const ProductPage: Page = () => {
    const dispatch = useDispatch();
    const { singleProduct } = useSelector((state) => state.product);
    const { query } = useRouter();
    const { pid } = query;
    let nextSeoProps: NextSeoProps = {};
    let openGraph: OpenGraph = {};
    let openGraphIamges: OpenGraphImages[] = [];
    if (singleProduct) {
        nextSeoProps.title = singleProduct.pageTitle;
        nextSeoProps.description = singleProduct.pageDescription;
        nextSeoProps.additionalMetaTags = [
            {
                name: 'keywords',
                content: singleProduct.keywords,
            },
        ];
        openGraph.title = singleProduct.pageTitle;
        openGraph.description = singleProduct.pageDescription;
        openGraph.type = 'website';
        openGraph.site_name = 'MadeInIndiaGifts.in';
        openGraphIamges = [
            {
                url: singleProduct.images[0],
                width: 800,
                height: 600,
                alt: singleProduct.pageTitle,
            },
        ];
        openGraph.images = openGraphIamges;
        nextSeoProps.openGraph = openGraph;
    }

    const breadCrumbList: IBreadCrumb[] = [
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

    useEffect(() => {
        let mounted = true;
        if (mounted) {
        }

        if (query) {
            dispatch(getProductsById(pid));
        }
        return () => (mounted = false);
    }, []);

    return (
        <>
            {singleProduct ? <NextSeo {...nextSeoProps} /> : ''}
            <ProductPageWrapper>
                <BreadCrumb breadCrumbList={breadCrumbList} />
                <ProductPageDetailWrapper>
                    <ProductPageDetailContainer>
                        <ProductDetail />
                    </ProductPageDetailContainer>
                </ProductPageDetailWrapper>
            </ProductPageWrapper>
        </>
    );
};

ProductPage.Layout = ProductLayout;
export default ProductPage;
