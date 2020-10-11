import React, { useState, useEffect } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import Router, { useRouter } from 'next/router';
import { NextPage } from 'next';
import { OpenGraph } from 'next-seo/lib/types';
import GiftsPageWrapper, {
    GiftsPageFilterWrapper,
    GiftsPageFilterContainer,
    GiftsPageMobileFilterContainer,
    GiftsPageMobileDrawerWrapper,
    GiftsPageMobileDrawerHeader,
    GiftsPageMobileDrawerContent,
    GiftsPageMobileDrawerClose,
} from './gifts.style';
import MainLayout from 'layouts/main-layout';
import BreadCrumb from 'components/bread-crumb';
import { IBreadCrumb } from 'components/bread-crumb/types';
import FilterShop from 'features/shop/filter';
import { useDispatch } from 'react-redux';
import { getFilterCategory } from 'store/product/action';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { Drawer } from 'antd';
import LayoutShop from 'features/shop/layout';
type Page = NextPage & { Layout?: React.FC };

const GiftsPage: Page = () => {
    const dispatch = useDispatch();
    const { query } = useRouter();
    const breadcrumbTitle: string = query && query.name ? query.name.toString() : 'All';
    const pageTitle: string = `Gifts By ${query.by} | ${breadcrumbTitle}`;
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
    const [filterParams, setFilterParams] = useStateWithCallbackLazy<any>({
        category: '',
        by: '',
        name: 'All',
        minPrice: 0,
        maxPrice: 5000,
        minOffer: 0,
        maxOffer: 100,
        id: '',
        sortBy: 'latest',
        page: 1,
        limit: 20,
    });
    const [showfilterDrawer, setShowfilterDrawer] = useState<boolean>(false);
    const breadCrumbList: IBreadCrumb[] = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: `Gifts By ${query.by}`,
        },
    ];
    if (breadcrumbTitle) {
        breadCrumbList.push({ text: breadcrumbTitle });
    }

    const handleShowFilterDrawer = () => {
        setShowfilterDrawer(!showfilterDrawer);
    };

    const handleChangeRange = async (value) => {
        await setFilterParams({ ...filterParams, minPrice: value[0], maxPrice: value[1] }, (currentFilterState) => {});
        const { by, name, minPrice, maxPrice, minOffer, maxOffer, id, sortBy, page, limit } = filterParams;
        const params = {
            search: '',
            page: 1,
            limit: limit,
            category: id,
            name: name,
            sort: sortBy,
            price_min: value[0],
            price_max: value[1],
            offer_min: minOffer,
            offer_max: maxOffer,
        };
        dispatch(getFilterCategory(params));
        Router.push({
            pathname: '/gifts',
            query: {
                by: by,
                name: name,
                id: id,
                sortBy: sortBy,
                minPrice: value[0],
                maxPrice: value[1],
                minOffer: minOffer,
                maxOffer: maxOffer,
            },
        });
    };

    const handleChangeOffer = async (value) => {
        await setFilterParams({ ...filterParams, minOffer: value[0], maxOffer: value[1] }, (currentFilterState) => {});
        const { by, name, minPrice, maxPrice, minOffer, maxOffer, id, sortBy, page, limit } = filterParams;
        const params = {
            search: '',
            page: 1,
            limit: limit,
            category: id,
            id: id,
            sort: sortBy,
            name: name,
            price_min: minPrice,
            price_max: maxPrice,
            offer_min: value[0],
            offer_max: value[1],
        };
        dispatch(getFilterCategory(params));
        Router.push({
            pathname: '/gifts',
            query: {
                by: by,
                name: name,
                id: id,
                sortBy: sortBy,
                minPrice: minPrice,
                maxPrice: maxPrice,
                minOffer: value[0],
                maxOffer: value[1],
            },
        });
    };

    const handleFilterProductsByCategory = (e, slug, title) => {
        e.preventDefault();
        setFilterParams({ ...filterParams, category: slug, id: slug, name: title }, (currentFilterState) => {
            const { by, name, minPrice, maxPrice, minOffer, maxOffer, id, sortBy, page, limit } = currentFilterState;
            if (slug !== null && slug !== '') {
                console.log('name:::', name);
                const params = {
                    search: '',
                    page: 1,
                    limit: 20,
                    category: slug,
                    sort: sortBy,
                    id: slug,
                    name: name,
                    price_min: minPrice,
                    price_max: maxPrice,
                    offer_min: minOffer,
                    offer_max: maxOffer,
                };
                dispatch(getFilterCategory(params));
                Router.push({
                    pathname: '/gifts',
                    query: {
                        by: by,
                        name: name,
                        id: slug,
                        sortBy: sortBy,
                        minPrice: minPrice,
                        maxPrice: maxPrice,
                        minOffer: minOffer,
                        maxOffer: maxOffer,
                    },
                });
            } else {
                const params = {
                    search: '',
                    page: 1,
                    limit: 20,
                    category: slug,
                    sort: sortBy,
                    price_min: minPrice,
                    id: slug,
                    price_max: maxPrice,
                    offer_min: minOffer,
                    offer_max: maxOffer,
                };
                dispatch(getFilterCategory(params));
                Router.push({
                    pathname: '/gifts',
                    query: {
                        by: by,
                        name: name,
                        id: slug,
                        sortBy: sortBy,
                        minPrice: minPrice,
                        maxPrice: maxPrice,
                        minOffer: minOffer,
                        maxOffer: maxOffer,
                    },
                });
            }
        });
    };

    const handlePagination = (pageData) => {
        setFilterParams({ ...filterParams, page: pageData }, (currentFilterState) => {
            const { by, name, minPrice, maxPrice, minOffer, maxOffer, id, sortBy, page, limit } = currentFilterState;
            const params = {
                search: '',
                page: page,
                limit: limit,
                category: id,
                sort: sortBy,
                name: name,
                id: id,
                price_min: minPrice,
                price_max: maxPrice,
                offer_min: minOffer,
                offer_max: maxOffer,
            };
            dispatch(getFilterCategory(params));
            Router.push({
                pathname: '/gifts',
                query: {
                    by: by,
                    name: name,
                    id: id,
                    sortBy: sortBy,
                    minPrice: minPrice,
                    maxPrice: maxPrice,
                    minOffer: minOffer,
                    maxOffer: maxOffer,
                },
            });
        });
    };

    const handleSortBy = (event) => {
        // console.log(event.target.value);
        setFilterParams({ ...filterParams, sortBy: event.target.value }, (currentFilterState) => {
            const { by, name, minPrice, maxPrice, minOffer, maxOffer, id, sortBy, page, limit } = currentFilterState;
            const params = {
                search: '',
                page: 1,
                limit: limit,
                category: id,
                id: id,
                sort: sortBy,
                name: name,
                price_min: minPrice,
                price_max: maxPrice,
                offer_min: minOffer,
                offer_max: maxOffer,
            };
            dispatch(getFilterCategory(params));
            Router.push({
                pathname: '/gifts',
                query: {
                    by: by,
                    name: name,
                    id: id,
                    sortBy: sortBy,
                    minPrice: minPrice,
                    maxPrice: maxPrice,
                    minOffer: minOffer,
                    maxOffer: maxOffer,
                },
            });
        });
    };

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            const { by, name, minPrice, maxPrice, minOffer, maxOffer, id, sortBy, page, limit } = filterParams;
            if (query) {
                setFilterParams(
                    {
                        ...filterParams,
                        by: query.by ? query.by : by,
                        name: query.name ? query.name : name,
                        sortBy: query.sortBy ? query.sortBy : sortBy,
                        id: query.id ? query.id : id,
                        minPrice: query.minPrice ? query.minPrice : minPrice,
                        maxPrice: query.maxPrice ? query.maxPrice : maxPrice,
                        minOffer: query.minOffer ? query.minOffer : minOffer,
                        maxOffer: query.maxOffer ? query.maxOffer : maxOffer,
                    },
                    (currentFilterState) => {
                        const {
                            by,
                            name,
                            minPrice,
                            maxPrice,
                            minOffer,
                            maxOffer,
                            id,
                            sortBy,
                            page,
                            limit,
                        } = currentFilterState;
                        const params = {
                            search: '',
                            page: 1,
                            limit: limit,
                            sort: sortBy,
                            category: id,
                            name: name,
                            id: id,
                            price_min: minPrice,
                            price_max: maxPrice,
                            offer_min: minOffer,
                            offer_max: maxOffer,
                        };
                        dispatch(getFilterCategory(params));
                        Router.push({
                            pathname: '/gifts',
                            query: {
                                by: query.by ? query.by : by,
                                name: query.name ? query.name : name,
                                id: query.id ? query.id : id,
                                sortBy: query.sortBy ? query.sortBy : sortBy,
                                minPrice: query.minPrice ? query.minPrice : minPrice,
                                maxPrice: query.maxPrice ? query.maxPrice : maxPrice,
                                minOffer: query.minOffer ? query.minOffer : minOffer,
                                maxOffer: query.maxOffer ? query.maxOffer : maxOffer,
                            },
                        });
                    }
                );
            } else {
            }
        }
        return () => (mounted = false);
    }, []);

    return (
        <>
            <NextSeo {...nextSeoProps} />
            <GiftsPageWrapper>
                <BreadCrumb breadCrumbList={breadCrumbList} />
                <GiftsPageFilterWrapper>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <GiftsPageFilterContainer>
                                <FilterShop
                                    handleChangeRange={handleChangeRange}
                                    handleChangeOffer={handleChangeOffer}
                                    handleFilterProductsByCategory={handleFilterProductsByCategory}
                                    minPrice={filterParams.minPrice}
                                    maxPrice={filterParams.maxPrice}
                                    minOffer={filterParams.minOffer}
                                    maxOffer={filterParams.maxOffer}
                                />
                            </GiftsPageFilterContainer>
                            <GiftsPageMobileFilterContainer>
                                <button className="ps-btn filter-mobile-btn" onClick={handleShowFilterDrawer}>
                                    Filter
                                </button>
                                <Drawer
                                    placement="right"
                                    closable={false}
                                    onClose={handleShowFilterDrawer}
                                    visible={showfilterDrawer}>
                                    <GiftsPageMobileDrawerWrapper>
                                        <GiftsPageMobileDrawerHeader>
                                            <h3>Shop Filter</h3>
                                            <GiftsPageMobileDrawerClose onClick={handleShowFilterDrawer}>
                                                <i className="icon-cross"></i>
                                            </GiftsPageMobileDrawerClose>
                                        </GiftsPageMobileDrawerHeader>
                                        <GiftsPageMobileDrawerContent>
                                            <FilterShop
                                                handleChangeRange={handleChangeRange}
                                                handleChangeOffer={handleChangeOffer}
                                                handleFilterProductsByCategory={handleFilterProductsByCategory}
                                                minPrice={filterParams.minPrice}
                                                maxPrice={filterParams.maxPrice}
                                                minOffer={filterParams.minOffer}
                                                maxOffer={filterParams.maxOffer}
                                            />
                                        </GiftsPageMobileDrawerContent>
                                    </GiftsPageMobileDrawerWrapper>
                                </Drawer>
                            </GiftsPageMobileFilterContainer>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                            <LayoutShop
                                handlePagination={handlePagination}
                                handleSortBy={handleSortBy}
                                sortBy={filterParams.sortBy}
                                page={filterParams.page}
                                limit={filterParams.limit}
                            />
                        </div>
                    </div>
                </GiftsPageFilterWrapper>
            </GiftsPageWrapper>
        </>
    );
};

GiftsPage.Layout = MainLayout;

export default GiftsPage;
