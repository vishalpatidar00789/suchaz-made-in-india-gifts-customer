import React, { FC, useState, useEffect } from 'react';
import HomeProductsWrapper, {
    HomeProductsSectionWrapper,
    HomeProductsContainer,
    HomeProductsSectionHeader,
    HomeProductsSectionHeaderBlock,
    HomeProductsSectionHeaderBlockLeft,
    HomeProductsSectionHeaderBlockRight,
    HomeProductsSectionContent,
    HomeProductsSectionLinks,
} from './home-products.style';
import { useSelector } from 'react-redux';
import { getProductData } from 'utilities/product-helper';
import Link from 'next/link';
import { carouselFullwidth } from 'utilities/carousel-helpers';
import Loader from 'components/loader';
import { HomeSlider } from 'components/carousel/arrow-button.style';
import ProductHome from 'features/product/product-home';
import Router from 'next/router';
type HomeProductDisplayProps = {
    collectionSlug?: string;
    categoryProducts?: any;
};
const HomeProductDisplay: FC<HomeProductDisplayProps> = ({ collectionSlug, categoryProducts }) => {
    const { newarrivals, collections } = useSelector((state) => state.collection);
    const [displayProducts, setDisplayProducts] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);
    const [items, setItems] = useState<any>(null);
    const [currentCollection, setCurrentCollection] = useState<string>('');
    let productSectionItems;
    productSectionItems = <Loader type={'multi-slide-loader'} loading={loading} />;
    let products;
    let title;
    let viewAllLink;
    switch (collectionSlug) {
        case 'new_arrivals':
            products = getProductData(newarrivals);
            title = 'New Arrival';
            viewAllLink = '/gifts?by=New Arrival';
            break;
        case 'deal_of_the_day':
            products = getProductData(collections);
            title = 'Deal of the day';
            viewAllLink = '/gifts?by=Deal of the day&id=&sortBy=offer';
            break;
        case 'individual_category':
            if (categoryProducts) {
                title = categoryProducts.title;
            }
            break;
        default:
            products = getProductData(newarrivals);
            title = 'New Arrival';
            viewAllLink = '/gifts?by=New Arrival';
            break;
    }

    const handleChangeProduct = (e, id, slug) => {
        e.preventDefault();
        // const { categories } = this.props;
        // const items = getColletionBySubcat(categories, slug);
        // this.setState({
        //     currentCollection: slug
        //     // items: items,
        // });
        Router.push({
            pathname: '/gifts',
            query: {
                id: id,
                name: slug,
                by: 'Category',
            },
        });
    };

    const getCategoryBysubCat = (categories, currentCollection) => {
        if (categories.id == currentCollection) {
            return categories;
        }
        let filterCategory = categories.filter((c) => {
            return c.category_id === currentCollection;
        });
        return filterCategory;
    };

    let homeProducts;
    if (collectionSlug != 'individual_category') {
        homeProducts = products ? products : null;
    } else {
        if (categoryProducts) {
            if (currentCollection && currentCollection !== '') {
                homeProducts = getCategoryBysubCat(categoryProducts.category, currentCollection);
            } else {
                homeProducts = categoryProducts.category;
            }
        }
    }

    useEffect(() => {
        const isProductsAvailable = homeProducts && homeProducts.length > 0;
        // setTimeout(() => {
        //     setDisplayProducts(isProductsAvailable);
        //     setLoading(!isProductsAvailable);
        // }, 2000);
        setDisplayProducts(isProductsAvailable);
        setLoading(!isProductsAvailable);
    }, [homeProducts]);

    if (!loading) {
        if (homeProducts && homeProducts.length > 0) {
            productSectionItems = (
                <HomeSlider {...carouselFullwidth}>
                    {homeProducts.map((product) => (
                        <div key={product.id}>
                            <ProductHome product={product} />
                        </div>
                    ))}
                </HomeSlider>
            );
        }
    }

    return (
        <HomeProductsWrapper displayProducts>
            <HomeProductsContainer>
                <HomeProductsSectionWrapper>
                    <HomeProductsSectionHeader>
                        <HomeProductsSectionHeaderBlock>
                            <HomeProductsSectionHeaderBlockLeft>
                                <h3>{title}</h3>
                            </HomeProductsSectionHeaderBlockLeft>
                            <HomeProductsSectionHeaderBlockRight>
                                {/* <figure>
                                    <figcaption>End in:</figcaption>
                                    <CountDownSimple
                                        timeTillDate="12 31 2020, 6:00 am"
                                        timeFormat="MM DD YYYY, h:mm a"
                                    />
                                </figure> */}
                            </HomeProductsSectionHeaderBlockRight>
                        </HomeProductsSectionHeaderBlock>
                        <HomeProductsSectionHeaderBlock>
                            {collectionSlug != 'individual_category' ? (
                                <Link href={viewAllLink}>
                                    <a>View all </a>
                                </Link>
                            ) : (
                                <HomeProductsSectionLinks>
                                    {categoryProducts &&
                                        categoryProducts.subcat.map((link) => (
                                            <li
                                                className={currentCollection === link.id ? 'active' : ''}
                                                key={link.title}>
                                                <a onClick={(e) => handleChangeProduct(e, link._id, link.title)}>
                                                    {link.title}
                                                </a>
                                            </li>
                                        ))}
                                    <li className={currentCollection === categoryProducts.id ? 'active' : ''}>
                                        <a
                                            onClick={(e) =>
                                                handleChangeProduct(e, categoryProducts.id, categoryProducts.title)
                                            }>
                                            View All
                                        </a>
                                    </li>
                                </HomeProductsSectionLinks>
                            )}
                        </HomeProductsSectionHeaderBlock>
                    </HomeProductsSectionHeader>
                    <HomeProductsSectionContent>{productSectionItems}</HomeProductsSectionContent>
                </HomeProductsSectionWrapper>
            </HomeProductsContainer>
        </HomeProductsWrapper>
    );
};

export default HomeProductDisplay;
