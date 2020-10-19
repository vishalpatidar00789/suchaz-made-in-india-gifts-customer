import React, { useState, useEffect } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { OpenGraph } from 'next-seo/lib/types';
import GiftPageWrapper, { GiftPageLayoutWrapper } from './gift.style';
import MainLayout from 'layouts/main-layout';
import BreadCrumb from 'components/bread-crumb';
import { IBreadCrumb } from 'components/bread-crumb/types';
import { useDispatch } from 'react-redux';
import LayoutShop from 'features/shop/layout';
import axios from 'axios';
import { suchazBaseUrl } from 'repositories/SuchazOrderRepository';
import ProductHome from 'features/product/product-home';
type Page = NextPage & { Layout?: React.FC };

const GiftPage: Page = () => {
    const dispatch = useDispatch();
    const { query } = useRouter();
    const pageTitle: string = `Gift For ${query.slug}`;
    let nextSeoProps: NextSeoProps = {};
    let openGraph: OpenGraph = {};
    nextSeoProps.title = pageTitle;
    nextSeoProps.description =
        'Buy Indian Handy Crafts, black roman numeral wall clock, retro industrial wall clock, black and white wall clock, night vision with neon wall clock, black roman numeral clock, mustard yellow wall clock, timber wall clock, hexagon wall clock, best radium wall clock, dark wood wall clock Made In India Flat 10% Discount ✓Perfect Gift ✓HandMade ✓Natural Wood ✓6 month warranty on Material.';
    nextSeoProps.additionalMetaTags = [
        {
            name: 'keywords',
            content:
                'Indian Handy Crafts, black roman numeral wall clock, retro industrial wall clock, black and white wall clock, night vision with neon wall clock, black roman numeral clock, mustard yellow wall clock, timber wall clock, hexagon wall clock, best radium wall clock, dark wood wall clock',
        },
    ];
    openGraph.title =
        'Buy Indian Handy Crafts, black roman numeral wall clock, retro industrial wall clock, black and white wall clock, night vision with neon wall clock, black roman numeral clock, mustard yellow wall clock, timber wall clock, hexagon wall clock, best radium wall clock, dark wood wall clock Made In India Flat 10% Discount ✓Perfect Gift ✓HandMade ✓Natural Wood ✓6 month warranty on Material.';
    openGraph.description =
        'Indian Handy Crafts, black roman numeral wall clock, retro industrial wall clock, black and white wall clock, night vision with neon wall clock, black roman numeral clock, mustard yellow wall clock, timber wall clock, hexagon wall clock, best radium wall clock, dark wood wall clock';
    openGraph.type = 'website';
    openGraph.site_name = 'MadeInIndiaGifts.in';
    nextSeoProps.openGraph = openGraph;
    const [products, setProducts] = useState<any>(null);
    const breadCrumbList: IBreadCrumb[] = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: `Gift For ${query.slug}`,
        },
    ];

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            if (query) {
                axios
                    .get(`${suchazBaseUrl}/filterSections/${query.slug}`)
                    .then((res) => {
                        if (res.data) {
                            setProducts(res.data.data.docs);
                        }
                    })
                    .catch((error) => {
                        if (error.response) {
                            if (error.response.data) {
                            }
                            return error.response.data;
                        }
                    });
            } else {
            }
        }
        return () => (mounted = false);
    }, []);

    return (
        <>
            <NextSeo {...nextSeoProps} />
            <GiftPageWrapper>
                <BreadCrumb breadCrumbList={breadCrumbList} />
                <div className="ps-container">
                    <GiftPageLayoutWrapper>
                        <div className="row">
                            {products && products.length > 0 ? (
                                products.map((item) => (
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 " key={item.id}>
                                        {/* <Product product={item} /> */}
                                        <div key={item.id}>
                                            <ProductHome product={item} />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                                    <p>No products found.</p>
                                </div>
                            )}
                        </div>
                    </GiftPageLayoutWrapper>
                </div>
            </GiftPageWrapper>
        </>
    );
};

GiftPage.Layout = MainLayout;

export default GiftPage;
