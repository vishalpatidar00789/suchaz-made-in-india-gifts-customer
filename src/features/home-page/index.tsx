import React, { FC, useEffect } from 'react';
import HomeBanner from './home-banner';
import HomePageWrapper from './home-page.style';
import HomeProductDisplay from './home-products';
import { getCollections, getNewArrival, getCategories } from 'store/collection/action';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesData } from 'utilities/product-helper';
import HomeTopCategory from './home-top-category';
const HomePage: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewArrival('new_arrivals'));
        dispatch(getCollections('deal_of_the_day'));
        dispatch(getCategories('get_categories'));
    }, []);
    const { categories } = useSelector((state) => state.collection);
    const products = getCategoriesData(categories);
    return (
        <HomePageWrapper>
            <HomeBanner />
            <HomeProductDisplay collectionSlug="new_arrivals" />
            <HomeProductDisplay collectionSlug="deal_of_the_day" />
            {products &&
                products.map((categoryProducts) => (
                    <HomeProductDisplay
                        key={categoryProducts.id}
                        categoryProducts={categoryProducts}
                        collectionSlug="individual_category"
                    />
                ))}
            <HomeTopCategory />
        </HomePageWrapper>
    );
};

export default HomePage;
